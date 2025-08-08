"use client"

import type React from "react"

import { useState } from "react"
import { Cpu, Monitor, Battery, Wifi, HardDrive, Zap } from "lucide-react"
import { CldImage } from "next-cloudinary"

interface TooltipData {
  id: string
  x: number
  y: number
  title: string
  icon: React.ReactNode
}

const tooltips: TooltipData[] = [
    {
    id: "lamina",
    x: 44,
    y: 27,
    title: "Lámina cal.16",
    icon: <Cpu className="w-4 h-4" />,
  },
  
    {
    id: "machimbre",
    x: 42,
    y: 60,
    title: "Machimbre Sig-lock",
    icon: <Zap className="w-4 h-4" />,
  },

  {
    id: "nucleo",
    x: 65,
    y: 67,
    title: "Núcleo (EPS)",
    icon: <HardDrive className="w-4 h-4" />,
  },

]

export default function ShowcaseMuro() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null)
  const [hoveredTooltip, setHoveredTooltip] = useState<string | null>(null)

  const handleTooltipClick = (id: string) => {
    setActiveTooltip(activeTooltip === id ? null : id)
  }

  const isTooltipVisible = (id: string) => {
    return activeTooltip === id || hoveredTooltip === id
  }

  return (
    <>
        <div className="relative">
          <CldImage
						className="mx-auto"
						src="smart-panel-panel-muro_k40rdl"
						width="800"
						alt="MacBook Pro 14 inch laptop"
						height="600"
						crop={{
							type: "auto",
							source: true,
						}}
				/>
        

          {/* Tooltip Dots */}
          {tooltips.map((tooltip) => (
            <div key={tooltip.id} >
              {/* Dot */}
              <button
                className={`absolute w-6 h-6 rounded-full border-2 border-white shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  isTooltipVisible(tooltip.id) ? "bg-green-500 animate-pulse" : "bg-green-400 hover:bg-green-500"
                }`}
                style={{
                  left: `${tooltip.x}%`,
                  top: `${tooltip.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
                onClick={() => handleTooltipClick(tooltip.id)}
                onMouseEnter={() => setHoveredTooltip(tooltip.id)}
                onMouseLeave={() => setHoveredTooltip(null)}
                aria-label={`Show details about ${tooltip.title}`}
              >
                <div className="w-full h-full rounded-full bg-white/20 animate-ping absolute"></div>
              </button>

              {/* Tooltip Card */}
              {isTooltipVisible(tooltip.id) && (
                <div
                  className={`absolute z-10 w-72 rounded-2xl shadow-xl border-0 bg-white/95 backdrop-blur-sm transition-all duration-300 ${
                    tooltip.x > 50 ? "right-10" : "left-10"
                  } ${tooltip.y > 50 ? "bottom-10" : "top-10"}`}
                  style={{
                    left: tooltip.x > 50 ? "auto" : `${tooltip.x + 2}%`,
                    right: tooltip.x > 50 ? `${100 - tooltip.x + 2}%` : "auto",
                    top: tooltip.y > 50 ? "auto" : `${tooltip.y + 2}%`,
                    bottom: tooltip.y > 50 ? `${100 - tooltip.y + 2}%` : "auto",
                  }}
                >
                  <div className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">{tooltip.title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Instructions */}
        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">Descubre las características clave del Panel MURO SP</p>
        </div>
    </>
  )
}
