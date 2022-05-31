const labelNome = document.querySelector("#labelNome");
const inputNome = document.querySelector("#nome");

const labelDescricao = document.querySelector("#labelDescricao");
const inputDescricao = document.querySelector("#descricao");

const labelTipo = document.querySelector("#labelTipo");
const inputTipo = document.querySelector("#tipo");

const labelImagem = document.querySelector("#labelImagem");
const inputImagem = document.querySelector("#imagem");

const button = document.querySelector("btnCadastrar");

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
    if(inputDescricao.value.length < 3){
        labelDescricao.innerHTML = "Nome: (Digite uma descrição.)";
        labelDescricao.style.color = "red";
    }else{
        labelDescricao.innerHTML = "Nome: ";
        labelDescricao.style.color = "rgb(173, 169, 169)";
    }
});

inputTipo.addEventListener("keyup", ()=>{
    if(inputTipo.value.length < 2){
        labelTipo.innerHTML = "Nome: (Digite uma Tipo válido.)";
        labelTipo.style.color = "red";
    }else{
        labelTipo.innerHTML = "Nome: ";
        labelTipo.style.color = "rgb(173, 169, 169)";
    }
});

inputImagem.addEventListener("keyup", ()=>{
    if(inputImagem.value.length == 0 ){
        labelImagem.innerHTML = "Nome: (Digite um link da imagem válido.)";
        labelImagem.style.color = "red";
    }else{
        labelImagem.innerHTML = "Nome: ";
        labelImagem.style.color = "rgb(173, 169, 169)";
    }
});







// btnSubmit.addEventListener("click", ()=>{
//     alert("Formulario enviado");
// })


