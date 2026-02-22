export default function AcercaDeNosotros() {
  return (
    <article>
      <header className="border-b border-white/5 mb-8">
        <h1 className="text-5xl font-extrabold tracking-tighter leading-none">
          Acerca de <span className="text-zinc-400 font-medium">Nosotros</span>
        </h1>
      </header>

      <div className="space-y-8 text-gray-300 text-lg">
        <section>
          <h2 className="text-xl font-semibold mb-2">Orígenes</h2>
          <p>
            Somos una comunidad que nació en el <strong>2003</strong> y tuvo
            periodos de inactividad por varios años. Intentamos regresar, caímos
            y hoy en día hemos decidido volver a los orígenes, en el cual
            buscamos compartir contenido e información relevante para los
            guitarristas.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Lo que hacemos</h2>

          <p className="mb-4">
            Básicamente somos un <strong>blog</strong> y nos ayudamos de la{" "}
            <strong>IA</strong> para mejorar el contenido de este y complementar
            la información que entregamos a nuestra comunidad.
          </p>

          <p>
            Aquí encontrarás desde tips de guitarra, licks, teoría hasta
            reflexiones como guitarrista.
          </p>
        </section>
      </div>
    </article>
  );
}
