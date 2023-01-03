//Estrutura de Condição IF/ELSE com mais de 2 condições "ELSE IF"

var agora = new Date();                             // pega a hora do sistema.
var hora = agora.getHours();                        // pra pegar somente a hora.

console.log(`Agora são exatamente ${hora} horas.`)

    if (hora < 12){
        console.log("Bom dia")
    } else if (hora <= 18) {
        console.log("Boa Tarde")
    } else if (hora <= 18) {
        console.log("Boa Tarde")
    }else {
        console.log("Boa noite")
    }
