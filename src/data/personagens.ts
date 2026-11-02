import type { Personagem } from './tipos'
import { IMG } from './constantes'

export const personagens: Personagem[] = [
  { id: 1, nome: 'Harry Potter', casa: 'Grifinória', nascimento: '31/07/1980', patrono: 'Cervo', imagem: `${IMG}/harry-potter.jpg` },
  { id: 2, nome: 'Hermione Granger', casa: 'Grifinória', nascimento: '19/09/1979', patrono: 'Lontra', imagem: `${IMG}/hermione-granger.jpg` },
  { id: 3, nome: 'Rony Weasley', casa: 'Grifinória', nascimento: '01/03/1980', patrono: 'Terrier', imagem: `${IMG}/rony-weasley.jpg` },
  { id: 4, nome: 'Draco Malfoy', casa: 'Sonserina', nascimento: '05/06/1980', patrono: 'Desconhecido', imagem: `${IMG}/draco-malfoy.jpg` },
  { id: 5, nome: 'Severo Snape', casa: 'Sonserina', nascimento: '09/01/1960', patrono: 'Corça', imagem: `${IMG}/severo-snape.jpg` },
  { id: 6, nome: 'Lord Voldemort', casa: 'Sonserina', nascimento: '31/12/1926', patrono: 'Nenhum', imagem: `${IMG}/lord-voldemort.jpg` },
  { id: 7, nome: 'Luna Lovegood', casa: 'Corvinal', nascimento: '13/02/1981', patrono: 'Lebre', imagem: `${IMG}/luna-lovegood.jpg` },
  { id: 8, nome: 'Cho Chang', casa: 'Corvinal', nascimento: 'Não informada', patrono: 'Cisne', imagem: `${IMG}/cho-chang.jpg` },
  { id: 9, nome: 'Fílio Flitwick', casa: 'Corvinal', nascimento: 'Não informada', patrono: 'Desconhecido', imagem: `${IMG}/filio-flitwick.jpg` },
  { id: 10, nome: 'Cédrico Diggory', casa: 'Lufa-Lufa', nascimento: 'Não informada', patrono: 'Desconhecido', imagem: `${IMG}/cedrico-diggory.jpg` },
  { id: 11, nome: 'Ninfadora Tonks', casa: 'Lufa-Lufa', nascimento: 'Não informada', patrono: 'Lobo', imagem: `${IMG}/ninfadora-tonks.jpg` },
  { id: 12, nome: 'Newt Scamander', casa: 'Lufa-Lufa', nascimento: '24/02/1897', patrono: 'Não revelado', imagem: `${IMG}/newt-scamander.jpg` },
]