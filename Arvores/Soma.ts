import SecaoArvore from "./SecaoArvore"

const raiz = new SecaoArvore(2)

const esquerda1 = new SecaoArvore(3)
const direita1 = new SecaoArvore(4)

const esquerda2 = new SecaoArvore(5)
const esquerda3 = new SecaoArvore(6)

esquerda1.atribuirEsquerda(esquerda2)
esquerda1.atribuirDireita(esquerda3)

raiz.atribuirEsquerda(esquerda1)
raiz.atribuirDireita(direita1)

let numeroDeSecoes = 0

function encontrarSoma (secaoRaiz: SecaoArvore){
    numeroDeSecoes ++
    if(secaoRaiz === null) return 0
    else return secaoRaiz.valor + encontrarSoma(secaoRaiz.esquerda) + encontrarSoma(secaoRaiz.direita)
}
console.log(encontrarSoma(raiz))
console.log(numeroDeSecoes)
