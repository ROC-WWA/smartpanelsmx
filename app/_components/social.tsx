import Link from "next/link";
import { Facebook, Instagram, LinkedIn, WhatsApp, Youtube } from "./icons";

const SocialNetworks = ({className} : {className?: string}) => {
  return(
    <div className={`flex flex-wrap gap-4 ${className}`}>
      <Link href="https://api.whatsapp.com/send?phone=5215610197622&text=Hola,%20me%20gustaria%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20productos" target="_blank" rel="noopener noreferrer" className="size-6 hover:text-green-500">
        <WhatsApp className="size-6 fill-current" />
      </Link>
      <Link href="https://www.facebook.com/smartpanelmx/" target="_blank" rel="noopener noreferrer" className="size-6 hover:text-green-500">
        <Facebook className="size-6 fill-current" />
      </Link>
      <Link href="https://www.linkedin.com/company/smart-panel-s-a-de-c-v/?originalSubdomain=mx" target="_blank" rel="noopener noreferrer" className="size-6 hover:text-green-500">
        <LinkedIn className="size-6 fill-current" />
      </Link>
      <Link href="https://www.instagram.com/smart_panelsp/" target="_blank" rel="noopener noreferrer" className="size-6 hover:text-green-500">
        <Instagram className="size-6 fill-current" />
      </Link>
      <Link href="https://www.youtube.com/@smartpanel3982" target="_blank" rel="noopener noreferrer" className="size-6 hover:text-green-500">
        <Youtube className="size-6 fill-current" />
      </Link>
    </div>
  )
}

export default SocialNetworks;