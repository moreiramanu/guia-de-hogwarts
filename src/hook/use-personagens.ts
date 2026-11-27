import { useEffect, useState } from 'react'
import type { Personagem } from '../data/tipos'
import { listarPersonagens } from '../services/personagem-service'

export function usePersonagens() {
  const [personagens, setPersonagens] = useState<Personagem[]>([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState<string | null>(null)

  useEffect(() => {
    listarPersonagens()
      .then(setPersonagens)
      .catch(() =>
        setErro('Não foi possível carregar os personagens. Tente novamente mais tarde.')
      )
      .finally(() => setCarregando(false))
  }, [])

  return { personagens, carregando, erro }
}