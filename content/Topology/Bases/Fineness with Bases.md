
>[!lemma] Topology fineness from basis fineness
>Let $X$ be a topological space, and let $T_{1},T_{2}$ be topologies on $X$ where $B_{1}$ is the basis for $T_{1}$. $T_{1} \subseteq T_{2}$ if and only if $B_{1} \subseteq T_{2}$. ^467679

`PROOF`@[[Fineness with Bases#^467679]]
Clearly, if $T_{1} \subseteq T_{2}$ we have $B_{1} \subseteq T_{1} \subseteq T_{2}$.

Assume $B_{1} \subseteq T_{2}$ and let $U \in T_{1}$. Then, by [[Definition of a Basis#^f45567]], $\exists C \subseteq B_{1}$ such that $\bigcup C = U$. Since $C \subseteq B_{1}$, $C \subseteq T_{2}$. Then, by [[Definition of a Topology#^f8f8ce]], $\bigcup C = U$ must be open in $T_{2}$, so $T_{1} \subseteq T_{2}$.
`QED`

>[!thm] Topology fineness from basis elements
> Let $X$ be a topological space and let $T_{1},T_{2}$ be topologies on X with bases $B_{1},B_{2}$, respectively. We have $T_{1} \subseteq T_{2}$ if and only if $\forall x \in X$, $\forall B \in B_{1}$ such that $x \in B$, $\exists C \in B_{2}$ such that $x \in C \subseteq B$. ^00ceca

`PROOF`@[[#^00ceca]]
Assume $T_{1} \subseteq T_{2}$, so $B_{1} \subseteq T_{2}$. Let $x \in X$. For all $B \in B_{1}$ such that $x \in B$, as $B$ is open in $T_{2}$, $\exists C \in B_{2}$ such that $x \in C \subseteq B$ by [[Basis Definition of Open Set#^5e74cb]]. 

Assume that $\forall x \in X$ and $\forall B \in B_{1}$ such that $x \in B$, $\exists C \in B_{2}$ such that $x \in C \subseteq B$. Let $U \in B_{1}$. Now, $\forall x \in U$, $\exists C_{x} \in B_{2}$ such that $x \in C_{x} \subseteq U$. Clearly $\displaystyle \bigcup_{x \in U} C_{x} \subseteq U$, and as $x \in C_{x}$ $\forall x \in U$, we also have $U \subseteq \displaystyle \bigcup_{x \in U} C_{x}$, so $\displaystyle \bigcup_{x \in U} C_{x} = U$. Since $C_{x}$ is open in $T_{2}$ for all $x \in U$, $U$ is open in $T_{2}$. Thus, $T_{1} \subseteq T_{2}$, as we only need to check that the basis elements of $T_{1}$ are open in $T_{2}$.
`QED`