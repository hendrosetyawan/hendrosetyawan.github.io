---
layout: page
title: X-GridAgent + DistiLLM
description: Distilling a multi-agent LLM system for power-grid analysis into a model small enough to run inside the utility.
importance: 3
category: machine learning
---

Texas A&M, January–May 2026. This project combines two published methods; both are credited below, and neither is my work.

### The two pieces

**X-GridAgent** — Wen & Chen, [arXiv:2512.20789](https://arxiv.org/abs/2512.20789). An LLM-powered agentic system that answers power-system questions posed in plain language, built as a three-layer hierarchy of planning, coordination, and action layers, with schema-adaptive hybrid RAG for retrieval over large structured grid datasets.

**DistiLLM** — Ko, Kim, Chen & Yun (KAIST AI and Microsoft), ICML. A distillation recipe for autoregressive language models built on two ideas: *skew KLD*, which gives a smaller gradient norm and more stable optimisation than plain KL divergence, and an *adaptive off-policy* scheme with a replay buffer that fixes the sample inefficiency of student-generated output.

### What I did with them

Applied DistiLLM's on-policy distillation to the X-GridAgent pipeline, compressing a multi-agent GPT-class system into a **locally served 1B-parameter model** that holds near-parity accuracy on power-flow, optimal power flow, and contingency queries at a fraction of the inference cost.

The orchestration layer runs retrieval, SQL-generation, and validation agents over structured grid datasets through MCP tool servers and schema-adaptive RAG, with automated quality checks on every generated query before it reaches the database.

### Why the size matters

For a utility, the gap between calling a frontier API and running a small model on your own hardware is usually the gap between a system that ships and one that does not. Grid operational data rarely gets permission to leave the building. A distilled model that stays inside the security boundary is not a cost optimisation — it is the difference between deployable and not.

*Python · PyTorch · on-policy distillation · MCP · RAG · SQL*

<small>Repository is private; happy to walk through the work on request.</small>
