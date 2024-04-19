> [!lemma] The distance between two closed sets in a metric space is positive
> Let $(X,d)$ be a metric space, and let $A,B$ closed in $X$ such that ${} A \cap B = \phi {}$. We have $\text{inf}(d(a,b) \mid a \in A, b \in B) > 0$.

By the definition of metric, $d(a,b) \geq 0$ for all $a,b \in X$, so $\text{inf}(d(a,b) \mid a \in A, b \in B) \geq 0$.

Assume $\exists A,B$ closed in $X$ such that $\text{inf}(d(a,b) \mid a \in A, b \in B) = 0$.

> [!thm] Metric spaces are normal
> Let $(X,d)$ be a metric space. $(X,d)$ is [[Definitions of Hausdorff, Regular, and Normal Spaces#^e6b659|normal]].

^309e34

`PROOF`@[[#^309e34]]
Let $A,B \subseteq X$ be closed such that $A \cap B = \phi$. We see that $U = X \setminus A, V = X \setminus B$ are open. A
`QED`