/* 
Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
cliente, produto, e quantidade. Use forEach para criar um objeto que
agrupa a quantidade total de produtos por cliente.
*/
const pedidos = [
    { cliente: 'João Silva', produto: 'Camiseta', quantidade: 2 },
    { cliente: 'João Silva', produto: 'Bota', quantidade: 1 },
    { cliente: 'Maria Santos', produto: 'Calça Jeans', quantidade: 1 },
    { cliente: 'Pedro Almeida', produto: 'Tênis', quantidade: 3 },
    { cliente: 'João Silva', produto: 'Calça', quantidade: 1 },
];
const clientes = {};

pedidos.forEach(ped => {
    if (ped.cliente in clientes) {
        clientes[ped.cliente] += ped.quantidade
        
    } else {
        clientes[ped.cliente] = ped.quantidade
    }
})
console.log(clientes)
