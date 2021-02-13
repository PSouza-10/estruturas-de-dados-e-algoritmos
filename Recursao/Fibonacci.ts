function fibbonacci(n){
    if(n >= 3){
        return fibbonacci(n-2) + fibbonacci(n - 1)
     }else{
        return 1
    }
 }
 
 console.log(fibbonacci(10))