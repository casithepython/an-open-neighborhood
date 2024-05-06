> [!def] $\tilde{T}$
> Suppose $T \in \mathcal{L}(V,W)$. We define $\tilde{T} : V / \text{null } T \mapsto W$ by $$\tilde{T}(v + \text{null } T) = Tv.$$
> Let $u,v \in V$ such that $u + \text{null } T = v + \text{null } T$. By [[two translates are either equal or disjoint#^a86f05]], we have $u-v \in \text{null } T$, so $T(u-v) = Tu - Tv = 0$, so $Tu = Tv$. Thus this definition holds.
> 
> This map is linear, showing so is an exercise left to the reader.

> [!thm] Null space and range of $\tilde{T}$
> Suppose $T \in \mathcal{L}(V,W)$. Then
> 1. $\tilde{T} \circ \pi = T$, where $\pi$ is the quotient map from $V \mapsto V / \text{null } T$.
> 2. $\tilde{T}$ is injective
> 3. $\text{range } \tilde{T} = \text{range } T$
> 4. $V / \text{null } T$ and $\text{range } T$ are isomorphic vector spaces. ^f07730

`PROOF`@[[#^f07730]]
1. If $v \in V$, then $(\tilde{T} \circ \pi)v = \tilde{T}(v + \text{null } T) = Tv$.
2. Let $v \in V$ such that $\tilde{T}(v + \text{null } T) = 0$. We then have $Tv = 0$, so $v \in \text{null } T$. Then, [[two translates are either equal or disjoint#^a86f05]] implies $v + \text{null } T = 0 + \text{null } T$. Thus, $\text{null }\tilde{T} = \{0 + \text{null } T\}$, so $\tilde{T}$ is injective.
3. This follows from the definition.
4. By 3, we may imagine $\tilde{T}$ as a map from $V / \text{null } T$ to $\text{range } T$. We note that ${} \dim (V / \text{null } T) = \dim V - \dim \text{null } T = \dim \text{range } T = \dim \text{range } \tilde{T} {}$. Thus, the domain and range of $\tilde{T}$ have the same dimension, so because it is injective it is invertible. Hence, $V / \text{null } T$ and $\text{range } \tilde{T} = \text{range } T$ are isomorphic vector spaces. **NOTE: This is an analog of the second isomorphism theorem $G / (\text{ker } \phi) \cong \text{im } \phi$ from the theory of groups.**
`QED`
