"use client";

import { useEffect, useRef, useState } from "react";
import SocialNetworks from "../_components/social";
import Title from "../_components/title";
import Link from "next/link";
import { CheckIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import Script from "next/script";
import ReCAPTCHA from "react-google-recaptcha";


export default function Contacto() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");
	const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
	const [recaptchaWidgetId, setRecaptchaWidgetId] = useState<number | null>(
		null
	);
    const recaptchaContainerRef = useRef<HTMLDivElement>(null);
    // Use Google test site key in development if none provided
    const TEST_SITE_KEY_V2 = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
    const siteKey = (process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ||
        (process.env.NODE_ENV !== "production" ? TEST_SITE_KEY_V2 : undefined)) as
        | string
        | undefined;

	const handleRecaptchaVerify = (token: string) => {
		setRecaptchaToken(token);
	};

	// const renderRecaptcha = () => {
	//   if (!siteKey) return;
	//   if (!window.grecaptcha) return;
	//   if (!recaptchaContainerRef.current) return;
	//   if (recaptchaWidgetId !== null) return; // already rendered

	//   const id = window.grecaptcha.render(recaptchaContainerRef.current, {
	//     sitekey: siteKey,
	//     callback: handleRecaptchaVerify,
	//     "expired-callback": () => setRecaptchaToken(null),
	//     "error-callback": () => setRecaptchaToken(null),
	//   });
	//   setRecaptchaWidgetId(id);
	// };

	// useEffect(() => {
	//   // Try rendering in case the script is already present
	//   renderRecaptcha();
	//   // eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [siteKey]);
	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!recaptchaToken) {
			alert("Por favor, verifica el reCAPTCHA antes de enviar.");
			return;
		}
		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					name,
					email,
					phone,
					subject,
					message,
					recaptchaToken,
				}),
			});
			const data = await response.json();
			if (response.ok && data?.success) {
				alert("Mensaje enviado correctamente.");
				// Reset form
				setName("");
				setEmail("");
				setPhone("");
				setSubject("");
				setMessage("");
				setIsVerified(false);
				if (recaptchaRef.current) {
					recaptchaRef.current.reset();
				}
			} else {
				console.error("Fallo al enviar:", data);
				alert("No se pudo enviar el mensaje. Intenta de nuevo.");
			}
		} catch (error) {
			console.error("Error:", error);
			alert("Ocurrió un error al enviar el mensaje.");
		}

		// Reset reCAPTCHA and form after attempt
		// if (recaptchaWidgetId !== null && window.grecaptcha) {
		// 	window.grecaptcha.reset(recaptchaWidgetId);
		// }
		setRecaptchaToken(null);


	};

	const recaptchaRef = useRef<ReCAPTCHA>(null);
	const [isVerified, setIsVerified] = useState(false);

    async function handleCaptchaSubmission(token: string | null) {
        try {
            if (token) {
                const res = await fetch("/api/recaptcha", {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ token }),
                });
                const data = await res.json();
                setIsVerified(Boolean(data?.success));
            }
        } catch (e) {
            setIsVerified(false);
        }
    }

    const handleChange = (token: string | null) => {
        setRecaptchaToken(token);
        handleCaptchaSubmission(token);
    };

	function handleExpired() {
		setIsVerified(false);
	}
	return (
		<>
			{/* Hero Section */}
			<Title>Contacto</Title>
			{/* Contact Section */}
			<section className="py-16 bg-white">
				<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
					{/* Contact Info */}
					<div>
						<h3 className="text-sm text-green-500 font-semibold uppercase mb-2">
							SMART PANEL
						</h3>
						<h2 className="text-2xl md:text-3xl font-bold mb-4">Contáctanos</h2>
						<p className="mb-2 text-green-500 font-semibold">
							Atención a clientes:
						</p>
						<div>
							<Link href="tel:+521234567890">
								{" "}
								<PhoneIcon className="inline mr-2 text-green-500 size-4" /> +52
								123 456 7890
							</Link>
						</div>
						<p className="mb-4">
							<Link href="mailto:atencionaclientes1@smartpanel.mx">
								{" "}
								<EnvelopeIcon className="inline mr-2 text-green-500 size-4" />{" "}
								atencionaclientes1@smartpanel.mx
							</Link>
						</p>
						<p className="mb-2 font-semibold">Planta</p>
						<p className="mb-4 text-gray-700">
							Fracción de la Parcela 9 No. 60, int. 22Z, Praderas de los
							Ángeles, Querétaro, CP. 76908
						</p>
						<p className="font-semibold mb-2">Síguenos en Redes Sociales</p>
						<div>
							<SocialNetworks className="text-gray-800" />
						</div>
					</div>
					{/* Contact Form */}
					<div className="bg-gray-50 p-6 rounded-md shadow-md">
						<h3 className="text-lg font-semibold mb-4">Envía un mensaje</h3>
						<form className="space-y-4" onSubmit={onSubmit}>
							<input
								type="text"
								placeholder="Nombre*"
								className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
							<div className="grid grid-cols-2 gap-4">
								<input
									type="email"
									placeholder="Email*"
									className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
								<input
									type="text"
									placeholder="Teléfono*"
									className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white"
									value={phone}
									onChange={(e) => setPhone(e.target.value)}
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
							/>
                        {/* reCAPTCHA v2 checkbox */
                        }
                        <ReCAPTCHA
                            sitekey={siteKey || ""}
                            ref={recaptchaRef}
                            onChange={handleChange}
                            onExpired={handleExpired}
                        />
                        {!siteKey ? (
                            <p className="text-sm text-red-500">
                                Falta configurar NEXT_PUBLIC_RECAPTCHA_SITE_KEY
                            </p>
                        ) : null}
                        <button
                            type="submit"
                            className="bg-green-500 hover:bg-green-500 text-white px-6 py-2 rounded-md font-semibold"
                            >
                            ENVIAR <i className="fas fa-arrow-right ml-2" />
                        </button>
						</form>
					</div>
				</div>
			</section>
			{/* Map Embed */}
			<section className="w-full">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7472.557971605987!2d-100.504661!3d20.535763!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d34e5fe6d98935%3A0xe4cca919c1916e4!2sSMART%20PANEL%20S.A.%20DE%20C.V.%20-%20MULTIPANEL%2C%20MULTYPANEL%20Y%20MULTIPANEL%20PARA%20TECHO!5e0!3m2!1ses-419!2smx!4v1753409220867!5m2!1ses-419!2smx"
					width="100%"
					height={400}
					allowFullScreen
					loading="lazy"
					className="border-0"
					referrerPolicy="no-referrer-when-downgrade"
				/>
			</section>

			{/* Load reCAPTCHA script once the page is interactive */}
			{/* {siteKey ? (
				<Script
					src="https://www.google.com/recaptcha/api.js?render=explicit"
					strategy="afterInteractive"
					onLoad={renderRecaptcha}
				/>
			) : null} */}
		</>
	);
}
