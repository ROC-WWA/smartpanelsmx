import Link from "next/link";
import { ContactButton } from "./contact-button";

const CTA = () => {
	return (
		<section
			className="relative py-24 bg-cover bg-center text-white"
			style={{
				backgroundImage: 'url("https://res.cloudinary.com/dbl4j1i1f/image/upload/v1754513835/smart-panel-panel-techo-banner_zwixhl.webp")',
			}}
		>
			<div className="absolute inset-0" 
			style={{backgroundColor: "rgba(0, 0, 0, 0.7)"}}
			/>
			<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
				<h2 className="text-3xl font-bold mb-4">
					¿Necesitas una cotización o asesoría técnica?
				</h2>
				<p className="mb-6">
					Contáctanos hoy y recibe atención personalizada de nuestros expertos. En Smart Panel, te ayudamos a elegir la mejor solución para tu proyecto, ya sea un panel para muro exterior, una caseta prefabricada o una nave completa.
				</p>
				<div className="flex justify-center">
					<ContactButton />
				</div>
			</div>
		</section>
	);
};

export default CTA;
