function App() {
  return (
    <div className="min-h-screen font-body p-4 md:p-8 flex flex-col">

      <header className="max-w-6xl w-full mx-auto flex justify-between items-center mb-8 border-b border-title-brown/20 pb-4">
        <a href="#inicio" aria-label="Harry Potter - ir para o início">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Harry_Potter_wordmark.svg" alt="Harry Potter" className="h-8 md:h-10 opacity-90 hover:opacity-100 transition-opacity" />
        </a>

        <nav aria-label="Principal" className="hidden md:flex items-center gap-8 font-magic text-sm font-bold tracking-wider text-title-brown">
          <a href="#inicio" className="hover:text-amber-800 transition-colors">INÍCIO</a>
          <a href="#casas" className="hover:text-amber-800 transition-colors">CASAS</a>
          <a href="#personagens" className="hover:text-amber-800 transition-colors">PERSONAGENS</a>
        </nav>

        <div className="flex items-center gap-3">
          <button type="button" aria-label="Alternar tema" className="text-2xl text-title-brown hover:scale-110 transition-transform p-1 focus-visible:ring-2 focus-visible:ring-title-brown">☀</button>
          <button type="button" aria-label="Abrir menu" className="md:hidden text-2xl text-title-brown hover:scale-105 transition-transform p-1 focus-visible:ring-2 focus-visible:ring-title-brown">☰</button>
        </div>
      </header>

      <main className="max-w-6xl w-full mx-auto grow">
        <section id="inicio" className="text-center mb-10 mt-4 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-title-brown font-magic tracking-wider">Guia de Hogwarts</h1>
          <p className="text-body-brown text-base md:text-lg max-w-xl font-semibold">
            Bem-vindo ao Guia de Hogwarts. Explore o catálogo interativo, filtre os personagens pelas quatro Casas e salve os seus favoritos.
          </p>
        </section>
        <section id="casas" className="mb-12">
          <h2 className="text-2xl text-center text-title-brown font-magic tracking-wide font-bold mb-6">Casas de Hogwarts</h2>
          <div className="flex justify-center gap-5 sm:gap-8">
            <button type="button" className="flex flex-col items-center gap-2 group">
              <span className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-title-brown bg-white/30 group-hover:bg-white/60 transition-colors overflow-hidden flex items-center justify-center p-2">
                <img src='assets/img/grifinoria.png' alt="Brasão da Grifinória" className="w-full h-full object-contain" />              </span>
              <span className="text-sm text-body-brown font-semibold group-hover:text-title-brown">Grifinória</span>
            </button>
            <button type="button" className="flex flex-col items-center gap-2 group">
              <span className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-title-brown bg-white/30 group-hover:bg-white/60 transition-colors overflow-hidden flex items-center justify-center p-2">
                <img src='/assets/img/sonserina.png' alt="Brasão da Sonserina" className="w-full h-full object-contain" />
              </span>
              <span className="text-sm text-body-brown font-semibold group-hover:text-title-brown">Sonserina</span>
            </button>
            <button type="button" className="flex flex-col items-center gap-2 group">
              <span className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-title-brown bg-white/30 group-hover:bg-white/60 transition-colors overflow-hidden flex items-center justify-center p-2">
                <img src="/assets/img/corvinal.png" alt="Brasão da Corvinal" className="w-full h-full object-contain" />
              </span>
              <span className="text-sm text-body-brown font-semibold group-hover:text-title-brown">Corvinal</span>
            </button>
            <button type="button" className="flex flex-col items-center gap-2 group">
              <span className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-title-brown bg-white/30 group-hover:bg-white/60 transition-colors overflow-hidden flex items-center justify-center p-2">
                <img src="/assets/img/lufalufa.webp" alt="Brasão da Lufa-Lufa" className="w-full h-full object-contain" />
              </span>
              <span className="text-sm text-body-brown font-semibold group-hover:text-title-brown">Lufa-Lufa</span>
            </button>
          </div>
        </section>
      </main>

    </div>
  )
}

export default App