/* 
Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
quantidade e valor. Use forEach para calcular o valor total de vendas de
todos os produtos.
*/
const vendas = [
    { produto: 'Camiseta', quantidade: 2, valor: 59.98 },
    { produto: 'Calça Jeans', quantidade: 1, valor: 99.99 },
    { produto: 'Tênis', quantidade: 3, valor: 449.97 },
    
  ];
let total = 0;
vendas.forEach(v => total += v.valor * v.quantidade)
console.log(total)