// Painel de Supermercado

let lista = []

function exibirMenu(){
    console.log("===== PAINEL SUPERMERCADO =====")
    console.log("1 - Adicionar item na lista")
    console.log("2 - Deletar sua lista")
    console.log("3 - Ver sua lista")
    console.log("4 - Alterar um item da lista")
    console.log("5 - Deletar 1 item da lista")
    console.log("6 - Sair")
}

function mostrarLista(){
    console.log("Sua lista tem " + lista.length + " itens")
    for(let i = 0; i < lista.length; i++){
        console.log((i + 1) + " - " + lista[i])
    }
}

function adicionarItem(){
    let item = prompt("Digite o nome do item:")
    if(item === null || item === ""){
        console.log("Item inválido, nada foi adicionado.")
    } else {
        lista.push(item)
        console.log(item + " adicionado à lista!")
    }
}

function deletarLista(){
    lista = []
    console.log("Lista apagada com sucesso.")
}

function alterarItem(){
    try{
        mostrarLista()
        let posicao = Number(prompt("Digite o número do item que deseja alterar:"))
        let indice = posicao - 1

        if(indice < 0 || indice >= lista.length){
            throw new Error("Posição inválida")
        }

        let novoItem = prompt("Digite o novo valor:")
        lista[indice] = novoItem
        console.log("Item alterado com sucesso!")

    } catch(erro){
        console.log("Erro ao alterar item: " + erro.message)
    }
}

function deletarItem(){
    try{
        mostrarLista()
        let posicao = Number(prompt("Digite o número do item que deseja deletar:"))
        let indice = posicao - 1

        if(indice < 0 || indice >= lista.length){
            throw new Error("Posição inválida")
        }

        let removido = lista[indice]
        lista.splice(indice, 1)
        console.log(removido + " foi removido da lista.")

    } catch(erro){
        console.log("Erro ao deletar item: " + erro.message)
    }
}

let opcao = 0

do {
    exibirMenu()
    opcao = Number(prompt("Escolha uma opção:"))

    switch(opcao){
        case 1:
            adicionarItem()
            break
        case 2:
            deletarLista()
            break
        case 3:
            mostrarLista()
            break
        case 4:
            alterarItem()
            break
        case 5:
            deletarItem()
            break
        case 6:
            console.log("Saindo do painel...")
            break
        default:
            console.log("Opção inválida, tente novamente.")
    }
} while(opcao != 6)
