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

## What it does today (phases 1 to 4)

| Section | What you get |
|---|---|
| Import | Paste or drop the export, set the time it was taken, save it as a snapshot. Back up / restore snapshots as a file. |
| Overview | Key numbers, pickaxe and bomb crit chains with expected multiplier, chances over 100% (likely wasted), chances close to cap, buff timers running low, drones ranked by fuel grade with unequipped-but-better ones highlighted. |
| Bombs | Recharge time per bomb from base cooldown ÷ recharge speed, optional game speed and extra multiplier, and a time-to-fill calculator you can calibrate with an observed refresh time. |
| Growth | Pick two snapshots and see every stat that changed, per-day rate and daily growth %, plus time-to-target projections under linear and exponential trends. |
| All stats | Every exported stat, grouped and searchable, with arrays expanded. |
| Contracts | Expected points per contract with variance and prestige percentile, points and contracts needed to max each contract (per world), and pickaxe damage with more contracts. |
| Transmuter vs BoP | Bars per ore from each bomb given your craft multiplier chances, plus the break-even bar cost. |
| Veins | Veins per floor and per hour by rarity, with and without the Veinmorpher bomb. |
| Frogger | Net gems per hour from a fuelled Frogger suit at every grade, with the break-even grade. |
| Lootfrogs | Average loot per frog, per spawn and per full-capacity spawn. |
| Card shards | Hours per shard for every misc card at your current rates. |
| Best floor | Ores or veins per hour on every floor with and without void portals, the best floors ranked, and whether the Void drone is worth running. |
| Stat model | The Total Resources calculator's full stat model (116 stats × 21 sources) evaluated in the browser. Checks itself against your export, breaks any stat down by source, ranks which next level moves a target stat most, and lets you enter the inputs the export lacks (artifacts, ore cards, bundles, statues). |

## Project layout

```
index.html          page shell
css/app.css         styles
js/util.js          formatting + DOM helpers
js/store.js         snapshot storage (localStorage)
js/parse.js         export parsing, stat classification, analysis, growth math
js/calcs.js         ported calculators (pure functions)
js/floors.js        best floor to farm model (ores and veins)
js/engine.js        tiny spreadsheet formula engine (IF/SUM/PRODUCT/MIN/MAX/COUNTIF/INDEX/FLOOR/CEILING/ROUND/GEOSUM)
js/model.js         stat model: export-to-input mapping, validation, breakdown, next-level advisor
js/views.js         core sections
js/views_calcs.js   calculator sections
js/views_floors.js  best floor section
js/views_model.js   stat model section
js/app.js           routing and state
data/bombs.json     bomb base cooldowns (from the community Total Resources calculator)
data/contracts.json contract list, cost curves and level caps (from Contract & Damage Calc 2.0)
data/floors.json    ore-per-floor fractions, vein zones, bar costs, speed and cap tables (from Best Floor To Farm 3.3.4)
data/model.json     the stat model: 3,251 formulas and their constants, extracted from Total Resources v7.2 (tools/export_model.py)
data/model_map.json which model input each export array fills, plus every labelled input cell (tools/export_map.py)
docs/formulas/      every formula extracted from the community spreadsheets
tools/              extract_formulas.py, export_model.py, export_map.py, build_single.py, test.js (node tools/test.js)
```

## How the stat model works

`tools/export_model.py` starts from the Statmath sheet's Total column and follows every cell reference
transitively, dumping 3,251 formulas into `data/model.json`. `js/engine.js` parses and evaluates them
lazily in the browser. `tools/export_map.py` records which input cells each export array fills (the
sheets list upgrades in the same order as the game's arrays) and labels every remaining input so it can
be entered by hand. The Stat model page compares each computed stat with the exported value, so a
mismatch points straight at a missing input. Re-run both tools when a new version of the calculator
comes out.

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
2. ~~Port the small calculators: contracts, Transmuter vs BoP, veins, Frogger, lootfrogs, card shards~~ (done, tests in tools/test.js)
3. ~~Best floor to farm (ores per floor, void, veins) from Best Floor to Farm 3.3.4~~ (done)
4. ~~Full stat model from Total Resources v7.2~~ (done: engine, extraction, export mapping for upgrades,
   contracts, workshop, challenges, stars, pets, idols, skill tree, obelisks, world quests, fish cards)
   - still to do: map more export arrays (fishing upgrades, relics, star upgrades, drone suits, gem upgrades),
     add upgrade costs so the advisor can rank by value per resource, and re-extract when the sheet updates
5. Charts for snapshot history

## Credits

Base values and formulas come from community spreadsheets and the wiki at
shminer.miraheze.org. Idle Obelisk Miner is by Checkbox Entertainment; this is a fan
project with no affiliation.
