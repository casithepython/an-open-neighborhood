
> [!thm] Compactness is preserved under finite union
> Let $X$ be a topological space. If $C_{1}, . . . , C_{n}$ are [[Definition of Compactness#^db494d|compact]] in $X$, then $\displaystyle\bigcup_{i=1}^n Ci$ is also compact. ^ad6e65

`PROOF`@[[#^ad6e65]]
Let $\mathcal{O}$ be an open cover of $\displaystyle\bigcup_{i=1}^n C_{i}$. For all $i \in \{1,\dots,n\}$, let $\mathcal{O}_{i} = \{U \mid U \in \mathcal{O}, U \cap C_{i}\}$. We note that $\mathcal{O}_{i}$ is an open cover of $C_{i}$, so it has a finite subcover $C \subseteq \mathcal{O}_{i}$ because $C_{i}$ is compact. Then, $\displaystyle\bigcup_{i=1}^n \mathcal{O}_{i}$ is a finite subcover of $\mathcal{O}$, so $\displaystyle\bigcup_{i=1}^n C_{i}$ is compact.

>[!thm] Compactness is preserved under arbitrary intersection in Hausdorff space
>Let $X$ be a Hausdorff space. If $\{C_{\alpha}\}_{\alpha \in A}$ is a collection of [[Definition of Compactness#^db494d|compact]] sets in $X$, $\displaystyle\bigcap_{\alpha \in A}C_{\alpha}$ is compact in X. ^b7f91f

`PROOF`@[[#^b7f91f]]
Since $X$ is Hausdorff, $\forall \alpha \in A$ we see that $C_{\alpha}$ is closed by [[Compact subset of Hausdorff space is closed#^947231]]. Then, $\displaystyle\bigcap_{\alpha \in A}C_{\alpha}$ is closed by [[Foundational Definitions of Topology#^88c324]]. Now, let $i \in A$. As $\displaystyle\bigcap_{\alpha \in A}C_{\alpha} \subseteq C_{i}$ by construction, and $C_{i}$ is compact in $X$, $\displaystyle\bigcap_{\alpha \in A}C_{\alpha}$ must be compact by [[Closed subset of compact set is compact]].
`QED`
#topology