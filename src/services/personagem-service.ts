import type { Personagem } from '../data/tipos'

const URL_API = 'https://my.api.mockaroo.com/personagens?key=e0b70390'

type PersonagemApi = Omit<Personagem, 'id'> & { id: string }

export async function listarPersonagens(): Promise<Personagem[]> {
  const resposta = await fetch(URL_API)

  if (!resposta.ok) {
    throw new Error(`Falha na requisição (${resposta.status})`)
  }

  const dados: PersonagemApi[] = await resposta.json()

  return dados.map((personagem) => ({
    ...personagem,
    id: Number(personagem.id),
  }))
}