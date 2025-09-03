"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"
import { Button } from "./button"
import { cn } from "@/lib/utils"
//import { Button } from "@/_components/ui/button"

interface GalleryImage {
  src: string
  alt: string
  title: string
}

interface GalleryProps {
  images: GalleryImage[],
  className?: string
}

export default function Gallery({ images, className }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length)
    }
  }

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length)
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") {
      closeLightbox()
    } else if (event.key === "ArrowLeft") {
      goToPrevious()
    } else if (event.key === "ArrowRight") {
      goToNext()
    }
  }

  return (
    <>
      {/* Gallery Grid */}
      <div className={cn("grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4", className)}>
        {images.map((image, index) => (
          <div
            key={index}
            className="group relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              className="object-cover transition-transform duration-300 group-hover:scale-105 w-full h-full"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              loading="lazy"
            />
            {/* Overlay */}
            <div className="absolute inset-0  group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-8 w-8" />
            </div>
            {/* Title overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
              <h3 className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {image.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          {/* Close button */}
          <Button
            variant="outline"
            size="icon"
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 border-white/20 text-white z-10"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X className="h-4 w-4" />
          </Button>

          {/* Navigation buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 border-white/20 text-white z-10"
            onClick={(e) => {
              e.stopPropagation()
              goToPrevious()
            }}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 border-white/20 text-white z-10"
            onClick={(e) => {
              e.stopPropagation()
              goToNext()
            }}
            aria-label="Next image"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Main image */}
          <div className="relative max-w-full max-h-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[selectedImage].src || "/placeholder.svg"}
              alt={images[selectedImage].alt}
              width={1200}
              height={800}
              className="max-w-full max-h-[80vh] object-contain"
            />

            {/* Image info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <h3 className="text-white text-lg font-medium mb-1">{images[selectedImage].title}</h3>
              <p className="text-white/80 text-sm">
                {selectedImage + 1} de {images.length}
              </p>
            </div>
          </div>

          {/* Thumbnail navigation */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 max-w-full overflow-x-auto px-4">
            {images.map((image, index) => (
              <button
                key={index}
                className={`relative w-16 h-16 flex-shrink-0 rounded overflow-hidden ${
                  index === selectedImage ? "ring-2 ring-white" : "opacity-60 hover:opacity-80"
                }`}
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedImage(index)
                }}
                aria-label={`View ${image.title}`}
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="object-cover"
                  sizes="64px"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
