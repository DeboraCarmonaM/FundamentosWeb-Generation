/*
por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementsByName()
por Classe: getElementsByClassName()
por Seletor: querySelector()
*/

//instanciando os elementos para as variaveis
let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")

//faz o elemento nome e email ocupar todo o espaço da sua box
nome.style.width = "100%"
email.style.width = "100%"

function validaNome() {
    let txtNome = document.querySelector("#txtNome")

    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome Inválido"
        txtNome.style.color = "red"
    } else{
        txtNome.innerHTML = "Nome Válido"
        txtNome.style.color = "green"
        let nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")

    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 ) {
        txtEmail.innerHTML = "E-mail Inválido"
        txtEmail.style.color = "red"

    } else {
        txtEmail.innerHTML = "E-mail Válido"
        txtEmail.style.color = "green"
        let emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")

    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = "Texto muito grande, digite no máximo 100 caracteres "
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"

    } else {
        txtAssunto.style.display = "none"
        let assuntoOk = true

    }
}

function enviar() {
    if (nomeOk == false && emailOk == false && assuntoOk == false) {
        alert("Preencha o formulário corretamente antes de enviar!")
    } else {
        alert("Formulário enviado com sucesso!")
    }
}

function mapaZoom() {
    mapa.style.width = "600px"
    mapa.style.height = "450px"
}

function mapaNormal() {
    mapa.style.width = "400px"
    mapa.style.height = "250px"
}