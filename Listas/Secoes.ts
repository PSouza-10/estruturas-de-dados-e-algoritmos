class Secao {
    public valor : number;
    public proxima : Secao 

    constructor(valor : number){
        this.valor = valor
        this.proxima = null
    }

    public atribuirProximo(proxima:Secao){
        this.proxima = proxima
    }
}

const n1 = new Secao(1)
const n2 = new Secao(2)
const n3 = new Secao(3)
const n4 = new Secao(4)
const n5 = new Secao(5)

n1.atribuirProximo(n2)
n2.atribuirProximo(n3)
n3.atribuirProximo(n4)
n4.atribuirProximo(n5)


function contarSecoes(primeira : Secao){
    let contagem = 1
    let atual = primeira
    
    while(atual.proxima !== null){
        atual = atual.proxima
        contagem++
    }

    return contagem
}

console.log(contarSecoes(n1))