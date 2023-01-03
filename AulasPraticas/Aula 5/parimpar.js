const promptSync = require('prompt-sync')
const prompt = promptSync()

// CALCULA SE O NÚMERO É PAR OU ÍMPAR
// O % calcula o RESTO da divisão.

let numero = prompt("Digite um número: ")
if (numero % 2 ==0) {
    console.log("O número digitado é PAR: " + numero)
} else {
    console.log("O número digitado é IMPAR: " + numero)
}

