package com.company;interface M{static void main(){for(int i = 999999;; i-=2){int p=1;for(int j = 2; j<i/2; j++)if(i%j==0){p=0;j=i;}if(p>0){System.out.print(i);return;}}}}