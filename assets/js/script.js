/*palavras reservadas para variáveis:
 var - escopo global / pode usar nome fora do escopo p
 let - escopo local / só pode usar nome dentro do escopo p
 ex: p{
      var nome;
}
*/
/* Case Sensitive: reconhecer M e m
por tag: getElementByTagNome()
por id: getElementById()
por nome: getElementsByName()
por classe: getElementsByClassName()
por seletor: querySelector() [melhor prática pra acessar]
|-> #email ou input#email (id), .email ou input.email (classe)
*/

let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")

nome.style.width = "100%"
email.style.width = "100%"

function validarNome() {
    let txtNome = document.querySelector("#txtNome")
    if(nome.value.length < 3){
        txtNome.innerHTML = "Nome inválido!"
        txtNome.style.color = "#F40000"
        txtNome.style.display = "block"
    } else {
        txtNome.style.display = "none"
        nomeOk = true
    }
}

function validarEmail() {
    let txtEmail = document.querySelector("#txtEmail")
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = "Email inválido!"
        txtEmail.style.color = "#F40000"
        txtEmail.style.display = "block"
    } else {
        txtEmail.style.display = "none"
        emailOk = true
    }
}

function validarAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")
    if(assunto.value.length > 100){
        txtAssunto.innerHTML = "<h3>Excedeu o limite de caracteres!</h3> \n Limite máximo: 100 caracteres."
        txtAssunto.style.color = "#F57F40"
        txtAssunto.style.backgroundColor = "#000000"
        txtAssunto.style.display = "block"
    } else {
        txtAssunto.style.display = "none"
        assuntoOk = true
    }
}

function enviarForms(){
    if(nomeOk == true && emailOk == true && assuntoOk == true) {
        alert ("Formulário enviado.")
    } else {
        alert ("Preencha corretamente o formulário antes de enviar!")
    }
}

function mapaZoom (){
    mapa.style.width = "800px"
    mapa.style.height = "650px"
}

function mapaNormal (){
    mapa.style.width = "400px"
    mapa.style.height = "250px"
}