const prompt = require('prompt-sync')()
let opcao = 0;
do {
    opcao = prompt('Digite uma opcao (1,2,3,4): ');
    if (Number.isNaN(Number(opcao))) break;
    opcao = parseInt(opcao)
    switch (opcao) {
        case 1:
            console.log("Você escolheu a opção 1")
            opcao = 1
            prompt('Pressione qualquer tecla para continuar')
            break;
        case 2:
            console.log("Você escolheu a opção 2")
            opcao = 2
            prompt('Pressione qualquer tecla para continuar')
            break;
        case 3:
            console.log("Você escolheu a opção 3")
            opcao = 3
            prompt('Pressione qualquer tecla para continuar')
            break;
        case 4:
            console.log("Você escolheu a opção 4")
            opcao = 4
            prompt('Pressione qualquer tecla para continuar')
            break;
        default:
            opcao = 0
            console.info("Encerrando")
    }
} while (opcao > 0);