> [!def] Definition of the subspace topology
> Let $X$ be a topological space with topology $T$, and let $Y \subseteq X$. The *subspace topology* on $Y$ is $T_{Y} = \left\{ U \cap Y \mid U \in T \right\}$. ^defofsubspacetop

>[!thm] The subspace topology is a topology 
>^subspacetopistop

`PROOF`@[[Definition of Subspace Topology#^subspacetopistop]]
By necessity, $\forall V \in T_{Y}$, $\exists U \in T$ such that $V = T \cap Y$, so $V = T \cap Y \subseteq Y$, meaning that $T_{Y}$ is a collection of subsets of $Y$.

We note that as $\phi, X \in T$, we have $\phi \cap Y = \phi$ and $X \cap Y = Y$ in $T_{S}$.

For any finite collection $\{V_{1},\dots,V_{n}\} \subseteq T_{Y}$, for all $k \in \{1,\dots,n\}$ we have $V_{k} = U_{k} \cap Y$ for some $U_{k} \in T$, so $\displaystyle \bigcap_{i=1}^{n} V_{i} = \bigcap_{i=1}^{n}(U_{i} \cap Y) = \left(\bigcap_{i=1}^{n} U_{i}\right) \cap Y$. Since $U_{i}$ is open in $X$ for all $i \in \{1,\dots,n\}$, $\displaystyle\bigcap_{i=1}^{n}U_{i}$ is open by [[Definition of a Topology#^f8f8ce]], so $\left(\bigcap_{i=1}^{n} U_{i}\right) \cap Y = \displaystyle \bigcap_{i=1}^{n} V_{i}$ is open in $T_{Y}$.

Similarly, for any collection $\{W_{\alpha}\}_{\alpha \in A} \subseteq T_{Y}$, for all $\alpha \in A$ we have $V_{\alpha} = U_{\alpha} \cap Y$ for some $U_{\alpha} \in T$, so $\displaystyle\bigcup \{W_{\alpha}\}_{\alpha \in A} = \displaystyle\bigcup\{U_{\alpha} \cap Y\}_{\alpha \in A} = \left(\displaystyle\bigcup\{U_{\alpha}\}_{\alpha \in A}\right) \cap Y$. Since $U_{\alpha}$ is open in $X$ for all $\alpha \in A$, $\displaystyle\bigcup\{U_{\alpha}\}_{\alpha \in A}$ is open by [[Definition of a Topology#^f8f8ce]], so $\left(\displaystyle\bigcup\{U_{\alpha}\}_{\alpha \in A}\right) \cap Y = \displaystyle\bigcup \{W_{\alpha}\}_{\alpha \in A}$ is open in $T_{Y}$.

Thus, by [[Definition of a Topology#^f8f8ce]], $T_{Y}$ is a topology on $Y$.
`QED`