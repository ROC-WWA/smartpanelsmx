import { Mail } from "lucide-react"
import Link from "next/link"

export function ContactButton() {
  return (
    <div className="flex">
      <Link href="/contacto" className="relative flex items-center bg-green-500 hover:bg-green-600 transition-colors rounded-full overflow-hidden group">
      {/* Left section with icon */}
      <div className="flex items-center justify-center w-16 h-16 bg-green-600 group-hover:bg-green-500 relative z-10">
        <Mail className="w-6 h-6 text-white group-hover:animate-bounce" />
      </div>

      {/* Diagonal divider */}
      <div className="absolute left-10 top-0 w-8 h-full bg-green-600 group-hover:bg-green-500 transform skew-x-12 z-0"></div>

      {/* Right section with text */}
      <div className="flex items-center justify-center px-8 pr-8 h-16 relative z-10">
        <span className="text-white font-medium text-lg whitespace-nowrap">Contáctanos</span>
      </div>
    </Link>
    </div>
  )
}
