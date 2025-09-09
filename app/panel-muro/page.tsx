"use client";
import Link from "next/link";
import ShowcaseMuro from "../_components/panel-muro";
import { CldImage } from "next-cloudinary";
import { Palette, Ruler } from "lucide-react";
import CTA from "../_components/cta";

export default function PanelMuro() {
	return (
		<>
			{/* Title Bar */}
			<section className="bg-green-500 text-white py-10 text-center">
				<h1 className="text-3xl font-bold">Panel MURO SP / PLAFÓN</h1>
			</section>
			{/* Characteristics */}
			<section
				className="py-16 bg-white"
				style={{
					backgroundImage:
						'url("https://res.cloudinary.com/dbl4j1i1f/image/upload/v1754513760/hero-15-bg-mask_mxdzzx.png")',
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
					<div>
						<h2 className="text-2xl font-bold mb-4">Características</h2>
						<p className="text-gray-600 mb-4">
							Panel prefabricado tipo sándwich, diseñado como sistema
							constructivo modular a base de 2 láminas de acero galvanizado
							calibre 26, pre pintadas y núcleo de poliestireno expandido (EPS).
						</p>
						<p className="text-gray-600 mb-4">
							Su configuración permite una instalación ágil, segura y con
							excelente desempeño estructural, gracias a su ensamble tipo
							hembra-macho Sig-Lock.
						</p>
						<div className="space-x-2">
							<Link
								href="/docs/catalogo-de-accesorios-2025.pdf"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-block bg-neutral-500 hover:bg-green-500 text-white px-6 py-2 rounded-md font-semibold"
							>
								Catálogo
							</Link>
							<Link
								href="/docs/ficha-tecnica-muro-sp.pdf"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-block bg-neutral-500 hover:bg-green-500 text-white px-6 py-2 rounded-md font-semibold"
							>
								Ficha Técnica
							</Link>
						</div>
						<div>
							<div className="text-gray-600 mb-2 inline-flex items-center space-x-2">
								<Palette className="size-5 text-green-500" />{" "}
								<span>Colores disponibles: Blanco</span>
							</div>
						</div>
						<div>
							<div className="text-gray-600 mb-2 inline-flex items-center space-x-2">
								<Ruler className="size-5 text-green-500" />{" "}
								<span>Espesores: de 1.5” a 10”</span>
							</div>
						</div>
						<div>
							<Link
								href="/contacto"
								className="inline-block bg-green-500 hover:bg-green-500 text-white px-6 py-2 rounded-md font-semibold"
							>
								Cotiza Ahora
							</Link>
						</div>
					</div>
					<div>
						<ShowcaseMuro />
					</div>
				</div>
			</section>

			{/* Accessories */}
			<section
				className="bg-gray-50 py-16"
				style={{
					backgroundImage:
						'url("https://res.cloudinary.com/dbl4j1i1f/image/upload/v1754513760/hero-15-bg-mask_mxdzzx.png")',
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<div className="max-w-6xl mx-auto px-6 text-center">
					<h2 className="text-3xl font-bold mb-6">Accesorios</h2>
					<p className="text-gray-600 max-w-3xl mx-auto mb-10">
						Componentes de fijación y acabado elaborados en lámina galvanizada
						cal. 26 prepintada, diseñados específicamente para facilitar el
						montaje correcto de paneles Muro SP. Aportan sellado, estabilidad
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
								src="smart-panel-canalu_rf2suz"
								width="800"
								alt="Smart Panel Tapagotero"
								height="800"
								crop={{
									type: "fit",
									source: true,
								}}
							/>
							<h4 className="font-bold text-lg mb-2">CANAL &quot;U&quot;</h4>
							<p className="text-gray-600 text-sm">
								Fijación al firme de concreto y acabado estético.
							</p>
						</div>
						{/* Ángulo Interior */}
						<div className="p-6 rounded-md">
							<CldImage
								className="mx-auto mb-4 bg-neutral-100 rounded-full p-4"
								src="smart-panel-interior_ja2sp9"
								width="800"
								alt="Smart Panel Angulo Interior"
								height="800"
								crop={{
									type: "fit",
									source: true,
								}}
							/>
							<h4 className="font-bold text-lg mb-2">ÁNGULO INTERIOR</h4>
							<p className="text-gray-600 text-sm">
								Acabado estético en las uniones del muro sp (esquinas) en el
								interior de la construcción.
							</p>
						</div>
						{/* Ángulo Exterior */}
						<div className="p-6 rounded-md">
							<CldImage
								className="mx-auto mb-4 bg-neutral-100 rounded-full p-4"
								src="smart-panel-exterior_xk9ntk"
								width="800"
								alt="Smart Panel Angulo Exterior"
								height="800"
								crop={{
									type: "fit",
									source: true,
								}}
							/>
							<h4 className="font-bold text-lg mb-2">ÁNGULO EXTERIOR</h4>
							<p className="text-gray-600 text-sm">
								Acabado estético en las uniones del muro sp en el exterior,
								dando mayor rigidez a la construcción.
							</p>
						</div>
					</div>
					<Link
						href="tel:+525610197622"
						className="bg-green-500 hover:bg-green-500 text-white px-6 py-2 rounded-md font-semibold mt-4 inline-block"
					>
						<i className="fas fa-phone-alt mr-2" /> Llama ahora: +52 56 1019 7622
					</Link>
				</div>
			</section>
			{/* CTA Section */}
			<CTA />
		</>
	);
}
