---
layout: page
title: X-GridAgent
description: Distilling a multi-agent LLM system into a local 1B-parameter model for power-flow and contingency analysis.
importance: 3
category: machine learning
---

Research at Texas A&M, January–May 2026, extending X-GridAgent (Wen & Chen, 2025).

Compressed a multi-agent GPT-class pipeline into a **locally served 1B-parameter model** via on-policy distillation, holding near-parity accuracy on power-flow, optimal power flow (OPF), and contingency queries at a fraction of the inference cost. For a utility, the difference between calling a frontier API and running a small model on your own hardware is often the difference between a system that ships and one that does not — grid operational data rarely gets to leave the building.

The orchestration layer ran retrieval, SQL-generation, and validation agents over structured grid datasets through MCP tool servers and schema-adaptive RAG, with automated quality checks on every generated query before it touched the database.

*Python · PyTorch · on-policy distillation · MCP · RAG · SQL*

<small>Repository is private; happy to walk through the work on request.</small>
