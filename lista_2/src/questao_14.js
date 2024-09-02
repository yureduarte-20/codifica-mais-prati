/* 
Objetivo: Crie um objeto empresa com uma propriedade departamentos,
que é um array de objetos. Cada departamento tem um nome e uma lista
de funcionarios. Use for in e for of para iterar sobre os departamentos
e seus funcionários, exibindo o nome de cada funcionário junto com o
departamento ao qual pertence.
*/
const empresa = {
    nome: 'Minha Empresa',
    departamentos: [
        { nome: 'Vendas', funcionarios: ['João', 'Maria', 'Pedro'] },
        { nome: 'Marketing', funcionarios: ['Ana', 'Carlos'] },
        { nome: 'Tecnologia', funcionarios: ['Bruno', 'Daniela'] },
        // Adicione mais departamentos aqui...
    ]
};

for (const departamento of empresa.departamentos) {
    for(let func in departamento.funcionarios){
        console.log(`${departamento.funcionarios[func]} do(a) ${departamento.nome}`)
    }
}