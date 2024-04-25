Let $X$ be a topological space, and suppose that $\{A_{i}\}_{i∈\mathbb{N}}$ is a collection of connected subsets of $X$ such that $A_{i} \cap A_{i+1} \neq \phi$ for all $i \in \mathbb{N}$. Prove that $\displaystyle\bigcup_{i\in N}A_{i}$ is connected.
>[!thm]
>Let $X$ be a topological space, and suppose that $\{A_{i}\}_{i∈\mathbb{N}}$ is a collection of connected subsets of $X$ such that $A_{i} \cap A_{i+1} \neq \phi$ for all $i \in \mathbb{N}$. $\displaystyle\bigcup_{i\in N}A_{i}$ is connected. ^cfc123

`PROOF`@[[#^cfc123]]
Assume $\displaystyle\bigcup_{i\in N}A_{i}$ is disconnected, so there exist $U,V$ open and nonempty in $X$ such that $U \cap V = \phi$ and $U \cup V = \displaystyle\bigcup_{i\in N}A_{i}$. 

Now, for any $n \in \mathbb{N}$, we show that either $A_{i} \subseteq U$ or $A_{i} \subseteq V$. Assume for the sake of contradiction that $A \not\subseteq U$ and $A \not \subseteq V$. Since $A_{i} \subseteq X = U \cup V$, we must have both ${} A \cap U, A_{i} \cap V \neq \phi {}$. Also, since $U \cap V = \phi$, ${} A_{i} \cap U \cap V = \phi {}$. Then, by [[Definition of Connected Subset#^c7e81f]], $A_{i}$ is disconnected in $X$. By assumption, $A$ is connected, so $\Longrightarrow\Longleftarrow$. Thus, either $A_{i} \subseteq U$ or $A_{i} \subseteq V$.

Without loss of generality, let $A_{1} \subseteq U$. Assume for the sake of contradiction that $\exists n \in \mathbb{N}$ such that $A_{n} \subseteq U$ but ${} A_{n+1} \not\subseteq U$, so $A_{n+1} \subseteq V$ by the previous paragraph. However, then ${} A_{n} \cap A_{n+1} \subseteq U \cap V = \phi$, but $A_{n} \cap A_{n+1} \neq \phi$ by assumption. $\Longrightarrow\Longleftarrow$, so $A_{n+1} \subseteq V$. Thus, by the principle of mathematical induction, $A_{n} \subseteq U$ for all $n \in \mathbb{N}$. Then, $\left(\displaystyle\bigcup_{i\in N}A_{i} \right) \cap V \subseteq U \cap V = \phi$, but we must have $\left(\displaystyle\bigcup_{i\in N}A_{i}\right) \cap V \neq \phi$ by [[Definition of Connected Subset#^c7e81f]]. $\Longrightarrow\Longleftarrow$, so $\displaystyle\bigcup_{i\in N}A_{i}$ is connected in $X$.
`QED`

#homework