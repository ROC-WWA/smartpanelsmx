import { Edit } from "lucide-react"

export function QuoteButton() {
  return (
    <button className="relative flex items-center bg-green-500 hover:bg-green-600 transition-colors rounded-full overflow-hidden group">
      {/* Left section with icon */}
      <div className="flex items-center justify-center w-16 h-16 bg-green-600 relative z-10">
        <Edit className="w-6 h-6 text-white" />
      </div>

      {/* Diagonal divider */}
      <div className="absolute left-12 top-0 w-8 h-full bg-green-600 transform skew-x-12 z-0"></div>

      {/* Right section with text */}
      <div className="flex items-center justify-center px-6 pr-8 h-16 relative z-10">
        <span className="text-white font-medium text-lg whitespace-nowrap">Cotiza tu proyecto</span>
      </div>
    </button>
  )
}
