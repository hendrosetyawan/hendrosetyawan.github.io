---
layout: page
title: AutoScopy
description: AI-enabled 3D microstructure reconstruction from sparse measurements, with calibrated uncertainty carried through to fatigue crack prediction.
img: assets/img/projects/autoscopy_ipf.jpg
importance: 2
category: machine learning
---

M.S. Data Science capstone (STAT 683), Texas A&M. **Ongoing — currently at data acquisition and EDA.**

### The problem

Fatigue cracks start at a single vulnerable spot inside a metal component, and which spot that is depends on a three-dimensional arrangement: grain orientations, how neighbouring grains meet, where the defects sit. Most microscopy gives you two dimensions. The 3D techniques that do answer the question are slow and expensive, and one of them destroys the sample.

So the question is not "can a model draw a plausible microstructure" but: **how little measurement do you need before an engineering prediction is trustworthy, and how do you know when it isn't?**

The chain the project is building:

```
limited measurements → ensemble of plausible 3D microstructures → quantified uncertainty
    → crystal-plasticity FIPs → confidence in crack-initiation prediction
```

### Why this dataset makes it tractable

[Sparks et al. (2024)](https://doi.org/10.1007/s40192-024-00370-6) measured the *same* volume of LSHR nickel superalloy twice: non-destructively by high-energy diffraction microscopy (HEDM — the cheap, scalable modality we want to reconstruct from), then destructively by 30-section 3D-EBSD (the high-resolution ground truth). Both are registered onto a common grid.

That pairing is the whole reason honest uncertainty calibration is possible here. Without it, "is the reconstruction right?" has no answer.

### What is built and verified

- **Orientation library** for cubic symmetry — Bunge Euler, quaternions, disorientation, IPF colouring — validated against a brute-force 24×24 symmetry search to 1e-8°.
- **Readers** for MIDAS `.mic` (near-field HEDM), TSL `.ang` (EBSD), and DREAM.3D `.dream3d` / `.h5ebsd`, reproducing the paper's grain statistics exactly: 13,204 HEDM and 8,610 EBSD merged grains.
- **Baseline HEDM↔EBSD discrepancy measured across all 20 layers.** 49.0% of in-sample voxels mismatch at 3° (the paper reports 46.2%). Coverage falls from 58.7% to 44.6% with depth, while precision among matched voxels stays flat at about 1.6° — the instrument does not get *less accurate* deeper in, it just finds less. P(match | confidence index) turns out to be sigmoidal, not linear: logistic R² 0.998 against 0.933.

<div class="row justify-content-sm-center mt-4">
  <div class="col-sm-12 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/autoscopy_match.jpg" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Left: per-voxel match probability against the HEDM confidence index, pooled over 20 layers — logistic fit R² 0.998, linear 0.933. Right: coverage falls with depth while precision among matched voxels does not.
</div>


### The statistical shape of it

HEDM fails asymmetrically. It almost never invents a grain that is not there — 71 of 3,077 non-trivial HEDM grains are unmatched — but it routinely misses small ones: 3,371 of 6,306 non-trivial EBSD grains have no HEDM counterpart. The miss probability is a smooth function of grain size.

That makes this a missing-data problem with a *characterisable* mechanism rather than an opaque one, which is what moves calibrated uncertainty from aspiration to something you can actually check. The reconstruction has to be scored on whether its ensemble spread covers the EBSD ground truth — and against the 6.2% residual-disagreement floor, not against zero.

*Python · NumPy · SciPy · pandas · h5py · pytest · TAMU HPRC (SLURM, Globus)*
