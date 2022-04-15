#include <stdio.h>

int fibonacci(int n)
{
    if (n >= 3)
    {
        return fibonacci(n - 1) + fibonacci (n - 2);
    }
    return 1;
}  

int main()
{
    
    printf("%d", fibonacci(5));
}