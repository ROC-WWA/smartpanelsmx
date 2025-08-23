"use client"

import { useState } from "react"
import { Button } from "@/app/_components/button"

interface Item {
  id: number
  title: string
  image: string
  href: string
}

export const items: Item[] = [
  {
    id: 1,
    title: "Naves Industriales",
    image: "https://res.cloudinary.com/dbl4j1i1f/image/upload/v1754513777/smart-panel-aplicacion-nave-industrial-1_jmioci.webp",
    href: "/aplicaciones/naves-industriales",
  },
  {
    id: 2,
    title: "Hospitales",
    image: "https://res.cloudinary.com/dbl4j1i1f/image/upload/v1754513777/smart-panel-aplicacion-hospitales_enabtg.webp",
    href: "/aplicaciones/hospitales",
  },
  {
    id: 3,
    title: "Residenciales Habitacionales",
    image: "https://res.cloudinary.com/dbl4j1i1f/image/upload/v1754513866/smart-panel-sector-residencial_odisim.png",
    href: "/aplicaciones/residenciales-habitacionales",
  },
  {
    id: 4,
    title: "Oficinas",
    image: "https://res.cloudinary.com/dbl4j1i1f/image/upload/v1754513798/smart-panel-aplicaciones-oficinas-1_b1itpc.webp",
    href: "/aplicaciones/oficinas",
  },
  {
    id: 5,
    title: "Aulas",
    image: "https://res.cloudinary.com/dbl4j1i1f/image/upload/v1754513790/smart-panel-aplicaciones-aulas-3-460x460_1_ju7dac.webp",
    href: "/aplicaciones/aulas",
  },
  {
    id: 6,
    title: "Bodegas/almacenes",
    image: "https://res.cloudinary.com/dbl4j1i1f/image/upload/v1754513791/smart-panel-aplicaciones-bodega_dkbzpe.webp",
    href: "/aplicaciones/bodegas-almacenes",
  },
  {
    id: 7,
    title: "Casetas",
    image: "https://res.cloudinary.com/dbl4j1i1f/image/upload/v1754513796/smart-panel-aplicaciones-casetas-4_iddzpp.webp",
    href: "/aplicaciones/casetas",
  },
  {
    id: 8,
    title: "Cámaras",
    image: "https://res.cloudinary.com/dbl4j1i1f/image/upload/v1754513793/smart-panel-aplicaciones-camaras-2_xskctt.webp",
    href: "/aplicaciones/camaras",
  }
]

export default function ImageAccordion({items, defaultActiveId}: {items: Item[], defaultActiveId?: number}) {
  const [activeId, setActiveId] = useState<number>(defaultActiveId || 1)

  return (
    <div className="flex h-[500px] gap-2 rounded-xl overflow-hidden shadow-2xl">
      {items.map((item) => {
        const isActive = item.id === activeId

        return (
          <div
            key={item.id}
            className={`relative cursor-pointer transition-all duration-700 ease-in-out ${
              isActive ? "flex-[3]" : "flex-[0.5]"
            }`}
            onClick={() => setActiveId(item.id)}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Content */}
            <div className="relative h-full flex flex-col justify-end p-6 text-white">
              {!isActive ? (
                <div></div>
              ) : (
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold">{item.title}</h3>
                  <Button
                    className="bg-green-500 hover:bg-green-500 text-black font-semibold px-6 py-2 rounded-lg transition-colors duration-300"
                    onClick={(e) => {
                      e.stopPropagation()
                      window.location.href = item.href
                    }}
                  >
                    Ver más
                  </Button>
                </div>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
