Let $X$ and $Y$ be homeomorphic spaces.  
1. Show that if $X$ is regular, then so is $Y$.  
2. Show that if $X$ is normal, then so is $Y$.

>[!thm] Regularness is preserved under homemorphism
>Let $X, Y$ be topological spaces, and let $f : X \mapsto Y$ be a homeomorphism. If $X$ is [[Definitions of Hausdorff, Regular, and Normal Spaces#^5978f7|regular]], $Y$ is regular. ^e6c920

`PROOF`@[[#^e6c920]]
Let $a \in Y$ and $B \subseteq Y$ where $B$ is closed and $a \not\in B$. Since $X$ is regular and $f^{-1}(B)$ is closed by [[Pre-image of closed set is closed under cts function#^22]], $\exists U,V$ open in $X$ such that $U \cap V = \phi$, ${} f^{-1}(a) \in U {}$, and $f^{-1}(B) \subseteq V$. Then, $a \in f(U)$ and $B \subseteq f(V)$. Since $f^{-1}$ is [[Definition of Continuity#^e5d9a1|continuous]], $f^{-1^{-1}}(U) = f(U)$ and $f^{-1^{-1}}(V) = f(V)$ are both open in $Y$, so $Y$ is regular.
`QED`

> [!thm] Normalness is preserved under homeomorphism
> Let $X, Y$ be topological spaces, and let $f : X \mapsto Y$ be a homeomorphism. If $X$ is [[Definitions of Hausdorff, Regular, and Normal Spaces#^e6b659|normal]], $Y$ is normal. ^23

`PROOF`@[[#^23]]
Let $A,B$ closed in $Y$. Since $X$ is normal and $f^{-1}(A),f^{-1}(B)$ are closed by [[Pre-image of closed set is closed under cts function#^22]], $\exists U,V$ open in $X$ such that $U \cap V = \phi$, ${} f^{-1}(A) \subseteq U$, and $f^{-1}(B) \subseteq V$. Then, ${} A \subseteq f(U) {}$ and $B \subseteq f(V)$. Since $f^{-1}$ is [[Definition of Continuity#^e5d9a1|continuous]], $f^{-1^{-1}}(U) = f(U)$ and $f^{-1^{-1}}(V) = f(V)$ are both open in $Y$, so $Y$ is normal.
`QED`
