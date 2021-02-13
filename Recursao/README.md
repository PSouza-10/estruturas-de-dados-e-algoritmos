# Recursao [Link para o Vídeo](https://www.youtube.com/watch?v=B0NtAFf4bvU&t=1206s)

> É utilizada nomenclatura em português para claridade

## O que é?

Uma funcão que chama a si mesma, com uma condição de parada para definir a profundidade

``Fatorial.ts``
```typescript
function fatorial(n){
    if(n >= 1){
        return n * fatorial(n - 1)
    }else{
        return 1
    }
}
```
A função acima usa recursão para determinar a fatorial de um número `n`, com base no conceito de que `1! = 1`, ou seja, ao chamar função novamente com o n - 1, a multiplicação e feita com todos os números anteriores.

