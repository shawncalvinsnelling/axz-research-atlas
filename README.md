# AXZ Research Atlas

**Repository website:** https://shawncalvinsnelling.github.io/axz-research-atlas/  
**Owner:** Shawn Calvin Snelling / Axezent AI  
**Posture:** `FINITE_VERIFICATION_ATLAS / GLOBAL_CLAIMS_BLOCKED_UNLESS_BRIDGED`

AXZ Research Atlas is the public index for the Axezent AI verification ecosystem. It collects finite mathematical scans, proof-audit tools, receipt systems, candidate lemmas, blocked claims, and reproducible research artifacts under one rule:

> **No claim without a receipt. No finite receipt promoted to infinity without a bridge theorem.**

## What this repository is

This repository is a professional, public-facing atlas for:

- finite proof-audit artifacts;
- deterministic receipts and SHA256 manifests;
- modular and graph-theoretic search reductions;
- finite mathematical verification experiments;
- candidate lemmas adjacent to open problems;
- clear truth labels: `PROVED`, `FINITE_PROVED`, `CANDIDATE`, `BLOCKED`.

## What this repository is not

This repository does **not** claim that the Riemann Hypothesis is solved, that the 3×3 magic square of squares is globally solved, that cryptography is broken, or that any “universal” physics law has been established.

Those claims are explicitly listed in [`BLOCKED_CLAIMS.md`](BLOCKED_CLAIMS.md).

## Core projects indexed

The ecosystem includes repositories such as:

- `axz-defect-homology-theory`
- `axezent-library-of-verified-things`
- `AXZ-ReceiptCI`
- `axezent-ai-ctr-kernel`
- `axz-csl-kernel`
- `axezent-ai-prk-fuzzer`
- `axezent-ai-poly-reduce-kernel`
- finite digit-certificate repositories
- magic-square and prime-geometry finite verifier packages

See [`REPOSITORY_INDEX.md`](REPOSITORY_INDEX.md).

## Current strongest mathematical lane

The current strongest technical lane is the magic-square-of-squares graph reduction:

1. Lucas-form order-3 magic squares.
2. Primitive `24k+1` compression.
3. Modulo-240 and CRT survivor lattices.
4. Centered square-pair difference graph `D(e)`.
5. Closed additive-diamond obstruction.
6. Finite sweeps with receipts.

See [`PROVED_RESULTS.md`](PROVED_RESULTS.md) and [`CANDIDATE_LEMMAS.md`](CANDIDATE_LEMMAS.md).

## GitHub Pages website

This repo includes a static site in `/docs`.

After uploading to GitHub:

1. Go to **Settings → Pages**.
2. Set source to **Deploy from a branch**.
3. Select branch `main`.
4. Select folder `/docs`.
5. Put this URL in the repository **About → Website** field:

```text
https://shawncalvinsnelling.github.io/axz-research-atlas/
```

## Quick verification

```bash
python src/python/verify_atlas.py
python src/python/msq_crt_lattice_demo.py
python src/python/msq_difference_graph_demo.py
```

## Citation

See [`CITATION.cff`](CITATION.cff).

## Truth boundary

```text
PROVED:
  finite receipts, algebraic reductions, deterministic modular counts, repository artifacts.

CANDIDATE:
  unsolved-math-adjacent lemmas and obstruction theories requiring proof.

BLOCKED:
  global RH, global magic-square resolution, unbreakable cryptography,
  universal physical constants, and any infinite theorem without a bridge.
```
