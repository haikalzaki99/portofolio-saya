const projects = [
  {
    name: 'Aplikasi E-Commerce',
    description:
      'Platform belanja online dengan keranjang, checkout, dan integrasi pembayaran.',
    tech: ['React', 'Tailwind', 'REST API'],
  },
  {
    name: 'Website Portofolio',
    description:
      'Landing page personal untuk menampilkan karya dan pengalaman kerja.',
    tech: ['React', 'Tailwind'],
  },
  {
    name: 'Dashboard Admin',
    description:
      'Panel admin untuk mengelola data pengguna, laporan, dan statistik.',
    tech: ['React', 'Tailwind', 'Node.js'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-900">
          Project Saya
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="bg-white border border-gray-200 rounded-xl shadow p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {project.name}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-100 text-blue-700 text-sm font-medium px-2.5 py-0.5 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                Lihat Detail
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
