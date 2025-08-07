import CTA from "@/app/_components/cta";
import Gallery from "@/app/_components/gallery";
import Title from "@/app/_components/title";
import { Check } from "lucide-react";
import Link from "next/link";

const info = {
	title: "Cámaras",
	description:
		"Los paneles tipo sándwich SP de poliestireno (EPS) son una solución eficiente y confiable para la construcción de cámaras de congelación, conservación y cuartos fríos industriales. Gracias a su alto poder aislante, permiten mantener temperaturas controladas con un menor consumo energético, lo que se traduce en ahorro operativo y una conservación óptima de productos sensibles.El espesor del panel varía según las temperaturas que el proyecto requiera, garantizando así un aislamiento adecuado para cada necesidad específica. Su sistema de ensamble tipo Sig-Lock asegura un cierre hermético que evita fugas térmicas, mejorando significativamente el rendimiento del sistema de refrigeración.Además, su diseño modular facilita una instalación rápida, precisa y segura, acelerando los tiempos de obra sin comprometer la calidad. Esto optimiza los procesos en aplicaciones industriales, alimenticias, farmacéuticas y logísticas.",
	cta: "Cotiza Ahora",
	image: "/smart-panel-aplicacion-nave-industrial-3.webp",
	advantageTitle: "Aplicaciones comunes:",
	adaventages: [
		"Cámaras de congelación",
		"Cámaras de conservación",
		"Cuartos fríos industriales.",
		"Áreas de refrigeración y almacenamiento controlado.",
	],
	gallery: [
		{
			src: "/smart-panel-panel-para-camaras-img-03.webp",
			alt: "Panel SmartPanel instalado en cámara de congelación",
			title: "Cámara de Congelación con Paneles SmartPanel",
		},
		{
			src: "/smart-panel-panel-para-camaras-img-04.webp",
			alt: "Vista interior de cámara de congelación con paneles SmartPanel",
			title: "Interior de Cámara de Congelación con Paneles SmartPanel",
		},
		{
			src: "/smart-panel-panel-para-camaras-img-05.webp",
			alt: "Vista interior de cámara de congelación con paneles SmartPanel",
			title: "Vista interior de cámara de Congelación con Paneles SmartPanel",
		},
    {
      src: "/smart-panel-panel-para-camaras-img-01.webp",
      alt: "Panel SmartPanel instalado en cámara de congelación",
      title: "Cámara de Congelación con Paneles SmartPanel",
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

			{/* Image Gallery */}
			<section className="py-16 bg-white max-w-6xl mx-auto px-6">
				<Gallery images={info.gallery} />
			</section>
			{/* CTA Bottom */}
			<CTA />
		</>
	);
}
