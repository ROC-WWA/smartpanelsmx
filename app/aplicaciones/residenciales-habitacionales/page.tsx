"use client";
import CallUs from "@/app/_components/callus";
import CTA from "@/app/_components/cta";
import Gallery from "@/app/_components/gallery";
import ImageHeader from "@/app/_components/image-header";
import Title from "@/app/_components/title";
import { Check } from "lucide-react";
import { CldImage } from "next-cloudinary";
import Link from "next/link";

const info = {
	title: "Residenciales Habitacionales",
	description:
		"Construye tu hogar con inteligencia. Utilizamos paneles SP, una solución moderna, resistente y energéticamente eficiente para casas habitación y desarrollos residenciales.",
	cta: "Cotiza Ahora",
	image: "/smart-panel-panel-para-residencias-habitacionales-img-01.webp",
	advantageTitle: "Ventajas para tu vivienda:",
	adaventages: [
		"Aislamiento térmico superior: Mantiene temperaturas estables en el interior, reduciendo el consumo de energía para climatización y mejorando el confort diario.",
		"Construcción rápida y limpia: El sistema modular permite reducir los tiempos de obra hasta un 50% en comparación con métodos tradicionales, con mínima generación de residuos.",
		"Mayor resistencia estructural y menor peso: Paneles con excelente capacidad de carga, ideales para zonas urbanas, rurales o de difícil acceso.",
		"Durabilidad y bajo mantenimiento: Materiales resistentes a la humedad, al envejecimiento y a plagas, con larga vida útil.",
		"Diseño flexible y adaptabilidad arquitectónica: Perfecto para proyectos personalizados o desarrollos en serie, con múltiples acabados y estilos.",
	],
	section: {
		text: "El panel SP es totalmente compatible con lámina acrílica translúcida tipo R-101, lo que permite mejorar la iluminación natural en naves industriales y reducir significativamente el consumo de energía eléctrica durante el día, optimizando el rendimiento y la eficiencia operativa del espacio.",
		image: "/smart_panel-2.webp",
	},
	gallery: [
		{
			src: "/smart-panel-panel-para-residencias-habitacionales-img-03.webp",
			alt: "Panel SmartPanel instalado en residencia habitacional",
			title: "Residencia Habitacional con Paneles SmartPanel",
		},
		{
			src: "/smart-panel-panel-para-residencias-habitacionales-img-02.webp",
			alt: "Residencia habitacional con paneles SmartPanel",
			title: "Residencia Habitacional con Paneles SmartPanel",
		}
	],
};

export default function NavesIndustriales() {
	return (
		<>
			{/* Hero Section */}
			<ImageHeader title={info.title} backgroundImage={"https://res.cloudinary.com/dbl4j1i1f/image/upload/v1754513880/smart-panel.banner-aplicaciones-residenciales-scaled_t8zans.png"} />
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
							<CldImage
								src="smart-panel-aplicacion-residencial-2-300x300_otvri2"
								alt="Panel SmartPanel instalado en residencia habitacional"
								width={300}
								height={300}
								className="rounded-full shadow size-80"
							/>
						</div>
					</div>
				</div>
			</section>
			{/* Natural Lighting Section */}
			{/* Image Gallery */}
			<section className="py-16 bg-white max-w-6xl mx-auto px-6">
				<Gallery images={info.gallery} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6" />
			</section>
			{/* CTA Bottom */}
			<CTA />
		</>
	);
}
