---
layout: project
title: Moneyball MLS
description: A machine-learning scouting board for all 30 Major League Soccer clubs. Each player gets a role, a skill shape, comparable players, ratings for this season and the next three, and a contract-value tag.
img: assets/img/projects/moneyball_mls_card.jpg
importance: 6
category: machine learning
status: Live app · 2026 season data
python_role: The data pull and build, one ridge projection per horizon, a LightGBM contract-value model and the export the web app reads.
frontend: D3.js scouting board on Firebase Hosting.
stack: [Python, pandas, scikit-learn, LightGBM, D3.js, Firebase]
---

A scouting board built for soccer scouts rather than analysts. Every MLS player with at least 300 minutes in 2026 (637 players across 30 clubs, including San Diego FC) gets the following, on one card and one profile:

- a playing role
- a skill-shape radar
- the players he plays like
- exact 0–100 ratings for this season and the next three
- whether his contract is a bargain

### The problem

Front offices drown in event data, but scouts decide whom to watch. They need to know at a glance what a player does well, who he resembles, where he is heading and whether he is worth his salary. Spreadsheets of per-96 metrics don't answer that.

### What it shows

- **Ratings from 0 to 100.** A rating is the share of players in the same position group this season that the player beats; 89 means better than 89% of attackers. Each skill gets one, from finishing and chance creation to defending and discipline, along with the overall rating.
- **This season and the next three.** Each card shows the 2026 rating and projections for 2027, 2028 and 2029, each with an 80% likely range.
- **Contract value.** The player's pay is set against what MLS usually pays for that production, giving a Bargain, Fair or Premium tag. A ★ Moneyball pick is a bargain projected to stay at least solid.
- **Scouting views.** Filters work by tapping a pitch, alongside a value map of rating vs pay, each club's most-used XI on a pitch, and a shortlist that overlays up to three skill shapes.

<div class="row justify-content-sm-center mt-4">
  <div class="col-sm-12 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/moneyball_mls_board.jpg" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Scout board: role, skill shape, top skills with exact ratings, the 2026 rating plus three projected seasons with ranges, contract tag and sample size.
</div>

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="lazy" path="assets/img/projects/moneyball_mls_profile.jpg" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="lazy" path="assets/img/projects/moneyball_mls_timeline.jpg" class="img-fluid rounded z-depth-1" %}
    {% include figure.liquid loading="lazy" path="assets/img/projects/moneyball_mls_value.jpg" class="img-fluid rounded z-depth-1 mt-3" %}
  </div>
</div>
<div class="caption">
  Player profile. Left: a plain-English scouting summary, the skill shape and exact skill ratings. Right: the last five seasons and the next three, with ranges that widen further out; where he adds value on the pitch; and pay vs what his production usually earns.
</div>

### The models

- **Roles:** k-means within each position on a 13-feature style profile, which gives 16 roles. Examples are ball-playing centre-back vs stopper, and poacher vs link-up striker.
- **Plays like:** cosine similarity on the same profile, searching every MLS season since 2015.
- **Next three seasons:** one ridge regression per horizon, using several seasons of goals added (weighted by minutes and pulled toward the position average) plus age and style.
  - It is trained on MLS 2015–2025.
  - Each model is tested only on seasons it has not seen. LightGBM quantile models and simple shrinkage were tried and did worse.

| Projection | Model error | "Same as last season" | "Shrink to average" | Rank corr. | 80% range hit |
|---|---|---|---|---|---|
| 1 season ahead | **0.0416** | 0.0512 | 0.0430 | 0.43 | 80% |
| 2 seasons ahead | **0.0431** | 0.0528 | 0.0441 | 0.38 | 80% |
| 3 seasons ahead | **0.0456** | 0.0574 | 0.0470 | 0.22 | 80% |

- **Contract value:** LightGBM predicts log guaranteed pay from production, age and position. It uses out-of-fold predictions grouped by player, trained on 3,783 player-seasons from 2021–2026, and scores R² 0.52 on log pay. In the 2026 season it finds 41 bargains.

### Data

The [American Soccer Analysis](https://www.americansocceranalysis.com/) public API supplies expected goals, expected passing and goals added for MLS 2015–2026. Salaries come from the MLS Players Association releases. Event data cannot see off-ball work, injuries or character, so the board helps decide whom to watch, not whom to sign.

- **Live app:** [moneyball-mls.web.app](https://moneyball-mls.web.app)
- **Source code:** [github.com/hendrosetyawan/moneyball_MLS](https://github.com/hendrosetyawan/moneyball_MLS)

*Python · pandas · scikit-learn · LightGBM · D3.js · Firebase Hosting*
