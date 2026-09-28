# Public_Frogspawn_Calculator

## Sheet: Main Calc

12 formulas

| Cell | Formula |
|---|---|
| B2 | `='Avg Base Rewards'!K2+'Avg Base Rewards'!K8+'Avg Base Rewards'!K9` |
| C2 | `==B2:B11 * (1 + 2 * 'Avg Base Rewards'!B28 / 100) * (1 + 9 * 'Avg Base Rewards'!B29 / 100)` |
| D2 | `==C2:C11 * 'Avg Base Rewards'!B31` |
| B3 | `='Avg Base Rewards'!K3+'Avg Base Rewards'!K10` |
| B4 | `='Avg Base Rewards'!K4` |
| B5 | `='Avg Base Rewards'!K5` |
| B6 | `='Avg Base Rewards'!K6+'Avg Base Rewards'!K12` |
| B7 | `='Avg Base Rewards'!K7` |
| B8 | `='Avg Base Rewards'!K11` |
| B9 | `='Avg Base Rewards'!K13` |
| B10 | `='Avg Base Rewards'!K14` |
| B11 | `='Avg Base Rewards'!K15` |

## Sheet: Avg Base Rewards

59 formulas

| Cell | Formula |
|---|---|
| B2 | `=75 * B20` |
| C2 | `==$B2:$B12*$B19` |
| D2 | `==$B2:$B12*$B19*$B22` |
| E2 | `==$B2:$B12*$B19*$B24` |
| F2 | `==$B2:$B12*$B19*$B22*$B24` |
| G2 | `==$B2:$B12*$B19*$B24*$B26` |
| H2 | `==$B2:$B12*$B19*$B22*$B24*$B26` |
| I2 | `==C2:C15 * C17 + D2:D15 * D17 + E2:E15 * E17 + F2:F15 * F17 + G2:G15 * G17 + H2:H15 * H17` |
| K2 | `=I2 * J2 / SUM(J$2:J$15)` |
| K3 | `=I3 * J3 / SUM(J$2:J$15)` |
| K4 | `=I4 * J4 / SUM(J$2:J$15)` |
| K5 | `=I5 * J5 / SUM(J$2:J$15)` |
| K6 | `=I6 * J6 / SUM(J$2:J$15)` |
| K7 | `=I7 * J7 / SUM(J$2:J$15)` |
| B8 | `=225 * B20` |
| K8 | `=I8 * J8 / SUM(J$2:J$15)` |
| B9 | `=2000 * B20` |
| K9 | `=I9 * J9 / SUM(J$2:J$15)` |
| K10 | `=I10 * J10 / SUM(J$2:J$15)` |
| K11 | `=I11 * J11 / SUM(J$2:J$15)` |
| K12 | `=I12 * J12 / SUM(J$2:J$15)` |
| C13 | `=MIN($B13 * $B$19, 3)` |
| D13 | `=MIN($B13 * $B$19 * $B$22, 3)` |
| E13 | `=MIN($B13 * $B$19 * $B$24, 6)` |
| F13 | `=MIN($B13 * $B$19 * $B$22 * $B$24, 6)` |
| G13 | `=MIN($B13 * $B$19 * $B$24 * $B$26, 9)` |
| H13 | `=MIN($B13 * $B$19 * $B$22 * $B$24 * $B$26, 9)` |
| K13 | `=I13 * J13 / SUM(J$2:J$15)` |
| C14 | `=MIN($B14 * $B$19, 3)` |
| D14 | `=MIN($B14 * $B$19 * $B$22, 3)` |
| E14 | `=MIN($B14 * $B$19 * $B$24, 3)` |
| F14 | `=MIN($B14 * $B$19 * $B$22 * $B$24, 3)` |
| G14 | `=MIN($B14 * $B$19 * $B$24 * $B$26, 6)` |
| H14 | `=MIN($B14 * $B$19 * $B$22 * $B$24 * $B$26, 6)` |
| K14 | `=I14 * J14 / SUM(J$2:J$15)` |
| C15 | `=MIN($B15 * $B$19, 3)` |
| D15 | `=MIN($B15 * $B$19 * $B$22, 3)` |
| E15 | `=MIN($B15 * $B$19 * $B$24, 3)` |
| F15 | `=MIN($B15 * $B$19 * $B$22 * $B$24, 3)` |
| G15 | `=MIN($B15 * $B$19 * $B$24 * $B$26, 3)` |
| H15 | `=MIN($B15 * $B$19 * $B$22 * $B$24 * $B$26, 3)` |
| K15 | `=I15 * J15 / SUM(J$2:J$15)` |
| C17 | `=(1 - $B21 / 100) * (1 - $B23 / 100)` |
| D17 | `=($B21 / 100) * (1 - $B23 / 100)` |
| E17 | `=(1 - $B21 / 100) * ($B23 / 100) * (1 - $B25 / 100)` |
| F17 | `=($B21 / 100) * ($B23 / 100) * (1 - $B25 / 100)` |
| G17 | `=(1 - $B21 / 100) * ($B23 / 100) * ($B25 / 100)` |
| H17 | `=($B21 / 100) * ($B23 / 100) * ($B25 / 100)` |
| B19 | `=IFERROR(VLOOKUP("lootfrog_loot_multi", EXPORTSTATS!B:C, 2, FALSE), "1.0")` |
| B20 | `='Main Calc'!B16` |
| B21 | `=IFERROR(VLOOKUP("lootfrog_golden_chance", EXPORTSTATS!B:C, 2, FALSE), "0.0")` |
| B22 | `=IFERROR(VLOOKUP("lootfrog_golden_multi", EXPORTSTATS!B:C, 2, FALSE), "1.0")` |
| B23 | `=IFERROR(VLOOKUP("lootfrog_big_chance", EXPORTSTATS!B:C, 2, FALSE), "0.0")` |
| B24 | `=IFERROR(VLOOKUP("lootfrog_big_multi", EXPORTSTATS!B:C, 2, FALSE), "1.0")` |
| B25 | `=IFERROR(VLOOKUP("lootfrog_massive_chance", EXPORTSTATS!B:C, 2, FALSE), "0.0")` |
| B26 | `=IFERROR(VLOOKUP("lootfrog_massive_multi", EXPORTSTATS!B:C, 2, FALSE), "1.0")` |
| B28 | `=IFERROR(VLOOKUP("lootfrog_triple_spawn_chance", EXPORTSTATS!B:C, 2, FALSE), "0.0")` |
| B29 | `=IFERROR(VLOOKUP("lootfrog_10x_spawn_chance", EXPORTSTATS!B:C, 2, FALSE), "0.0")` |
| B31 | `=IFERROR(VLOOKUP("lootfrog_capacity", EXPORTSTATS!B:C, 2, FALSE), "5.0")` |

## Sheet: EXPORTSTATS

3 formulas

| Cell | Formula |
|---|---|
| B2 | `=ARRAYFORMULA(REGEXEXTRACT(A2:A1000, "[0-9,a-z,_]+"))` *(Sheets-only)* |
| C2 | `=ARRAYFORMULA(REGEXEXTRACT(A2:A1000, "(?:\d*\.\d*)\|(?:true)\|(?:false)"))` *(Sheets-only)* |
| F6 | `=VLOOKUP("drone_count", EXPORTSTATS!B:C, 2, FALSE)` |
