#!/usr/bin/env python3
"""
AXZ MSQ CRT lattice demo.

Recomputes the modulo-240 survivor counts recorded in the atlas.
This is a finite check only.
"""

def quadratic_residues(m: int) -> set[int]:
    return {(x * x) % m for x in range(m)}

def lucas_cells(e: int, a: int, b: int, m: int) -> list[int]:
    return [
        (e + a) % m, (e - a - b) % m, (e + b) % m,
        (e - a + b) % m, e % m, (e + a - b) % m,
        (e - b) % m, (e + a + b) % m, (e - a) % m,
    ]

def strict_primitive_240(include_uniform: bool = False):
    m = 240
    q = quadratic_residues(m)
    out = []
    for e in range(m):
        if e % 24 != 1 or e not in q:
            continue
        for a in range(0, m, 24):
            for b in range(0, m, 24):
                if not include_uniform and a == 0 and b == 0:
                    continue
                cells = lucas_cells(e, a, b, m)
                if all(c % 24 == 1 for c in cells) and all(c in q for c in cells):
                    out.append((e, a, b))
    return out

if __name__ == "__main__":
    survivors = strict_primitive_240()
    print("strict primitive mod 240 survivors:", len(survivors))
    centers = {}
    for e, a, b in survivors:
        centers[e] = centers.get(e, 0) + 1
    print("center distribution:", dict(sorted(centers.items())))
