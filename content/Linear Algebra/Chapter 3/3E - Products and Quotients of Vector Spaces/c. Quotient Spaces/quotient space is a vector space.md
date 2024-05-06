> [!def] Addition and scalar multiplication on $V / U$
> Suppose $U$ is a subspace of $V$. Then *addition* and *scalar multiplication* are defined on $V / U$ by $$(v+U) + (w+U) = (v+w)+U$$$$\lambda(v+U)= (\lambda)+U.$$^4b619b

> [!thm] Quotient space is a vector space
> Suppose $U$ is a subspace of $V$. Then $V / U$, with the operations of addition and scalar multiplication as defined in [[#^4b619b]], is a vector space. ^e40dfc

`PROOF`@[[#^e40dfc]]
We note that as $\forall v,w \in V$ and ${} \forall \lambda \in \mathcal{F} {}$, $v+w \in V$ and $\lambda v \in V$. Thus, the only potential issue with addition and scalar multiplication in this system is lack of uniqueness. Specifically, suppose $v_{1},v_{2},w_{1},w_{2} \in V$ such that $v_{1} + U = v_{2} + U$ and $w_{1} + U = w_{2} + U$. We want to show that $(v_{1} + w_{1}) + U = (v_{2} + w_{2}) + U$.

By [[two translates are either equal or disjoint#^a86f05]] we see that $v_{1}-v_{2},w_{1}-w_{2} \in U$. Thus as $U$ is a vector space we have $(v_{1}-v_{2})+(w_{1}-w_{2}) = (v_{1}+w_{1})-(v_{2}+w_{2}) \in U$, so $(v_{1}+w_{1}) + U = (v_{2}+w_{2}) + U$ again by [[two translates are either equal or disjoint#^a86f05]]. Thus addition holds.

Similarly, suppose $\lambda \in \mathcal{F}, v_{1},v_{2} \in V$ such that $v_{1} + U = v_{2} + U$. We have that $v_{1}-v_{2} \in U$, so $\lambda(v_{1}-v_{2}) = \lambda v_{1} - \lambda v_{2} \in U$. Thus, $\lambda v_{1} + U = \lambda v_{2} + U$, meaning that scalar multiplication holds.

Now that addition and scalar multiplication are defined on $V / U$, the verification of the vector space operations is straightforward (deriving from that fact that we are effectively adjoining the vector space $V$ to a common subspace $U$). $V / U$ is a vector space.
`QED`