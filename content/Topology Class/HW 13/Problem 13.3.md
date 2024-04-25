Let $X$ be a compact space, and let ${} \{C_{n}\}_{n\in\mathbb{Z}_{+}} {}$ be a collection of non-empty closed subsets of $X$ such that $C_{n+1} \subseteq C_{n}$ for all $n ∈ \mathbb{Z}_{+}$. Prove that $\displaystyle\bigcap_{ n\in\mathbb{Z}_{+}}C_{n}$ is non-empty.

> [!thm] 
> Let $X$ be a compact space, and let ${} \{C_{n}\}_{n\in\mathbb{Z}_{+}} {}$ be a collection of non-empty closed subsets of $X$ such that $C_{n+1} \subseteq C_{n}$ for all $n ∈ \mathbb{Z}_{+}$. $\displaystyle\bigcap_{ n\in\mathbb{Z}_{+}}C_{n} \neq \phi$. ^f22ddc

`PROOF`@[[#^f22ddc]]
For all $n \in \mathbb{Z}_{+}$, let $D_{n} = X \setminus C_{n}$. Since $X \setminus D_{n+1} = C_{n+1} \subseteq C_{n} = X \setminus D_{n}$, we must have $D_{n} \subseteq D_{n+1}$ for all $n \in \mathbb{Z}_{+}$. 

Assume $\displaystyle\bigcap_{ n\in\mathbb{Z}_{+}}C_{n} = X \setminus \displaystyle\bigcup_{n\in \mathbb{Z}_{+}}D_{n} =  \phi$, so $\displaystyle\bigcup_{n\in \mathbb{Z}_{+}}D_{n} = X$. Since $X$ is [[Definition of Compactness#^450466|compact]], there must exist some finite collection $A = \{D_{n_{1}},\dots,D_{n_{k}}\} \subseteq \{D_{n}\}_{n \in \mathbb{Z}_{+}}$ such that $\bigcup A = X$. Since $D_{n} \subseteq D_{n+1}$ for all $n \in \mathbb{Z}_{+}$, $\bigcup A = D_{\max(\{n_{1},\dots,n_{k}\})}$, so ${} D_{\max(\{n_{1},\dots,n_{k}\})} = X$. Then, $C_{\max(\{n_{1},\dots,n_{k}\})} = X \setminus D_{\max(\{n_{1},\dots,n_{k}\})} = X \setminus X = \phi$. As we said that $C_{n} \neq \phi$ for all $n \in \mathbb{Z}_{+}$, $\Longrightarrow\Longleftarrow$, so $\displaystyle\bigcap_{ n\in\mathbb{Z}_{+}}C_{n} \neq \phi$.
`QED`
#homework