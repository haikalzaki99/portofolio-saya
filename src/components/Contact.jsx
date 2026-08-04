import { motion } from 'framer-motion'
import { GitBranch, Mail, MessageCircle } from 'lucide-react'

const contacts = [
  { label: 'Email', icon: Mail, href: 'mailto:ekalcmc07@gmail.com' },
  { label: 'Whatsapp', icon: MessageCircle, href: 'https://wa.me/6281212438268' },
  { label: 'GitHub', icon: GitBranch, href: 'https://github.com/haikalzaki99' },
]

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
          {contacts.map((contact) => {
            const Icon = contact.icon
            return (
            <a
            key={contact.label}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-slate-800 dark:bg-slate-700 border border-slate-700 dark:border-slate-600 rounded-lg shadow-sm px-5 py-2.5 text-slate-100 font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
            <Icon size={18} className="text-indigo-400" />
             {contact.label}
            </a>
          )
          })}
        </div>
      </motion.div>
    </section>
  )
}