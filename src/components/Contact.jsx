const contacts = ['Email', 'LinkedIn', 'GitHub']

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Hubungi Saya</h2>
        <p className="text-lg text-gray-300 mb-10">
          Tertarik bekerja sama? Jangan ragu untuk menghubungi saya.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {contacts.map((contact) => (
            <a
              key={contact}
              href="#"
              className="border border-gray-600 hover:border-blue-500 hover:text-blue-400 rounded-full px-6 py-2.5 font-medium transition-colors"
            >
              {contact}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
