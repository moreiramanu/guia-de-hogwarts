const IMG = '/assets/img'

function App() {
  return (
    <div className="min-h-screen font-body p-4 md:p-8 flex flex-col">

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

      <main className="max-w-7xl w-full mx-auto grow">

        <section id="inicio" className="text-center mb-12 mt-4 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 text-title-brown font-magic tracking-wider">Guia de Hogwarts</h1>
          <span className="block w-24 lg:w-40 h-1 bg-gold rounded-full mb-4" aria-hidden="true"></span>
          <p className="text-body-brown text-base md:text-lg lg:text-xl max-w-2xl font-semibold">
            Bem-vindo ao Guia de Hogwarts. Explore o catálogo interativo, filtre os personagens pelas quatro Casas e salve os seus favoritos.
          </p>
        </section>

        <section id="casas" className="mb-14">
          <h2 className="text-2xl lg:text-4xl text-center text-title-brown font-magic tracking-wide font-bold mb-8">Casas de Hogwarts</h2>
          <div className="flex justify-center gap-5 sm:gap-8 lg:gap-14">
            <button type="button" className="flex flex-col items-center gap-2 group">
              <span className="w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28 rounded-full border-2 border-title-brown bg-white/60 shadow-md group-hover:bg-white group-hover:shadow-xl group-hover:scale-110 group-hover:border-gold transition-all overflow-hidden flex items-center justify-center p-2">
                <img src={`${IMG}/grifinoria.png`} alt="Brasão da Grifinória" className="w-full h-full object-contain" />
              </span>
              <span className="text-sm lg:text-lg text-body-brown font-semibold group-hover:text-burgundy">Grifinória</span>
            </button>
            <button type="button" className="flex flex-col items-center gap-2 group">
              <span className="w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28 rounded-full border-2 border-title-brown bg-white/60 shadow-md group-hover:bg-white group-hover:shadow-xl group-hover:scale-110 group-hover:border-gold transition-all overflow-hidden flex items-center justify-center p-2">
                <img src={`${IMG}/sonserina.png`} alt="Brasão da Sonserina" className="w-full h-full object-contain" />
              </span>
              <span className="text-sm lg:text-lg text-body-brown font-semibold group-hover:text-burgundy">Sonserina</span>
            </button>
            <button type="button" className="flex flex-col items-center gap-2 group">
              <span className="w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28 rounded-full border-2 border-title-brown bg-white/60 shadow-md group-hover:bg-white group-hover:shadow-xl group-hover:scale-110 group-hover:border-gold transition-all overflow-hidden flex items-center justify-center p-2">
                <img src={`${IMG}/corvinal.png`} alt="Brasão da Corvinal" className="w-full h-full object-contain" />
              </span>
              <span className="text-sm lg:text-lg text-body-brown font-semibold group-hover:text-burgundy">Corvinal</span>
            </button>
            <button type="button" className="flex flex-col items-center gap-2 group">
              <span className="w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28 rounded-full border-2 border-title-brown bg-white/60 shadow-md group-hover:bg-white group-hover:shadow-xl group-hover:scale-110 group-hover:border-gold transition-all overflow-hidden flex items-center justify-center p-2">
                <img src={`${IMG}/lufalufa.png`} alt="Brasão da Lufa-Lufa" className="w-full h-full object-contain" />
              </span>
              <span className="text-sm lg:text-lg text-body-brown font-semibold group-hover:text-burgundy">Lufa-Lufa</span>
            </button>
          </div>
        </section>

        <section id="personagens">
          <div className="flex flex-wrap justify-between items-center gap-3 mb-6">
            <h2 className="text-xl sm:text-2xl lg:text-4xl text-title-brown font-magic tracking-wide font-bold">Personagens</h2>
            <button type="button" className="border-2 border-title-brown bg-card text-title-brown text-sm lg:text-base font-bold px-3 py-1.5 lg:px-5 lg:py-2.5 rounded-md shadow-sm hover:bg-burgundy hover:border-burgundy hover:text-white transition-colors flex items-center gap-2 whitespace-nowrap focus-visible:ring-2 focus-visible:ring-title-brown">
              <span aria-hidden="true">♥</span> Apenas favoritos
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">

            {/* GRIFINÓRIA */}
            <article className="p-4 lg:p-5 rounded-lg border-2 border-title-brown bg-card shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-gold transition-all duration-200 flex flex-row lg:flex-col gap-4 items-center lg:items-stretch">
              <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-full lg:h-72 shrink-0 overflow-hidden rounded-md border-2 border-title-brown">
                <img src={`${IMG}/harry-potter.jpg`} alt="Retrato de Harry Potter" className="w-full h-full object-cover object-top" />
              </div>
              <div className="grow w-full">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-bold text-base lg:text-xl text-title-brown leading-tight">Harry Potter</h3>
                  <button type="button" aria-label="Favoritar Harry Potter" className="text-burgundy text-xl lg:text-2xl leading-none ml-2 hover:scale-125 transition-transform">♡</button>
                </div>
                <div className="flex flex-col text-sm lg:text-base text-body-brown">
                  <p>Casa: Grifinória</p>
                  <p>Dt nascimento: 31/07/1980</p>
                  <p>Patrono: Cervo</p>
                </div>
              </div>
            </article>

            <article className="p-4 lg:p-5 rounded-lg border-2 border-title-brown bg-card shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-gold transition-all duration-200 flex flex-row lg:flex-col gap-4 items-center lg:items-stretch">
              <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-full lg:h-72 shrink-0 overflow-hidden rounded-md border-2 border-title-brown">
                <img src={`${IMG}/hermione-granger.jpg`} alt="Retrato de Hermione Granger" className="w-full h-full object-cover object-top" />
              </div>
              <div className="grow w-full">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-bold text-base lg:text-xl text-title-brown leading-tight">Hermione Granger</h3>
                  <button type="button" aria-label="Favoritar Hermione Granger" className="text-burgundy text-xl lg:text-2xl leading-none ml-2 hover:scale-125 transition-transform">♡</button>
                </div>
                <div className="flex flex-col text-sm lg:text-base text-body-brown">
                  <p>Casa: Grifinória</p>
                  <p>Dt nascimento: 19/09/1979</p>
                  <p>Patrono: Lontra</p>
                </div>
              </div>
            </article>

            <article className="p-4 lg:p-5 rounded-lg border-2 border-title-brown bg-card shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-gold transition-all duration-200 flex flex-row lg:flex-col gap-4 items-center lg:items-stretch">
              <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-full lg:h-72 shrink-0 overflow-hidden rounded-md border-2 border-title-brown">
                <img src={`${IMG}/rony-weasley.jpg`} alt="Retrato de Rony Weasley" className="w-full h-full object-cover object-top" />
              </div>
              <div className="grow w-full">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-bold text-base lg:text-xl text-title-brown leading-tight">Rony Weasley</h3>
                  <button type="button" aria-label="Desfavoritar Rony Weasley" className="text-burgundy text-xl lg:text-2xl leading-none ml-2 hover:scale-125 transition-transform">♥</button>
                </div>
                <div className="flex flex-col text-sm lg:text-base text-body-brown">
                  <p>Casa: Grifinória</p>
                  <p>Dt nascimento: 01/03/1980</p>
                  <p>Patrono: Terrier</p>
                </div>
              </div>
            </article>

            <article className="p-4 lg:p-5 rounded-lg border-2 border-title-brown bg-card shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-gold transition-all duration-200 flex flex-row lg:flex-col gap-4 items-center lg:items-stretch">
              <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-full lg:h-72 shrink-0 overflow-hidden rounded-md border-2 border-title-brown">
                <img src={`${IMG}/draco-malfoy.jpg`} alt="Retrato de Draco Malfoy" className="w-full h-full object-cover object-top" />
              </div>
              <div className="grow w-full">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-bold text-base lg:text-xl text-title-brown leading-tight">Draco Malfoy</h3>
                  <button type="button" aria-label="Desfavoritar Draco Malfoy" className="text-burgundy text-xl lg:text-2xl leading-none ml-2 hover:scale-125 transition-transform">♥</button>
                </div>
                <div className="flex flex-col text-sm lg:text-base text-body-brown">
                  <p>Casa: Sonserina</p>
                  <p>Dt nascimento: 05/06/1980</p>
                  <p>Patrono: Desconhecido</p>
                </div>
              </div>
            </article>

            <article className="p-4 lg:p-5 rounded-lg border-2 border-title-brown bg-card shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-gold transition-all duration-200 flex flex-row lg:flex-col gap-4 items-center lg:items-stretch">
              <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-full lg:h-72 shrink-0 overflow-hidden rounded-md border-2 border-title-brown">
                <img src={`${IMG}/severo-snape.jpg`} alt="Retrato de Severo Snape" className="w-full h-full object-cover object-top" />
              </div>
              <div className="grow w-full">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-bold text-base lg:text-xl text-title-brown leading-tight">Severo Snape</h3>
                  <button type="button" aria-label="Favoritar Severo Snape" className="text-burgundy text-xl lg:text-2xl leading-none ml-2 hover:scale-125 transition-transform">♡</button>
                </div>
                <div className="flex flex-col text-sm lg:text-base text-body-brown">
                  <p>Casa: Sonserina</p>
                  <p>Dt nascimento: 09/01/1960</p>
                  <p>Patrono: Corça</p>
                </div>
              </div>
            </article>

            <article className="p-4 lg:p-5 rounded-lg border-2 border-title-brown bg-card shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-gold transition-all duration-200 flex flex-row lg:flex-col gap-4 items-center lg:items-stretch">
              <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-full lg:h-72 shrink-0 overflow-hidden rounded-md border-2 border-title-brown">
                <img src={`${IMG}/lord-voldemort.jpg`} alt="Retrato de Lord Voldemort" className="w-full h-full object-cover object-top" />
              </div>
              <div className="grow w-full">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-bold text-base lg:text-xl text-title-brown leading-tight">Lord Voldemort</h3>
                  <button type="button" aria-label="Favoritar Lord Voldemort" className="text-burgundy text-xl lg:text-2xl leading-none ml-2 hover:scale-125 transition-transform">♡</button>
                </div>
                <div className="flex flex-col text-sm lg:text-base text-body-brown">
                  <p>Casa: Sonserina</p>
                  <p>Dt nascimento: 31/12/1926</p>
                  <p>Patrono: Nenhum</p>
                </div>
              </div>
            </article>

            <article className="p-4 lg:p-5 rounded-lg border-2 border-title-brown bg-card shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-gold transition-all duration-200 flex flex-row lg:flex-col gap-4 items-center lg:items-stretch">
              <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-full lg:h-72 shrink-0 overflow-hidden rounded-md border-2 border-title-brown">
                <img src={`${IMG}/luna-lovegood.jpg`} alt="Retrato de Luna Lovegood" className="w-full h-full object-cover object-top" />
              </div>
              <div className="grow w-full">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-bold text-base lg:text-xl text-title-brown leading-tight">Luna Lovegood</h3>
                  <button type="button" aria-label="Favoritar Luna Lovegood" className="text-burgundy text-xl lg:text-2xl leading-none ml-2 hover:scale-125 transition-transform">♡</button>
                </div>
                <div className="flex flex-col text-sm lg:text-base text-body-brown">
                  <p>Casa: Corvinal</p>
                  <p>Dt nascimento: 13/02/1981</p>
                  <p>Patrono: Lebre</p>
                </div>
              </div>
            </article>

            <article className="p-4 lg:p-5 rounded-lg border-2 border-title-brown bg-card shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-gold transition-all duration-200 flex flex-row lg:flex-col gap-4 items-center lg:items-stretch">
              <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-full lg:h-72 shrink-0 overflow-hidden rounded-md border-2 border-title-brown">
                <img src={`${IMG}/cho-chang.jpg`} alt="Retrato de Cho Chang" className="w-full h-full object-cover object-top" />
              </div>
              <div className="grow w-full">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-bold text-base lg:text-xl text-title-brown leading-tight">Cho Chang</h3>
                  <button type="button" aria-label="Favoritar Cho Chang" className="text-burgundy text-xl lg:text-2xl leading-none ml-2 hover:scale-125 transition-transform">♡</button>
                </div>
                <div className="flex flex-col text-sm lg:text-base text-body-brown">
                  <p>Casa: Corvinal</p>
                  <p>Dt nascimento: Não informada</p>
                  <p>Patrono: Cisne</p>
                </div>
              </div>
            </article>

            <article className="p-4 lg:p-5 rounded-lg border-2 border-title-brown bg-card shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-gold transition-all duration-200 flex flex-row lg:flex-col gap-4 items-center lg:items-stretch">
              <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-full lg:h-72 shrink-0 overflow-hidden rounded-md border-2 border-title-brown">
                <img src={`${IMG}/filio-flitwick.jpg`} alt="Retrato de Fílio Flitwick" className="w-full h-full object-cover object-top" />
              </div>
              <div className="grow w-full">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-bold text-base lg:text-xl text-title-brown leading-tight">Fílio Flitwick</h3>
                  <button type="button" aria-label="Favoritar Fílio Flitwick" className="text-burgundy text-xl lg:text-2xl leading-none ml-2 hover:scale-125 transition-transform">♡</button>
                </div>
                <div className="flex flex-col text-sm lg:text-base text-body-brown">
                  <p>Casa: Corvinal</p>
                  <p>Dt nascimento: Não informada</p>
                  <p>Patrono: Desconhecido</p>
                </div>
              </div>
            </article>

            <article className="p-4 lg:p-5 rounded-lg border-2 border-title-brown bg-card shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-gold transition-all duration-200 flex flex-row lg:flex-col gap-4 items-center lg:items-stretch">
              <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-full lg:h-72 shrink-0 overflow-hidden rounded-md border-2 border-title-brown">
                <img src={`${IMG}/cedrico-diggory.jpg`} alt="Retrato de Cédrico Diggory" className="w-full h-full object-cover object-top" />
              </div>
              <div className="grow w-full">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-bold text-base lg:text-xl text-title-brown leading-tight">Cédrico Diggory</h3>
                  <button type="button" aria-label="Favoritar Cédrico Diggory" className="text-burgundy text-xl lg:text-2xl leading-none ml-2 hover:scale-125 transition-transform">♡</button>
                </div>
                <div className="flex flex-col text-sm lg:text-base text-body-brown">
                  <p>Casa: Lufa-Lufa</p>
                  <p>Dt nascimento: Não informada</p>
                  <p>Patrono: Desconhecido</p>
                </div>
              </div>
            </article>

            <article className="p-4 lg:p-5 rounded-lg border-2 border-title-brown bg-card shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-gold transition-all duration-200 flex flex-row lg:flex-col gap-4 items-center lg:items-stretch">
              <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-full lg:h-72 shrink-0 overflow-hidden rounded-md border-2 border-title-brown">
                <img src={`${IMG}/ninfadora-tonks.jpg`} alt="Retrato de Ninfadora Tonks" className="w-full h-full object-cover object-top" />
              </div>
              <div className="grow w-full">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-bold text-base lg:text-xl text-title-brown leading-tight">Ninfadora Tonks</h3>
                  <button type="button" aria-label="Favoritar Ninfadora Tonks" className="text-burgundy text-xl lg:text-2xl leading-none ml-2 hover:scale-125 transition-transform">♡</button>
                </div>
                <div className="flex flex-col text-sm lg:text-base text-body-brown">
                  <p>Casa: Lufa-Lufa</p>
                  <p>Dt nascimento: Não informada</p>
                  <p>Patrono: Lobo</p>
                </div>
              </div>
            </article>

            <article className="p-4 lg:p-5 rounded-lg border-2 border-title-brown bg-card shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-gold transition-all duration-200 flex flex-row lg:flex-col gap-4 items-center lg:items-stretch">
              <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-full lg:h-72 shrink-0 overflow-hidden rounded-md border-2 border-title-brown">
                <img src={`${IMG}/newt-scamander.jpg`} alt="Retrato de Newt Scamander" className="w-full h-full object-cover object-top" />
              </div>
              <div className="grow w-full">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-bold text-base lg:text-xl text-title-brown leading-tight">Newt Scamander</h3>
                  <button type="button" aria-label="Favoritar Newt Scamander" className="text-burgundy text-xl lg:text-2xl leading-none ml-2 hover:scale-125 transition-transform">♡</button>
                </div>
                <div className="flex flex-col text-sm lg:text-base text-body-brown">
                  <p>Casa: Lufa-Lufa</p>
                  <p>Dt nascimento: 24/02/1897</p>
                  <p>Patrono: Não revelado</p>
                </div>
              </div>
            </article>

          </div>
        </section>
      </main>

      <footer className="max-w-7xl w-full mx-auto border-t border-title-brown/20 pt-6 pb-4 mt-auto flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-3 lg:gap-4 px-2 text-center lg:text-left">
        <p className="text-body-brown text-sm font-semibold">&copy; 2026 Guia de Hogwarts</p>
        <p className="text-body-brown text-sm font-semibold">Desenvolvido por Emanuely - Projeto de Front-end.</p>
      </footer>
    </div>
  )
}

export default App