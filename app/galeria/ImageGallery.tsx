'use client'

import { useState, useCallback, useEffect } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { Button } from '@/app/_components/button'

const images = [
  { src: "/smart-panel-proyectos-galeria-01.webp" },
  { src: "/smart-panel-proyectos-galeria-02.webp" },
  { src: "/smart-panel-proyectos-galeria-03.webp" },
  { src: "/smart-panel-proyectos-galeria-04.webp" },
  { src: "/smart-panel-proyectos-galeria-05.webp" },
  { src: "/smart-panel-proyectos-galeria-06.webp" },
  { src: "/smart-panel-proyectos-galeria-07.webp" },
  { src: "/smart-panel-proyectos-galeria-08.webp" },
  { src: "/smart-panel-proyectos-galeria-09.webp" },
  { src: "/smart-panel-proyectos-galeria-10.webp" },
  { src: "/smart-panel-proyectos-galeria-11.webp" },
  { src: "/smart-panel-proyectos-galeria-12.webp" },
  { src: "/smart-panel-proyectos-galeria-13.webp" },
  { src: "/smart-panel-proyectos-galeria-14.webp" }
]

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const closeLightbox = useCallback(() => setSelectedImage(null), [])
  const goToNext = () => selectedImage !== null && setSelectedImage((selectedImage + 1) % images.length)
  const goToPrevious = () => selectedImage !== null && setSelectedImage((selectedImage - 1 + images.length) % images.length)

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowRight') goToNext()
    if (e.key === 'ArrowLeft') goToPrevious()
  }

  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [selectedImage])

  // Create 4 masonry columns
  const columns = 4
  const columnedImages: { src: string; index: number }[][] = Array.from({ length: columns }, () => [])

  images.forEach((img, idx) => {
    return columnedImages[idx % columns].push({ ...img, index: idx })
  })

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {columnedImages.map((column, colIdx) => (
        <div key={colIdx} className="grid gap-4">
          {column.map((img) => (
            <div key={img.index} onClick={() => setSelectedImage(img.index)} className="cursor-pointer">
              <img
                className="w-full rounded-xl shadow transition-transform hover:scale-105 object-cover h-full"
                src={img.src}
              />
            </div>
          ))}
        </div>
      ))}

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          {/* Close */}
          <Button
            variant="outline"
            size="icon"
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 border-white/20 text-white z-10"
            onClick={(e) => {
              e.stopPropagation()
              closeLightbox()
            }}
            aria-label="Close lightbox"
          >
            <X className="h-4 w-4" />
          </Button>

          {/* Prev */}
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

          {/* Next */}
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
              src={images[selectedImage].src}
              width={1200}
              height={800}
              className="max-w-full max-h-[80vh] object-contain"
            />
          </div>

          {/* Thumbnails */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 max-w-full overflow-x-auto px-4">
            {images.map((image, index) => (
              <Button
                key={index}
                className={`relative w-16 h-16 flex-shrink-0 rounded overflow-hidden ${
                  index === selectedImage ? 'ring-2 ring-white' : 'opacity-60 hover:opacity-80'
                }`}
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedImage(index)
                }}
                aria-label={`Image ${index + 1}`}
              >
                <img src={image.src} className="object-cover w-full h-full" />
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}