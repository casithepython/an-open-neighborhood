>[!lemma] A closed subset of a compact set is compact
>Let $X$ be a topological space, and let $D \subseteq X$ be compact. If $C \subseteq D$ is closed, $C$ is compact. ^28

`PROOF`@[[#^28]]
Let $\mathcal{O}$ be an open cover of $C$. Since $C$ is closed, $X \setminus C$ is open, so $\mathcal{O} \cup \{X \setminus C\}$ is an open cover of $X$ and therefore an open cover of $D \subseteq X$. Now, as $D$ is compact, $\mathcal{O} \cup \{X \setminus C\}$ has a finite subcover, so $\mathcal{O}$ has a finite subcover. Therefore, $C$ is compact.
`QED`

#topology 