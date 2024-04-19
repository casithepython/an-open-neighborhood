Let $X$ be a topological space. Prove the following:  
1. If $C_{1}, . . . , C_{n}$ are compact in $X$, then so is $\displaystyle\bigcup_{i=1}^n Ci$.  
2. If $X$ is Hausdorff and $\{C_{\alpha}\}_{\alpha \in A}$ is a collection of sets that are compact in $X$, then $\displaystyle\bigcap_{\alpha \in A}C_{\alpha}$ is compact in $X$.

> [!thm] Compactness is preserved under finite union
> Let $X$ be a topological space. If $C_{1}, . . . , C_{n}$ are [[Definition of Compactness#^db494d|compact]] in $X$, then $\displaystyle\bigcup_{i=1}^n Ci$ is also compact. ^ad6e65

`PROOF`@[[#^ad6e65]]
Let $\mathcal{O}$ be an open cover of ${} \displaystyle\bigcup_{i=1}^n C_{i} {}$. For all $i \in \{1,\dots,n\}$, let $\mathcal{O}_{i} = \{U \mid U \in \mathcal{O}, U \cap C_{i}\}$. We note that $\mathcal{O}_{i}$ is an open cover of $C_{i}$, so it has a finite subcover $C \subseteq \mathcal{O}_{i}$ because $C_{i}$ is compact. Then, $\displaystyle\bigcup_{i=1}^n \mathcal{O}_{i}$ is a finite subcover of $\mathcal{O}$, so $\displaystyle\bigcup_{i=1}^n C_{i}$ is compact.

>[!thm] Compactness is preserved under arbitrary intersection in Hausdorff space
>Let $X$ be a Hausdorff space. If $\{C_{\alpha}\}_{\alpha \in A}$ is a collection of [[Definition of Compactness#^db494d|compact]] sets in $X$, $\displaystyle\bigcap_{\alpha \in A}C_{\alpha}$ is compact in X. ^b7f91f

`PROOF`@[[#^b7f91f]]
Let $\mathcal{O}$ be an open cover of $\displaystyle\bigcap_{\alpha \in A}C_{\alpha}$. If $\exists \alpha \in A$ such that $C_{\alpha} = \phi$, $\displaystyle\bigcap_{\alpha \in A}C_{\alpha} = \phi$, which is compact, so assume that $\forall \alpha \in A$, $C_{\alpha} \neq \phi$ . Additionally, if $\displaystyle\bigcap_{\alpha \in A}C_{\alpha} = \phi$, $\displaystyle\bigcap_{\alpha \in A}C_{\alpha}$ is compact, so assume $\displaystyle\bigcap_{\alpha \in A}C_{\alpha} \neq \phi$.

Let $x \in \displaystyle\bigcap_{\alpha \in A}C_{\alpha}$, and let $i \in A$.
`QED`




`QED`