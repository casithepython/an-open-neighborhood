> [!thm] Two translates of a subspace are either equal or disjoint
> We refer to the definition of a [[definition of quotient space#^3106e5|translate]]. Suppose $U$ is a subspace of $V$ and $v,w \in V$. Then, $$v-w \in U \iff v+U = w+U \iff (v+U) \cap (w+U) \neq \phi.$$^a86f05

`PROOF`@[[#^a86f05]]
Assume $v-w \in U$. If $u \in U$, $v + u = w + ((v-w) + u) \in w + U$, so $v + U \subseteq w + U$. Similarly, $w + U \subseteq v + U$, so $v + U = w + U$. Since $U$ is nonempty (it must contain $0$), $v+U = w+U$ implies that $(v+U) \cap (w+U) = v+U \neq \phi$.

Now suppose $(v+U) \cap (w+U) \neq \phi$. Then $\exists u_{1},u_{2} \in U$ such that $v + u_{1} = w + u_{2}$, so $v-w = u_{2}-u_{1} \in U$. This completes the proof.
`QED`