export default function AcercaDeNosotros() {
  return (
    <div className="min-h-screen text-white font-sans selection:bg-zinc-800 selection:text-zinc-200">
      <main className="max-w-3xl mx-auto px-6 py-24 md:py-40">
        <article className="flex flex-col gap-24">
          {/* Header de alto impacto - Full Width vertical */}
          <header className="space-y-4">
            <h1 className="text-7xl md:text-[120px] font-black tracking-tighter uppercase leading-[0.85]">
              Acerca de <br />
              <span className="text-zinc-700">Nosotros</span>
            </h1>
            <div className="flex items-center gap-4 pt-6 text-[10px] font-mono tracking-[0.4em] text-zinc-600 uppercase">
              <span className="w-12 h-[1px] bg-zinc-800"></span>
              Guitar Community / Est. 2003
            </div>
          </header>

          <section className="space-y-8">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-500">
              01. Orígenes
            </h2>
            <p className="text-2xl md:text-4xl leading-snug font-light text-zinc-300">
              Somos una comunidad que nació en el{" "}
              <strong className="font-bold italic">2003</strong> y tuvo periodos
              de inactividad por varios años. Intentamos regresar, caímos y hoy
              en día hemos decidido volver a los orígenes, en el cual buscamos
              compartir contenido e información relevante para los guitarristas.
            </p>
          </section>

          <section className="space-y-8 border-t border-zinc-900 pt-20">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-500">
              02. Lo que hacemos
            </h2>

            <div className="space-y-12">
              <p className="text-2xl md:text-4xl leading-snug text-zinc-300">
                Básicamente somos un{" "}
                <strong className="text-white underline decoration-zinc-800 underline-offset-8">
                  blog
                </strong>{" "}
                donde creamos y compartimos contenido relevante para
                guitarristas, potenciando la calidad de cada entrega a través de
                la <strong className="text-white">IA</strong>.
              </p>

              <p className="text-xl md:text-2xl text-zinc-500 leading-relaxed max-w-xl italic">
                Aquí encontrarás desde tips de guitarra, licks, teoría hasta
                reflexiones como guitarrista.
              </p>
            </div>
          </section>

          <footer className="pt-20 border-t border-zinc-900 flex justify-between items-center text-[10px] font-mono text-zinc-700 uppercase tracking-widest">
            <span>End of section</span>
            <span>2026 // Back to basics</span>
          </footer>
        </article>
      </main>
    </div>
  );
}
