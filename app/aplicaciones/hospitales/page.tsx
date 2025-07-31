import CTA from "@/app/_components/cta";
import { Gallery } from "@/app/_components/gallery";
import Title from "@/app/_components/title";
import { Check } from "lucide-react";
import Link from "next/link";

const info = {
	title: "Hospitales",
	description:<>
  <p>Desarrollamos soluciones constructivas para hospitales, clínicas y centros de salud. Con nuestra tecnología que garantiza rapidez, eficiencia térmica y condiciones higiénicas óptimas para entornos sanitarios.
</p>

  </>,
	cta: "Cotiza Ahora",
	image: "/smart-panel-panel-para-hospitales-img-01.webp",
	advantageTitle: "Beneficios clave para entornos hospitalarios:",
	adaventages: [
		"Aislamiento térmico de alto rendimiento, ideal para mantener condiciones de confort y eficiencia energética en áreas sensibles como quirófanos, laboratorios y salas de recuperación.",
		"Superficies lisas y lavables, que facilitan la limpieza y el control de infecciones, cumpliendo con exigencias sanitarias.",
		"Montaje rápido y preciso, que permite reducir tiempos de obra y acelerar la puesta en operación de instalaciones críticas.",
		"Bajo peso estructural, que disminuye cargas sobre la cimentación sin comprometer la rigidez ni la estabilidad.",
    "Alta resistencia a la humedad, lo que prolonga la vida útil del edificio y minimiza el mantenimiento.",
	],
	gallery: [
		{
			src: "/smart-panel-panel-para-hospitales-img-01.webp",
			alt: "Instalación de paneles SmartPanel en hospitales",
			title: "Instalación de paneles SmartPanel en hospitales",
		},
		{
			src: "/smart-panel-panel-para-hospitales-img-03.webp",
			alt: "Instalación de paneles SmartPanel en hospitales",
			title: "Exterior de Instalación de paneles SmartPanel en hospitales",
		},
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
						<div className="text-gray-700 text-lg leading-relaxed mb-6">
							{info.description}
						</div>
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
								src="/smart-panel-panel-para-hospitales-img-02.webp"
								alt="Panel SmartPanel instalado en nave industrial"
								className="rounded-full shadow size-60 object-contain"
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
