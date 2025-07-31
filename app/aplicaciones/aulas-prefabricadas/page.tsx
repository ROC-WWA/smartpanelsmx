import CTA from "@/app/_components/cta";
import { Gallery } from "@/app/_components/gallery";
import Title from "@/app/_components/title";
import { Check } from "lucide-react";
import Link from "next/link";

const info = {
	title: "Aulas",
	description:
		"El panel sándwich SP, es una solución ideal para la construcción de aulas escolares, salones temporales, laboratorios y espacios educativos modulares, gracias a su practicidad, velocidad de montaje y excelente relación calidad-precio. Su diseño ligero y modular permite crear espacios seguros, funcionales y con un acabado estético limpio, reduciendo tiempos de ejecución y costos de obra. Es perfecto para proyectos educativos que requieren resultados inmediatos sin sacrificar confort ni durabilidad.",
	cta: "Cotiza Ahora",
	image: "/smart-panel-panel-para-residencias-habitacionales-img-01.webp",
	advantageTitle: "Ventajas clave:",
	adaventages: [
		"Fácil y rápida instalación",
		"Menor tiempo de ejecución",
		"Uso versátil en distintos tipos de proyectos",
		"Excelente relación calidad – precio",
		"Solución inmediata ante necesidades urgentes",
    "Ligereza estructural que facilita el montaje",
    "Diseño modular adaptable",
    "Acabado limpio y profesional"
	],
	section: {
		text: "El panel SP es totalmente compatible con lámina tipo R-101, lo que permite mejorar la iluminación natural en las aulas y reducir significativamente el consumo de energía eléctrica durante el día, optimizando el rendimiento y la eficiencia operativa del espacio.",
		image: "/smart-panel-panel-para-aulas-img-03.webp",
	},
	gallery: [
		{
			src: "/smart-panel-panel-para-aulas-img-04.webp",
			alt: "Aula Prefabricada con Panel SmartPanel",
			title: "Aula Prefabricada con Panel SmartPanel",
		},
		{
			src: "/smart-panel-panel-para-aulas-img-05.webp",
			alt: "Aula Prefabricada con Panel SmartPanel",
			title: "Aula Prefabricada con Panel SmartPanel",
		},
    {
      src: "/smart-panel-panel-para-aulas-img-01.webp",
      alt: "Aula Prefabricada con Panel SmartPanel",
      title: "Aula Prefabricada con Panel SmartPanel",
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
							href="#"
							className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md font-semibold inline-flex items-center"
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
						'url("/background.jpg")',
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
									className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded-md font-semibold inline-flex items-center"
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
						<p className="text-green-600 font-semibold text-lg mb-4">
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
