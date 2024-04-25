
>[!lemma] Compact and Hausdorff implies regular
>Let $X$ be a topological space. If $X$ is [[Definition of Compactness#^450466|compact]] and [[Definitions of Hausdorff, Regular, and Normal Spaces#^ffa6ea|Hausdorff]], $X$ is [[Definitions of Hausdorff, Regular, and Normal Spaces#^5978f7|regular]]. ^28

`PROOF`@[[#^28]]
Let $a \in X$ and $B \subseteq X$ such that $a \not\in B$ and $B$ closed. Now, $\forall x \in B$, $\exists U_{x},V_{x}$ open and disjoint such that $a \in U_{x}$ and ${} x \in V_{x} {}$. Let $U = \{U_{x} \mid x \in B\}, V = \{V_{x} \in x \in B\}$. Since $V$ is an open cover of $B$ and $X$ is compact, it has some finite subcover $C = \{V_{x_{1}},\dots,V_{x_{n}}\} \subseteq V$. Then, given that set of indices $\{x_{1},\dots,x_{n}\}$, let $D = \{U_{x_{1}},\dots,U_{{x_{n}}}\}$. Since every element of $D$ is an open neighborhood of $a$ and $D$ is finite, $\bigcap D$ is an open set containing $a$. Since $C$ is an open cover of $B$, $\bigcup C$ is an open set containing $B$. We note that as $U_{x_{1}} \cap V_{x_{1}} = \dots = U_{x_{n}} \cap V_{x_{n}} = \phi$, we have ${} \bigcap D \cap \bigcup C = \phi {}$. Thus, $X$ is regular.
`QED`

>[!thm] Compact and Hausdorff implies normal
>Let $X$ be a topological space. If $X$ is [[Definition of Compactness#^450466|compact]] and [[Definitions of Hausdorff, Regular, and Normal Spaces#^ffa6ea|Hausdorff]], $X$ is [[Definitions of Hausdorff, Regular, and Normal Spaces#^e6b659|normal]]. ^27

`PROOF`@[[#^27]]
Let $A,B$ closed and disjoint in $X$. By [[#^28]], we see that $\forall x \in A$, $\exists U_{x},V_{x}$ open and disjoint such that $x \in U_{x}$ and $B \subseteq V_{x}$. Let ${} U = \{U_{x} \mid x \in A\}, V = \{V_{x} \mid x \in A \}$. Since $U$ is an open cover of $A$ and $X$ is compact, it has some finite subcover $C = \{U_{x_{1}},\dots,U_{x_{n}}\}$. Then, given that set of indices ${} \{x_{1},\dots,x_{n}\}$, let $D= \{V_{x_{1}},\dots,V_{x_{n}}\}$. Since every element of $D$ is an open set containing $B$, and since $D$ is finite, $\bigcap D$ is an open set containing $B$. Since $C$ is an open cover of $A$, $\bigcup C$ is an open set containing $A$. Also, as $U_{x_{1}} \cap V_{x_{1}} = \dots = U_{x_{n}} \cap V_{x_{n}} = \phi$, we have $\bigcap D \cap \bigcup C = \phi$. Thus, $X$ is normal.
`QED`
