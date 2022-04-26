function adicionarItem(event) {
    const tecla = event.key;

 
    if(tecla !== "Enter") return;

    console.log(tecla)

    const valorInput = document.getElementById("input").value

    //CRIANDO A TAG UL DO NOSSO HTML PELO ID
    const minhaTagUL = document.getElementById("Lista-de-tarefas");

    //CRIANDO TAG LI COM JAVASCRIP
    const criarTagLI = document.createElement("li") ; 

    //Criando uma tag em negrito
        const tagRemover = "<b onclick='removerItem(event)'>Remover</b>" ; 

    //Adicionando um texto  para nossa tag li criada
    criarTagLI.innerHTML = valorInput + tagRemover ; 

    // ADICIONANDO A TAG Li para Nossa Ul
    minhaTagUL.appendChild(criarTagLI) ;
    

   console.log("ENTROU NA FUNÇAO ADICIONA ITEM")


}
    
function removerItem(event) {
    //PEGANDO <B> DENTRO DO NOSSO EVENTO
    const tagRemover = event.target; 

    console.log("CLIKEI NA FUNÇAO REMOVER") 

    console.log(tagRemover)
}