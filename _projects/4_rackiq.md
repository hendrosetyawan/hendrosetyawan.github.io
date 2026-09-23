---
layout: page
title: RackIQ
description: A predictive hardware failure & cited RCA recommendation copilot for data center operations. Prototype-phase finalist, ABB Accelerator 2026.
img: assets/img/projects/rackiq_dashboard.jpg
importance: 4
category: machine learning
---

**Prototype-phase finalist, ABB Accelerator 2026** (hybrid of the Agentic Predictive Maintenance Studio and Multimodal Maintenance Intelligence Agent themes). Team RackIQ: Tasmaiya Tamboli and me.

### The problem

Hardware failures in a data center — DIMM errors, disk pre-failure signals, PSU faults, NIC flaps — surface during the worst possible windows: migrations, backup jobs, disaster-recovery failovers, exactly when diagnosis time extends outage exposure. The fix has usually already been found before, in a closed ticket or an RCA document from six months ago, but it's fragmented, unindexed, and held in the memory of a handful of senior engineers.

### What it does

RackIQ predicts component failure risk from telemetry trends — with a SHAP-based explanation of which signals are driving the score, not a bare probability — then retrieves the specific historical fix that resolved the same failure signature before, cited back to its source ticket or manual, and adapted to whatever is operationally happening on that rack right now (safe to hot-swap, or does a DR failover need to complete first?).

<div class="row justify-content-sm-center mt-4">
  <div class="col-sm-12 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/rackiq_recommend.jpg" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  A disk at 100% predicted failure risk on a rack mid-DR-failover: the safety note comes first, the fix is cited to its source document, and confidence is scored from the evidence itself.
</div>

### Under the hood

Per-component LightGBM failure-risk models (DIMM, disk, PSU, NIC) tracked in MLflow, a hybrid BM25 + TF-IDF retrieval layer over a ticket/RCA/manual/email knowledge base, a fault knowledge graph (`Component → Symptom → Root Cause → Fix → Ticket`), and a deterministic, cited recommendation agent that combines predictive risk, retrieved evidence, and live operational context — no free-form LLM generation in the loop, so no hallucination risk. FastAPI backend, React/Vite frontend.

Built on synthetic telemetry and a synthetic incident corpus (clearly documented as such) rather than real BMC/ServiceNow data, since the prototype phase runs on a fixed timeline with no access to a real data center's systems.

- **Live demo:** [rackiq-copilot.web.app](https://rackiq-copilot.web.app) (static hosted snapshot — no backend server behind it, see the repo for why)
- **Source code:** [github.com/hendrosetyawan/rackiq](https://github.com/hendrosetyawan/rackiq)
- **Demo video:** [42-second walkthrough](https://github.com/hendrosetyawan/rackiq/blob/main/docs/media/rackiq_demo.mp4)

*Python · FastAPI · LightGBM · SHAP · MLflow · scikit-learn · BM25 · networkx · React*
