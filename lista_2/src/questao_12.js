/* 
Objetivo: Crie um array de objetos estoque, onde cada objeto tem
produto, quantidade e minimo. Use forEach para atualizar a quantidade
dos produtos que estão abaixo do mínimo, duplicando suas quantidades.
*/
const estoque = [
    { produto: 'Camiseta', quantidade: 20, minimo: 10 },
    { produto: 'Calça Jeans', quantidade: 5, minimo: 5 },
    { produto: 'Calça Legging', quantidade: 3, minimo: 5 },
    { produto: 'Celular multilaser', quantidade: 1, minimo: 5 },
    { produto: 'Tênis', quantidade: 30, minimo: 15 },
];

estoque.forEach(p => {
    if (p.quantidade < p.minimo) {
        p.quantidade = p.minimo
    }
})
console.log(estoque)