>[!thm] The pre-image of a closed set under a continuous function is closed
>Let $X,Y$ be topological spaces and let $f : X \mapsto Y$ be a continuous function. If $A$ is a closed set in $Y$, $f^{-1}(A)$ is closed in $X$. ^22

`PROOF`@[[#^22]]
Let $A$ be closed in $Y$, so $B = Y \setminus A$ is open. Thus, $f^{-1}(B)$ is open in $X$, so $X \setminus f^{-1}(B)$ is closed. For all $x \in X \setminus f^{-1}(B)$, $f(x) \not\in B$, so $f(x) \in Y \setminus B = A$. Therefore, $x \in f^{-1}(A)$, so ${} X \setminus f^{-1}(B) \subseteq f^{-1}(A) {}$. Also, for all $y \in A$, $y \not\in B$, so $f^{-1}(y) \not\in f^{-1}(B)$, meaning that $f^{-1}(y) \in X \setminus f^{-1}(B)$. Then, since $y \in A$ if and only if $f^{-1}(y) \in f^{-1}(A)$, $f^{-1}(A) \subseteq X \setminus f^{-1}(B)$. Thus, $f^{-1}(A) = X \setminus f^{-1}(B)$, and as $f^{-1}(B)$ is open in $X$, $f^{-1}(A)$ is closed in $X$.
`QED`

#topology 