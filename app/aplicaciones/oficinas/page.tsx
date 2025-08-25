import CTA from "@/app/_components/cta";
import Gallery from "@/app/_components/gallery";
import Title from "@/app/_components/title";
import { Check } from "lucide-react";
import Link from "next/link";

const info = {
	title: "Oficinas",
	description:
		"El Panel SP es una solución ideal para la construcción de oficinas funcionales que requieren rapidez de instalación, eficiencia energética y una imagen profesional. Gracias a su diseño modular y su composición con núcleo de EPS, permite crear espacios laborales con alto rendimiento térmico y acústico, ideales para entornos productivos.",
	cta: "Cotiza Ahora",
	image: "/smart-panel-aplicacion-nave-industrial-3.webp",
	advantageTitle: "Ventajas técnicas del sistema:",
	adaventages: [
		"Aislamiento térmico eficiente: el EPS ofrece baja conductividad térmica, reduciendo significativamente las pérdidas de energía y mejorando el confort interior.",
		"Alta resistencia mecánica: paneles con gran rigidez estructural, ideales para cubiertas y cerramientos en entornos industriales exigentes.",
		"Ligereza y facilidad de montaje: disminuye tiempos de instalación y costos de mano de obra, reduciendo la carga sobre la estructura.",
		"Excelente comportamiento frente a la humedad y agentes químicos: adecuado para ambientes de alta demanda.",
		"Mantenimiento mínimo y larga vida útil: estructura pensada para maximizar la durabilidad operativa del espacio construido.",
	],
	section: {
		text: "El panel SP es totalmente compatible con lámina acrílica translúcida tipo R-101, lo que permite mejorar la iluminación natural en naves industriales y reducir significativamente el consumo de energía eléctrica durante el día, optimizando el rendimiento y la eficiencia operativa del espacio.",
		image: "/smart_panel-2.webp",
	},
	gallery: [
		{
			src: "/smart-panel-panel-para-naves-industriales-img-01.webp",
			alt: "Panel SmartPanel instalado en nave industrial",
			title: "Nave Industrial con Paneles SmartPanel",
		},
		{
			src: "/smart-panel-panel-para-naves-industriales-img-04.webp",
			alt: "Vista interior de nave industrial con paneles SmartPanel",
			title: "Interior de Nave Industrial con Paneles SmartPanel",
		},
		{
			src: "/smart-panel-panel-para-naves-industriales-img-05.webp",
			alt: "Fachada de nave industrial con paneles SmartPanel",
			title: "Fachada de Nave Industrial con Paneles SmartPanel",
		}
	],
};

export default function NavesIndustriales() {
	return (
		<>
			{/* Hero Section */}
			<Title>{info.title}</Title>
			{/* Description */}
			<section className="bg-white py-16">
				<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">
					<div>
						<p className="text-gray-700 text-lg leading-relaxed mb-6">
							{info.description}
						</p>
						<Link
							href="/contacto"
							className="bg-green-500 hover:bg-green-500 text-white px-6 py-2 rounded-md font-semibold inline-flex items-center"
						>
							<i className="fas fa-pen mr-2" /> Cotiza Ahora
						</Link>
					</div>
					<img
						src={info.image}
						alt="Nave industrial con fachada de paneles SmartPanel"
						className="rounded-md shadow"
					/>
				</div>
			</section>
			{/* Technical Advantages */}
			<section
				className="relative bg-cover bg-center text-white py-20"
				style={{
					backgroundImage:
						'url("https://res.cloudinary.com/dbl4j1i1f/image/upload/v1754513759/background_bwllu0.jpg")',
				}}
			>
				<div className="absolute inset-0" />
				<div className="relative z-10 max-w-6xl mx-auto px-6">
					<div className="grid md:grid-cols-2 gap-10">
						<div>
							<h2 className="text-2xl md:text-3xl font-bold mb-6">
								{info.advantageTitle}
							</h2>
							<ul>
								{info.adaventages.map((advantage, index) => (
									<li key={index} className="mb-4 flex items-start space-x-2">
										<div className="bg-green-500 text-white flex items-center size-4 justify-center rounded-full">
											<Check className="size-3" />
										</div>
										<p className="flex-1">{advantage}</p>
									</li>
								))}
							</ul>

							<div className="mt-8">
								<Link
									href="/contacto"
									className="bg-green-500 hover:bg-green-500 px-6 py-2 rounded-md font-semibold inline-flex items-center"
								>
									Contáctanos
								</Link>
							</div>
						</div>
						<div className="flex justify-center items-center">
							<img
								src="/smart-panel-aplicacion-nave-industrial-2-300x300.webp"
								alt="Panel SmartPanel instalado en nave industrial"
								className="rounded-full shadow size-60"
							/>
						</div>
					</div>
				</div>
			</section>
			{/* Natural Lighting Section */}
			<section className="bg-white py-16">
				<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 items-center">
					<div>
						<p className="text-gray-700 text-lg mb-4">
							{info.section.text}
						</p>
						<p className="text-green-500 font-semibold text-lg mb-4">
							<i className="fas fa-phone-alt mr-2" /> +52 1 56 1019 7622
						</p>
					</div>
					<img
						src={info.section.image}
						alt="Panel acrílico translúcido instalado en techo industrial"
						className="rounded-md shadow"
					/>
				</div>
			</section>
			{/* Image Gallery */}
			<section className="py-16 bg-white max-w-6xl mx-auto px-6">
				<Gallery images={info.gallery} />
			</section>
			{/* CTA Bottom */}
			<CTA />
		</>
	);
}
