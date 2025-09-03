"use client"

import { CldImage } from "next-cloudinary"
import Link from "next/link"
import { useState, useEffect } from "react"
//import { Button } from "@/components/ui/button"

const slides = [
  {
    id: 1,
    image: "/smart-panel-sector-institucional.png",
    alt: "Mountain landscape at sunset",
  },
  {
    id: 2,
    image: "/smart-panel-sector-comercial.png",
    alt: "Ocean waves on tropical beach",
  },
  {
    id: 3,
    image: "/Smart-Panel-Banner-05.webp",
    alt: "Forest path with sunlight",
  },
  {
    id: 4,
    image: "/smart-panel-sector-comercial.png",
    alt: "City skyline at night",
  },
]

export default function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)

      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
        setIsAnimating(false)
      }, 500) // Half of the transition duration
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`relative w-full h-full transform transition-transform duration-6000 ease-out ${
              index === currentSlide && !isAnimating ? "scale-110" : index === currentSlide ? "scale-100" : "scale-100"
            }`}
          >
            <img
              src={slide.image || "/placeholder.svg"}
              alt={slide.alt}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      ))}

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <CldImage src="LOGO-COLOR-SMART-PANEL-SLD_dlklfw" alt="Smart Panel Logo" width={300} height={100} className="mx-auto mb-4 hidden md:block" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6 sm:mb-8 md:leading-18 leading-8">
            Paneles SP:<br /> Somos Fabricantes
            <br />
            <span className="lg:text-xl text-lg font-medium">
              Panel sándwich de poliestireno expandido para construcciones modulares y eficientes. 
            </span>
          </h1>
          <div
        className="py-2 font-semibold"
            >
        <Link href="/contacto">
        <CldImage src="whatsapp-button_xpbvdh" alt="Smart Panel Logo" width={272} height={100} className="mx-auto mb-4" />
        </Link>
            </div>
        </div>
      </div>
    </div>
  )
}