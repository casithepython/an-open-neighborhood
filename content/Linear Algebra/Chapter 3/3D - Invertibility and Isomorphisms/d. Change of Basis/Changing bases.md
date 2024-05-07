> [!thm] Matrix of product of linear maps (with bases)
> Suppose $T \in \mathcal{L}(U,V)$ and $S \in \mathcal{L} (V,W)$. If $u_{1},\dots,u_{m}$ is a basis of $U$, $v_{1},\dots,v_{n}$is a basis of $V$, and $w_{1},\dots,w_{p}$ is a basis of $W$, then $$\begin{align}
> \mathcal{M}(ST,(u_{1},\dots,u_{m}),(w_{1},\dots,w_{p})) &= \\\mathcal{M}(S,(v_{1},\dots,v_{n})&,(w_{1},\dots,w_{p}))\mathcal{M}(T,(u_{1},\dots,u_{m}),(v_{1},\dots,v_{n})).
\end{align}$$ ^6d876b

`PROOF`@[[#^6d876b]]
This holds by the definition of matrix multiplication. Specifically, it is due to [[matrix of product of linear maps#^abb3ff]].
`QED`
> [!lem] Matrix of identity operator with respect to two bases
> Suppose that $u_{1},\dots,u_{n}$ and $v_{1},\dots,v_{n}$ are bases of $V$. Then the matrices $\mathcal{M}(I,(u_{1},\dots,u_{n}),(v_{1},\dots,v_{n}))$ and $\mathcal{M}(I,(v_{1},\dots,v_{n}),(u_{1},\dots,u_{n}))$ are invertible, and each is the inverse of the other. ^4e4538

`PROOF`@^[[Matrices and bases#^6d876b]]
In [[#^6d876b|Theorem 1]], replace $w_{k}$ with $u_{k}$. Then, $\mathcal{M}(I,(u_{1},\dots,u_{n}),(v_{1},\dots,v_{n}))\mathcal{M}(I,(v_{1},\dots,v_{n}),(u_{1},\dots,u_{n})) = \mathcal{M}(I,(u_{1},\dots,u_{n}),(u_{1},\dots,u_{n})) = I$, and $\mathcal{M}(I,(v_{1},\dots,v_{n}),(u_{1},\dots,u_{n}))\mathcal{M}(I,(u_{1},\dots,u_{n}),(v_{1},\dots,v_{n})) = \mathcal{M}(I,(v_{1},\dots,v_{n}),(v_{1},\dots,v_{n})) = I$. Thus, the two matrices are inverses of each other.
`QED`

>[!exm] Matrix of identity on $\mathcal{F}^2$ with respect to two bases.
>Consider the bases $(4,2),(5,3)$ and $(1,0),(0,1)$ of $\mathcal{F}^2$. Because $I(4,2) = 4(1,0) + 2(0,1)$ and $I(5,3) = 5(1,0) + 3(0,1)$, we have $\mathcal{M}(I,((4,2),(5,3)),((1,0),(0,1))) = \begin{pmatrix}4 & 5\\2 & 3\end{pmatrix}$. The inverse of this matrix is $\begin{pmatrix} \frac{3}{2} & - \frac{5}{2}\\-1 & 2\end{pmatrix}$. Thus, by [[#^4e4538|the above lemma]], this inverse matrix must be equal to $\mathcal{M}(I,((1,0),(0,1)),((4,2),(5,3)))$.

> [!thm] Change-of-basis formula
> Suppose $T \in \mathcal{L}(V)$. Suppose $u_{1},\dots,u_{n}$ and $v_{1},\dots,v_{n}$ are bases of $V$. Let $A = \mathcal{M}(T,(u_{1},\dots,u_{n}),(u_{1},\dots,u_{n}))$, $B = \mathcal{M}(T,(v_{1},\dots,v_{n}),(v_{1},\dots,v_{n}))$, and $C = \mathcal{M}(I,(u_{1},\dots,u_{n}),(v_{1},\dots,v_{n}))$. Then $A = C^{-1}BC$. ^fdc7d3

`PROOF`@[[#^fdc7d3]]
In [[changing bases#^6d876b|Theorem 1]], replace $w_{k}$ with $u_{k}$ and replace $S$ with $I$, so $$\begin{align}
A &= \mathcal{M}(T,(u_{1},\dots,u_{m}),(u_{1},\dots,u_{m}))\\ &=\mathcal{M}(I,(v_{1},\dots,v_{n}),(u_{1},\dots,u_{m}))\mathcal{M}(T,(u_{1},\dots,u_{m}),(v_{1},\dots,v_{n})) \\
&= C^{-1}\mathcal{M}(T,(u_{1},\dots,u_{m}),(v_{1},\dots,v_{n})),
\end{align}$$ where $\mathcal{M}(I,(v_{1},\dots,v_{n}),(u_{1},\dots,u_{m})) = C^{-1}$ by [[#^4e4538|Lemma 2]]. Now, again in [[changing bases#^6d876b|Theorem 1]], replace $w_{k}$ with $v_{k}$, replace $T$ with $I$, and replace $S$ with $T$. Then, using the above equation, we have $$\begin{align}
A &= C^{-1}\mathcal{M}(T,(u_{1},\dots,u_{m}),(v_{1},\dots,v_{n})) \\
&= C^{-1}\mathcal{M}(T,(v_{1},\dots,v_{n}),(v_{1},\dots,v_{n}))\mathcal{M}(I,(u_{1},\dots,u_{m}),(v_{1},\dots,v_{n})) \\
&= C^{-1}BC.
\end{align}$$
`QED`
> [!cor] Matrix of inverse is inverse of matrix
> Suppose that $v_{1},\dots,v_{n}$ is a basis of $V$ and $T \in \mathcal{L}(V)$ is invertible. Then, $\mathcal{M}(T^{-1}) = (\mathcal{M}(T))^{-1}$, where both matrices are with respect to the basis $v_{1},\dots,v_{n}$. ^69004d

`PROOF`@[[#^69004d]]
By [[matrix of product of linear maps#^abb3ff]], we see that $\mathcal{M}(T^{-1})\mathcal{M}(T) = \mathcal{M}(T^{-1}T) = \mathcal{M}(I) = \mathcal{M}(TT^{-1}) = \mathcal{M}(T)\mathcal{M}(T^{-1})$. Thus, $\mathcal{M}(T^{-1})$ is the inverse of $\mathcal{M}(T)$, so it is equal to $(\mathcal{M}(T))^{-1}$.
`QED`

#linearalgebra