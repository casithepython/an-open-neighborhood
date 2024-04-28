> [!thm] The matrix map $\mathcal{M}$ is an isomorphism
> Suppose $V,W$ are vector spaces with $\dim V = n$, $\dim W = m$. Let $v_{1},\dots,v_{n}$ be a basis for $V$ and let $w_{1},\dots,w_{m}$ be a basis for $W$. $\mathcal{M}$ is an isomorphism between ${} \mathcal{L}(V,W)$ and $\mathcal{F}^{m,n}$. ^80da00

`PROOF`@[[#^80da00]]
We have already shown that $\mathcal{M}$ is linear, so we just need to prove it is injective and surjective.

Let $T \in \mathcal{L}(V,W)$ such that $\mathcal{M}(T) = 0$. Then, $Tv_{k} = 0$ for all $k \in \{1,\dots,n\}$. Since $v_{1},\dots,v_{n}$ is a basis of $V$, this means that $T = 0$. Thus, $\mathcal{M}$ is injective.

Let $A \in \mathcal{F}^{m,n}$. By the [[Linear Map Lemma#^linearmaplemma|linear map lemma]], $\exists T \in \mathcal{L}(V,W)$ such that $Tv_{k} = \displaystyle\sum_{j = 1}^m A_{j,k}w_{j}$ for all $k \in \{1,\dots,n\}$. $\mathcal{M}(T) = A$, so $\text{range } \mathcal{M} = \mathcal{F}^{m,n}$ and $\mathcal{M}$ is surjective.

Because $\mathcal{M}$ is injective and surjective, [[Invertible iff  Injective and Surjective#^da1555|it is invertible]].
`QED`

#linearalgebra