"use client"

import { useState } from "react"
import Image from "next/image"
import { CldImage } from "next-cloudinary"

interface GridItem {
  id: number
  title: string
  image: string
  description: string
}

const gridItems: GridItem[] = [
	{
    id: 1,
		title: "Farmacéutico",
		description:
			"Espacios limpios, controlados y eficientes para cumplir con los más altos estándares sanitarios.",
		image: "smart-panel-sector-farmaceutico_zqju5p",
	},
	{
		id: 2,
		title: "Alimenticio",
		description:
			"Soluciones higiénicas y térmicamente eficientes para áreas de producción y almacenamiento.",
		image: "smart-panel-sector-alimenticio_oaei4x",
	},
	{
		id: 3,
		title: "Comercial",
		description:
			"Construcción ágil y estética para tiendas, plazas y centros de distribución.",
		image: "smart-panel-sector-comercial_vgvwhi",
	},
	{
		id: 4,
		title: "Institucional",
		description:
			"Infraestructura duradera y funcional para escuelas, hospitales y dependencias gubernamentales.",
		image: "smart-panel-sector-institucional_klub09",
	},
	{
		id: 5,
		title: "Industrial",
		description:
			"Paneles para naves, plantas y almacenes con alto desempeño térmico y estructural.",
		image: "smart-panel-sector-industrial_xpooqo",
	},
	{
		id: 6,
		title: "Automotriz",
		description:
			"Sistemas eficientes que optimizan procesos, control ambiental y seguridad industrial.",
		image: "smart-panel-sector-automotriz_e6wkja",
	},
	{
		id: 7,
		title: "Residencial",
		description:
			"Confort térmico, rapidez constructiva y diseño moderno para viviendas sustentables.",
		image: "smart-panel-sector-residencial_odisim",
	},
];

export function ImageGrid() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {gridItems.map((item) => (
        <div
          key={item.id}
          className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          onMouseEnter={() => setHoveredItem(item.id)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <div className="aspect-[4/3] relative">
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
                <h3 className="text-xl font-bold text-green-500 mb-3">{item.title}</h3>
                <p className="text-white/90 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
