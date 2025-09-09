import CTA from "@/app/_components/cta";
import Gallery from "@/app/_components/gallery";
import ImageHeader from "@/app/_components/image-header";
import Title from "@/app/_components/title";
import { Check } from "lucide-react";
import Link from "next/link";

const info = {
	title: "Techos",
	description:<>
  <h2>Techos con panel tipo sándwich SP: aislamiento, resistencia y estilo en un solo sistema.</h2>
  <p>Nuestros paneles con núcleo de poliestireno expandido (EPS) son la solución ideal para techos que requieren eficiencia térmica, montaje rápido y alto desempeño.</p>
  <p>Su estructura con doble lámina metálica y núcleo aislante proporciona gran durabilidad, resistencia estructural y protección frente a la intemperie, la humedad y la corrosión. Además de su funcionalidad, aportan un acabado limpio y moderno que mejora la estética de cualquier construcción.</p>
  <ul className="space-y-2 font-medium">
							<li className="flex items-center gap-2">
								<div className="bg-green-500 text-white flex items-center size-6 justify-center rounded">
									<Check className="size-4" />
								</div>
								Livianos y fáciles de montar
							</li>
							<li className="flex items-center gap-2">
								<div className="bg-green-500 text-white flex items-center size-6 justify-center rounded">
									<Check className="size-4" />
								</div>{" "}
								Altamente aislantes (frío y calor)

							</li>
							<li className="flex items-center gap-2">
								<div className="bg-green-500 text-white flex items-center size-6 justify-center rounded">
									<Check className="size-4" />
								</div>{" "}
								Resistentes al paso del tiempo y la intemperie
							</li>
							<li className="flex items-center gap-2">
								<div className="bg-green-500 text-white flex items-center size-6 justify-center rounded">
									<Check className="size-4" />
								</div>{" "}
								Disponibles en varios espesores y longitudes a medida
							</li>
						</ul>
  </>,
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
			<ImageHeader title={info.title} backgroundImage={"https://res.cloudinary.com/dbl4j1i1f/image/upload/v1754513878/smart-panel.banner-aplicaciones-oficinas-scaled_gkvyfi.png"} />
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
