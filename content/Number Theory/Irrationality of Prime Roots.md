> [!theorem] The irrationality of prime roots 
>  For $a$ prime, $\sqrt{ a } \not\in \mathbb{Q}$. That is, there do not exist $p,q \in \mathbb{N}$ such that $\frac{p}{q} = \sqrt{ a }$. 

^593e61

`PROOF`@[[Irrationality of Prime Roots#^593e61]]
Let $p,q \in \mathbb{N}$ such that $\frac{p}{q}=\sqrt{ a }$ . We may assume $\text{gcd}(p,q)=1$ by fraction simplification. Now, $\frac{p^2}{q^2}=a$, so ${} p^2 = aq^2$, meaning that ${} a\mid p^2$ and $a \mid p$ by [[FTA#^5b83e1]]. Thus, $\exists k \in \mathbb{N}$ such that ${} p=ak {}$, so $p^2 = (ak)^2 = a^2k^2 = aq^2$, meaning that $q^2 = ak^2$. Then, $a \mid q^2$ and $a \mid q$, again by [[FTA#^5b83e1 | FTA]]. Thus, $\text{gcd}(p,q)\geq 2$, which is a contradiction, so no such $p,q$ exist.
`QED`
