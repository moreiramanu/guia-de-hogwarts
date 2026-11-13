export type Casa = {
  id: number
  nome: string
  brasao: string
}

export type Personagem = {
  id: number
  nome: string
  casa: string
  nascimento: string
  patrono: string
  imagem: string
}
export type Tema = 'claro' | 'escuro'