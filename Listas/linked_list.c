#include <stdio.h>
#include <stdlib.h>

struct Node 
{
    int data;
    struct Node* next;
};

void printlist(struct Node* n)
{
    while (n != NULL)
    {
        
        printf(" %d ", n->data);
        printf("\n");
        
        n = n->next;
    }
}

int countnodes(struct Node* head)
{
    int count = 1;
    struct Node* current = head;
    while(current->next != NULL)
    {
        current = current->next;
        count++;
    }

    return count;
};

int main()
{
    
    struct Node* head = NULL;
    struct Node* second = NULL;
    struct Node* third = NULL;
    struct Node* fourth = NULL;
    struct Node* fifth = NULL;
    

    head = (struct Node*)malloc(sizeof(struct Node));
    second = (struct Node*)malloc(sizeof(struct Node));
    third = (struct Node*)malloc(sizeof(struct Node));
    fourth = (struct Node*)malloc(sizeof(struct Node));
    fifth = (struct Node*)malloc(sizeof(struct Node));

    head->data = 6;
    head->next = second;
    
    second->data = 3;
    second->next = third;
    
    third-> data = 4;
    third->next = fourth;
 
    fourth-> data = 2;
    fourth->next = fifth;

    fifth-> data = 1;
    fifth->next = NULL;

 
    printlist(head);
    printf(" %d \n", countnodes(head));
    return 0;

}

