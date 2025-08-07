"use client";
import { EnvelopeIcon, MapPinIcon, PhoneXMarkIcon } from "@heroicons/react/24/solid";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import SocialNetworks from "./social";
import { WhatsApp } from "@/app/_components/icons";

export default function Footer() {
	return (
		<footer className="bg-black text-white py-12">
			<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
				<div>
					<CldImage
						className="mb-4 max-w-60 w-full"
						src="LOGO-COLOR-SMART-PANEL-SLD_dlklfw"
						width="400"
						alt="Smart Panel Logo"
						height="400"
						crop={{
							type: "fit",
							source: true,
						}}
					/>
				</div>
				<div>
					<h3 className="font-semibold text-lg mb-2">Productos</h3>
					<ul className="space-y-2 text-sm divide-y divide-gray-800">
						<li className="py-2">
							<Link className="hover:text-green-500" href="/panel-muro">
								Panel Muro
							</Link>
						</li>
						<li className="py-2">
							<Link className="hover:text-green-500" href="/panel-techo">
								Panel Techo
							</Link>
						</li>
						<li className="py-2">
							<Link
								className="hover:text-green-500"
								href="/docs/Politica-de-calidad-SMART-PANEL.pdf"
								target="_blank"
								rel="noopener noreferrer"
							>
								Política de calidad
							</Link>
						</li>
						<li className="py-2">
							<Link
								className="hover:text-green-500"
								href="/docs/Aviso-de-Privacidad-Smart-Panel.pdf"
								target="_blank"
								rel="noopener noreferrer"
							>
								Aviso de Privacidad
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<h3 className="font-semibold text-lg mb-2">Aplicaciones</h3>
					<ul className="space-y-2 divide-y divide-gray-800 text-sm">
						<li className="py-2">
							<Link
								className="hover:text-green-500"
								href="/aplicaciones/naves-industriales"
							>
								Naves Industriales
							</Link>
						</li>
						<li className="py-2">
							<Link
								className="hover:text-green-500"
								href="/aplicaciones/residenciales-habitacionales"
							>
								Residenciales Habitacionales
							</Link>
						</li>
						<li className="py-2">
							<Link
								className="hover:text-green-500"
								href="/aplicaciones/oficinas"
							>
								Oficinas
							</Link>
						</li>
						<li className="py-2">
							<Link
								className="hover:text-green-500"
								href="/aplicaciones/aulas-prefabricadas"
							>
								Aulas
							</Link>
						</li>
						<li className="py-2">
							<Link
								className="hover:text-green-500"
								href="/aplicaciones/bodegas-almacenes"
							>
								Bodegas/Almacenes
							</Link>
						</li>
						<li className="py-2">
							<Link
								className="hover:text-green-500"
								href="/aplicaciones/camaras"
							>
								Cámaras
							</Link>
						</li>
						<li className="py-2">
							<Link
								className="hover:text-green-500"
								href="/aplicaciones/techos"
							>
								Techos
							</Link>
						</li>
						<li className="py-2">
							<Link
								className="hover:text-green-500"
								href="/aplicaciones/hospitales"
							>
								Hospitales
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<h3 className="font-semibold text-lg mb-2">Contáctanos</h3>
					<div>
						<Link
							href="https://maps.app.goo.gl/qzN8NWH2MQxMEBAz9"
							className="text-sm mb-2 hover:text-green-500"
							target="_blank"
							rel="noopener noreferrer"
						>
							<MapPinIcon className="inline mr-2 text-green-500 size-4" />{" "}
							Fracción de la Parcela 3 No. 60, int. Z#2, Praderas de los
							Angeles, Querétaro, CP. 76908
						</Link>
					</div>
					<div>
						<Link href="tel:+525610197622" className="text-sm mb-2">
							{" "}
							<PhoneXMarkIcon className="inline mr-2 text-green-500 size-4" /> +52
							123 456 7890
						</Link>
					</div>
					<Link
						href="mailto:atencionaclientes1@smartpanel.mx"
						className="text-sm mb-2"
					>
						<EnvelopeIcon className="inline mr-2 text-green-500 size-4" />{" "}
						atencionaclientes1@smartpanel.mx
					</Link>
					<div className="text-white text-sm mt-4 mb-2">
						<p>Redes sociales</p>
					</div>
					<div className="fill-green-500">
						<SocialNetworks className="fill-green-500" />
					</div>
				</div>
			</div>
			<div className="text-center mt-10 text-sm text-green-500">
				Copyright © 2025 SMART PANEL | Designed by ROC Worldwide Agency and
				Optimized by Luis ROC | All Rights Reserved
			</div>
			<div className="whatsapp-float" id="whatsappFloat">
				<a
					href="https://api.whatsapp.com/send?phone=5215610197622&text=Hola,%20me%20gustaria%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20productos"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Contactar por WhatsApp"
					className="whatsapp-button"
				>
					<WhatsApp className="size-8 fill-white" />
				</a>
				<div className="whatsapp-tooltip">¡Escríbenos!</div>
			</div>
		</footer>
	);
}
