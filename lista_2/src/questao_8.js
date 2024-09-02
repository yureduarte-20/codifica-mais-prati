/* 
Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo,
diretor, e anoLancamento. Use forEach para criar um novo array
contendo apenas os títulos dos filmes.
*/
const filmes = [
    { titulo: 'O Poderoso Chefão', diretor: 'Francis Ford Coppola', anoLancamento: 1972 },
    { titulo: 'O Senhor dos Anéis: A Sociedade do Anel', diretor: 'Peter Jackson', anoLancamento: 2001 },
    { titulo: 'Pulp Fiction', diretor: 'Quentin Tarantino', anoLancamento: 1994 },
  ];

const titulos = [];
filmes.forEach(f => {
    titulos.push(f.titulo)
})
console.log(titulos)