> [!def] Identity matrix
> Suppose $n$ is a positive integer. The $n$-by-$n$ matrix $\begin{pmatrix}1,0, \dots ,0\\0,1,\dots,0\\\dots\\0,0,\dots,1 \end{pmatrix}$ with $1$s on the top-left-to-bottom-right diagonal (entries with equal row and column number) and $0$s everywhere else is called the *identity matrix* and denoted $I$.

> [!remark] Identity matrix is the matrix version of the identity operator
> Let $I \in \mathcal{L}(V)$ be the identity operator. $\mathcal{M}(I) = I$, where the second $I$ is the identity matrix of size $\dim V$ by $\dim V$. Also, for all matrices $A$ of the same size as $I$, $AI = IA = A$.

> [!def] Invertible and inverse matrices
> A square matrix $A$ is called *invertible* if there exists a square matrix of the same size such that $AB = BA = I$. $B$ is called the *inverse* of $A$. Similarly to the proof of [[definitions of invertibility#^11bf95]], $B$ is unique, so we write it $A^{-1}$.

> [!remark] Inverses of inverses and inverses of composed maps
> Note that $(A^{-1})^{-1} = A$ because $A^{-1}A = AA^{-1} = I$. Also, if $A,C$ are invertible matrices of the same size, $AC$ is invertible and $(AC)^{-1} = C^{-1}A^{-1}$, because $AC(C^{-1}A^{-1}) = A(C C^{-1}) A^{-1} = AA^{-1} = I$ and $(C^{-1}A^{-1})AC = C^{-1}(A^{-1}A)C = C^{-1}C = I$.

#linearalgebra