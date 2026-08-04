import { motion } from 'framer-motion'

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
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-900">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-6xl mx-auto px-6"
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 text-center mb-2">
          Portofolio
        </p>
        <h2 className="text-4xl font-bold text-center mb-10 text-slate-900 dark:text-white">
          Project Saya
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
              className="relative overflow-hidden bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-indigo-500/10 to-transparent"
              />
              <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
                {project.name}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300 text-sm font-medium px-2.5 py-0.5 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="#"
                className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-semibold"
              >
                Lihat Detail
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
