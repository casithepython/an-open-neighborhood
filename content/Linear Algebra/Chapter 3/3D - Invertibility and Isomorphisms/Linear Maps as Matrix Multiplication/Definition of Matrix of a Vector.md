> [!def] Definition of matrix of a vector
> Let $V$ be a finite-dimensional vector space. Suppose $v \in V$ and $v_{1},\dots,v_{n}$ is a basis of $V$. The *matrix of $v$* with respect to this basis is the $n$-by-$1$ matrix $${} \mathcal{M}(v) = \begin{pmatrix} b_{1}\\
>\dots\\
>b_{n} \end{pmatrix} {},$$ where $b_{1},\dots,b_{n}$ are the scalars such that $v = b_{1}v_{1} + \dots + b_{n}v_{n}$.

> [!exm] Matrices of some vectors
> - The matrix of the polynomial $2 - 7x + 5x^3 + x^4$ with respect to the standard basis of $\mathcal{P}_{4}(\mathbb{R})$ is $${} \begin{pmatrix}2\\-7\\0\\5\\1   \end{pmatrix}. {}$$
> - The matrix of a vector $(x_{1},\dots,x_{n}) \in \mathcal{F}^n$ is $\begin{pmatrix}x_{1}\\\dots\\x_{n}\end{pmatrix}.$

>[!cor] $\mathcal{M}(T)_{\cdot,k} = \mathcal{M}(Tv_{k})$
>This follows immediately from the definitions of $\mathcal{M}(T)$ and $\mathcal{M}(Tv_{k})$.

#linearalgebra