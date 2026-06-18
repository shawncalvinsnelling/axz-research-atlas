# Proved and Finite-Proved Results

These entries are allowed to be described as proved only within the stated truth boundary.

## AXZ-CSF-001: Dead odd-square Ulam lane

**Status:** `PROVED`

**Statement.** The lane C0(r)=(2r+1)^2 is composite for every r>=1 and therefore contains no primes after the trivial center.

**Evidence route.** Algebraic square factorization; finite scan receipts are illustrative, not required for proof.

## AXZ-MSQ-003: Primitive 24k+1 compression gate

**Status:** `PROVED / LITERATURE-SUPPORTED`

**Statement.** Primitive 3×3 magic-square-of-squares candidates satisfy cell congruence L_i ≡ 1 (mod 24); Lucas steps a and b must be multiples of 24.

**Evidence route.** Quadratic residues mod 3 and mod 8; CRT compression; literature alignment with Pierrat-Thiriet-Zimmermann-style constraints.

## AXZ-MSQ-006: Modulo-240 survivor lattice

**Status:** `FINITE_PROVED`

**Statement.** Modulo 240 has 116 code-like nontrivial QR survivors; strict primitive compression leaves 50 survivor structures; center classes 25 and 145 account for 38/50.

**Evidence route.** Deterministic modular sweep and CSV/JSON receipts.

## AXZ-MSQ-006-CRT: CRT product counts

**Status:** `FINITE_PROVED`

**Statement.** Strict primitive mod 240 survivors combined with raw mod 7 and mod 11 QR survivors give 50×16×26=20,800 raw CRT product states; tightened nontrivial convention gives 12,000.

**Evidence route.** CRT counting convention recorded in ledger.

## AXZ-MSQ-008-CUBE: Cubic residue reductions

**Status:** `FINITE_PROVED`

**Statement.** For cubic-residue Lucas gates, mod 7 and mod 9 each have exactly 4 nontrivial survivors, giving reductions 98.8338% and 99.4513%.

**Evidence route.** Deterministic finite ring sweeps.

## AXZ-MSQ-010: Closed additive-diamond reduction

**Status:** `PROVED REDUCTION`

**Statement.** For center e=z^2, a 3×3 magic square of squares requires {a,b,a+b,|a-b|}⊂D(e), where D(e)={d>0:e−d and e+d are squares}.

**Evidence route.** Opposite-pair decomposition in Lucas parameterization.

## AXZ-MSQ-013: Finite graph sweep through z≤1,000,000

**Status:** `FINITE_NEGATIVE_RESULT`

**Statement.** A finite sweep found 245,344 centers with valid D(e), 2,611,262 pair tests, zero 3-of-4 near-misses, zero additive diamonds, and zero valid square hits under the implemented gates.

**Evidence route.** C++/Python sweep summary and receipts.

## AXZ-MSQ-014.1: Forced 24-divisibility lemma for centered square-pair differences

**Status:** `PROVED`

**Statement.** If d∈D(z^2), then 24∣d. More sharply, if 2^s exactly divides z, then 24·4^s divides d.

**Evidence route.** Modulo 3, modulo 8, and 2-adic descent.
