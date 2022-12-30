const promptSync = require('prompt-sync')
const prompt = promptSync()

// CALCULA MÉDIA DE VÁRIOS NÚMEROS CONFORME A VARIÁVEL
    const numeroDeNotas = 3
    let notas = []
    for (let x = 0; x <= numeroDeNotas; x++) {
        notas [x] = prompt("Digite a nota: ")  
    }
    let resultado = 0
    notas.forEach(notas => {                        //for.Each usado quando meu vetor já tem alguma coisa digitada.
        resultado = Number(notas) + Number(resultado)
    })
    console.log(resultado/notas.length)
