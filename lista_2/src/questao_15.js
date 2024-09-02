/* 
Objetivo: Crie um array de objetos transacoes, onde cada transação tem
tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final,
somando as entradas e subtraindo as saídas.
*/
const transacoes = [
    { tipo: 'entrada', valor: 1500.00 },
    { tipo: 'saída', valor: 200.00 },
    { tipo: 'entrada', valor: 3000.00 },
    { tipo: 'saída', valor: 450.00 },
    { tipo: 'entrada', valor: 1200.00 },
    { tipo: 'saída', valor: 300.00 },
    { tipo: 'entrada', valor: 500.00 },
    { tipo: 'saída', valor: 150.00 },
    { tipo: 'entrada', valor: 2200.00 },
    { tipo: 'saída', valor: 600.00 },
    { tipo: 'entrada', valor: 1800.00 },
    { tipo: 'saída', valor: 400.00 },
    { tipo: 'entrada', valor: 1000.00 },
    { tipo: 'saída', valor: 250.00 },
    { tipo: 'entrada', valor: 2300.00 },
    { tipo: 'saída', valor: 700.00 },
    { tipo: 'entrada', valor: 800.00 },
    { tipo: 'saída', valor: 350.00 },
    { tipo: 'entrada', valor: 1900.00 },
    { tipo: 'saída', valor: 500.00 },
    { tipo: 'entrada', valor: 2700.00 }
];

let saldoTotal = 0;
transacoes.forEach(tr => {
    switch (tr.tipo) {
        case 'entrada':
            saldoTotal += tr.valor
            break;
        case 'saída':
            saldoTotal -= tr.valor
            break;
        default:
    }
})
console.log('Saldo total:',saldoTotal)