> [!thm] Dimension shows whether vector spaces are isomorphic
> Suppose $V,W$ are finite-dimensional vector spaces over $\mathcal{F}$. $V$ and $W$ are [[definition of isomorphism#^isomorphism|isomorphic]] if and only if $\dim V = \dim W$. ^7b9b1f

`PROOF`@[[#^7b9b1f]]
First, assume that $V$ and $W$ are isomorphic with isomorphism $T : V \mapsto W$. Because $T$ is invertible, we have $\text{null } T = \{0\}$ and $\text{range } T = W$, so $\dim V = \dim \text{null } T + \dim \text{range } T = 0 + \dim W = \dim W$.

Now, assume $\dim V = \dim W$. Let $v_{1},\dots,v_{n}$ be a basis for $V$ and let $w_{1},\dots,w_{n}$ be a basis for $W$. Let $T : V \mapsto W$ be defined by $T(c_{1}v_{1} + \dots + c_{n}v_{n}) = c_{1}w_{1} + \dots + c_{n}w_{n}$. This is well-defined because $v_{1},\dots,v_{n}$ is a basis, and it is surjective because $w_{1},\dots,w_{n}$ spans $W$. Also $\text{null } T = \{0\}$ because $w_{1},\dots,w_{n}$ is linearly independent, meaning that $T$ is injective. Thus, since $T$ is surjective and injective, [[invertible iff injective and surjective#^da1555|it is invertible]], so $V$ and $W$ are [[definition of isomorphism#^isomorphism|isomorphic]].
`QED`
> [!remark]
> Any finite-dimensional vector space $V$ over $\mathcal{F}$ is isomorphic to $\mathcal{F}^{\dim V}$.

#linearalgebra