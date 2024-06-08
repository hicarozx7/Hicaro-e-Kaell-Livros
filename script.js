//Declarando as variáveis
let titulo=document.getElementById("titulo")
let diretor=document.getElementById("diretor")
let ano=document.getElementById("ano")
let lista=document.getElementById("lista")
let button=document.getElementById("button")

//button
button.addEventListener("click",exibir)



function exibir (){
   let valorDoTitulo=titulo.value
   let valorDoDiretor=diretor.value 
   let valorDoAno=ano.value
   
   if(valorDoTitulo!="" && valorDoDiretor!="" && valorDoAno!="" ){
   
   let novoFilme=document.createElement("p")

   novoFilme.textContent=(valorDoTitulo+"-"+valorDoDiretor+"("+valorDoAno+")")
          
   lista.appendChild(novoFilme)

   titulo.value=""
   diretor.value=""
   ano.value=""

   }
   
}