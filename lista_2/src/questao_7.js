/* 
Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
os produtos e exibir o novo preço.
*/
const produtos = [
    { nome: 'Camiseta', preco: 29.99, desconto: 0 },
    { nome: 'Calça Jeans', preco: 99.99, desconto: 0 },
    { nome: 'Tênis', preco: 149.99, desconto: 0 },
    { nome: 'Celular', preco: 989.99, desconto: 0 },
    { nome: 'Computador', preco: 2809.99, desconto: 0 },
  ];
  
produtos.forEach( p => {
    p.preco = p.preco * 0.9;
    p.desconto = 0.1
})
console.log(produtos)