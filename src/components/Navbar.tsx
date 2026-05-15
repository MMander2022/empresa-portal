export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <h1 className="text-2xl font-bold text-white">
          Mander Tech
        </h1>

        <nav className="flex gap-6 text-gray-300">
          <a href="#servicios" className="hover:text-white transition">
            Servicios
          </a>

          <a href="#proyectos" className="hover:text-white transition">
            Proyectos
          </a>

          <a href="#contacto" className="hover:text-white transition">
            Contacto
          </a>
        </nav>

      </div>
    </header>
  );
}