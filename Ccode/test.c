#include "stdio.h"

void main(){
    int a=0;
    int b=1;
    int c=Max(a,b);
    printf("%d",c);
}

int Max(int a,int b){
    if(a>b){
        return a;
    }
    else{
        return b;
    }
}