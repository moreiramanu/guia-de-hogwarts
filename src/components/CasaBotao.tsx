import type { Casa } from '../data/tipos'

type CasaBotaoProps = {
  casa: Casa
  selecionada: boolean
  onSelecionar: (nome: string) => void
}

function CasaBotao({ casa, selecionada, onSelecionar }: CasaBotaoProps) {
  return (
    <button
      type="button"
      aria-pressed={selecionada}
      onClick={() => onSelecionar(casa.nome)}
      className="flex flex-col items-center gap-2 group"
    >
      <span
        className={`w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28 rounded-full border-2 shadow-md group-hover:bg-white group-hover:shadow-xl group-hover:scale-110 group-hover:border-gold transition-all overflow-hidden flex items-center justify-center p-2 ${
          selecionada ? 'border-gold bg-white scale-110 shadow-xl' : 'border-title-brown bg-white/60'
        }`}
      >
        <img src={casa.brasao} alt={`Brasão da ${casa.nome}`} className="w-full h-full object-contain" />
      </span>
      <span className={`text-sm lg:text-lg font-semibold group-hover:text-burgundy ${selecionada ? 'text-burgundy' : 'text-body-brown'}`}>
        {casa.nome}
      </span>
    </button>
  )
}

export default CasaBotao