const titulo = document.getElementById("titulo");
const diretor = document.getElementById("diretor");
const ano = document.getElementById("ano");
const lista = document.getElementById("lista");
const button = document.getElementById("button");

// Adicionando evento ao botão
button.addEventListener("click", exibir);

// Função para exibir o filme
function exibir() {
    // Obtendo os valores dos campos
    const valorDoTitulo = titulo.value;
    const valorDoDiretor = diretor.value;
    const valorDoAno = ano.value;

    // Verificando se todos os campos estão preenchidos
    if (valorDoTitulo && valorDoDiretor && valorDoAno) {
        adicionarFilme(valorDoTitulo, valorDoDiretor, valorDoAno);
        limparCampos();
    }
}

// Função para criar e adicionar um novo filme à lista
function adicionarFilme(titulo, diretor, ano) {
    const novoFilme = document.createElement("p");
    novoFilme.textContent = ${titulo} - ${diretor} (${ano});
    lista.appendChild(novoFilme);
}

// Função para limpar os campos de entrada
function limparCampos() {
    titulo.value = "";
    diretor.value = "";
    ano.value = "";
}
