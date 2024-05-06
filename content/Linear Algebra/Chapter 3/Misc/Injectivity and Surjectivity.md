> [!def] Definition of injective map
> A function $T : V \mapsto W$ is called *injective* if $Tu = Tv$ implies $u= v$. ^injective

> [!lem] Injectivity dependent on zero
> Let $T \in \mathcal{L}(V,W)$. Then $T$ is injective if and only if $\text{null } T= \{0\}$. ^f36070

`PROOF`@[[#^f36070]]
If $T$ is injective, then $Tu = T 0 = 0$ if and only if $u = 0$, so $\text{null } T = 0$. 

Assume $\text{null } T = 0$. Let $u,v \in V$ such that $Tu = Tv$. We have $Tu - Tv = T(u-v) = 0$, so $u-v = 0$ and $u = v$. Thus, $T$ is injective.
`QED`

> [!def] Definition of surjective map 
> ^surjective

TODO
#linearalgebra