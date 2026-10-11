---
layout: page
title: Storm Damage Risk Analytics
description: Visual analytics that separates recurring from catastrophic severe-weather damage across Texas counties, for insurance analysts. CSCE 679 Data Visualization, Team 8.
img: assets/img/projects/stormdamage_card.jpg
importance: 5
category: data visualization
---

**CSCE 679 Data Visualization (Texas A&M), Team 8:** Aadi Mahajan, Abhinav Sheshadri, MD Imtiaz Mahi and me. Proposal stage, October 2026.

### The problem

Insurance underwriters and risk analysts need to understand why historical severe-weather losses differ across counties. The usual numbers mislead: total reported damage and storm counts cannot tell persistent exposure from one catastrophic storm.

Our preliminary analysis of NOAA Storm Events covers 25,867 Texas hail, thunderstorm-wind and tornado reports from 2015 to 2025. Damage is grouped by county storm day, because NOAA often splits one storm into many reports.

- **Same total, different risk:** Tarrant ($1.44B) and Bexar ($1.37B) have almost the same reported damage. Tarrant's came from three storms of over $350M in two different years. 99% of Bexar's came from one hailstorm on 12 April 2016.
- **One day dominates:** in 48 of the 57 counties with at least $5M of damage, one storm day caused at least half of it.
- **Frequency is not damage:** tornadoes were 6% of reports but 23% of damage; thunderstorm wind was 40% of reports but 4% of damage.
- **The record is thin:** 15% of reports leave damage blank and 64% report $0, and NOAA damage is an estimate, not insured loss.

<div class="row justify-content-sm-center mt-4">
  <div class="col-sm-12 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/stormdamage_tarrant_bexar.jpg" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  NOAA-reported property damage per storm day (log scale), 2015–2025, for two counties with similar totals.
</div>

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="lazy" path="assets/img/projects/stormdamage_map.jpg" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="lazy" path="assets/img/projects/stormdamage_concentration.jpg" class="img-fluid rounded z-depth-1" %}
    {% include figure.liquid loading="lazy" path="assets/img/projects/stormdamage_hazards.jpg" class="img-fluid rounded z-depth-1 mt-3" %}
  </div>
</div>
<div class="caption">
  Left: share of each county's damage from its single worst storm day. Right: that share across the 57 counties with at least $5M of damage, and each hazard's share of reports and of damage.
</div>

### What today's insurance tools leave out

Insurers rely on commercial tools that each answer a different question. According to their public documentation, none of them shows the observed storm record behind a county's losses:

- **Verisk Xactimate** prices the repair of one damaged home, one claim at a time, after the loss.
- **Verisk 360Value** estimates what a home would cost to rebuild; it values the building, not the hazard.
- **Moody's RMS Risk Modeler** simulates storms to produce average annual loss and exceedance curves. These are hard to trace back to real storms and years, and they hide whether losses recur.

We will check these gaps in user interviews. Our system is meant to complement these tools, not replace them.

### Design requirements

| | Requirement | Analyst question |
|---|---|---|
| R1 | Geographic loss comparison | Why does County A have higher storm damage than County B? |
| R2 | Recurring vs. catastrophic loss | Regular damaging storms, or a few extreme events? |
| R3 | Hazard contribution | Is the damage mainly hail, tornado or thunderstorm wind? |
| R4 | Temporal loss pattern | Repeated over 5, 10 and 20 years, or concentrated in one or two? |
| R5 | Storm event investigation | Which storm events explain the high damage? |
| R6 | Data context and interpretation | Can I trust this comparison, and what are its limits? |

Data: NOAA Storm Events (2006–2025), Texas Department of Insurance homeowners losses by county (2019–2025) as an insured-loss reference, and Census ACS housing data for development context. Seven semi-structured interviews with underwriters, a catastrophe analyst, a regulator, homeowners and faculty are planned before the prototype; no findings are reported yet.

- **Proposal page:** [insurviz.web.app/proposal](https://insurviz.web.app/proposal/)
- **Interactive mock-up:** [insurviz.web.app](https://insurviz.web.app) (preliminary work, to be revised toward R1–R6)
- **Source code:** [github.com/hendrosetyawan/insurviz](https://github.com/hendrosetyawan/insurviz)

*Python · pandas · matplotlib · D3.js · three.js · Firebase Hosting*
