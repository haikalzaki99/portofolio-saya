import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-3xl mx-auto px-6 text-center"
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-2">
          Tentang
        </p>
        <h2 className="text-4xl font-bold mb-6">Tentang Saya</h2>
        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
          Saya adalah seorang web developer yang senang membangun aplikasi web
          modern menggunakan teknologi terkini. Fokus saya adalah menciptakan
          pengalaman pengguna yang bersih, cepat, dan responsif.
        </p>
      </motion.div>
    </section>
  )
}
