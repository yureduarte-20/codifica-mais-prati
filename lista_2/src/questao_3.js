function filtrarPropriedades(produto, valorMinimo) {
    const novoObjeto = {};

    for (const propriedade in produto) {
        if (typeof produto[propriedade] === 'number' && produto[propriedade] > valorMinimo) {
            novoObjeto[propriedade] = produto[propriedade];
        }
    }

    return novoObjeto;
}

const produto = {
    nome: 'Smartphone',
    preco: 1500,
    peso: 200,
    cor: 'Preto',
    memoria: 128
};

const valorMinimo = 100;
const produtoFiltrado = filtrarPropriedades(produto, valorMinimo);

console.log(produtoFiltrado);