function adicionarItem(event) {
    
    console.log(event)
    const tecla = event.key;

    if(tecla && tecla !== "Enter") return;


    const valorInput = document.getElementById("input").value

    //CRIANDO A TAG UL DO NOSSO HTML PELO ID
    const minhaTagUL = document.getElementById("Lista-de-tarefas");

    //CRIANDO TAG LI COM JAVASCRIP
    const criarTagLI = document.createElement("li") ; 

    //adicionando um evento de clique para a tag <Li>
    criarTagLI.addEventListener('click', concluirTarefa) ; 

    //Criando uma tag em negrito
        const tagRemover = `<i onclick='removerItem(event)' class="fa-solid fa-circle-minus"></i>`; 

    //Adicionando um texto  para nossa tag li criada
    criarTagLI.innerHTML = valorInput + tagRemover ; 

    // Adiconando A tag Li para Nossa Ul
    minhaTagUL.appendChild(criarTagLI) ;
    

}
    
function removerItem(event) {



    //PEGANDO <i> DENTRO DO NOSSO EVENTO
    const  meuIcone = event.target; 

    //PEGADNO A TAG <LI> ATRAVÉS DA TAG <I> COM PROPRIEDADE PARENTELEMENT
    const minhaLi = meuIcone.parentElement
    
    minhaLi.remove()

    
}

function concluirTarefa(event) {

    //Pegando tag <li> dentro no nosso event
    const minhaTagLi = event.target
    
    minhaTagLi.className = "concluida";

}