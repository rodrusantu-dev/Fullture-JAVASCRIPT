//CRIADO O EVENTO AO DAR CLICK NO SUBMIT DO HTML E EVITAR O REFRESH AO INSERIR UM ELEMENTO.
let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
e.preventDefault();
    
    //PEGANDO OS ELEMENTOS DIGITADOS NO HTML E DIGITADOS PELO USUÁRIO.
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let option = document.getElementById("options").value;
    let radio = document.querySelector('input[name="option"]:checked')
    let checkbox = document.querySelectorAll('input[name="teste-check"]:checked')
    let textarea = document.getElementById("textarea").value;
    
    //CRIADO UM OBJETO COM NOME DE "USUÁRIO"
    let usuario = {
        'email': email,
        'senha': password,
        'option': option,
        'radio': radio ? radio.value : null,  // se radio ta marcado recebe o valor, senão NULL.
        'checkbox': checkbox ? checkbox.value : null,
        'textarea': textarea
    }
    verificaCampos(usuario)
    console.table(usuario)
})

// MEUS CONDICIONANTES DE PREENCHIMENTO:
function verificaCampos(usuario) {
    // o termo "LENGTH" quer dizer o tamanho da string ou seja o tamanho da senha, aqui no caso.
    // aqui você programa o tamanho da senha.
    if (usuario.senha.length < 4) {
        return document.getElementById("mensagem").innerHTML = "Sua senha precisa ter mais de 4 caracteres!"
    }
   
    // aqui programamos o caractere especial no caso a ",", se NÃO tiver esse elemento
    // é passado a posição -1 (dentro das posições de casa caractere digitado)
    if (usuario.senha.indexOf(",") == -1) {
        return document.getElementById("mensagem").innerHTML = "Sua senha precisa ter uma vírgula!"
    }

    // se tiver preenchido email, senha e option da USUÁRIO CADASTRADO.
    // Como se fosse as regras básicas para dar o OK.
    if (usuario.email && usuario.senha && usuario.option) {
        form.reset();
        return document.getElementById("mensagem").innerHTML = "Cadastrado com sucesso!"
    }

    // Se não preencher a opção da lista suspensa informar essa mensagem e dar um break (feito pelo return)
    if (!usuario.option) {
        return alert("Selecione uma opção")
    }
}

