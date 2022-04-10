#!/usr/bin/env python
# coding: utf-8

# In[9]:


import numpy as np
from matplotlib import pyplot as plt

def fs(n):
    a, b = 0, 1
    f=[0]
    for i in range(n):
        a, b = b, a + b
        f.append(a)
    return f
f=fs(10000)

def pi(f,p):
    o=[]
    for n in f:
        o.append(n%p)
    return o

def pp(n):
    p=pi(f,n)
    i=1
    while i<10000:
        p1,p2=p[0:i],p[i:i+i]
        if p1==p2:
            return i
        i+=1

i=1
bp=0
bi=0
peepees=[]
y=[]
o=[]
r=[]
print('Longest pisano-period when n<1000')
print('Calculating',end='')
while i<1000:
    peep=pp(i)
    peepees.append(peep)
    if peep/i>1.8:
        y.append(peep)
        o.append(0)
        r.append(0)
    elif peep/i>=1:
        y.append(0)
        o.append(peep)
        r.append(0)
    else:
        y.append(0)
        o.append(0)
        r.append(peep)

    for p in peepees:
        if p>bp:
            bp=p
            bi=i
    if i%7==0:print('.',end='')
    i+=1

plt.style.use('dark_background')
plot=plt.figure(figsize=(16,10))

ax=plot.add_axes([0,0,1,1])
ax.set_ylabel('π(n)', color='white',fontsize='xx-large')
ax.set_xlabel('Biggest peepee: π('+str(bi)+')='+str(bp), color='white',fontsize='xx-large')
ax.bar(range(1,1000),y, color='y')
ax.bar(range(1,1000),o, color='#FFA500')
ax.bar(range(1,1000),r, color='r')
ax.bar(bi,bp,color='b')
plt.show()


# In[ ]:




