Do the following two parts:  
1. Let $(X, d)$ be a metric space. Show that if $A \subseteq X$ is compact in $X$, then $A$ is closed and bounded.  
2. Give an example of a subset of a metric space that is closed and bounded but not compact.
	1. $\mathbb{Q}$

> [!thm] A compact subset of a metric space is closed and bounded
> Let $(X,d)$ be a metric space, and let $A \subseteq X$ be compact. $A$ is closed and bounded in $X$.

^553a4e

`PROOF`@[[#^553a4e]]
Since $X$ is metric, it is Hausdorff, so $A$ is closed by [[Compact subset of Hausdorff space is closed#^947231]].

Let $\mathcal{O}$ be an open cover of $A$. Since $A$ is [[Definition of Compactness#^db494d|compact]], $\mathcal{O}$ must have a finite subcover $B$. Since [[Definition of a Basis#^f45567]], and [[Definition of Metric Space#^65cd3c|basis elements of metric spaces are open balls]], every element of $B$ is a union of open balls. Let $D$ be a set of open balls for whom every element of $B$ is a union of a subcollection of $D$. $D$ also covers $A$, so it must have a finite subcover $E = \{B_{d}(x_{1},\epsilon_{1}),\dots,B_{d}(x_{n},\epsilon_{n})\}$. We note then that $A \subseteq \bigcup E \subseteq B_{d}(x_{1},\epsilon_{1} + d(x_{1},x_{2}) + \epsilon_{2} + \dots + d(x_{1},x_{n}) + \epsilon_{n})$, which is bounded, so $A$ is bounded.
`QED`
> [!note] Not all closed and bounded subsets of metric spaces are compact. 
> Let  $Q$ be our metric space under the standard metric. $[0,1] \cap Q$ is closed and bounded, but 