"use client";
import CTA from "@/app/_components/cta";
import Gallery from "@/app/_components/gallery";
import ImageHeader from "@/app/_components/image-header";
import Title from "@/app/_components/title";
import { Check } from "lucide-react";
import { CldImage } from "next-cloudinary";
import Link from "next/link";

const info = {
	title: "Casetas",
	description:<>
  <p>Las casetas construidas con panel tipo sándwich son una solución práctica y eficiente para múltiples aplicaciones: desde casetas de vigilancia y control de acceso, hasta módulos de obra, oficinas móviles o puntos de atención temporales.</p>
  <p>Gracias a su diseño modular y ligereza, permiten una instalación ágil, limpia y sin complicaciones, optimizando tiempos y costos. Además, ofrecen un excelente aislamiento térmico y acústico, proporcionando confort en cualquier entorno.</p>
  </>,
	cta: "Cotiza Ahora",
	image: "https://res.cloudinary.com/dbl4j1i1f/image/upload/v1754513794/smart-panel-aplicaciones-casetas-1_iz6ann.webp",
	advantageTitle: "Construye techos inteligentes con panel SP.:",
	adaventages: [
		"Instalación rápida y traslado sencillo",
		"Aislamiento térmico y acústico",
		"Alta durabilidad con bajo mantenimiento",
		"Acabado limpio y profesional",
    "Versatilidad de usos y configuraciones",
    "Ideal para espacios temporales o permanentes"
	],
	gallery: [
		{
			src: "https://res.cloudinary.com/dbl4j1i1f/image/upload/v1754513796/smart-panel-aplicaciones-casetas-4_iddzpp.webp",
			alt: "Instalación de paneles SmartPanel en Caseta",
			title: "Instalación de paneles SmartPanel en Caseta",
		},
		{
			src: "https://res.cloudinary.com/dbl4j1i1f/image/upload/v1754513795/smart-panel-aplicaciones-casetas-3_l8rmrr.webp",
			alt: "Instalación de paneles SmartPanel en Caseta",
			title: "Interior de Instalación de paneles SmartPanel en Caseta",
		},
	],
};

export default function NavesIndustriales() {
	return (
		<>
			{/* Hero Section */}
			<ImageHeader title={info.title} backgroundImage={"https://res.cloudinary.com/dbl4j1i1f/image/upload/v1754513876/smart-panel.banner-aplicaciones-casetas-scaled_ziadgq.png"} />
			{/* Description */}
			<section className="bg-white py-16">
				<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">
					<div>
						<div className="text-gray-700 text-lg leading-relaxed mb-6">
							{info.description}
						</div>
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
								src="smart-panel-aplicaciones-casetas-2-460x460_yzfe6a"
								alt="Panel SmartPanel instalado en residencia habitacional"
								width={300}
								height={300}
								className="rounded-full shadow size-80"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Image Gallery */}
			<section className="py-16 bg-white max-w-6xl mx-auto px-6">
				<Gallery images={info.gallery} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4" />
			</section>
			{/* CTA Bottom */}
			<CTA />
		</>
	);
}
