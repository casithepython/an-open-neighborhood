Prove that any infinite set with the finite complement topology is a connected space.

>[!thm] Any infinite set with the finite complement topology is a connected space
>Let $X$ be an infinite set with the [[Definition of Finite Complement Topology#^25|finite complement topology]] $T$. $X$ is connected. ^24

`PROOF`@[[Problem 12.2#^24]]
Assume $X$ is disconnected, so $\exists U,V$ open in $X$ such that $U \cap V = \phi$ but $U \cup V = X$. By the [[Definition of Finite Complement Topology#^25]], there must exist finite sets $A,B \subseteq X$ such that $U = X \setminus A$, $V = X \setminus B$. As $A,B$ are finite but $X$ is infinite, $X \setminus (A \cup B) = (X \setminus A) \cap (X \setminus B) = U \cap V \neq \phi$. $\Longrightarrow\Longleftarrow$, so $X$ is connected.
`QED`
#homework