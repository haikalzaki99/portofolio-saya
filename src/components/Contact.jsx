import { motion } from 'framer-motion'

const contacts = ['Email', 'LinkedIn', 'GitHub']

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900 dark:bg-slate-800 text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-2xl mx-auto px-6 text-center"
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-2">
          Kontak
        </p>
        <h2 className="text-4xl font-bold mb-4">Hubungi Saya</h2>
        <p className="text-lg text-slate-300 dark:text-slate-400 mb-10 leading-relaxed">
          Tertarik bekerja sama? Jangan ragu untuk menghubungi saya.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {contacts.map((contact) => (
            <a
              key={contact}
              href="#"
              className="border border-slate-600 hover:border-indigo-500 hover:text-indigo-400 rounded-full px-6 py-2.5 font-medium transition-colors"
            >
              {contact}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
