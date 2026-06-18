# Magic-Square-of-Squares Lane

## Lucas parameterization

Every 3×3 magic square can be written in Lucas form:

\[
\begin{pmatrix}
e+a & e-a-b & e+b\\
e-a+b & e & e+a-b\\
e-b & e+a+b & e-a
\end{pmatrix}.
\]

For a square-of-squares candidate, all nine entries must be perfect squares.

## Primitive compression

For primitive candidates, the current atlas records the compression condition:

\[
L_i(e,a,b)\equiv 1 \pmod{24}
\]

and hence the step variables satisfy

\[
a\equiv 0\pmod{24},\qquad b\equiv0\pmod{24}.
\]

## Difference graph

For center \(e=z^2\), define

\[
D(e)=\{d>0:e-d\in\Box,\ e+d\in\Box\}.
\]

A candidate requires

\[
\{a,b,a+b,|a-b|\}\subset D(e).
\]

This is the closed additive-diamond reduction.

## Stronger divisibility lemma

If \(d\in D(z^2)\), then \(24\mid d\). More sharply, if \(2^s\Vert z\), then

\[
24\cdot 4^s\mid d.
\]

This means the 24-divisibility observed in finite difference graphs is not merely empirical; it has a modular and 2-adic proof.

## Current status

```text
FINITE_GRAPH_SWEEP_PROVED
GLOBAL_MAGIC_SQUARE_UNRESOLVED
```
