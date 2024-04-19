Let $d_V : \mathbb{R}^2 \mapsto \mathbb{R}$ defined by $${} d_{V}((p_{1},p_{2}),(q_{1},q_{2})) = \begin{cases}
1 \text{ if } (p_{1} \neq q_{1}) \lor (|p_{2}-q_{2}| \geq 1)\\ \\
|p_{2}-q_{2}| \text{ if } (p_{1} = q_{1}) \land (|p_{2}-q_{2}| < 1)
\end{cases}$$$\forall p_{1},p_{2},q_{1},q_{2} \in \mathbb{R}$. Show that the topology induced by $d_{V}$ is finer than but not equal to the topology induced by the standard metric on $\mathbb{R}^2$.

>[!lemma]
>$d_{V}$ is a metric on $\mathbb{R}^2$. ^7f68d1

`PROOF`@[[#^7f68d1]]
First, $d_{V}((p_{1},p_{2}),(p_{1},p_{2}) = |p_{2} - p_{2}| = 0$. Since all evaluations and expressions are either equalities or absolute value, both of which are symmetric, $d_{V}$ is also symmetric. Also, as $1 \geq 0$ and $|p_{2} - q_{2}| \geq 0$ for all $p_{2},q_{2} \in \mathbb{R}$, $d_{V}$ is nonnegative.

For brevity, we will write $d_{V}(p,q)$ as $d(p,q)$ in the following section.

Let $p,q,r \in \mathbb{R}^2$ with $p=(p_{1}, p_{2}), q=(q_{1}, q_{2}), r=(r_{1}, r_{2})$ for $p_{1},p_{2},q_{1},q_{2},r_{1},r_{2} \in \mathbb{R}$. If $p_{1}, q_{1}, r_{1}$ are all distinct, then $d(p,r) = 1 \leq d(p,q)+d(q+r) = 1 + 1 = 2$. If $p_{1}=q_{1}\neq r_{1}$, we have $d(p,r)=d(q,r) = 1$, and either $d(p,q) = 1$ or $d(p,q) = |p_{2}-q_{2}|$, so $d(p,q)\geq {0}$. Therefore, $d(p,r) \leq d(p,q) + d(q,r)$ regardless of whether or not $|p_{2} - q_{2}| \geq 1$. Similarly, the triangle inequality also holds if $p_{1} = r_{1} \neq q_{1}$. If $p_{1} \neq q_{1} = r_{1}$, we have $d(p,q) = d(p,r) = 1$ and $d(q,r) \geq 0$ as previously, so $d(p,r) \leq d(p,q) + d(q,r)$.

Finally, if $p_{1} = q_{1} = r_{1}$, there are several cases. If $|p_{2} - q_{2}|, |p_{2}-r_{2}|,|q_{2}-r_{2}| \geq 1$, we have $d(p,r) = 1 \leq d(p,q) + d(q,r) = 1 + 1 = 2$. If $|p_{2}-q_{2}|,|p_{2}-r_{2}| \geq 1$ but $|q_{2}-r_{2}| < 1$, then $d(p,r) = 1 \leq d(p,q) + d(q,r) = 1 + |q_{2}-r_{2}|$. The same holds if ${} |q_{2}-r_{2}|,|p_{2}-r_{2}| \geq 1$ but $|p_{2}-q_{2}| < 1$.  If $|p_{2}-q_{2}|,|q_{2}-r_{2}| \geq 1$ but $|p_{2}-r_{2}| < 1$, we have $d(p,r) = |p_{2}-r_{2}| < 1 \leq d(p,q)+d(q,r) = 1 + 1 = 2$. If $|p_{2}-q_{2}| \geq 1$ but $|p_{2}-r_{2}|,|q_{2}-r_{2}| < 1$, we have $d(p,r) = |p_{2}-r_{2}| < 1 \leq d(p,q) + d(q,r) = 1 + |q_{2}-r_{2}|$. The same holds if  ${} |q_{2}-r_{2}| \geq 1 {}$ but $|p_{2}-r_{2}|,|p_{2}-q_{2}| < 1$. If $|p_{2}-r_{2}| \geq 1$ but $|p_{2}-q_{2}|,|q_{2}-r_{2}| < 1$, we have $d(p,q) + d(q,r) \geq d(p,r) \geq 1 = d(p,r)$ because absolute value is a metric on $\mathbb{R}$. Lastly, if $|p_{2}-r_{2}|,|p_{2}-q_{2}|,|q_{2}-r_{2}| < 1$, we have $d(p,r) = |p_{2}-r_{2}| \leq |p_{2}-q_{2}| + |q_{2}-r_{2}| = d(p,q) + d(q,r)$ because absolute value is a metric on $\mathbb{R}$. Thus, the triangle inequality holds for $d_V$, so $d_{V}$ is a metric.
`QED`
> [!thm] 
> The topology induced by $d_{V}$ is finer than but not equal to the topology induced by the standard metric on $\mathbb{R}^2$. ^5eeca4

`PROOF`@[[#^5eeca4]]

We let $d : \mathbb{R}^2 \mapsto \mathbb{R}$ be the standard metric on $\mathbb{R}^2$, $T_{S}$ be the metric induced by $d$ on $\mathbb{R}^2$, and $T_{V}$ be the metric induced by $d_{V}$ on $\mathbb{R}^2$. For all $p \in \mathbb{R}^2$ and $\epsilon>0$, we let $B_{V}(p,\epsilon) = \{q\in \mathbb{R}^2 \mid d_{V}(p,q) < \epsilon\}$, and $B(p,\epsilon) = \{q\in \mathbb{R}^2 \mid d(p,q) < \epsilon\}$. By [[Fineness with Bases#^00ceca]], we wish to first show that for every $p \in \mathbb{R}^2$ and every basis element $B$ in ${} T_{S} {}$ such that $p \in B$, there exists a basis element $C$ in $T_{V}$ such that $p \in C \subseteq B$. 

 Let $(x,y) \in \mathbb{R}^2$. Since the [[Definition of Metric Space#^65cd3c|basis elements of a metric space are open balls]], let $B(p,k)$ be a basis element in $T_{S}$ for some ${} p \in \mathbb{R}^2, k>0 {}$ such that $(x,y) \in B(p,k)$. This means that $d((x,y),p) < k$, so if $j = k - d((x,y),p)$, we have $j > 0$. Then, by triangle inequality, we have ${} B((x,y),j) \subseteq B(p,k) {}$, and clearly $(x,y) \in B((x,y),j)$. If $j <1$, let $\epsilon = j$, and if $j \geq 1$, let $e \in (0,1)$. We can see that $(x,y) \in B((x,y),\epsilon) \subseteq B((x,y),j)\subseteq B(p,k)$. Now, $\forall (x_{2},y_{2}) \in B_{V}((x,y),\epsilon)$, since $\epsilon<1$, we have $x_{2}=x$ and $|y_{2}-y| < \epsilon$, so $d((x_{2},y_{2}),(x,y)) = \sqrt{ (x_{2}-x)^2 + (y_{2}-y)^2 } = \sqrt{ (y_{2}-y)^2 } = |y_{2}-y| < \epsilon$ , meaning that $(x,y) \in B((x,y),\epsilon)$. Thus, $(x,y) \in B_{V}((x,y),\epsilon) \subseteq B(p,k)$, so $T_{S} \subseteq T_{V}$ by [[Fineness with Bases#^00ceca]]. 

However, for all $(x,y) \in \mathbb{R}^2$, we have $B_{V}\left((x,y), \frac{1}{2} \right) = \{(a,b) \mid (a,b) \in \mathbb{R}^2, a = x, |b-y| < \frac{1}{2}\}$. The elements of this set all share the same first value. On the other hand, for all $(p,q) \in \mathbb{R}^2,\epsilon>0$, we must have $\left( p,q \right),\left( p+ \frac{\epsilon}{2} , q\right) \in B((p,q),\epsilon)$, so any basis element of the topology induced by the standard basis must contain elements of differing first values. Therefore, there cannot exist a basis element $B \in T_{S}$ such that $(x,y) \in B \subseteq B_{V}\left( (x,y), \frac{1}{2} \right)$, so $T_{V} \not \subseteq T_{S}$ and $T_{V} \neq T_{S}$.
`QED`