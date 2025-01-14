

let nome = prompt("Digite seu nome")

let paragrafo = document.getElementById("paragrafo")

paragrafo.innerText = nome

//innerHTML
const outro = prompt("Digite uma tag com texto")
let OutroParagrafo = document.getElementById("outroParagrafo")
OutroParagrafo.innerHTML = outro

const talvez = prompt("complete")
let tiraquevougozar = document.getElementById("5")
tiraquevougozar.innerText = talvez

// 1
function alterarP() {
    let n = prompt("Digite o valor de sua")
    let pa = document.getElementById("1")
    pa.innerText = n
}
// 2
function alterarbutun() {
    let as = prompt("TESTE solo")
    let ab = document.getElementById("3")
    ab.innerText = as
}

//nao mexer
function AdicionarHabito() {
    const text = prompt("Digite tal coisa")
    let Lista = document.getElementById("Lista")
    let novoElementoLi = document.createElement("li")
    novoElementoLi.innerText = text
    Lista.append(novoElementoLi)
}
function BOra(){
    let sim = prompt("quem fala essa frase?")
    let nao = document.getElementById("4")
    nao.innerText = sim 
}
function naovagozar(){
    let para = prompt("Como que faz para parar?")
    let continua = document.getElementById("5")
    continua.innerText = para
}