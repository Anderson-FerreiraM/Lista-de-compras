let listaDeCompras = []

function Addicionar() {
    let itemInput = document.getElementById("item")
    let quantidadeInput = document.getElementById("quantidade")
    if (itemInput.value.trim() === "") {
        return
    }
    let novoItem = {
        id: Date.now(),
        nome: itemInput.value,
        quantidade: quantidadeInput.value || 1,
        comprado: false
    }

    listaDeCompras.push(novoItem)
    salvarDados()
    atualizarInterface()
    itemInput.value = ""
    quantidadeInput.value = ""
    itemInput.focus()
}
function removerItem(id) {
    listaDeCompras = listaDeCompras.filter((item) => item.id != id)
    salvarDados()
    atualizarInterface()
}
function limparLista() {
    listaDeCompras = []
    salvarDados()
    atualizarInterface()
}

function atualizarInterface() {
    let lista = document.querySelector(".lista")
    lista.innerHTML = ""
    for (let i = 0; i < listaDeCompras.length; i++) {
        let item = document.createElement("li")
        item.innerHTML = `
        <input type ='checkbox' onchange = "toggleItem(${listaDeCompras[i].id})" ${listaDeCompras[i].comprado ? "checked" : ""}/>
        <p>${listaDeCompras[i].nome} x ${listaDeCompras[i].quantidade}</p>
        <button onclick = "removerItem(${listaDeCompras[i].id})" >x</button>
        
        `
        lista.append(item)
    }
}
function toggleItem(id) {
    const item = listaDeCompras.find((item) => item.id == id)
    item.comprado = !item.comprado
    salvarDados()
}
function limparComprados() {
    listaDeCompras = listaDeCompras.filter((item) => item.comprado != true)
    salvarDados()
    atualizarInterface()
}


function carregarDados() {
    const dados = localStorage.getItem("listaDeCompras")
    if (dados) {
        listaDeCompras = JSON.parse(dados)
        atualizarInterface()
    }
}
carregarDados()

function salvarDados(){
    localStorage.setItem("listaDeCompras", JSON.stringify(listaDeCompras))

}

document.getElementById("item").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        Addicionar()
    }
})


