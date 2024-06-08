const titulo = document.getElementById("titulo");
const diretor = document.getElementById("diretor");
const ano = document.getElementById("ano");
const lista = document.getElementById("lista");
const button = document.getElementById("button");


document.getElementById("botao").addEventListener("click", exibir);


function exibir(event) {
    
    

 
    const valorDoTitulo = titulo.value;
    const valorDoDiretor = diretor.value;
    const valorDoAno = ano.value;

  
    if (valorDoTitulo && valorDoDiretor && valorDoAno) {
        adicionarFilme(valorDoTitulo, valorDoDiretor, valorDoAno);
        limparCampos();
    }
}


function adicionarFilme(titulo, diretor, ano) {
    const novoFilme = document.createElement("p");
    novoFilme.textContent = `${titulo} - ${diretor} (${ano})`;
    lista.appendChild(novoFilme);
}


function limparCampos() {
    titulo.value = "";
    diretor.value = "";
    ano.value = "";
}
