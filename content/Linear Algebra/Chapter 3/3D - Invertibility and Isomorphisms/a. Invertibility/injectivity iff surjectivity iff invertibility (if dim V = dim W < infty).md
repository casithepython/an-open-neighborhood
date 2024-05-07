> [!thm] Injectivity$\iff$surjectivity$\iff$invertibility if $\dim V = \dim W < \infty$
> Let $V,W$ be finite-dimensional vector spaces such that $\dim V = \dim W$, and let $T \in \mathcal{L}(V,W)$. Then, $T$ is [[definitions of invertibility#^f92838|invertible]] if and only if it is [[injectivity and surjectivity#^injective|injective]], which happens if and only if it is [[injectivity and surjectivity#^surjective|surjective]]. ^38379e

`PROOF`@[[#^38379e]]
By the [[fundamental theorem of linear maps#^4be8b0]], we have $\begin{equation}\dim V = \dim \text{null } T + \dim \text{range }T \end{equation}$. If $T$ is injective, $\dim \text{null } T = 0$, so $\dim \text{range } T = \dim V = \dim W$, meaning that $T$ is surjective. Conversely, if $T$ is surjective, $\dim \text{range } T = \dim W = \dim V$, so $\dim \text{null } T = \dim V - \dim \text{range } T = 0$, so $T$ is injective.

Now, by [[invertible iff injective and surjective#^da1555]], we know that invertibility implies injectivity and surjectivity and vice versa. Then, since injectivity and surjectivity imply each other as shown above, invertibility, injectivity, and surjectivity are all equivalent.
`QED`

> [!example] Neither surjectivity nor injectivity implies invertibility in infinite-dimensional vector spaces
> - The multiplication by $x^{2}$ map from $\mathcal{P}(\mathbb{R})$ to $\mathcal{P}(R)$ is injective but not invertible because it is not surjective ($1$, $x$, and others are not in the range).
> - The backwards shift linear map from $\mathcal{F}^{\infty}$ to $\mathcal{F}^{\infty}$ is surjective but not invertible because it is not injective (for example, the vector $(1,0,0,\dots)$ is in the nullspace).

> [!example] For all $q \in \mathcal{P}(\mathbb{R})$, there exists a polynomial $p$ such that $((x^{2} + 5x + 7)p)'' =q$.
> We note that we cannot apply [[injectivity iff surjectivity iff invertibility (if dim V = dim W < infty)#^38379e|Theorem 1]] to $\mathcal{P}(\mathbb{R})$, as it is finite-dimensional. However, we note that $\forall q \in \mathcal{P}(\mathbb{R})$, $\exists m \in \mathbb{Z}_{*}$ such that $q \in \mathcal{P}_{m}(\mathbb{R})$, and $\mathcal{P}_{m}(\mathbb{R})$ is finite-dimensional.
> 
> Now, let $T : \mathcal{P}_{m}(\mathbb{R}) \mapsto \mathcal{P}_{m}(R)$ defined by $Tp = ((x^2 + 5x + 7)p)''$ for all $p \in \mathcal{P}_{m}(\mathbb{R})$. We note that as the multiplication by $x^{2}$ increases the degree of $p$ by $2$, and then the second differentiation reduces it by $2$, this indeed is a map $\mathcal{P}_{m}(\mathbb{R}) \mapsto \mathcal{P}_{m}(\mathbb{R})$, and both polynomial multiplication and differentiation are linear.
> 
> Let $p \in \mathcal{P}_{m}(\mathbb{R})$ such that $Tp = ((x^2 + 5x + 7)p)'' = 0$. We see that ${} (x^{2} + 5x + 7)p {}$ must be of the form $ax + b$ for $a,b \in \mathbb{R}$ in order for its second derivative to be $0$, and so there is no nonzero $p \in \mathcal{P}_{m}(\mathbb{R})$ that would fulfill our condition (all the nonzero polynomials have minimum degree $0$, so when multiplied by $x^{2} + 5x + 7$ they have degree 2 and therefore a nonzero second derivative). Thus $T$ is injective, so it is surjective, meaning that $q \in \text{range } T$, satisfying our condition.

> [!thm] $ST = I \iff TS = I$ on vector spaces of the same dimension
> Suppose $V,W$ are finite-dimensional vector spaces such that $\dim V = \dim W$. Let $S \in \mathcal{L}(V,W), T \in \mathcal{L}(W,V)$. Then, $ST = I \iff TS = I$. ^9e59b8

`PROOF`@[[#^9e59b8]]
Without loss of generality, let $ST = I$. If $v \in V$ and $Tv = 0$, then $v = Iv = STv = S0 = 0$, so $T$ is injective. Thus, it is [[definitions of invertibility#^f92838|invertible]], so let $T^{-1}$ be its inverse. Now, $ST = I$, so $STT^{-1} = S = IT^{-1} = T^{-1}$, so $TS = TT^{-1} = I$.
`QED`

#linearalgebra