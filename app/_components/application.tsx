export const applications = [
  {
    image: "/smart-panel-aplicacion-nave-industrial-1.webp",
    link: "/",
    title: "Naves Industriales",
  },
  {
    image: "/smart-panel-aplicacion-hospitales.webp",
    link: "/",
    title: "Hospitales",
  },
  {
    image: "/Banners_1920900-1600-x-1000-px.jpg",
    link: "/",
    title: "Residenciales Habitacionales",
  },
  {
    image: "/smart-panel-aplicaciones-oficinas-1.webp",
    link: "/",
    title: "Oficinas",
  },
  {
    image: "/smart-panel-aplicaciones-aulas-2.webp",
    link: "/",
    title: "Aulas",
  },
  {
    image: "/smart-panel-aplicaciones-bodega.webp",
    link: "/",
    title: "Bodegas y Almacenes",
  },
  {
    image: "/smart-panel-aplicaciones-casetas-4.webp",
    link: "/",
    title: "Casetas",
  },
  {
    image: "/Smart-Panel-Productos-03.webp",
    link: "/",
    title: "Cámaras",
  }
]
const Application = ({image, link, title}: {image: string, link: string, title: string}) => {
  return (
    <div className="h-72">
      <img src={image} alt={title} className="h-full w-full mb-4 object-cover" />
    </div>
  );
}

export default Application;