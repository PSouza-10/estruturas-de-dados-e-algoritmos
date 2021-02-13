import SecaoArvore from './SecaoArvore'

const raiz = new SecaoArvore(0)

const esquerda1 = new SecaoArvore(0)
const direita1 = new SecaoArvore(0)

const direita2 = new SecaoArvore(1)
const direita3 = new SecaoArvore(0)

const direita4 = new SecaoArvore(1)
const direita5 = new SecaoArvore(1)

direita2.atribuirEsquerda(direita4)
direita2.atribuirDireita(direita5)

direita1.atribuirEsquerda(direita2)
direita1.atribuirDireita(direita3)

raiz.atribuirEsquerda(esquerda1)
raiz.atribuirDireita(direita1)

function contarValorUniversal(raizNode:SecaoArvore){
    if(raizNode === null){
        return 1
    }
    if(raizNode.esquerda === null && raizNode.direita === null){
        return 1
    }else{
        let sum = 0
        let valSum = raizNode.valor + raizNode.esquerda?.valor + raizNode.direita?.valor
        if(valSum/3 === raizNode.valor) sum=1
        
        return sum + contarValorUniversal(raizNode.esquerda) + contarValorUniversal(raizNode.direita)
        
    }
}

console.log(contarValorUniversal(null))