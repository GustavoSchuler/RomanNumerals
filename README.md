# RomanNumerals

### Conversor de números romanos <-> decimais (1 a 3000)

Exercício realizado a partir do Kata -> http://codingdojo.org/kata/RomanNumerals/

#### Descrição

Para resolução deste exercício foi utilizado node.js e Typescript.

As classes abaixo são responsáveis pelo armazenamento e mapeamento dos dados
> ./src/models/Arabic.ts
> ./src/models/Roman.ts 

O controller abaixo é responsável pelo tratamento e conversão dos dados 
> ./src/controllers/ConversionController.ts

A classe abaixo é responsável pela interação com o usuário - via terminal
> ./src/app.ts

Para os testes foi utilizado o Jest. Eles podem ser encontrados em
> ./\_\_tests\_\_/

#### Instruções

Para executar a aplicação:

via npm:
`$ npm run dev`

via yarn:
`$ yarn dev`

Para executar os testes:

via npm:
`$ npm run test`

via yarn
`$ yarn test`

Para realizar o build da aplicação

via npm:
`$ npm build`

via yarn
`$ yarn build`