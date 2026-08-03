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
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-900">
          Keahlian
        </h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-white border border-gray-200 rounded-lg shadow-sm px-5 py-3 text-gray-800 font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
