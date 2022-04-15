#include <stdio.h>



int factorial(int n)
{
    if (n >= 1)
    {
        return n * factorial(n - 1);       
    } 
    else 
    {
        return 1; 
    }
}

int main ()
{
    int teste = 4;
    printf("%d\n", factorial(teste));
}
