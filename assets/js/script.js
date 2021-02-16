/*
Case Sensitive: reconhece letras maiúsculas e minúsculas

por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementByName()
por Classe: getElementsByClassName()
por Seletor: querySelector()
*/

let Nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let observacoes = document.querySelector('#observacoes')
let nomeOk = false
let emailOk = false
let observacoesOk = false

function validaNome() {
let txtNome = document.querySelector('#txtNome')
if(nome.value.length < 3) {
  txtNome.innerHTML = 'Nome inválido'
  txtNome.style.color = 'red'

} else {
    txtNome.innerHTML = 'Nome válido'
    txtNome.style.color = 'green'
    nomeOk = true

}

}

function validaEmail() {
let txtEmail = document.querySelector('#txtEmail')

if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
txtEmail.innerHTML = 'E-mail inválido'
txtEmail.style.color = 'red'

} else {
    txtEmail.innerHTML = 'E-mail válido'
    txtEmail.style.color = 'green'
    emailOk = true
    
}

}

function validaObservacoes(){
let txtObservacoes = document.querySelector('#txtObservacoes')

if(observacoes.value.length >= 100){
    txtObservacoes.innerHTML = 'Digite no máximo 100 caracteres'
    txtObservacoes.style.color = 'red'
    txtObservacoes.style.display = 'block'

}else{
    txtObservacoes.innerHTML = 'Texto válido'
    txtObservacoes.style.display = 'none'
    observacoesOk = true
    
}

}

function enviar(){
if (nomeOk == true && emailOk == true && observacoesOk == true){
    alert ('Formulário enviado com sucesso!')
}
else{
alert ('Preencha o formulário corretamente antes de enviar')

}

}

