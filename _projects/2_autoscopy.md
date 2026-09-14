---
layout: page
title: AutoScopy
description: Generative AI reconstructing 3D metal microstructures from sparse diffraction data. M.S. capstone, ongoing.
importance: 2
category: machine learning
---

M.S. Data Science capstone at Texas A&M. **Ongoing since September 2026.**

Building diffusion-model and implicit-neural-representation pipelines to reconstruct 3D metal microstructures from sparse X-ray and electron diffraction data — HEDM, DCT, and EBSD — with the goal of reaching usable reconstructions from roughly **ten times fewer physical experiments**.

The engineering side is GPU-accelerated (CUDA) preprocessing and uncertainty-quantification workflows that feed crystal-plasticity simulations downstream. Getting the uncertainty right matters as much as the reconstruction: a confident wrong microstructure is worse than an honest uncertain one when a simulation consumes it.

*Python · PyTorch · CUDA · diffusion models · implicit neural representations*
