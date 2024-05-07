>[!thm] $\dim \text{range } T = \text{rank }\mathcal{M}(T)$
>Suppose $V,W$ are finite-dimensional and $T \in \mathcal{L}(V,W)$. The dimension of $\text{range } T$ is the same as the [[definition of rank of matrix#^rank|rank]] of $\mathcal{M}(T)$. ^71ff48

`PROOF`@[[#^71ff48]]
Let $v_{1},\dots,v_{n}$ and $w_{1},\dots,w_{m}$ be bases of $V$ and $W$, respectively. The linear map that takes $w \in W$ to $\mathcal{M}(w)$ is an isomorphism between $W$ and $\mathcal{F}^{m,1}$. The restriction of this isomorphism to $\text{range } T = \text{span}(Tv_{1},\dots,Tv_{n})$ is an isomorphism between $\text{range } T$ and $\text{span}(\mathcal{M}(Tv_{1}),\dots,\mathcal{M}(Tv_{n}))$. Then, for each $k \in \{1,\dots,n\}$, the $m$-by-1 matrix $\mathcal{M}(Tv_{k}) = (\mathcal{M}(T))_{\cdot,k}$. Therefore, $\dim \text{range } T = \text{rank}(\mathcal{M}(T))$. Effectively, we have set up a bijection between a basis of $\text{range } T$ and the columns of $\mathcal{M}(T)$, so their spans both have the same dimension.
`QED`

#linearalgebra