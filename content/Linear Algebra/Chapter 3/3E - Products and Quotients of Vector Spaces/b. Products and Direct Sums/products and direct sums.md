> [!lemma] Products and Direct Sums
> Suppose $V_{1},\dots,V_{m}$ are subspaces of $V$. Define a linear map from their [[products of vector spaces#^bfac6d|product]] to their sum $\Gamma : V_{1} \times \dots \times V_{m} \mapsto V_{1} + \dots + V_{m}$ by $$\Gamma (v_{1},\dots,v_{m}) = v_{1} + \dots + v_{m}.$$ $V_{1} + \dots + V_{m}$ is a [[definition of direct sum#^a4b10a|direct sum]] if and only if $\Gamma$ is injective. ^42440b

`PROOF`[[#^42440b]]
By [[injectivity and surjectivity#^f36070]], $\Gamma$ is injective if and only if the only values $v_{1},\dots,v_{m}$ such that $\Gamma(v_{1},\dots,v_{m}) = 0$ are $v_{1}=\dots=v_{m}=0$. By [[definition of direct sum#^35d6a0]], this is if and only if $V_{1} + \dots + V_{m}$ is a direct sum.
`QED`
> [!lem] A sum is a direct sum if and only if dimensions add up
> Suppose $V$ is finite-dimensional and $V_{1},\dots,V_{m}$ are subspaces of $V$. Then $V_{1} + \dots + V_{m}$ is a direct sum if and only if $$\dim(V_{1} + \dots + V_{m}) = \dim V_{1} + \dots + \dim V_{m}.$$ ^f81c77

`PROOF`@[[#^f81c77]]
Examining the function $\Gamma$ from [[#^42440b]], we have $\dim (V_{1} \times \dots \times V_{m}) = \dim \text{null } \Gamma + \dim \text{range } \Gamma$. This map is surjective, so $\text{range } \Gamma = V_{1} + \dots + V_{m}$. Then $\Gamma$ is injective if and only if $\text{null } \Gamma = \{0\}$, which is if and only if $\dim(V_{1} \times \dots \times V_{m}) = \dim (V_{1} + \dots + V_{m})$. Then by [[#^42440b]], $\Gamma$ is injective if and only if $V_{1} + \dots + V_{m}$ is a direct sum. Thus, $V_{1} + \dots + V_{m}$ is a direct sum if and only if $\dim(V_{1} \times \dots \times V_{m}) = \dim(V_{1} + \dots + V_{m})$.
`QED`

#linearalgebra