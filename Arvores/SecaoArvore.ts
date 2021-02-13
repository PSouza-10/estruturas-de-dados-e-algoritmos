class SecaoArvore {
    valor : number
    esquerda : SecaoArvore
    direita : SecaoArvore

    constructor(val : number) {
        this.valor = val
        this.direita = null
        this.esquerda = null
    }

    atribuirEsquerda(esquerda: SecaoArvore){
        this.esquerda = esquerda
    }
    atribuirDireita(direita : SecaoArvore){
        this.direita = direita
    }
}
export default SecaoArvore