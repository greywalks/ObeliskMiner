#!/usr/bin/env python3
"""Build data/model_map.json: which model input cells each export array fills, in order.
The Total Resources sheets list upgrades in the same order as the game's export arrays,
so the mapping is row order. Skill-tree nodes with 'Level 1/2/3' rows collapse into one
node whose export value is the level reached.
Usage: python3 tools/export_map.py <calculator.xlsx> data/model_map.json
"""
import json, re, sys
from openpyxl import load_workbook

def numeric_rows(ws, col, r1, r2):
    out = []
    for row in ws.iter_rows(min_row=r1, max_row=r2, min_col=1, max_col=2, values_only=True):
        pass
    for r in range(r1, r2 + 1):
        v = ws[f'{col}{r}'].value
        if isinstance(v, (int, float)) and not isinstance(v, bool): out.append(r)
    return out

def main(src, dst):
    wb = load_workbook(src, data_only=True)
    m = {}
    def label(ws, r):
        for c in 'CDBEFG':
            v = ws[f'{c}{r}'].value
            if isinstance(v, str) and v.strip() and not v.startswith('='): return v.strip()
        return f'row {r}'
    def arr(key, sheet, col, r1, r2, target='A', limit=None):
        ws = wb[sheet]
        rows = numeric_rows(ws, col, r1, r2)
        if limit: rows = rows[:limit]
        m[key] = [{'cell': f'{sheet}!{target}{r}', 'label': label(ws, r), 'max': ws[f'{col}{r}'].value} for r in rows]
    arr('regular_upgrades_array', 'Upgrades', 'B', 4, 110)
    arr('contracts_array', 'Contracts', 'B', 5, 50)
    arr('workshop_array', 'Workshop', 'B', 4, 115)
    arr('challenge_upgrades_array', 'Challenge', 'B', 4, 60, limit=52)
    arr('stars_star_level_array', 'Stars', 'B', 28, 77)
    arr('pet_array', 'Pets', 'B', 4, 40)
    arr('pet_quest_array', 'Pets', 'B', 78, 110)
    arr('idols_array', 'Arch', 'B', 90, 155)
    # skill tree nodes: rows with a name in B and a boolean in A
    ws = wb['Skills']; nodes = []
    r = 3
    while r <= 161:
        a, b = ws[f'A{r}'].value, ws[f'B{r}'].value
        if isinstance(a, bool) and isinstance(b, str):
            mm = re.match(r'^(.*?)\s+Level\s+(\d+)$', b.strip())
            if mm and mm.group(2) == '1':
                base = mm.group(1); rows = [r]
                rr = r + 1
                while rr <= 161 and isinstance(ws[f'A{rr}'].value, bool) and isinstance(ws[f'B{rr}'].value, str) and ws[f'B{rr}'].value.strip().startswith(base + ' Level'):
                    rows.append(rr); rr += 1
                nodes.append({'name': base, 'rows': [f'Skills!A{x}' for x in rows]}); r = rr; continue
            nodes.append({'name': b.strip(), 'rows': [f'Skills!A{r}']})
        r += 1
    m['skill_tree_nodes_array'] = nodes
    # obelisk levels and world-4 quests: booleans in Obelisks sheet
    m['obelisk_level'] = [f'Obelisks!A{r}' for r in range(3, 78)]
    # fish cards: level 1..4 = owned (B), gilded (D), polychrome (F), infernal (H)
    def cards(rows): return [{'cell': f'Cards!A{r}', 'label': str(wb['Cards'][f'I{r}'].value).strip(), 'levels': [f'Cards!{c}{r}' for c in 'ACEG']} for r in rows]
    m['fishing_regular_card_array'] = cards(list(range(367, 391)) + list(range(393, 413)))
    m['fishing_legendary_card_levels_array'] = cards(range(415, 426))
    # labels for stars: the star name sits in column C two rows up in some layouts; fall back handled by label()
    m['world_4_quest_progress'] = [f'Obelisks!E{r}' for r in range(4, 34)]
    # every input cell of the model (blank numbers or booleans), labelled, for the manual editor
    model = json.load(open(dst.replace('model_map.json', 'model.json')))
    mapped = set()
    for k, v in m.items():
        for x in v: mapped.update(x['rows'] if isinstance(x, dict) and 'rows' in x else x['levels'] if isinstance(x, dict) and 'levels' in x else [x['cell'] if isinstance(x, dict) else x])
    from openpyxl.utils import column_index_from_string, get_column_letter
    inputs = []
    allcells = dict(model['cells']); allcells.update({k: {'v': None} for k in model.get('blanks', [])})
    for key, c in allcells.items():
        if 'f' in c: continue
        sheet, addr = key.split('!')
        if sheet in ('Statmath', 'Jason', 'calcs', 'Stats', 'Gains Calc'): continue
        if not (c['v'] is None or isinstance(c['v'], bool)): continue
        mm = re.match(r'([A-Z]+)(\d+)', addr); ci, ri = column_index_from_string(mm.group(1)), int(mm.group(2))
        ws = wb[sheet]; lab = None
        for d in [1, 2, 3, 4, -1, -2, -3]:
            if ci + d < 1: continue
            v = ws[f'{get_column_letter(ci + d)}{ri}'].value
            if isinstance(v, str) and v.strip() and not v.startswith('='): lab = v.strip(); break
        inputs.append({'cell': key, 'sheet': sheet, 'label': lab or addr, 'type': 'bool' if isinstance(c['v'], bool) else 'number', 'mapped': key in mapped, 'row': ri, 'col': ci})
    inputs.sort(key=lambda x: (x['sheet'], x['col'], x['row']))
    m['inputs'] = inputs
    with open(dst, 'w') as fh: json.dump(m, fh, indent=0)
    for k, v in m.items(): print(k, len(v))

if __name__ == '__main__': main(sys.argv[1], sys.argv[2])
