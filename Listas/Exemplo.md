# Linked List (Lista Ligada) [Link para o Vídeo](https://www.youtube.com/watch?v=WwfhLC16bis)

> É utilizada nomenclatura em português para claridade

## O que é?

Estrutura de dados onde uma seção guarda o próprio valor e uma referência para a próxima seção. Podemos representá-la como uma classe

```typescript
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
```

Assim, torna se possível encadear diversas seções atribuindo novas seções às seções anteriores, neste caso usando o método `atribuirProximo`.

```typescript
const n1 = new Secao(1)
const n2 = new Secao(2)
const n3 = new Secao(3)

n1.atribuirProximo(n2)
n2.atribuirProximo(n3)
```

A seção `n1` torna-se :

```
Secao {
  valor: 1,
  proxima: Secao { valor: 2, proxima: Secao { valor: 3, proxima: null } }
}
```

Por meio dessa estrutura de dados, é possível escrever algoritmos iterativos como o seguinte, que conta o número total de seções: 

```typescript
function contarSecoes(primeira : Secao){
    let contagem = 1
    let atual = primeira
    
    while(atual.proxima !== null){ // A contagem para quando não há uma próxima seção atribuída
        atual = atual.proxima
        contagem++
    }

    return contagem
}
```

