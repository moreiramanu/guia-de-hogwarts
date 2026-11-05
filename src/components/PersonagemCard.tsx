import type { Personagem } from '../data/tipos'

type PersonagemCardProps = {
  personagem: Personagem
  favorito: boolean
  onFavoritar: (id: number) => void
}

function PersonagemCard({ personagem, favorito, onFavoritar }: PersonagemCardProps) {
  return (
    <article className="p-4 lg:p-5 rounded-lg border-2 border-title-brown bg-card shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-gold transition-all duration-200 flex flex-row lg:flex-col gap-4 items-center lg:items-stretch">
      <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-full lg:h-72 shrink-0 overflow-hidden rounded-md border-2 border-title-brown">
        <img src={personagem.imagem} alt={`Retrato de ${personagem.nome}`} className="w-full h-full object-cover object-top" />
      </div>
      <div className="grow w-full">
        <div className="flex justify-between items-center mb-1">
          <h3 className="font-bold text-base lg:text-xl text-title-brown leading-tight">{personagem.nome}</h3>
          <button
            type="button"
            aria-label={`${favorito ? 'Desfavoritar' : 'Favoritar'} ${personagem.nome}`}
            onClick={() => onFavoritar(personagem.id)}
            className="text-burgundy text-xl lg:text-2xl leading-none ml-2 hover:scale-125 transition-transform"
          >
            {favorito ? '♥' : '♡'}
          </button>
        </div>
        <div className="flex flex-col text-sm lg:text-base text-body-brown">
          <p>Casa: {personagem.casa}</p>
          <p>Dt nascimento: {personagem.nascimento}</p>
          <p>Patrono: {personagem.patrono}</p>
        </div>
      </div>
    </article>
  )
}

export default PersonagemCard