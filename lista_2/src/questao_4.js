/* Iterando Sobre Arrays de Objetos
○ Objetivo: Crie um array de objetos pessoas, onde cada objeto representa
uma pessoa com nome, idade, e cidade. Use for of para exibir as
informações de cada pessoa no console. */

const pessoas = [
    { nome: "João", idade: 30, cidade: "São Paulo" },
    { nome: "Evaldo", idade: 25, cidade: "Rio de Janeiro" },
    { nome: "Roberto", idade: 35, cidade: "Belo Horizonte"  
 }
];

for(const pessoa of pessoas){
    console.log(pessoa)
}