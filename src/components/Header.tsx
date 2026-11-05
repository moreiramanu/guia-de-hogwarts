function Header() {
  return (
    <header className="max-w-7xl w-full mx-auto flex justify-between items-center mb-8 border-b border-title-brown/20 pb-4">
      <a href="#inicio" aria-label="Harry Potter - ir para o início">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Harry_Potter_wordmark.svg" alt="Harry Potter" className="h-8 md:h-10 opacity-90 hover:opacity-100 transition-opacity" />
      </a>

      <nav aria-label="Principal" className="hidden md:flex items-center gap-8 font-magic text-sm font-bold tracking-wider text-title-brown">
        <a href="#inicio" className="hover:text-burgundy transition-colors">INÍCIO</a>
        <a href="#casas" className="hover:text-burgundy transition-colors">CASAS</a>
        <a href="#personagens" className="hover:text-burgundy transition-colors">PERSONAGENS</a>
      </nav>

      <div className="flex items-center gap-3">
        <button type="button" aria-label="Ativar modo escuro" className="text-2xl text-title-brown hover:scale-110 transition-transform p-1 focus-visible:ring-2 focus-visible:ring-title-brown">☾</button>
        <button type="button" aria-label="Abrir menu" className="md:hidden text-2xl text-title-brown hover:scale-105 transition-transform p-1 focus-visible:ring-2 focus-visible:ring-title-brown">☰</button>
      </div>
    </header>
  )
}

export default Header