"use client"

import { useState } from "react";
import SocialNetworks from "../_components/social";
import Title from "../_components/title";
import Link from "next/link";
import { CheckIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";

export default function Contacto() {
	const [ name, setName ] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");
	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		
		const whatsappNumber = "5215610197622"; // Replace with actual WhatsApp number
		const whatsappMessage = `Hola, me gustaría contactar con ustedes.

*Nombre:* ${name}
*Email:* ${email}
*Teléfono:* ${phone}
*Asunto:* ${subject}
*Mensaje:* ${message}`;

		const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
		
		window.open(whatsappUrl, '_blank');
		
		// Reset form
		setName("");
		setEmail("");
		setPhone("");
		setSubject("");
		setMessage("");
	};
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
						<p className="mb-2 text-green-600 font-semibold">
							Atención a clientes:
						</p>
						<div>
								<Link href="tel:+521234567890">
									{" "}
									<PhoneIcon className="inline mr-2 text-green-500 size-4" /> +52 123 456
									7890
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
							<button
								type="submit"
								className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md font-semibold"
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
			
		</>
	);
}
