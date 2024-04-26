> [!def] Definition of Invertible Map
> A linear map $T \in \mathcal{L}(V,W)$ is called *invertible* if $\exists S \in \mathcal{L}(W,V)$ such that $ST$ equals the identity operator on $V$ and $TS$ equals the identity operator on $W$. ^f92838

> [!def] Definition of Inverse
> Let $T \in \mathcal{L}(V,W)$. A linear map $S \in \mathcal{L}(W,V)$ satisfying $ST = I \in \mathcal{L}(V)$ and $TS = I \in \mathcal{L}(W)$ is called the *inverse* of $T$.

> [!lemma] Inverses are Unique
> Let $T \in \mathcal{L}(V,W)$ such that $T$ is [[#^f92838|invertible]]. There exists a unique $S \in \mathcal{L}(W,V)$ such that $ST = I \in \mathcal{L}(V)$ and $TS = I \in \mathcal{L}(W)$.  ^11bf95

`PROOF`@[[#^11bf95]]
Assume $S_{1},S_{2} \in \mathcal{L}(W,V)$ that satisfy our condition. Then, $(S_{1}T)S_{2} = IS_{2} = S_{2}$, and $(S_{1}T)S_{2} = S_{1}(TS_{2}) = S_{1}I = S_{1}$, so $S_{1} = S_{2}$. 
`QED`
> [!remark] Notation for inverses
> As [[#^11bf95|inverses are unique]], we write the unique inverse of any invertible linear map $T \in \mathcal{L}(V,W)$ as $T^{-1}$.

> [!example] Inverse of a linear map from $\mathbb{R}^3$ to ${} \mathbb{R}^3 {}$
> Suppose ${} T \in \mathcal{L}(\mathbb{R}^3)$ is defined by $T(x,y,z) = (-y,x,4z)$. This corresponds to a counterclockwise rotation by $90^\circ$ in the *xy*-plane and a stretching by a factor of $4$ along the $z$-axis. This can be reversed by the map $T^{-1}(x,y,z) = \left( y,-x, \frac{z}{4} \right)$.

#linearalgebra