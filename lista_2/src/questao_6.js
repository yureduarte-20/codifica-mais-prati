/* 
Objetivo: Crie um array de objetos funcionarios, onde cada objeto
contém informações como nome, cargo, e salario. Use for of para filtrar
e exibir apenas os funcionários cujo salário seja maior que um valor
específico.
*/
const funcionarios = [
    { nome: "João Silva", cargo: "Desenvolvedor", salario: 5000 },
    { nome: "Maria Santos", cargo: "Designer", salario: 4500 },
    { nome: "Pedro Oliveira", cargo: "Gerente", salario: 8000 }
];

const max = 4800;
const funcs = [];
for(const f of funcionarios){
    if(f.salario > max){
        funcs.push(f)
    }
}
console.log(funcs)