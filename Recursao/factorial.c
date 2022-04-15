#include <stdio.h>
#include <stdlib.h>


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
    int cu = 4;
    printf("%d\n", factorial(cu));
}