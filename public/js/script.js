//validação dos campos do formulário

const labelNome = document.querySelector("#labelNome");
const inputNome = document.querySelector("#nome");

const labelDescricao = document.querySelector("#labelDescricao");
const inputDescricao = document.querySelector("#descricao");

const labelTipo = document.querySelector("#labelTipo");
const inputTipo = document.querySelector("#tipo");

const labelImagem = document.querySelector("#labelImagem");
const inputImagem = document.querySelector("#imagem");

const button = document.querySelector("btnCadastrar");

//mensagem de cadastro
const closeMessage = document.querySelector("#close");
const message = document.querySelector("#message");






inputNome.addEventListener("keyup", () =>{
    if(inputNome.value.length < 3){
        labelNome.innerHTML = "Nome: (Digite um nome válido)";
        labelNome.style.color = "red";
    }else{
        labelNome.innerHTML = "Nome: ";
        labelNome.style.color = "rgb(173, 169, 169)";
    }
});

inputDescricao.addEventListener("keyup", ()=>{
    if(inputDescricao.value.length < 10){
        labelDescricao.innerHTML = "Descrição: (Digite uma descrição.)";
        labelDescricao.style.color = "red";
    }else{
        labelDescricao.innerHTML = "Descrição: ";
        labelDescricao.style.color = "rgb(173, 169, 169)";
    }
});

inputTipo.addEventListener("keyup", ()=>{
    if(inputTipo.value.length < 3){
        labelTipo.innerHTML = "Tipo: (Digite um Tipo válido.)";
        labelTipo.style.color = "red";
    }else{
        labelTipo.innerHTML = "Tipo: ";
        labelTipo.style.color = "rgb(173, 169, 169)";
    }
});

inputImagem.addEventListener("keyup", ()=>{
    if(inputImagem.value.length == 0 ){
        labelImagem.innerHTML = "Link: (Digite um link da imagem válido.)";
        labelImagem.style.color = "red";
    }else{
        labelImagem.innerHTML = "Link: ";
        labelImagem.style.color = "rgb(173, 169, 169)";
    }
});

//message

closeMessage.addEventListener("click", () =>{
    message.style.display = "none"
});

setTimeout(() => {
    message.style.display = "none"
}, 5000);











