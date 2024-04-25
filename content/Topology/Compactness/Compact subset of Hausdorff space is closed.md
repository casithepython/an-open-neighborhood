> [!thm] Compact subset of Hausdorff space is closed
>Let $X$ be a [[Definitions of Hausdorff, Regular, and Normal Spaces#^ffa6ea|Hausdorff]] topological space, and let $A \subseteq X$ be [[Definition of Compactness#^db494d|compact]]. $A$ is [[closed|closed]].

^947231

`PROOF`@[[#^947231]]
Let $x \in X \setminus A$. Because $X$ is Hausdorff, for all $a \in A$, $\exists U_{a},V_{a}$ open and disjoint in $X$ such that $x \in U_{a}, a \in V_{a}$. Let $U = \{U_{a} \mid a \in A\}, V = \{V_{a} \mid a \in A\}$. Since $V$ is an open cover of $A$ and $A$ is compact, it has a finite subcover $C = \left\{ V_{a_{1}},\dots,V_{a_{n}} \right\} \subseteq V$. Let $D = \{U_{a_{1}},\dots,U_{a_{n}}\}$. We note that $x \in \bigcap D$ and $\bigcap D \cap \bigcup C = \phi$. Then, as $A \subseteq \bigcup C$, $\bigcap D \cap A = \phi$, so $\bigcap D \subseteq X \setminus A$. Therefore, $\bigcap D$ is an open set containing $x$ contained in $X\setminus A$, so $X\setminus A$ is open. Thus, $A$ is closed.
`QED`

#topology