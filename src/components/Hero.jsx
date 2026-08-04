export default function Hero() {
  return (
    <section className="min-h-screen bg-gray-900 dark:bg-gray-950 text-white flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className="text-5xl font-bold mb-4">JACK TECH</h1>
        <p className="text-xl text-gray-300 dark:text-gray-400 mb-8">
          Frontend Developer | Membangun web modern dan responsif
        </p>
        <a
          href="#projects"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
        >
          Lihat Project Saya
        </a>
      </div>
    </section>
  )
}
