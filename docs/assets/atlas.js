/* AXZ Research Atlas public GitHub catalog — public repositories only.
   Live GitHub API first, checked-in public snapshot second.
   Repository visibility is NOT inferred from connected account access. */
(function () {
  "use strict";
  const OWNER = "shawncalvinsnelling";
  const SNAPSHOT_DATE = "2026-11-06";
  const FALLBACK_NAMES = ["AIAdvancedFrequencies","axezent-ai-ctr-kernel","AXEZENT-AI-Graph-Ramsey-R33","axezent-ai-poly-reduce-kernel","axezent-ai-prk-fuzzer","AXEZENT-AI-SAT-W24-Solver","Axezent-AI-Scan-Console","AXEZENT-AI-Schur-Green-Local-Certificate","AXEZENT-AI-Schur-Number-S3","AXEZENT-AI-Verified-Mathematics-Atlas","AXEZENT-Beats-for-Sale","AXEZENT-Detector-Gated-Dirichlet-Polynomials","axezent-library-of-verified-things","AXEZENT-MSQ-CERTIFIED","axezent-opac016-type-c-exact-kappa","axezent-opac018-green-schur-bridge","AXEZENT-Robust-Shortest-Path-Verifier","AXZ-Asymptotic-Gap-Frontier-V1","axz-csl-kernel","AXZ-Cube-Digit-182764125","axz-defect-homology-theory","AXZ-Factorial-Digit-12624120","AXZ-Fibonacci-Digit-1123581321","AXZ-Forward-NoDivision-0123456789","AXZ-Hexadecimal-Base16-Ring-V1","AXZ-Hexagonal-Digit-1615284566","AXZ-Palindromic-Byte-12488421","AXZ-Pentagonal-Digit-1512223551","AXZ-ReceiptCI","axz-research-atlas","AXZ-Research-Portfolio","AXZ-Reverse-NoDivision-9876543210","AXZ-Square-Digit-149162536","AXZ-Triangular-Digit-136101521","highlight","infinity-reduction-decider","ReceiptRail-AI","shawncalvinsnelling","shawncalvinsnelling-AXZ-BioGate-OHSU-Research-Timing-Engine","shawncalvinsnelling-AXZ-Photonic-Intelligence","shawncalvinsnelling-SCS-Rare-Event-Reduction-Engine","upme-verify-community","van-der-Waerden-W23"];
  const GROUPS = ["All", "Mathematics", "Verification & AI", "Science & engineering", "Music & media", "Portfolio"];
  const details = {
    "axz-research-atlas": "Truth-labeled research hub, reproducible finite results, proof obligations and evidence ledger.",
    "AXEZENT-AI-Verified-Mathematics-Atlas": "Exact mathematical certificates, formal-checking gates and six-cycle research software.",
    "axezent-opac016-type-c-exact-kappa": "Type-C exact-kappa theorem and checked geometric-dilation evidence, under stated scope.",
    "axezent-opac018-green-schur-bridge": "Green–Schur root-system bridge, formal audits and scoped mathematical obligations.",
    "AXEZENT-Detector-Gated-Dirichlet-Polynomials": "Finite Dirichlet polynomials, detector-gated exceedance estimates and reproducibility materials.",
    "AXEZENT-AI-Graph-Ramsey-R33": "Finite certificate for R(3,3)=6 via exhaustive graph-coloring checks.",
    "AXEZENT-AI-SAT-W24-Solver": "Van der Waerden finite SAT certification scaffold and proof-log interfaces.",
    "AXEZENT-AI-Schur-Number-S3": "Finite Schur-number combinatorics and certificate tools.",
    "AXEZENT-AI-Schur-Green-Local-Certificate": "Exact local Cartan–Schur determinant checks used in OPAC research.",
    "AXEZENT-Robust-Shortest-Path-Verifier": "Exact rational route certificates under stated edge-cost uncertainty models.",
    "AXZ-ReceiptCI": "Deterministic software test receipts, source hashes and release-verification records.",
    "axezent-ai-ctr-kernel": "Deterministic policy and action-trace checks for submitted AI receipts.",
    "axz-csl-kernel": "Exact finite sparse-state trace replay using declared local rules and formal source.",
    "ReceiptRail-AI": "Local-first agent and repository audit receipts with provenance hash chaining.",
    "axezent-ai-prk-fuzzer": "Reduction-checker stress testing and reproducing finite counterexamples.",
    "axezent-ai-poly-reduce-kernel": "Audits finite complexity reductions and their checkable evidence.",
    "axezent-library-of-verified-things": "Evidence-oriented review and verification interface.",
    "shawncalvinsnelling-AXZ-Photonic-Intelligence": "Research-stage structural coherence, runtime telemetry and photonic engineering models.",
    "shawncalvinsnelling-SCS-Rare-Event-Reduction-Engine": "Research-stage particle-physics event reconstruction and classification.",
    "shawncalvinsnelling-AXZ-BioGate-OHSU-Research-Timing-Engine": "Research-stage biomedical assay timing and experiment-planning software.",
    "AXEZENT-Beats-for-Sale": "Original AXEZENT hip-hop, rap and instrumental storefront project.",
    "AIAdvancedFrequencies": "Audio, frequency and digital media experiments.",
    "shawncalvinsnelling": "The full professional profile, intellectual biography and featured research portfolio.",
    "AXZ-Research-Portfolio": "The wider public-facing AXZ research and artifact portfolio."
  };
  const knownGroups = {
    "axz-research-atlas": "Portfolio",
    "shawncalvinsnelling": "Portfolio",
    "AXZ-Research-Portfolio": "Portfolio",
    "highlight": "Portfolio",
    "AIAdvancedFrequencies": "Music & media",
    "AXEZENT-Beats-for-Sale": "Music & media",
    "shawncalvinsnelling-AXZ-Photonic-Intelligence": "Science & engineering",
    "shawncalvinsnelling-SCS-Rare-Event-Reduction-Engine": "Science & engineering",
    "shawncalvinsnelling-AXZ-BioGate-OHSU-Research-Timing-Engine": "Science & engineering",
    "ReceiptRail-AI": "Verification & AI",
    "AXEZENT-Robust-Shortest-Path-Verifier": "Verification & AI",
    "AXZ-ReceiptCI": "Verification & AI",
    "axz-csl-kernel": "Verification & AI",
    "axezent-ai-ctr-kernel": "Verification & AI",
    "axezent-library-of-verified-things": "Verification & AI",
    "Axezent-AI-Scan-Console": "Verification & AI",
    "axezent-ai-poly-reduce-kernel": "Verification & AI",
    "axezent-ai-prk-fuzzer": "Verification & AI",
    "upme-verify-community": "Verification & AI",
    "infinity-reduction-decider": "Verification & AI"
  };
  function groupFor(name) {
    if (knownGroups[name]) return knownGroups[name];
    const n = name.toLowerCase();
    if (/opac|dirichlet|math|ramsey|schur|waerden|w23|sat-w|msq|digit|fibonacci|factorial|palindromic|square|cube|asymptotic-gap|hexadecimal|defect-homology|triangular|pentagonal|hexagonal/.test(n)) return "Mathematics";
    if (/photon|bio|microscope|rare-event|instrument|science/.test(n)) return "Science & engineering";
    if (/beat|frequency|music|puretone|audio/.test(n)) return "Music & media";
    return "Verification & AI";
  }
  function normalized(record) {
    if (!record || typeof record.name !== "string" || !/^[a-zA-Z0-9_.-]+$/.test(record.name)) return null;
    if (record.owner && record.owner.login && record.owner.login.toLowerCase() !== OWNER) return null;
    if (record.private === true || record.archived === true) return null;
    return {
      name: record.name,
      group: groupFor(record.name),
      description: details[record.name] || (typeof record.description === "string" ? record.description.slice(0, 230) : "") || "Explore the project source, documentation and associated artifacts.",
      updated: typeof record.pushed_at === "string" ? record.pushed_at : "",
      url: "https://github.com/" + OWNER + "/" + record.name
    };
  }
  const fallback = FALLBACK_NAMES.map(function (name) { return normalized({name:name}); }).filter(Boolean);
  let current = fallback;
  let search = "";
  let category = "All";
  const container = document.getElementById("repo-results");
  if (!container) return;
  const countNode = document.getElementById("repo-count");
  const sourceNode = document.getElementById("source-note");
  const categoryNode = document.getElementById("category-filters");
  const input = document.getElementById("repo-search");
  const empty = document.getElementById("repo-empty");
  function el(tag, cls, val) {
    const x = document.createElement(tag);
    if (cls) x.className = cls;
    if (val !== undefined) x.textContent = val;
    return x;
  }
  function renderFilters() {
    if (!categoryNode) return;
    categoryNode.replaceChildren();
    GROUPS.forEach(function (name) {
      const b = el("button", "filter-chip" + (category === name ? " is-active" : ""), name);
      b.type = "button";
      b.setAttribute("aria-pressed", String(category === name));
      b.addEventListener("click", function () { category = name; renderFilters(); render(); });
      categoryNode.appendChild(b);
    });
  }
  function render() {
    container.replaceChildren();
    let filtered = current.filter(function (r) {
      return (category === "All" || r.group === category) &&
        (r.name + " " + r.description + " " + r.group).toLowerCase().includes(search);
    });
    filtered.sort(function (a,b) {
      if (a.updated && b.updated && a.updated !== b.updated) return a.updated > b.updated ? -1 : 1;
      return a.name.localeCompare(b.name);
    });
    if (countNode) countNode.textContent = filtered.length + " of " + current.length + " public repositories";
    if (empty) empty.hidden = filtered.length !== 0;
    const frag = document.createDocumentFragment();
    filtered.forEach(function (r) {
      const card = el("article", "repository-card");
      const top = el("div", "repository-card-top");
      const group = el("span", "topic-pill", r.group);
      const a = el("a", "repository-title", r.name);
      a.href = r.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      top.append(group, a);
      const desc = el("p", "repository-summary", r.description);
      card.append(top, desc);
      if (r.updated) {
        const d = new Date(r.updated);
        if (!Number.isNaN(d.getTime())) card.appendChild(el("p", "repository-date", "Last repository push " + d.toLocaleDateString(undefined, {year:"numeric",month:"short",day:"numeric"})));
      }
      frag.appendChild(card);
    });
    container.appendChild(frag);
  }
  if (input) input.addEventListener("input", function () { search = input.value.trim().toLowerCase(); render(); });
  renderFilters();
  render();
  if (sourceNode) sourceNode.textContent = "Showing the checked-in public snapshot (" + SNAPSHOT_DATE + "). Checking GitHub for updates…";
  async function updateFromGitHub() {
    const gathered = [];
    for (let page = 1; page <= 5; page++) {
      const controller = new AbortController();
      const timeout = setTimeout(function () { controller.abort(); }, 6500);
      let response;
      try {
        response = await fetch("https://api.github.com/users/" + OWNER + "/repos?per_page=100&type=owner&sort=pushed&page=" + page, {
          headers: {"Accept": "application/vnd.github+json"},
          signal: controller.signal,
          cache:"no-store"
        });
      } finally { clearTimeout(timeout); }
      if (!response.ok) throw new Error("GitHub API " + response.status);
      const batch = await response.json();
      if (!Array.isArray(batch)) throw new Error("Invalid GitHub response");
      for (const record of batch) {
        if (record.private === false && record.owner && record.owner.login && record.owner.login.toLowerCase() === OWNER) {
          const n = normalized(record);
          if (n) gathered.push(n);
        }
      }
      if (batch.length < 100) break;
    }
    if (!gathered.length) throw new Error("Empty public catalog");
    const unique = new Map(gathered.map(function (r) { return [r.name.toLowerCase(), r]; }));
    current = Array.from(unique.values());
    render();
    if (sourceNode) sourceNode.textContent = "Live public GitHub data, refreshed when this page opened. Repository metadata is not a scientific endorsement.";
  }
  updateFromGitHub().catch(function () {
    if (sourceNode) sourceNode.textContent = "Showing saved public catalog (" + SNAPSHOT_DATE + "); live GitHub refresh is currently unavailable.";
  });
})();