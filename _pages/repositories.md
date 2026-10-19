---
layout: page
permalink: /repositories/
title: repositories
description: The code behind the projects. Python carries the data and models; JavaScript is the interactive front end on top.
nav: true
nav_order: 4
---

{% assign items = site.data.portfolio %}

<div class="stack-panel">
  <div class="stack-row">
    <span class="stack-k">Python</span>
    <span class="stack-v">
      <span class="chip chip--py">pandas</span>
      <span class="chip chip--py">NumPy</span>
      <span class="chip chip--py">SciPy</span>
      <span class="chip chip--py">scikit-learn</span>
      <span class="chip chip--py">LightGBM</span>
      <span class="chip chip--py">PyTorch</span>
      <span class="chip chip--py">scikit-image</span>
      <span class="chip chip--py">FastAPI</span>
      <span class="chip chip--py">pytest</span>
    </span>
  </div>
  <div class="stack-row">
    <span class="stack-k">Front ends</span>
    <span class="stack-v">
      <span class="chip">D3.js</span>
      <span class="chip">three.js</span>
      <span class="chip">React</span>
      <span class="chip">Tableau</span>
    </span>
  </div>
  <p class="stack-note">
    GitHub's language bar counts bytes, so the JavaScript, CSS and HTML bundled with each dashboard outweighs the Python in several repositories.
    The Python is where the data work happens: cleaning, joining, modelling and exporting the tables the dashboards read.
    Each card below says what the Python does.
  </p>
</div>

{% assign groups = "python|Python pipelines and models,viz|Visualization and open source,site|This site" | split: "," %}
{% for g in groups %}
{% assign gparts = g | split: "|" %}
{% assign gitems = items | where: "group", gparts[0] %}
<h3 class="repo-group">{{ gparts[1] }}</h3>
<div class="repo-list">
  {% for p in gitems %}
  <div class="repo-card{% unless p.repo or p.group == 'site' %} repo-card--private{% endunless %}" id="{{ p.id }}">
    <h4>
      {% if p.repo %}<a href="https://github.com/hendrosetyawan/{{ p.repo }}{% if p.repo_branch %}/tree/{{ p.repo_branch }}{% endif %}">{{ p.title }}</a>{% else %}{{ p.title }}{% endif %}
      {% unless p.repo %}<span class="repo-tag">private</span>{% endunless %}
    </h4>
    <div class="chips">
      {% for t in p.stack %}<span class="chip{% if t == 'Python' %} chip--py{% endif %}">{{ t }}</span>{% endfor %}
    </div>
    <p>{{ p.summary }}</p>
    {% if p.python %}<p class="repo-detail"><strong>Python:</strong> {{ p.python }}</p>{% endif %}
    {% if p.frontend %}<p class="repo-detail"><strong>Front end:</strong> {{ p.frontend }}</p>{% endif %}
    {% capture links %}{% if p.repo %}<a href="https://github.com/hendrosetyawan/{{ p.repo }}{% if p.repo_branch %}/tree/{{ p.repo_branch }}{% endif %}">Code</a>|{% endif %}{% if p.demo %}<a href="{{ p.demo.url }}">{{ p.demo.label }}</a>|{% endif %}{% if p.project %}<a href="{{ p.project | relative_url }}">Write-up</a>|{% endif %}{% unless p.repo %}<span class="repo-note">code walkthrough on request</span>|{% endunless %}{% endcapture %}
    <p class="repo-links">{{ links | split: "|" | join: " · " }}</p>
  </div>
  {% endfor %}
</div>
{% endfor %}

<p class="mt-4">Everything public lives at <a href="https://github.com/hendrosetyawan">github.com/hendrosetyawan</a>. AutoScopy and X-GridAgent are private; happy to walk through either on request.</p>
