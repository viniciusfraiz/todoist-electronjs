function adicionarItem() {
    const valorInput = "Minha Primeira tarefa";

    //CRIANDO A TAG UL DO NOSSO HTML PELO ID
    const minhaTagUL = document.getElementById("Lista-de-tarefas");

    //CRIANDO TAG LI COM JAVASCRIP
    const criarTagLI = document.createElement("li") ;

    // ADICIONANDO UM TEXTO PARA NOSSA TagLi CRIADA
    criarTagLI.innerText = valorInput ; 

    // ADICIONANDO A TAG Li para Nossa Ul
    minhaTagUL.appendChild(criarTagLI) ;
    

   console.log("ENTROU NA FUNÇAO ADICIONA ITEM")

}
    