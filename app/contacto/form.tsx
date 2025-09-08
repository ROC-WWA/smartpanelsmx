"use client";

import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

type Props = {
  className?: string;
};

export default function ContactForm({ className }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [alertMsg, setAlertMsg] = useState<string | null>(null);
  const [alertType, setAlertType] = useState<"success" | "error" | null>(null);

  const recaptchaRef = useRef<ReCAPTCHA>(null);

  // Use Google test site key in development if none provided
  const TEST_SITE_KEY_V2 = "6LeJnbgrAAAAAKJuHHaTnwkQurJPGjfLfSuzU6UW";
  const siteKey = (process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ||
    (process.env.NODE_ENV !== "production" ? TEST_SITE_KEY_V2 : undefined)) as
    | string
    | undefined;

  function onCaptchaChange(token: string | null) {
    setRecaptchaToken(token);
  }

  function onCaptchaExpired() {
    setRecaptchaToken(null);
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setAlertMsg(null);
    setAlertType(null);

    // Honeypot check: if filled, silently succeed
    if (honeypot.trim().length > 0) {
      setAlertType("success");
      setAlertMsg("Mensaje enviado correctamente.");
      // Reset visible fields
      setName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
      if (recaptchaRef.current) recaptchaRef.current.reset();
      setRecaptchaToken(null);
      return;
    }

    if (!recaptchaToken) {
      setAlertType("error");
      setAlertMsg("Por favor, verifica el reCAPTCHA antes de enviar.");
      return;
    }

    try {
      setSubmitting(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          subject,
          message,
          recaptchaToken,
          honeypot,
        }),
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok && data?.success) {
        setAlertType("success");
        setAlertMsg("Mensaje enviado correctamente.");
        // Reset
        setName("");
        setEmail("");
        setPhone("");
        setSubject("");
        setMessage("");
        setHoneypot("");
        if (recaptchaRef.current) recaptchaRef.current.reset();
        setRecaptchaToken(null);
      } else {
        setAlertType("error");
        setAlertMsg("No se pudo enviar el mensaje. Intenta de nuevo.");
      }
    } catch (err) {
      setAlertType("error");
      setAlertMsg("Ocurrió un error al enviar el mensaje.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className={className}>
      <form className="space-y-4" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Nombre*"
          className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="email"
            placeholder="Email*"
            className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Teléfono*"
            className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <input
          type="text"
          placeholder="Asunto"
          className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <textarea
          rows={5}
          placeholder="Mensaje"
          className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        {/* Honeypot field (hidden from users, visible to bots) */}
        <div className="absolute left-[-9999px] top-auto w-px h-px overflow-hidden">
          <label htmlFor="company">Company</label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="off"
            tabIndex={-1}
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </div>

        {/* reCAPTCHA v2 checkbox */}
        <div>
          <ReCAPTCHA
            sitekey={siteKey || ""}
            ref={recaptchaRef}
            onChange={onCaptchaChange}
            onExpired={onCaptchaExpired}
          />
          {!siteKey ? (
            <p className="text-sm text-red-500 mt-1">
              Falta configurar NEXT_PUBLIC_RECAPTCHA_SITE_KEY
            </p>
          ) : null}
        </div>

        {alertMsg ? (
          <p
            className={
              alertType === "success"
                ? "text-sm text-green-600"
                : "text-sm text-red-600"
            }
          >
            {alertMsg}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={submitting}
          className="bg-green-500 hover:bg-green-600 disabled:opacity-60 text-white px-6 py-2 rounded-md font-semibold"
        >
          {submitting ? "Enviando..." : "ENVIAR"}
        </button>
      </form>
    </div>
  );
}
