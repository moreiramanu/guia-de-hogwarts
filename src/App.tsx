import { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import CasaBotao from './components/CasaBotao'
import PersonagemCard from './components/PersonagemCard'
import { casas } from './data/casas'
import { personagens } from './data/personagens'
import type { Tema } from './data/tipos'

function App() {
  const [favoritos, setFavoritos] = useState<number[]>([])
  const [casaSelecionada, setCasaSelecionada] = useState<string | null>(null)
  const [apenasFavoritos, setApenasFavoritos] = useState(false)
  const [tema, setTema] = useState<Tema>('claro')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', tema === 'escuro')
  }, [tema])

  function alternarTema() {
    setTema((atual) => (atual === 'claro' ? 'escuro' : 'claro'))
  }
  function alternarFavorito(id: number) {
    setFavoritos((atual) =>
      atual.includes(id) ? atual.filter((f) => f !== id) : [...atual, id]
    )
  }

  function selecionarCasa(nome: string) {
    setCasaSelecionada((atual) => (atual === nome ? null : nome))
  }

  const personagensVisiveis = personagens.filter(
    (p) =>
      (casaSelecionada === null || p.casa === casaSelecionada) &&
      (!apenasFavoritos || favoritos.includes(p.id))
  )

  return (
    <div className="min-h-screen font-body p-4 md:p-8 flex flex-col">
      <Header tema={tema} onAlternarTema={alternarTema} />

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
            {casas.map((casa) => (
              <CasaBotao
                key={casa.id}
                casa={casa}
                selecionada={casaSelecionada === casa.nome}
                onSelecionar={selecionarCasa}
              />
            ))}
          </div>
        </section>

        <section id="personagens">
          <div className="flex flex-wrap justify-between items-center gap-3 mb-6">
            <h2 className="text-xl sm:text-2xl lg:text-4xl text-title-brown font-magic tracking-wide font-bold">Personagens</h2>
            <button
              type="button"
              aria-pressed={apenasFavoritos}
              onClick={() => setApenasFavoritos((atual) => !atual)}
              className={`border-2 text-sm lg:text-base font-bold px-3 py-1.5 lg:px-5 lg:py-2.5 rounded-md shadow-sm transition-colors flex items-center gap-2 whitespace-nowrap focus-visible:ring-2 focus-visible:ring-title-brown hover:bg-burgundy hover:border-burgundy hover:text-white ${
                apenasFavoritos
                  ? 'bg-burgundy border-burgundy text-white'
                  : 'border-title-brown bg-card text-title-brown'
              }`}
            >
              <span aria-hidden="true">♥</span> Apenas favoritos
            </button>
          </div>

          {personagensVisiveis.length === 0 ? (
            <p className="text-center text-body-brown text-lg font-semibold mb-12">
              Nenhum personagem encontrado com esses filtros.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
              {personagensVisiveis.map((personagem) => (
                <PersonagemCard
                  key={personagem.id}
                  personagem={personagem}
                  favorito={favoritos.includes(personagem.id)}
                  onFavoritar={alternarFavorito}
                />
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App