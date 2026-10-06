---
layout: page
title: AutoScopy
description: Classical computer vision that aligns 268 FIB-SEM serial sections of a copper–tungsten film and segments it into 5,664 individual 3D grains.
img: assets/img/projects/autoscopy_grains.jpg
importance: 2
category: machine learning
---

**Ongoing since September 2026.** Alignment and 3D grain segmentation work end to end. Next is a second dataset.

### The problem

A FIB-SEM "slice and view" run mills a sample 20 nm at a time with an ion beam and photographs each fresh face
with an electron beam. This dataset is 268 such images of a copper–tungsten film about 1 µm thick, 3 nm per pixel.

Stacked as they come, the images do not line up. The instrument corrects slow drift itself but leaves a fast
back-and-forth jitter of about 9 px between neighbouring slices, so every grain boundary turns into a saw blade.
Each frame also holds a protective layer above the film and the substrate below it, and the detector brightness
drifts over the 12-hour run.

The goal: get from the raw images to individual 3D grains with sizes in µm, using classical computer vision only,
on an 8 GB laptop.

### The pipeline

Twelve steps in one notebook, streaming one slice at a time from disk:

- **Alignment.** Two independent shift estimates per slice pair: Sobel edges with phase correlation, and ORB
  features with RANSAC. They are combined, the summed path is split into a slow trend and a fast jitter, and each
  slice is refined against a 7-slice median template (AMST).
- **Find the sample.** The substrate edge and the film's top surface are tracked slice by slice, so the protective
  layer and the substrate can be cut away.
- **Grains.** The aligned *original* gray values (not the contrast-enhanced display copy) are normalised per slice
  and split into a bright, likely W-rich phase and a dark, likely Cu-rich phase. Each phase is then cut into grains
  with a 3D distance-transform watershed that uses the true voxel size: 6.1 × 7.7 × 20 nm.
- **Output.** A per-grain table, a 3D grain map readable in Fiji, DREAM3D, Avizo or ParaView, and a single-file
  WebGL2 viewer with three linked views: the original slices, the 3D reconstruction and the grains.

<div class="row justify-content-sm-center mt-4">
  <div class="col-sm-12 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/autoscopy_views.jpg" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  The viewer, cut 1.7 µm from the top. Left: the slices as acquired, still jittered. Middle: aligned, sample only. Right: the same block cut into 5,664 grains.
</div>

### Results

- **Jitter between neighbouring slices: 9.31 → 0.44 px in X, 2.64 → 0.56 px in Y.** Rotation is at noise level
  (median −0.006°), so it is left alone.
- **Checked on a measure the alignment never optimised:** neighbouring slices correlate 0.817 before and 0.932
  after; the share of voxels in the same phase as in the next slice rises from 83.3% to 89.9%.
- **5,664 grains**, median equivalent sphere diameter **0.130 µm** (10–90%: 0.074–0.257 µm). The bright phase is
  56% of the film, the dark phase 44%.
- **5.4 minutes and 1.7 GB of RAM** on an 8 GB laptop. The same notebook also runs in Google Colab, reading the slices
  from Google Drive.

### Two decisions that mattered

**Correct the jitter, keep the trend.** Adding up pairwise shifts drifts: the summed vertical position wandered
about 210 px while the physical substrate edge stayed within about 20 px. That drift is estimation bias, not motion.
Removing only the fast jitter, and leaving the slow trend to the instrument's own drift correction, keeps the film flat.

**No smoothing across slices.** Smoothing over a single slice (20 nm) made grains look 35% longer along the slicing
direction than across it, with a median Z/X size ratio of 1.35. Smoothing within each slice only gives 1.06, which is
what a film that looks the same in every in-plane direction should give. Grain size barely moved: 0.134 vs 0.130 µm.

<div class="row justify-content-sm-center mt-4">
  <div class="col-sm-12 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/autoscopy_sizes.jpg" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Left: grain size for the 5,034 grains not cut by the edge of the data. Right: each grain's extent along X against its extent along the slicing direction; the cloud sits on the diagonal.
</div>

### What a grain means here

A grain is a region of one phase, separated from its neighbours by the other phase or by a narrow neck. Two touching
grains of the same phase and the same brightness stay one grain: the images alone cannot separate crystals that only
differ in orientation. That needs EBSD, or a boundary-based method on images with orientation contrast, which is
also what a single-phase material would need. Both are next, together with a second dataset to show the pipeline is
not tuned to this one film.

*Python · NumPy · SciPy · scikit-image · tifffile · WebGL2 · Google Colab*
