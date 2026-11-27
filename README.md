# guia-de-hogwarts
Trabalho de Conclusão da Disciplina de Desenvolvimento em Ambiente Web.

## Autor
Emanuely Mendes Moreira

## Fase 1
Entrega dos Wireframes mobile, table e desktop.

## Como executar

npm install
npm run dev

Abra o endereço mostrado no terminal (normalmente http://localhost:5173).

## Fonte dos dados

A listagem de personagens é carregada de uma API criada no Mockaroo (https://mockaroo.com), a partir de um dataset em CSV com os 12 personagens, e consumida com `fetch` dentro de um `useEffect`. A listagem das Casas vem de um vetor local em `src/data/casas.ts`.