> [!def] Definition of direct sum
> Suppose $V_{1},\dots,V_{m}$ are subspaces of $V$. The sum $V_{1} + \dots + V_{m}$ is called a *direct sum* and is written $V_{1} \oplus \dots \oplus V_{m}$ if each element of $V_{1} + \dots + V_{m}$ can be written in only way as a sum $v_{1} + \dots + v_{m}$, where each $v_{k} \in V_{k}$.

^a4b10a

> [!lem] Direct sum dependent upon zero
> Suppose $V_{1},\dots,V_{m}$ are subspaces of $V$. $V_{1} + \dots + V_{m}$ is a direct sum if and only if the only way to write $0$ as a sum $v_{1} + \dots + v_{m}$, where each $v_{k} \in V_{k}$, is by taking each $v_{k}$ equal to $0$. ^35d6a0

`PROOF`@[[#^35d6a0]]
First suppose $V_{1} + \dots + V_{m}$ is a direct sum. We clearly see that selecting each $v_{k} = 0$ makes $v_{1} + \dots + v_{m} = 0$, so because it is a direct sum this must be the only way to produce $0$.

Suppose the only way to write $0$ as such a sum is by taking each $v_{k}$ equal to $0$. Let $v \in V_{1} + \dots + V_{m}$. Select two representations $v = v_{1} + \dots v_{m}$ and $v = u_{1} + \dots u_{m}$ for $v$ where $v_{k},u_{k} \in V_{k}$. Then we have $v-v = 0 = (v_{1} - u_{1}) + \dots + (v_{m} - u_{m})$, meaning that $v_{1}-u_{1}=\dots=v_{m}-u_{m} = 0$, which implies that $v_{1}=u_{1},\dots,v_{m}=u_{m}$, so $V_{1} + \dots + V_{m}$ is a direct sum.
`QED`

#linearalgebra