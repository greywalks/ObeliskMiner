# Trans_vs_Bop_effectiveness

## Sheet: Tabellenblatt1

13 formulas

| Cell | Formula |
|---|---|
| B5 | `=100/(100-B3)` |
| C5 | `=1+ MIN(1,C3/100)*(C4-1)` |
| D5 | `=1+ MIN(1,D3/100)*(D4-1)` |
| E5 | `=1+ MIN(1,E3/100)*(E4-1)` |
| F5 | `=1+ MIN(1,F3/100)*(F4-1)` |
| G5 | `=1+ MIN(1,G3/100)*(G4-1)` |
| H5 | `=1+ MIN(1,H3/100)*(H4-1)` |
| I5 | `=B5*C5*D5*E5*F5*G5*H5` |
| J5 | `=I5/A5` |
| E7 | `=J5*A7` |
| C9 | `=1+MIN(1,B9/100)*(A7-1)` |
| E9 | `= J5*C9+A9*C9` |
| G9 | `=I5*(A7-C9)/(A9*C9)` |
