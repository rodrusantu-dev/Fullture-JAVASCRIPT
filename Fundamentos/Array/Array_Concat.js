const promptSync = require('prompt-sync')
const prompt = promptSync()

// EXECUTANDO:

    let names = ["Rodrigo", "Ana","Maria", "Carlos"]
    let notas = [60, 70, 90, 95] 

   //FUNÇÃO DO CONCAT (CONCATENAR) - Juntar coisas. (strings, arrays, números)
   let namesAndnotas = names.concat(notas)
        console.table(namesAndnotas)
   
  