// app/not-found.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { CldImage } from 'next-cloudinary'

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 px-6 py-12 text-center">
      <h1 className="text-6xl font-extrabold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">¡Vaya! No encontramos esta página.</h2>
      <p className="text-lg mb-6 max-w-xl">
        Puede que la URL esté mal escrita o que esta página haya sido removida. Pero no te preocupes, seguimos construyendo soluciones rápidas y eficientes.
      </p>
      <Link
        href="/"
        className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded transition"
      >
        Volver al inicio
      </Link>

      <div className="mt-10 text-sm text-gray-500">
        ¿Buscas soluciones de construcción modular?{' '}
        <Link href="/contacto" className="text-primary underline hover:text-primary-dark">
          Contáctanos
        </Link>
      </div>
    </main>
  )
}