> [!thm] Linear maps are invertible if and only if they are injective and surjective
> Let $T \in \mathcal{L}(V,W)$. $T$ is [[definitions of invertibility#^f92838|invertible]] if and only if it is [[injectivity and surjectivity#^injective|injective]] and [[injectivity and surjectivity#^surjective|surjective]]. ^da1555

`PROOF`@[[#^da1555]]
Suppose $T$ is invertible. Suppose $u,v \in V$ such that $Tu = Tv$. Then, $u = T^{-1}Tu = T^{-1}Tv = v$, so $T$ is injective. Now, suppose $w \in W$. We have $T^{-1}w \in V$ and $TT^{-1}w = w$, so $T$ is surjective.

Now, suppose $T$ is both injective and surjective. We wish to show that $T$ is invertible. $\forall w \in W$, define $Sw$ to be the unique element of $V$ such that $TSw = w$ (such an element is unique and existent because $T$ is injective and surjective). It is clear that $TS$ is the identity operator on $W$. For all $v \in V$, we have $T(ST)v = (TS)Tv = ITv = Tv = TIv$, so $ST$ is also the identity operator on $V$.

We now prove that $S$ is linear. Letting $w_{1},w_{2} \in W$, we see that $T(Sw_{1} + Sw_{2}) = TSw_{1} + TSw_{2} = w_{1} + w_{2}$, so $Sw_{1} + Sw_{2}$ is the unique element of $V$ that maps to $w_{1} + w_{2}$, meaning that it is also equal to $S(w_{1} + w_{2})$ by the definition of $S$. Similarly, for any $\lambda \in \mathcal{F}$, ${} T(\lambda S(w_{1})) = \lambda(TS)(w_{1}) = \lambda w_{1} {}$, so $\lambda Sw_{1}$ is the unique element of $V$ that maps to $\lambda w_{1}$, meaning that it is also equal to $S(\lambda w_{1})$ by the definition of $S$. Therefore, $S$ satisfies both additivity and homogeneity, making it linear. Hence, $T$ is invertible and $S = T^{-1}$.
`QED`

#linearalgebra