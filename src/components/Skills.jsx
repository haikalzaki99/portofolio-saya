import { motion } from 'framer-motion'

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Tailwind CSS',
  'Git & GitHub',
  'Node.js',
  'REST API',
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-950">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-4xl mx-auto px-6"
      >
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">
          Keahlian
        </h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm px-5 py-3 text-gray-800 dark:text-gray-100 font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
