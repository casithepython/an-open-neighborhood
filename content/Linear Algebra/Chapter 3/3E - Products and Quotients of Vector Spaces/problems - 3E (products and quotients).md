> [!thm] Problem 3E.9
> Let $V$ be a vector space. A nonempty subset $A \subseteq V$ is a translate of some subspace of $V$ if and only if $\lambda v + (1-\lambda)w \in A$ for all $v,w \in A$ and all $\lambda \in \mathcal{F}$. ^21a4f9

`PROOF`@[[#^21a4f9]]
First, assume $A$ is a translate. That is, there exists a subspace $U \subseteq V$ and an element $b \in V$ such that $A = \{u + b : u \in U\}$. Let $v,w \in A$, so $\exists x,y \in U$ such that $v = x + b$ and $w = y + b$. Then, $\forall \lambda \in \mathcal{F}$, we have $\lambda v + (1-\lambda)w = \lambda(v-w) + w = \lambda((x+b)-(y+b)) + y + b = \lambda(x-y) + y + b$. Since $U$ is a vector space and $x,y \in U$, $\lambda(x-y)+y \in U$, so $\lambda v + (1-\lambda)w = \lambda(x-y) + y + b \in A$.

Now, assume $\lambda v + (1-\lambda)w \in A$ for all $v,w \in A$ and all $\lambda \in \mathcal{F}$. Let $v \in A$, and let $U = \{u - v : u \in A\}$. We want to show $U$ is a subspace.

Let $u \in U$, so $\exists a \in A$ such that $u = a - v$. Now, $\forall \lambda \in \mathcal{F}$, we have $\lambda u = \lambda(a-v) = \lambda a + (1-\lambda)v - v$. Since $a,v \in A$, $\lambda a + (1-\lambda)v \in A$, so $\lambda u = (\lambda a - (1-\lambda)v) - v \in U$. Thus, $U$ is closed under scalar multiplication.

Let $u_{1},u_{2} \in U$, so $\exists a_{1},a_{2} \in A$ such that $u_{1} = a_{1}-v$ and $u_{2} = a_{2}-v$. Now $\frac{1}{2}a_{1} + \left( 1-\frac{1}{2} \right)a_{2} = \frac{{a_{1}+a_{2}}}{2} \in A$. Thus, $\frac{{a_{1}-a_{2}}}{2} - v \in A$, and since $A$ is closed under scalar multiplication, $a_{1} - a_{2} - 2v = (a_{1} - v) + (a_{2} - v) = u_{1} + u_{2} \in A$. Thus, $U$ is closed under addition, so it is a subspace and $A$ is a translate of it.
`QED`
> [!thm] Problem 3E.10
> Let V be a vector space. Suppose $A_{1} = v + U_{1}$ and $A_{2} = w + U_{2}$ for some $v,w \in V$ and some subspaces $U_{1},U_{2} \subseteq V$. $A_{1} \cap A_{2}$ is either empty or a translate of some subspace of $V$. ^34d54d

`PROOF`@[[#^34d54d]]
Assume $A_{1} \cap A_{2}$ is nonempty, and let $a,b \in A_{1} \cap A_{2}$. We must have $u_{a,1}, u_{b,1} \in U_{1}$ and $u_{a,2},u_{b,2} \in U_{2}$ such that $a = v + u_{a,1} = w + u_{a,2}$ and $b = v + u_{b,1} = w + u_{b,2}$. For all $\lambda \in F$, we have 
$\lambda a + (1-\lambda)b = \lambda(a-b) + b = \lambda((v+u_{a,1}) - (v + u_{b,1})) + v + u_{b,1} = \lambda(u_{a,1}-u_{b,1}) + u_{b,1} + v$. Since $U_{1}$ is a subspace, $\lambda(u_{a,1} - u_{b,1}) + u_{b_{1}} \in U_{1}$, so $\lambda a + (1-\lambda)b = \lambda(u_{a,1} - u_{b,1}) + u_{b_{1}} + v \in A_{1}$. Similarly, $\lambda a + (1-\lambda)b \in A_{2}$, so $\lambda + (1-\lambda)b \in A_{1} \cap A_{2}$. Thus, $A_{1} \cap A_{2}$ is a translate of some subspace of $V$ by [[#^21a4f9]].
`QED`
> [!thm] Problem 3E.10
> Suppose $U = \{(x_{1},x_{2},\dots) \in \mathcal{F}^\infty : x_{k} = 0 \text{ for only finitely many } k\}$. $U$ is a subspace of $\mathcal{F}^\infty$, and $\mathcal{F}^\infty / U$ is infinite-dimensional. ^929f0d

`PROOF`@[[#^929f0d]]
Let $u_{1},u_{2} \in U$. There must exist $n_{1},n_{2} \in \mathbb{N}$ such that $u_{1}$ has $n_{1}$ nonzero entries and $u_{2}$ has $n_{2}$ nonzero entries. $\forall \lambda \in \mathcal{F}$, if $\lambda = 0$, $\lambda u_{1}$ has $0$ nonzero entries, and if $\lambda \neq 0$, $\lambda u_{1}$ still has $n_{1}$ nonzero entries. Also, as $0 + 0 = 0$, there is no way for zero entries to sum to nonzero entries, so $u_{1} + u_{2}$ has at most $n_{1}+n_{2}$ nonzero entries, which is also finite. Thus $U$ is a subspace.

Let $\pi$ be the quotient map from $\mathcal{F}^\infty \mapsto \mathcal{F}^\infty / U$. We note that $\pi$ is injective, so ${} \dim \text{null } \pi = 0 {}$. Thus, if $\mathcal{F}^\infty / U$ is finite-dimensional, $\mathcal{F}^\infty$ must be finite-dimensional, which is false. Thus, $\mathcal{F}^\infty / U$ is infinite-dimensional.
`QED`
> [!thm] Problem 3E.11
> Suppose $v_{1},\dots,v_{m} \in V$. Let $$A = \{\lambda_{1}v_{1} + \dots + \lambda_{m}v_{m} : \lambda_{1}, \dots, \lambda_{m} \in \mathcal{F} \text{ such that } \lambda_{1} + \dots + \lambda_{m} = 1\}.$$
> 1. $A$ is a translate of some subspace of $V$.
> 2. If $B$ is a translate of some subspace of $V$ and $\{v_{1},\dots,v_{m}\} \subseteq B$, then $A \subseteq B$.
> 3. $A$ is a translate of some subspace of $V$ with dimension less than $m$. ^571488

`PROOF`@[[#^571488]]
1. Let $a_{1}v_{1} + \dots + a_{m}v_{m}, b_{1}v_{1} + \dots + b_{m}v_{m} \in A$. Now, $\forall \lambda \in \mathcal{F}$, we have $${} \begin{align}
\lambda a + (1-\lambda)b &= \lambda a_{1}v_{1} + \dots + \lambda a_{m}v_{m} + b_{1}v_{1} + \dots + b_{m}v_{m} - \lambda b_{1}v_{1} - \dots - \lambda b_{m}v_{m}  \\
&= (\lambda a_{1} - \lambda b_{1} + b_{1})v_{1} + \dots + (\lambda a_{m} - \lambda b_{m} + b_{1})v_{m}.
\end{align}$$We have $$\begin{align}
(\lambda a_{1} - \lambda b_{1} + b_{1}) + \dots + (\lambda a_{m} - \lambda b_{m} + b_{m}) &= \lambda(a_{1} + \dots + a_{m}) - \lambda(b_{1} + \dots + b_{m}) + (b_{1} + \dots + b_{m})  \\
&= \lambda(1) - \lambda(1) + 1 \\
&= 1.
\end{align}$$ Thus, $\lambda a + (1-\lambda)b \in A$ for all $a,b \in A$, $\lambda \in \mathcal{F}$, so $A$ is a translate of some subspace of $V$.

2. Assume $B$ is a translate of some subspace $U$ of $V$, so $\exists v \in V$ such that $B = v + U$, and assume $\{v_{1},\dots,v_{m}\} \subseteq B$. Now, let there be some element $\lambda_{1} v_{1} + \dots + \lambda_{m}v_{m} \in A$, so $\exists u_{1},\dots,u_{m} \in U$ such that $v_{k} = v + u_{k}$ for all $k \in \{1,\dots,m\}$. We also note that $\lambda_{1} + \dots + \lambda_{m} = 1$. Then, $$\begin{align}
\lambda_{1} v_{1} + \dots + \lambda_{m}v_{m} &= \lambda_{1}(v + u_{1}) + \dots + \lambda_{m}(v + u_{m}) \\
&= (\lambda_{1}u_{1} + \dots + \lambda_{m}u_{m}) + (\lambda_{1} + \dots + \lambda_{m})v \\
&= (\lambda_{1}u_{1} + \dots + \lambda_{m}u_{m}) + v.
\end{align}$$ Since $U$ is a subspace, $\lambda_{1}u_{1} + \dots + \lambda_{m}u_{m} \in U$, so $(\lambda_{1}u_{1} + \dots + \lambda_{m}u_{m}) + v \in B$.  Thus, $A \subseteq B$.
3. We see that $v_{1},\dots,v_{m} \in A$. $A$ is a set of select linear combinations of $v_{1},\dots,v_{m}$, so $A \subset \text{span}(v_{1},\dots,v_{m})$. At most, $\text{span}(v_{1},\dots,v_{m})$ has dimension $m$, so $\dim A < m$.
`QED`

> [!thm] Problem 3E.13
> Suppose $V$ is a vector space and $U$ is a subspace of $V$ such that $V/U$ is finite-dimensional. $V$ is isomorphic to $U \times (V / U$). ^canremultiplyquotient

`PROOF`@[[#^canremultiplyquotient]]
Let $\pi : V \mapsto V / U$ be the quotient map, so $\text{null } \pi = U$ and $\text{range } \pi = V / U$. Let $\phi : V \mapsto U$ be a projection. Now, let $T : V \mapsto U \times (V / U)$ defined by $Tv = (\phi(v),\pi(v))$. 

We first wish to show this map is injective. If $v \not\in U$, $\pi(v) \neq 0$, so $Tv \neq 0$. If $v \in U$, we have $\pi(v) = 0$, but $\phi(v) = 0$ if and only if $v = 0$. Thus, $Tv = 0$ if and only if $v = 0$.

Now we show it is surjective. Let $(u,v + U) \in U \times (V / U)$. We note that ${} (\phi(u_{0}),\pi(u_{0})) = (u_{0},0) \in \text{range } T {}$ for all $u_{0} \in U$. Now, there exists $v_{0} \in V$ such that ${} \pi(v_{0}) = v + U {}$ by definition, so $(\phi(v_{0}),\pi(v_{0})) = (\phi(v_{0}),v + U) \in \text{range } T$. As $\phi(v_{0}) \in U$, $u - \phi(v_{0}) \in U$, so $(u - \phi(v_{0}),0) \in \text{range } T$. Since $\text{range } T$ is a vector space, then, $(u - \phi(v_{0}),0) + (\phi(v_{0}),v+U) = (u,v+U) \in \text{range } T$, so $T$ is surjective.

Since $T$ is injective and surjective, it is invertible, so $V$ is isomorphic to $U \times (V / U)$.
`QED`
> [!thm] Problem 3E.14
> Suppose $U$ and $W$ are subspaces of a vector space $V$ and $V = U \oplus W$. For any basis $w_{1},\dots,w_{m}$ for $W$, $w_{1} + U, \dots, w_{m} + U$ is a basis for $V / U$.

We note that $\dim (V / U) = \dim V - \dim U = \dim W = m$. Let $w + U \in V / U$, so $\exists a_{1},\dots,a_{m} \in \mathcal{F}$ such that $w = a_{1}w_{1} + \dots + a_{m}w_{m}$, meaning that $w + U = a_{1}(w_{1} + U) + \dots + a_{m}(w_{m} + U)$. Thus, $V / U \subseteq \text{span}(w_{1}+U, \dots, w_{m} + U)$. Then, since $w_{1}+U, \dots , w_{m} + U$ is of length $m$, it is a basis for $V / U$.

> [!thm] Problem 3E.15
> Suppose $U$ is a subspace of a vector space $V$ and $v_{1}+U, \dots, v_{m}+U$ is a basis for $V / U$ and ${} u_{1},\dots,u_{n} {}$ is a basis for $U$. ${} v_{1},\dots,v_{m},u_{1},\dots,u_{n} {}$ is a basis for $V$.

Let $A = \text{span}(v_{1},\dots,v_{m},u_{1},\dots,u_{n})$. As $\dim V = \dim U + \dim (V / U) = m + n$, if $V \subseteq A$ then $v_{1},\dots,v_{m},u_{1},\dots u_{n}$ is a basis for $V$.

Let $v \in V$. If $v \in U$, $v \in A$ and we are done, so assume $v \not\in U$. Then, $v + U = a_{1}(v_{1} + U) + \dots + a_{m}(v_{m} + U) = (a_{1}v_{1} + \dots + a_{m}v_{m}) + U$, so $v = v + 0 \in (a_{1}v_{1} + \dots + a_{m}v_{m}) + U)$. Therefore, $\exists u \in U$, meaning $\exists b_{1},\dots,b_{n} \in \mathcal{F}$ such that $u = b_{1}u_{1} + \dots + b_{n}u_{n}$, such that $v = (a_{1}v_{1} + \dots + a_{m}v_{m}) + u = (a_{1}v_{1} + \dots + a_{m}v_{m}) + (b_{1}u_{1} + b_{n}u_{n})$. Thus, $u \in A$, so $V \subseteq A$ and $v_{1},\dots,v_{m},u_{1},\dots,u_{n}$ is a basis for $V$.

> [!thm] Problem 3E.16
> Suppose $\phi \in \mathcal{L}(V,\mathcal{F})$ and $\phi \neq 0$. We have $\dim V / \text{null } \phi = 1$. ^ec1e66

`PROOF`@[[#^ec1e66]]
Since ${} \text{range } \phi \subseteq \mathcal{F} {}$ and $\phi \neq 0$, $\text{range } \phi = \mathcal{F}$. Thus, $\dim \text{range } \phi = 1$, so $\dim V / \text{null } \phi = \dim V - \dim \text{null } \phi = \dim \text{range } \phi = 1$.
`QED`

> [!thm] Problem 3E.17
> Let $V$ be a vector space. For all subspaces $U$ of $V$ such that $\dim V / U = 1$, $\exists \phi \in \mathcal{L}(V,\mathcal{F})$ such that $\text{null } \phi = U$. ^b4bf47

`PROOF`@[[#^b4bf47]]
Let $\pi : V \mapsto V / U$ be the quotient map. We know that $\text{null } \pi = U$ from [[definition of quotient map#^646926]]. As $\dim V / U = \dim \mathcal{F} = 1$, let $v + U$ be a basis for $V / U$, so all elements of $V / U$ are of the form $\lambda v + U$ for some $\lambda \in F$. Now, let $T : V / U \mapsto \mathcal{F}$ defined by $T(\lambda v + U) = \lambda$. We note that $T$ is injective, so $\text{null } T = 0$. Then, $T \circ \pi : V \mapsto \mathcal{F}$ is linear and $\text{null } (T \circ \pi) = U$. 
`QED`
> [!thm] Problem 3E.18
> Let $V$ be a vector space, and suppose $U$ is a subspace of $V$ such that $V / U$ is finite-dimensional.
> 1. If $W$ is a finite-dimensional subspace of $V$ and $V = U + W$, then $\dim W \geq \dim V / U$.
> 2. There exists a finite-dimensional subspace $W$ of $V$ such that $\dim W = \dim V / U$ and $V = U \oplus W$.

Let $v_{1} + U, \dots, v_{m} + U$ be a basis for $V / U$. Then $v_{1},\dots,v_{m}$ is linearly independent in $V$, so extend it to a basis 

#linearalgebra #homework