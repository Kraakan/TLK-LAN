#!/usr/bin/env python
# coding: utf-8

# Genererar Fibonacci-sekvensen upp till n:te platsen
# Adapterat från https://www.pythonfibonacci.com/

# In[6]:


def fs(n):
    a, b = 0, 1
    f=[0]
    for i in range(n):
        a, b = b, a + b
        f.append(a)
    return f
f=fs(1000)
print(f)


# Genererar en lista på primtal som är >1 och >n
# Adapterat från https://www.tutorialspoint.com/How-to-generate-prime-numbers-using-Python

# In[7]:


def primes(n):
    p=[]
    for x in range(1,n):
        for y in range(2,x):
            if x%y==0:break
        else:
            p.append(x)
    return p
p=(primes(1000))
print(p)


# Genrerar strängar med pisano-perioder:

# In[8]:


import numpy as np

def pi(f,p):
    o=[]
    for n in f:
        o.append(n%p)
    return o
print(pi(f,3))


# Räknar ut pisano-perioden för ett tal n:

# In[37]:


def pp(n):
    p=pi(f,n)
    i=1
    while i<10000:
        p1,p2=p[0:i],p[i:i+i]
        if p1==p2:
            return i
        i+=1
print(pp(1))


# Itererar genom pisano-perioderna för listan av primtal:

# In[38]:


for i in p:
    print("π("+str(i)+")=",pp(i))
    


# In[ ]:




