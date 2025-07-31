import { JSX } from "react";

export const faqs = [
	{
		question: "¿Qué es un panel tipo sándwich de poliestireno y cómo funciona?",
		answer: (
			<div>
				<p>
					a. Los paneles tipo sándwich de poliestireno son una solución modular
					prefabricada que combina la durabilidad de una lámina de calibre 26
					con las propiedades aislantes del poliestireno. Adaptables a distintos
					sectores.
				</p>
			</div>
		),
	},
	{
		question:
			"¿En qué tipos de proyectos o industrias se pueden utilizar los paneles?",
		answer: (
			<div>
				<p>
					a.Los paneles son ideales para una amplia gama de aplicaciones,
					incluyendo: Industria alimentaria, farmacéutica, hospitalaria, de
					congelación y refrigeración, construcción comercial, residencial y
					naval, industria química, automotriz, textil, electrónica,
					petroquímicas, de logística y almacenamiento, centros educativos,
					centros de distribución y bodegas, deportivos y gimnasios, plantas de
					energía renovable, sistemas de climatización y calefacción, centros
					comerciales, data centers, entre otras.
				</p>
				<p>
					b.Su versatilidad los hace adecuados tanto para interiores como para
					exteriores.
				</p>
			</div>
		),
	},
	{
		question:
			"¿Qué tipo de aislamiento ofrecen los paneles (térmico y acústico)?",
		answer: (
			<div>
				<p>
					a. Los paneles ofrecen un excelente aislamiento térmico, ayudando a
					mantener temperaturas interiores constantes y reduciendo los costos
					energéticos. También brindan un aislamiento, disminuyendo ruidos
					exteriores.
				</p>
			</div>
		),
	},
	{
		question: "¿Cuánto tiempo lleva instalar los paneles?",
		answer: (
			<div>
				<p>
					1. La instalación es rápida, generalmente tomando menos tiempo que los
					métodos tradicionales de construcción. Dependiendo del tamaño y la
					complejidad del proyecto, la instalación puede completarse en pocos
					días, lo que contribuye a una construcción más eficiente
				</p>
			</div>
		),
	},
	{
		question: "¿Requieren mantenimiento regular?",
		answer: (
			<div>
				<p>
					1. No, los paneles requieren muy poco mantenimiento. Son altamente
					duraderos y resistentes a las condiciones climáticas extremas, lo que
					reduce la necesidad de reparaciones frecuentes. Para mantenerlos en
					buen estado, solo se recomienda una limpieza ocasional.
				</p>
			</div>
		),
	},
	{
		question:
			"¿Cuál es el precio por metro cuadrado y cuál es la cantidad mínima de compra?",
		answer: (
			<div>
				<p>
					1. El precio por metro cuadrado puede variar dependiendo de las
					especificaciones del proyecto, como el espesor y largos. Es mejor
					contactar directamente para recibir una propuesta personalizada.
				</p>
			</div>
		),
	},
	{
		question: "¿Para qué sirven los accesorios ?",
		answer: (
			<div>
				<p>
					1.Los accesorios sirven para realizar la instalación del panel ya que
					proporcionan un acabado estético y funcional. El tipo y la cantidad de
					accesorios necesarios varían según el proyecto.
				</p>
			</div>
		),
	},
];

const FAQ = ({question, answer} : {question: string, answer: JSX.Element}) => {
	return (
		<details className="rounded-md group transition-all duration-300">
			<summary className="p-4 font-semibold cursor-pointer bg-neutral-600 text-white group-open:bg-green-500 rounded-2xl group-open:rounded-b-none">
				{question}
			</summary>
			<div className="p-4 mt-2 text-gray-600 bg-white rounded-b-2xl">
				{answer}
			</div>
		</details>
	);
};

export default FAQ;
