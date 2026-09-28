#!/usr/bin/env python3
"""Inline CSS, JS and data into one self-contained dist/index.html.
Useful for sharing a single file or hosting somewhere that only takes one file.
Usage: python3 tools/build_single.py
"""
import json, os, re
root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
html = open(os.path.join(root, 'index.html')).read()
css = open(os.path.join(root, 'css/app.css')).read()
html = html.replace('<link rel="stylesheet" href="css/app.css">', '<style>\n' + css + '\n</style>')
bombs = json.load(open(os.path.join(root, 'data/bombs.json')))
data_js = 'window.OM = window.OM || {}; window.OM.data = ' + json.dumps({'bombs': bombs['bombs']}) + ';'
scripts = [data_js]
for m in re.finditer(r'<script src="(js/[^"]+)"></script>', html):
    scripts.append(open(os.path.join(root, m.group(1))).read())
html = re.sub(r'(<script src="js/[^"]+"></script>\s*)+', '<script>\n' + '\n'.join(scripts) + '\n</script>\n', html)
os.makedirs(os.path.join(root, 'dist'), exist_ok=True)
open(os.path.join(root, 'dist/index.html'), 'w').write(html)
print('wrote dist/index.html', len(html), 'bytes')
