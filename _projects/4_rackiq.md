---
layout: page
title: RackIQ
description: A predictive hardware failure & cited RCA copilot for data centers — 100-rack DCIM dashboard with spare-parts linkage. Prototype-phase finalist, ABB Accelerator 2026.
img: assets/img/projects/rackiq_dashboard.jpg
importance: 4
category: machine learning
---

**Prototype-phase finalist, ABB Accelerator 2026** (hybrid of the Agentic Predictive Maintenance Studio and Multimodal Maintenance Intelligence Agent themes). Team RackIQ: Tasmaiya Tamboli and me.

### The problem

Hardware failures in a data center — DIMM errors, disk pre-failure, PSU faults, NIC flaps, fan wear — surface during migrations, backups and DR failovers, exactly when diagnosis time extends outage exposure. The fix usually exists already in a closed ticket or an RCA from months ago, but it is fragmented and held by a few senior engineers. And if the part is not on the shelf, even the right fix waits.

### What it does

RackIQ predicts 72-hour failure risk for every monitored component from telemetry trends (explained with SHAP, plus an anomaly index for early warnings), recommends the fix that actually held in the organization's own 12-month incident history — cited, ranked by durable-fix rate, with failed fixes flagged — puts a safety step first when the rack is mid-migration or serving a DR failover, and shows whether the spare part is in stock.

<div class="row justify-content-sm-center mt-4">
  <div class="col-sm-12 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/rackiq_dashboard.jpg" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Command Center: a 3D data hall of 100 racks and 800 servers, every slot coloured by predicted health, with beacons for racks in migration, backup, DR-failover or maintenance windows.
</div>

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="lazy" path="assets/img/projects/rackiq_thermal.jpg" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="lazy" path="assets/img/projects/rackiq_inventory.jpg" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Left: the same floor in thermal mode exposes a failing cooling unit. Right: the spare-parts view flags SKUs that cannot cover the failures the models predict.
</div>

<div class="row justify-content-sm-center mt-3">
  <div class="col-sm-12 mt-3 mt-md-0">
    {% include figure.liquid loading="lazy" path="assets/img/projects/rackiq_recommend.jpg" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  A DIMM at 100% predicted risk on a DR-failover rack: safety step first, the proven fix with its 12-month record and live stock, and the reseat flagged because it held only a third of the time.
</div>

### Under the hood

Five LightGBM failure models (DIMM, disk, PSU, NIC, fan) tracked in MLflow, hybrid BM25 + vector retrieval over ~1,900 knowledge-base documents, a fault knowledge graph (`Component → Symptom → Root Cause → Fix`), and a deterministic, cited recommendation agent — no free-form LLM generation, so no hallucinated advice. FastAPI backend; a five-section DCIM frontend (Command Center, Operations, Maintenance, Event Log, Inventory) built with React and D3.js.

Everything runs on clearly labelled synthetic data — 4,000 components, 90 days of MELT telemetry, 12 months of incidents and a simulated spare-parts warehouse — because the prototype phase has no access to a real data center's systems.

- **Live demo:** [rackiq-copilot.web.app](https://rackiq-copilot.web.app) (static hosted snapshot)
- **Source code:** [github.com/hendrosetyawan/rackiq](https://github.com/hendrosetyawan/rackiq)
- **Demo video:** [56-second walkthrough](https://github.com/hendrosetyawan/rackiq/blob/main/docs/media/rackiq_demo.mp4)

*Python · FastAPI · LightGBM · SHAP · MLflow · BM25 · networkx · React · D3.js*
