import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-3xl mx-auto px-6 text-center"
      >
        <h2 className="text-4xl font-bold mb-6">Tentang Saya</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Saya adalah seorang web developer yang senang membangun aplikasi web
          modern menggunakan teknologi terkini. Fokus saya adalah menciptakan
          pengalaman pengguna yang bersih, cepat, dan responsif.
        </p>
      </motion.div>
    </section>
  )
}
