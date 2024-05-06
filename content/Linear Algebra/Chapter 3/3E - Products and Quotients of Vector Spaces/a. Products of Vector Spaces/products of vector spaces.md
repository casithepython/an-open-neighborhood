> [!def] Definition of Product of Vector Spaces
> Suppose $V_{1},\dots,V_{m}$ are vector spaces over some field $\mathcal{F}$.
> - The *product* $V_{1} \times\dots \times V_{m}$ is defined by $$V_{1} \times \dots \times V_{m} = \{(v_{1},\dots,v_{m}) \mid v_{1} \in V_{1}, \dots,v_{m} \in V_{m} \}.$$
> - Addition on $V_{1} \times \dots \times V_{m}$ is defined by $$(u_{1},\dots,u_{m}) + (v_{1},\dots,v_{m}) = (u_{1} + v_{1},\dots,u_{m}+v_{m}).$$
> - Scalar multiplication on $V_{1} \times \dots \times V_{m}$ is defined by $$\lambda(v_{1},\dots,v_{m}) = (\lambda v_{1},\dots,\lambda v_{m}).$$^bfac6d

> [!lem] Product of vector spaces is a vector space
> Suppose $V_{1},\dots,V_{m}$ are vector spaces over $\mathcal{F}$. Their [[products of vector spaces#^bfac6d|product]] $V_{1}\times\dots \times V_{m}$ is a vector space over $\mathcal{F}$. ^744d02

> [!lem] Dimension of product is the sum of dimensions
> Suppose $V_{1},\dots,V_{m}$ are finite-dimensional vector spaces. Then their [[products of vector spaces#^bfac6d|product]] $V_{1} \times \dots \times V_{m}$ is finite-dimensional and $\dim (V_{1} \times \dots \times V_{m}) = \dim V_{1} + \dots + \dim V_{m}$. ^6cfccb

`PROOF`@[[#^6cfccb]]
Choose a basis of each $V_{k}$. For each basis vector $v_{k,j}$ of each $V_{k}$, consider the element of $V_{1} \times \dots \times V_{k}$ that contains $v_{k,j}$ in the $k$th slot and has $0$s everywhere else. The list of all such vectors is linearly independent and spans $V_{1} \times \dots \times V_{m}$, so it is a basis for that space. We can see its length is $\dim V_{1} + \dots + \dim V_{m}$.
`QED`