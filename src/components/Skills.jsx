import { motion } from 'framer-motion'
import {
  Atom,
  Braces,
  Code,
  GitBranch,
  Globe,
  Palette,
  Server,
  Wind,
} from 'lucide-react'

const skills = [
  { name: 'HTML', icon: Code },
  { name: 'CSS', icon: Palette },
  { name: 'JavaScript', icon: Braces },
  { name: 'React', icon: Atom },
  { name: 'Tailwind CSS', icon: Wind },
  { name: 'Git & GitHub', icon: GitBranch },
  { name: 'Node.js', icon: Server },
  { name: 'REST API', icon: Globe },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-slate-800">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-4xl mx-auto px-6"
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 text-center mb-2">
          Keahlian
        </p>
        <h2 className="text-4xl font-bold text-center mb-10 text-slate-900 dark:text-white">
          Keahlian
        </h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {skills.map((skill) => {
            const Icon = skill.icon
            return (
              <span
                key={skill.name}
                className="inline-flex items-center gap-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm px-5 py-3 text-slate-800 dark:text-slate-100 font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <Icon
                  size={18}
                  className="text-indigo-600 dark:text-indigo-400"
                />
                {skill.name}
              </span>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
