> [!thm] Problem 11.1
> Let $(X, d_{X})$ and $(Y, d_{Y} )$ be metric spaces. Show that a function $f : X \mapsto Y$ is continuous if and
only if for each $x \in X$ and $\epsilon > 0$ there exists $\delta > 0$ such that for all $x' \in X$, we have $$
d_{X}(x, x') < \delta \implies d_{Y}(f(x),f(x')) < \epsilon$$

^1e751f

`PROOF`@[[Problem 11.1#^1e751f]]
Assume $f : X \mapsto Y$ is continuous. Let $x \in X$ and $\epsilon > 0$. The pre-image of $B(f(x),\epsilon)$ must be open, so there exists some basis element $B$ such that $x \in B \subseteq f^{-1}(B(f(x),\epsilon))$ by [[Basis Definition of Open Set#^5e74cb]]. As the basis elements of a metric space are open balls, this means that $\exists p \in X, k>0$ such that ${} x \in B(p,k) \subseteq f^{-1}(B(f(x),\epsilon)) {}$. Now, letting $\delta = k - d_{X}(p,x)$, we have $x \in B(x,\delta) \subseteq B(p,k) \subseteq f^{-1}(B(f(x),\epsilon))$, so $\forall x' \in X$, $d_{X}(x, x') < \delta \implies d_{Y}(f(x),f(x')) < \epsilon$.

Assume that for any given $x \in X, \epsilon > 0$, $\exists \delta>0$ such that $\forall x' \in X$, we have $d_{X}(x, x') < \delta \implies d_{Y}(f(x),f(x')) < \epsilon$. Now, let $x \in X$ and $U$ open in $Y$ such that $f(x) \in U$. By [[Basis Definition of Open Set#^5e74cb]], there exists some basis element $B$ such that $f(x) \in B \subseteq U$. As the basis elements of a metric space are open balls, this means that $\exists p \in X, k > 0$ such that $f(x) \in B(p,k) \subseteq U$. We also note that, letting $\epsilon = k - d(p,f(x))$, we have ${} f(x) \in B(f(x),\epsilon) \subseteq B(p,k) \subseteq U {}$. Thus, since $\forall x' \in X$, $f(x') \in B(f(x), \epsilon) \iff d_{Y}(f(x), f(x')) < \epsilon$, $\exists \delta > 0$ such that $\forall x' \in X$, $d_{X}(x,x') < \delta$. Because $d_{X}(x,x') < \delta \iff x' \in B(x,\delta)$, this means that $f(B(x,\delta)) \subseteq B(f(x),\epsilon) \subseteq U$. As open balls are open in the topology induced by a metric, this means that for every open neighborhood $U$ of $f(x)$, there exists an open neighborhood of $x$ whose image under $f$ is a subset of $U$. Therefore, $f$ is continuous at $x$ by [[Definition of Continuity#^a1e241]], and as $x$ is arbitrary, $f$ is continuous by [[Definition of Continuity#^ca95c9]].
`QED`

#homework