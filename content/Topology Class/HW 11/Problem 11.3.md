> [!assumption]
> Let $(X, d)$ be a metric space, and let ${} Y \subseteq X {}$. For any $x, y \in Y$, define $d_{Y} (x, y)$ by  
$d_{Y} (x, y) = d(x, y)$.  

> [!lemma]
> $d_{Y}$ is a metric on $Y$. ^f71e6a

`PROOF`@[[#^f71e6a]]
For $x,y \in Y$, we clearly have $d_{Y}(x,x) = d(x,x) = 0$, $d_{Y}(y,x) = d(y,x) = d(x,y) = d_{Y}(x,y)$, and $d_{Y}(x,y) = d(x,y) \geq 0$. Therefore, $d_{Y}$ satisfies reflexivity, symmetry, and non-negativity.

Let $x,y,z \in Y$. We see that $d_{Y}(x,z) = d(x,z) \leq d(x,y) + d(y,z) = d_{Y}(x,y) + d_{Y}(y,z)$, so $d_{Y}$ satisfies the triangle inequality. Thus, $d_{Y}$ is a metric by [[Definition of a Metric#^d80508]].
`QED`

> [!thm]
> The topology induced by $d_{Y}$ is the same as the subspace topology on $Y$.

Let $T_{S}$ be the subspace topology on $Y$, and let $T_{d}$ be the topology induced by $d_{Y}$. By [[Definition of Metric Space#^65cd3c]], $\mathcal{B} = \{B_{d}(p,\epsilon) \mid p \in X, \epsilon>0\}$ is a basis for $(X,d)$, and so $\mathcal{B}_{S} = \{B_{d}(p,\epsilon) \cap Y \mid p \in X, \epsilon > 0\}$ is a basis for $T_{S}$ by [[Basis for Subspace Topology#^c65445]]. Additionally, by [[Definition of Metric Space#^65cd3c]], we see that ${} \mathcal{B}_{Y} = \{B_{d_{Y}}(p,\epsilon) \mid p \in Y, \epsilon>0\} {}$ is a basis for $T_{Y}$.

Let $p \in Y \subseteq X, \epsilon > 0$. We see that $\forall a \in B_{d_{Y}}(p,\epsilon)$, $d_{Y}(a,p) = d(a,p) < \epsilon$, so because ${} a,p \in Y {}$, $a \in B_{d}(p,\epsilon) \cap Y$. Also, ${} \forall b \in B_{d}(p,\epsilon) \cap Y$, $b \in Y$ and $d(p,b) = d_{Y}(p,b) < \epsilon$, meaning that  $b \in B_{d_{Y}}(p,\epsilon)$ and $B_{d}(p,\epsilon) \subseteq B_{d_{Y}}(p,\epsilon)$. Thus, $B_{d}(p,\epsilon) = B_{d_{Y}}(p,\epsilon)$, so $\mathcal{B}_{S} = \mathcal{B}_{Y}$, which means that $T_{S} = T_{Y}$.

#homework