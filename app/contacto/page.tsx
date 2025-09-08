import SocialNetworks from "../_components/social";
import Title from "../_components/title";
import Link from "next/link";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import ContactForm from "./form";

export default function Contacto() {
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
						<ContactForm />
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
