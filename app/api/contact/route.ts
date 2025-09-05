import { Resend } from 'resend';

type ContactBody = {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  recaptchaToken?: string | null;
};

async function verifyRecaptcha(token: string | null | undefined, req: Request) {
  if (!token) return { success: false, error: 'missing_token' } as const;

  const secret = process.env.RECAPTCHA_SECRET_KEY;

  // Allow bypass in development if not configured
  if (!secret && process.env.NODE_ENV !== 'production') {
    return { success: true, devBypass: true } as const;
  }

  if (!secret) {
    return { success: false, error: 'recaptcha_secret_not_configured' } as const;
  }

  const params = new URLSearchParams();
  params.set('secret', secret);
  params.set('response', token);

  // Optional: include user's IP
  const ip = req.headers.get('x-forwarded-for') || undefined;
  if (ip) params.set('remoteip', ip);

  const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params,
  });

  const data = (await res.json()) as {
    success: boolean;
    hostname?: string;
    challenge_ts?: string;
    'error-codes'?: string[];
  };

  if (!data.success) {
    return { success: false, error: data['error-codes'] ?? 'verification_failed' } as const;
  }

  return { success: true } as const;
}

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactBody;
    const { name, email, phone, subject, message, recaptchaToken } = body;

    // Basic validation
    if (!name || !email || !message) {
      return Response.json(
        { success: false, error: 'missing_required_fields' },
        { status: 400 }
      );
    }

    const recaptcha = await verifyRecaptcha(recaptchaToken, request);
    if (!recaptcha.success) {
      return Response.json(
        { success: false, error: recaptcha.error },
        { status: 400 }
      );
    }

    const resend = getResend();
    if (!resend) {
      // In dev without Resend, just acknowledge success
      if (process.env.NODE_ENV !== 'production') {
        return Response.json({ success: true, devBypass: true });
      }
      return Response.json(
        { success: false, error: 'resend_not_configured' },
        { status: 500 }
      );
    }

    const from = process.env.CONTACT_FROM || 'Website <onboarding@resend.dev>';
    const to = process.env.CONTACT_TO || 'delivered@resend.dev';

    const text = [
      `Nuevo mensaje del formulario de contacto`,
      `Nombre: ${name}`,
      `Email: ${email}`,
      phone ? `Teléfono: ${phone}` : undefined,
      subject ? `Asunto: ${subject}` : undefined,
      '',
      message,
    ]
      .filter(Boolean)
      .join('\n');

    const { error } = await resend.emails.send({
      from,
      to,
      subject: subject || 'Nuevo mensaje de contacto',
      text,
      replyTo: email,
    });

    if (error) {
      return Response.json(
        { success: false, error: 'email_send_failed' },
        { status: 500 }
      );
    }

    return Response.json({ success: true });
  } catch (error) {
    return Response.json(
      { success: false, error: 'unexpected_error' },
      { status: 500 }
    );
  }
}

