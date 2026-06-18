#!/usr/bin/env python3
"""
AXZ Research Atlas verifier.

Checks that required ledger files exist and that the manifest truth posture is explicit.
"""

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]

REQUIRED = [
    "README.md",
    "TRUTH_LEDGER.md",
    "PROVED_RESULTS.md",
    "CANDIDATE_LEMMAS.md",
    "BLOCKED_CLAIMS.md",
    "data/atlas_manifest.json",
    "data/truth_ledger.csv",
    "docs/index.html",
]

def main() -> int:
    missing = [p for p in REQUIRED if not (ROOT / p).exists()]
    if missing:
        print("MISSING:", missing)
        return 1

    manifest = json.loads((ROOT / "data/atlas_manifest.json").read_text())
    posture = manifest.get("truth_posture", "")
    if "GLOBAL_CLAIMS_BLOCKED" not in posture:
        print("Manifest posture does not block global claims.")
        return 1

    print("AXZ Research Atlas verification passed.")
    print("Truth posture:", posture)
    return 0

if __name__ == "__main__":
    raise SystemExit(main())
