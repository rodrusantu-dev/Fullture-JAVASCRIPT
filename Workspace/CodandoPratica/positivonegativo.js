const promptSync = require('prompt-sync')
const prompt = promptSync()

// CALCULA SE O NÚMERO É POSITIVO OU NEGATIVO

    let number = prompt("Digite um número: ")
    if (number >= 0) {
        console.log("O número digitado é POSITIVO")
    }
    else {
        console.log("O número digitado é NEGATIVO")
    }