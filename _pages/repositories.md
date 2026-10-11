---
layout: page
permalink: /repositories/
title: repositories
description: Public code. Some of the work lives in private repositories — happy to walk through it on request.
nav: true
nav_order: 4
---

<div class="repo-list">

  <div class="repo-card">
    <h4><a href="https://github.com/hendrosetyawan/breedscope">breedscope</a> <span class="repo-lang">Python</span></h4>
    <p>Genomic selection pipeline and interactive dashboard ranking 15,968 untested maize lines under a cut plot budget. Nine stages over 1,072,276 field plots, RR-BLUP from 2,911 SNP markers, forward-year validation only. 3rd place, AgHack 2026, Corn Breeding Track.</p>
    <p class="repo-links">
      <a href="https://github.com/hendrosetyawan/breedscope">Code</a> ·
      <a href="https://demeter-aggie-bayer.web.app">Live dashboard</a> ·
      <a href="{{ '/projects/1_breedscope/' | relative_url }}">Write-up</a>
    </p>
  </div>

  <div class="repo-card">
    <h4><a href="https://github.com/hendrosetyawan/rackiq">rackiq</a> <span class="repo-lang">JavaScript</span></h4>
    <p>Predictive hardware failure and cited RCA copilot for data centers: 72-hour failure risk per component with SHAP explanations, fixes ranked by durable-fix rate from the incident history, and spare-parts linkage on a 100-rack DCIM dashboard. Prototype-phase finalist, ABB Accelerator 2026.</p>
    <p class="repo-links">
      <a href="https://github.com/hendrosetyawan/rackiq">Code</a> ·
      <a href="https://rackiq-copilot.web.app">Live demo</a> ·
      <a href="{{ '/projects/4_rackiq/' | relative_url }}">Write-up</a>
    </p>
  </div>

  <div class="repo-card">
    <h4><a href="https://github.com/hendrosetyawan/moneyball_MLS">moneyball_MLS</a> <span class="repo-lang">JavaScript</span></h4>
    <p>Machine-learning scouting board for all 30 Major League Soccer clubs. Each of 637 players gets a role, a skill shape, comparable players, exact 0–100 ratings for this season and the next three, and a contract-value tag. Ridge projections beat both baselines at every horizon.</p>
    <p class="repo-links">
      <a href="https://github.com/hendrosetyawan/moneyball_MLS">Code</a> ·
      <a href="https://moneyball-mls.web.app">Live app</a> ·
      <a href="{{ '/projects/6_moneyball_mls/' | relative_url }}">Write-up</a>
    </p>
  </div>

  <div class="repo-card">
    <h4><a href="https://github.com/hendrosetyawan/insurviz">insurviz</a> <span class="repo-lang">JavaScript</span></h4>
    <p>3D visual analytics for all 254 Texas counties, joining NOAA severe-weather history, Census housing exposure and Texas Department of Insurance homeowners data. Also hosts the Team 8 proposal for recurring vs. catastrophic storm damage. CSCE 679.</p>
    <p class="repo-links">
      <a href="https://github.com/hendrosetyawan/insurviz">Code</a> ·
      <a href="https://insurviz.web.app">Live app</a> ·
      <a href="{{ '/projects/5_stormdamage/' | relative_url }}">Write-up</a>
    </p>
  </div>

  <div class="repo-card">
    <h4><a href="https://github.com/hendrosetyawan/stormlens">stormlens</a> <span class="repo-lang">JavaScript</span></h4>
    <p>3D map of 308,762 NOAA hail, thunderstorm-wind and tornado events across the United States, 2015–2025, as peril-segmented hexagon columns linked to a state ranking, a timeline and the most damaging events. CSCE 679, Team 8.</p>
    <p class="repo-links">
      <a href="https://github.com/hendrosetyawan/stormlens">Code</a> ·
      <a href="https://stormlens.web.app">Live app</a> ·
      <a href="{{ '/projects/5_stormdamage/' | relative_url }}">Write-up</a>
    </p>
  </div>

  <div class="repo-card">
    <h4><a href="https://github.com/hendrosetyawan/hendrosetyawan.github.io">hendrosetyawan.github.io</a> <span class="repo-lang">HTML</span></h4>
    <p>This site. Jekyll, built on the al-folio theme and deployed to GitHub Pages.</p>
    <p class="repo-links">
      <a href="https://github.com/hendrosetyawan/hendrosetyawan.github.io">Code</a>
    </p>
  </div>

  <div class="repo-card repo-card--muted">
    <h4>AutoScopy <span class="repo-lang">private</span></h4>
    <p>3D reconstruction of FIB-SEM serial sections: slice alignment, sample finding and 3D grain segmentation, turning 268 images of a copper–tungsten film into 5,664 individual grains with a single-file WebGL viewer, and the same workflow as a DREAM3D-NX pipeline. Classical computer vision; runs on an 8 GB laptop or Google Colab.</p>
    <p class="repo-links"><a href="{{ '/projects/2_autoscopy/' | relative_url }}">Write-up</a></p>
  </div>

  <div class="repo-card repo-card--muted">
    <h4>X-GridAgent <span class="repo-lang">private</span></h4>
    <p>On-policy distillation of a multi-agent LLM system for power-grid analysis into a locally served 1B-parameter model.</p>
    <p class="repo-links"><a href="{{ '/projects/3_xgridagent/' | relative_url }}">Write-up</a></p>
  </div>

</div>

<p class="mt-4">Everything public lives at <a href="https://github.com/hendrosetyawan">github.com/hendrosetyawan</a>.</p>
