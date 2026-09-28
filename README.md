# Obelisk Miner Planner

A browser-based analysis and planning tool for **Idle Obelisk Miner**. Paste your
EXPORTSTATS JSON and get an overview of where your stats stand, what is being
wasted, how fast you are growing, and how long things will take.

Everything runs in the browser. No server, no accounts, no build step. Snapshots
are kept in `localStorage`; use the backup button on the Import page to keep a copy.

## Run it

- **GitHub Pages:** Settings → Pages → deploy from `main`, root folder. The site is `index.html`.
- **Locally:** any static server, e.g. `python3 -m http.server` then open `http://localhost:8000`.
  (Opening `index.html` directly from disk works too, except the bomb data file cannot be
  fetched over `file://`; use `dist/index.html` for that.)
- **Single file:** `python3 tools/build_single.py` writes `dist/index.html` with CSS, JS and data inlined.

## What it does today (phase 1)

| Section | What you get |
|---|---|
| Import | Paste or drop the export, set the time it was taken, save it as a snapshot. Back up / restore snapshots as a file. |
| Overview | Key numbers, pickaxe and bomb crit chains with expected multiplier, chances over 100% (likely wasted), chances close to cap, buff timers running low, drones ranked by fuel grade with unequipped-but-better ones highlighted. |
| Bombs | Recharge time per bomb from base cooldown ÷ recharge speed, optional game speed and extra multiplier, and a time-to-fill calculator you can calibrate with an observed refresh time. |
| Growth | Pick two snapshots and see every stat that changed, per-day rate and daily growth %, plus time-to-target projections under linear and exponential trends. |
| All stats | Every exported stat, grouped and searchable, with arrays expanded. |

## Project layout

```
index.html          page shell
css/app.css         styles
js/util.js          formatting + DOM helpers
js/store.js         snapshot storage (localStorage)
js/parse.js         export parsing, stat classification, analysis, growth math
js/views.js         one render function per section
js/app.js           routing and state
data/bombs.json     bomb base cooldowns (from the community Total Resources calculator)
docs/formulas/      every formula extracted from the community spreadsheets
tools/              extract_formulas.py, build_single.py
```

## Formula reference

`docs/formulas/` contains every formula from the community calculators (Total Resources
v7.2, Best Floor to Farm 3.3.4, the Gem Calculator, Let's Go Fishing, Contract Damage,
Frogspawn, Frogger, Misc Card, Best Star Floors, Trans vs BoP, vein income), one Markdown
file per workbook, with Google-Sheets-only formulas unwrapped. Regenerate with:

```
pip install openpyxl
python3 tools/extract_formulas.py <folder-with-xlsx> docs/formulas
```

## Roadmap

1. ~~JSON import, snapshots, overview, bombs, growth~~ (done)
2. Port the small calculators: contract expected points and prestige percentile, Transmuter vs
   Bomb of Plenty bars per ore, vein income, Frogger gem rate
3. Best floor to farm (ores per floor, void, veins) from Best Floor to Farm 3.3.4
4. Full stat model from Total Resources v7.2 (Statmath: Base × Upgrades × Contracts × Prestige × Items)
   so upgrade purchases can be simulated and ranked by value per cost
5. Charts for snapshot history

## Credits

Base values and formulas come from community spreadsheets and the wiki at
shminer.miraheze.org. Idle Obelisk Miner is by Checkbox Entertainment; this is a fan
project with no affiliation.
