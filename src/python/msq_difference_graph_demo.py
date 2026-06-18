#!/usr/bin/env python3
"""
AXZ centered square-pair difference graph demo.

Demonstrates D(e) generation and the additive-diamond condition.
Finite demo only.
"""

from math import gcd, isqrt
from collections import defaultdict

ALLOWED_E_MOD_240 = {1, 25, 49, 121, 145, 169}

def generate_D(zmax: int, primitive_filter: bool = True):
    dsets = defaultdict(set)
    for m in range(2, isqrt(zmax) + 2):
        m2 = m*m
        if m2 + 1 > zmax:
            break
        nmax = min(m-1, isqrt(zmax - m2))
        for n in range(1, nmax + 1):
            if ((m - n) & 1) == 0 or gcd(m, n) != 1:
                continue
            p0 = m2 - n*n
            q0 = 2*m*n
            z0 = m2 + n*n
            d0 = 2*p0*q0
            k, z = 1, z0
            while z <= zmax:
                d = d0*k*k
                if not primitive_filter or (((z*z) % 240) in ALLOWED_E_MOD_240 and d % 24 == 0):
                    dsets[z].add(d)
                k += 1
                z += z0
    return dsets

def scan_diamonds(dsets):
    diamonds = 0
    pairs = 0
    for z, ds in dsets.items():
        L = sorted(ds)
        S = set(L)
        for i, a in enumerate(L):
            for b in L[i+1:]:
                pairs += 1
                if (a+b) in S and (b-a) in S:
                    diamonds += 1
    return pairs, diamonds

if __name__ == "__main__":
    D = generate_D(100_000)
    pairs, diamonds = scan_diamonds(D)
    print("centers with D:", len(D))
    print("pair tests:", pairs)
    print("additive diamonds:", diamonds)
