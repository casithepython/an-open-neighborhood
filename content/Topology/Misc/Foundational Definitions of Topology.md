> [!def] Definition of a topology
> For any set $X$, a *topology* $T$ on $X$ is a collection of subsets of $X$ such that:
> 1. $\phi, X \in T$
> 2. For any finite subcollection $C = \{U_{1},\dots,U_{n}\} \subseteq T$, $\bigcap C \in T$.
> 3. For any subcollection $D \subseteq T$, $\bigcup D \in T$. ^f8f8ce
> 
> Such a set $X$ together with a topology $T$ is called a *topological space*.

> [!def] Definition of open set
> Let $X$ be a topological space with topology $T$. A set $A \subseteq X$ is called *open* if $A \in T$.

> [!cor] Open sets closed under finite intersection and arbitrary union
> By the definitions of a topology, the union of any collection of open sets is open, and the intersection of any finite collection of open sets is open.

^750287

> [!def] Definition of closed set
> Let $X$ be a topological space with topology $T$. A set $A \subseteq X$ is called *closed* if its complement is open; that is, if $X \setminus A \in T$. ^e56a34

> [!cor] Closed sets closed under finite union and arbitrary intersection
> Let $X$ be a topological space, and let ${} C=\{C_{\alpha}\}_{\alpha \in A} {}$ be a collection of [[#^e56a34|closed]] sets in $X$. Let there also be a finite subset $D = \{C_{1},\dots,C_{n}\} \subseteq C$. Both $\bigcap C$ and $\bigcup D$ are closed.  ^88c324

`PROOF`@[[#^88c324]]
Let $B = \{X \setminus C_{\alpha}\}_{\alpha \in A}$, so every element of $B$ is open. By [[#^750287]], $\bigcup B = X \setminus \bigcap C$ is open, so $\bigcap C$ is closed. Similarly, let there be a collection of open sets $A = \{X \setminus C_{1},\dots,X \setminus C_{n}\}$. ${} \bigcap A = X \setminus \bigcup D {}$ is open, so $\bigcup D$ is closed.
`QED`


#topology