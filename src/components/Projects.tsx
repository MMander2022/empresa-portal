export default function Projects() {
  return (
    <section
      id="proyectos"
      className="bg-black text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold mb-16 text-center">
          Proyectos
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-white transition">

            <h3 className="text-2xl font-semibold mb-4">
              Sistema Cooperativa
            </h3>

            <p className="text-gray-400 mb-6">
              Plataforma financiera moderna desarrollada con React, .NET y Azure.
            </p>

            <a
              href="https://cooperativa.tudominio.com"
              className="text-white font-semibold"
            >
              Ingresar →
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}