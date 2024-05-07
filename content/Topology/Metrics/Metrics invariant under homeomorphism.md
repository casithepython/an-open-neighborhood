
>[!thm] Metrics are invariant under homeomorphism.
>Let $(X, d)$ be a metric space, let $Y$ be a topological space, and let $f : X \mapsto Y$ be a homeomor-
phism. Define $d^{*} : Y \times Y \mapsto \mathbb{R}$ by $d^{*}(x, y) = d(f^{-1}(x), f^{-1}(y))$ for all $x, y, \in Y$. $d^*$ is a metric, and the elements of the standard basis of the topology it induces on $Y$ are the images under $f$ of the elements of the standard basis of the topology induced by $d$ on $X$. ^3f8353

`PROOF`@[[#^3f8353]]
Let $a,b,c \in Y$, and let $x,y,z \in X$ such that $f^{-1}(a) = x$, $f^{-1}(b) = y$, and $f^{-1}(c) = z$. We have $d^*(a,a) = d(f^{-1}(a), f^{-1}(a)) = d(x,x)= 0$. Also, $d^*(b,a) = d(y,x) = d(x,y) = d^*(a,b)$. Furthermore, $d^*(a,b)=d(x,y)\geq 0$. Finally, $d^*(a,c) = d(x,z) \leq d(x,y) + d(y,z) = d^*(a,b) + d^*(b,c)$. Thus, $d^*$ is a metric by [[Definition of a Metric#^d80508]].

Let $\mathcal{B}_{Y}$ be the standard basis of the topology induced by $d^*$ on $Y$, and let ${} B \in B_{Y} {}$. By [[Definition of a Basis#^f45567]], ${} B = B_{d^*}(p,\epsilon) {}$ for some $p \in Y$, $\epsilon>0$. Now, let $a \in B$, so ${} d^*(p,a) < \epsilon {}$, meaning that $d(f^{-1}(p),f^{-1}(a)) < \epsilon$. Then, $f^{-1}(a) \in B_{d}(f^{-1}(p),\epsilon)$, so $f^{-1}(B_{d^*}(p,\epsilon)) \subseteq B_{d}(f^{-1}(p), \epsilon)$. Let $b \in B_{d}(f^{-1}(p),\epsilon)$, so $d(f^{-1}(p),b) < \epsilon$. Hence, $d^*(p,f(b)) = d(f^{-1}(p), b) < \epsilon$, so $f(b) \in B_{d^*}(p,\epsilon)$, meaning that $f(B_{d}(f^{-1}(p),\epsilon)) \subseteq B_{d^*}(p,\epsilon)$. Thus, $B_{d}(f^{-1}(p),\epsilon) \subseteq f^{-1}(B_{d^*}(p,\epsilon))$.

Therefore, $B_{d}(f^{-1}(p),\epsilon) = f^{-1}(B_{d^*}(p,\epsilon))$, which also means that $f(B_{d}(f^{-1}(p),\epsilon)) = B_{d^*}(p,\epsilon)$.

#topology 