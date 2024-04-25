>[!thm] Basis for subspace topology is intersection of basis elements with subspace
>Let $X$ be a topological space with topology $T$, which has basis $\mathcal{B}$. Let $Y \subseteq X$. The collection $\mathcal{C} = \{B \cap Y \mid B \in \mathcal{B}\}$ is a basis for the [[Definition of Subspace Topology#^defofsubspacetop|subspace topology]] on $Y$. ^c65445

`PROOF`@[[#^c65445]]
We see that $\mathcal{C} \subseteq \mathcal{B}$. Let $T_{Y}$ be the subspace topology on $Y$. For all $U \in T_{Y}$, we note that $U = V \cap Y$ for some $V \in T$. Then, ${} \exists D \subseteq \mathcal{B} {}$ such that $\bigcup D = V$ by [[Definition of a Basis#^f45567]]. Now, $U = V \cap Y = \left(\bigcup D \right)\cap Y =\bigcup\left(\{E \cap Y \mid E \in D\} \right)$. We now have that ${} \bigcup\left(\{E \cap Y \mid E \in D \subseteq \mathcal{B}\} \right) \subseteq \mathcal{C} {}$, so $\mathcal{C}$ is a basis for $T_{Y}$ by [[Definition of a Basis#^f45567]].
`QED`

#topology