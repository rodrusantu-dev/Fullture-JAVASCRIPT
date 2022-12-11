    const promptSync = require('prompt-sync')
    const prompt = promptSync()

//CALCULADORA DE OPERAÇÕES MATEMÁTICAS BÁSICAS.
    
    let decision = "S" 
    while(decision != "N") {  
        let fistNumber = prompt("Digite o primeiro número: ")
        let type = prompt("Digite qual a operação deseja (+,-,*,/): ")
        let secondNumber = prompt("Digite o segundo número: ")
        
            // PARTE DAS OPERAÇÕES DO CÓDIGO
            if (type == "+") {
                console.log(Number(fistNumber)+ Number(secondNumber))
            } 
            else if (type == "-")  {
                console.log(Number(fistNumber)- Number(secondNumber))
            }
            else if (type == "*")  {
                console.log(Number(fistNumber)* Number(secondNumber))
            }
            else if (type == "/")  {
                console.log(Number(fistNumber)/ Number(secondNumber))
            }
            else {
                console.log("Operação inválida")
            }

        decision = prompt("Você deseja continuar (S/N) ? ")
    }