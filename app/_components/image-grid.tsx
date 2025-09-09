"use client"

import { useState } from "react"
import Image from "next/image"
import { CldImage } from "next-cloudinary"

interface GridItem {
  id: number
  title: string
  subtitle: string
  image: string
  description: string
}

const gridItems: GridItem[] = [
	{
    id: 1,
		title: "PANEL SP EN SECTOR FARMACÉUTICO",
		subtitle: " Espacios aislados, modulares y sanitarios para la industria farmacéutica",
		description: "Crea laboratorios, cuartos limpios y zonas de almacenamiento con paneles tipo sándwich SP de alta eficiencia térmica e higiene. Cumple con estándares sanitarios sin sacrificar tiempos ni presupuesto",
		image: "smart-panel-sector-farmaceutico_zqju5p",
	},
	{
		id: 2,
		title: "PANEL SP EN SECTOR ALIMENTICIO",
		subtitle: "Soluciones higiénicas y térmicas para plantas de producción y conservación",
		description: "Optimiza tu infraestructura con paneles aislantes tipo sándwich ideales para cámaras frías, cuartos de proceso, áreas limpias y almacenes. Fácil instalación, bajo mantenimiento y alto rendimiento.",
		image: "smart-panel-sector-alimenticio_oaei4x",
	},
	{
		id: 3,
		title: "PANEL SP EN SECTOR COMERCIAL",
		subtitle: "Espacios eficientes y modernos para puntos de venta, y centros de distribución",
		description: "Diseña instalaciones con imagen profesional, Panel sándwich SP=alta resistencia y excelente aislamiento. Perfecto para cadenas comerciales, naves de retail, centros logísticos y módulos de atención al público",
		image: "smart-panel-sector-comercial_vgvwhi",
	},
	{
		id: 4,
		title: "PANEL SP EN SECTOR INSTITUCIONAL",
		subtitle: "Aulas, clínicas y oficinas modulares en tiempo récord",
		description: "Crea espacios funcionales en escuelas, hospitales, centros comunitarios y oficinas gubernamentales con sistemas modulares que reducen los tiempos de obra y garantizan confort térmico. Descubre cómo el Panel Sándwich SP con lámina traslúcida se adapta a este sector, ofreciendo además un ahorro energético significativo.",
		image: "smart-panel-sector-institucional_klub09",
	},
	{
		id: 5,
		title: "PANEL SP EN SECTOR INDUSTRIAL",
		subtitle: "Infraestructura resistente y eficiente para naves industriales, fábricas y procesos productivos.",
		description: "Nuestro panel sándwich SP ofrece aislamiento térmico, durabilidad estructural y montaje rápido para todo tipo de construcciones industriales. Son ideales para naves de manufactura, talleres, almacenes y fábricas con líneas de producción, donde la eficiencia energética y los tiempos de obra son críticos.",
		image: "smart-panel-sector-industrial_xpooqo",
	},
	{
		id: 6,
		title: "PANEL SÁNDWICH SP EN SECTOR AUTOMOTRÍZ",
		subtitle: "Espacios optimizados para la industria",
		description: "Protege áreas críticas y agiliza la construcción de talleres y plantas automotrices con Panel Sándwich SP. Su instalación modular permite crear espacios aislados y duraderos que resisten la intemperie, optimizando la operación diaria. Perfecto para construir talleres, plantas, zonas de producción y mantenimiento automotriz.",
		image: "smart-panel-sector-automotriz_e6wkja",
	},
	{
		id: 7,
		title: "PANEL SÁNDWICH SP EN SECTOR RESIDENCIAL",
		subtitle: "Perfecto para construir casas, desarrollos y ampliaciones con confort térmico y acabados duraderos",
		description: "Los módulos del Panel sándwich SP permiten levantar viviendas modernas, frescas y funcionales de forma rápida. Ideales para casas habitación, desarrollos habitacionales y proyectos de vivienda progresiva, garantizando eficiencia y durabilidad en cada espacio",
		image: "smart-panel-sector-residencial_odisim",
	},
];

export function ImageGrid() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  return (
		<>
		<div className="md:hidden">
			{gridItems.map((item) => (
				<div
				key={item.id}
				className="bg-neutral-800 mb-4 p-4 rounded-md flex flex-col items-center text-center">
				<h3 className="text-xl text-white font-semibold mb-2">{item.title}</h3>
				<h3 className="text-lg text-white font-semibold mb-2">{item.subtitle}</h3>
				<p className="text-white/90 text-sm leading-relaxed">{item.description}</p>
				</div>
			))}
		</div>


    <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {gridItems.map((item) => (
        <div
          key={item.id}
          className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          onMouseEnter={() => setHoveredItem(item.id)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <div className="aspect-[5/4] relative">
            <CldImage
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />

            {/* Title overlay - always visible */}
            <div className="absolute bottom-0 left-0 right-0 bg-green-500 backdrop-blur-sm p-4">
              <h3 className="text-lg font-semibold text-white text-center">{item.title}</h3>
            </div>

            {/* Description overlay - visible on hover */}
            <div
              className={`absolute inset-0 bg-black/80 backdrop-blur-sm p-6 flex items-center justify-center transition-opacity duration-300 ${
                hoveredItem === item.id ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="text-center">
                <h3 className="text-xl font-bold text-green-500 mb-2">{item.title}</h3>
				<h3 className="text-sm font-bold text-white mb-2">{item.subtitle}</h3>
                <p className="text-white/90 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
		</>
  )
}
