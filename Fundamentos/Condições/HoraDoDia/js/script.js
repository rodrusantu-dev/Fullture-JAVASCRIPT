// Função que carregar assim que o HTML é carregado.
window.onload = function carregar(){
    
    //BLOCO de Variáveis
    const msg = window.document.getElementById('msg')
    const img = window.document.getElementById('imagem')
    const data = new Date()
    const hora = data.getHours()
    

    //Mostra a mensagem da hora na tela do HTML
    msg.innerHTML = `Agora são ${hora} horas`

    //Bloco da Condição, conforme a Hora, mensagem e style diferentes.
    if (hora >= 0 && hora < 12) {
        img.src  = './img/fotomanha.png'
        document.body.style.backgroundColor = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        img.src = './img/fototarde.png'
        document.body.style.backgroundColor = '#b9846f'
    } else {
        img.src = './img/fotonoite.png'
        document.body.style.backgroundColor = '#515154'
    }
}

   
   
   

