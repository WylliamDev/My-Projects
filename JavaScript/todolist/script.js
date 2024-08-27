const button = document.querySelector('.btnaddtask')
const input = document.querySelector('.inputtask')
const listaCompleta = document.querySelector('.listtask')

let minhaListaDeItens = []

// Função para adicionar uma nova tarefa
function adicionarNovaTarefa() {

    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false
    })
//input.value = '' Faz com que ao adicionar uma nova tarefa o input seja limpo
    input.value = ''
    
    console.log(minhaListaDeItens)
    mostrarTarefas() // Atualiza a lista exibida

}

// Função para mostrar as tarefas na lista
function mostrarTarefas() {

    let novaLi = ''

    minhaListaDeItens.forEach((item, posicao) => {
        // "+" sempre vai uma nova tarefa
        novaLi += `

        <li class="task ${item.concluida && "done"}">
            <img src="./img/checked.png" alt="checktask" onclick="concluirItem(${posicao})">
            <p>${item.tarefa}</p>
            <img src="./img/trash.png" alt="trashtask" onclick="deletarItem(${posicao})">
        </li>
        `
    })

    listaCompleta.innerHTML = novaLi

    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))

}

function concluirItem(posicao){
    minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida

    mostrarTarefas()
}

//index é a mesma coisa de posição
//ex: comprar pão(posiçao1), estudar(posiçao 2)
function deletarItem(posicao){
    minhaListaDeItens.splice(posicao, 1)
    mostrarTarefas()
}

function recarregarTarefas() {
    const tarefasDoLocalStorage = localStorage.getItem('lista')

    if(tarefasDoLocalStorage) {
    minhaListaDeItens = JSON.parse(tarefasDoLocalStorage)
    }
    
    mostrarTarefas()
}

button.addEventListener('click', adicionarNovaTarefa)