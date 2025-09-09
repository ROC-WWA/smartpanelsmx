"use client";
import Slideshow from "./_components/slideshow";
import { ArrowUpRight, Check, Mail, Phone } from "lucide-react";
import Sector from "./_components/sector";
import Feature from "./_components/features";
import Subtitle from "./_components/subtitle";
import Reason from "./_components/reasons";
import Testimonial from "./_components/testimonial";
import FAQ from "./_components/faq";
import { faqs } from "./_components/faq";
import { MapPinIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import SocialNetworks from "./_components/social";
import { CldImage } from "next-cloudinary";
import { Button } from "./_components/button";
import ImageAccordion, { items } from "./_components/accordion-image";
import { ImageGrid } from "./_components/image-grid";
import ClipMask from "./_components/clip-mask";

const sectors = [
	{
		title: "Farmacéutico",
		description:
			"Espacios limpios, controlados y eficientes para cumplir con los más altos estándares sanitarios.",
		image: "smart-panel-sector-farmaceutico_zqju5p",
	},
	{
		title: "Alimenticio",
		description:
			"Soluciones higiénicas y térmicamente eficientes para áreas de producción y almacenamiento.",
		image: "smart-panel-sector-alimenticio_oaei4x",
	},
	{
		title: "Comercial",
		description:
			"Construcción ágil y estética para tiendas, plazas y centros de distribución.",
		image: "smart-panel-sector-comercial_vgvwhi",
	},
	{
		title: "Institucional",
		description:
			"Infraestructura duradera y funcional para escuelas, hospitales y dependencias gubernamentales.",
		image: "smart-panel-sector-institucional_klub09",
	},
	{
		title: "Industrial",
		description:
			"Paneles para naves, plantas y almacenes con alto desempeño térmico y estructural.",
		image: "smart-panel-sector-industrial_xpooqo",
	},
	{
		title: "Automotriz",
		description:
			"Sistemas eficientes que optimizan procesos, control ambiental y seguridad industrial.",
		image: "smart-panel-sector-automotriz_e6wkja",
	},
	{
		title: "Residencial",
		description:
			"Confort térmico, rapidez constructiva y diseño moderno para viviendas sustentables.",
		image: "smart-panel-sector-residencial_odisim",
	},
];

const features = [
	{
		title: "Aislamiento Térmico",
		description:
			"Mejora el aislamiento térmico de espacios reduciendo el uso de aire acondicionado o calefacción.",
		image: "/house.svg",
	},
	{
		title: "Vida Útil",
		description:
			"“Pensado para durar, diseñado para resistir”. Extiende la vida útil de cada espacio con soluciones constructivas que ofrecen alto desempeño y durabilidad.",
		image: "/service.svg",
	},
	{
		title: "Menos Residuos",
		description:
			"Generar menos residuos gracias al sistema modular y la fabricación a la medida.",
		image: "/house.svg",
	},
	{
		title: "Menos Energía",
		description:
			"Disminuir la huella de carbono al necesitar menos energía para su fabricación.",
		image: "/service.svg",
	},
];

const reasonsToChooseUs = [
	{
		title: "Materiales de alto rendimiento",
		description:
			"Paneles con gran aislamiento térmico y resistencia estructural.",
		image: "smart-panel-icon3_nz06t0",
	},
	{
		title: "Instalación Rápida",
		description: "Montaje limpio y sin obra húmeda. Más rápido, menos escombro.",
		image: "smart-panel-icon4_avnhd5",
	},
	{
		title: "Versatilidad por Sector",
		description: "Soluciones adaptadas a industria, salud, vivienda y más.",
		image: "smart-panel-icon1_aemfrq",
	},
	{
		title: "Cortes y Asesoría Técnica",
		description: "Paneles a medida con soporte experto incluido.",
		image: "smart-panel-icon7_wbtvdo",
	},
	{
		title: "Cobertura Nacional",
		description: "Entregas confiables a cualquier parte de México.",
		image: "smart-panel-icon5_gwavtw",
	},
	{
		title: "Energía Optimizada",
		description: "Materiales de bajo consumo eléctrico y alta eficiencia energética.",
		image: "smart-panel-icon2_sxim6n",
	},
];

export default function Home() {
	return (
		<>
			<style>
				{`
			.clip{
			    position: relative;
			height: 100%;
			z-index: 1;
			overflow:hidden;
			width: 100%;
			}
			.clip:after{
					opacity: 0.2;
					content: '';
					position: absolute;
					top:0;
					left: calc(-53px - 40px);
					width: calc(100% + 80px);
					height: 100%;
					-webkit-clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
					clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
					background: var(--theme-color);
					z-index: -1;
			}
			.clip:before{
							content: '';
					position: absolute;
					left: -53px;
					height: 100%;
					width: 100%;
					-webkit-clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
					clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
					background: var(--theme-color);
					z-index: -1;
			}
			.clip img{
							height: 100%;
					object-fit: cover;
					-webkit-clip-path: polygon(0 0, 75% 0, 100% 100%, 25% 100%);
					clip-path: polygon(0 0, 75% 0, 100% 100%, 25% 100%);
			}
			`}
			</style>
			{/* Hero Section */}
			<Slideshow />
			{/* Sustainable Future Section */}
			<section className="py-20 bg-white">
				<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">
					<CldImage
						src="smart-panel-work_z7wlox"
						width="500"
						alt="Smart Panel Image"
						height="500"
						crop={{
							type: "auto",
							source: true,
						}}
					/>
					<div>
						<Subtitle text="smart panel" />
						<h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
							Empresa Certificada: <br /> Construcción Sustentable con Paneles Aislantes
						</h2>
						<p>Impulsando la Sostenibilidad, la Innovación y el Rendimiento</p>
						<p className="text-gray-800 mb-4">
							En Smart Panel México, somos una empresa mexicana certificada
							(ECMX-1369/19), dedicada a la fabricación de materiales
							prefabricados con núcleo de poliestireno expandido (EPS),
							reconocidos por su alta eficacia, practicidad y calidad.
						</p>
						<p>
							Nuestras soluciones constructivas ayudan a crear espacios más
							eficientes, reduciendo el consumo energético, disminuyendo las
							emisiones de gases de efecto invernadero y acelerando los tiempos
							de obra con un menor impacto ambiental.
						</p>
						<p className="font-semibold my-4">Ofrecemos paneles que brindan:</p>
						<ul className="space-y-2 font-medium">
							<li className="flex items-center gap-2">
								<div className="bg-green-500 text-white flex items-center size-6 justify-center rounded">
									<Check className="size-4" />
								</div>
								Aislante térmico
							</li>
							<li className="flex items-center gap-2">
								<div className="bg-green-500 text-white flex items-center size-6 justify-center rounded">
									<Check className="size-4" />
								</div>{" "}
								Fácil instalación
							</li>
							<li className="flex items-center gap-2">
								<div className="bg-green-500 text-white flex items-center size-6 justify-center rounded">
									<Check className="size-4" />
								</div>{" "}
								Durabilidad
							</li>
							<li className="flex items-center gap-2">
								<div className="bg-green-500 text-white flex items-center size-6 justify-center rounded">
									<Check className="size-4" />
								</div>{" "}
								Diseño moderno
							</li>
						</ul>
					</div>
				</div>
			</section>
			{/* Smart Construction CTA */}
			<section
				className="bg-gray-900 text-white "
				style={{
					backgroundImage:
						"url('https://res.cloudinary.com/dbl4j1i1f/image/upload/v1754513759/appointment3-bg_wnfw66.png')",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center justify-between px-6">
					<div className="">
						<CldImage
							src="smart-panel-construccion_v2bhdy"
							width="500"
							alt="Smart Panel Image"
							height="500"
							crop={{
								type: "auto",
								source: true,
							}}
						/>
					</div>
					<div className="ml-0 md:ml-10 py-4 text-center">
						<div className="flex justify-center md:justify-start">
							<Subtitle text="smart panel" />
						</div>
						<div className="mb-4">
							<h2 className="text-2xl md:text-3xl font-bold">
							Construcción Inteligente
							</h2>
							<p className="text-xl">Para un México más Eficiente</p>
						</div>
						<p className="mb-10 text-beauty text-lg">
							Diseñamos nuestros sistemas para proyectos industriales,
							comerciales, educativos, residenciales, entre otros, con el
							objetivo de crear espacios cómodos, resistentes y sostenibles que
							respondan a los desafíos actuales de la construcción.
						</p>
						<div className="py-8">
							<Link
							href="/contacto"
							className="bg-green-500 hover:bg-green-500 px-6 py-2 rounded-md font-semibold text-white"
						>
							Contáctanos
						</Link>
						</div>
					</div>
				</div>
			</section>
			{/* Technology Section */}
			<section
				className="py-20 bg-neutral-100"
				style={{
					backgroundImage:
						"url('https://res.cloudinary.com/dbl4j1i1f/image/upload/v1754513759/footer-bg8_hacpsn.png')",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<div className="flex flex-col items-center">
					<Subtitle text="Productos" />
				</div>
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold text-gray-800">
						Nuestros Paneles Prefabricados
					</h2>
					<p className="my-2 text-lg font-medium">
						Conoce nuestra línea de paneles tipo sándwich SP. <br />Soluciones modulares para construcciones eficientes y duraderas.
					</p>
				</div>
				<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">
					<div className="group space-y-3">
						<CldImage
							className="mx-auto mb-4"
							src="smart-panel-panel-muro_k40rdl"
							width="340"
							alt="Smart Panel Image"
							height="340"
							crop={{
								type: "auto",
								source: true,
							}}
						/>
						<div className=" group-hover:bg-neutral-800 px-4">
							<div className="flex border-t-2 border-green-500">
								<div className="service-default-icon">
									<CldImage
										className="group-hover:rotate-y-180 transition-transform duration-500"
										src="icon-8_p051pl"
										width="30"
										height="30"
										alt="Smart Panel Icon"
										crop={{
											type: "auto",
											source: true,
										}}
									/>
								</div>
							</div>
							<h3 className="font-bold text-xl mb-2 text-left group-hover:text-white">
								Panel Muro SP
							</h3>
							<p className="font-bold text-base mb-2 text-left group-hover:text-white">Ideal para muros y plafones</p>
							<p className="text-gray-600 text-left group-hover:text-white py-4">
								 Panel tipo sándwich de poliestireno ideal para muros y plafones con excelente 
								 aislamiento térmico y acústico. Fabricado con núcleo de poliestireno expandido (EPS) y doble lámina galvanizada.
							</p>
							<p className="text-gray-600 text-left group-hover:text-white">Disponible en distintos espesores y longitudes de acuerdo a tu proyecto.<br></br>
								<strong>Descubre también la línea de accesorios compatibles para optimizar su instalación y acabado estético.</strong>
							</p>
							<div className="py-4 flex">
								<div className="relative">
									<Link
										className="relative font-semibold text-green-500 uppercase inline-flex items-center gap-2"
										href="/panel-muro"
									>
										Ver más <ArrowUpRight className="size-4" />
									</Link>
									<span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full" />
								</div>
							</div>
						</div>
					</div>
					<div className="group space-y-3">
						<CldImage
							className="mx-auto mb-4"
							src="smart-panel-techo-prodcuto_yekls8"
							width="400"
							alt="Smart Panel Image"
							height="310"
							crop={{
								type: "auto",
								source: true,
							}}
						/>
						<div className=" group-hover:bg-neutral-800 px-4">
							<div className="flex border-t-2 border-green-500">
								<div className="service-default-icon">
									<CldImage
										className="group-hover:rotate-y-180 transition-transform duration-500"
										src="icon-27_l4fiao"
										width="30"
										height="30"
										alt="Smart Panel Icon"
										crop={{
											type: "auto",
											source: true,
										}}
									/>
								</div>
							</div>
							<h3 className="font-bold text-xl mb-2 text-left group-hover:text-white">
								Panel Techo SP
							</h3>
							<p className="font-bold text-base mb-2 text-left group-hover:text-white">Cubiertas térmicas resistentes y rápidas de instalar</p>
							<p className="text-gray-600 text-left group-hover:text-white py-4">
								Panel sándwich para techos: con núcleo de poliestireno expandido (EPS) y láminas galvanizadas, 
								diseñado para un montaje rápido y seguro. Su diseño con crestas y valles, más una cresta extra 
								para traslapes transversales, refuerza la estructura y la hermeticidad.
							</p>
							<p className="text-gray-600 text-left group-hover:text-white">Disponible en distintos espesores y longitudes de acuerdo a tu proyecto.<br></br>
								<strong>Descubre también la línea de accesorios compatibles para optimizar su instalación y acabado estético.</strong>
							</p>
							<div className="py-4 flex">
								<div className="relative">
									<Link
										className="relative font-semibold text-green-500 uppercase inline-flex items-center gap-2"
										href="/panel-techo"
									>
										Ver más <ArrowUpRight className="size-4" />
									</Link>
									<span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Sectors Section */}
			<section className="py-20 px-4 space-y-4">
				<div className="text-center mb-6">
					<div className="flex justify-center">
						<Subtitle text="smart panel" />
					</div>
					<h2 className="text-3xl font-bold">Panel Sándwich SP: eficiencia aplicada a distintos sectores</h2>
				</div>
				<div className="text-center">
					<p className=" text-lg font-semibold mb-6">
						Modularidad, eficiencia y aislamiento adaptados a las exigencias de tu industria
					</p>
					<p>
						Nuestros sistemas con paneles prefabricados SP son utilizados en sectores
						clave de México.<br></br>Brindan rapidez constructiva, control térmico y cumplimiento normativo
						en espacios farmacéuticos, alimenticios, institucionales, industriales, logísticos y
						residenciales.<br></br>Cada solución se adapta al uso específico del proyecto, optimizando
						recursos, tiempos y durabilidad.
					</p>
				</div>
				<div className="max-w-6xl mx-auto mt-10 space-y-8">
					<ImageGrid />
				</div>
			</section>

			{/* Planet Decision Section */}
			<section className="py-20 bg-neutral-100">
				<div className="max-w-6xl mx-auto px-6">
					<Subtitle text="Medio ambiente" />
					<h2 className="text-3xl font-bold text-gray-800 mb-10">
						¡Cada panel, una decisión por el planeta!
					</h2>
					<div className="grid md:grid-cols-2 gap-8">
						<div className="space-y-4">
							<p >
								Con el Panel Sándwich SP, estás apostando por una construcción más eficiente y sustentable. 
								Ayudas a disminuir el consumo eléctrico, reducir emisiones y avanzar hacia edificaciones más responsables con el medio ambiente.
							</p>
							<p>
								Estamos comprometidos con la eficiencia energética y el cuidado del planeta. 
								Por eso, todos nuestros productos, incluido el Panel Sándwich SP, están diseñados para ofrecer soluciones modernas, seguras y amigables con la naturaleza.
							</p>
							<CldImage
								className="w-full mt-6"
								src="smart-panel-ambienteplaneta_zno7uo"
								width="543"
								alt="Smart Panel Planet Decision"
								height="340"
								crop={{
									type: "auto",
									source: true,
								}}
							/>
						</div>
						<div className="space-y-3">
							{features.map((feature, index) => (
								<Feature
									key={index}
									title={feature.title}
									description={feature.description}
									image={feature.image}
								/>
							))}
						</div>
					</div>
				</div>
			</section>
			{/* Why Us */}
			<section className="py-20 bg-gray-100">
				<div className="max-w-6xl mx-auto px-6 text-center">
					<div className="flex justify-center">
						<Subtitle text="Smart Panel" />
					</div>
					<h2 className="text-3xl font-bold mb-4">¿Por qué elegirnos?</h2>
					<h2 className="text-xl font-bold mb-8">:Construcción inteligente: más rápida, eficiente y confiable para tu proyecto</h2>
					<div className="flex-row flex flex-wrap">
						<div className="w-full md:w-1/3 order-2 md:order-1">
							{reasonsToChooseUs.slice(0, 3).map((reason, index) => (
								<Reason
									key={index}
									classname="mb-6"
									title={reason.title}
									description={reason.description}
									image={reason.image}
									textContainerClassName="text-center order-2 md:order-1 md:text-left"
									iconContainerClassName="w-full order-1 md:order-2 md:w-20"
								/>
							))}
						</div>
						<div className="w-full md:w-1/3 order-1 md:order-2">
							<CldImage
								className="w-full px-4 md:px-0 mx-auto"
								src="smart-panel-nave2_co7g51"
								width="400"
								alt="Smart Panel Reasons"
								height="400"
								crop={{
									type: "auto",
									source: true,
								}}
							/>
						</div>
						<div className="w-full md:w-1/3 order-3 md:order-3">
							{reasonsToChooseUs.slice(3, 6).map((reason, index) => (
								<Reason
									key={index}
									classname="mb-6 flex-row-reverse"
									title={reason.title}
									description={reason.description}
									image={reason.image}
									textContainerClassName="text-center order-2 md:order-1 md:text-left"
									iconContainerClassName="w-full order-1 md:order-2 md:w-20"
								/>
							))}
						</div>
					</div>
				</div>
			</section>
			<div className="text-center mt-6 md:mt-20">
				<div className="flex justify-center">
					<Subtitle text="smart panel" />
				</div>
				<h2 className="text-3xl font-bold">Aplicaciones</h2>
			</div>
			<section className="max-w-6xl mx-auto md:px-6 py-4 md:py-20 space-y-2 md:space-y-10">
				<ImageAccordion items={items.slice(0, 4)} defaultActiveId={1} />
				<ImageAccordion items={items.slice(4, 8)} defaultActiveId={8} />
			</section>
			{/* About Us */}
			<section className=" bg-gray-950 text-white">

				<div className="grid grid-cols-1 md:grid-cols-2 items-center">
					<div className="relative w-full h-full">
						<div className="clip">
							<img
								src="https://res.cloudinary.com/dbl4j1i1f/image/upload/v1754513815/smart-panel-nosotros_i6l1sd.png"
								alt="Smart Panel"
								className="w-full h-full object-cover"
							/>
						</div>
					</div>
					<div className="py-20 md:col-span-1 p-4">
						{/*<Subtitle text="smart panel" />*/}
						<h2 className="text-3xl font-bold mb-4">Smart Panel: ¿Quiénes somos?</h2>
						<p className="font-bold text-xl mb-4">Fabricantes de Paneles Aislantes para Construcción Modular en México</p>
						<p className="font-bold text-lg mb-4">Soluciones rápidas, eficientes y sustentables para edificaciones industriales,
logísticas, residenciales y sanitarias</p>
						<p className=" mb-4">
							SMART PANEL es una empresa 100% mexicana dedicada a la fabricación
							de panel de poliestireno expandido reforzados con acero. Con sede
							en QUERÉTARO, nos especializamos en ofrecer soluciones de
							construcción innovadoras y sostenibles.
						</p>
						<p>
							Nuestros productos se distinguen por ser modulables y
							prefabricados, obteniendo una construcción rápida, eficiente,
							práctica y de alta calidad. Comprometidos así a proporcionar
							materiales que cumplan con los más altos estándares de durabilidad
							y seguridad y al mismo tiempo, contribuya a la optimización de los
							procesos constructivos de nuestros clientes.
						</p>
						<div className="mt-6">
							<Link
								href="/nosotros"
								className="bg-green-500 hover:bg-green-500 px-6 py-2 rounded-md font-semibold text-white my-4"
							>
								Ver más
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Testimonials */}
			<section className="bg-gray-950 text-white">
				<div className="max-w-6xl mx-auto px-6 text-center">
					<div>
						<Testimonial />
					</div>
				</div>
			</section>

			<div
				className="py-20"
				style={{
					backgroundImage:
						"url('https://res.cloudinary.com/dbl4j1i1f/image/upload/v1754513811/smart-panel-mexico-paneles-prefabricados-clientes_asugcs.webp')",
					backgroundSize: "cover",
				}}
			>
				<h3 className="text-3xl font-bold mb-4 text-center text-white">
					Preguntas Frecuentes
				</h3>
				<div className="max-w-6xl mx-auto px-6 py-10 space-y-2">
					{faqs.map((faq, index) => (
						<FAQ key={index} question={faq.question} answer={faq.answer} />
					))}
				</div>
			</div>

			{/* Contact */}
			<section>
				<div className="grid grid-cols-1 md:grid-cols-2 items-center">
					<div className="relative w-full h-full">
						<div className="clip">
							<img
								src="https://res.cloudinary.com/dbl4j1i1f/image/upload/v1754513859/smart-panel-residencial-1_oevzku.webp"
								alt="Smart Panel"
								className="w-full h-full object-cover"
							/>
						</div>
					</div>
					<div className="p-10 w-full">
						<Subtitle text="smart panel" />
						<h2 className="text-3xl font-bold mb-4">Contáctanos</h2>

						<div className="bg-gray-950 text-white p-6 rounded-md space-y-4">
							<div>
								<h4 className="text-green-500">Atención a clientes:</h4>
								<h5 className="text-green-500 mb-4">Resolvemos tus dudas y te asesoramos para tu próximo proyecto</h5>
							</div>
							<div>
								<Link href="tel:+521234567890" className="hover:text-green-500">
									{" "}
									<Phone className="inline mr-2 text-green-500" /> +52 123 456
									7890
								</Link>
							</div>
							<div>
								<Link
									href="mailto:atencionaclientes1@smartpanel.mx"
									className="hover:text-green-500"
								>
									{" "}
									<Mail className="inline mr-2 text-green-500" />{" "}
									atencionaclientes1@smartpanel.mx
								</Link>
							</div>
							<p className="mb-4">
								Estamos listos para ayudarte con tu próximo proyecto.
							</p>
						</div>
						<div className="bg-gray-950 text-white p-6 rounded-md space-y-4 mt-4">
							<div>
								<h4 className="text-green-500">Planta:</h4>
							</div>
							<div>
								<Link
									href="https://maps.app.goo.gl/qzN8NWH2MQxMEBAz9"
									className="mb-4 hover:text-green-500"
								>
									<MapPinIcon className="inline mr-2 text-green-500 size-4" />{" "}
									Fracción de la Parcela 3 No. 60, int. Z#2, Praderas de los
									Angeles, Querétaro, CP. 76908
								</Link>{" "}
							</div>
						</div>

						<div className="bg-gray-950 text-white p-6 rounded-md space-y-4 mt-4">
							<div>
								<h4 className="text-green-500">Síguenos en redes sociales:</h4>
							</div>
							<div>
								<SocialNetworks className="fill-green-500 " />
							</div>
						</div>

						<div className="my-4">
							<Link
								href="/contacto"
								className="bg-green-500 hover:bg-green-500 px-6 py-2 rounded-md font-semibold text-white"
							>
								Enviar mensaje
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
