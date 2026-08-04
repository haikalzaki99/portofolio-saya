export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl"
      />
      <div className="relative text-center px-6">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-300">
          👋 Available for work
        </span>
        <h1 className="mt-6 text-5xl md:text-6xl font-bold tracking-tight">
          JACK TECH
        </h1>
        <p className="mt-5 text-xl text-slate-300 dark:text-slate-400">
          Frontend Developer | Membangun web modern dan responsif
        </p>
        <a
          href="#projects"
          className="mt-10 inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg shadow-indigo-600/30 transition-all duration-300 hover:scale-105 hover:shadow-indigo-500/40"
        >
          Lihat Project Saya
        </a>
      </div>
    </section>
  )
}
