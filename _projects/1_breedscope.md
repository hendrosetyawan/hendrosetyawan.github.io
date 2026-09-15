---
layout: page
title: BreedScope
description: A genomic-selection pipeline that ranks 15,968 untested maize lines under a cut plot budget. 3rd place, 2026 AgTech Hackathon.
img: assets/img/projects/breedscope_dash.jpg
importance: 1
category: data engineering
---

**3rd place, 2026 AgTech Hackathon** (Precision Digital Agriculture, Corn Breeding Track) at Texas A&M, hosted with Bayer, the Texas A&M Institute of Data Science, and Texas A&M AgriLife Research. Built over one weekend by Team Demeter, five members.

[Code](https://github.com/hendrosetyawan/breedscope) · [Live dashboard](https://demeter-aggie-bayer.web.app)

### The problem

Rank 15,968 untested maize lines for roughly 1,500 available plot slots — with every one of the 157 families entering 2008 absent from the 2001–2007 record. No historical performance to lean on, only DNA markers and parentage.

### The pipeline

Nine stages over **1,072,276 field plots**: ID reconciliation across four identifier formats and contamination flagging, RR-BLUP breeding values from 2,911 SNP markers, forward-year validation with prediction intervals, mega-environment clustering with factor-analytic GxE modeling, selection indexing, genetic diversity tracking, REML variance estimation with optimal contribution selection, plot-cut impact analysis, and named advancement plans per site.

### Two decisions that mattered

**Memory.** Parameterizing by marker rather than by genome means `X'X` and `X'y` accumulate incrementally — **748 MB flat**, against roughly 63 GB for a genomic relationship matrix over 125,495 lines. A full run finishes in 2 minutes 33 seconds on a laptop.

**Validation.** Forward-year only, never random k-fold. Full siblings leak across folds and inflate every number you care about.

### Results

**+1.37 bu/ac** realised gain on the list actually shipped, scored against the 2008 outcome that really happened. A **1.42× hit rate** against picking at random, with 94% of genetic variety retained at a cap of 25 lines per family. Hold-out correlation 0.154–0.157, stable across years.

The accuracy is modest by the nature of the problem rather than by accident — these are untested lines from untested families, and 85.4% of the usable variation is all the markers can reach. A 1.42× edge applied across 15,968 candidates is what genetic gain looks like at this scale.

The single largest accuracy gain — ρ from 0.132 to 0.167 — came from identifying **nine site-years that pooled separate trials incorrectly**. A data-quality fix. REML, optimal contribution selection, and intelligent site elimination each failed to beat it. The binding constraint was information per line, not the algorithm applied to it.

### The dashboard

An interactive D3.js decision tool on Firebase: testing-network and site-performance views, budget-planning sliders that recost plot cuts live, selection-rule testing, and a sortable table of all 157 candidate families under current versus unrestricted scenarios.

*Python · pandas · NumPy · scikit-learn · D3.js · Next.js · Parquet · Firebase*
