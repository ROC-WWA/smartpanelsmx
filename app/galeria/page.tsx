import Gallery from "../_components/gallery"
import Title from "../_components/title"
import ImageGallery from "./ImageGallery"

const images = [
  {
    src: "/smart-panel-proyectos-galeria-01.webp",
    alt: "Institucional Sector",
    title: "Institucional Sector",
  },
  {
    src: "/smart-panel-proyectos-galeria-02.webp",
    alt: "Comercial Sector",
    title: "Comercial Sector",
  },
  {    src: "/smart-panel-proyectos-galeria-03.webp",
    alt: "Industrial Sector",
    title: "Industrial Sector",
  },
  {    src: "/smart-panel-proyectos-galeria-04.webp",
    alt: "Hospital Sector",
    title: "Hospital Sector",
  },
  {    src: "/smart-panel-proyectos-galeria-05.webp",
    alt: "Residential Sector",
    title: "Residential Sector",
  },
  {    src: "/smart-panel-proyectos-galeria-06.webp",
    alt: "Office Sector",
    title: "Office Sector",
  },
  {    src: "/smart-panel-proyectos-galeria-07.webp",
    alt: "Warehouse Sector",
    title: "Warehouse Sector",
  },
  {    src: "/smart-panel-proyectos-galeria-08.webp",
    alt: "Classroom Sector",
    title: "Classroom Sector",
  },
  {    src: "/smart-panel-proyectos-galeria-09.webp",
    alt: "Retail Sector",
    title: "Retail Sector",
  },
  {    src: "/smart-panel-proyectos-galeria-10.webp",
    alt: "Custom Projects",
    title: "Custom Projects",
  },
  {    src: "/smart-panel-proyectos-galeria-11.webp",
    alt: "Smart Panel Applications",
    title: "Smart Panel Applications",
  },
  {    src: "/smart-panel-proyectos-galeria-12.webp",
    alt: "Smart Panel Solutions",
    title: "Smart Panel Solutions",
  },
  {    src: "/smart-panel-proyectos-galeria-13.webp",
    alt: "Smart Panel Innovations",
    title: "Smart Panel Innovations",
  },
  {    src: "/smart-panel-proyectos-galeria-14.webp",
    alt: "Smart Panel Projects",
    title: "Smart Panel Projects",
  }
]

const GalleryPage = () => {
  return (
    <div>
      <Title>Galería</Title>
      <div className="max-w-6xl mx-auto p-6">
        <Gallery images={images} />
        <ImageGallery />
      </div>
    </div>
  )
}
export default GalleryPage;
