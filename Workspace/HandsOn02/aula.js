// SELEÇÃO DE ELEMENTOS
/*
09 Peguei o formulario; 
10 Criei um evento de submit
12 Peguei as variáveis do meu formulario
*/

let form = document.getElementById("form");
form.addEventListener("submit", (e) => {    
    e.preventDefault();

    let username = document.getElementById("username").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let passwordConfirm = document.getElementById("passwordConfirm").value
    console.log(username)
    console.log(email)
    console.log(password)
    console.log(passwordConfirm)

    //CRIAR UM OBJETO - DENTRO DO EVENTO DE SUBMIT
    let usuario = {
        'username': username,
        'email': email,
        'password': password,
        'passwordConfirm': passwordConfirm
    }
    this.validaCampos(usuario)
})

// MEUS CONDICIONANTES DE PREENCHIMENTO:
function validaCampos(usuario) {
    if (usuario.username.length > 6) {
        alert("Username precisa ser menor que 6 digitos")
    }
    if (usuario.password != usuario.passwordConfirm) {
        alert("senhas diferentes")
}

} 