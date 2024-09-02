/* 
Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um
array de objetos. Cada objeto dentro de itens deve representar um
produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
para calcular o valor total do carrinho.
*/
const carrinho = {
    itens: [
      { nome: 'Camiseta', quantidade: 2, precoUnitario: 29.99 },
      { nome: 'Calça Jeans', quantidade: 1, precoUnitario: 99.99 },
      { nome: 'Tênis', quantidade: 3, precoUnitario: 149.99 },
      { nome: 'Chinelo', quantidade: 3, precoUnitario: 69.99 },
    ]
  };

  let total = 0;
  carrinho.itens.forEach(i => total += i.precoUnitario * i.quantidade )
  console.log(total)