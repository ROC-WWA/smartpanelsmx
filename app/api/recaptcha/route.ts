export async function POST(request: Request) {
  try {
    const { token } = await request.json();

    if (!token) {
      return Response.json(
        { success: false, error: 'Missing token' },
        { status: 400 }
      );
    }

    const secret = process.env.RECAPTCHA_SECRET_KEY;

    if (!secret) {
      // In development, allow falling back to Google test keys usage
      if (process.env.NODE_ENV !== 'production') {
        return Response.json({ success: true, devBypass: true });
      }
      return Response.json(
        { success: false, error: 'RECAPTCHA_SECRET_KEY not configured' },
        { status: 500 }
      );
    }

    const params = new URLSearchParams();
    params.append('secret', secret);
    params.append('response', token);

    const verifyRes = await fetch(
      'https://www.google.com/recaptcha/api/siteverify',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params,
      }
    );

    const result = (await verifyRes.json()) as {
      success: boolean;
      challenge_ts?: string;
      hostname?: string;
      score?: number; // for v3
      'error-codes'?: string[];
    };

    if (!result.success) {
      return Response.json(
        { success: false, error: result['error-codes'] ?? 'verification_failed' },
        { status: 400 }
      );
    }

    return Response.json({ success: true, score: result.score });
  } catch (error) {
    return Response.json(
      { success: false, error: 'unexpected_error' },
      { status: 500 }
    );
  }
}

