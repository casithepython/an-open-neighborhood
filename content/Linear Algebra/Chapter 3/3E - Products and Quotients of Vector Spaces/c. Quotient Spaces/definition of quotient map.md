> [!def] Definition of quotient map
> Suppose $U$ is a subspace of $V$. The quotient map $\pi : V \mapsto V / U$ is the linear map defined by $$\pi(v) = v + U$$ for each $v \in V$.

> [!lem] Dimension of quotient space
> Suppose $V$ is finite-dimensional and $U$ is a subspace of $V$. Then $$\dim V / U = \dim V - \dim U.$$^646926

`PROOF`@[[#^646926]]
Let $\pi$ be the quotient map from $V$ to $V / U$. If $v \in V$, then $v + U = 0 + U$ if and only if $v \in U$ by [[#^a86f05]], so $\text{null } \pi = \dim U$. Also, $\text{range } \pi = V / U$ by its definition. Then, by the [[fundamental theorem of linear maps#^4be8b0]], we have $\dim V / U = \dim \text{range } \pi = \dim V - \dim \text{null } \pi = \dim V - \dim U$.
`QED`
#linearalgebra