> [!thm] $\dim \mathcal{L}(V,W) = (\dim V)(\dim W)$
> Let $V,W$ be finite-dimensional vector spaces. Then, $\mathcal{L}(V,W)$ is finite-dimensional and $\dim\mathcal{L}(V,W) = (\dim V)(\dim W)$. ^add708

`PROOF`@[[#^add708]]
We see that $\mathcal{L}(V,W)$ is isomorphic to $\mathcal{F}^{m,n}$, where $m = \dim W$ and $n = \dim V$, under the matrix map $\mathcal{M}$ by [[matrices are isomorphisms#^80da00]]. Then, by [[dimension shows whether vector spaces are isomorphic]], these two must have the same dimension. Since [[dimension of vector space of matrices#^4018fb]], we then have $\dim \mathcal{L}(V,W) = \dim \mathcal{F}^{m,n} = mn = (\dim W)(\dim V) = (\dim V)(\dim W)$.

`QED`

#linearalgebra