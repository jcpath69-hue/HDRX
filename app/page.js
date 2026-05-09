export default function Home() {
  return (
    <main className="min-h-screen bg-[#07111b] text-white flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className="text-7xl font-black mb-6">
          <span className="text-cyan-400">HDRX</span>#7777
        </h1>

        <p className="max-w-2xl mx-auto text-slate-300 text-xl mb-10">
          Professional VALORANT player portfolio inspired by the VALORANT client UI.
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-8">
            <h2 className="text-3xl font-black mb-3">Radiant</h2>
            <p className="text-slate-300">Top 7 Peak</p>
          </div>

          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-8">
            <h2 className="text-3xl font-black mb-3">VCT</h2>
            <p className="text-slate-300">Top 16 Qualifiers</p>
          </div>

          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-8">
            <h2 className="text-3xl font-black mb-3">Champion</h2>
            <p className="text-slate-300">Multiple Tournament Wins</p>
          </div>
        </div>

        <div className="mt-12">
          <a
            href="mailto:hdrx7777@gmail.com"
            className="rounded-2xl bg-cyan-400 px-8 py-4 text-black font-black"
          >
            Contact Me
          </a>
        </div>
      </div>
    </main>
  );
}
