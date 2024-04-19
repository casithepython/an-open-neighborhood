> [!thm] Basis Definition of Open Set
> Let $X$ be a topological space, and let $\mathcal{B}$ be a basis for $X$. A set $U \subseteq X$ is open if and only if $\forall x \in U$, $\exists B \in \mathcal{B}$ such that $x \in B \subseteq U$.

^5e74cb

`PROOF`@[[#^5e74cb]]
Clearly if $\forall x \in U$, $\exists B \in \mathcal{B}$ such that $x \in B \subseteq U$, $U$ is a union of basis elements and thus open by [[Definition of a Basis#^f45567]]. If $U$ is open, it is a union of basis elements, and at least one of those basis elements must contain $x$ in order for their union to equal $U$.
`QED`

#topology #bases #definition