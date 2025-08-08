'use client'
import Link from "next/link";
import Showcase from "../_components/interactive-product-showcase";
import { CldImage } from "next-cloudinary";

export default function PanelTecho() {
	return (
		<>
			{/* Title Bar */}
			<section className="bg-green-500 text-white py-10 text-center">
				<h1 className="text-3xl font-bold">Panel TECHO SP</h1>
			</section>
			{/* Characteristics */}
			<section className="py-16 bg-white">
				<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
					<div>
						<h2 className="text-2xl font-bold mb-4">Características</h2>
						<p className="text-gray-600 mb-4">
							Panel prefabricado tipo sándwich, diseñado como sistema
							constructivo modular con 2 láminas de acero galvanizado calibre 26
							prepintado y núcleo de poliestireno expandido (EPS). Cuenta con
							ensamble tipo hembra-macho Sig-Lock para una instalación precisa y
							firme.
						</p>
						<p className="text-gray-600 mb-4">
							Su diseño con 4 crestas superiores y una adicional para traslape
							transversal mejora la resistencia estructural y refuerza la
							hermeticidad del sistema.
						</p>
						<div className="space-x-2">
							<Link
								href="https://drive.google.com/file/d/1Y3lrnpnoYQbPGqFwMpaAtMUXXpHX_1CC/view"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-block bg-neutral-500 hover:bg-green-600 text-white px-6 py-2 rounded-md font-semibold"
							>
								Catálogo
							</Link>
							<Link
								href="https://drive.google.com/file/d/1BH4XBntndkgkPScUbG7HOQFtS3BHt6Bg/view?usp=drive_link"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-block bg-neutral-500 hover:bg-green-600 text-white px-6 py-2 rounded-md font-semibold"
							>
								Ficha Técnica
							</Link>
						</div>
						<p className="text-gray-600 mb-2">🎨 Colores disponibles: Blanco</p>
						<p className="text-gray-600 mb-4">📐 Espesores: de 1.5” a 10”</p>
						<Link
							href="#"
							className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md font-semibold"
						>
							Cotiza Ahora
						</Link>
					</div>
					<div>
						<Showcase />
					</div>
				</div>
			</section>
			{/* Accessories */}
			<section className="bg-gray-50 py-16">
				<div className="max-w-6xl mx-auto px-6 text-center">
					<h2 className="text-3xl font-bold mb-6">Accesorios</h2>
					<p className="text-gray-600 max-w-3xl mx-auto mb-10">
						Componentes de fijación y acabado elaborados en lámina galvanizada
						cal. 26 prepintada, diseñados específicamente para facilitar el
						montaje correcto de paneles Techo SP. Aportan sellado, estabilidad
						estructural y una terminación visual uniforme.
					</p>
					<p className="text-gray-600 font-semibold mb-6">
						Colores disponibles: Blanco
					</p>
					<div className="grid md:grid-cols-3 gap-10 text-center mb-10">
						{/* Canal U */}
						<div className="p-6 rounded-md">
							<CldImage
								className="mx-auto mb-4 bg-neutral-100 rounded-full p-4"
								src="smart-panel-accesorio-tapagotero_c2cajx"
								width="800"
								alt="Smart Panel Tapagotero"
								height="800"
								crop={{
									type: "fit",
									source: true,
								}}
							/>
							<h4 className="font-bold text-lg mb-2">TAPAGOTERO</h4>
							<p className="text-gray-600 text-sm">
								Cubrir el EPS en el perímetro de la techumbre, proporcionando un
								acabado estético.
							</p>
						</div>
						{/* Ángulo Interior */}
						<div className="p-6 rounded-md">
							<CldImage
								className="mx-auto mb-4 bg-neutral-100 rounded-full p-4"
								src="smart-panel-accesorio-botaguas_lirkxa"
								width="800"
								alt="Smart Panel Botaguas"
								height="800"
								crop={{
									type: "fit",
									source: true,
								}}
							/>
							<h4 className="font-bold text-lg mb-2">BOTAGUAS</h4>
							<p className="text-gray-600 text-sm">
								Cubrir la unión entre colindancias de muros y panel SP y evitar
								filtraciones.
							</p>
						</div>
						{/* Ángulo Exterior */}
						<div className="p-6 rounded-md">
							<CldImage
								className="mx-auto mb-4 bg-neutral-100 rounded-full p-4"
								src="smart-panel-accesorio-caballete_esfoo5"
								width="800"
								alt="Smart Panel Caballette"
								height="800"
								crop={{
									type: "fit",
									source: true,
								}}
							/>
							<h4 className="font-bold text-lg mb-2">CABALLETE</h4>
							<p className="text-gray-600 text-sm">
								Se utiliza en la unión exterior de la techumbre con caída a dos
								aguas, proporcionando un acabado estético.
							</p>
						</div>
					</div>
					<Link
						href="tel:5610197622"
						className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md font-semibold mt-4 inline-block"
					>
						<i className="fas fa-phone-alt mr-2" /> Llama ahora: 56 1019 7622
					</Link>
				</div>
			</section>
			{/* CTA Section */}
			<section
				className="relative py-24 bg-cover bg-center text-white"
				style={{
					backgroundImage: 'url("/Smart-Panel-Banner-05.webp")',
				}}
			>
				<div className="absolute inset-0" />
				<div className="relative z-10 max-w-4xl mx-auto px-6 text-center ">
					<h2 className="text-3xl font-bold mb-4">
Cotiza tu Panel Techo con Expertos
					</h2>
					<p className="mb-6">
En Smart Panel México trabajamos con proyectos en todo el país. Ofrecemos paneles sandwich para techos listos para instalar, con asesoría técnica, entrega rápida y calidad garantizada.

					</p>
          <p className="mb-6">
            Solicita tu cotización ahora y asegura la mejor solución térmica y estructural para tu construcción.
          </p>
					<Link
						href="/contacto"
						className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md font-semibold"
					>
						Contáctanos
					</Link>
				</div>
			</section>
		</>
	);
}
