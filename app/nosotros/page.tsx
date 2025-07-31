import Link from "next/link";
import Title from "../_components/title";

export default function About() {
  return (
<>

  {/* Hero */}
        <Title>¿Quiénes Somos?</Title>
  {/* Company Info */}
  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h3 className="text-sm text-green-500 font-semibold uppercase mb-2">
          Nosotros
        </h3>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">SMART PANEL</h2>
        <p className="text-gray-600 mb-4">
          Es una empresa 100% mexicana dedicada a la fabricación de panel de
          poliestireno expandido reforzados con acero. Con sede en{" "}
          <strong>QUERÉTARO</strong>, nos especializamos en ofrecer soluciones
          de construcción innovadoras y sostenibles.
        </p>
        <p className="text-gray-600">
          Nuestros productos se distinguen por ser modulares y prefabricados, obteniendo una construcción rápida, eficiente, práctica y de alta calidad. Comprometidos así a proporcionar materiales que cumplan con los más altos estándares de durabilidad y seguridad y al mismo tiempo, contribuya a la optimización de los procesos constructivos de nuestros clientes.
        </p>
      </div>
      <img
        src="/smart-panel-prefabricados.png"
        alt="SmartPanel industrial factory exterior with clear skies"
        className=""
      />
    </div>
  </section>
  {/* Vision & Mission */}
  <section className="bg-gray-50 py-16">
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
      <div className="bg-white p-6 rounded-md shadow text-center">
        <div>
          <div className="bg-green-500 size-14 text-white mx-auto mb-4 p-2 rounded-lg flex justify-center items-center">
          <img
          src="/house.svg"
          alt="Icon representing company vision"
          className=""
        />
        </div>
        </div>
        <h4 className="font-bold text-lg mb-2">NUESTRA VISIÓN:</h4>
        <p>
          Ser el referente en México en la fabricación y distribución de material de poliestireno, aportando todas las soluciones posibles a nuestros clientes.
        </p>
      </div>
      <div className="bg-white p-6 rounded-md shadow text-center">
        <div>
          <div className="bg-green-500 size-14 text-white mx-auto mb-4 p-2 rounded-lg flex justify-center items-center">
          <img
          src="/service.svg"
          alt="Icon representing company vision"
          className=""
        />
        </div>
        </div>
        <h4 className="font-bold text-lg mb-2">NUESTRA MISIÓN:</h4>
        <p>
          Proporcionar a nuestros clientes productos de alta calidad y brindar la atención en el servicio, a fin de cubrir sus necesidades. Establecer procesos que ayuden al cuidado del medio ambiente.
        </p>
      </div>
    </div>
  </section>
  {/* Values */}
  <section className="py-16 bg-white">
    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold">Nuestros Valores</h2>
      <p className="text-gray-600 mt-2">
        En Smart Panel, creemos que la calidad del producto solo es posible
        cuando se respalda con una cultura empresarial sólida.
      </p>
    </div>
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 text-center">
      <div className="bg-gray-50 p-6 rounded-md shadow hover:bg-gray-800 group">
        <img
          src="/smart-panel-caseta.png"
          alt="Integrity icon"
          className="mx-auto mb-4 transition-transform duration-500 group-hover:rotate-y-360"
          style={{ transformStyle: 'preserve-3d' }}
        />
        <h4 className="font-semibold text-lg mb-2 group-hover:text-white">Puntualidad</h4>
        <p className="text-gray-600 group-hover:text-white">
          Cumplimos con nuestros compromisos con entregas en tiempo y forma.
        </p>
      </div>
      <div className="bg-gray-50 p-6 rounded-md shadow hover:bg-gray-800 group">
        <img
          src="/smart-panel-viviendas-pref.png"
          alt="Integrity icon"
          className="mx-auto mb-4 transition-transform duration-500 group-hover:rotate-y-360"
          style={{ transformStyle: 'preserve-3d' }}
        />
        <h4 className="font-semibold text-lg mb-2 group-hover:text-white">Trabajo en equipo</h4>
        <p className="text-gray-600 group-hover:text-white">
          Fomentamos un ambiente positivo donde cada miembro de la empresa aporta valor y contribuye al logro de mejores resultados.
        </p>
      </div>
      <div className="bg-gray-50 p-6 rounded-md shadow hover:bg-gray-800 group">
        <img
          src="/smart-panel-consultorios.png"
          alt="Integrity icon"
          className="mx-auto mb-4 transition-transform duration-500 group-hover:rotate-y-360"
          style={{ transformStyle: 'preserve-3d' }}
        />
        <h4 className="font-semibold text-lg mb-2 group-hover:text-white">Responsabilidad</h4>
        <p className="text-gray-600 group-hover:text-white">
          Fabricamos productos y ofrecemos servicios que cumplen con altos estándares de calidad.
        </p>
      </div>
      <div className="bg-gray-50 p-6 rounded-md shadow hover:bg-gray-800 group">
        <img
          src="/smart-panel-icon2.png"
          alt="Integrity icon"
          className="mx-auto mb-4 transition-transform duration-500 group-hover:rotate-y-360"
          style={{ transformStyle: 'preserve-3d' }}
        />
        <h4 className="font-semibold text-lg mb-2 group-hover:text-white">Honestidad</h4>
        <p className="text-gray-600 group-hover:text-white">
          Mantenemos una relación transparente con colaboradores, clientes y proveedores.
        </p>
      </div>
      <div className="bg-gray-50 p-6 rounded-md shadow hover:bg-gray-800 group">
        <img
          src="/smart-panel-icon4.png"
          alt="Integrity icon"
          className="mx-auto mb-4 transition-transform duration-500 group-hover:rotate-y-360"
          style={{ transformStyle: 'preserve-3d' }}
        />
        <h4 className="font-semibold text-lg mb-2 group-hover:text-white">Seguridad</h4>
        <p className="text-gray-600 group-hover:text-white">
          Garantizamos espacios de trabajo seguros y libres de accidentes para todos nuestros empleados.
        </p>
      </div>
    </div>
  </section>
  {/* Certification */}
  <section className="py-16"
      style={{
      backgroundImage:
        'url("/footer-bg8.png")'
    }}
    >
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          ¡Certificación que Respalda tus Proyectos!
        </h2>
        <p className="text-gray-600">
Smart Panel México es una empresa 100% mexicana con experiencia en obras a nivel nacional. Nuestra certificación ECMX-1369/19 avala cada proceso de fabricación, garantizando sistemas constructivos seguros, eficientes y alineados con los más altos estándares del sector.
        </p>
      </div>
      <img
        src="/smartpanel-design-2.png"
        alt="Certified warehouse building used by SmartPanel"
        className=""
      />
    </div>
  </section>
  {/* Commitment Section */}
  <section
    className="relative py-24 bg-cover bg-center text-white"
    style={{
      backgroundImage:
        'url("/background.jpg")'
    }}
  >
    <div className="absolute inset-0" />
    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold mb-4">
        Comprometidos con la innovación y el medio ambiente
      </h2>
      <p className="mb-6">
        Nuestro enfoque no solo es técnico, también es responsable. Promovemos
        soluciones de construcción que ayudan a reducir el consumo de energía
        eléctrica y la huella ambiental.
      </p>
      <Link
        href="/contacto"
        className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md font-semibold"
      >
        Contáctanos
      </Link>
    </div>
  </section>
</>

  );
}