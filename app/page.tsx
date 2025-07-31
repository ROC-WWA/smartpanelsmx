import Image from "next/image";
import Slideshow from "./_components/slideshow";
import { Check, Mail, Phone } from "lucide-react";
import Sector from "./_components/sector";
import Feature from "./_components/features";
import Subtitle from "./_components/subtitle";
import { title } from "process";
import Reason from "./_components/reasons";
import { applications } from "./_components/application";
import Application from "./_components/application";
import Testimonial from "./_components/testimonial";
import FAQ from "./_components/faq";
import { faqs } from "./_components/faq";
import { MapIcon } from "@heroicons/react/24/solid";
import { MapPinIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import SocialNetworks from "./_components/social";
const sectors = [
	{
		title: "Farmacéutico",
		description:
			"Espacios limpios, controlados y eficientes para cumplir con los más altos estándares sanitarios.",
		image: "/smart-panel-sector-farmaceutico.png",
	},
	{
		title: "Alimenticio",
		description:
			"Soluciones higiénicas y térmicamente eficientes para áreas de producción y almacenamiento.",
		image: "/smart-panel-sector-alimenticio.png",
	},
	{
		title: "Comercial",
		description:
			"Construcción ágil y estética para tiendas, plazas y centros de distribución.",
		image: "/smart-panel-sector-comercial.png",
	},
	{
		title: "Institucional",
		description:
			"Infraestructura duradera y funcional para escuelas, hospitales y dependencias gubernamentales.",
		image: "/smart-panel-sector-institucional.png",
	},
	{
		title: "Industrial",
		description:
			"Paneles para naves, plantas y almacenes con alto desempeño térmico y estructural.",
		image: "/smart-panel-sector-industrial.png",
	},
	{
		title: "Automotriz",
		description:
			"Sistemas eficientes que optimizan procesos, control ambiental y seguridad industrial.",
		image: "/smart-panel-sector-automotriz.png",
	},
	{
		title: "Residencial",
		description:
			"Confort térmico, rapidez constructiva y diseño moderno para viviendas sustentables.",
		image: "/smart-panel-sector-residencial.png",
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
		title: "Materiales",
		description:
			"Materiales prefabricados con alto rendimiento térmico y estructural",
		image: "smart-panel-icon3.png",
	},
	{
		title: "Soluciones adaptables",
		description: "Soluciones adaptables a todo tipo de proyectos",
		image: "/smart-panel-icon2.png",
	},
	{
		title: "Entregas",
		description: "Entregas a todo México",
		image: "/smart-panel-icon3.png",
	},
	{
		title: "Instalación rápida",
		description: "Instalación rápida y limpia sin obra húmeda",
		image: "/smart-panel-icon4.png",
	},
	{
		title: "Personalización",
		description: "Cortes personalizados y asesoría técnica incluida",
		image: "/smart-panel-icon5.png",
	},
	{
		title: "Energía Optimizada",
		description: "Materiales de bajo consumo eléctrico para su producción",
		image: "/smart-panel-icon5.png",
	},
];

export default function Home() {
	return (
		<>
			{/* Hero Section */}
			<Slideshow />
			{/* Sustainable Future Section */}
			<section className="py-20 bg-white">
				<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">
					<img
						src="/smart-panel-work.png"
						alt="Construction worker installing solar panel"
						className="w-full"
					/>
					<div>
						<Subtitle text="smart panel" />
						<h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
							Mejores Edificaciones para un Futuro Sustentable
						</h2>
						<p>Impulsando la Sostenibilidad, la Innovación y el Rendimiento</p>
						<p className="text-gray-600 mb-4">
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
					backgroundImage: "url('/appointment3-bg.png')",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center justify-between px-6">
					<div className="">
						<img
							src="/smart-panel-construccion.png"
							alt="Modern facility with energy-efficient design"
							className="md:mb-0 w-full"
						/>
					</div>
					<div className="ml-0 md:ml-10">
						<Subtitle text="smart panel" />
						<h2 className="text-3xl font-bold mb-4">
							Construcción Inteligente
						</h2>
						<p>Para un México más Eficiente</p>
						<p className="mb-10">
							Diseñamos nuestros sistemas para proyectos industriales,
							comerciales, educativos, residenciales, entre otros, con el
							objetivo de crear espacios cómodos, resistentes y sostenibles que
							respondan a los desafíos actuales de la construcción.
						</p>
						<Link
							href="#"
							className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded-md font-semibold text-white"
						>
							Contáctanos
						</Link>
					</div>
				</div>
			</section>
			{/* Technology Section */}
			<section
				className="py-20 bg-neutral-100"
				style={{
					backgroundImage: "url('/footer-bg8.png')",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<div className="flex flex-col items-center">
					<Subtitle text="Productos" />
				</div>
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold text-gray-800">
						Tecnología que se adapta a tu proyecto.
					</h2>
					<p>
						Conoce nuestra línea de paneles prefabricados y accesorios que
						optimizan tiempo y reducen costos
					</p>
				</div>
				<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">
					<div className="text-center">
						<img
							src="/smart-panel-panel-muro.png"
							alt="Insulated roof panel with layers shown"
							className="mx-auto mb-4"
						/>
						<h3 className="font-bold text-xl mb-2 text-left">
							Panel MURO SP / PLAFÓN
						</h3>
						<p className="text-gray-600 text-left">
							Panel prefabricado tipo sándwich. Disponibles en varias opciones
							de espesor, ajustándose al nivel de aislamiento térmico y uso
							específico del proyecto.
						</p>
					</div>
					<div className="text-center">
						<img
							src="/smart-panel-panel-techo.png"
							alt="Wall panel with insulation section"
							className="mx-auto mb-4"
						/>
						<h3 className="font-bold text-xl mb-2 text-left">Panel TECHO SP</h3>
						<p className="text-gray-600 text-left">
							Panel prefabricado tipo sándwich. Disponibles en varias opciones
							de espesor, ajustándose al nivel de aislamiento térmico y uso
							específico del proyecto.
						</p>
					</div>
				</div>
			</section>
			{/* Sectors Section */}
			<section className="py-20 px-4 space-y-4">
				<div className="text-center mb-10">
					<div className="flex justify-center">
						<Subtitle text="smart panel" />
					</div>
					<h2 className="text-3xl font-bold">Sectores</h2>
				</div>
				<div className="text-center">
					<p>
						Nuestros sistemas son utilizados en sectores clave de México,
						respondiendo a estándares técnicos, estéticos y ambientales en todo
						tipo de obras.
					</p>
				</div>
				<div className="max-w-6xl mx-auto mt-10 space-y-8">
					{sectors.map((sector, index) => (
						<Sector
							key={index}
							index={index + 1}
							title={sector.title}
							description={sector.description}
							image={sector.image}
						/>
					))}
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
							<p className="">
								Con Smart Panel, estás apostando por una construcción más
								eficiente y sustentable. Ayudas a disminuir el consumo
								eléctrico, reducir emisiones y avanzar hacia edificaciones más
								responsables con el medio ambiente.
							</p>
							<p>
								Estamos comprometidos con la eficiencia energética y el cuidado
								del medio ambiente. Por eso, todos nuestros productos están
								diseñados para:
							</p>

							<img
								src="/smart-panel-ambienteplaneta.png"
								alt="Eco-friendly construction panel"
								className="w-full mt-6"
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
					<h2 className="text-3xl font-bold mb-10">¿Por qué elegirnos?</h2>
					<div className="flex-row flex">
						<div className="w-1/3">
							{reasonsToChooseUs.slice(0, 3).map((reason, index) => (
								<Reason
									key={index}
									classname="mb-6"
									title={reason.title}
									description={reason.description}
									image={reason.image}
								/>
							))}
						</div>
						<div className="w-1/3">
							<img
								src="/smart-panel-nave2.png"
								alt="Smart Panel Material"
								className="mx-auto"
							/>
						</div>
						<div className="w-1/3">
							{reasonsToChooseUs.slice(3, 6).map((reason, index) => (
								<Reason
									key={index}
									classname="mb-6 flex-row-reverse"
									title={reason.title}
									description={reason.description}
									image={reason.image}
								/>
							))}
						</div>
					</div>
				</div>
			</section>
			{/* About Us */}
			<section className=" bg-gray-950 text-white">
				<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
					<img
						src="/smart-panel-nosotros.png"
						alt="Team of professionals in business meeting"
						className="w-full object-contain h-full md:col-span-1"
					/>
					<div className="py-20 md:col-span-1">
						<Subtitle text="smart panel" />
						<h2 className="text-3xl font-bold mb-4">¿Quiénes Somos?</h2>
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
								className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded-md font-semibold text-white my-4"
							>
								Ver más
							</Link>
						</div>
					</div>
				</div>
			</section>
			{/* Applications */}
			<section className="py-20 bg-white">
				<div className="max-w-6xl mx-auto px-6">
					<h2 className="text-3xl font-bold mb-10 text-center">Aplicaciones</h2>
					<div className="grid md:grid-cols-4 gap-4">
						{applications.map((app, index) => (
							<Application
								key={index}
								image={app.image}
								link={app.link}
								title={app.title}
							/>
						))}
					</div>
				</div>
			</section>
			{/* Testimonials */}
			<section className="bg-gray-950 text-white py-20">
				<div className="max-w-6xl mx-auto px-6 text-center">
					<div>
						<Testimonial />
					</div>
				</div>
			</section>

			<div className="py-20" 
			style={{ backgroundImage: "url('/smart-panel-mexico-paneles-prefabricados-clientes.webp')", backgroundSize: "cover" }}>
				<h3 className="text-3xl font-bold mb-4 text-center text-white">Preguntas Frecuentes</h3>
				<div className="max-w-6xl mx-auto px-6 py-10 space-y-2">
				{
					faqs.map((faq, index) => (
						<FAQ key={index} question={faq.question} answer={faq.answer} />
					))
				}
				</div>
			</div>

			{/* Contact */}
			<section className="bg-gray-100 py-10">
				<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
					<img src="/smart-panel-contacto.png" alt="Smart Panel Contacto" />
					<div>
						<Subtitle text="smart panel" />
						<h2 className="text-3xl font-bold mb-4">Contáctanos</h2>

						<div className="bg-gray-950 text-white p-6 rounded-md space-y-4">
							<div>
								<h4 className="text-green-500">Atención a clientes:</h4>
							</div>
							<div>
								<Link href="tel:+521234567890">
									{" "}
									<Phone className="inline mr-2 text-green-500" /> +52 123 456
									7890
								</Link>
							</div>
							<div>
								<Link href="mailto:atencionaclientes1@smartpanel.mx">
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
									className="mb-4"
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
								<SocialNetworks className="fill-green-500" />
							</div>
						</div>

						<div className="my-4">
							<Link
								href="/contacto"
								className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded-md font-semibold text-white"
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
