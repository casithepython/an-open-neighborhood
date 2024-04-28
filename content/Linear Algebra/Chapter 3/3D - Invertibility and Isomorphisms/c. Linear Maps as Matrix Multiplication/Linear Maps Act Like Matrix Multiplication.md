> [!thm] Linear maps act like matrix multiplication
> Suppose $T \in \mathcal{L}(V,W)$ and $v \in V$. Suppose $v_{1},\dots,v_{n}$ is a basis of $V$ and $w_{1},\dots,w_{m}$ is a basis of $W$. Then, $\mathcal{M}(Tv) = \mathcal{M}(T)\mathcal{M}(v)$. ^f83215

`PROOF`@[[#^f83215]]
Because $v_{1},\dots,v_{n}$ is a basis, $v = b_{1}v_{1} + \dots + b_{n}v_{n}$ for some $b_{1},\dots,b_{n} \in \mathcal{F}$. Thus, $Tv = b_{1}Tv_{1} + \dots + b_{n}Tv_{n}$, so $$
\begin{align}
\mathcal{M}(Tv) &= b_{1}\mathcal{M}(Tv_{1}) + \dots + b_{n}\mathcal{M}(Tv_{n})\\
&= b_{1}\mathcal{M}(T)_{\cdot,1} + \dots + b_{n}\mathcal{M}(T)_{\cdot,n}\\
&= \mathcal{M}(T)\begin{pmatrix}
b_{1} \\
\dots \\
b_{n}
\end{pmatrix} \\
&= \mathcal{M}(T)\mathcal{M}(v).
\end{align}
$$
`QED`
#linearalgebra