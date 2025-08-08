import CTA from "@/app/_components/cta";
import Gallery from "@/app/_components/gallery";
import Title from "@/app/_components/title";
import { Check } from "lucide-react";
import Link from "next/link";

const info = {
	title: "Bodegas Almacenes",
	description:
		"Los paneles tipo sándwich son la opción ideal para construir bodegas y almacenes que exigen funcionalidad, resistencia y eficiencia energética. Gracias a su núcleo aislante y a sus dos caras de acero galvanizado, ofrecen un excelente desempeño térmico, acústico y estructural, lo que mejora las condiciones de almacenamiento y reduce los costos operativos. Su instalación rápida y sencilla permite optimizar tiempos de obra sin comprometer la calidad. Además, su durabilidad frente a factores climáticos y su bajo mantenimiento los convierten en una inversión inteligente a largo plazo.",
	cta: "Cotiza Ahora",
	image: "/smart-panel-panel-para-bodegas-almacenes-img04.webp",
	advantageTitle: "Ventajas destacadas:",
	adaventages: [
		"Sistema ligero de instalación rápida.",
		"Excelente relación costo-beneficio",
		"Aislamiento térmico para conservar productos sensibles.",
		"Acabado limpio y profesional.",
		"Aplicación versátil: muros perimetrales, cubiertas o divisiones internas.",
    "Solución moderna, funcional y segura.",
	],
	gallery: [
		{
			src: "/smart-panel-panel-para-bodegas-almacenes-img04.webp",
			alt: "Panel SmartPanel instalado en bodega prefabricada",
			title: "Bodega Prefabricada con Paneles SmartPanel",
		},
		{
			src: "/smart-panel-panel-para-bodegas-almacenes-img01.webp",
			alt: "Vista interior de de bodega prefabricada con paneles SmartPanel",
			title: "Interior de Bodega Prefabricada con Paneles SmartPanel",
		},
		{
			src: "/smart-panel-panel-para-bodegas-almacenes-img02.webp",
			alt: "Fachada de bodega prefabricada con paneles SmartPanel",
			title: "Fachada de Bodega Prefabricada con Paneles SmartPanel",
		},
    {
      src: "/smart-panel-panel-para-bodegas-almacenes-img03.webp",
      alt: "Panel SmartPanel instalado en bodega prefabricada",
      title: "Bodega Prefabricada con Paneles SmartPanel",
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
              <p>Perfectos para proyectos logísticos, industriales o comerciales que buscan velocidad, rendimiento y larga vida útil.</p>
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
