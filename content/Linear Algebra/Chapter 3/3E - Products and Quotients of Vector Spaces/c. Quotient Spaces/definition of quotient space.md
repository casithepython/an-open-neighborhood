>[!def] Definition of translates
> Let $V$ be a vector space. Suppose $v \in V$ and $U \subseteq V$. Then $v + U$ is the subset of $V$ defined by $v + U = \{v + u \mid u \in U\}$. We say that $v+U$ is a **translate** of $U$. ^3106e5

> [!example] Some examples of translates
> - Suppose $U$ is the line in $\mathbb{R}^2$ through the origin with slope $2$. Then $(17,20) + U$ is the line in $\mathbb{R}^2$ that has slope $2$ and contains the point $(17,20)$, which is obtained by moving $U$ to the right by $7$ units. Thus we note that $(17,20) + U = (0,7) + U$.
> - All lines of slope $2$ in $\mathbb{R}^2$ are in fact translates of $U$.
> - In general, if $U$ is a line in $\mathbb{R}^2$, the set of all translates of $U$ is the set of all lines parallel to $U$ in the plane.
> - If $U$ is a plane in $\mathbb{R}^3$, the set of all translates of $U$ is the set of all planes parallel to $U$ in $\mathbb{R}^3$.

> [!def] Definition of quotient space
> Suppose $U$ is a subspace of $V$. Then the **quotient space** $V / U$ is the set of all [[#^3106e5|translates]] of $U$. That is, $$V / U = \{v+U \mid v \in V\}.$$

> [!example] Some examples of quotient spaces
> - If $U = \{(x,2x) \in \mathbb{R}^2 : x \in \mathbb{R}\}$, the line through the origin of slope 2, then $\mathbb{R}^2 / U$ is the set of all lines in $\mathbb{R}^2$ that have slope $2$.
> - If $U$ is a line in $\mathbb{R}^3$, then ${} \mathbb{R}^3 / {U} {}$ is the set of all lines in $\mathbb{R}^3$ parallel to $U$.
> - If $U$ is a plane in $\mathbb{R}^4$, then $\mathbb{R}^4 / U$ is the set of all planes in $\mathbb{R}^4$ parallel to $U$.


#linearalgebra