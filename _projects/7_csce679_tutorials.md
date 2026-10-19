---
layout: project
title: CSCE 679 Tutorials
description: Hans Rosling's 200 years in 4 minutes rebuilt in Tableau as a linked dashboard, and D3.js basics on Observable ending with a scatter plot of 801 Pokémon.
img: assets/img/projects/csce679_card.jpg
importance: 7
category: visualization and software
status: Coursework · CSCE 679, Fall 2026
frontend: Tableau Public workbook and D3.js notebooks on Observable.
stack: [Tableau, D3.js, Observable, JavaScript]
---

Tutorial work from CSCE 679 Data Visualization at Texas A&M (Fall 2026).

### Tableau: 200 years in 4 minutes

This tutorial reimplements Hans Rosling's Gapminder bubble chart in Tableau Public.

- **Encoding:** income on a log x-axis (ticks at 400, 4,000 and 40,000), life expectancy on y (20–80), bubble size for population, and color for world region. There is one bubble per country.
- **Year filter:** a single-value slider to step through 1800–2040.
- **Map:** a second sheet colors the world by life expectancy.
- **Dashboard:** links the two sheets. The year filter drives both, and clicking a country on the map narrows the bubble chart to it.

<div class="row justify-content-sm-center mt-4">
  <div class="col-sm-12 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/csce679_tableau_dashboard.jpg" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  The dashboard in 1920: bubbles by income and life expectancy, and the life expectancy map that filters them.
</div>

### D3.js on Observable

The course notebook covers JavaScript on Observable (arrays, objects, loops, functions, callbacks) and D3.js (SVG, scales, axes, selections). I completed its 10 TODO exercises, from scales and diverging color legends to a full scatter plot.

The last exercise plots 801 Pokémon:

- **Position:** t-SNE coordinates, so similar base stats sit close together.
- **Color:** primary type.
- **Radius:** base total.
- **Black ring:** legendary.

<div class="row justify-content-sm-center mt-3">
  <div class="col-sm-12 mt-3 mt-md-0">
    {% include figure.liquid loading="lazy" path="assets/img/projects/csce679_d3_pokemon.jpg" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Pokémon base stats in D3: the large, high-base-total Pokémon and most legendaries (black rings) cluster in the upper right.
</div>

- **Live Tableau dashboard:** [Hans Rosling 200 Years in 4 Minutes](https://public.tableau.com/app/profile/hendro.setyawab/viz/HansRosling200Yearsin4Minutes-HendroSetyawan/Dashboard1)
- **Source and workbook:** [github.com/hendrosetyawan/csce679-tutorials](https://github.com/hendrosetyawan/csce679-tutorials)

### Also from the course: Hong Kong temperature heatmaps

Assignment 1 is a D3.js v7 heatmap of Hong Kong temperatures. Level 1 is a year-by-month matrix for 1997–2017 coloured by monthly maximum, and clicking any cell switches it to the monthly minimum. Level 2 covers 2008–2017 and puts a small line chart of daily maximum and minimum inside every cell. Both have a hover tooltip and a 0–40 °C legend.

- **Live demo:** [Level 1 and Level 2](https://hendrosetyawan.github.io/CSCE-679-Data-Visualization-Assignment1/)
- **Source:** [github.com/hendrosetyawan/CSCE-679-Data-Visualization-Assignment1](https://github.com/hendrosetyawan/CSCE-679-Data-Visualization-Assignment1)

*Tableau · D3.js · Observable · JavaScript*
