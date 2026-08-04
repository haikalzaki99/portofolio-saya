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
        <h2 className="text-4xl font-bold mb-6">Mewujudkan Sistem Digital Nggak Pake Ribet, Sesuai Vibe Bisnis Anda.</h2>
        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
          Saya membantu bisnis dan institusi Anda go digital tanpa ribet. 
          Menggunakan pendekatan Vibe Coding yang modern, saya bisa menerjemahkan ide Anda menjadi website yang 
          berfungsi utuh dengan jauh lebih cepat. Mulai dari landing page peningkat omzet, aplikasi kasir UMKM, undangan online, 
          hingga sistem administrasi sekolah yang memudahkan urusan tata kelola absensi dan agenda. Anda cukup sampaikan visinya, 
          mari kita buat sistemnya sesuai vibe Anda!
        </p>
      </motion.div>
    </section>
  )
}
