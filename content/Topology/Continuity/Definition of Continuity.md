>[!def] Definition of continuity
> Let $X,Y$ be topological spaces. A function $f : X \mapsto Y$ is continuous if and only for every open set $U \subseteq Y$, $f^{-1}(U)$ is open in $X$. ^e5d9a1

> [!def] Definition of continuity at a point
> Let $X,Y$ be topological spaces. A function $f : X \mapsto Y$ is continuous at a point $x \in X$ if and only if for any open neighborhood $V$ of $f(x)$, there exists an open neighborhood $U$ of $x$ such that $f(U) \subseteq V$. ^a1e241

> [!thm] Continuity at all points means continuous
> Let $X,Y$ be topological spaces. If a function $f : X \mapsto Y$ is continuous at all points $x \in X$, it is a continuous function. ^ca95c9

`PROOF`@[[#^ca95c9]]
Assume $f : X \mapsto Y$ is continuous at all points $x \in X$. Let $U$ be open in $Y$, and let $V = f^{-1}(U)$. By the definition of inverse, $\forall x \in X$ such that $f(x) \in U$, $x \in V$. Now, $\forall x \in V$, $f(x) \in U$, and since $f$ is continuous at every point in $X$ and $U$ is an open neighborhood of $f(x)$, $\exists A_{x}$ open in $X$ such that $x \in A_{x}$ and $f(A_{x}) \subseteq U$ by [[#^a1e241]]. As $f(A_{x}) \subseteq U$, we must have ${} A_{x} \subseteq V {}$. Let $\displaystyle\mathcal{A} = \bigcup_{x \in V}A_{x}$. Clearly $V \subseteq \mathcal{A}$, and as $A_{x} \subseteq V$ $\forall x \in X$, we must have $\mathcal{A} \subseteq V$. Thus, $\mathcal{A} = V$, and as $\mathcal{A}$ is a union of open sets, $V$ is open. Thus, the pre-image of every open set in $Y$ is open in $X$, so $f$ is continuous by [[#^e5d9a1]].□