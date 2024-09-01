/* Objetivo: Crie um array de objetos alunos, cada um com propriedades
nome, nota1, e nota2. Use for of para calcular a média das notas de cada
aluno e exibir o nome do aluno junto com sua média. */

const alunos = [
    { nome: "João", nota1: 8.5, nota2: 9.0 },
    { nome: "Maria", nota1: 7.0, nota2: 6.5 },
    { nome: "Pedro", nota1: 9.5, nota2: 10.0 }
];


for(let aluno of alunos){
    aluno.media = (aluno.nota1 + aluno.nota2)/ 2
}
for(let aluno of alunos){
    console.log(`Aluno ${aluno.nome} com média de ${aluno.media}`)
}
