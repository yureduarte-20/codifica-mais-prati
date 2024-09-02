/* 
Objetivo: Crie um array de objetos clientes, cada um com propriedades
nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
de 30 anos.
 */
const clientes = [
    { nome: 'João Silva', idade: 30, cidade: 'São Paulo' },
    { nome: 'Maria Santos', idade: 25, cidade: 'Rio de Janeiro' },
    { nome: 'Pedro Almeida', idade: 35, cidade: 'Belo Horizonte' },
  ];

const c = [];
clientes.forEach(cl => {
    if(cl.idade > 30){
        c.push(cl)
    }
})
console.log(c)