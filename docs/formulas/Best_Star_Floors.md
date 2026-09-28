# Best_Star_Floors

## Sheet: Stars and Floors

6 formulas

| Cell | Formula |
|---|---|
| A23 | `==UNIQUE(Calculations!E22:E123)` |
| B23 | `=IF(ISNUMBER(A23), JOIN(", ",filter(Calculations!$D$22:$D$123,Calculations!$E$22:$E$123=A23)),"")` *(Sheets-only)* |
| B24 | `=IF(ISNUMBER(A24), JOIN(", ",filter(Calculations!$D$22:$D$123,Calculations!$E$22:$E$123=A24)),"")` *(Sheets-only)* |
| B25 | `=IF(ISNUMBER(A25), JOIN(", ",filter(Calculations!$D$22:$D$123,Calculations!$E$22:$E$123=A25)),"")` *(Sheets-only)* |
| B26 | `=IF(ISNUMBER(A26), JOIN(", ",filter(Calculations!$D$22:$D$123,Calculations!$E$22:$E$123=A26)),"")` *(Sheets-only)* |
| B27 | `=IF(ISNUMBER(A27), JOIN(", ",filter(Calculations!$D$22:$D$123,Calculations!$E$22:$E$123=A27)),"")` *(Sheets-only)* |

## Sheet: Zones

600 formulas

| Cell | Formula |
|---|---|
| B2 | `=IFERROR(VLOOKUP($G2,Calculations!H$23:$M$41,6,false),"")` |
| C2 | `=IFERROR(VLOOKUP($G2,Calculations!I$23:$M$41,5,false),"")` |
| D2 | `=IFERROR(VLOOKUP($G2,Calculations!J$23:$M$41,4,false),"")` |
| E2 | `=IFERROR(VLOOKUP($G2,Calculations!K$23:$M$41,3,false),"")` |
| F2 | `=IFERROR(VLOOKUP($G2,Calculations!L$23:$M$41,2,false),"")` |
| I2 | `=IFERROR(VLOOKUP($H2,Calculations!H$23:$M$41,6,false),"")` |
| J2 | `=IFERROR(VLOOKUP($H2,Calculations!I$23:$M$41,5,false),"")` |
| K2 | `=IFERROR(VLOOKUP($H2,Calculations!J$23:$M$41,4,false),"")` |
| L2 | `=IFERROR(VLOOKUP($H2,Calculations!K$23:$M$41,3,false),"")` |
| M2 | `=IFERROR(VLOOKUP($H2,Calculations!L$23:$M$41,2,false),"")` |
| B3 | `=IFERROR(VLOOKUP($G3,Calculations!H$23:$M$41,6,false),"")` |
| C3 | `=IFERROR(VLOOKUP($G3,Calculations!I$23:$M$41,5,false),"")` |
| D3 | `=IFERROR(VLOOKUP($G3,Calculations!J$23:$M$41,4,false),"")` |
| E3 | `=IFERROR(VLOOKUP($G3,Calculations!K$23:$M$41,3,false),"")` |
| F3 | `=IFERROR(VLOOKUP($G3,Calculations!L$23:$M$41,2,false),"")` |
| I3 | `=IFERROR(VLOOKUP($H3,Calculations!H$23:$M$41,6,false),"")` |
| J3 | `=IFERROR(VLOOKUP($H3,Calculations!I$23:$M$41,5,false),"")` |
| K3 | `=IFERROR(VLOOKUP($H3,Calculations!J$23:$M$41,4,false),"")` |
| L3 | `=IFERROR(VLOOKUP($H3,Calculations!K$23:$M$41,3,false),"")` |
| M3 | `=IFERROR(VLOOKUP($H3,Calculations!L$23:$M$41,2,false),"")` |
| B4 | `=IFERROR(VLOOKUP($G4,Calculations!H$23:$M$41,6,false),"")` |
| C4 | `=IFERROR(VLOOKUP($G4,Calculations!I$23:$M$41,5,false),"")` |
| D4 | `=IFERROR(VLOOKUP($G4,Calculations!J$23:$M$41,4,false),"")` |
| E4 | `=IFERROR(VLOOKUP($G4,Calculations!K$23:$M$41,3,false),"")` |
| F4 | `=IFERROR(VLOOKUP($G4,Calculations!L$23:$M$41,2,false),"")` |
| I4 | `=IFERROR(VLOOKUP($H4,Calculations!H$23:$M$41,6,false),"")` |
| J4 | `=IFERROR(VLOOKUP($H4,Calculations!I$23:$M$41,5,false),"")` |
| K4 | `=IFERROR(VLOOKUP($H4,Calculations!J$23:$M$41,4,false),"")` |
| L4 | `=IFERROR(VLOOKUP($H4,Calculations!K$23:$M$41,3,false),"")` |
| M4 | `=IFERROR(VLOOKUP($H4,Calculations!L$23:$M$41,2,false),"")` |
| B5 | `=IFERROR(VLOOKUP($G5,Calculations!H$23:$M$41,6,false),"")` |
| C5 | `=IFERROR(VLOOKUP($G5,Calculations!I$23:$M$41,5,false),"")` |
| D5 | `=IFERROR(VLOOKUP($G5,Calculations!J$23:$M$41,4,false),"")` |
| E5 | `=IFERROR(VLOOKUP($G5,Calculations!K$23:$M$41,3,false),"")` |
| F5 | `=IFERROR(VLOOKUP($G5,Calculations!L$23:$M$41,2,false),"")` |
| I5 | `=IFERROR(VLOOKUP($H5,Calculations!H$23:$M$41,6,false),"")` |
| J5 | `=IFERROR(VLOOKUP($H5,Calculations!I$23:$M$41,5,false),"")` |
| K5 | `=IFERROR(VLOOKUP($H5,Calculations!J$23:$M$41,4,false),"")` |
| L5 | `=IFERROR(VLOOKUP($H5,Calculations!K$23:$M$41,3,false),"")` |
| M5 | `=IFERROR(VLOOKUP($H5,Calculations!L$23:$M$41,2,false),"")` |
| B6 | `=IFERROR(VLOOKUP($G6,Calculations!H$23:$M$41,6,false),"")` |
| C6 | `=IFERROR(VLOOKUP($G6,Calculations!I$23:$M$41,5,false),"")` |
| D6 | `=IFERROR(VLOOKUP($G6,Calculations!J$23:$M$41,4,false),"")` |
| E6 | `=IFERROR(VLOOKUP($G6,Calculations!K$23:$M$41,3,false),"")` |
| F6 | `=IFERROR(VLOOKUP($G6,Calculations!L$23:$M$41,2,false),"")` |
| I6 | `=IFERROR(VLOOKUP($H6,Calculations!H$23:$M$41,6,false),"")` |
| J6 | `=IFERROR(VLOOKUP($H6,Calculations!I$23:$M$41,5,false),"")` |
| K6 | `=IFERROR(VLOOKUP($H6,Calculations!J$23:$M$41,4,false),"")` |
| L6 | `=IFERROR(VLOOKUP($H6,Calculations!K$23:$M$41,3,false),"")` |
| M6 | `=IFERROR(VLOOKUP($H6,Calculations!L$23:$M$41,2,false),"")` |
| B7 | `=IFERROR(VLOOKUP($G7,Calculations!H$23:$M$41,6,false),"")` |
| C7 | `=IFERROR(VLOOKUP($G7,Calculations!I$23:$M$41,5,false),"")` |
| D7 | `=IFERROR(VLOOKUP($G7,Calculations!J$23:$M$41,4,false),"")` |
| E7 | `=IFERROR(VLOOKUP($G7,Calculations!K$23:$M$41,3,false),"")` |
| F7 | `=IFERROR(VLOOKUP($G7,Calculations!L$23:$M$41,2,false),"")` |
| I7 | `=IFERROR(VLOOKUP($H7,Calculations!H$23:$M$41,6,false),"")` |
| J7 | `=IFERROR(VLOOKUP($H7,Calculations!I$23:$M$41,5,false),"")` |
| K7 | `=IFERROR(VLOOKUP($H7,Calculations!J$23:$M$41,4,false),"")` |
| L7 | `=IFERROR(VLOOKUP($H7,Calculations!K$23:$M$41,3,false),"")` |
| M7 | `=IFERROR(VLOOKUP($H7,Calculations!L$23:$M$41,2,false),"")` |
| B8 | `=IFERROR(VLOOKUP($G8,Calculations!H$23:$M$41,6,false),"")` |
| C8 | `=IFERROR(VLOOKUP($G8,Calculations!I$23:$M$41,5,false),"")` |
| D8 | `=IFERROR(VLOOKUP($G8,Calculations!J$23:$M$41,4,false),"")` |
| E8 | `=IFERROR(VLOOKUP($G8,Calculations!K$23:$M$41,3,false),"")` |
| F8 | `=IFERROR(VLOOKUP($G8,Calculations!L$23:$M$41,2,false),"")` |
| I8 | `=IFERROR(VLOOKUP($H8,Calculations!H$23:$M$41,6,false),"")` |
| J8 | `=IFERROR(VLOOKUP($H8,Calculations!I$23:$M$41,5,false),"")` |
| K8 | `=IFERROR(VLOOKUP($H8,Calculations!J$23:$M$41,4,false),"")` |
| L8 | `=IFERROR(VLOOKUP($H8,Calculations!K$23:$M$41,3,false),"")` |
| M8 | `=IFERROR(VLOOKUP($H8,Calculations!L$23:$M$41,2,false),"")` |
| B9 | `=IFERROR(VLOOKUP($G9,Calculations!H$23:$M$41,6,false),"")` |
| C9 | `=IFERROR(VLOOKUP($G9,Calculations!I$23:$M$41,5,false),"")` |
| D9 | `=IFERROR(VLOOKUP($G9,Calculations!J$23:$M$41,4,false),"")` |
| E9 | `=IFERROR(VLOOKUP($G9,Calculations!K$23:$M$41,3,false),"")` |
| F9 | `=IFERROR(VLOOKUP($G9,Calculations!L$23:$M$41,2,false),"")` |
| I9 | `=IFERROR(VLOOKUP($H9,Calculations!H$23:$M$41,6,false),"")` |
| J9 | `=IFERROR(VLOOKUP($H9,Calculations!I$23:$M$41,5,false),"")` |
| K9 | `=IFERROR(VLOOKUP($H9,Calculations!J$23:$M$41,4,false),"")` |
| L9 | `=IFERROR(VLOOKUP($H9,Calculations!K$23:$M$41,3,false),"")` |
| M9 | `=IFERROR(VLOOKUP($H9,Calculations!L$23:$M$41,2,false),"")` |
| B10 | `=IFERROR(VLOOKUP($G10,Calculations!H$23:$M$41,6,false),"")` |
| C10 | `=IFERROR(VLOOKUP($G10,Calculations!I$23:$M$41,5,false),"")` |
| D10 | `=IFERROR(VLOOKUP($G10,Calculations!J$23:$M$41,4,false),"")` |
| E10 | `=IFERROR(VLOOKUP($G10,Calculations!K$23:$M$41,3,false),"")` |
| F10 | `=IFERROR(VLOOKUP($G10,Calculations!L$23:$M$41,2,false),"")` |
| I10 | `=IFERROR(VLOOKUP($H10,Calculations!H$23:$M$41,6,false),"")` |
| J10 | `=IFERROR(VLOOKUP($H10,Calculations!I$23:$M$41,5,false),"")` |
| K10 | `=IFERROR(VLOOKUP($H10,Calculations!J$23:$M$41,4,false),"")` |
| L10 | `=IFERROR(VLOOKUP($H10,Calculations!K$23:$M$41,3,false),"")` |
| M10 | `=IFERROR(VLOOKUP($H10,Calculations!L$23:$M$41,2,false),"")` |
| B11 | `=IFERROR(VLOOKUP($G11,Calculations!H$23:$M$41,6,false),"")` |
| C11 | `=IFERROR(VLOOKUP($G11,Calculations!I$23:$M$41,5,false),"")` |
| D11 | `=IFERROR(VLOOKUP($G11,Calculations!J$23:$M$41,4,false),"")` |
| E11 | `=IFERROR(VLOOKUP($G11,Calculations!K$23:$M$41,3,false),"")` |
| F11 | `=IFERROR(VLOOKUP($G11,Calculations!L$23:$M$41,2,false),"")` |
| I11 | `=IFERROR(VLOOKUP($H11,Calculations!H$23:$M$41,6,false),"")` |
| J11 | `=IFERROR(VLOOKUP($H11,Calculations!I$23:$M$41,5,false),"")` |
| K11 | `=IFERROR(VLOOKUP($H11,Calculations!J$23:$M$41,4,false),"")` |
| L11 | `=IFERROR(VLOOKUP($H11,Calculations!K$23:$M$41,3,false),"")` |
| M11 | `=IFERROR(VLOOKUP($H11,Calculations!L$23:$M$41,2,false),"")` |
| B12 | `=IFERROR(VLOOKUP($G12,Calculations!H$23:$M$41,6,false),"")` |
| C12 | `=IFERROR(VLOOKUP($G12,Calculations!I$23:$M$41,5,false),"")` |
| D12 | `=IFERROR(VLOOKUP($G12,Calculations!J$23:$M$41,4,false),"")` |
| E12 | `=IFERROR(VLOOKUP($G12,Calculations!K$23:$M$41,3,false),"")` |
| F12 | `=IFERROR(VLOOKUP($G12,Calculations!L$23:$M$41,2,false),"")` |
| I12 | `=IFERROR(VLOOKUP($H12,Calculations!H$23:$M$41,6,false),"")` |
| J12 | `=IFERROR(VLOOKUP($H12,Calculations!I$23:$M$41,5,false),"")` |
| K12 | `=IFERROR(VLOOKUP($H12,Calculations!J$23:$M$41,4,false),"")` |
| L12 | `=IFERROR(VLOOKUP($H12,Calculations!K$23:$M$41,3,false),"")` |
| M12 | `=IFERROR(VLOOKUP($H12,Calculations!L$23:$M$41,2,false),"")` |
| B13 | `=IFERROR(VLOOKUP($G13,Calculations!H$23:$M$41,6,false),"")` |
| C13 | `=IFERROR(VLOOKUP($G13,Calculations!I$23:$M$41,5,false),"")` |
| D13 | `=IFERROR(VLOOKUP($G13,Calculations!J$23:$M$41,4,false),"")` |
| E13 | `=IFERROR(VLOOKUP($G13,Calculations!K$23:$M$41,3,false),"")` |
| F13 | `=IFERROR(VLOOKUP($G13,Calculations!L$23:$M$41,2,false),"")` |
| I13 | `=IFERROR(VLOOKUP($H13,Calculations!H$23:$M$41,6,false),"")` |
| J13 | `=IFERROR(VLOOKUP($H13,Calculations!I$23:$M$41,5,false),"")` |
| K13 | `=IFERROR(VLOOKUP($H13,Calculations!J$23:$M$41,4,false),"")` |
| L13 | `=IFERROR(VLOOKUP($H13,Calculations!K$23:$M$41,3,false),"")` |
| M13 | `=IFERROR(VLOOKUP($H13,Calculations!L$23:$M$41,2,false),"")` |
| B14 | `=IFERROR(VLOOKUP($G14,Calculations!H$23:$M$41,6,false),"")` |
| C14 | `=IFERROR(VLOOKUP($G14,Calculations!I$23:$M$41,5,false),"")` |
| D14 | `=IFERROR(VLOOKUP($G14,Calculations!J$23:$M$41,4,false),"")` |
| E14 | `=IFERROR(VLOOKUP($G14,Calculations!K$23:$M$41,3,false),"")` |
| F14 | `=IFERROR(VLOOKUP($G14,Calculations!L$23:$M$41,2,false),"")` |
| I14 | `=IFERROR(VLOOKUP($H14,Calculations!H$23:$M$41,6,false),"")` |
| J14 | `=IFERROR(VLOOKUP($H14,Calculations!I$23:$M$41,5,false),"")` |
| K14 | `=IFERROR(VLOOKUP($H14,Calculations!J$23:$M$41,4,false),"")` |
| L14 | `=IFERROR(VLOOKUP($H14,Calculations!K$23:$M$41,3,false),"")` |
| M14 | `=IFERROR(VLOOKUP($H14,Calculations!L$23:$M$41,2,false),"")` |
| B15 | `=IFERROR(VLOOKUP($G15,Calculations!H$23:$M$41,6,false),"")` |
| C15 | `=IFERROR(VLOOKUP($G15,Calculations!I$23:$M$41,5,false),"")` |
| D15 | `=IFERROR(VLOOKUP($G15,Calculations!J$23:$M$41,4,false),"")` |
| E15 | `=IFERROR(VLOOKUP($G15,Calculations!K$23:$M$41,3,false),"")` |
| F15 | `=IFERROR(VLOOKUP($G15,Calculations!L$23:$M$41,2,false),"")` |
| I15 | `=IFERROR(VLOOKUP($H15,Calculations!H$23:$M$41,6,false),"")` |
| J15 | `=IFERROR(VLOOKUP($H15,Calculations!I$23:$M$41,5,false),"")` |
| K15 | `=IFERROR(VLOOKUP($H15,Calculations!J$23:$M$41,4,false),"")` |
| L15 | `=IFERROR(VLOOKUP($H15,Calculations!K$23:$M$41,3,false),"")` |
| M15 | `=IFERROR(VLOOKUP($H15,Calculations!L$23:$M$41,2,false),"")` |
| B16 | `=IFERROR(VLOOKUP($G16,Calculations!H$23:$M$41,6,false),"")` |
| C16 | `=IFERROR(VLOOKUP($G16,Calculations!I$23:$M$41,5,false),"")` |
| D16 | `=IFERROR(VLOOKUP($G16,Calculations!J$23:$M$41,4,false),"")` |
| E16 | `=IFERROR(VLOOKUP($G16,Calculations!K$23:$M$41,3,false),"")` |
| F16 | `=IFERROR(VLOOKUP($G16,Calculations!L$23:$M$41,2,false),"")` |
| I16 | `=IFERROR(VLOOKUP($H16,Calculations!H$23:$M$41,6,false),"")` |
| J16 | `=IFERROR(VLOOKUP($H16,Calculations!I$23:$M$41,5,false),"")` |
| K16 | `=IFERROR(VLOOKUP($H16,Calculations!J$23:$M$41,4,false),"")` |
| L16 | `=IFERROR(VLOOKUP($H16,Calculations!K$23:$M$41,3,false),"")` |
| M16 | `=IFERROR(VLOOKUP($H16,Calculations!L$23:$M$41,2,false),"")` |
| B17 | `=IFERROR(VLOOKUP($G17,Calculations!H$23:$M$41,6,false),"")` |
| C17 | `=IFERROR(VLOOKUP($G17,Calculations!I$23:$M$41,5,false),"")` |
| D17 | `=IFERROR(VLOOKUP($G17,Calculations!J$23:$M$41,4,false),"")` |
| E17 | `=IFERROR(VLOOKUP($G17,Calculations!K$23:$M$41,3,false),"")` |
| F17 | `=IFERROR(VLOOKUP($G17,Calculations!L$23:$M$41,2,false),"")` |
| I17 | `=IFERROR(VLOOKUP($H17,Calculations!H$23:$M$41,6,false),"")` |
| J17 | `=IFERROR(VLOOKUP($H17,Calculations!I$23:$M$41,5,false),"")` |
| K17 | `=IFERROR(VLOOKUP($H17,Calculations!J$23:$M$41,4,false),"")` |
| L17 | `=IFERROR(VLOOKUP($H17,Calculations!K$23:$M$41,3,false),"")` |
| M17 | `=IFERROR(VLOOKUP($H17,Calculations!L$23:$M$41,2,false),"")` |
| B18 | `=IFERROR(VLOOKUP($G18,Calculations!H$23:$M$41,6,false),"")` |
| C18 | `=IFERROR(VLOOKUP($G18,Calculations!I$23:$M$41,5,false),"")` |
| D18 | `=IFERROR(VLOOKUP($G18,Calculations!J$23:$M$41,4,false),"")` |
| E18 | `=IFERROR(VLOOKUP($G18,Calculations!K$23:$M$41,3,false),"")` |
| F18 | `=IFERROR(VLOOKUP($G18,Calculations!L$23:$M$41,2,false),"")` |
| I18 | `=IFERROR(VLOOKUP($H18,Calculations!H$23:$M$41,6,false),"")` |
| J18 | `=IFERROR(VLOOKUP($H18,Calculations!I$23:$M$41,5,false),"")` |
| K18 | `=IFERROR(VLOOKUP($H18,Calculations!J$23:$M$41,4,false),"")` |
| L18 | `=IFERROR(VLOOKUP($H18,Calculations!K$23:$M$41,3,false),"")` |
| M18 | `=IFERROR(VLOOKUP($H18,Calculations!L$23:$M$41,2,false),"")` |
| B19 | `=IFERROR(VLOOKUP($G19,Calculations!H$23:$M$41,6,false),"")` |
| C19 | `=IFERROR(VLOOKUP($G19,Calculations!I$23:$M$41,5,false),"")` |
| D19 | `=IFERROR(VLOOKUP($G19,Calculations!J$23:$M$41,4,false),"")` |
| E19 | `=IFERROR(VLOOKUP($G19,Calculations!K$23:$M$41,3,false),"")` |
| F19 | `=IFERROR(VLOOKUP($G19,Calculations!L$23:$M$41,2,false),"")` |
| I19 | `=IFERROR(VLOOKUP($H19,Calculations!H$23:$M$41,6,false),"")` |
| J19 | `=IFERROR(VLOOKUP($H19,Calculations!I$23:$M$41,5,false),"")` |
| K19 | `=IFERROR(VLOOKUP($H19,Calculations!J$23:$M$41,4,false),"")` |
| L19 | `=IFERROR(VLOOKUP($H19,Calculations!K$23:$M$41,3,false),"")` |
| M19 | `=IFERROR(VLOOKUP($H19,Calculations!L$23:$M$41,2,false),"")` |
| B20 | `=IFERROR(VLOOKUP($G20,Calculations!H$23:$M$41,6,false),"")` |
| C20 | `=IFERROR(VLOOKUP($G20,Calculations!I$23:$M$41,5,false),"")` |
| D20 | `=IFERROR(VLOOKUP($G20,Calculations!J$23:$M$41,4,false),"")` |
| E20 | `=IFERROR(VLOOKUP($G20,Calculations!K$23:$M$41,3,false),"")` |
| F20 | `=IFERROR(VLOOKUP($G20,Calculations!L$23:$M$41,2,false),"")` |
| I20 | `=IFERROR(VLOOKUP($H20,Calculations!H$23:$M$41,6,false),"")` |
| J20 | `=IFERROR(VLOOKUP($H20,Calculations!I$23:$M$41,5,false),"")` |
| K20 | `=IFERROR(VLOOKUP($H20,Calculations!J$23:$M$41,4,false),"")` |
| L20 | `=IFERROR(VLOOKUP($H20,Calculations!K$23:$M$41,3,false),"")` |
| M20 | `=IFERROR(VLOOKUP($H20,Calculations!L$23:$M$41,2,false),"")` |
| B21 | `=IFERROR(VLOOKUP($G21,Calculations!H$23:$M$41,6,false),"")` |
| C21 | `=IFERROR(VLOOKUP($G21,Calculations!I$23:$M$41,5,false),"")` |
| D21 | `=IFERROR(VLOOKUP($G21,Calculations!J$23:$M$41,4,false),"")` |
| E21 | `=IFERROR(VLOOKUP($G21,Calculations!K$23:$M$41,3,false),"")` |
| F21 | `=IFERROR(VLOOKUP($G21,Calculations!L$23:$M$41,2,false),"")` |
| I21 | `=IFERROR(VLOOKUP($H21,Calculations!H$23:$M$41,6,false),"")` |
| J21 | `=IFERROR(VLOOKUP($H21,Calculations!I$23:$M$41,5,false),"")` |
| K21 | `=IFERROR(VLOOKUP($H21,Calculations!J$23:$M$41,4,false),"")` |
| L21 | `=IFERROR(VLOOKUP($H21,Calculations!K$23:$M$41,3,false),"")` |
| M21 | `=IFERROR(VLOOKUP($H21,Calculations!L$23:$M$41,2,false),"")` |
| B22 | `=IFERROR(VLOOKUP($G22,Calculations!H$23:$M$41,6,false),"")` |
| C22 | `=IFERROR(VLOOKUP($G22,Calculations!I$23:$M$41,5,false),"")` |
| D22 | `=IFERROR(VLOOKUP($G22,Calculations!J$23:$M$41,4,false),"")` |
| E22 | `=IFERROR(VLOOKUP($G22,Calculations!K$23:$M$41,3,false),"")` |
| F22 | `=IFERROR(VLOOKUP($G22,Calculations!L$23:$M$41,2,false),"")` |
| I22 | `=IFERROR(VLOOKUP($H22,Calculations!H$23:$M$41,6,false),"")` |
| J22 | `=IFERROR(VLOOKUP($H22,Calculations!I$23:$M$41,5,false),"")` |
| K22 | `=IFERROR(VLOOKUP($H22,Calculations!J$23:$M$41,4,false),"")` |
| L22 | `=IFERROR(VLOOKUP($H22,Calculations!K$23:$M$41,3,false),"")` |
| M22 | `=IFERROR(VLOOKUP($H22,Calculations!L$23:$M$41,2,false),"")` |
| B23 | `=IFERROR(VLOOKUP($G23,Calculations!H$23:$M$41,6,false),"")` |
| C23 | `=IFERROR(VLOOKUP($G23,Calculations!I$23:$M$41,5,false),"")` |
| D23 | `=IFERROR(VLOOKUP($G23,Calculations!J$23:$M$41,4,false),"")` |
| E23 | `=IFERROR(VLOOKUP($G23,Calculations!K$23:$M$41,3,false),"")` |
| F23 | `=IFERROR(VLOOKUP($G23,Calculations!L$23:$M$41,2,false),"")` |
| I23 | `=IFERROR(VLOOKUP($H23,Calculations!H$23:$M$41,6,false),"")` |
| J23 | `=IFERROR(VLOOKUP($H23,Calculations!I$23:$M$41,5,false),"")` |
| K23 | `=IFERROR(VLOOKUP($H23,Calculations!J$23:$M$41,4,false),"")` |
| L23 | `=IFERROR(VLOOKUP($H23,Calculations!K$23:$M$41,3,false),"")` |
| M23 | `=IFERROR(VLOOKUP($H23,Calculations!L$23:$M$41,2,false),"")` |
| B24 | `=IFERROR(VLOOKUP($G24,Calculations!H$23:$M$41,6,false),"")` |
| C24 | `=IFERROR(VLOOKUP($G24,Calculations!I$23:$M$41,5,false),"")` |
| D24 | `=IFERROR(VLOOKUP($G24,Calculations!J$23:$M$41,4,false),"")` |
| E24 | `=IFERROR(VLOOKUP($G24,Calculations!K$23:$M$41,3,false),"")` |
| F24 | `=IFERROR(VLOOKUP($G24,Calculations!L$23:$M$41,2,false),"")` |
| I24 | `=IFERROR(VLOOKUP($H24,Calculations!H$23:$M$41,6,false),"")` |
| J24 | `=IFERROR(VLOOKUP($H24,Calculations!I$23:$M$41,5,false),"")` |
| K24 | `=IFERROR(VLOOKUP($H24,Calculations!J$23:$M$41,4,false),"")` |
| L24 | `=IFERROR(VLOOKUP($H24,Calculations!K$23:$M$41,3,false),"")` |
| M24 | `=IFERROR(VLOOKUP($H24,Calculations!L$23:$M$41,2,false),"")` |
| B25 | `=IFERROR(VLOOKUP($G25,Calculations!H$23:$M$41,6,false),"")` |
| C25 | `=IFERROR(VLOOKUP($G25,Calculations!I$23:$M$41,5,false),"")` |
| D25 | `=IFERROR(VLOOKUP($G25,Calculations!J$23:$M$41,4,false),"")` |
| E25 | `=IFERROR(VLOOKUP($G25,Calculations!K$23:$M$41,3,false),"")` |
| F25 | `=IFERROR(VLOOKUP($G25,Calculations!L$23:$M$41,2,false),"")` |
| I25 | `=IFERROR(VLOOKUP($H25,Calculations!H$23:$M$41,6,false),"")` |
| J25 | `=IFERROR(VLOOKUP($H25,Calculations!I$23:$M$41,5,false),"")` |
| K25 | `=IFERROR(VLOOKUP($H25,Calculations!J$23:$M$41,4,false),"")` |
| L25 | `=IFERROR(VLOOKUP($H25,Calculations!K$23:$M$41,3,false),"")` |
| M25 | `=IFERROR(VLOOKUP($H25,Calculations!L$23:$M$41,2,false),"")` |
| B26 | `=IFERROR(VLOOKUP($G26,Calculations!H$23:$M$41,6,false),"")` |
| C26 | `=IFERROR(VLOOKUP($G26,Calculations!I$23:$M$41,5,false),"")` |
| D26 | `=IFERROR(VLOOKUP($G26,Calculations!J$23:$M$41,4,false),"")` |
| E26 | `=IFERROR(VLOOKUP($G26,Calculations!K$23:$M$41,3,false),"")` |
| F26 | `=IFERROR(VLOOKUP($G26,Calculations!L$23:$M$41,2,false),"")` |
| I26 | `=IFERROR(VLOOKUP($H26,Calculations!H$23:$M$41,6,false),"")` |
| J26 | `=IFERROR(VLOOKUP($H26,Calculations!I$23:$M$41,5,false),"")` |
| K26 | `=IFERROR(VLOOKUP($H26,Calculations!J$23:$M$41,4,false),"")` |
| L26 | `=IFERROR(VLOOKUP($H26,Calculations!K$23:$M$41,3,false),"")` |
| M26 | `=IFERROR(VLOOKUP($H26,Calculations!L$23:$M$41,2,false),"")` |
| B27 | `=IFERROR(VLOOKUP($G27,Calculations!H$23:$M$41,6,false),"")` |
| C27 | `=IFERROR(VLOOKUP($G27,Calculations!I$23:$M$41,5,false),"")` |
| D27 | `=IFERROR(VLOOKUP($G27,Calculations!J$23:$M$41,4,false),"")` |
| E27 | `=IFERROR(VLOOKUP($G27,Calculations!K$23:$M$41,3,false),"")` |
| F27 | `=IFERROR(VLOOKUP($G27,Calculations!L$23:$M$41,2,false),"")` |
| I27 | `=IFERROR(VLOOKUP($H27,Calculations!H$23:$M$41,6,false),"")` |
| J27 | `=IFERROR(VLOOKUP($H27,Calculations!I$23:$M$41,5,false),"")` |
| K27 | `=IFERROR(VLOOKUP($H27,Calculations!J$23:$M$41,4,false),"")` |
| L27 | `=IFERROR(VLOOKUP($H27,Calculations!K$23:$M$41,3,false),"")` |
| M27 | `=IFERROR(VLOOKUP($H27,Calculations!L$23:$M$41,2,false),"")` |
| B28 | `=IFERROR(VLOOKUP($G28,Calculations!H$23:$M$41,6,false),"")` |
| C28 | `=IFERROR(VLOOKUP($G28,Calculations!I$23:$M$41,5,false),"")` |
| D28 | `=IFERROR(VLOOKUP($G28,Calculations!J$23:$M$41,4,false),"")` |
| E28 | `=IFERROR(VLOOKUP($G28,Calculations!K$23:$M$41,3,false),"")` |
| F28 | `=IFERROR(VLOOKUP($G28,Calculations!L$23:$M$41,2,false),"")` |
| I28 | `=IFERROR(VLOOKUP($H28,Calculations!H$23:$M$41,6,false),"")` |
| J28 | `=IFERROR(VLOOKUP($H28,Calculations!I$23:$M$41,5,false),"")` |
| K28 | `=IFERROR(VLOOKUP($H28,Calculations!J$23:$M$41,4,false),"")` |
| L28 | `=IFERROR(VLOOKUP($H28,Calculations!K$23:$M$41,3,false),"")` |
| M28 | `=IFERROR(VLOOKUP($H28,Calculations!L$23:$M$41,2,false),"")` |
| B29 | `=IFERROR(VLOOKUP($G29,Calculations!H$23:$M$41,6,false),"")` |
| C29 | `=IFERROR(VLOOKUP($G29,Calculations!I$23:$M$41,5,false),"")` |
| D29 | `=IFERROR(VLOOKUP($G29,Calculations!J$23:$M$41,4,false),"")` |
| E29 | `=IFERROR(VLOOKUP($G29,Calculations!K$23:$M$41,3,false),"")` |
| F29 | `=IFERROR(VLOOKUP($G29,Calculations!L$23:$M$41,2,false),"")` |
| I29 | `=IFERROR(VLOOKUP($H29,Calculations!H$23:$M$41,6,false),"")` |
| J29 | `=IFERROR(VLOOKUP($H29,Calculations!I$23:$M$41,5,false),"")` |
| K29 | `=IFERROR(VLOOKUP($H29,Calculations!J$23:$M$41,4,false),"")` |
| L29 | `=IFERROR(VLOOKUP($H29,Calculations!K$23:$M$41,3,false),"")` |
| M29 | `=IFERROR(VLOOKUP($H29,Calculations!L$23:$M$41,2,false),"")` |
| B30 | `=IFERROR(VLOOKUP($G30,Calculations!H$23:$M$41,6,false),"")` |
| C30 | `=IFERROR(VLOOKUP($G30,Calculations!I$23:$M$41,5,false),"")` |
| D30 | `=IFERROR(VLOOKUP($G30,Calculations!J$23:$M$41,4,false),"")` |
| E30 | `=IFERROR(VLOOKUP($G30,Calculations!K$23:$M$41,3,false),"")` |
| F30 | `=IFERROR(VLOOKUP($G30,Calculations!L$23:$M$41,2,false),"")` |
| I30 | `=IFERROR(VLOOKUP($H30,Calculations!H$23:$M$41,6,false),"")` |
| J30 | `=IFERROR(VLOOKUP($H30,Calculations!I$23:$M$41,5,false),"")` |
| K30 | `=IFERROR(VLOOKUP($H30,Calculations!J$23:$M$41,4,false),"")` |
| L30 | `=IFERROR(VLOOKUP($H30,Calculations!K$23:$M$41,3,false),"")` |
| M30 | `=IFERROR(VLOOKUP($H30,Calculations!L$23:$M$41,2,false),"")` |
| B31 | `=IFERROR(VLOOKUP($G31,Calculations!H$23:$M$41,6,false),"")` |
| C31 | `=IFERROR(VLOOKUP($G31,Calculations!I$23:$M$41,5,false),"")` |
| D31 | `=IFERROR(VLOOKUP($G31,Calculations!J$23:$M$41,4,false),"")` |
| E31 | `=IFERROR(VLOOKUP($G31,Calculations!K$23:$M$41,3,false),"")` |
| F31 | `=IFERROR(VLOOKUP($G31,Calculations!L$23:$M$41,2,false),"")` |
| I31 | `=IFERROR(VLOOKUP($H31,Calculations!H$23:$M$41,6,false),"")` |
| J31 | `=IFERROR(VLOOKUP($H31,Calculations!I$23:$M$41,5,false),"")` |
| K31 | `=IFERROR(VLOOKUP($H31,Calculations!J$23:$M$41,4,false),"")` |
| L31 | `=IFERROR(VLOOKUP($H31,Calculations!K$23:$M$41,3,false),"")` |
| M31 | `=IFERROR(VLOOKUP($H31,Calculations!L$23:$M$41,2,false),"")` |
| B32 | `=IFERROR(VLOOKUP($G32,Calculations!H$23:$M$41,6,false),"")` |
| C32 | `=IFERROR(VLOOKUP($G32,Calculations!I$23:$M$41,5,false),"")` |
| D32 | `=IFERROR(VLOOKUP($G32,Calculations!J$23:$M$41,4,false),"")` |
| E32 | `=IFERROR(VLOOKUP($G32,Calculations!K$23:$M$41,3,false),"")` |
| F32 | `=IFERROR(VLOOKUP($G32,Calculations!L$23:$M$41,2,false),"")` |
| I32 | `=IFERROR(VLOOKUP($H32,Calculations!H$23:$M$41,6,false),"")` |
| J32 | `=IFERROR(VLOOKUP($H32,Calculations!I$23:$M$41,5,false),"")` |
| K32 | `=IFERROR(VLOOKUP($H32,Calculations!J$23:$M$41,4,false),"")` |
| L32 | `=IFERROR(VLOOKUP($H32,Calculations!K$23:$M$41,3,false),"")` |
| M32 | `=IFERROR(VLOOKUP($H32,Calculations!L$23:$M$41,2,false),"")` |
| B33 | `=IFERROR(VLOOKUP($G33,Calculations!H$23:$M$41,6,false),"")` |
| C33 | `=IFERROR(VLOOKUP($G33,Calculations!I$23:$M$41,5,false),"")` |
| D33 | `=IFERROR(VLOOKUP($G33,Calculations!J$23:$M$41,4,false),"")` |
| E33 | `=IFERROR(VLOOKUP($G33,Calculations!K$23:$M$41,3,false),"")` |
| F33 | `=IFERROR(VLOOKUP($G33,Calculations!L$23:$M$41,2,false),"")` |
| I33 | `=IFERROR(VLOOKUP($H33,Calculations!H$23:$M$41,6,false),"")` |
| J33 | `=IFERROR(VLOOKUP($H33,Calculations!I$23:$M$41,5,false),"")` |
| K33 | `=IFERROR(VLOOKUP($H33,Calculations!J$23:$M$41,4,false),"")` |
| L33 | `=IFERROR(VLOOKUP($H33,Calculations!K$23:$M$41,3,false),"")` |
| M33 | `=IFERROR(VLOOKUP($H33,Calculations!L$23:$M$41,2,false),"")` |
| B34 | `=IFERROR(VLOOKUP($G34,Calculations!H$23:$M$41,6,false),"")` |
| C34 | `=IFERROR(VLOOKUP($G34,Calculations!I$23:$M$41,5,false),"")` |
| D34 | `=IFERROR(VLOOKUP($G34,Calculations!J$23:$M$41,4,false),"")` |
| E34 | `=IFERROR(VLOOKUP($G34,Calculations!K$23:$M$41,3,false),"")` |
| F34 | `=IFERROR(VLOOKUP($G34,Calculations!L$23:$M$41,2,false),"")` |
| I34 | `=IFERROR(VLOOKUP($H34,Calculations!H$23:$M$41,6,false),"")` |
| J34 | `=IFERROR(VLOOKUP($H34,Calculations!I$23:$M$41,5,false),"")` |
| K34 | `=IFERROR(VLOOKUP($H34,Calculations!J$23:$M$41,4,false),"")` |
| L34 | `=IFERROR(VLOOKUP($H34,Calculations!K$23:$M$41,3,false),"")` |
| M34 | `=IFERROR(VLOOKUP($H34,Calculations!L$23:$M$41,2,false),"")` |
| B35 | `=IFERROR(VLOOKUP($G35,Calculations!H$23:$M$41,6,false),"")` |
| C35 | `=IFERROR(VLOOKUP($G35,Calculations!I$23:$M$41,5,false),"")` |
| D35 | `=IFERROR(VLOOKUP($G35,Calculations!J$23:$M$41,4,false),"")` |
| E35 | `=IFERROR(VLOOKUP($G35,Calculations!K$23:$M$41,3,false),"")` |
| F35 | `=IFERROR(VLOOKUP($G35,Calculations!L$23:$M$41,2,false),"")` |
| I35 | `=IFERROR(VLOOKUP($H35,Calculations!H$23:$M$41,6,false),"")` |
| J35 | `=IFERROR(VLOOKUP($H35,Calculations!I$23:$M$41,5,false),"")` |
| K35 | `=IFERROR(VLOOKUP($H35,Calculations!J$23:$M$41,4,false),"")` |
| L35 | `=IFERROR(VLOOKUP($H35,Calculations!K$23:$M$41,3,false),"")` |
| M35 | `=IFERROR(VLOOKUP($H35,Calculations!L$23:$M$41,2,false),"")` |
| B36 | `=IFERROR(VLOOKUP($G36,Calculations!H$23:$M$41,6,false),"")` |
| C36 | `=IFERROR(VLOOKUP($G36,Calculations!I$23:$M$41,5,false),"")` |
| D36 | `=IFERROR(VLOOKUP($G36,Calculations!J$23:$M$41,4,false),"")` |
| E36 | `=IFERROR(VLOOKUP($G36,Calculations!K$23:$M$41,3,false),"")` |
| F36 | `=IFERROR(VLOOKUP($G36,Calculations!L$23:$M$41,2,false),"")` |
| I36 | `=IFERROR(VLOOKUP($H36,Calculations!H$23:$M$41,6,false),"")` |
| J36 | `=IFERROR(VLOOKUP($H36,Calculations!I$23:$M$41,5,false),"")` |
| K36 | `=IFERROR(VLOOKUP($H36,Calculations!J$23:$M$41,4,false),"")` |
| L36 | `=IFERROR(VLOOKUP($H36,Calculations!K$23:$M$41,3,false),"")` |
| M36 | `=IFERROR(VLOOKUP($H36,Calculations!L$23:$M$41,2,false),"")` |
| B37 | `=IFERROR(VLOOKUP($G37,Calculations!H$23:$M$41,6,false),"")` |
| C37 | `=IFERROR(VLOOKUP($G37,Calculations!I$23:$M$41,5,false),"")` |
| D37 | `=IFERROR(VLOOKUP($G37,Calculations!J$23:$M$41,4,false),"")` |
| E37 | `=IFERROR(VLOOKUP($G37,Calculations!K$23:$M$41,3,false),"")` |
| F37 | `=IFERROR(VLOOKUP($G37,Calculations!L$23:$M$41,2,false),"")` |
| I37 | `=IFERROR(VLOOKUP($H37,Calculations!H$23:$M$41,6,false),"")` |
| J37 | `=IFERROR(VLOOKUP($H37,Calculations!I$23:$M$41,5,false),"")` |
| K37 | `=IFERROR(VLOOKUP($H37,Calculations!J$23:$M$41,4,false),"")` |
| L37 | `=IFERROR(VLOOKUP($H37,Calculations!K$23:$M$41,3,false),"")` |
| M37 | `=IFERROR(VLOOKUP($H37,Calculations!L$23:$M$41,2,false),"")` |
| B38 | `=IFERROR(VLOOKUP($G38,Calculations!H$23:$M$41,6,false),"")` |
| C38 | `=IFERROR(VLOOKUP($G38,Calculations!I$23:$M$41,5,false),"")` |
| D38 | `=IFERROR(VLOOKUP($G38,Calculations!J$23:$M$41,4,false),"")` |
| E38 | `=IFERROR(VLOOKUP($G38,Calculations!K$23:$M$41,3,false),"")` |
| F38 | `=IFERROR(VLOOKUP($G38,Calculations!L$23:$M$41,2,false),"")` |
| I38 | `=IFERROR(VLOOKUP($H38,Calculations!H$23:$M$41,6,false),"")` |
| J38 | `=IFERROR(VLOOKUP($H38,Calculations!I$23:$M$41,5,false),"")` |
| K38 | `=IFERROR(VLOOKUP($H38,Calculations!J$23:$M$41,4,false),"")` |
| L38 | `=IFERROR(VLOOKUP($H38,Calculations!K$23:$M$41,3,false),"")` |
| M38 | `=IFERROR(VLOOKUP($H38,Calculations!L$23:$M$41,2,false),"")` |
| B39 | `=IFERROR(VLOOKUP($G39,Calculations!H$23:$M$41,6,false),"")` |
| C39 | `=IFERROR(VLOOKUP($G39,Calculations!I$23:$M$41,5,false),"")` |
| D39 | `=IFERROR(VLOOKUP($G39,Calculations!J$23:$M$41,4,false),"")` |
| E39 | `=IFERROR(VLOOKUP($G39,Calculations!K$23:$M$41,3,false),"")` |
| F39 | `=IFERROR(VLOOKUP($G39,Calculations!L$23:$M$41,2,false),"")` |
| I39 | `=IFERROR(VLOOKUP($H39,Calculations!H$23:$M$41,6,false),"")` |
| J39 | `=IFERROR(VLOOKUP($H39,Calculations!I$23:$M$41,5,false),"")` |
| K39 | `=IFERROR(VLOOKUP($H39,Calculations!J$23:$M$41,4,false),"")` |
| L39 | `=IFERROR(VLOOKUP($H39,Calculations!K$23:$M$41,3,false),"")` |
| M39 | `=IFERROR(VLOOKUP($H39,Calculations!L$23:$M$41,2,false),"")` |
| B40 | `=IFERROR(VLOOKUP($G40,Calculations!H$23:$M$41,6,false),"")` |
| C40 | `=IFERROR(VLOOKUP($G40,Calculations!I$23:$M$41,5,false),"")` |
| D40 | `=IFERROR(VLOOKUP($G40,Calculations!J$23:$M$41,4,false),"")` |
| E40 | `=IFERROR(VLOOKUP($G40,Calculations!K$23:$M$41,3,false),"")` |
| F40 | `=IFERROR(VLOOKUP($G40,Calculations!L$23:$M$41,2,false),"")` |
| I40 | `=IFERROR(VLOOKUP($H40,Calculations!H$23:$M$41,6,false),"")` |
| J40 | `=IFERROR(VLOOKUP($H40,Calculations!I$23:$M$41,5,false),"")` |
| K40 | `=IFERROR(VLOOKUP($H40,Calculations!J$23:$M$41,4,false),"")` |
| L40 | `=IFERROR(VLOOKUP($H40,Calculations!K$23:$M$41,3,false),"")` |
| M40 | `=IFERROR(VLOOKUP($H40,Calculations!L$23:$M$41,2,false),"")` |
| B41 | `=IFERROR(VLOOKUP($G41,Calculations!H$23:$M$41,6,false),"")` |
| C41 | `=IFERROR(VLOOKUP($G41,Calculations!I$23:$M$41,5,false),"")` |
| D41 | `=IFERROR(VLOOKUP($G41,Calculations!J$23:$M$41,4,false),"")` |
| E41 | `=IFERROR(VLOOKUP($G41,Calculations!K$23:$M$41,3,false),"")` |
| F41 | `=IFERROR(VLOOKUP($G41,Calculations!L$23:$M$41,2,false),"")` |
| I41 | `=IFERROR(VLOOKUP($H41,Calculations!H$23:$M$41,6,false),"")` |
| J41 | `=IFERROR(VLOOKUP($H41,Calculations!I$23:$M$41,5,false),"")` |
| K41 | `=IFERROR(VLOOKUP($H41,Calculations!J$23:$M$41,4,false),"")` |
| L41 | `=IFERROR(VLOOKUP($H41,Calculations!K$23:$M$41,3,false),"")` |
| M41 | `=IFERROR(VLOOKUP($H41,Calculations!L$23:$M$41,2,false),"")` |
| B42 | `=IFERROR(VLOOKUP($G42,Calculations!H$23:$M$41,6,false),"")` |
| C42 | `=IFERROR(VLOOKUP($G42,Calculations!I$23:$M$41,5,false),"")` |
| D42 | `=IFERROR(VLOOKUP($G42,Calculations!J$23:$M$41,4,false),"")` |
| E42 | `=IFERROR(VLOOKUP($G42,Calculations!K$23:$M$41,3,false),"")` |
| F42 | `=IFERROR(VLOOKUP($G42,Calculations!L$23:$M$41,2,false),"")` |
| I42 | `=IFERROR(VLOOKUP($H42,Calculations!H$23:$M$41,6,false),"")` |
| J42 | `=IFERROR(VLOOKUP($H42,Calculations!I$23:$M$41,5,false),"")` |
| K42 | `=IFERROR(VLOOKUP($H42,Calculations!J$23:$M$41,4,false),"")` |
| L42 | `=IFERROR(VLOOKUP($H42,Calculations!K$23:$M$41,3,false),"")` |
| M42 | `=IFERROR(VLOOKUP($H42,Calculations!L$23:$M$41,2,false),"")` |
| B43 | `=IFERROR(VLOOKUP($G43,Calculations!H$23:$M$41,6,false),"")` |
| C43 | `=IFERROR(VLOOKUP($G43,Calculations!I$23:$M$41,5,false),"")` |
| D43 | `=IFERROR(VLOOKUP($G43,Calculations!J$23:$M$41,4,false),"")` |
| E43 | `=IFERROR(VLOOKUP($G43,Calculations!K$23:$M$41,3,false),"")` |
| F43 | `=IFERROR(VLOOKUP($G43,Calculations!L$23:$M$41,2,false),"")` |
| I43 | `=IFERROR(VLOOKUP($H43,Calculations!H$23:$M$41,6,false),"")` |
| J43 | `=IFERROR(VLOOKUP($H43,Calculations!I$23:$M$41,5,false),"")` |
| K43 | `=IFERROR(VLOOKUP($H43,Calculations!J$23:$M$41,4,false),"")` |
| L43 | `=IFERROR(VLOOKUP($H43,Calculations!K$23:$M$41,3,false),"")` |
| M43 | `=IFERROR(VLOOKUP($H43,Calculations!L$23:$M$41,2,false),"")` |
| B44 | `=IFERROR(VLOOKUP($G44,Calculations!H$23:$M$41,6,false),"")` |
| C44 | `=IFERROR(VLOOKUP($G44,Calculations!I$23:$M$41,5,false),"")` |
| D44 | `=IFERROR(VLOOKUP($G44,Calculations!J$23:$M$41,4,false),"")` |
| E44 | `=IFERROR(VLOOKUP($G44,Calculations!K$23:$M$41,3,false),"")` |
| F44 | `=IFERROR(VLOOKUP($G44,Calculations!L$23:$M$41,2,false),"")` |
| I44 | `=IFERROR(VLOOKUP($H44,Calculations!H$23:$M$41,6,false),"")` |
| J44 | `=IFERROR(VLOOKUP($H44,Calculations!I$23:$M$41,5,false),"")` |
| K44 | `=IFERROR(VLOOKUP($H44,Calculations!J$23:$M$41,4,false),"")` |
| L44 | `=IFERROR(VLOOKUP($H44,Calculations!K$23:$M$41,3,false),"")` |
| M44 | `=IFERROR(VLOOKUP($H44,Calculations!L$23:$M$41,2,false),"")` |
| B45 | `=IFERROR(VLOOKUP($G45,Calculations!H$23:$M$41,6,false),"")` |
| C45 | `=IFERROR(VLOOKUP($G45,Calculations!I$23:$M$41,5,false),"")` |
| D45 | `=IFERROR(VLOOKUP($G45,Calculations!J$23:$M$41,4,false),"")` |
| E45 | `=IFERROR(VLOOKUP($G45,Calculations!K$23:$M$41,3,false),"")` |
| F45 | `=IFERROR(VLOOKUP($G45,Calculations!L$23:$M$41,2,false),"")` |
| I45 | `=IFERROR(VLOOKUP($H45,Calculations!H$23:$M$41,6,false),"")` |
| J45 | `=IFERROR(VLOOKUP($H45,Calculations!I$23:$M$41,5,false),"")` |
| K45 | `=IFERROR(VLOOKUP($H45,Calculations!J$23:$M$41,4,false),"")` |
| L45 | `=IFERROR(VLOOKUP($H45,Calculations!K$23:$M$41,3,false),"")` |
| M45 | `=IFERROR(VLOOKUP($H45,Calculations!L$23:$M$41,2,false),"")` |
| B46 | `=IFERROR(VLOOKUP($G46,Calculations!H$23:$M$41,6,false),"")` |
| C46 | `=IFERROR(VLOOKUP($G46,Calculations!I$23:$M$41,5,false),"")` |
| D46 | `=IFERROR(VLOOKUP($G46,Calculations!J$23:$M$41,4,false),"")` |
| E46 | `=IFERROR(VLOOKUP($G46,Calculations!K$23:$M$41,3,false),"")` |
| F46 | `=IFERROR(VLOOKUP($G46,Calculations!L$23:$M$41,2,false),"")` |
| I46 | `=IFERROR(VLOOKUP($H46,Calculations!H$23:$M$41,6,false),"")` |
| J46 | `=IFERROR(VLOOKUP($H46,Calculations!I$23:$M$41,5,false),"")` |
| K46 | `=IFERROR(VLOOKUP($H46,Calculations!J$23:$M$41,4,false),"")` |
| L46 | `=IFERROR(VLOOKUP($H46,Calculations!K$23:$M$41,3,false),"")` |
| M46 | `=IFERROR(VLOOKUP($H46,Calculations!L$23:$M$41,2,false),"")` |
| B47 | `=IFERROR(VLOOKUP($G47,Calculations!H$23:$M$41,6,false),"")` |
| C47 | `=IFERROR(VLOOKUP($G47,Calculations!I$23:$M$41,5,false),"")` |
| D47 | `=IFERROR(VLOOKUP($G47,Calculations!J$23:$M$41,4,false),"")` |
| E47 | `=IFERROR(VLOOKUP($G47,Calculations!K$23:$M$41,3,false),"")` |
| F47 | `=IFERROR(VLOOKUP($G47,Calculations!L$23:$M$41,2,false),"")` |
| I47 | `=IFERROR(VLOOKUP($H47,Calculations!H$23:$M$41,6,false),"")` |
| J47 | `=IFERROR(VLOOKUP($H47,Calculations!I$23:$M$41,5,false),"")` |
| K47 | `=IFERROR(VLOOKUP($H47,Calculations!J$23:$M$41,4,false),"")` |
| L47 | `=IFERROR(VLOOKUP($H47,Calculations!K$23:$M$41,3,false),"")` |
| M47 | `=IFERROR(VLOOKUP($H47,Calculations!L$23:$M$41,2,false),"")` |
| B48 | `=IFERROR(VLOOKUP($G48,Calculations!H$23:$M$41,6,false),"")` |
| C48 | `=IFERROR(VLOOKUP($G48,Calculations!I$23:$M$41,5,false),"")` |
| D48 | `=IFERROR(VLOOKUP($G48,Calculations!J$23:$M$41,4,false),"")` |
| E48 | `=IFERROR(VLOOKUP($G48,Calculations!K$23:$M$41,3,false),"")` |
| F48 | `=IFERROR(VLOOKUP($G48,Calculations!L$23:$M$41,2,false),"")` |
| I48 | `=IFERROR(VLOOKUP($H48,Calculations!H$23:$M$41,6,false),"")` |
| J48 | `=IFERROR(VLOOKUP($H48,Calculations!I$23:$M$41,5,false),"")` |
| K48 | `=IFERROR(VLOOKUP($H48,Calculations!J$23:$M$41,4,false),"")` |
| L48 | `=IFERROR(VLOOKUP($H48,Calculations!K$23:$M$41,3,false),"")` |
| M48 | `=IFERROR(VLOOKUP($H48,Calculations!L$23:$M$41,2,false),"")` |
| B49 | `=IFERROR(VLOOKUP($G49,Calculations!H$23:$M$41,6,false),"")` |
| C49 | `=IFERROR(VLOOKUP($G49,Calculations!I$23:$M$41,5,false),"")` |
| D49 | `=IFERROR(VLOOKUP($G49,Calculations!J$23:$M$41,4,false),"")` |
| E49 | `=IFERROR(VLOOKUP($G49,Calculations!K$23:$M$41,3,false),"")` |
| F49 | `=IFERROR(VLOOKUP($G49,Calculations!L$23:$M$41,2,false),"")` |
| I49 | `=IFERROR(VLOOKUP($H49,Calculations!H$23:$M$41,6,false),"")` |
| J49 | `=IFERROR(VLOOKUP($H49,Calculations!I$23:$M$41,5,false),"")` |
| K49 | `=IFERROR(VLOOKUP($H49,Calculations!J$23:$M$41,4,false),"")` |
| L49 | `=IFERROR(VLOOKUP($H49,Calculations!K$23:$M$41,3,false),"")` |
| M49 | `=IFERROR(VLOOKUP($H49,Calculations!L$23:$M$41,2,false),"")` |
| B50 | `=IFERROR(VLOOKUP($G50,Calculations!H$23:$M$41,6,false),"")` |
| C50 | `=IFERROR(VLOOKUP($G50,Calculations!I$23:$M$41,5,false),"")` |
| D50 | `=IFERROR(VLOOKUP($G50,Calculations!J$23:$M$41,4,false),"")` |
| E50 | `=IFERROR(VLOOKUP($G50,Calculations!K$23:$M$41,3,false),"")` |
| F50 | `=IFERROR(VLOOKUP($G50,Calculations!L$23:$M$41,2,false),"")` |
| I50 | `=IFERROR(VLOOKUP($H50,Calculations!H$23:$M$41,6,false),"")` |
| J50 | `=IFERROR(VLOOKUP($H50,Calculations!I$23:$M$41,5,false),"")` |
| K50 | `=IFERROR(VLOOKUP($H50,Calculations!J$23:$M$41,4,false),"")` |
| L50 | `=IFERROR(VLOOKUP($H50,Calculations!K$23:$M$41,3,false),"")` |
| M50 | `=IFERROR(VLOOKUP($H50,Calculations!L$23:$M$41,2,false),"")` |
| B51 | `=IFERROR(VLOOKUP($G51,Calculations!H$23:$M$41,6,false),"")` |
| C51 | `=IFERROR(VLOOKUP($G51,Calculations!I$23:$M$41,5,false),"")` |
| D51 | `=IFERROR(VLOOKUP($G51,Calculations!J$23:$M$41,4,false),"")` |
| E51 | `=IFERROR(VLOOKUP($G51,Calculations!K$23:$M$41,3,false),"")` |
| F51 | `=IFERROR(VLOOKUP($G51,Calculations!L$23:$M$41,2,false),"")` |
| I51 | `=IFERROR(VLOOKUP($H51,Calculations!H$23:$M$41,6,false),"")` |
| J51 | `=IFERROR(VLOOKUP($H51,Calculations!I$23:$M$41,5,false),"")` |
| K51 | `=IFERROR(VLOOKUP($H51,Calculations!J$23:$M$41,4,false),"")` |
| L51 | `=IFERROR(VLOOKUP($H51,Calculations!K$23:$M$41,3,false),"")` |
| M51 | `=IFERROR(VLOOKUP($H51,Calculations!L$23:$M$41,2,false),"")` |
| B52 | `=IFERROR(VLOOKUP($G52,Calculations!H$23:$M$41,6,false),"")` |
| C52 | `=IFERROR(VLOOKUP($G52,Calculations!I$23:$M$41,5,false),"")` |
| D52 | `=IFERROR(VLOOKUP($G52,Calculations!J$23:$M$41,4,false),"")` |
| E52 | `=IFERROR(VLOOKUP($G52,Calculations!K$23:$M$41,3,false),"")` |
| F52 | `=IFERROR(VLOOKUP($G52,Calculations!L$23:$M$41,2,false),"")` |
| I52 | `=IFERROR(VLOOKUP($H52,Calculations!H$23:$M$41,6,false),"")` |
| J52 | `=IFERROR(VLOOKUP($H52,Calculations!I$23:$M$41,5,false),"")` |
| K52 | `=IFERROR(VLOOKUP($H52,Calculations!J$23:$M$41,4,false),"")` |
| L52 | `=IFERROR(VLOOKUP($H52,Calculations!K$23:$M$41,3,false),"")` |
| M52 | `=IFERROR(VLOOKUP($H52,Calculations!L$23:$M$41,2,false),"")` |
| B53 | `=IFERROR(VLOOKUP($G53,Calculations!H$23:$M$41,6,false),"")` |
| C53 | `=IFERROR(VLOOKUP($G53,Calculations!I$23:$M$41,5,false),"")` |
| D53 | `=IFERROR(VLOOKUP($G53,Calculations!J$23:$M$41,4,false),"")` |
| E53 | `=IFERROR(VLOOKUP($G53,Calculations!K$23:$M$41,3,false),"")` |
| F53 | `=IFERROR(VLOOKUP($G53,Calculations!L$23:$M$41,2,false),"")` |
| I53 | `=IFERROR(VLOOKUP($H53,Calculations!H$23:$M$41,6,false),"")` |
| J53 | `=IFERROR(VLOOKUP($H53,Calculations!I$23:$M$41,5,false),"")` |
| K53 | `=IFERROR(VLOOKUP($H53,Calculations!J$23:$M$41,4,false),"")` |
| L53 | `=IFERROR(VLOOKUP($H53,Calculations!K$23:$M$41,3,false),"")` |
| M53 | `=IFERROR(VLOOKUP($H53,Calculations!L$23:$M$41,2,false),"")` |
| B54 | `=IFERROR(VLOOKUP($G54,Calculations!H$23:$M$41,6,false),"")` |
| C54 | `=IFERROR(VLOOKUP($G54,Calculations!I$23:$M$41,5,false),"")` |
| D54 | `=IFERROR(VLOOKUP($G54,Calculations!J$23:$M$41,4,false),"")` |
| E54 | `=IFERROR(VLOOKUP($G54,Calculations!K$23:$M$41,3,false),"")` |
| F54 | `=IFERROR(VLOOKUP($G54,Calculations!L$23:$M$41,2,false),"")` |
| I54 | `=IFERROR(VLOOKUP($H54,Calculations!H$23:$M$41,6,false),"")` |
| J54 | `=IFERROR(VLOOKUP($H54,Calculations!I$23:$M$41,5,false),"")` |
| K54 | `=IFERROR(VLOOKUP($H54,Calculations!J$23:$M$41,4,false),"")` |
| L54 | `=IFERROR(VLOOKUP($H54,Calculations!K$23:$M$41,3,false),"")` |
| M54 | `=IFERROR(VLOOKUP($H54,Calculations!L$23:$M$41,2,false),"")` |
| B55 | `=IFERROR(VLOOKUP($G55,Calculations!H$23:$M$41,6,false),"")` |
| C55 | `=IFERROR(VLOOKUP($G55,Calculations!I$23:$M$41,5,false),"")` |
| D55 | `=IFERROR(VLOOKUP($G55,Calculations!J$23:$M$41,4,false),"")` |
| E55 | `=IFERROR(VLOOKUP($G55,Calculations!K$23:$M$41,3,false),"")` |
| F55 | `=IFERROR(VLOOKUP($G55,Calculations!L$23:$M$41,2,false),"")` |
| I55 | `=IFERROR(VLOOKUP($H55,Calculations!H$23:$M$41,6,false),"")` |
| J55 | `=IFERROR(VLOOKUP($H55,Calculations!I$23:$M$41,5,false),"")` |
| K55 | `=IFERROR(VLOOKUP($H55,Calculations!J$23:$M$41,4,false),"")` |
| L55 | `=IFERROR(VLOOKUP($H55,Calculations!K$23:$M$41,3,false),"")` |
| M55 | `=IFERROR(VLOOKUP($H55,Calculations!L$23:$M$41,2,false),"")` |
| B56 | `=IFERROR(VLOOKUP($G56,Calculations!H$23:$M$41,6,false),"")` |
| C56 | `=IFERROR(VLOOKUP($G56,Calculations!I$23:$M$41,5,false),"")` |
| D56 | `=IFERROR(VLOOKUP($G56,Calculations!J$23:$M$41,4,false),"")` |
| E56 | `=IFERROR(VLOOKUP($G56,Calculations!K$23:$M$41,3,false),"")` |
| F56 | `=IFERROR(VLOOKUP($G56,Calculations!L$23:$M$41,2,false),"")` |
| I56 | `=IFERROR(VLOOKUP($H56,Calculations!H$23:$M$41,6,false),"")` |
| J56 | `=IFERROR(VLOOKUP($H56,Calculations!I$23:$M$41,5,false),"")` |
| K56 | `=IFERROR(VLOOKUP($H56,Calculations!J$23:$M$41,4,false),"")` |
| L56 | `=IFERROR(VLOOKUP($H56,Calculations!K$23:$M$41,3,false),"")` |
| M56 | `=IFERROR(VLOOKUP($H56,Calculations!L$23:$M$41,2,false),"")` |
| B57 | `=IFERROR(VLOOKUP($G57,Calculations!H$23:$M$41,6,false),"")` |
| C57 | `=IFERROR(VLOOKUP($G57,Calculations!I$23:$M$41,5,false),"")` |
| D57 | `=IFERROR(VLOOKUP($G57,Calculations!J$23:$M$41,4,false),"")` |
| E57 | `=IFERROR(VLOOKUP($G57,Calculations!K$23:$M$41,3,false),"")` |
| F57 | `=IFERROR(VLOOKUP($G57,Calculations!L$23:$M$41,2,false),"")` |
| I57 | `=IFERROR(VLOOKUP($H57,Calculations!H$23:$M$41,6,false),"")` |
| J57 | `=IFERROR(VLOOKUP($H57,Calculations!I$23:$M$41,5,false),"")` |
| K57 | `=IFERROR(VLOOKUP($H57,Calculations!J$23:$M$41,4,false),"")` |
| L57 | `=IFERROR(VLOOKUP($H57,Calculations!K$23:$M$41,3,false),"")` |
| M57 | `=IFERROR(VLOOKUP($H57,Calculations!L$23:$M$41,2,false),"")` |
| B58 | `=IFERROR(VLOOKUP($G58,Calculations!H$23:$M$41,6,false),"")` |
| C58 | `=IFERROR(VLOOKUP($G58,Calculations!I$23:$M$41,5,false),"")` |
| D58 | `=IFERROR(VLOOKUP($G58,Calculations!J$23:$M$41,4,false),"")` |
| E58 | `=IFERROR(VLOOKUP($G58,Calculations!K$23:$M$41,3,false),"")` |
| F58 | `=IFERROR(VLOOKUP($G58,Calculations!L$23:$M$41,2,false),"")` |
| I58 | `=IFERROR(VLOOKUP($H58,Calculations!H$23:$M$41,6,false),"")` |
| J58 | `=IFERROR(VLOOKUP($H58,Calculations!I$23:$M$41,5,false),"")` |
| K58 | `=IFERROR(VLOOKUP($H58,Calculations!J$23:$M$41,4,false),"")` |
| L58 | `=IFERROR(VLOOKUP($H58,Calculations!K$23:$M$41,3,false),"")` |
| M58 | `=IFERROR(VLOOKUP($H58,Calculations!L$23:$M$41,2,false),"")` |
| B59 | `=IFERROR(VLOOKUP($G59,Calculations!H$23:$M$41,6,false),"")` |
| C59 | `=IFERROR(VLOOKUP($G59,Calculations!I$23:$M$41,5,false),"")` |
| D59 | `=IFERROR(VLOOKUP($G59,Calculations!J$23:$M$41,4,false),"")` |
| E59 | `=IFERROR(VLOOKUP($G59,Calculations!K$23:$M$41,3,false),"")` |
| F59 | `=IFERROR(VLOOKUP($G59,Calculations!L$23:$M$41,2,false),"")` |
| I59 | `=IFERROR(VLOOKUP($H59,Calculations!H$23:$M$41,6,false),"")` |
| J59 | `=IFERROR(VLOOKUP($H59,Calculations!I$23:$M$41,5,false),"")` |
| K59 | `=IFERROR(VLOOKUP($H59,Calculations!J$23:$M$41,4,false),"")` |
| L59 | `=IFERROR(VLOOKUP($H59,Calculations!K$23:$M$41,3,false),"")` |
| M59 | `=IFERROR(VLOOKUP($H59,Calculations!L$23:$M$41,2,false),"")` |
| B60 | `=IFERROR(VLOOKUP($G60,Calculations!H$23:$M$41,6,false),"")` |
| C60 | `=IFERROR(VLOOKUP($G60,Calculations!I$23:$M$41,5,false),"")` |
| D60 | `=IFERROR(VLOOKUP($G60,Calculations!J$23:$M$41,4,false),"")` |
| E60 | `=IFERROR(VLOOKUP($G60,Calculations!K$23:$M$41,3,false),"")` |
| F60 | `=IFERROR(VLOOKUP($G60,Calculations!L$23:$M$41,2,false),"")` |
| I60 | `=IFERROR(VLOOKUP($H60,Calculations!H$23:$M$41,6,false),"")` |
| J60 | `=IFERROR(VLOOKUP($H60,Calculations!I$23:$M$41,5,false),"")` |
| K60 | `=IFERROR(VLOOKUP($H60,Calculations!J$23:$M$41,4,false),"")` |
| L60 | `=IFERROR(VLOOKUP($H60,Calculations!K$23:$M$41,3,false),"")` |
| M60 | `=IFERROR(VLOOKUP($H60,Calculations!L$23:$M$41,2,false),"")` |
| B61 | `=IFERROR(VLOOKUP($G61,Calculations!H$23:$M$41,6,false),"")` |
| C61 | `=IFERROR(VLOOKUP($G61,Calculations!I$23:$M$41,5,false),"")` |
| D61 | `=IFERROR(VLOOKUP($G61,Calculations!J$23:$M$41,4,false),"")` |
| E61 | `=IFERROR(VLOOKUP($G61,Calculations!K$23:$M$41,3,false),"")` |
| F61 | `=IFERROR(VLOOKUP($G61,Calculations!L$23:$M$41,2,false),"")` |
| I61 | `=IFERROR(VLOOKUP($H61,Calculations!H$23:$M$41,6,false),"")` |
| J61 | `=IFERROR(VLOOKUP($H61,Calculations!I$23:$M$41,5,false),"")` |
| K61 | `=IFERROR(VLOOKUP($H61,Calculations!J$23:$M$41,4,false),"")` |
| L61 | `=IFERROR(VLOOKUP($H61,Calculations!K$23:$M$41,3,false),"")` |
| M61 | `=IFERROR(VLOOKUP($H61,Calculations!L$23:$M$41,2,false),"")` |

## Sheet: Calculations

2498 formulas

| Cell | Formula |
|---|---|
| B2 | `=IF('Stars and Floors'!$A2, IF(B$1='Stars and Floors'!$C2,1, 0) + IF(B$1='Stars and Floors'!$D2,1, 0) + IF(B$1='Stars and Floors'!$E2,1, 0) + IF(B$1='Stars and Floors'!$F2,1, 0) + IF(B$1='Stars and Floors'!$G2,1, 0), 0)` |
| C2 | `=IF('Stars and Floors'!$A2, IF(C$1='Stars and Floors'!$C2,1, 0) + IF(C$1='Stars and Floors'!$D2,1, 0) + IF(C$1='Stars and Floors'!$E2,1, 0) + IF(C$1='Stars and Floors'!$F2,1, 0) + IF(C$1='Stars and Floors'!$G2,1, 0), 0)` |
| D2 | `=IF('Stars and Floors'!$A2, IF(D$1='Stars and Floors'!$C2,1, 0) + IF(D$1='Stars and Floors'!$D2,1, 0) + IF(D$1='Stars and Floors'!$E2,1, 0) + IF(D$1='Stars and Floors'!$F2,1, 0) + IF(D$1='Stars and Floors'!$G2,1, 0), 0)` |
| E2 | `=IF('Stars and Floors'!$A2, IF(E$1='Stars and Floors'!$C2,1, 0) + IF(E$1='Stars and Floors'!$D2,1, 0) + IF(E$1='Stars and Floors'!$E2,1, 0) + IF(E$1='Stars and Floors'!$F2,1, 0) + IF(E$1='Stars and Floors'!$G2,1, 0), 0)` |
| F2 | `=IF('Stars and Floors'!$A2, IF(F$1='Stars and Floors'!$C2,1, 0) + IF(F$1='Stars and Floors'!$D2,1, 0) + IF(F$1='Stars and Floors'!$E2,1, 0) + IF(F$1='Stars and Floors'!$F2,1, 0) + IF(F$1='Stars and Floors'!$G2,1, 0), 0)` |
| G2 | `=IF('Stars and Floors'!$A2, IF(G$1='Stars and Floors'!$C2,1, 0) + IF(G$1='Stars and Floors'!$D2,1, 0) + IF(G$1='Stars and Floors'!$E2,1, 0) + IF(G$1='Stars and Floors'!$F2,1, 0) + IF(G$1='Stars and Floors'!$G2,1, 0), 0)` |
| H2 | `=IF('Stars and Floors'!$A2, IF(H$1='Stars and Floors'!$C2,1, 0) + IF(H$1='Stars and Floors'!$D2,1, 0) + IF(H$1='Stars and Floors'!$E2,1, 0) + IF(H$1='Stars and Floors'!$F2,1, 0) + IF(H$1='Stars and Floors'!$G2,1, 0), 0)` |
| I2 | `=IF('Stars and Floors'!$A2, IF(I$1='Stars and Floors'!$C2,1, 0) + IF(I$1='Stars and Floors'!$D2,1, 0) + IF(I$1='Stars and Floors'!$E2,1, 0) + IF(I$1='Stars and Floors'!$F2,1, 0) + IF(I$1='Stars and Floors'!$G2,1, 0), 0)` |
| J2 | `=IF('Stars and Floors'!$A2, IF(J$1='Stars and Floors'!$C2,1, 0) + IF(J$1='Stars and Floors'!$D2,1, 0) + IF(J$1='Stars and Floors'!$E2,1, 0) + IF(J$1='Stars and Floors'!$F2,1, 0) + IF(J$1='Stars and Floors'!$G2,1, 0), 0)` |
| K2 | `=IF('Stars and Floors'!$A2, IF(K$1='Stars and Floors'!$C2,1, 0) + IF(K$1='Stars and Floors'!$D2,1, 0) + IF(K$1='Stars and Floors'!$E2,1, 0) + IF(K$1='Stars and Floors'!$F2,1, 0) + IF(K$1='Stars and Floors'!$G2,1, 0), 0)` |
| L2 | `=IF('Stars and Floors'!$A2, IF(L$1='Stars and Floors'!$C2,1, 0) + IF(L$1='Stars and Floors'!$D2,1, 0) + IF(L$1='Stars and Floors'!$E2,1, 0) + IF(L$1='Stars and Floors'!$F2,1, 0) + IF(L$1='Stars and Floors'!$G2,1, 0), 0)` |
| M2 | `=IF('Stars and Floors'!$A2, IF(M$1='Stars and Floors'!$C2,1, 0) + IF(M$1='Stars and Floors'!$D2,1, 0) + IF(M$1='Stars and Floors'!$E2,1, 0) + IF(M$1='Stars and Floors'!$F2,1, 0) + IF(M$1='Stars and Floors'!$G2,1, 0), 0)` |
| N2 | `=IF('Stars and Floors'!$A2, IF(N$1='Stars and Floors'!$C2,1, 0) + IF(N$1='Stars and Floors'!$D2,1, 0) + IF(N$1='Stars and Floors'!$E2,1, 0) + IF(N$1='Stars and Floors'!$F2,1, 0) + IF(N$1='Stars and Floors'!$G2,1, 0), 0)` |
| O2 | `=IF('Stars and Floors'!$A2, IF(O$1='Stars and Floors'!$C2,1, 0) + IF(O$1='Stars and Floors'!$D2,1, 0) + IF(O$1='Stars and Floors'!$E2,1, 0) + IF(O$1='Stars and Floors'!$F2,1, 0) + IF(O$1='Stars and Floors'!$G2,1, 0), 0)` |
| P2 | `=IF('Stars and Floors'!$A2, IF(P$1='Stars and Floors'!$C2,1, 0) + IF(P$1='Stars and Floors'!$D2,1, 0) + IF(P$1='Stars and Floors'!$E2,1, 0) + IF(P$1='Stars and Floors'!$F2,1, 0) + IF(P$1='Stars and Floors'!$G2,1, 0), 0)` |
| Q2 | `=IF('Stars and Floors'!$A2, IF(Q$1='Stars and Floors'!$C2,1, 0) + IF(Q$1='Stars and Floors'!$D2,1, 0) + IF(Q$1='Stars and Floors'!$E2,1, 0) + IF(Q$1='Stars and Floors'!$F2,1, 0) + IF(Q$1='Stars and Floors'!$G2,1, 0), 0)` |
| R2 | `=IF('Stars and Floors'!$A2, IF(R$1='Stars and Floors'!$C2,1, 0) + IF(R$1='Stars and Floors'!$D2,1, 0) + IF(R$1='Stars and Floors'!$E2,1, 0) + IF(R$1='Stars and Floors'!$F2,1, 0) + IF(R$1='Stars and Floors'!$G2,1, 0), 0)` |
| S2 | `=IF('Stars and Floors'!$A2, IF(S$1='Stars and Floors'!$C2,1, 0) + IF(S$1='Stars and Floors'!$D2,1, 0) + IF(S$1='Stars and Floors'!$E2,1, 0) + IF(S$1='Stars and Floors'!$F2,1, 0) + IF(S$1='Stars and Floors'!$G2,1, 0), 0)` |
| T2 | `=IF('Stars and Floors'!$A2, IF(T$1='Stars and Floors'!$C2,1, 0) + IF(T$1='Stars and Floors'!$D2,1, 0) + IF(T$1='Stars and Floors'!$E2,1, 0) + IF(T$1='Stars and Floors'!$F2,1, 0) + IF(T$1='Stars and Floors'!$G2,1, 0), 0)` |
| U2 | `=IF('Stars and Floors'!$A2, IF(U$1='Stars and Floors'!$C2,1, 0) + IF(U$1='Stars and Floors'!$D2,1, 0) + IF(U$1='Stars and Floors'!$E2,1, 0) + IF(U$1='Stars and Floors'!$F2,1, 0) + IF(U$1='Stars and Floors'!$G2,1, 0), 0)` |
| V2 | `=IF('Stars and Floors'!$A2, IF(V$1='Stars and Floors'!$C2,1, 0) + IF(V$1='Stars and Floors'!$D2,1, 0) + IF(V$1='Stars and Floors'!$E2,1, 0) + IF(V$1='Stars and Floors'!$F2,1, 0) + IF(V$1='Stars and Floors'!$G2,1, 0), 0)` |
| W2 | `=IF('Stars and Floors'!$A2, IF(W$1='Stars and Floors'!$C2,1, 0) + IF(W$1='Stars and Floors'!$D2,1, 0) + IF(W$1='Stars and Floors'!$E2,1, 0) + IF(W$1='Stars and Floors'!$F2,1, 0) + IF(W$1='Stars and Floors'!$G2,1, 0), 0)` |
| X2 | `=IF('Stars and Floors'!$A2, IF(X$1='Stars and Floors'!$C2,1, 0) + IF(X$1='Stars and Floors'!$D2,1, 0) + IF(X$1='Stars and Floors'!$E2,1, 0) + IF(X$1='Stars and Floors'!$F2,1, 0) + IF(X$1='Stars and Floors'!$G2,1, 0), 0)` |
| Y2 | `=IF('Stars and Floors'!$A2, IF(Y$1='Stars and Floors'!$C2,1, 0) + IF(Y$1='Stars and Floors'!$D2,1, 0) + IF(Y$1='Stars and Floors'!$E2,1, 0) + IF(Y$1='Stars and Floors'!$F2,1, 0) + IF(Y$1='Stars and Floors'!$G2,1, 0), 0)` |
| Z2 | `=IF('Stars and Floors'!$A2, IF(Z$1='Stars and Floors'!$C2,1, 0) + IF(Z$1='Stars and Floors'!$D2,1, 0) + IF(Z$1='Stars and Floors'!$E2,1, 0) + IF(Z$1='Stars and Floors'!$F2,1, 0) + IF(Z$1='Stars and Floors'!$G2,1, 0), 0)` |
| AA2 | `=IF('Stars and Floors'!$A2, IF(AA$1='Stars and Floors'!$C2,1, 0) + IF(AA$1='Stars and Floors'!$D2,1, 0) + IF(AA$1='Stars and Floors'!$E2,1, 0) + IF(AA$1='Stars and Floors'!$F2,1, 0) + IF(AA$1='Stars and Floors'!$G2,1, 0), 0)` |
| AB2 | `=IF('Stars and Floors'!$A2, IF(AB$1='Stars and Floors'!$C2,1, 0) + IF(AB$1='Stars and Floors'!$D2,1, 0) + IF(AB$1='Stars and Floors'!$E2,1, 0) + IF(AB$1='Stars and Floors'!$F2,1, 0) + IF(AB$1='Stars and Floors'!$G2,1, 0), 0)` |
| AC2 | `=IF('Stars and Floors'!$A2, IF(AC$1='Stars and Floors'!$C2,1, 0) + IF(AC$1='Stars and Floors'!$D2,1, 0) + IF(AC$1='Stars and Floors'!$E2,1, 0) + IF(AC$1='Stars and Floors'!$F2,1, 0) + IF(AC$1='Stars and Floors'!$G2,1, 0), 0)` |
| AD2 | `=IF('Stars and Floors'!$A2, IF(AD$1='Stars and Floors'!$C2,1, 0) + IF(AD$1='Stars and Floors'!$D2,1, 0) + IF(AD$1='Stars and Floors'!$E2,1, 0) + IF(AD$1='Stars and Floors'!$F2,1, 0) + IF(AD$1='Stars and Floors'!$G2,1, 0), 0)` |
| AE2 | `=IF('Stars and Floors'!$A2, IF(AE$1='Stars and Floors'!$C2,1, 0) + IF(AE$1='Stars and Floors'!$D2,1, 0) + IF(AE$1='Stars and Floors'!$E2,1, 0) + IF(AE$1='Stars and Floors'!$F2,1, 0) + IF(AE$1='Stars and Floors'!$G2,1, 0), 0)` |
| AF2 | `=IF('Stars and Floors'!$A2, IF(AF$1='Stars and Floors'!$C2,1, 0) + IF(AF$1='Stars and Floors'!$D2,1, 0) + IF(AF$1='Stars and Floors'!$E2,1, 0) + IF(AF$1='Stars and Floors'!$F2,1, 0) + IF(AF$1='Stars and Floors'!$G2,1, 0), 0)` |
| AG2 | `=IF('Stars and Floors'!$A2, IF(AG$1='Stars and Floors'!$C2,1, 0) + IF(AG$1='Stars and Floors'!$D2,1, 0) + IF(AG$1='Stars and Floors'!$E2,1, 0) + IF(AG$1='Stars and Floors'!$F2,1, 0) + IF(AG$1='Stars and Floors'!$G2,1, 0), 0)` |
| AH2 | `=IF('Stars and Floors'!$A2, IF(AH$1='Stars and Floors'!$C2,1, 0) + IF(AH$1='Stars and Floors'!$D2,1, 0) + IF(AH$1='Stars and Floors'!$E2,1, 0) + IF(AH$1='Stars and Floors'!$F2,1, 0) + IF(AH$1='Stars and Floors'!$G2,1, 0), 0)` |
| AI2 | `=IF('Stars and Floors'!$A2, IF(AI$1='Stars and Floors'!$C2,1, 0) + IF(AI$1='Stars and Floors'!$D2,1, 0) + IF(AI$1='Stars and Floors'!$E2,1, 0) + IF(AI$1='Stars and Floors'!$F2,1, 0) + IF(AI$1='Stars and Floors'!$G2,1, 0), 0)` |
| AJ2 | `=IF('Stars and Floors'!$A2, IF(AJ$1='Stars and Floors'!$C2,1, 0) + IF(AJ$1='Stars and Floors'!$D2,1, 0) + IF(AJ$1='Stars and Floors'!$E2,1, 0) + IF(AJ$1='Stars and Floors'!$F2,1, 0) + IF(AJ$1='Stars and Floors'!$G2,1, 0), 0)` |
| AK2 | `=IF('Stars and Floors'!$A2, IF(AK$1='Stars and Floors'!$C2,1, 0) + IF(AK$1='Stars and Floors'!$D2,1, 0) + IF(AK$1='Stars and Floors'!$E2,1, 0) + IF(AK$1='Stars and Floors'!$F2,1, 0) + IF(AK$1='Stars and Floors'!$G2,1, 0), 0)` |
| AL2 | `=IF('Stars and Floors'!$A2, IF(AL$1='Stars and Floors'!$C2,1, 0) + IF(AL$1='Stars and Floors'!$D2,1, 0) + IF(AL$1='Stars and Floors'!$E2,1, 0) + IF(AL$1='Stars and Floors'!$F2,1, 0) + IF(AL$1='Stars and Floors'!$G2,1, 0), 0)` |
| AM2 | `=IF('Stars and Floors'!$A2, IF(AM$1='Stars and Floors'!$C2,1, 0) + IF(AM$1='Stars and Floors'!$D2,1, 0) + IF(AM$1='Stars and Floors'!$E2,1, 0) + IF(AM$1='Stars and Floors'!$F2,1, 0) + IF(AM$1='Stars and Floors'!$G2,1, 0), 0)` |
| AN2 | `=IF('Stars and Floors'!$A2, IF(AN$1='Stars and Floors'!$C2,1, 0) + IF(AN$1='Stars and Floors'!$D2,1, 0) + IF(AN$1='Stars and Floors'!$E2,1, 0) + IF(AN$1='Stars and Floors'!$F2,1, 0) + IF(AN$1='Stars and Floors'!$G2,1, 0), 0)` |
| AO2 | `=IF('Stars and Floors'!$A2, IF(AO$1='Stars and Floors'!$C2,1, 0) + IF(AO$1='Stars and Floors'!$D2,1, 0) + IF(AO$1='Stars and Floors'!$E2,1, 0) + IF(AO$1='Stars and Floors'!$F2,1, 0) + IF(AO$1='Stars and Floors'!$G2,1, 0), 0)` |
| AP2 | `=IF('Stars and Floors'!$A2, IF(AP$1='Stars and Floors'!$C2,1, 0) + IF(AP$1='Stars and Floors'!$D2,1, 0) + IF(AP$1='Stars and Floors'!$E2,1, 0) + IF(AP$1='Stars and Floors'!$F2,1, 0) + IF(AP$1='Stars and Floors'!$G2,1, 0), 0)` |
| AQ2 | `=IF('Stars and Floors'!$A2, IF(AQ$1='Stars and Floors'!$C2,1, 0) + IF(AQ$1='Stars and Floors'!$D2,1, 0) + IF(AQ$1='Stars and Floors'!$E2,1, 0) + IF(AQ$1='Stars and Floors'!$F2,1, 0) + IF(AQ$1='Stars and Floors'!$G2,1, 0), 0)` |
| AR2 | `=IF('Stars and Floors'!$A2, IF(AR$1='Stars and Floors'!$C2,1, 0) + IF(AR$1='Stars and Floors'!$D2,1, 0) + IF(AR$1='Stars and Floors'!$E2,1, 0) + IF(AR$1='Stars and Floors'!$F2,1, 0) + IF(AR$1='Stars and Floors'!$G2,1, 0), 0)` |
| AS2 | `=IF('Stars and Floors'!$A2, IF(AS$1='Stars and Floors'!$C2,1, 0) + IF(AS$1='Stars and Floors'!$D2,1, 0) + IF(AS$1='Stars and Floors'!$E2,1, 0) + IF(AS$1='Stars and Floors'!$F2,1, 0) + IF(AS$1='Stars and Floors'!$G2,1, 0), 0)` |
| AT2 | `=IF('Stars and Floors'!$A2, IF(AT$1='Stars and Floors'!$C2,1, 0) + IF(AT$1='Stars and Floors'!$D2,1, 0) + IF(AT$1='Stars and Floors'!$E2,1, 0) + IF(AT$1='Stars and Floors'!$F2,1, 0) + IF(AT$1='Stars and Floors'!$G2,1, 0), 0)` |
| AU2 | `=IF('Stars and Floors'!$A2, IF(AU$1='Stars and Floors'!$C2,1, 0) + IF(AU$1='Stars and Floors'!$D2,1, 0) + IF(AU$1='Stars and Floors'!$E2,1, 0) + IF(AU$1='Stars and Floors'!$F2,1, 0) + IF(AU$1='Stars and Floors'!$G2,1, 0), 0)` |
| AV2 | `=IF('Stars and Floors'!$A2, IF(AV$1='Stars and Floors'!$C2,1, 0) + IF(AV$1='Stars and Floors'!$D2,1, 0) + IF(AV$1='Stars and Floors'!$E2,1, 0) + IF(AV$1='Stars and Floors'!$F2,1, 0) + IF(AV$1='Stars and Floors'!$G2,1, 0), 0)` |
| AW2 | `=IF('Stars and Floors'!$A2, IF(AW$1='Stars and Floors'!$C2,1, 0) + IF(AW$1='Stars and Floors'!$D2,1, 0) + IF(AW$1='Stars and Floors'!$E2,1, 0) + IF(AW$1='Stars and Floors'!$F2,1, 0) + IF(AW$1='Stars and Floors'!$G2,1, 0), 0)` |
| AX2 | `=IF('Stars and Floors'!$A2, IF(AX$1='Stars and Floors'!$C2,1, 0) + IF(AX$1='Stars and Floors'!$D2,1, 0) + IF(AX$1='Stars and Floors'!$E2,1, 0) + IF(AX$1='Stars and Floors'!$F2,1, 0) + IF(AX$1='Stars and Floors'!$G2,1, 0), 0)` |
| AY2 | `=IF('Stars and Floors'!$A2, IF(AY$1='Stars and Floors'!$C2,1, 0) + IF(AY$1='Stars and Floors'!$D2,1, 0) + IF(AY$1='Stars and Floors'!$E2,1, 0) + IF(AY$1='Stars and Floors'!$F2,1, 0) + IF(AY$1='Stars and Floors'!$G2,1, 0), 0)` |
| AZ2 | `=IF('Stars and Floors'!$A2, IF(AZ$1='Stars and Floors'!$C2,1, 0) + IF(AZ$1='Stars and Floors'!$D2,1, 0) + IF(AZ$1='Stars and Floors'!$E2,1, 0) + IF(AZ$1='Stars and Floors'!$F2,1, 0) + IF(AZ$1='Stars and Floors'!$G2,1, 0), 0)` |
| BA2 | `=IF('Stars and Floors'!$A2, IF(BA$1='Stars and Floors'!$C2,1, 0) + IF(BA$1='Stars and Floors'!$D2,1, 0) + IF(BA$1='Stars and Floors'!$E2,1, 0) + IF(BA$1='Stars and Floors'!$F2,1, 0) + IF(BA$1='Stars and Floors'!$G2,1, 0), 0)` |
| BB2 | `=IF('Stars and Floors'!$A2, IF(BB$1='Stars and Floors'!$C2,1, 0) + IF(BB$1='Stars and Floors'!$D2,1, 0) + IF(BB$1='Stars and Floors'!$E2,1, 0) + IF(BB$1='Stars and Floors'!$F2,1, 0) + IF(BB$1='Stars and Floors'!$G2,1, 0), 0)` |
| BC2 | `=IF('Stars and Floors'!$A2, IF(BC$1='Stars and Floors'!$C2,1, 0) + IF(BC$1='Stars and Floors'!$D2,1, 0) + IF(BC$1='Stars and Floors'!$E2,1, 0) + IF(BC$1='Stars and Floors'!$F2,1, 0) + IF(BC$1='Stars and Floors'!$G2,1, 0), 0)` |
| BD2 | `=IF('Stars and Floors'!$A2, IF(BD$1='Stars and Floors'!$C2,1, 0) + IF(BD$1='Stars and Floors'!$D2,1, 0) + IF(BD$1='Stars and Floors'!$E2,1, 0) + IF(BD$1='Stars and Floors'!$F2,1, 0) + IF(BD$1='Stars and Floors'!$G2,1, 0), 0)` |
| BE2 | `=IF('Stars and Floors'!$A2, IF(BE$1='Stars and Floors'!$C2,1, 0) + IF(BE$1='Stars and Floors'!$D2,1, 0) + IF(BE$1='Stars and Floors'!$E2,1, 0) + IF(BE$1='Stars and Floors'!$F2,1, 0) + IF(BE$1='Stars and Floors'!$G2,1, 0), 0)` |
| BF2 | `=IF('Stars and Floors'!$A2, IF(BF$1='Stars and Floors'!$C2,1, 0) + IF(BF$1='Stars and Floors'!$D2,1, 0) + IF(BF$1='Stars and Floors'!$E2,1, 0) + IF(BF$1='Stars and Floors'!$F2,1, 0) + IF(BF$1='Stars and Floors'!$G2,1, 0), 0)` |
| BG2 | `=IF('Stars and Floors'!$A2, IF(BG$1='Stars and Floors'!$C2,1, 0) + IF(BG$1='Stars and Floors'!$D2,1, 0) + IF(BG$1='Stars and Floors'!$E2,1, 0) + IF(BG$1='Stars and Floors'!$F2,1, 0) + IF(BG$1='Stars and Floors'!$G2,1, 0), 0)` |
| BH2 | `=IF('Stars and Floors'!$A2, IF(BH$1='Stars and Floors'!$C2,1, 0) + IF(BH$1='Stars and Floors'!$D2,1, 0) + IF(BH$1='Stars and Floors'!$E2,1, 0) + IF(BH$1='Stars and Floors'!$F2,1, 0) + IF(BH$1='Stars and Floors'!$G2,1, 0), 0)` |
| BI2 | `=IF('Stars and Floors'!$A2, IF(BI$1='Stars and Floors'!$C2,1, 0) + IF(BI$1='Stars and Floors'!$D2,1, 0) + IF(BI$1='Stars and Floors'!$E2,1, 0) + IF(BI$1='Stars and Floors'!$F2,1, 0) + IF(BI$1='Stars and Floors'!$G2,1, 0), 0)` |
| BJ2 | `=IF('Stars and Floors'!$A2, IF(BJ$1='Stars and Floors'!$C2,1, 0) + IF(BJ$1='Stars and Floors'!$D2,1, 0) + IF(BJ$1='Stars and Floors'!$E2,1, 0) + IF(BJ$1='Stars and Floors'!$F2,1, 0) + IF(BJ$1='Stars and Floors'!$G2,1, 0), 0)` |
| BK2 | `=IF('Stars and Floors'!$A2, IF(BK$1='Stars and Floors'!$C2,1, 0) + IF(BK$1='Stars and Floors'!$D2,1, 0) + IF(BK$1='Stars and Floors'!$E2,1, 0) + IF(BK$1='Stars and Floors'!$F2,1, 0) + IF(BK$1='Stars and Floors'!$G2,1, 0), 0)` |
| BL2 | `=IF('Stars and Floors'!$A2, IF(BL$1='Stars and Floors'!$C2,1, 0) + IF(BL$1='Stars and Floors'!$D2,1, 0) + IF(BL$1='Stars and Floors'!$E2,1, 0) + IF(BL$1='Stars and Floors'!$F2,1, 0) + IF(BL$1='Stars and Floors'!$G2,1, 0), 0)` |
| BM2 | `=IF('Stars and Floors'!$A2, IF(BM$1='Stars and Floors'!$C2,1, 0) + IF(BM$1='Stars and Floors'!$D2,1, 0) + IF(BM$1='Stars and Floors'!$E2,1, 0) + IF(BM$1='Stars and Floors'!$F2,1, 0) + IF(BM$1='Stars and Floors'!$G2,1, 0), 0)` |
| BN2 | `=IF('Stars and Floors'!$A2, IF(BN$1='Stars and Floors'!$C2,1, 0) + IF(BN$1='Stars and Floors'!$D2,1, 0) + IF(BN$1='Stars and Floors'!$E2,1, 0) + IF(BN$1='Stars and Floors'!$F2,1, 0) + IF(BN$1='Stars and Floors'!$G2,1, 0), 0)` |
| BO2 | `=IF('Stars and Floors'!$A2, IF(BO$1='Stars and Floors'!$C2,1, 0) + IF(BO$1='Stars and Floors'!$D2,1, 0) + IF(BO$1='Stars and Floors'!$E2,1, 0) + IF(BO$1='Stars and Floors'!$F2,1, 0) + IF(BO$1='Stars and Floors'!$G2,1, 0), 0)` |
| BP2 | `=IF('Stars and Floors'!$A2, IF(BP$1='Stars and Floors'!$C2,1, 0) + IF(BP$1='Stars and Floors'!$D2,1, 0) + IF(BP$1='Stars and Floors'!$E2,1, 0) + IF(BP$1='Stars and Floors'!$F2,1, 0) + IF(BP$1='Stars and Floors'!$G2,1, 0), 0)` |
| BQ2 | `=IF('Stars and Floors'!$A2, IF(BQ$1='Stars and Floors'!$C2,1, 0) + IF(BQ$1='Stars and Floors'!$D2,1, 0) + IF(BQ$1='Stars and Floors'!$E2,1, 0) + IF(BQ$1='Stars and Floors'!$F2,1, 0) + IF(BQ$1='Stars and Floors'!$G2,1, 0), 0)` |
| BR2 | `=IF('Stars and Floors'!$A2, IF(BR$1='Stars and Floors'!$C2,1, 0) + IF(BR$1='Stars and Floors'!$D2,1, 0) + IF(BR$1='Stars and Floors'!$E2,1, 0) + IF(BR$1='Stars and Floors'!$F2,1, 0) + IF(BR$1='Stars and Floors'!$G2,1, 0), 0)` |
| BS2 | `=IF('Stars and Floors'!$A2, IF(BS$1='Stars and Floors'!$C2,1, 0) + IF(BS$1='Stars and Floors'!$D2,1, 0) + IF(BS$1='Stars and Floors'!$E2,1, 0) + IF(BS$1='Stars and Floors'!$F2,1, 0) + IF(BS$1='Stars and Floors'!$G2,1, 0), 0)` |
| BT2 | `=IF('Stars and Floors'!$A2, IF(BT$1='Stars and Floors'!$C2,1, 0) + IF(BT$1='Stars and Floors'!$D2,1, 0) + IF(BT$1='Stars and Floors'!$E2,1, 0) + IF(BT$1='Stars and Floors'!$F2,1, 0) + IF(BT$1='Stars and Floors'!$G2,1, 0), 0)` |
| BU2 | `=IF('Stars and Floors'!$A2, IF(BU$1='Stars and Floors'!$C2,1, 0) + IF(BU$1='Stars and Floors'!$D2,1, 0) + IF(BU$1='Stars and Floors'!$E2,1, 0) + IF(BU$1='Stars and Floors'!$F2,1, 0) + IF(BU$1='Stars and Floors'!$G2,1, 0), 0)` |
| BV2 | `=IF('Stars and Floors'!$A2, IF(BV$1='Stars and Floors'!$C2,1, 0) + IF(BV$1='Stars and Floors'!$D2,1, 0) + IF(BV$1='Stars and Floors'!$E2,1, 0) + IF(BV$1='Stars and Floors'!$F2,1, 0) + IF(BV$1='Stars and Floors'!$G2,1, 0), 0)` |
| BW2 | `=IF('Stars and Floors'!$A2, IF(BW$1='Stars and Floors'!$C2,1, 0) + IF(BW$1='Stars and Floors'!$D2,1, 0) + IF(BW$1='Stars and Floors'!$E2,1, 0) + IF(BW$1='Stars and Floors'!$F2,1, 0) + IF(BW$1='Stars and Floors'!$G2,1, 0), 0)` |
| BX2 | `=IF('Stars and Floors'!$A2, IF(BX$1='Stars and Floors'!$C2,1, 0) + IF(BX$1='Stars and Floors'!$D2,1, 0) + IF(BX$1='Stars and Floors'!$E2,1, 0) + IF(BX$1='Stars and Floors'!$F2,1, 0) + IF(BX$1='Stars and Floors'!$G2,1, 0), 0)` |
| BY2 | `=IF('Stars and Floors'!$A2, IF(BY$1='Stars and Floors'!$C2,1, 0) + IF(BY$1='Stars and Floors'!$D2,1, 0) + IF(BY$1='Stars and Floors'!$E2,1, 0) + IF(BY$1='Stars and Floors'!$F2,1, 0) + IF(BY$1='Stars and Floors'!$G2,1, 0), 0)` |
| BZ2 | `=IF('Stars and Floors'!$A2, IF(BZ$1='Stars and Floors'!$C2,1, 0) + IF(BZ$1='Stars and Floors'!$D2,1, 0) + IF(BZ$1='Stars and Floors'!$E2,1, 0) + IF(BZ$1='Stars and Floors'!$F2,1, 0) + IF(BZ$1='Stars and Floors'!$G2,1, 0), 0)` |
| CA2 | `=IF('Stars and Floors'!$A2, IF(CA$1='Stars and Floors'!$C2,1, 0) + IF(CA$1='Stars and Floors'!$D2,1, 0) + IF(CA$1='Stars and Floors'!$E2,1, 0) + IF(CA$1='Stars and Floors'!$F2,1, 0) + IF(CA$1='Stars and Floors'!$G2,1, 0), 0)` |
| CB2 | `=IF('Stars and Floors'!$A2, IF(CB$1='Stars and Floors'!$C2,1, 0) + IF(CB$1='Stars and Floors'!$D2,1, 0) + IF(CB$1='Stars and Floors'!$E2,1, 0) + IF(CB$1='Stars and Floors'!$F2,1, 0) + IF(CB$1='Stars and Floors'!$G2,1, 0), 0)` |
| CC2 | `=IF('Stars and Floors'!$A2, IF(CC$1='Stars and Floors'!$C2,1, 0) + IF(CC$1='Stars and Floors'!$D2,1, 0) + IF(CC$1='Stars and Floors'!$E2,1, 0) + IF(CC$1='Stars and Floors'!$F2,1, 0) + IF(CC$1='Stars and Floors'!$G2,1, 0), 0)` |
| CD2 | `=IF('Stars and Floors'!$A2, IF(CD$1='Stars and Floors'!$C2,1, 0) + IF(CD$1='Stars and Floors'!$D2,1, 0) + IF(CD$1='Stars and Floors'!$E2,1, 0) + IF(CD$1='Stars and Floors'!$F2,1, 0) + IF(CD$1='Stars and Floors'!$G2,1, 0), 0)` |
| CE2 | `=IF('Stars and Floors'!$A2, IF(CE$1='Stars and Floors'!$C2,1, 0) + IF(CE$1='Stars and Floors'!$D2,1, 0) + IF(CE$1='Stars and Floors'!$E2,1, 0) + IF(CE$1='Stars and Floors'!$F2,1, 0) + IF(CE$1='Stars and Floors'!$G2,1, 0), 0)` |
| CF2 | `=IF('Stars and Floors'!$A2, IF(CF$1='Stars and Floors'!$C2,1, 0) + IF(CF$1='Stars and Floors'!$D2,1, 0) + IF(CF$1='Stars and Floors'!$E2,1, 0) + IF(CF$1='Stars and Floors'!$F2,1, 0) + IF(CF$1='Stars and Floors'!$G2,1, 0), 0)` |
| CG2 | `=IF('Stars and Floors'!$A2, IF(CG$1='Stars and Floors'!$C2,1, 0) + IF(CG$1='Stars and Floors'!$D2,1, 0) + IF(CG$1='Stars and Floors'!$E2,1, 0) + IF(CG$1='Stars and Floors'!$F2,1, 0) + IF(CG$1='Stars and Floors'!$G2,1, 0), 0)` |
| CH2 | `=IF('Stars and Floors'!$A2, IF(CH$1='Stars and Floors'!$C2,1, 0) + IF(CH$1='Stars and Floors'!$D2,1, 0) + IF(CH$1='Stars and Floors'!$E2,1, 0) + IF(CH$1='Stars and Floors'!$F2,1, 0) + IF(CH$1='Stars and Floors'!$G2,1, 0), 0)` |
| CI2 | `=IF('Stars and Floors'!$A2, IF(CI$1='Stars and Floors'!$C2,1, 0) + IF(CI$1='Stars and Floors'!$D2,1, 0) + IF(CI$1='Stars and Floors'!$E2,1, 0) + IF(CI$1='Stars and Floors'!$F2,1, 0) + IF(CI$1='Stars and Floors'!$G2,1, 0), 0)` |
| CJ2 | `=IF('Stars and Floors'!$A2, IF(CJ$1='Stars and Floors'!$C2,1, 0) + IF(CJ$1='Stars and Floors'!$D2,1, 0) + IF(CJ$1='Stars and Floors'!$E2,1, 0) + IF(CJ$1='Stars and Floors'!$F2,1, 0) + IF(CJ$1='Stars and Floors'!$G2,1, 0), 0)` |
| CK2 | `=IF('Stars and Floors'!$A2, IF(CK$1='Stars and Floors'!$C2,1, 0) + IF(CK$1='Stars and Floors'!$D2,1, 0) + IF(CK$1='Stars and Floors'!$E2,1, 0) + IF(CK$1='Stars and Floors'!$F2,1, 0) + IF(CK$1='Stars and Floors'!$G2,1, 0), 0)` |
| CL2 | `=IF('Stars and Floors'!$A2, IF(CL$1='Stars and Floors'!$C2,1, 0) + IF(CL$1='Stars and Floors'!$D2,1, 0) + IF(CL$1='Stars and Floors'!$E2,1, 0) + IF(CL$1='Stars and Floors'!$F2,1, 0) + IF(CL$1='Stars and Floors'!$G2,1, 0), 0)` |
| CM2 | `=IF('Stars and Floors'!$A2, IF(CM$1='Stars and Floors'!$C2,1, 0) + IF(CM$1='Stars and Floors'!$D2,1, 0) + IF(CM$1='Stars and Floors'!$E2,1, 0) + IF(CM$1='Stars and Floors'!$F2,1, 0) + IF(CM$1='Stars and Floors'!$G2,1, 0), 0)` |
| CN2 | `=IF('Stars and Floors'!$A2, IF(CN$1='Stars and Floors'!$C2,1, 0) + IF(CN$1='Stars and Floors'!$D2,1, 0) + IF(CN$1='Stars and Floors'!$E2,1, 0) + IF(CN$1='Stars and Floors'!$F2,1, 0) + IF(CN$1='Stars and Floors'!$G2,1, 0), 0)` |
| CO2 | `=IF('Stars and Floors'!$A2, IF(CO$1='Stars and Floors'!$C2,1, 0) + IF(CO$1='Stars and Floors'!$D2,1, 0) + IF(CO$1='Stars and Floors'!$E2,1, 0) + IF(CO$1='Stars and Floors'!$F2,1, 0) + IF(CO$1='Stars and Floors'!$G2,1, 0), 0)` |
| CP2 | `=IF('Stars and Floors'!$A2, IF(CP$1='Stars and Floors'!$C2,1, 0) + IF(CP$1='Stars and Floors'!$D2,1, 0) + IF(CP$1='Stars and Floors'!$E2,1, 0) + IF(CP$1='Stars and Floors'!$F2,1, 0) + IF(CP$1='Stars and Floors'!$G2,1, 0), 0)` |
| CQ2 | `=IF('Stars and Floors'!$A2, IF(CQ$1='Stars and Floors'!$C2,1, 0) + IF(CQ$1='Stars and Floors'!$D2,1, 0) + IF(CQ$1='Stars and Floors'!$E2,1, 0) + IF(CQ$1='Stars and Floors'!$F2,1, 0) + IF(CQ$1='Stars and Floors'!$G2,1, 0), 0)` |
| CR2 | `=IF('Stars and Floors'!$A2, IF(CR$1='Stars and Floors'!$C2,1, 0) + IF(CR$1='Stars and Floors'!$D2,1, 0) + IF(CR$1='Stars and Floors'!$E2,1, 0) + IF(CR$1='Stars and Floors'!$F2,1, 0) + IF(CR$1='Stars and Floors'!$G2,1, 0), 0)` |
| CS2 | `=IF('Stars and Floors'!$A2, IF(CS$1='Stars and Floors'!$C2,1, 0) + IF(CS$1='Stars and Floors'!$D2,1, 0) + IF(CS$1='Stars and Floors'!$E2,1, 0) + IF(CS$1='Stars and Floors'!$F2,1, 0) + IF(CS$1='Stars and Floors'!$G2,1, 0), 0)` |
| CT2 | `=IF('Stars and Floors'!$A2, IF(CT$1='Stars and Floors'!$C2,1, 0) + IF(CT$1='Stars and Floors'!$D2,1, 0) + IF(CT$1='Stars and Floors'!$E2,1, 0) + IF(CT$1='Stars and Floors'!$F2,1, 0) + IF(CT$1='Stars and Floors'!$G2,1, 0), 0)` |
| CU2 | `=IF('Stars and Floors'!$A2, IF(CU$1='Stars and Floors'!$C2,1, 0) + IF(CU$1='Stars and Floors'!$D2,1, 0) + IF(CU$1='Stars and Floors'!$E2,1, 0) + IF(CU$1='Stars and Floors'!$F2,1, 0) + IF(CU$1='Stars and Floors'!$G2,1, 0), 0)` |
| CV2 | `=IF('Stars and Floors'!$A2, IF(CV$1='Stars and Floors'!$C2,1, 0) + IF(CV$1='Stars and Floors'!$D2,1, 0) + IF(CV$1='Stars and Floors'!$E2,1, 0) + IF(CV$1='Stars and Floors'!$F2,1, 0) + IF(CV$1='Stars and Floors'!$G2,1, 0), 0)` |
| CW2 | `=IF('Stars and Floors'!$A2, IF(CW$1='Stars and Floors'!$C2,1, 0) + IF(CW$1='Stars and Floors'!$D2,1, 0) + IF(CW$1='Stars and Floors'!$E2,1, 0) + IF(CW$1='Stars and Floors'!$F2,1, 0) + IF(CW$1='Stars and Floors'!$G2,1, 0), 0)` |
| CX2 | `=IF('Stars and Floors'!$A2, IF(CX$1='Stars and Floors'!$C2,1, 0) + IF(CX$1='Stars and Floors'!$D2,1, 0) + IF(CX$1='Stars and Floors'!$E2,1, 0) + IF(CX$1='Stars and Floors'!$F2,1, 0) + IF(CX$1='Stars and Floors'!$G2,1, 0), 0)` |
| CY2 | `=IF('Stars and Floors'!$A2, IF(CY$1='Stars and Floors'!$C2,1, 0) + IF(CY$1='Stars and Floors'!$D2,1, 0) + IF(CY$1='Stars and Floors'!$E2,1, 0) + IF(CY$1='Stars and Floors'!$F2,1, 0) + IF(CY$1='Stars and Floors'!$G2,1, 0), 0)` |
| CZ2 | `=IF('Stars and Floors'!$A2, IF(CZ$1='Stars and Floors'!$C2,1, 0) + IF(CZ$1='Stars and Floors'!$D2,1, 0) + IF(CZ$1='Stars and Floors'!$E2,1, 0) + IF(CZ$1='Stars and Floors'!$F2,1, 0) + IF(CZ$1='Stars and Floors'!$G2,1, 0), 0)` |
| DA2 | `=IF('Stars and Floors'!$A2, IF(DA$1='Stars and Floors'!$C2,1, 0) + IF(DA$1='Stars and Floors'!$D2,1, 0) + IF(DA$1='Stars and Floors'!$E2,1, 0) + IF(DA$1='Stars and Floors'!$F2,1, 0) + IF(DA$1='Stars and Floors'!$G2,1, 0), 0)` |
| DB2 | `=IF('Stars and Floors'!$A2, IF(DB$1='Stars and Floors'!$C2,1, 0) + IF(DB$1='Stars and Floors'!$D2,1, 0) + IF(DB$1='Stars and Floors'!$E2,1, 0) + IF(DB$1='Stars and Floors'!$F2,1, 0) + IF(DB$1='Stars and Floors'!$G2,1, 0), 0)` |
| DC2 | `=IF('Stars and Floors'!$A2, IF(DC$1='Stars and Floors'!$C2,1, 0) + IF(DC$1='Stars and Floors'!$D2,1, 0) + IF(DC$1='Stars and Floors'!$E2,1, 0) + IF(DC$1='Stars and Floors'!$F2,1, 0) + IF(DC$1='Stars and Floors'!$G2,1, 0), 0)` |
| DD2 | `=IF('Stars and Floors'!$A2, IF(DD$1='Stars and Floors'!$C2,1, 0) + IF(DD$1='Stars and Floors'!$D2,1, 0) + IF(DD$1='Stars and Floors'!$E2,1, 0) + IF(DD$1='Stars and Floors'!$F2,1, 0) + IF(DD$1='Stars and Floors'!$G2,1, 0), 0)` |
| DE2 | `=IF('Stars and Floors'!$A2, IF(DE$1='Stars and Floors'!$C2,1, 0) + IF(DE$1='Stars and Floors'!$D2,1, 0) + IF(DE$1='Stars and Floors'!$E2,1, 0) + IF(DE$1='Stars and Floors'!$F2,1, 0) + IF(DE$1='Stars and Floors'!$G2,1, 0), 0)` |
| DF2 | `=IF('Stars and Floors'!$A2, IF(DF$1='Stars and Floors'!$C2,1, 0) + IF(DF$1='Stars and Floors'!$D2,1, 0) + IF(DF$1='Stars and Floors'!$E2,1, 0) + IF(DF$1='Stars and Floors'!$F2,1, 0) + IF(DF$1='Stars and Floors'!$G2,1, 0), 0)` |
| DG2 | `=IF('Stars and Floors'!$A2, IF(DG$1='Stars and Floors'!$C2,1, 0) + IF(DG$1='Stars and Floors'!$D2,1, 0) + IF(DG$1='Stars and Floors'!$E2,1, 0) + IF(DG$1='Stars and Floors'!$F2,1, 0) + IF(DG$1='Stars and Floors'!$G2,1, 0), 0)` |
| DH2 | `=IF('Stars and Floors'!$A2, IF(DH$1='Stars and Floors'!$C2,1, 0) + IF(DH$1='Stars and Floors'!$D2,1, 0) + IF(DH$1='Stars and Floors'!$E2,1, 0) + IF(DH$1='Stars and Floors'!$F2,1, 0) + IF(DH$1='Stars and Floors'!$G2,1, 0), 0)` |
| DI2 | `=IF('Stars and Floors'!$A2, IF(DI$1='Stars and Floors'!$C2,1, 0) + IF(DI$1='Stars and Floors'!$D2,1, 0) + IF(DI$1='Stars and Floors'!$E2,1, 0) + IF(DI$1='Stars and Floors'!$F2,1, 0) + IF(DI$1='Stars and Floors'!$G2,1, 0), 0)` |
| DJ2 | `=IF('Stars and Floors'!$A2, IF(DJ$1='Stars and Floors'!$C2,1, 0) + IF(DJ$1='Stars and Floors'!$D2,1, 0) + IF(DJ$1='Stars and Floors'!$E2,1, 0) + IF(DJ$1='Stars and Floors'!$F2,1, 0) + IF(DJ$1='Stars and Floors'!$G2,1, 0), 0)` |
| DK2 | `=IF('Stars and Floors'!$A2, IF(DK$1='Stars and Floors'!$C2,1, 0) + IF(DK$1='Stars and Floors'!$D2,1, 0) + IF(DK$1='Stars and Floors'!$E2,1, 0) + IF(DK$1='Stars and Floors'!$F2,1, 0) + IF(DK$1='Stars and Floors'!$G2,1, 0), 0)` |
| DL2 | `=IF('Stars and Floors'!$A2, IF(DL$1='Stars and Floors'!$C2,1, 0) + IF(DL$1='Stars and Floors'!$D2,1, 0) + IF(DL$1='Stars and Floors'!$E2,1, 0) + IF(DL$1='Stars and Floors'!$F2,1, 0) + IF(DL$1='Stars and Floors'!$G2,1, 0), 0)` |
| DM2 | `=IF('Stars and Floors'!$A2, IF(DM$1='Stars and Floors'!$C2,1, 0) + IF(DM$1='Stars and Floors'!$D2,1, 0) + IF(DM$1='Stars and Floors'!$E2,1, 0) + IF(DM$1='Stars and Floors'!$F2,1, 0) + IF(DM$1='Stars and Floors'!$G2,1, 0), 0)` |
| DN2 | `=IF('Stars and Floors'!$A2, IF(DN$1='Stars and Floors'!$C2,1, 0) + IF(DN$1='Stars and Floors'!$D2,1, 0) + IF(DN$1='Stars and Floors'!$E2,1, 0) + IF(DN$1='Stars and Floors'!$F2,1, 0) + IF(DN$1='Stars and Floors'!$G2,1, 0), 0)` |
| DO2 | `=IF('Stars and Floors'!$A2, IF(DO$1='Stars and Floors'!$C2,1, 0) + IF(DO$1='Stars and Floors'!$D2,1, 0) + IF(DO$1='Stars and Floors'!$E2,1, 0) + IF(DO$1='Stars and Floors'!$F2,1, 0) + IF(DO$1='Stars and Floors'!$G2,1, 0), 0)` |
| DP2 | `=IF('Stars and Floors'!$A2, IF(DP$1='Stars and Floors'!$C2,1, 0) + IF(DP$1='Stars and Floors'!$D2,1, 0) + IF(DP$1='Stars and Floors'!$E2,1, 0) + IF(DP$1='Stars and Floors'!$F2,1, 0) + IF(DP$1='Stars and Floors'!$G2,1, 0), 0)` |
| DQ2 | `=IF('Stars and Floors'!$A2, IF(DQ$1='Stars and Floors'!$C2,1, 0) + IF(DQ$1='Stars and Floors'!$D2,1, 0) + IF(DQ$1='Stars and Floors'!$E2,1, 0) + IF(DQ$1='Stars and Floors'!$F2,1, 0) + IF(DQ$1='Stars and Floors'!$G2,1, 0), 0)` |
| B3 | `=IF('Stars and Floors'!$A3, IF(B$1='Stars and Floors'!$C3,1, 0) + IF(B$1='Stars and Floors'!$D3,1, 0) + IF(B$1='Stars and Floors'!$E3,1, 0) + IF(B$1='Stars and Floors'!$F3,1, 0) + IF(B$1='Stars and Floors'!$G3,1, 0), 0)` |
| C3 | `=IF('Stars and Floors'!$A3, IF(C$1='Stars and Floors'!$C3,1, 0) + IF(C$1='Stars and Floors'!$D3,1, 0) + IF(C$1='Stars and Floors'!$E3,1, 0) + IF(C$1='Stars and Floors'!$F3,1, 0) + IF(C$1='Stars and Floors'!$G3,1, 0), 0)` |
| D3 | `=IF('Stars and Floors'!$A3, IF(D$1='Stars and Floors'!$C3,1, 0) + IF(D$1='Stars and Floors'!$D3,1, 0) + IF(D$1='Stars and Floors'!$E3,1, 0) + IF(D$1='Stars and Floors'!$F3,1, 0) + IF(D$1='Stars and Floors'!$G3,1, 0), 0)` |
| E3 | `=IF('Stars and Floors'!$A3, IF(E$1='Stars and Floors'!$C3,1, 0) + IF(E$1='Stars and Floors'!$D3,1, 0) + IF(E$1='Stars and Floors'!$E3,1, 0) + IF(E$1='Stars and Floors'!$F3,1, 0) + IF(E$1='Stars and Floors'!$G3,1, 0), 0)` |
| F3 | `=IF('Stars and Floors'!$A3, IF(F$1='Stars and Floors'!$C3,1, 0) + IF(F$1='Stars and Floors'!$D3,1, 0) + IF(F$1='Stars and Floors'!$E3,1, 0) + IF(F$1='Stars and Floors'!$F3,1, 0) + IF(F$1='Stars and Floors'!$G3,1, 0), 0)` |
| G3 | `=IF('Stars and Floors'!$A3, IF(G$1='Stars and Floors'!$C3,1, 0) + IF(G$1='Stars and Floors'!$D3,1, 0) + IF(G$1='Stars and Floors'!$E3,1, 0) + IF(G$1='Stars and Floors'!$F3,1, 0) + IF(G$1='Stars and Floors'!$G3,1, 0), 0)` |
| H3 | `=IF('Stars and Floors'!$A3, IF(H$1='Stars and Floors'!$C3,1, 0) + IF(H$1='Stars and Floors'!$D3,1, 0) + IF(H$1='Stars and Floors'!$E3,1, 0) + IF(H$1='Stars and Floors'!$F3,1, 0) + IF(H$1='Stars and Floors'!$G3,1, 0), 0)` |
| I3 | `=IF('Stars and Floors'!$A3, IF(I$1='Stars and Floors'!$C3,1, 0) + IF(I$1='Stars and Floors'!$D3,1, 0) + IF(I$1='Stars and Floors'!$E3,1, 0) + IF(I$1='Stars and Floors'!$F3,1, 0) + IF(I$1='Stars and Floors'!$G3,1, 0), 0)` |
| J3 | `=IF('Stars and Floors'!$A3, IF(J$1='Stars and Floors'!$C3,1, 0) + IF(J$1='Stars and Floors'!$D3,1, 0) + IF(J$1='Stars and Floors'!$E3,1, 0) + IF(J$1='Stars and Floors'!$F3,1, 0) + IF(J$1='Stars and Floors'!$G3,1, 0), 0)` |
| K3 | `=IF('Stars and Floors'!$A3, IF(K$1='Stars and Floors'!$C3,1, 0) + IF(K$1='Stars and Floors'!$D3,1, 0) + IF(K$1='Stars and Floors'!$E3,1, 0) + IF(K$1='Stars and Floors'!$F3,1, 0) + IF(K$1='Stars and Floors'!$G3,1, 0), 0)` |
| L3 | `=IF('Stars and Floors'!$A3, IF(L$1='Stars and Floors'!$C3,1, 0) + IF(L$1='Stars and Floors'!$D3,1, 0) + IF(L$1='Stars and Floors'!$E3,1, 0) + IF(L$1='Stars and Floors'!$F3,1, 0) + IF(L$1='Stars and Floors'!$G3,1, 0), 0)` |
| M3 | `=IF('Stars and Floors'!$A3, IF(M$1='Stars and Floors'!$C3,1, 0) + IF(M$1='Stars and Floors'!$D3,1, 0) + IF(M$1='Stars and Floors'!$E3,1, 0) + IF(M$1='Stars and Floors'!$F3,1, 0) + IF(M$1='Stars and Floors'!$G3,1, 0), 0)` |
| N3 | `=IF('Stars and Floors'!$A3, IF(N$1='Stars and Floors'!$C3,1, 0) + IF(N$1='Stars and Floors'!$D3,1, 0) + IF(N$1='Stars and Floors'!$E3,1, 0) + IF(N$1='Stars and Floors'!$F3,1, 0) + IF(N$1='Stars and Floors'!$G3,1, 0), 0)` |
| O3 | `=IF('Stars and Floors'!$A3, IF(O$1='Stars and Floors'!$C3,1, 0) + IF(O$1='Stars and Floors'!$D3,1, 0) + IF(O$1='Stars and Floors'!$E3,1, 0) + IF(O$1='Stars and Floors'!$F3,1, 0) + IF(O$1='Stars and Floors'!$G3,1, 0), 0)` |
| P3 | `=IF('Stars and Floors'!$A3, IF(P$1='Stars and Floors'!$C3,1, 0) + IF(P$1='Stars and Floors'!$D3,1, 0) + IF(P$1='Stars and Floors'!$E3,1, 0) + IF(P$1='Stars and Floors'!$F3,1, 0) + IF(P$1='Stars and Floors'!$G3,1, 0), 0)` |
| Q3 | `=IF('Stars and Floors'!$A3, IF(Q$1='Stars and Floors'!$C3,1, 0) + IF(Q$1='Stars and Floors'!$D3,1, 0) + IF(Q$1='Stars and Floors'!$E3,1, 0) + IF(Q$1='Stars and Floors'!$F3,1, 0) + IF(Q$1='Stars and Floors'!$G3,1, 0), 0)` |
| R3 | `=IF('Stars and Floors'!$A3, IF(R$1='Stars and Floors'!$C3,1, 0) + IF(R$1='Stars and Floors'!$D3,1, 0) + IF(R$1='Stars and Floors'!$E3,1, 0) + IF(R$1='Stars and Floors'!$F3,1, 0) + IF(R$1='Stars and Floors'!$G3,1, 0), 0)` |
| S3 | `=IF('Stars and Floors'!$A3, IF(S$1='Stars and Floors'!$C3,1, 0) + IF(S$1='Stars and Floors'!$D3,1, 0) + IF(S$1='Stars and Floors'!$E3,1, 0) + IF(S$1='Stars and Floors'!$F3,1, 0) + IF(S$1='Stars and Floors'!$G3,1, 0), 0)` |
| T3 | `=IF('Stars and Floors'!$A3, IF(T$1='Stars and Floors'!$C3,1, 0) + IF(T$1='Stars and Floors'!$D3,1, 0) + IF(T$1='Stars and Floors'!$E3,1, 0) + IF(T$1='Stars and Floors'!$F3,1, 0) + IF(T$1='Stars and Floors'!$G3,1, 0), 0)` |
| U3 | `=IF('Stars and Floors'!$A3, IF(U$1='Stars and Floors'!$C3,1, 0) + IF(U$1='Stars and Floors'!$D3,1, 0) + IF(U$1='Stars and Floors'!$E3,1, 0) + IF(U$1='Stars and Floors'!$F3,1, 0) + IF(U$1='Stars and Floors'!$G3,1, 0), 0)` |
| V3 | `=IF('Stars and Floors'!$A3, IF(V$1='Stars and Floors'!$C3,1, 0) + IF(V$1='Stars and Floors'!$D3,1, 0) + IF(V$1='Stars and Floors'!$E3,1, 0) + IF(V$1='Stars and Floors'!$F3,1, 0) + IF(V$1='Stars and Floors'!$G3,1, 0), 0)` |
| W3 | `=IF('Stars and Floors'!$A3, IF(W$1='Stars and Floors'!$C3,1, 0) + IF(W$1='Stars and Floors'!$D3,1, 0) + IF(W$1='Stars and Floors'!$E3,1, 0) + IF(W$1='Stars and Floors'!$F3,1, 0) + IF(W$1='Stars and Floors'!$G3,1, 0), 0)` |
| X3 | `=IF('Stars and Floors'!$A3, IF(X$1='Stars and Floors'!$C3,1, 0) + IF(X$1='Stars and Floors'!$D3,1, 0) + IF(X$1='Stars and Floors'!$E3,1, 0) + IF(X$1='Stars and Floors'!$F3,1, 0) + IF(X$1='Stars and Floors'!$G3,1, 0), 0)` |
| Y3 | `=IF('Stars and Floors'!$A3, IF(Y$1='Stars and Floors'!$C3,1, 0) + IF(Y$1='Stars and Floors'!$D3,1, 0) + IF(Y$1='Stars and Floors'!$E3,1, 0) + IF(Y$1='Stars and Floors'!$F3,1, 0) + IF(Y$1='Stars and Floors'!$G3,1, 0), 0)` |
| Z3 | `=IF('Stars and Floors'!$A3, IF(Z$1='Stars and Floors'!$C3,1, 0) + IF(Z$1='Stars and Floors'!$D3,1, 0) + IF(Z$1='Stars and Floors'!$E3,1, 0) + IF(Z$1='Stars and Floors'!$F3,1, 0) + IF(Z$1='Stars and Floors'!$G3,1, 0), 0)` |
| AA3 | `=IF('Stars and Floors'!$A3, IF(AA$1='Stars and Floors'!$C3,1, 0) + IF(AA$1='Stars and Floors'!$D3,1, 0) + IF(AA$1='Stars and Floors'!$E3,1, 0) + IF(AA$1='Stars and Floors'!$F3,1, 0) + IF(AA$1='Stars and Floors'!$G3,1, 0), 0)` |
| AB3 | `=IF('Stars and Floors'!$A3, IF(AB$1='Stars and Floors'!$C3,1, 0) + IF(AB$1='Stars and Floors'!$D3,1, 0) + IF(AB$1='Stars and Floors'!$E3,1, 0) + IF(AB$1='Stars and Floors'!$F3,1, 0) + IF(AB$1='Stars and Floors'!$G3,1, 0), 0)` |
| AC3 | `=IF('Stars and Floors'!$A3, IF(AC$1='Stars and Floors'!$C3,1, 0) + IF(AC$1='Stars and Floors'!$D3,1, 0) + IF(AC$1='Stars and Floors'!$E3,1, 0) + IF(AC$1='Stars and Floors'!$F3,1, 0) + IF(AC$1='Stars and Floors'!$G3,1, 0), 0)` |
| AD3 | `=IF('Stars and Floors'!$A3, IF(AD$1='Stars and Floors'!$C3,1, 0) + IF(AD$1='Stars and Floors'!$D3,1, 0) + IF(AD$1='Stars and Floors'!$E3,1, 0) + IF(AD$1='Stars and Floors'!$F3,1, 0) + IF(AD$1='Stars and Floors'!$G3,1, 0), 0)` |
| AE3 | `=IF('Stars and Floors'!$A3, IF(AE$1='Stars and Floors'!$C3,1, 0) + IF(AE$1='Stars and Floors'!$D3,1, 0) + IF(AE$1='Stars and Floors'!$E3,1, 0) + IF(AE$1='Stars and Floors'!$F3,1, 0) + IF(AE$1='Stars and Floors'!$G3,1, 0), 0)` |
| AF3 | `=IF('Stars and Floors'!$A3, IF(AF$1='Stars and Floors'!$C3,1, 0) + IF(AF$1='Stars and Floors'!$D3,1, 0) + IF(AF$1='Stars and Floors'!$E3,1, 0) + IF(AF$1='Stars and Floors'!$F3,1, 0) + IF(AF$1='Stars and Floors'!$G3,1, 0), 0)` |
| AG3 | `=IF('Stars and Floors'!$A3, IF(AG$1='Stars and Floors'!$C3,1, 0) + IF(AG$1='Stars and Floors'!$D3,1, 0) + IF(AG$1='Stars and Floors'!$E3,1, 0) + IF(AG$1='Stars and Floors'!$F3,1, 0) + IF(AG$1='Stars and Floors'!$G3,1, 0), 0)` |
| AH3 | `=IF('Stars and Floors'!$A3, IF(AH$1='Stars and Floors'!$C3,1, 0) + IF(AH$1='Stars and Floors'!$D3,1, 0) + IF(AH$1='Stars and Floors'!$E3,1, 0) + IF(AH$1='Stars and Floors'!$F3,1, 0) + IF(AH$1='Stars and Floors'!$G3,1, 0), 0)` |
| AI3 | `=IF('Stars and Floors'!$A3, IF(AI$1='Stars and Floors'!$C3,1, 0) + IF(AI$1='Stars and Floors'!$D3,1, 0) + IF(AI$1='Stars and Floors'!$E3,1, 0) + IF(AI$1='Stars and Floors'!$F3,1, 0) + IF(AI$1='Stars and Floors'!$G3,1, 0), 0)` |
| AJ3 | `=IF('Stars and Floors'!$A3, IF(AJ$1='Stars and Floors'!$C3,1, 0) + IF(AJ$1='Stars and Floors'!$D3,1, 0) + IF(AJ$1='Stars and Floors'!$E3,1, 0) + IF(AJ$1='Stars and Floors'!$F3,1, 0) + IF(AJ$1='Stars and Floors'!$G3,1, 0), 0)` |
| AK3 | `=IF('Stars and Floors'!$A3, IF(AK$1='Stars and Floors'!$C3,1, 0) + IF(AK$1='Stars and Floors'!$D3,1, 0) + IF(AK$1='Stars and Floors'!$E3,1, 0) + IF(AK$1='Stars and Floors'!$F3,1, 0) + IF(AK$1='Stars and Floors'!$G3,1, 0), 0)` |
| AL3 | `=IF('Stars and Floors'!$A3, IF(AL$1='Stars and Floors'!$C3,1, 0) + IF(AL$1='Stars and Floors'!$D3,1, 0) + IF(AL$1='Stars and Floors'!$E3,1, 0) + IF(AL$1='Stars and Floors'!$F3,1, 0) + IF(AL$1='Stars and Floors'!$G3,1, 0), 0)` |
| AM3 | `=IF('Stars and Floors'!$A3, IF(AM$1='Stars and Floors'!$C3,1, 0) + IF(AM$1='Stars and Floors'!$D3,1, 0) + IF(AM$1='Stars and Floors'!$E3,1, 0) + IF(AM$1='Stars and Floors'!$F3,1, 0) + IF(AM$1='Stars and Floors'!$G3,1, 0), 0)` |
| AN3 | `=IF('Stars and Floors'!$A3, IF(AN$1='Stars and Floors'!$C3,1, 0) + IF(AN$1='Stars and Floors'!$D3,1, 0) + IF(AN$1='Stars and Floors'!$E3,1, 0) + IF(AN$1='Stars and Floors'!$F3,1, 0) + IF(AN$1='Stars and Floors'!$G3,1, 0), 0)` |
| AO3 | `=IF('Stars and Floors'!$A3, IF(AO$1='Stars and Floors'!$C3,1, 0) + IF(AO$1='Stars and Floors'!$D3,1, 0) + IF(AO$1='Stars and Floors'!$E3,1, 0) + IF(AO$1='Stars and Floors'!$F3,1, 0) + IF(AO$1='Stars and Floors'!$G3,1, 0), 0)` |
| AP3 | `=IF('Stars and Floors'!$A3, IF(AP$1='Stars and Floors'!$C3,1, 0) + IF(AP$1='Stars and Floors'!$D3,1, 0) + IF(AP$1='Stars and Floors'!$E3,1, 0) + IF(AP$1='Stars and Floors'!$F3,1, 0) + IF(AP$1='Stars and Floors'!$G3,1, 0), 0)` |
| AQ3 | `=IF('Stars and Floors'!$A3, IF(AQ$1='Stars and Floors'!$C3,1, 0) + IF(AQ$1='Stars and Floors'!$D3,1, 0) + IF(AQ$1='Stars and Floors'!$E3,1, 0) + IF(AQ$1='Stars and Floors'!$F3,1, 0) + IF(AQ$1='Stars and Floors'!$G3,1, 0), 0)` |
| AR3 | `=IF('Stars and Floors'!$A3, IF(AR$1='Stars and Floors'!$C3,1, 0) + IF(AR$1='Stars and Floors'!$D3,1, 0) + IF(AR$1='Stars and Floors'!$E3,1, 0) + IF(AR$1='Stars and Floors'!$F3,1, 0) + IF(AR$1='Stars and Floors'!$G3,1, 0), 0)` |
| AS3 | `=IF('Stars and Floors'!$A3, IF(AS$1='Stars and Floors'!$C3,1, 0) + IF(AS$1='Stars and Floors'!$D3,1, 0) + IF(AS$1='Stars and Floors'!$E3,1, 0) + IF(AS$1='Stars and Floors'!$F3,1, 0) + IF(AS$1='Stars and Floors'!$G3,1, 0), 0)` |
| AT3 | `=IF('Stars and Floors'!$A3, IF(AT$1='Stars and Floors'!$C3,1, 0) + IF(AT$1='Stars and Floors'!$D3,1, 0) + IF(AT$1='Stars and Floors'!$E3,1, 0) + IF(AT$1='Stars and Floors'!$F3,1, 0) + IF(AT$1='Stars and Floors'!$G3,1, 0), 0)` |
| AU3 | `=IF('Stars and Floors'!$A3, IF(AU$1='Stars and Floors'!$C3,1, 0) + IF(AU$1='Stars and Floors'!$D3,1, 0) + IF(AU$1='Stars and Floors'!$E3,1, 0) + IF(AU$1='Stars and Floors'!$F3,1, 0) + IF(AU$1='Stars and Floors'!$G3,1, 0), 0)` |
| AV3 | `=IF('Stars and Floors'!$A3, IF(AV$1='Stars and Floors'!$C3,1, 0) + IF(AV$1='Stars and Floors'!$D3,1, 0) + IF(AV$1='Stars and Floors'!$E3,1, 0) + IF(AV$1='Stars and Floors'!$F3,1, 0) + IF(AV$1='Stars and Floors'!$G3,1, 0), 0)` |
| AW3 | `=IF('Stars and Floors'!$A3, IF(AW$1='Stars and Floors'!$C3,1, 0) + IF(AW$1='Stars and Floors'!$D3,1, 0) + IF(AW$1='Stars and Floors'!$E3,1, 0) + IF(AW$1='Stars and Floors'!$F3,1, 0) + IF(AW$1='Stars and Floors'!$G3,1, 0), 0)` |
| AX3 | `=IF('Stars and Floors'!$A3, IF(AX$1='Stars and Floors'!$C3,1, 0) + IF(AX$1='Stars and Floors'!$D3,1, 0) + IF(AX$1='Stars and Floors'!$E3,1, 0) + IF(AX$1='Stars and Floors'!$F3,1, 0) + IF(AX$1='Stars and Floors'!$G3,1, 0), 0)` |
| AY3 | `=IF('Stars and Floors'!$A3, IF(AY$1='Stars and Floors'!$C3,1, 0) + IF(AY$1='Stars and Floors'!$D3,1, 0) + IF(AY$1='Stars and Floors'!$E3,1, 0) + IF(AY$1='Stars and Floors'!$F3,1, 0) + IF(AY$1='Stars and Floors'!$G3,1, 0), 0)` |
| AZ3 | `=IF('Stars and Floors'!$A3, IF(AZ$1='Stars and Floors'!$C3,1, 0) + IF(AZ$1='Stars and Floors'!$D3,1, 0) + IF(AZ$1='Stars and Floors'!$E3,1, 0) + IF(AZ$1='Stars and Floors'!$F3,1, 0) + IF(AZ$1='Stars and Floors'!$G3,1, 0), 0)` |
| BA3 | `=IF('Stars and Floors'!$A3, IF(BA$1='Stars and Floors'!$C3,1, 0) + IF(BA$1='Stars and Floors'!$D3,1, 0) + IF(BA$1='Stars and Floors'!$E3,1, 0) + IF(BA$1='Stars and Floors'!$F3,1, 0) + IF(BA$1='Stars and Floors'!$G3,1, 0), 0)` |
| BB3 | `=IF('Stars and Floors'!$A3, IF(BB$1='Stars and Floors'!$C3,1, 0) + IF(BB$1='Stars and Floors'!$D3,1, 0) + IF(BB$1='Stars and Floors'!$E3,1, 0) + IF(BB$1='Stars and Floors'!$F3,1, 0) + IF(BB$1='Stars and Floors'!$G3,1, 0), 0)` |
| BC3 | `=IF('Stars and Floors'!$A3, IF(BC$1='Stars and Floors'!$C3,1, 0) + IF(BC$1='Stars and Floors'!$D3,1, 0) + IF(BC$1='Stars and Floors'!$E3,1, 0) + IF(BC$1='Stars and Floors'!$F3,1, 0) + IF(BC$1='Stars and Floors'!$G3,1, 0), 0)` |
| BD3 | `=IF('Stars and Floors'!$A3, IF(BD$1='Stars and Floors'!$C3,1, 0) + IF(BD$1='Stars and Floors'!$D3,1, 0) + IF(BD$1='Stars and Floors'!$E3,1, 0) + IF(BD$1='Stars and Floors'!$F3,1, 0) + IF(BD$1='Stars and Floors'!$G3,1, 0), 0)` |
| BE3 | `=IF('Stars and Floors'!$A3, IF(BE$1='Stars and Floors'!$C3,1, 0) + IF(BE$1='Stars and Floors'!$D3,1, 0) + IF(BE$1='Stars and Floors'!$E3,1, 0) + IF(BE$1='Stars and Floors'!$F3,1, 0) + IF(BE$1='Stars and Floors'!$G3,1, 0), 0)` |
| BF3 | `=IF('Stars and Floors'!$A3, IF(BF$1='Stars and Floors'!$C3,1, 0) + IF(BF$1='Stars and Floors'!$D3,1, 0) + IF(BF$1='Stars and Floors'!$E3,1, 0) + IF(BF$1='Stars and Floors'!$F3,1, 0) + IF(BF$1='Stars and Floors'!$G3,1, 0), 0)` |
| BG3 | `=IF('Stars and Floors'!$A3, IF(BG$1='Stars and Floors'!$C3,1, 0) + IF(BG$1='Stars and Floors'!$D3,1, 0) + IF(BG$1='Stars and Floors'!$E3,1, 0) + IF(BG$1='Stars and Floors'!$F3,1, 0) + IF(BG$1='Stars and Floors'!$G3,1, 0), 0)` |
| BH3 | `=IF('Stars and Floors'!$A3, IF(BH$1='Stars and Floors'!$C3,1, 0) + IF(BH$1='Stars and Floors'!$D3,1, 0) + IF(BH$1='Stars and Floors'!$E3,1, 0) + IF(BH$1='Stars and Floors'!$F3,1, 0) + IF(BH$1='Stars and Floors'!$G3,1, 0), 0)` |
| BI3 | `=IF('Stars and Floors'!$A3, IF(BI$1='Stars and Floors'!$C3,1, 0) + IF(BI$1='Stars and Floors'!$D3,1, 0) + IF(BI$1='Stars and Floors'!$E3,1, 0) + IF(BI$1='Stars and Floors'!$F3,1, 0) + IF(BI$1='Stars and Floors'!$G3,1, 0), 0)` |
| BJ3 | `=IF('Stars and Floors'!$A3, IF(BJ$1='Stars and Floors'!$C3,1, 0) + IF(BJ$1='Stars and Floors'!$D3,1, 0) + IF(BJ$1='Stars and Floors'!$E3,1, 0) + IF(BJ$1='Stars and Floors'!$F3,1, 0) + IF(BJ$1='Stars and Floors'!$G3,1, 0), 0)` |
| BK3 | `=IF('Stars and Floors'!$A3, IF(BK$1='Stars and Floors'!$C3,1, 0) + IF(BK$1='Stars and Floors'!$D3,1, 0) + IF(BK$1='Stars and Floors'!$E3,1, 0) + IF(BK$1='Stars and Floors'!$F3,1, 0) + IF(BK$1='Stars and Floors'!$G3,1, 0), 0)` |
| BL3 | `=IF('Stars and Floors'!$A3, IF(BL$1='Stars and Floors'!$C3,1, 0) + IF(BL$1='Stars and Floors'!$D3,1, 0) + IF(BL$1='Stars and Floors'!$E3,1, 0) + IF(BL$1='Stars and Floors'!$F3,1, 0) + IF(BL$1='Stars and Floors'!$G3,1, 0), 0)` |
| BM3 | `=IF('Stars and Floors'!$A3, IF(BM$1='Stars and Floors'!$C3,1, 0) + IF(BM$1='Stars and Floors'!$D3,1, 0) + IF(BM$1='Stars and Floors'!$E3,1, 0) + IF(BM$1='Stars and Floors'!$F3,1, 0) + IF(BM$1='Stars and Floors'!$G3,1, 0), 0)` |
| BN3 | `=IF('Stars and Floors'!$A3, IF(BN$1='Stars and Floors'!$C3,1, 0) + IF(BN$1='Stars and Floors'!$D3,1, 0) + IF(BN$1='Stars and Floors'!$E3,1, 0) + IF(BN$1='Stars and Floors'!$F3,1, 0) + IF(BN$1='Stars and Floors'!$G3,1, 0), 0)` |
| BO3 | `=IF('Stars and Floors'!$A3, IF(BO$1='Stars and Floors'!$C3,1, 0) + IF(BO$1='Stars and Floors'!$D3,1, 0) + IF(BO$1='Stars and Floors'!$E3,1, 0) + IF(BO$1='Stars and Floors'!$F3,1, 0) + IF(BO$1='Stars and Floors'!$G3,1, 0), 0)` |
| BP3 | `=IF('Stars and Floors'!$A3, IF(BP$1='Stars and Floors'!$C3,1, 0) + IF(BP$1='Stars and Floors'!$D3,1, 0) + IF(BP$1='Stars and Floors'!$E3,1, 0) + IF(BP$1='Stars and Floors'!$F3,1, 0) + IF(BP$1='Stars and Floors'!$G3,1, 0), 0)` |
| BQ3 | `=IF('Stars and Floors'!$A3, IF(BQ$1='Stars and Floors'!$C3,1, 0) + IF(BQ$1='Stars and Floors'!$D3,1, 0) + IF(BQ$1='Stars and Floors'!$E3,1, 0) + IF(BQ$1='Stars and Floors'!$F3,1, 0) + IF(BQ$1='Stars and Floors'!$G3,1, 0), 0)` |
| BR3 | `=IF('Stars and Floors'!$A3, IF(BR$1='Stars and Floors'!$C3,1, 0) + IF(BR$1='Stars and Floors'!$D3,1, 0) + IF(BR$1='Stars and Floors'!$E3,1, 0) + IF(BR$1='Stars and Floors'!$F3,1, 0) + IF(BR$1='Stars and Floors'!$G3,1, 0), 0)` |
| BS3 | `=IF('Stars and Floors'!$A3, IF(BS$1='Stars and Floors'!$C3,1, 0) + IF(BS$1='Stars and Floors'!$D3,1, 0) + IF(BS$1='Stars and Floors'!$E3,1, 0) + IF(BS$1='Stars and Floors'!$F3,1, 0) + IF(BS$1='Stars and Floors'!$G3,1, 0), 0)` |
| BT3 | `=IF('Stars and Floors'!$A3, IF(BT$1='Stars and Floors'!$C3,1, 0) + IF(BT$1='Stars and Floors'!$D3,1, 0) + IF(BT$1='Stars and Floors'!$E3,1, 0) + IF(BT$1='Stars and Floors'!$F3,1, 0) + IF(BT$1='Stars and Floors'!$G3,1, 0), 0)` |
| BU3 | `=IF('Stars and Floors'!$A3, IF(BU$1='Stars and Floors'!$C3,1, 0) + IF(BU$1='Stars and Floors'!$D3,1, 0) + IF(BU$1='Stars and Floors'!$E3,1, 0) + IF(BU$1='Stars and Floors'!$F3,1, 0) + IF(BU$1='Stars and Floors'!$G3,1, 0), 0)` |
| BV3 | `=IF('Stars and Floors'!$A3, IF(BV$1='Stars and Floors'!$C3,1, 0) + IF(BV$1='Stars and Floors'!$D3,1, 0) + IF(BV$1='Stars and Floors'!$E3,1, 0) + IF(BV$1='Stars and Floors'!$F3,1, 0) + IF(BV$1='Stars and Floors'!$G3,1, 0), 0)` |
| BW3 | `=IF('Stars and Floors'!$A3, IF(BW$1='Stars and Floors'!$C3,1, 0) + IF(BW$1='Stars and Floors'!$D3,1, 0) + IF(BW$1='Stars and Floors'!$E3,1, 0) + IF(BW$1='Stars and Floors'!$F3,1, 0) + IF(BW$1='Stars and Floors'!$G3,1, 0), 0)` |
| BX3 | `=IF('Stars and Floors'!$A3, IF(BX$1='Stars and Floors'!$C3,1, 0) + IF(BX$1='Stars and Floors'!$D3,1, 0) + IF(BX$1='Stars and Floors'!$E3,1, 0) + IF(BX$1='Stars and Floors'!$F3,1, 0) + IF(BX$1='Stars and Floors'!$G3,1, 0), 0)` |
| BY3 | `=IF('Stars and Floors'!$A3, IF(BY$1='Stars and Floors'!$C3,1, 0) + IF(BY$1='Stars and Floors'!$D3,1, 0) + IF(BY$1='Stars and Floors'!$E3,1, 0) + IF(BY$1='Stars and Floors'!$F3,1, 0) + IF(BY$1='Stars and Floors'!$G3,1, 0), 0)` |
| BZ3 | `=IF('Stars and Floors'!$A3, IF(BZ$1='Stars and Floors'!$C3,1, 0) + IF(BZ$1='Stars and Floors'!$D3,1, 0) + IF(BZ$1='Stars and Floors'!$E3,1, 0) + IF(BZ$1='Stars and Floors'!$F3,1, 0) + IF(BZ$1='Stars and Floors'!$G3,1, 0), 0)` |
| CA3 | `=IF('Stars and Floors'!$A3, IF(CA$1='Stars and Floors'!$C3,1, 0) + IF(CA$1='Stars and Floors'!$D3,1, 0) + IF(CA$1='Stars and Floors'!$E3,1, 0) + IF(CA$1='Stars and Floors'!$F3,1, 0) + IF(CA$1='Stars and Floors'!$G3,1, 0), 0)` |
| CB3 | `=IF('Stars and Floors'!$A3, IF(CB$1='Stars and Floors'!$C3,1, 0) + IF(CB$1='Stars and Floors'!$D3,1, 0) + IF(CB$1='Stars and Floors'!$E3,1, 0) + IF(CB$1='Stars and Floors'!$F3,1, 0) + IF(CB$1='Stars and Floors'!$G3,1, 0), 0)` |
| CC3 | `=IF('Stars and Floors'!$A3, IF(CC$1='Stars and Floors'!$C3,1, 0) + IF(CC$1='Stars and Floors'!$D3,1, 0) + IF(CC$1='Stars and Floors'!$E3,1, 0) + IF(CC$1='Stars and Floors'!$F3,1, 0) + IF(CC$1='Stars and Floors'!$G3,1, 0), 0)` |
| CD3 | `=IF('Stars and Floors'!$A3, IF(CD$1='Stars and Floors'!$C3,1, 0) + IF(CD$1='Stars and Floors'!$D3,1, 0) + IF(CD$1='Stars and Floors'!$E3,1, 0) + IF(CD$1='Stars and Floors'!$F3,1, 0) + IF(CD$1='Stars and Floors'!$G3,1, 0), 0)` |
| CE3 | `=IF('Stars and Floors'!$A3, IF(CE$1='Stars and Floors'!$C3,1, 0) + IF(CE$1='Stars and Floors'!$D3,1, 0) + IF(CE$1='Stars and Floors'!$E3,1, 0) + IF(CE$1='Stars and Floors'!$F3,1, 0) + IF(CE$1='Stars and Floors'!$G3,1, 0), 0)` |
| CF3 | `=IF('Stars and Floors'!$A3, IF(CF$1='Stars and Floors'!$C3,1, 0) + IF(CF$1='Stars and Floors'!$D3,1, 0) + IF(CF$1='Stars and Floors'!$E3,1, 0) + IF(CF$1='Stars and Floors'!$F3,1, 0) + IF(CF$1='Stars and Floors'!$G3,1, 0), 0)` |
| CG3 | `=IF('Stars and Floors'!$A3, IF(CG$1='Stars and Floors'!$C3,1, 0) + IF(CG$1='Stars and Floors'!$D3,1, 0) + IF(CG$1='Stars and Floors'!$E3,1, 0) + IF(CG$1='Stars and Floors'!$F3,1, 0) + IF(CG$1='Stars and Floors'!$G3,1, 0), 0)` |
| CH3 | `=IF('Stars and Floors'!$A3, IF(CH$1='Stars and Floors'!$C3,1, 0) + IF(CH$1='Stars and Floors'!$D3,1, 0) + IF(CH$1='Stars and Floors'!$E3,1, 0) + IF(CH$1='Stars and Floors'!$F3,1, 0) + IF(CH$1='Stars and Floors'!$G3,1, 0), 0)` |
| CI3 | `=IF('Stars and Floors'!$A3, IF(CI$1='Stars and Floors'!$C3,1, 0) + IF(CI$1='Stars and Floors'!$D3,1, 0) + IF(CI$1='Stars and Floors'!$E3,1, 0) + IF(CI$1='Stars and Floors'!$F3,1, 0) + IF(CI$1='Stars and Floors'!$G3,1, 0), 0)` |
| CJ3 | `=IF('Stars and Floors'!$A3, IF(CJ$1='Stars and Floors'!$C3,1, 0) + IF(CJ$1='Stars and Floors'!$D3,1, 0) + IF(CJ$1='Stars and Floors'!$E3,1, 0) + IF(CJ$1='Stars and Floors'!$F3,1, 0) + IF(CJ$1='Stars and Floors'!$G3,1, 0), 0)` |
| CK3 | `=IF('Stars and Floors'!$A3, IF(CK$1='Stars and Floors'!$C3,1, 0) + IF(CK$1='Stars and Floors'!$D3,1, 0) + IF(CK$1='Stars and Floors'!$E3,1, 0) + IF(CK$1='Stars and Floors'!$F3,1, 0) + IF(CK$1='Stars and Floors'!$G3,1, 0), 0)` |
| CL3 | `=IF('Stars and Floors'!$A3, IF(CL$1='Stars and Floors'!$C3,1, 0) + IF(CL$1='Stars and Floors'!$D3,1, 0) + IF(CL$1='Stars and Floors'!$E3,1, 0) + IF(CL$1='Stars and Floors'!$F3,1, 0) + IF(CL$1='Stars and Floors'!$G3,1, 0), 0)` |
| CM3 | `=IF('Stars and Floors'!$A3, IF(CM$1='Stars and Floors'!$C3,1, 0) + IF(CM$1='Stars and Floors'!$D3,1, 0) + IF(CM$1='Stars and Floors'!$E3,1, 0) + IF(CM$1='Stars and Floors'!$F3,1, 0) + IF(CM$1='Stars and Floors'!$G3,1, 0), 0)` |
| CN3 | `=IF('Stars and Floors'!$A3, IF(CN$1='Stars and Floors'!$C3,1, 0) + IF(CN$1='Stars and Floors'!$D3,1, 0) + IF(CN$1='Stars and Floors'!$E3,1, 0) + IF(CN$1='Stars and Floors'!$F3,1, 0) + IF(CN$1='Stars and Floors'!$G3,1, 0), 0)` |
| CO3 | `=IF('Stars and Floors'!$A3, IF(CO$1='Stars and Floors'!$C3,1, 0) + IF(CO$1='Stars and Floors'!$D3,1, 0) + IF(CO$1='Stars and Floors'!$E3,1, 0) + IF(CO$1='Stars and Floors'!$F3,1, 0) + IF(CO$1='Stars and Floors'!$G3,1, 0), 0)` |
| CP3 | `=IF('Stars and Floors'!$A3, IF(CP$1='Stars and Floors'!$C3,1, 0) + IF(CP$1='Stars and Floors'!$D3,1, 0) + IF(CP$1='Stars and Floors'!$E3,1, 0) + IF(CP$1='Stars and Floors'!$F3,1, 0) + IF(CP$1='Stars and Floors'!$G3,1, 0), 0)` |
| CQ3 | `=IF('Stars and Floors'!$A3, IF(CQ$1='Stars and Floors'!$C3,1, 0) + IF(CQ$1='Stars and Floors'!$D3,1, 0) + IF(CQ$1='Stars and Floors'!$E3,1, 0) + IF(CQ$1='Stars and Floors'!$F3,1, 0) + IF(CQ$1='Stars and Floors'!$G3,1, 0), 0)` |
| CR3 | `=IF('Stars and Floors'!$A3, IF(CR$1='Stars and Floors'!$C3,1, 0) + IF(CR$1='Stars and Floors'!$D3,1, 0) + IF(CR$1='Stars and Floors'!$E3,1, 0) + IF(CR$1='Stars and Floors'!$F3,1, 0) + IF(CR$1='Stars and Floors'!$G3,1, 0), 0)` |
| CS3 | `=IF('Stars and Floors'!$A3, IF(CS$1='Stars and Floors'!$C3,1, 0) + IF(CS$1='Stars and Floors'!$D3,1, 0) + IF(CS$1='Stars and Floors'!$E3,1, 0) + IF(CS$1='Stars and Floors'!$F3,1, 0) + IF(CS$1='Stars and Floors'!$G3,1, 0), 0)` |
| CT3 | `=IF('Stars and Floors'!$A3, IF(CT$1='Stars and Floors'!$C3,1, 0) + IF(CT$1='Stars and Floors'!$D3,1, 0) + IF(CT$1='Stars and Floors'!$E3,1, 0) + IF(CT$1='Stars and Floors'!$F3,1, 0) + IF(CT$1='Stars and Floors'!$G3,1, 0), 0)` |
| CU3 | `=IF('Stars and Floors'!$A3, IF(CU$1='Stars and Floors'!$C3,1, 0) + IF(CU$1='Stars and Floors'!$D3,1, 0) + IF(CU$1='Stars and Floors'!$E3,1, 0) + IF(CU$1='Stars and Floors'!$F3,1, 0) + IF(CU$1='Stars and Floors'!$G3,1, 0), 0)` |
| CV3 | `=IF('Stars and Floors'!$A3, IF(CV$1='Stars and Floors'!$C3,1, 0) + IF(CV$1='Stars and Floors'!$D3,1, 0) + IF(CV$1='Stars and Floors'!$E3,1, 0) + IF(CV$1='Stars and Floors'!$F3,1, 0) + IF(CV$1='Stars and Floors'!$G3,1, 0), 0)` |
| CW3 | `=IF('Stars and Floors'!$A3, IF(CW$1='Stars and Floors'!$C3,1, 0) + IF(CW$1='Stars and Floors'!$D3,1, 0) + IF(CW$1='Stars and Floors'!$E3,1, 0) + IF(CW$1='Stars and Floors'!$F3,1, 0) + IF(CW$1='Stars and Floors'!$G3,1, 0), 0)` |
| CX3 | `=IF('Stars and Floors'!$A3, IF(CX$1='Stars and Floors'!$C3,1, 0) + IF(CX$1='Stars and Floors'!$D3,1, 0) + IF(CX$1='Stars and Floors'!$E3,1, 0) + IF(CX$1='Stars and Floors'!$F3,1, 0) + IF(CX$1='Stars and Floors'!$G3,1, 0), 0)` |
| CY3 | `=IF('Stars and Floors'!$A3, IF(CY$1='Stars and Floors'!$C3,1, 0) + IF(CY$1='Stars and Floors'!$D3,1, 0) + IF(CY$1='Stars and Floors'!$E3,1, 0) + IF(CY$1='Stars and Floors'!$F3,1, 0) + IF(CY$1='Stars and Floors'!$G3,1, 0), 0)` |
| CZ3 | `=IF('Stars and Floors'!$A3, IF(CZ$1='Stars and Floors'!$C3,1, 0) + IF(CZ$1='Stars and Floors'!$D3,1, 0) + IF(CZ$1='Stars and Floors'!$E3,1, 0) + IF(CZ$1='Stars and Floors'!$F3,1, 0) + IF(CZ$1='Stars and Floors'!$G3,1, 0), 0)` |
| DA3 | `=IF('Stars and Floors'!$A3, IF(DA$1='Stars and Floors'!$C3,1, 0) + IF(DA$1='Stars and Floors'!$D3,1, 0) + IF(DA$1='Stars and Floors'!$E3,1, 0) + IF(DA$1='Stars and Floors'!$F3,1, 0) + IF(DA$1='Stars and Floors'!$G3,1, 0), 0)` |
| DB3 | `=IF('Stars and Floors'!$A3, IF(DB$1='Stars and Floors'!$C3,1, 0) + IF(DB$1='Stars and Floors'!$D3,1, 0) + IF(DB$1='Stars and Floors'!$E3,1, 0) + IF(DB$1='Stars and Floors'!$F3,1, 0) + IF(DB$1='Stars and Floors'!$G3,1, 0), 0)` |
| DC3 | `=IF('Stars and Floors'!$A3, IF(DC$1='Stars and Floors'!$C3,1, 0) + IF(DC$1='Stars and Floors'!$D3,1, 0) + IF(DC$1='Stars and Floors'!$E3,1, 0) + IF(DC$1='Stars and Floors'!$F3,1, 0) + IF(DC$1='Stars and Floors'!$G3,1, 0), 0)` |
| DD3 | `=IF('Stars and Floors'!$A3, IF(DD$1='Stars and Floors'!$C3,1, 0) + IF(DD$1='Stars and Floors'!$D3,1, 0) + IF(DD$1='Stars and Floors'!$E3,1, 0) + IF(DD$1='Stars and Floors'!$F3,1, 0) + IF(DD$1='Stars and Floors'!$G3,1, 0), 0)` |
| DE3 | `=IF('Stars and Floors'!$A3, IF(DE$1='Stars and Floors'!$C3,1, 0) + IF(DE$1='Stars and Floors'!$D3,1, 0) + IF(DE$1='Stars and Floors'!$E3,1, 0) + IF(DE$1='Stars and Floors'!$F3,1, 0) + IF(DE$1='Stars and Floors'!$G3,1, 0), 0)` |
| DF3 | `=IF('Stars and Floors'!$A3, IF(DF$1='Stars and Floors'!$C3,1, 0) + IF(DF$1='Stars and Floors'!$D3,1, 0) + IF(DF$1='Stars and Floors'!$E3,1, 0) + IF(DF$1='Stars and Floors'!$F3,1, 0) + IF(DF$1='Stars and Floors'!$G3,1, 0), 0)` |
| DG3 | `=IF('Stars and Floors'!$A3, IF(DG$1='Stars and Floors'!$C3,1, 0) + IF(DG$1='Stars and Floors'!$D3,1, 0) + IF(DG$1='Stars and Floors'!$E3,1, 0) + IF(DG$1='Stars and Floors'!$F3,1, 0) + IF(DG$1='Stars and Floors'!$G3,1, 0), 0)` |
| DH3 | `=IF('Stars and Floors'!$A3, IF(DH$1='Stars and Floors'!$C3,1, 0) + IF(DH$1='Stars and Floors'!$D3,1, 0) + IF(DH$1='Stars and Floors'!$E3,1, 0) + IF(DH$1='Stars and Floors'!$F3,1, 0) + IF(DH$1='Stars and Floors'!$G3,1, 0), 0)` |
| DI3 | `=IF('Stars and Floors'!$A3, IF(DI$1='Stars and Floors'!$C3,1, 0) + IF(DI$1='Stars and Floors'!$D3,1, 0) + IF(DI$1='Stars and Floors'!$E3,1, 0) + IF(DI$1='Stars and Floors'!$F3,1, 0) + IF(DI$1='Stars and Floors'!$G3,1, 0), 0)` |
| DJ3 | `=IF('Stars and Floors'!$A3, IF(DJ$1='Stars and Floors'!$C3,1, 0) + IF(DJ$1='Stars and Floors'!$D3,1, 0) + IF(DJ$1='Stars and Floors'!$E3,1, 0) + IF(DJ$1='Stars and Floors'!$F3,1, 0) + IF(DJ$1='Stars and Floors'!$G3,1, 0), 0)` |
| DK3 | `=IF('Stars and Floors'!$A3, IF(DK$1='Stars and Floors'!$C3,1, 0) + IF(DK$1='Stars and Floors'!$D3,1, 0) + IF(DK$1='Stars and Floors'!$E3,1, 0) + IF(DK$1='Stars and Floors'!$F3,1, 0) + IF(DK$1='Stars and Floors'!$G3,1, 0), 0)` |
| DL3 | `=IF('Stars and Floors'!$A3, IF(DL$1='Stars and Floors'!$C3,1, 0) + IF(DL$1='Stars and Floors'!$D3,1, 0) + IF(DL$1='Stars and Floors'!$E3,1, 0) + IF(DL$1='Stars and Floors'!$F3,1, 0) + IF(DL$1='Stars and Floors'!$G3,1, 0), 0)` |
| DM3 | `=IF('Stars and Floors'!$A3, IF(DM$1='Stars and Floors'!$C3,1, 0) + IF(DM$1='Stars and Floors'!$D3,1, 0) + IF(DM$1='Stars and Floors'!$E3,1, 0) + IF(DM$1='Stars and Floors'!$F3,1, 0) + IF(DM$1='Stars and Floors'!$G3,1, 0), 0)` |
| DN3 | `=IF('Stars and Floors'!$A3, IF(DN$1='Stars and Floors'!$C3,1, 0) + IF(DN$1='Stars and Floors'!$D3,1, 0) + IF(DN$1='Stars and Floors'!$E3,1, 0) + IF(DN$1='Stars and Floors'!$F3,1, 0) + IF(DN$1='Stars and Floors'!$G3,1, 0), 0)` |
| DO3 | `=IF('Stars and Floors'!$A3, IF(DO$1='Stars and Floors'!$C3,1, 0) + IF(DO$1='Stars and Floors'!$D3,1, 0) + IF(DO$1='Stars and Floors'!$E3,1, 0) + IF(DO$1='Stars and Floors'!$F3,1, 0) + IF(DO$1='Stars and Floors'!$G3,1, 0), 0)` |
| DP3 | `=IF('Stars and Floors'!$A3, IF(DP$1='Stars and Floors'!$C3,1, 0) + IF(DP$1='Stars and Floors'!$D3,1, 0) + IF(DP$1='Stars and Floors'!$E3,1, 0) + IF(DP$1='Stars and Floors'!$F3,1, 0) + IF(DP$1='Stars and Floors'!$G3,1, 0), 0)` |
| DQ3 | `=IF('Stars and Floors'!$A3, IF(DQ$1='Stars and Floors'!$C3,1, 0) + IF(DQ$1='Stars and Floors'!$D3,1, 0) + IF(DQ$1='Stars and Floors'!$E3,1, 0) + IF(DQ$1='Stars and Floors'!$F3,1, 0) + IF(DQ$1='Stars and Floors'!$G3,1, 0), 0)` |
| B4 | `=IF('Stars and Floors'!$A4, IF(B$1='Stars and Floors'!$C4,1, 0) + IF(B$1='Stars and Floors'!$D4,1, 0) + IF(B$1='Stars and Floors'!$E4,1, 0) + IF(B$1='Stars and Floors'!$F4,1, 0) + IF(B$1='Stars and Floors'!$G4,1, 0), 0)` |
| C4 | `=IF('Stars and Floors'!$A4, IF(C$1='Stars and Floors'!$C4,1, 0) + IF(C$1='Stars and Floors'!$D4,1, 0) + IF(C$1='Stars and Floors'!$E4,1, 0) + IF(C$1='Stars and Floors'!$F4,1, 0) + IF(C$1='Stars and Floors'!$G4,1, 0), 0)` |
| D4 | `=IF('Stars and Floors'!$A4, IF(D$1='Stars and Floors'!$C4,1, 0) + IF(D$1='Stars and Floors'!$D4,1, 0) + IF(D$1='Stars and Floors'!$E4,1, 0) + IF(D$1='Stars and Floors'!$F4,1, 0) + IF(D$1='Stars and Floors'!$G4,1, 0), 0)` |
| E4 | `=IF('Stars and Floors'!$A4, IF(E$1='Stars and Floors'!$C4,1, 0) + IF(E$1='Stars and Floors'!$D4,1, 0) + IF(E$1='Stars and Floors'!$E4,1, 0) + IF(E$1='Stars and Floors'!$F4,1, 0) + IF(E$1='Stars and Floors'!$G4,1, 0), 0)` |
| F4 | `=IF('Stars and Floors'!$A4, IF(F$1='Stars and Floors'!$C4,1, 0) + IF(F$1='Stars and Floors'!$D4,1, 0) + IF(F$1='Stars and Floors'!$E4,1, 0) + IF(F$1='Stars and Floors'!$F4,1, 0) + IF(F$1='Stars and Floors'!$G4,1, 0), 0)` |
| G4 | `=IF('Stars and Floors'!$A4, IF(G$1='Stars and Floors'!$C4,1, 0) + IF(G$1='Stars and Floors'!$D4,1, 0) + IF(G$1='Stars and Floors'!$E4,1, 0) + IF(G$1='Stars and Floors'!$F4,1, 0) + IF(G$1='Stars and Floors'!$G4,1, 0), 0)` |
| H4 | `=IF('Stars and Floors'!$A4, IF(H$1='Stars and Floors'!$C4,1, 0) + IF(H$1='Stars and Floors'!$D4,1, 0) + IF(H$1='Stars and Floors'!$E4,1, 0) + IF(H$1='Stars and Floors'!$F4,1, 0) + IF(H$1='Stars and Floors'!$G4,1, 0), 0)` |
| I4 | `=IF('Stars and Floors'!$A4, IF(I$1='Stars and Floors'!$C4,1, 0) + IF(I$1='Stars and Floors'!$D4,1, 0) + IF(I$1='Stars and Floors'!$E4,1, 0) + IF(I$1='Stars and Floors'!$F4,1, 0) + IF(I$1='Stars and Floors'!$G4,1, 0), 0)` |
| J4 | `=IF('Stars and Floors'!$A4, IF(J$1='Stars and Floors'!$C4,1, 0) + IF(J$1='Stars and Floors'!$D4,1, 0) + IF(J$1='Stars and Floors'!$E4,1, 0) + IF(J$1='Stars and Floors'!$F4,1, 0) + IF(J$1='Stars and Floors'!$G4,1, 0), 0)` |
| K4 | `=IF('Stars and Floors'!$A4, IF(K$1='Stars and Floors'!$C4,1, 0) + IF(K$1='Stars and Floors'!$D4,1, 0) + IF(K$1='Stars and Floors'!$E4,1, 0) + IF(K$1='Stars and Floors'!$F4,1, 0) + IF(K$1='Stars and Floors'!$G4,1, 0), 0)` |
| L4 | `=IF('Stars and Floors'!$A4, IF(L$1='Stars and Floors'!$C4,1, 0) + IF(L$1='Stars and Floors'!$D4,1, 0) + IF(L$1='Stars and Floors'!$E4,1, 0) + IF(L$1='Stars and Floors'!$F4,1, 0) + IF(L$1='Stars and Floors'!$G4,1, 0), 0)` |
| M4 | `=IF('Stars and Floors'!$A4, IF(M$1='Stars and Floors'!$C4,1, 0) + IF(M$1='Stars and Floors'!$D4,1, 0) + IF(M$1='Stars and Floors'!$E4,1, 0) + IF(M$1='Stars and Floors'!$F4,1, 0) + IF(M$1='Stars and Floors'!$G4,1, 0), 0)` |
| N4 | `=IF('Stars and Floors'!$A4, IF(N$1='Stars and Floors'!$C4,1, 0) + IF(N$1='Stars and Floors'!$D4,1, 0) + IF(N$1='Stars and Floors'!$E4,1, 0) + IF(N$1='Stars and Floors'!$F4,1, 0) + IF(N$1='Stars and Floors'!$G4,1, 0), 0)` |
| O4 | `=IF('Stars and Floors'!$A4, IF(O$1='Stars and Floors'!$C4,1, 0) + IF(O$1='Stars and Floors'!$D4,1, 0) + IF(O$1='Stars and Floors'!$E4,1, 0) + IF(O$1='Stars and Floors'!$F4,1, 0) + IF(O$1='Stars and Floors'!$G4,1, 0), 0)` |
| P4 | `=IF('Stars and Floors'!$A4, IF(P$1='Stars and Floors'!$C4,1, 0) + IF(P$1='Stars and Floors'!$D4,1, 0) + IF(P$1='Stars and Floors'!$E4,1, 0) + IF(P$1='Stars and Floors'!$F4,1, 0) + IF(P$1='Stars and Floors'!$G4,1, 0), 0)` |
| Q4 | `=IF('Stars and Floors'!$A4, IF(Q$1='Stars and Floors'!$C4,1, 0) + IF(Q$1='Stars and Floors'!$D4,1, 0) + IF(Q$1='Stars and Floors'!$E4,1, 0) + IF(Q$1='Stars and Floors'!$F4,1, 0) + IF(Q$1='Stars and Floors'!$G4,1, 0), 0)` |
| R4 | `=IF('Stars and Floors'!$A4, IF(R$1='Stars and Floors'!$C4,1, 0) + IF(R$1='Stars and Floors'!$D4,1, 0) + IF(R$1='Stars and Floors'!$E4,1, 0) + IF(R$1='Stars and Floors'!$F4,1, 0) + IF(R$1='Stars and Floors'!$G4,1, 0), 0)` |
| S4 | `=IF('Stars and Floors'!$A4, IF(S$1='Stars and Floors'!$C4,1, 0) + IF(S$1='Stars and Floors'!$D4,1, 0) + IF(S$1='Stars and Floors'!$E4,1, 0) + IF(S$1='Stars and Floors'!$F4,1, 0) + IF(S$1='Stars and Floors'!$G4,1, 0), 0)` |
| T4 | `=IF('Stars and Floors'!$A4, IF(T$1='Stars and Floors'!$C4,1, 0) + IF(T$1='Stars and Floors'!$D4,1, 0) + IF(T$1='Stars and Floors'!$E4,1, 0) + IF(T$1='Stars and Floors'!$F4,1, 0) + IF(T$1='Stars and Floors'!$G4,1, 0), 0)` |
| U4 | `=IF('Stars and Floors'!$A4, IF(U$1='Stars and Floors'!$C4,1, 0) + IF(U$1='Stars and Floors'!$D4,1, 0) + IF(U$1='Stars and Floors'!$E4,1, 0) + IF(U$1='Stars and Floors'!$F4,1, 0) + IF(U$1='Stars and Floors'!$G4,1, 0), 0)` |
| V4 | `=IF('Stars and Floors'!$A4, IF(V$1='Stars and Floors'!$C4,1, 0) + IF(V$1='Stars and Floors'!$D4,1, 0) + IF(V$1='Stars and Floors'!$E4,1, 0) + IF(V$1='Stars and Floors'!$F4,1, 0) + IF(V$1='Stars and Floors'!$G4,1, 0), 0)` |
| W4 | `=IF('Stars and Floors'!$A4, IF(W$1='Stars and Floors'!$C4,1, 0) + IF(W$1='Stars and Floors'!$D4,1, 0) + IF(W$1='Stars and Floors'!$E4,1, 0) + IF(W$1='Stars and Floors'!$F4,1, 0) + IF(W$1='Stars and Floors'!$G4,1, 0), 0)` |
| X4 | `=IF('Stars and Floors'!$A4, IF(X$1='Stars and Floors'!$C4,1, 0) + IF(X$1='Stars and Floors'!$D4,1, 0) + IF(X$1='Stars and Floors'!$E4,1, 0) + IF(X$1='Stars and Floors'!$F4,1, 0) + IF(X$1='Stars and Floors'!$G4,1, 0), 0)` |
| Y4 | `=IF('Stars and Floors'!$A4, IF(Y$1='Stars and Floors'!$C4,1, 0) + IF(Y$1='Stars and Floors'!$D4,1, 0) + IF(Y$1='Stars and Floors'!$E4,1, 0) + IF(Y$1='Stars and Floors'!$F4,1, 0) + IF(Y$1='Stars and Floors'!$G4,1, 0), 0)` |
| Z4 | `=IF('Stars and Floors'!$A4, IF(Z$1='Stars and Floors'!$C4,1, 0) + IF(Z$1='Stars and Floors'!$D4,1, 0) + IF(Z$1='Stars and Floors'!$E4,1, 0) + IF(Z$1='Stars and Floors'!$F4,1, 0) + IF(Z$1='Stars and Floors'!$G4,1, 0), 0)` |
| AA4 | `=IF('Stars and Floors'!$A4, IF(AA$1='Stars and Floors'!$C4,1, 0) + IF(AA$1='Stars and Floors'!$D4,1, 0) + IF(AA$1='Stars and Floors'!$E4,1, 0) + IF(AA$1='Stars and Floors'!$F4,1, 0) + IF(AA$1='Stars and Floors'!$G4,1, 0), 0)` |
| AB4 | `=IF('Stars and Floors'!$A4, IF(AB$1='Stars and Floors'!$C4,1, 0) + IF(AB$1='Stars and Floors'!$D4,1, 0) + IF(AB$1='Stars and Floors'!$E4,1, 0) + IF(AB$1='Stars and Floors'!$F4,1, 0) + IF(AB$1='Stars and Floors'!$G4,1, 0), 0)` |
| AC4 | `=IF('Stars and Floors'!$A4, IF(AC$1='Stars and Floors'!$C4,1, 0) + IF(AC$1='Stars and Floors'!$D4,1, 0) + IF(AC$1='Stars and Floors'!$E4,1, 0) + IF(AC$1='Stars and Floors'!$F4,1, 0) + IF(AC$1='Stars and Floors'!$G4,1, 0), 0)` |
| AD4 | `=IF('Stars and Floors'!$A4, IF(AD$1='Stars and Floors'!$C4,1, 0) + IF(AD$1='Stars and Floors'!$D4,1, 0) + IF(AD$1='Stars and Floors'!$E4,1, 0) + IF(AD$1='Stars and Floors'!$F4,1, 0) + IF(AD$1='Stars and Floors'!$G4,1, 0), 0)` |
| AE4 | `=IF('Stars and Floors'!$A4, IF(AE$1='Stars and Floors'!$C4,1, 0) + IF(AE$1='Stars and Floors'!$D4,1, 0) + IF(AE$1='Stars and Floors'!$E4,1, 0) + IF(AE$1='Stars and Floors'!$F4,1, 0) + IF(AE$1='Stars and Floors'!$G4,1, 0), 0)` |
| AF4 | `=IF('Stars and Floors'!$A4, IF(AF$1='Stars and Floors'!$C4,1, 0) + IF(AF$1='Stars and Floors'!$D4,1, 0) + IF(AF$1='Stars and Floors'!$E4,1, 0) + IF(AF$1='Stars and Floors'!$F4,1, 0) + IF(AF$1='Stars and Floors'!$G4,1, 0), 0)` |
| AG4 | `=IF('Stars and Floors'!$A4, IF(AG$1='Stars and Floors'!$C4,1, 0) + IF(AG$1='Stars and Floors'!$D4,1, 0) + IF(AG$1='Stars and Floors'!$E4,1, 0) + IF(AG$1='Stars and Floors'!$F4,1, 0) + IF(AG$1='Stars and Floors'!$G4,1, 0), 0)` |
| AH4 | `=IF('Stars and Floors'!$A4, IF(AH$1='Stars and Floors'!$C4,1, 0) + IF(AH$1='Stars and Floors'!$D4,1, 0) + IF(AH$1='Stars and Floors'!$E4,1, 0) + IF(AH$1='Stars and Floors'!$F4,1, 0) + IF(AH$1='Stars and Floors'!$G4,1, 0), 0)` |
| AI4 | `=IF('Stars and Floors'!$A4, IF(AI$1='Stars and Floors'!$C4,1, 0) + IF(AI$1='Stars and Floors'!$D4,1, 0) + IF(AI$1='Stars and Floors'!$E4,1, 0) + IF(AI$1='Stars and Floors'!$F4,1, 0) + IF(AI$1='Stars and Floors'!$G4,1, 0), 0)` |
| AJ4 | `=IF('Stars and Floors'!$A4, IF(AJ$1='Stars and Floors'!$C4,1, 0) + IF(AJ$1='Stars and Floors'!$D4,1, 0) + IF(AJ$1='Stars and Floors'!$E4,1, 0) + IF(AJ$1='Stars and Floors'!$F4,1, 0) + IF(AJ$1='Stars and Floors'!$G4,1, 0), 0)` |
| AK4 | `=IF('Stars and Floors'!$A4, IF(AK$1='Stars and Floors'!$C4,1, 0) + IF(AK$1='Stars and Floors'!$D4,1, 0) + IF(AK$1='Stars and Floors'!$E4,1, 0) + IF(AK$1='Stars and Floors'!$F4,1, 0) + IF(AK$1='Stars and Floors'!$G4,1, 0), 0)` |
| AL4 | `=IF('Stars and Floors'!$A4, IF(AL$1='Stars and Floors'!$C4,1, 0) + IF(AL$1='Stars and Floors'!$D4,1, 0) + IF(AL$1='Stars and Floors'!$E4,1, 0) + IF(AL$1='Stars and Floors'!$F4,1, 0) + IF(AL$1='Stars and Floors'!$G4,1, 0), 0)` |
| AM4 | `=IF('Stars and Floors'!$A4, IF(AM$1='Stars and Floors'!$C4,1, 0) + IF(AM$1='Stars and Floors'!$D4,1, 0) + IF(AM$1='Stars and Floors'!$E4,1, 0) + IF(AM$1='Stars and Floors'!$F4,1, 0) + IF(AM$1='Stars and Floors'!$G4,1, 0), 0)` |
| AN4 | `=IF('Stars and Floors'!$A4, IF(AN$1='Stars and Floors'!$C4,1, 0) + IF(AN$1='Stars and Floors'!$D4,1, 0) + IF(AN$1='Stars and Floors'!$E4,1, 0) + IF(AN$1='Stars and Floors'!$F4,1, 0) + IF(AN$1='Stars and Floors'!$G4,1, 0), 0)` |
| AO4 | `=IF('Stars and Floors'!$A4, IF(AO$1='Stars and Floors'!$C4,1, 0) + IF(AO$1='Stars and Floors'!$D4,1, 0) + IF(AO$1='Stars and Floors'!$E4,1, 0) + IF(AO$1='Stars and Floors'!$F4,1, 0) + IF(AO$1='Stars and Floors'!$G4,1, 0), 0)` |
| AP4 | `=IF('Stars and Floors'!$A4, IF(AP$1='Stars and Floors'!$C4,1, 0) + IF(AP$1='Stars and Floors'!$D4,1, 0) + IF(AP$1='Stars and Floors'!$E4,1, 0) + IF(AP$1='Stars and Floors'!$F4,1, 0) + IF(AP$1='Stars and Floors'!$G4,1, 0), 0)` |
| AQ4 | `=IF('Stars and Floors'!$A4, IF(AQ$1='Stars and Floors'!$C4,1, 0) + IF(AQ$1='Stars and Floors'!$D4,1, 0) + IF(AQ$1='Stars and Floors'!$E4,1, 0) + IF(AQ$1='Stars and Floors'!$F4,1, 0) + IF(AQ$1='Stars and Floors'!$G4,1, 0), 0)` |
| AR4 | `=IF('Stars and Floors'!$A4, IF(AR$1='Stars and Floors'!$C4,1, 0) + IF(AR$1='Stars and Floors'!$D4,1, 0) + IF(AR$1='Stars and Floors'!$E4,1, 0) + IF(AR$1='Stars and Floors'!$F4,1, 0) + IF(AR$1='Stars and Floors'!$G4,1, 0), 0)` |
| AS4 | `=IF('Stars and Floors'!$A4, IF(AS$1='Stars and Floors'!$C4,1, 0) + IF(AS$1='Stars and Floors'!$D4,1, 0) + IF(AS$1='Stars and Floors'!$E4,1, 0) + IF(AS$1='Stars and Floors'!$F4,1, 0) + IF(AS$1='Stars and Floors'!$G4,1, 0), 0)` |
| AT4 | `=IF('Stars and Floors'!$A4, IF(AT$1='Stars and Floors'!$C4,1, 0) + IF(AT$1='Stars and Floors'!$D4,1, 0) + IF(AT$1='Stars and Floors'!$E4,1, 0) + IF(AT$1='Stars and Floors'!$F4,1, 0) + IF(AT$1='Stars and Floors'!$G4,1, 0), 0)` |
| AU4 | `=IF('Stars and Floors'!$A4, IF(AU$1='Stars and Floors'!$C4,1, 0) + IF(AU$1='Stars and Floors'!$D4,1, 0) + IF(AU$1='Stars and Floors'!$E4,1, 0) + IF(AU$1='Stars and Floors'!$F4,1, 0) + IF(AU$1='Stars and Floors'!$G4,1, 0), 0)` |
| AV4 | `=IF('Stars and Floors'!$A4, IF(AV$1='Stars and Floors'!$C4,1, 0) + IF(AV$1='Stars and Floors'!$D4,1, 0) + IF(AV$1='Stars and Floors'!$E4,1, 0) + IF(AV$1='Stars and Floors'!$F4,1, 0) + IF(AV$1='Stars and Floors'!$G4,1, 0), 0)` |
| AW4 | `=IF('Stars and Floors'!$A4, IF(AW$1='Stars and Floors'!$C4,1, 0) + IF(AW$1='Stars and Floors'!$D4,1, 0) + IF(AW$1='Stars and Floors'!$E4,1, 0) + IF(AW$1='Stars and Floors'!$F4,1, 0) + IF(AW$1='Stars and Floors'!$G4,1, 0), 0)` |
| AX4 | `=IF('Stars and Floors'!$A4, IF(AX$1='Stars and Floors'!$C4,1, 0) + IF(AX$1='Stars and Floors'!$D4,1, 0) + IF(AX$1='Stars and Floors'!$E4,1, 0) + IF(AX$1='Stars and Floors'!$F4,1, 0) + IF(AX$1='Stars and Floors'!$G4,1, 0), 0)` |
| AY4 | `=IF('Stars and Floors'!$A4, IF(AY$1='Stars and Floors'!$C4,1, 0) + IF(AY$1='Stars and Floors'!$D4,1, 0) + IF(AY$1='Stars and Floors'!$E4,1, 0) + IF(AY$1='Stars and Floors'!$F4,1, 0) + IF(AY$1='Stars and Floors'!$G4,1, 0), 0)` |
| AZ4 | `=IF('Stars and Floors'!$A4, IF(AZ$1='Stars and Floors'!$C4,1, 0) + IF(AZ$1='Stars and Floors'!$D4,1, 0) + IF(AZ$1='Stars and Floors'!$E4,1, 0) + IF(AZ$1='Stars and Floors'!$F4,1, 0) + IF(AZ$1='Stars and Floors'!$G4,1, 0), 0)` |
| BA4 | `=IF('Stars and Floors'!$A4, IF(BA$1='Stars and Floors'!$C4,1, 0) + IF(BA$1='Stars and Floors'!$D4,1, 0) + IF(BA$1='Stars and Floors'!$E4,1, 0) + IF(BA$1='Stars and Floors'!$F4,1, 0) + IF(BA$1='Stars and Floors'!$G4,1, 0), 0)` |
| BB4 | `=IF('Stars and Floors'!$A4, IF(BB$1='Stars and Floors'!$C4,1, 0) + IF(BB$1='Stars and Floors'!$D4,1, 0) + IF(BB$1='Stars and Floors'!$E4,1, 0) + IF(BB$1='Stars and Floors'!$F4,1, 0) + IF(BB$1='Stars and Floors'!$G4,1, 0), 0)` |
| BC4 | `=IF('Stars and Floors'!$A4, IF(BC$1='Stars and Floors'!$C4,1, 0) + IF(BC$1='Stars and Floors'!$D4,1, 0) + IF(BC$1='Stars and Floors'!$E4,1, 0) + IF(BC$1='Stars and Floors'!$F4,1, 0) + IF(BC$1='Stars and Floors'!$G4,1, 0), 0)` |
| BD4 | `=IF('Stars and Floors'!$A4, IF(BD$1='Stars and Floors'!$C4,1, 0) + IF(BD$1='Stars and Floors'!$D4,1, 0) + IF(BD$1='Stars and Floors'!$E4,1, 0) + IF(BD$1='Stars and Floors'!$F4,1, 0) + IF(BD$1='Stars and Floors'!$G4,1, 0), 0)` |
| BE4 | `=IF('Stars and Floors'!$A4, IF(BE$1='Stars and Floors'!$C4,1, 0) + IF(BE$1='Stars and Floors'!$D4,1, 0) + IF(BE$1='Stars and Floors'!$E4,1, 0) + IF(BE$1='Stars and Floors'!$F4,1, 0) + IF(BE$1='Stars and Floors'!$G4,1, 0), 0)` |
| BF4 | `=IF('Stars and Floors'!$A4, IF(BF$1='Stars and Floors'!$C4,1, 0) + IF(BF$1='Stars and Floors'!$D4,1, 0) + IF(BF$1='Stars and Floors'!$E4,1, 0) + IF(BF$1='Stars and Floors'!$F4,1, 0) + IF(BF$1='Stars and Floors'!$G4,1, 0), 0)` |
| BG4 | `=IF('Stars and Floors'!$A4, IF(BG$1='Stars and Floors'!$C4,1, 0) + IF(BG$1='Stars and Floors'!$D4,1, 0) + IF(BG$1='Stars and Floors'!$E4,1, 0) + IF(BG$1='Stars and Floors'!$F4,1, 0) + IF(BG$1='Stars and Floors'!$G4,1, 0), 0)` |
| BH4 | `=IF('Stars and Floors'!$A4, IF(BH$1='Stars and Floors'!$C4,1, 0) + IF(BH$1='Stars and Floors'!$D4,1, 0) + IF(BH$1='Stars and Floors'!$E4,1, 0) + IF(BH$1='Stars and Floors'!$F4,1, 0) + IF(BH$1='Stars and Floors'!$G4,1, 0), 0)` |
| BI4 | `=IF('Stars and Floors'!$A4, IF(BI$1='Stars and Floors'!$C4,1, 0) + IF(BI$1='Stars and Floors'!$D4,1, 0) + IF(BI$1='Stars and Floors'!$E4,1, 0) + IF(BI$1='Stars and Floors'!$F4,1, 0) + IF(BI$1='Stars and Floors'!$G4,1, 0), 0)` |
| BJ4 | `=IF('Stars and Floors'!$A4, IF(BJ$1='Stars and Floors'!$C4,1, 0) + IF(BJ$1='Stars and Floors'!$D4,1, 0) + IF(BJ$1='Stars and Floors'!$E4,1, 0) + IF(BJ$1='Stars and Floors'!$F4,1, 0) + IF(BJ$1='Stars and Floors'!$G4,1, 0), 0)` |
| BK4 | `=IF('Stars and Floors'!$A4, IF(BK$1='Stars and Floors'!$C4,1, 0) + IF(BK$1='Stars and Floors'!$D4,1, 0) + IF(BK$1='Stars and Floors'!$E4,1, 0) + IF(BK$1='Stars and Floors'!$F4,1, 0) + IF(BK$1='Stars and Floors'!$G4,1, 0), 0)` |
| BL4 | `=IF('Stars and Floors'!$A4, IF(BL$1='Stars and Floors'!$C4,1, 0) + IF(BL$1='Stars and Floors'!$D4,1, 0) + IF(BL$1='Stars and Floors'!$E4,1, 0) + IF(BL$1='Stars and Floors'!$F4,1, 0) + IF(BL$1='Stars and Floors'!$G4,1, 0), 0)` |
| BM4 | `=IF('Stars and Floors'!$A4, IF(BM$1='Stars and Floors'!$C4,1, 0) + IF(BM$1='Stars and Floors'!$D4,1, 0) + IF(BM$1='Stars and Floors'!$E4,1, 0) + IF(BM$1='Stars and Floors'!$F4,1, 0) + IF(BM$1='Stars and Floors'!$G4,1, 0), 0)` |
| BN4 | `=IF('Stars and Floors'!$A4, IF(BN$1='Stars and Floors'!$C4,1, 0) + IF(BN$1='Stars and Floors'!$D4,1, 0) + IF(BN$1='Stars and Floors'!$E4,1, 0) + IF(BN$1='Stars and Floors'!$F4,1, 0) + IF(BN$1='Stars and Floors'!$G4,1, 0), 0)` |
| BO4 | `=IF('Stars and Floors'!$A4, IF(BO$1='Stars and Floors'!$C4,1, 0) + IF(BO$1='Stars and Floors'!$D4,1, 0) + IF(BO$1='Stars and Floors'!$E4,1, 0) + IF(BO$1='Stars and Floors'!$F4,1, 0) + IF(BO$1='Stars and Floors'!$G4,1, 0), 0)` |
| BP4 | `=IF('Stars and Floors'!$A4, IF(BP$1='Stars and Floors'!$C4,1, 0) + IF(BP$1='Stars and Floors'!$D4,1, 0) + IF(BP$1='Stars and Floors'!$E4,1, 0) + IF(BP$1='Stars and Floors'!$F4,1, 0) + IF(BP$1='Stars and Floors'!$G4,1, 0), 0)` |
| BQ4 | `=IF('Stars and Floors'!$A4, IF(BQ$1='Stars and Floors'!$C4,1, 0) + IF(BQ$1='Stars and Floors'!$D4,1, 0) + IF(BQ$1='Stars and Floors'!$E4,1, 0) + IF(BQ$1='Stars and Floors'!$F4,1, 0) + IF(BQ$1='Stars and Floors'!$G4,1, 0), 0)` |
| BR4 | `=IF('Stars and Floors'!$A4, IF(BR$1='Stars and Floors'!$C4,1, 0) + IF(BR$1='Stars and Floors'!$D4,1, 0) + IF(BR$1='Stars and Floors'!$E4,1, 0) + IF(BR$1='Stars and Floors'!$F4,1, 0) + IF(BR$1='Stars and Floors'!$G4,1, 0), 0)` |
| BS4 | `=IF('Stars and Floors'!$A4, IF(BS$1='Stars and Floors'!$C4,1, 0) + IF(BS$1='Stars and Floors'!$D4,1, 0) + IF(BS$1='Stars and Floors'!$E4,1, 0) + IF(BS$1='Stars and Floors'!$F4,1, 0) + IF(BS$1='Stars and Floors'!$G4,1, 0), 0)` |
| BT4 | `=IF('Stars and Floors'!$A4, IF(BT$1='Stars and Floors'!$C4,1, 0) + IF(BT$1='Stars and Floors'!$D4,1, 0) + IF(BT$1='Stars and Floors'!$E4,1, 0) + IF(BT$1='Stars and Floors'!$F4,1, 0) + IF(BT$1='Stars and Floors'!$G4,1, 0), 0)` |
| BU4 | `=IF('Stars and Floors'!$A4, IF(BU$1='Stars and Floors'!$C4,1, 0) + IF(BU$1='Stars and Floors'!$D4,1, 0) + IF(BU$1='Stars and Floors'!$E4,1, 0) + IF(BU$1='Stars and Floors'!$F4,1, 0) + IF(BU$1='Stars and Floors'!$G4,1, 0), 0)` |
| BV4 | `=IF('Stars and Floors'!$A4, IF(BV$1='Stars and Floors'!$C4,1, 0) + IF(BV$1='Stars and Floors'!$D4,1, 0) + IF(BV$1='Stars and Floors'!$E4,1, 0) + IF(BV$1='Stars and Floors'!$F4,1, 0) + IF(BV$1='Stars and Floors'!$G4,1, 0), 0)` |
| BW4 | `=IF('Stars and Floors'!$A4, IF(BW$1='Stars and Floors'!$C4,1, 0) + IF(BW$1='Stars and Floors'!$D4,1, 0) + IF(BW$1='Stars and Floors'!$E4,1, 0) + IF(BW$1='Stars and Floors'!$F4,1, 0) + IF(BW$1='Stars and Floors'!$G4,1, 0), 0)` |
| BX4 | `=IF('Stars and Floors'!$A4, IF(BX$1='Stars and Floors'!$C4,1, 0) + IF(BX$1='Stars and Floors'!$D4,1, 0) + IF(BX$1='Stars and Floors'!$E4,1, 0) + IF(BX$1='Stars and Floors'!$F4,1, 0) + IF(BX$1='Stars and Floors'!$G4,1, 0), 0)` |
| BY4 | `=IF('Stars and Floors'!$A4, IF(BY$1='Stars and Floors'!$C4,1, 0) + IF(BY$1='Stars and Floors'!$D4,1, 0) + IF(BY$1='Stars and Floors'!$E4,1, 0) + IF(BY$1='Stars and Floors'!$F4,1, 0) + IF(BY$1='Stars and Floors'!$G4,1, 0), 0)` |
| BZ4 | `=IF('Stars and Floors'!$A4, IF(BZ$1='Stars and Floors'!$C4,1, 0) + IF(BZ$1='Stars and Floors'!$D4,1, 0) + IF(BZ$1='Stars and Floors'!$E4,1, 0) + IF(BZ$1='Stars and Floors'!$F4,1, 0) + IF(BZ$1='Stars and Floors'!$G4,1, 0), 0)` |
| CA4 | `=IF('Stars and Floors'!$A4, IF(CA$1='Stars and Floors'!$C4,1, 0) + IF(CA$1='Stars and Floors'!$D4,1, 0) + IF(CA$1='Stars and Floors'!$E4,1, 0) + IF(CA$1='Stars and Floors'!$F4,1, 0) + IF(CA$1='Stars and Floors'!$G4,1, 0), 0)` |
| CB4 | `=IF('Stars and Floors'!$A4, IF(CB$1='Stars and Floors'!$C4,1, 0) + IF(CB$1='Stars and Floors'!$D4,1, 0) + IF(CB$1='Stars and Floors'!$E4,1, 0) + IF(CB$1='Stars and Floors'!$F4,1, 0) + IF(CB$1='Stars and Floors'!$G4,1, 0), 0)` |
| CC4 | `=IF('Stars and Floors'!$A4, IF(CC$1='Stars and Floors'!$C4,1, 0) + IF(CC$1='Stars and Floors'!$D4,1, 0) + IF(CC$1='Stars and Floors'!$E4,1, 0) + IF(CC$1='Stars and Floors'!$F4,1, 0) + IF(CC$1='Stars and Floors'!$G4,1, 0), 0)` |
| CD4 | `=IF('Stars and Floors'!$A4, IF(CD$1='Stars and Floors'!$C4,1, 0) + IF(CD$1='Stars and Floors'!$D4,1, 0) + IF(CD$1='Stars and Floors'!$E4,1, 0) + IF(CD$1='Stars and Floors'!$F4,1, 0) + IF(CD$1='Stars and Floors'!$G4,1, 0), 0)` |
| CE4 | `=IF('Stars and Floors'!$A4, IF(CE$1='Stars and Floors'!$C4,1, 0) + IF(CE$1='Stars and Floors'!$D4,1, 0) + IF(CE$1='Stars and Floors'!$E4,1, 0) + IF(CE$1='Stars and Floors'!$F4,1, 0) + IF(CE$1='Stars and Floors'!$G4,1, 0), 0)` |
| CF4 | `=IF('Stars and Floors'!$A4, IF(CF$1='Stars and Floors'!$C4,1, 0) + IF(CF$1='Stars and Floors'!$D4,1, 0) + IF(CF$1='Stars and Floors'!$E4,1, 0) + IF(CF$1='Stars and Floors'!$F4,1, 0) + IF(CF$1='Stars and Floors'!$G4,1, 0), 0)` |
| CG4 | `=IF('Stars and Floors'!$A4, IF(CG$1='Stars and Floors'!$C4,1, 0) + IF(CG$1='Stars and Floors'!$D4,1, 0) + IF(CG$1='Stars and Floors'!$E4,1, 0) + IF(CG$1='Stars and Floors'!$F4,1, 0) + IF(CG$1='Stars and Floors'!$G4,1, 0), 0)` |
| CH4 | `=IF('Stars and Floors'!$A4, IF(CH$1='Stars and Floors'!$C4,1, 0) + IF(CH$1='Stars and Floors'!$D4,1, 0) + IF(CH$1='Stars and Floors'!$E4,1, 0) + IF(CH$1='Stars and Floors'!$F4,1, 0) + IF(CH$1='Stars and Floors'!$G4,1, 0), 0)` |
| CI4 | `=IF('Stars and Floors'!$A4, IF(CI$1='Stars and Floors'!$C4,1, 0) + IF(CI$1='Stars and Floors'!$D4,1, 0) + IF(CI$1='Stars and Floors'!$E4,1, 0) + IF(CI$1='Stars and Floors'!$F4,1, 0) + IF(CI$1='Stars and Floors'!$G4,1, 0), 0)` |
| CJ4 | `=IF('Stars and Floors'!$A4, IF(CJ$1='Stars and Floors'!$C4,1, 0) + IF(CJ$1='Stars and Floors'!$D4,1, 0) + IF(CJ$1='Stars and Floors'!$E4,1, 0) + IF(CJ$1='Stars and Floors'!$F4,1, 0) + IF(CJ$1='Stars and Floors'!$G4,1, 0), 0)` |
| CK4 | `=IF('Stars and Floors'!$A4, IF(CK$1='Stars and Floors'!$C4,1, 0) + IF(CK$1='Stars and Floors'!$D4,1, 0) + IF(CK$1='Stars and Floors'!$E4,1, 0) + IF(CK$1='Stars and Floors'!$F4,1, 0) + IF(CK$1='Stars and Floors'!$G4,1, 0), 0)` |
| CL4 | `=IF('Stars and Floors'!$A4, IF(CL$1='Stars and Floors'!$C4,1, 0) + IF(CL$1='Stars and Floors'!$D4,1, 0) + IF(CL$1='Stars and Floors'!$E4,1, 0) + IF(CL$1='Stars and Floors'!$F4,1, 0) + IF(CL$1='Stars and Floors'!$G4,1, 0), 0)` |
| CM4 | `=IF('Stars and Floors'!$A4, IF(CM$1='Stars and Floors'!$C4,1, 0) + IF(CM$1='Stars and Floors'!$D4,1, 0) + IF(CM$1='Stars and Floors'!$E4,1, 0) + IF(CM$1='Stars and Floors'!$F4,1, 0) + IF(CM$1='Stars and Floors'!$G4,1, 0), 0)` |
| CN4 | `=IF('Stars and Floors'!$A4, IF(CN$1='Stars and Floors'!$C4,1, 0) + IF(CN$1='Stars and Floors'!$D4,1, 0) + IF(CN$1='Stars and Floors'!$E4,1, 0) + IF(CN$1='Stars and Floors'!$F4,1, 0) + IF(CN$1='Stars and Floors'!$G4,1, 0), 0)` |
| CO4 | `=IF('Stars and Floors'!$A4, IF(CO$1='Stars and Floors'!$C4,1, 0) + IF(CO$1='Stars and Floors'!$D4,1, 0) + IF(CO$1='Stars and Floors'!$E4,1, 0) + IF(CO$1='Stars and Floors'!$F4,1, 0) + IF(CO$1='Stars and Floors'!$G4,1, 0), 0)` |
| CP4 | `=IF('Stars and Floors'!$A4, IF(CP$1='Stars and Floors'!$C4,1, 0) + IF(CP$1='Stars and Floors'!$D4,1, 0) + IF(CP$1='Stars and Floors'!$E4,1, 0) + IF(CP$1='Stars and Floors'!$F4,1, 0) + IF(CP$1='Stars and Floors'!$G4,1, 0), 0)` |
| CQ4 | `=IF('Stars and Floors'!$A4, IF(CQ$1='Stars and Floors'!$C4,1, 0) + IF(CQ$1='Stars and Floors'!$D4,1, 0) + IF(CQ$1='Stars and Floors'!$E4,1, 0) + IF(CQ$1='Stars and Floors'!$F4,1, 0) + IF(CQ$1='Stars and Floors'!$G4,1, 0), 0)` |
| CR4 | `=IF('Stars and Floors'!$A4, IF(CR$1='Stars and Floors'!$C4,1, 0) + IF(CR$1='Stars and Floors'!$D4,1, 0) + IF(CR$1='Stars and Floors'!$E4,1, 0) + IF(CR$1='Stars and Floors'!$F4,1, 0) + IF(CR$1='Stars and Floors'!$G4,1, 0), 0)` |
| CS4 | `=IF('Stars and Floors'!$A4, IF(CS$1='Stars and Floors'!$C4,1, 0) + IF(CS$1='Stars and Floors'!$D4,1, 0) + IF(CS$1='Stars and Floors'!$E4,1, 0) + IF(CS$1='Stars and Floors'!$F4,1, 0) + IF(CS$1='Stars and Floors'!$G4,1, 0), 0)` |
| CT4 | `=IF('Stars and Floors'!$A4, IF(CT$1='Stars and Floors'!$C4,1, 0) + IF(CT$1='Stars and Floors'!$D4,1, 0) + IF(CT$1='Stars and Floors'!$E4,1, 0) + IF(CT$1='Stars and Floors'!$F4,1, 0) + IF(CT$1='Stars and Floors'!$G4,1, 0), 0)` |
| CU4 | `=IF('Stars and Floors'!$A4, IF(CU$1='Stars and Floors'!$C4,1, 0) + IF(CU$1='Stars and Floors'!$D4,1, 0) + IF(CU$1='Stars and Floors'!$E4,1, 0) + IF(CU$1='Stars and Floors'!$F4,1, 0) + IF(CU$1='Stars and Floors'!$G4,1, 0), 0)` |
| CV4 | `=IF('Stars and Floors'!$A4, IF(CV$1='Stars and Floors'!$C4,1, 0) + IF(CV$1='Stars and Floors'!$D4,1, 0) + IF(CV$1='Stars and Floors'!$E4,1, 0) + IF(CV$1='Stars and Floors'!$F4,1, 0) + IF(CV$1='Stars and Floors'!$G4,1, 0), 0)` |
| CW4 | `=IF('Stars and Floors'!$A4, IF(CW$1='Stars and Floors'!$C4,1, 0) + IF(CW$1='Stars and Floors'!$D4,1, 0) + IF(CW$1='Stars and Floors'!$E4,1, 0) + IF(CW$1='Stars and Floors'!$F4,1, 0) + IF(CW$1='Stars and Floors'!$G4,1, 0), 0)` |
| CX4 | `=IF('Stars and Floors'!$A4, IF(CX$1='Stars and Floors'!$C4,1, 0) + IF(CX$1='Stars and Floors'!$D4,1, 0) + IF(CX$1='Stars and Floors'!$E4,1, 0) + IF(CX$1='Stars and Floors'!$F4,1, 0) + IF(CX$1='Stars and Floors'!$G4,1, 0), 0)` |
| CY4 | `=IF('Stars and Floors'!$A4, IF(CY$1='Stars and Floors'!$C4,1, 0) + IF(CY$1='Stars and Floors'!$D4,1, 0) + IF(CY$1='Stars and Floors'!$E4,1, 0) + IF(CY$1='Stars and Floors'!$F4,1, 0) + IF(CY$1='Stars and Floors'!$G4,1, 0), 0)` |
| CZ4 | `=IF('Stars and Floors'!$A4, IF(CZ$1='Stars and Floors'!$C4,1, 0) + IF(CZ$1='Stars and Floors'!$D4,1, 0) + IF(CZ$1='Stars and Floors'!$E4,1, 0) + IF(CZ$1='Stars and Floors'!$F4,1, 0) + IF(CZ$1='Stars and Floors'!$G4,1, 0), 0)` |
| DA4 | `=IF('Stars and Floors'!$A4, IF(DA$1='Stars and Floors'!$C4,1, 0) + IF(DA$1='Stars and Floors'!$D4,1, 0) + IF(DA$1='Stars and Floors'!$E4,1, 0) + IF(DA$1='Stars and Floors'!$F4,1, 0) + IF(DA$1='Stars and Floors'!$G4,1, 0), 0)` |
| DB4 | `=IF('Stars and Floors'!$A4, IF(DB$1='Stars and Floors'!$C4,1, 0) + IF(DB$1='Stars and Floors'!$D4,1, 0) + IF(DB$1='Stars and Floors'!$E4,1, 0) + IF(DB$1='Stars and Floors'!$F4,1, 0) + IF(DB$1='Stars and Floors'!$G4,1, 0), 0)` |
| DC4 | `=IF('Stars and Floors'!$A4, IF(DC$1='Stars and Floors'!$C4,1, 0) + IF(DC$1='Stars and Floors'!$D4,1, 0) + IF(DC$1='Stars and Floors'!$E4,1, 0) + IF(DC$1='Stars and Floors'!$F4,1, 0) + IF(DC$1='Stars and Floors'!$G4,1, 0), 0)` |
| DD4 | `=IF('Stars and Floors'!$A4, IF(DD$1='Stars and Floors'!$C4,1, 0) + IF(DD$1='Stars and Floors'!$D4,1, 0) + IF(DD$1='Stars and Floors'!$E4,1, 0) + IF(DD$1='Stars and Floors'!$F4,1, 0) + IF(DD$1='Stars and Floors'!$G4,1, 0), 0)` |
| DE4 | `=IF('Stars and Floors'!$A4, IF(DE$1='Stars and Floors'!$C4,1, 0) + IF(DE$1='Stars and Floors'!$D4,1, 0) + IF(DE$1='Stars and Floors'!$E4,1, 0) + IF(DE$1='Stars and Floors'!$F4,1, 0) + IF(DE$1='Stars and Floors'!$G4,1, 0), 0)` |
| DF4 | `=IF('Stars and Floors'!$A4, IF(DF$1='Stars and Floors'!$C4,1, 0) + IF(DF$1='Stars and Floors'!$D4,1, 0) + IF(DF$1='Stars and Floors'!$E4,1, 0) + IF(DF$1='Stars and Floors'!$F4,1, 0) + IF(DF$1='Stars and Floors'!$G4,1, 0), 0)` |
| DG4 | `=IF('Stars and Floors'!$A4, IF(DG$1='Stars and Floors'!$C4,1, 0) + IF(DG$1='Stars and Floors'!$D4,1, 0) + IF(DG$1='Stars and Floors'!$E4,1, 0) + IF(DG$1='Stars and Floors'!$F4,1, 0) + IF(DG$1='Stars and Floors'!$G4,1, 0), 0)` |
| DH4 | `=IF('Stars and Floors'!$A4, IF(DH$1='Stars and Floors'!$C4,1, 0) + IF(DH$1='Stars and Floors'!$D4,1, 0) + IF(DH$1='Stars and Floors'!$E4,1, 0) + IF(DH$1='Stars and Floors'!$F4,1, 0) + IF(DH$1='Stars and Floors'!$G4,1, 0), 0)` |
| DI4 | `=IF('Stars and Floors'!$A4, IF(DI$1='Stars and Floors'!$C4,1, 0) + IF(DI$1='Stars and Floors'!$D4,1, 0) + IF(DI$1='Stars and Floors'!$E4,1, 0) + IF(DI$1='Stars and Floors'!$F4,1, 0) + IF(DI$1='Stars and Floors'!$G4,1, 0), 0)` |
| DJ4 | `=IF('Stars and Floors'!$A4, IF(DJ$1='Stars and Floors'!$C4,1, 0) + IF(DJ$1='Stars and Floors'!$D4,1, 0) + IF(DJ$1='Stars and Floors'!$E4,1, 0) + IF(DJ$1='Stars and Floors'!$F4,1, 0) + IF(DJ$1='Stars and Floors'!$G4,1, 0), 0)` |
| DK4 | `=IF('Stars and Floors'!$A4, IF(DK$1='Stars and Floors'!$C4,1, 0) + IF(DK$1='Stars and Floors'!$D4,1, 0) + IF(DK$1='Stars and Floors'!$E4,1, 0) + IF(DK$1='Stars and Floors'!$F4,1, 0) + IF(DK$1='Stars and Floors'!$G4,1, 0), 0)` |
| DL4 | `=IF('Stars and Floors'!$A4, IF(DL$1='Stars and Floors'!$C4,1, 0) + IF(DL$1='Stars and Floors'!$D4,1, 0) + IF(DL$1='Stars and Floors'!$E4,1, 0) + IF(DL$1='Stars and Floors'!$F4,1, 0) + IF(DL$1='Stars and Floors'!$G4,1, 0), 0)` |
| DM4 | `=IF('Stars and Floors'!$A4, IF(DM$1='Stars and Floors'!$C4,1, 0) + IF(DM$1='Stars and Floors'!$D4,1, 0) + IF(DM$1='Stars and Floors'!$E4,1, 0) + IF(DM$1='Stars and Floors'!$F4,1, 0) + IF(DM$1='Stars and Floors'!$G4,1, 0), 0)` |
| DN4 | `=IF('Stars and Floors'!$A4, IF(DN$1='Stars and Floors'!$C4,1, 0) + IF(DN$1='Stars and Floors'!$D4,1, 0) + IF(DN$1='Stars and Floors'!$E4,1, 0) + IF(DN$1='Stars and Floors'!$F4,1, 0) + IF(DN$1='Stars and Floors'!$G4,1, 0), 0)` |
| DO4 | `=IF('Stars and Floors'!$A4, IF(DO$1='Stars and Floors'!$C4,1, 0) + IF(DO$1='Stars and Floors'!$D4,1, 0) + IF(DO$1='Stars and Floors'!$E4,1, 0) + IF(DO$1='Stars and Floors'!$F4,1, 0) + IF(DO$1='Stars and Floors'!$G4,1, 0), 0)` |
| DP4 | `=IF('Stars and Floors'!$A4, IF(DP$1='Stars and Floors'!$C4,1, 0) + IF(DP$1='Stars and Floors'!$D4,1, 0) + IF(DP$1='Stars and Floors'!$E4,1, 0) + IF(DP$1='Stars and Floors'!$F4,1, 0) + IF(DP$1='Stars and Floors'!$G4,1, 0), 0)` |
| DQ4 | `=IF('Stars and Floors'!$A4, IF(DQ$1='Stars and Floors'!$C4,1, 0) + IF(DQ$1='Stars and Floors'!$D4,1, 0) + IF(DQ$1='Stars and Floors'!$E4,1, 0) + IF(DQ$1='Stars and Floors'!$F4,1, 0) + IF(DQ$1='Stars and Floors'!$G4,1, 0), 0)` |
| B5 | `=IF('Stars and Floors'!$A5, IF(B$1='Stars and Floors'!$C5,1, 0) + IF(B$1='Stars and Floors'!$D5,1, 0) + IF(B$1='Stars and Floors'!$E5,1, 0) + IF(B$1='Stars and Floors'!$F5,1, 0) + IF(B$1='Stars and Floors'!$G5,1, 0), 0)` |
| C5 | `=IF('Stars and Floors'!$A5, IF(C$1='Stars and Floors'!$C5,1, 0) + IF(C$1='Stars and Floors'!$D5,1, 0) + IF(C$1='Stars and Floors'!$E5,1, 0) + IF(C$1='Stars and Floors'!$F5,1, 0) + IF(C$1='Stars and Floors'!$G5,1, 0), 0)` |
| D5 | `=IF('Stars and Floors'!$A5, IF(D$1='Stars and Floors'!$C5,1, 0) + IF(D$1='Stars and Floors'!$D5,1, 0) + IF(D$1='Stars and Floors'!$E5,1, 0) + IF(D$1='Stars and Floors'!$F5,1, 0) + IF(D$1='Stars and Floors'!$G5,1, 0), 0)` |
| E5 | `=IF('Stars and Floors'!$A5, IF(E$1='Stars and Floors'!$C5,1, 0) + IF(E$1='Stars and Floors'!$D5,1, 0) + IF(E$1='Stars and Floors'!$E5,1, 0) + IF(E$1='Stars and Floors'!$F5,1, 0) + IF(E$1='Stars and Floors'!$G5,1, 0), 0)` |
| F5 | `=IF('Stars and Floors'!$A5, IF(F$1='Stars and Floors'!$C5,1, 0) + IF(F$1='Stars and Floors'!$D5,1, 0) + IF(F$1='Stars and Floors'!$E5,1, 0) + IF(F$1='Stars and Floors'!$F5,1, 0) + IF(F$1='Stars and Floors'!$G5,1, 0), 0)` |
| G5 | `=IF('Stars and Floors'!$A5, IF(G$1='Stars and Floors'!$C5,1, 0) + IF(G$1='Stars and Floors'!$D5,1, 0) + IF(G$1='Stars and Floors'!$E5,1, 0) + IF(G$1='Stars and Floors'!$F5,1, 0) + IF(G$1='Stars and Floors'!$G5,1, 0), 0)` |
| H5 | `=IF('Stars and Floors'!$A5, IF(H$1='Stars and Floors'!$C5,1, 0) + IF(H$1='Stars and Floors'!$D5,1, 0) + IF(H$1='Stars and Floors'!$E5,1, 0) + IF(H$1='Stars and Floors'!$F5,1, 0) + IF(H$1='Stars and Floors'!$G5,1, 0), 0)` |
| I5 | `=IF('Stars and Floors'!$A5, IF(I$1='Stars and Floors'!$C5,1, 0) + IF(I$1='Stars and Floors'!$D5,1, 0) + IF(I$1='Stars and Floors'!$E5,1, 0) + IF(I$1='Stars and Floors'!$F5,1, 0) + IF(I$1='Stars and Floors'!$G5,1, 0), 0)` |
| J5 | `=IF('Stars and Floors'!$A5, IF(J$1='Stars and Floors'!$C5,1, 0) + IF(J$1='Stars and Floors'!$D5,1, 0) + IF(J$1='Stars and Floors'!$E5,1, 0) + IF(J$1='Stars and Floors'!$F5,1, 0) + IF(J$1='Stars and Floors'!$G5,1, 0), 0)` |
| K5 | `=IF('Stars and Floors'!$A5, IF(K$1='Stars and Floors'!$C5,1, 0) + IF(K$1='Stars and Floors'!$D5,1, 0) + IF(K$1='Stars and Floors'!$E5,1, 0) + IF(K$1='Stars and Floors'!$F5,1, 0) + IF(K$1='Stars and Floors'!$G5,1, 0), 0)` |
| L5 | `=IF('Stars and Floors'!$A5, IF(L$1='Stars and Floors'!$C5,1, 0) + IF(L$1='Stars and Floors'!$D5,1, 0) + IF(L$1='Stars and Floors'!$E5,1, 0) + IF(L$1='Stars and Floors'!$F5,1, 0) + IF(L$1='Stars and Floors'!$G5,1, 0), 0)` |
| M5 | `=IF('Stars and Floors'!$A5, IF(M$1='Stars and Floors'!$C5,1, 0) + IF(M$1='Stars and Floors'!$D5,1, 0) + IF(M$1='Stars and Floors'!$E5,1, 0) + IF(M$1='Stars and Floors'!$F5,1, 0) + IF(M$1='Stars and Floors'!$G5,1, 0), 0)` |
| N5 | `=IF('Stars and Floors'!$A5, IF(N$1='Stars and Floors'!$C5,1, 0) + IF(N$1='Stars and Floors'!$D5,1, 0) + IF(N$1='Stars and Floors'!$E5,1, 0) + IF(N$1='Stars and Floors'!$F5,1, 0) + IF(N$1='Stars and Floors'!$G5,1, 0), 0)` |
| O5 | `=IF('Stars and Floors'!$A5, IF(O$1='Stars and Floors'!$C5,1, 0) + IF(O$1='Stars and Floors'!$D5,1, 0) + IF(O$1='Stars and Floors'!$E5,1, 0) + IF(O$1='Stars and Floors'!$F5,1, 0) + IF(O$1='Stars and Floors'!$G5,1, 0), 0)` |
| P5 | `=IF('Stars and Floors'!$A5, IF(P$1='Stars and Floors'!$C5,1, 0) + IF(P$1='Stars and Floors'!$D5,1, 0) + IF(P$1='Stars and Floors'!$E5,1, 0) + IF(P$1='Stars and Floors'!$F5,1, 0) + IF(P$1='Stars and Floors'!$G5,1, 0), 0)` |
| Q5 | `=IF('Stars and Floors'!$A5, IF(Q$1='Stars and Floors'!$C5,1, 0) + IF(Q$1='Stars and Floors'!$D5,1, 0) + IF(Q$1='Stars and Floors'!$E5,1, 0) + IF(Q$1='Stars and Floors'!$F5,1, 0) + IF(Q$1='Stars and Floors'!$G5,1, 0), 0)` |
| R5 | `=IF('Stars and Floors'!$A5, IF(R$1='Stars and Floors'!$C5,1, 0) + IF(R$1='Stars and Floors'!$D5,1, 0) + IF(R$1='Stars and Floors'!$E5,1, 0) + IF(R$1='Stars and Floors'!$F5,1, 0) + IF(R$1='Stars and Floors'!$G5,1, 0), 0)` |
| S5 | `=IF('Stars and Floors'!$A5, IF(S$1='Stars and Floors'!$C5,1, 0) + IF(S$1='Stars and Floors'!$D5,1, 0) + IF(S$1='Stars and Floors'!$E5,1, 0) + IF(S$1='Stars and Floors'!$F5,1, 0) + IF(S$1='Stars and Floors'!$G5,1, 0), 0)` |
| T5 | `=IF('Stars and Floors'!$A5, IF(T$1='Stars and Floors'!$C5,1, 0) + IF(T$1='Stars and Floors'!$D5,1, 0) + IF(T$1='Stars and Floors'!$E5,1, 0) + IF(T$1='Stars and Floors'!$F5,1, 0) + IF(T$1='Stars and Floors'!$G5,1, 0), 0)` |
| U5 | `=IF('Stars and Floors'!$A5, IF(U$1='Stars and Floors'!$C5,1, 0) + IF(U$1='Stars and Floors'!$D5,1, 0) + IF(U$1='Stars and Floors'!$E5,1, 0) + IF(U$1='Stars and Floors'!$F5,1, 0) + IF(U$1='Stars and Floors'!$G5,1, 0), 0)` |
| V5 | `=IF('Stars and Floors'!$A5, IF(V$1='Stars and Floors'!$C5,1, 0) + IF(V$1='Stars and Floors'!$D5,1, 0) + IF(V$1='Stars and Floors'!$E5,1, 0) + IF(V$1='Stars and Floors'!$F5,1, 0) + IF(V$1='Stars and Floors'!$G5,1, 0), 0)` |
| W5 | `=IF('Stars and Floors'!$A5, IF(W$1='Stars and Floors'!$C5,1, 0) + IF(W$1='Stars and Floors'!$D5,1, 0) + IF(W$1='Stars and Floors'!$E5,1, 0) + IF(W$1='Stars and Floors'!$F5,1, 0) + IF(W$1='Stars and Floors'!$G5,1, 0), 0)` |
| X5 | `=IF('Stars and Floors'!$A5, IF(X$1='Stars and Floors'!$C5,1, 0) + IF(X$1='Stars and Floors'!$D5,1, 0) + IF(X$1='Stars and Floors'!$E5,1, 0) + IF(X$1='Stars and Floors'!$F5,1, 0) + IF(X$1='Stars and Floors'!$G5,1, 0), 0)` |
| Y5 | `=IF('Stars and Floors'!$A5, IF(Y$1='Stars and Floors'!$C5,1, 0) + IF(Y$1='Stars and Floors'!$D5,1, 0) + IF(Y$1='Stars and Floors'!$E5,1, 0) + IF(Y$1='Stars and Floors'!$F5,1, 0) + IF(Y$1='Stars and Floors'!$G5,1, 0), 0)` |
| Z5 | `=IF('Stars and Floors'!$A5, IF(Z$1='Stars and Floors'!$C5,1, 0) + IF(Z$1='Stars and Floors'!$D5,1, 0) + IF(Z$1='Stars and Floors'!$E5,1, 0) + IF(Z$1='Stars and Floors'!$F5,1, 0) + IF(Z$1='Stars and Floors'!$G5,1, 0), 0)` |
| AA5 | `=IF('Stars and Floors'!$A5, IF(AA$1='Stars and Floors'!$C5,1, 0) + IF(AA$1='Stars and Floors'!$D5,1, 0) + IF(AA$1='Stars and Floors'!$E5,1, 0) + IF(AA$1='Stars and Floors'!$F5,1, 0) + IF(AA$1='Stars and Floors'!$G5,1, 0), 0)` |
| AB5 | `=IF('Stars and Floors'!$A5, IF(AB$1='Stars and Floors'!$C5,1, 0) + IF(AB$1='Stars and Floors'!$D5,1, 0) + IF(AB$1='Stars and Floors'!$E5,1, 0) + IF(AB$1='Stars and Floors'!$F5,1, 0) + IF(AB$1='Stars and Floors'!$G5,1, 0), 0)` |
| AC5 | `=IF('Stars and Floors'!$A5, IF(AC$1='Stars and Floors'!$C5,1, 0) + IF(AC$1='Stars and Floors'!$D5,1, 0) + IF(AC$1='Stars and Floors'!$E5,1, 0) + IF(AC$1='Stars and Floors'!$F5,1, 0) + IF(AC$1='Stars and Floors'!$G5,1, 0), 0)` |
| AD5 | `=IF('Stars and Floors'!$A5, IF(AD$1='Stars and Floors'!$C5,1, 0) + IF(AD$1='Stars and Floors'!$D5,1, 0) + IF(AD$1='Stars and Floors'!$E5,1, 0) + IF(AD$1='Stars and Floors'!$F5,1, 0) + IF(AD$1='Stars and Floors'!$G5,1, 0), 0)` |
| AE5 | `=IF('Stars and Floors'!$A5, IF(AE$1='Stars and Floors'!$C5,1, 0) + IF(AE$1='Stars and Floors'!$D5,1, 0) + IF(AE$1='Stars and Floors'!$E5,1, 0) + IF(AE$1='Stars and Floors'!$F5,1, 0) + IF(AE$1='Stars and Floors'!$G5,1, 0), 0)` |
| AF5 | `=IF('Stars and Floors'!$A5, IF(AF$1='Stars and Floors'!$C5,1, 0) + IF(AF$1='Stars and Floors'!$D5,1, 0) + IF(AF$1='Stars and Floors'!$E5,1, 0) + IF(AF$1='Stars and Floors'!$F5,1, 0) + IF(AF$1='Stars and Floors'!$G5,1, 0), 0)` |
| AG5 | `=IF('Stars and Floors'!$A5, IF(AG$1='Stars and Floors'!$C5,1, 0) + IF(AG$1='Stars and Floors'!$D5,1, 0) + IF(AG$1='Stars and Floors'!$E5,1, 0) + IF(AG$1='Stars and Floors'!$F5,1, 0) + IF(AG$1='Stars and Floors'!$G5,1, 0), 0)` |
| AH5 | `=IF('Stars and Floors'!$A5, IF(AH$1='Stars and Floors'!$C5,1, 0) + IF(AH$1='Stars and Floors'!$D5,1, 0) + IF(AH$1='Stars and Floors'!$E5,1, 0) + IF(AH$1='Stars and Floors'!$F5,1, 0) + IF(AH$1='Stars and Floors'!$G5,1, 0), 0)` |
| AI5 | `=IF('Stars and Floors'!$A5, IF(AI$1='Stars and Floors'!$C5,1, 0) + IF(AI$1='Stars and Floors'!$D5,1, 0) + IF(AI$1='Stars and Floors'!$E5,1, 0) + IF(AI$1='Stars and Floors'!$F5,1, 0) + IF(AI$1='Stars and Floors'!$G5,1, 0), 0)` |
| AJ5 | `=IF('Stars and Floors'!$A5, IF(AJ$1='Stars and Floors'!$C5,1, 0) + IF(AJ$1='Stars and Floors'!$D5,1, 0) + IF(AJ$1='Stars and Floors'!$E5,1, 0) + IF(AJ$1='Stars and Floors'!$F5,1, 0) + IF(AJ$1='Stars and Floors'!$G5,1, 0), 0)` |
| AK5 | `=IF('Stars and Floors'!$A5, IF(AK$1='Stars and Floors'!$C5,1, 0) + IF(AK$1='Stars and Floors'!$D5,1, 0) + IF(AK$1='Stars and Floors'!$E5,1, 0) + IF(AK$1='Stars and Floors'!$F5,1, 0) + IF(AK$1='Stars and Floors'!$G5,1, 0), 0)` |
| AL5 | `=IF('Stars and Floors'!$A5, IF(AL$1='Stars and Floors'!$C5,1, 0) + IF(AL$1='Stars and Floors'!$D5,1, 0) + IF(AL$1='Stars and Floors'!$E5,1, 0) + IF(AL$1='Stars and Floors'!$F5,1, 0) + IF(AL$1='Stars and Floors'!$G5,1, 0), 0)` |
| AM5 | `=IF('Stars and Floors'!$A5, IF(AM$1='Stars and Floors'!$C5,1, 0) + IF(AM$1='Stars and Floors'!$D5,1, 0) + IF(AM$1='Stars and Floors'!$E5,1, 0) + IF(AM$1='Stars and Floors'!$F5,1, 0) + IF(AM$1='Stars and Floors'!$G5,1, 0), 0)` |
| AN5 | `=IF('Stars and Floors'!$A5, IF(AN$1='Stars and Floors'!$C5,1, 0) + IF(AN$1='Stars and Floors'!$D5,1, 0) + IF(AN$1='Stars and Floors'!$E5,1, 0) + IF(AN$1='Stars and Floors'!$F5,1, 0) + IF(AN$1='Stars and Floors'!$G5,1, 0), 0)` |
| AO5 | `=IF('Stars and Floors'!$A5, IF(AO$1='Stars and Floors'!$C5,1, 0) + IF(AO$1='Stars and Floors'!$D5,1, 0) + IF(AO$1='Stars and Floors'!$E5,1, 0) + IF(AO$1='Stars and Floors'!$F5,1, 0) + IF(AO$1='Stars and Floors'!$G5,1, 0), 0)` |
| AP5 | `=IF('Stars and Floors'!$A5, IF(AP$1='Stars and Floors'!$C5,1, 0) + IF(AP$1='Stars and Floors'!$D5,1, 0) + IF(AP$1='Stars and Floors'!$E5,1, 0) + IF(AP$1='Stars and Floors'!$F5,1, 0) + IF(AP$1='Stars and Floors'!$G5,1, 0), 0)` |
| AQ5 | `=IF('Stars and Floors'!$A5, IF(AQ$1='Stars and Floors'!$C5,1, 0) + IF(AQ$1='Stars and Floors'!$D5,1, 0) + IF(AQ$1='Stars and Floors'!$E5,1, 0) + IF(AQ$1='Stars and Floors'!$F5,1, 0) + IF(AQ$1='Stars and Floors'!$G5,1, 0), 0)` |
| AR5 | `=IF('Stars and Floors'!$A5, IF(AR$1='Stars and Floors'!$C5,1, 0) + IF(AR$1='Stars and Floors'!$D5,1, 0) + IF(AR$1='Stars and Floors'!$E5,1, 0) + IF(AR$1='Stars and Floors'!$F5,1, 0) + IF(AR$1='Stars and Floors'!$G5,1, 0), 0)` |
| AS5 | `=IF('Stars and Floors'!$A5, IF(AS$1='Stars and Floors'!$C5,1, 0) + IF(AS$1='Stars and Floors'!$D5,1, 0) + IF(AS$1='Stars and Floors'!$E5,1, 0) + IF(AS$1='Stars and Floors'!$F5,1, 0) + IF(AS$1='Stars and Floors'!$G5,1, 0), 0)` |
| AT5 | `=IF('Stars and Floors'!$A5, IF(AT$1='Stars and Floors'!$C5,1, 0) + IF(AT$1='Stars and Floors'!$D5,1, 0) + IF(AT$1='Stars and Floors'!$E5,1, 0) + IF(AT$1='Stars and Floors'!$F5,1, 0) + IF(AT$1='Stars and Floors'!$G5,1, 0), 0)` |
| AU5 | `=IF('Stars and Floors'!$A5, IF(AU$1='Stars and Floors'!$C5,1, 0) + IF(AU$1='Stars and Floors'!$D5,1, 0) + IF(AU$1='Stars and Floors'!$E5,1, 0) + IF(AU$1='Stars and Floors'!$F5,1, 0) + IF(AU$1='Stars and Floors'!$G5,1, 0), 0)` |
| AV5 | `=IF('Stars and Floors'!$A5, IF(AV$1='Stars and Floors'!$C5,1, 0) + IF(AV$1='Stars and Floors'!$D5,1, 0) + IF(AV$1='Stars and Floors'!$E5,1, 0) + IF(AV$1='Stars and Floors'!$F5,1, 0) + IF(AV$1='Stars and Floors'!$G5,1, 0), 0)` |
| AW5 | `=IF('Stars and Floors'!$A5, IF(AW$1='Stars and Floors'!$C5,1, 0) + IF(AW$1='Stars and Floors'!$D5,1, 0) + IF(AW$1='Stars and Floors'!$E5,1, 0) + IF(AW$1='Stars and Floors'!$F5,1, 0) + IF(AW$1='Stars and Floors'!$G5,1, 0), 0)` |
| AX5 | `=IF('Stars and Floors'!$A5, IF(AX$1='Stars and Floors'!$C5,1, 0) + IF(AX$1='Stars and Floors'!$D5,1, 0) + IF(AX$1='Stars and Floors'!$E5,1, 0) + IF(AX$1='Stars and Floors'!$F5,1, 0) + IF(AX$1='Stars and Floors'!$G5,1, 0), 0)` |
| AY5 | `=IF('Stars and Floors'!$A5, IF(AY$1='Stars and Floors'!$C5,1, 0) + IF(AY$1='Stars and Floors'!$D5,1, 0) + IF(AY$1='Stars and Floors'!$E5,1, 0) + IF(AY$1='Stars and Floors'!$F5,1, 0) + IF(AY$1='Stars and Floors'!$G5,1, 0), 0)` |
| AZ5 | `=IF('Stars and Floors'!$A5, IF(AZ$1='Stars and Floors'!$C5,1, 0) + IF(AZ$1='Stars and Floors'!$D5,1, 0) + IF(AZ$1='Stars and Floors'!$E5,1, 0) + IF(AZ$1='Stars and Floors'!$F5,1, 0) + IF(AZ$1='Stars and Floors'!$G5,1, 0), 0)` |
| BA5 | `=IF('Stars and Floors'!$A5, IF(BA$1='Stars and Floors'!$C5,1, 0) + IF(BA$1='Stars and Floors'!$D5,1, 0) + IF(BA$1='Stars and Floors'!$E5,1, 0) + IF(BA$1='Stars and Floors'!$F5,1, 0) + IF(BA$1='Stars and Floors'!$G5,1, 0), 0)` |
| BB5 | `=IF('Stars and Floors'!$A5, IF(BB$1='Stars and Floors'!$C5,1, 0) + IF(BB$1='Stars and Floors'!$D5,1, 0) + IF(BB$1='Stars and Floors'!$E5,1, 0) + IF(BB$1='Stars and Floors'!$F5,1, 0) + IF(BB$1='Stars and Floors'!$G5,1, 0), 0)` |
| BC5 | `=IF('Stars and Floors'!$A5, IF(BC$1='Stars and Floors'!$C5,1, 0) + IF(BC$1='Stars and Floors'!$D5,1, 0) + IF(BC$1='Stars and Floors'!$E5,1, 0) + IF(BC$1='Stars and Floors'!$F5,1, 0) + IF(BC$1='Stars and Floors'!$G5,1, 0), 0)` |
| BD5 | `=IF('Stars and Floors'!$A5, IF(BD$1='Stars and Floors'!$C5,1, 0) + IF(BD$1='Stars and Floors'!$D5,1, 0) + IF(BD$1='Stars and Floors'!$E5,1, 0) + IF(BD$1='Stars and Floors'!$F5,1, 0) + IF(BD$1='Stars and Floors'!$G5,1, 0), 0)` |
| BE5 | `=IF('Stars and Floors'!$A5, IF(BE$1='Stars and Floors'!$C5,1, 0) + IF(BE$1='Stars and Floors'!$D5,1, 0) + IF(BE$1='Stars and Floors'!$E5,1, 0) + IF(BE$1='Stars and Floors'!$F5,1, 0) + IF(BE$1='Stars and Floors'!$G5,1, 0), 0)` |
| BF5 | `=IF('Stars and Floors'!$A5, IF(BF$1='Stars and Floors'!$C5,1, 0) + IF(BF$1='Stars and Floors'!$D5,1, 0) + IF(BF$1='Stars and Floors'!$E5,1, 0) + IF(BF$1='Stars and Floors'!$F5,1, 0) + IF(BF$1='Stars and Floors'!$G5,1, 0), 0)` |
| BG5 | `=IF('Stars and Floors'!$A5, IF(BG$1='Stars and Floors'!$C5,1, 0) + IF(BG$1='Stars and Floors'!$D5,1, 0) + IF(BG$1='Stars and Floors'!$E5,1, 0) + IF(BG$1='Stars and Floors'!$F5,1, 0) + IF(BG$1='Stars and Floors'!$G5,1, 0), 0)` |
| BH5 | `=IF('Stars and Floors'!$A5, IF(BH$1='Stars and Floors'!$C5,1, 0) + IF(BH$1='Stars and Floors'!$D5,1, 0) + IF(BH$1='Stars and Floors'!$E5,1, 0) + IF(BH$1='Stars and Floors'!$F5,1, 0) + IF(BH$1='Stars and Floors'!$G5,1, 0), 0)` |
| BI5 | `=IF('Stars and Floors'!$A5, IF(BI$1='Stars and Floors'!$C5,1, 0) + IF(BI$1='Stars and Floors'!$D5,1, 0) + IF(BI$1='Stars and Floors'!$E5,1, 0) + IF(BI$1='Stars and Floors'!$F5,1, 0) + IF(BI$1='Stars and Floors'!$G5,1, 0), 0)` |
| BJ5 | `=IF('Stars and Floors'!$A5, IF(BJ$1='Stars and Floors'!$C5,1, 0) + IF(BJ$1='Stars and Floors'!$D5,1, 0) + IF(BJ$1='Stars and Floors'!$E5,1, 0) + IF(BJ$1='Stars and Floors'!$F5,1, 0) + IF(BJ$1='Stars and Floors'!$G5,1, 0), 0)` |
| BK5 | `=IF('Stars and Floors'!$A5, IF(BK$1='Stars and Floors'!$C5,1, 0) + IF(BK$1='Stars and Floors'!$D5,1, 0) + IF(BK$1='Stars and Floors'!$E5,1, 0) + IF(BK$1='Stars and Floors'!$F5,1, 0) + IF(BK$1='Stars and Floors'!$G5,1, 0), 0)` |
| BL5 | `=IF('Stars and Floors'!$A5, IF(BL$1='Stars and Floors'!$C5,1, 0) + IF(BL$1='Stars and Floors'!$D5,1, 0) + IF(BL$1='Stars and Floors'!$E5,1, 0) + IF(BL$1='Stars and Floors'!$F5,1, 0) + IF(BL$1='Stars and Floors'!$G5,1, 0), 0)` |
| BM5 | `=IF('Stars and Floors'!$A5, IF(BM$1='Stars and Floors'!$C5,1, 0) + IF(BM$1='Stars and Floors'!$D5,1, 0) + IF(BM$1='Stars and Floors'!$E5,1, 0) + IF(BM$1='Stars and Floors'!$F5,1, 0) + IF(BM$1='Stars and Floors'!$G5,1, 0), 0)` |
| BN5 | `=IF('Stars and Floors'!$A5, IF(BN$1='Stars and Floors'!$C5,1, 0) + IF(BN$1='Stars and Floors'!$D5,1, 0) + IF(BN$1='Stars and Floors'!$E5,1, 0) + IF(BN$1='Stars and Floors'!$F5,1, 0) + IF(BN$1='Stars and Floors'!$G5,1, 0), 0)` |
| BO5 | `=IF('Stars and Floors'!$A5, IF(BO$1='Stars and Floors'!$C5,1, 0) + IF(BO$1='Stars and Floors'!$D5,1, 0) + IF(BO$1='Stars and Floors'!$E5,1, 0) + IF(BO$1='Stars and Floors'!$F5,1, 0) + IF(BO$1='Stars and Floors'!$G5,1, 0), 0)` |
| BP5 | `=IF('Stars and Floors'!$A5, IF(BP$1='Stars and Floors'!$C5,1, 0) + IF(BP$1='Stars and Floors'!$D5,1, 0) + IF(BP$1='Stars and Floors'!$E5,1, 0) + IF(BP$1='Stars and Floors'!$F5,1, 0) + IF(BP$1='Stars and Floors'!$G5,1, 0), 0)` |
| BQ5 | `=IF('Stars and Floors'!$A5, IF(BQ$1='Stars and Floors'!$C5,1, 0) + IF(BQ$1='Stars and Floors'!$D5,1, 0) + IF(BQ$1='Stars and Floors'!$E5,1, 0) + IF(BQ$1='Stars and Floors'!$F5,1, 0) + IF(BQ$1='Stars and Floors'!$G5,1, 0), 0)` |
| BR5 | `=IF('Stars and Floors'!$A5, IF(BR$1='Stars and Floors'!$C5,1, 0) + IF(BR$1='Stars and Floors'!$D5,1, 0) + IF(BR$1='Stars and Floors'!$E5,1, 0) + IF(BR$1='Stars and Floors'!$F5,1, 0) + IF(BR$1='Stars and Floors'!$G5,1, 0), 0)` |
| BS5 | `=IF('Stars and Floors'!$A5, IF(BS$1='Stars and Floors'!$C5,1, 0) + IF(BS$1='Stars and Floors'!$D5,1, 0) + IF(BS$1='Stars and Floors'!$E5,1, 0) + IF(BS$1='Stars and Floors'!$F5,1, 0) + IF(BS$1='Stars and Floors'!$G5,1, 0), 0)` |
| BT5 | `=IF('Stars and Floors'!$A5, IF(BT$1='Stars and Floors'!$C5,1, 0) + IF(BT$1='Stars and Floors'!$D5,1, 0) + IF(BT$1='Stars and Floors'!$E5,1, 0) + IF(BT$1='Stars and Floors'!$F5,1, 0) + IF(BT$1='Stars and Floors'!$G5,1, 0), 0)` |
| BU5 | `=IF('Stars and Floors'!$A5, IF(BU$1='Stars and Floors'!$C5,1, 0) + IF(BU$1='Stars and Floors'!$D5,1, 0) + IF(BU$1='Stars and Floors'!$E5,1, 0) + IF(BU$1='Stars and Floors'!$F5,1, 0) + IF(BU$1='Stars and Floors'!$G5,1, 0), 0)` |
| BV5 | `=IF('Stars and Floors'!$A5, IF(BV$1='Stars and Floors'!$C5,1, 0) + IF(BV$1='Stars and Floors'!$D5,1, 0) + IF(BV$1='Stars and Floors'!$E5,1, 0) + IF(BV$1='Stars and Floors'!$F5,1, 0) + IF(BV$1='Stars and Floors'!$G5,1, 0), 0)` |
| BW5 | `=IF('Stars and Floors'!$A5, IF(BW$1='Stars and Floors'!$C5,1, 0) + IF(BW$1='Stars and Floors'!$D5,1, 0) + IF(BW$1='Stars and Floors'!$E5,1, 0) + IF(BW$1='Stars and Floors'!$F5,1, 0) + IF(BW$1='Stars and Floors'!$G5,1, 0), 0)` |
| BX5 | `=IF('Stars and Floors'!$A5, IF(BX$1='Stars and Floors'!$C5,1, 0) + IF(BX$1='Stars and Floors'!$D5,1, 0) + IF(BX$1='Stars and Floors'!$E5,1, 0) + IF(BX$1='Stars and Floors'!$F5,1, 0) + IF(BX$1='Stars and Floors'!$G5,1, 0), 0)` |
| BY5 | `=IF('Stars and Floors'!$A5, IF(BY$1='Stars and Floors'!$C5,1, 0) + IF(BY$1='Stars and Floors'!$D5,1, 0) + IF(BY$1='Stars and Floors'!$E5,1, 0) + IF(BY$1='Stars and Floors'!$F5,1, 0) + IF(BY$1='Stars and Floors'!$G5,1, 0), 0)` |
| BZ5 | `=IF('Stars and Floors'!$A5, IF(BZ$1='Stars and Floors'!$C5,1, 0) + IF(BZ$1='Stars and Floors'!$D5,1, 0) + IF(BZ$1='Stars and Floors'!$E5,1, 0) + IF(BZ$1='Stars and Floors'!$F5,1, 0) + IF(BZ$1='Stars and Floors'!$G5,1, 0), 0)` |
| CA5 | `=IF('Stars and Floors'!$A5, IF(CA$1='Stars and Floors'!$C5,1, 0) + IF(CA$1='Stars and Floors'!$D5,1, 0) + IF(CA$1='Stars and Floors'!$E5,1, 0) + IF(CA$1='Stars and Floors'!$F5,1, 0) + IF(CA$1='Stars and Floors'!$G5,1, 0), 0)` |
| CB5 | `=IF('Stars and Floors'!$A5, IF(CB$1='Stars and Floors'!$C5,1, 0) + IF(CB$1='Stars and Floors'!$D5,1, 0) + IF(CB$1='Stars and Floors'!$E5,1, 0) + IF(CB$1='Stars and Floors'!$F5,1, 0) + IF(CB$1='Stars and Floors'!$G5,1, 0), 0)` |
| CC5 | `=IF('Stars and Floors'!$A5, IF(CC$1='Stars and Floors'!$C5,1, 0) + IF(CC$1='Stars and Floors'!$D5,1, 0) + IF(CC$1='Stars and Floors'!$E5,1, 0) + IF(CC$1='Stars and Floors'!$F5,1, 0) + IF(CC$1='Stars and Floors'!$G5,1, 0), 0)` |
| CD5 | `=IF('Stars and Floors'!$A5, IF(CD$1='Stars and Floors'!$C5,1, 0) + IF(CD$1='Stars and Floors'!$D5,1, 0) + IF(CD$1='Stars and Floors'!$E5,1, 0) + IF(CD$1='Stars and Floors'!$F5,1, 0) + IF(CD$1='Stars and Floors'!$G5,1, 0), 0)` |
| CE5 | `=IF('Stars and Floors'!$A5, IF(CE$1='Stars and Floors'!$C5,1, 0) + IF(CE$1='Stars and Floors'!$D5,1, 0) + IF(CE$1='Stars and Floors'!$E5,1, 0) + IF(CE$1='Stars and Floors'!$F5,1, 0) + IF(CE$1='Stars and Floors'!$G5,1, 0), 0)` |
| CF5 | `=IF('Stars and Floors'!$A5, IF(CF$1='Stars and Floors'!$C5,1, 0) + IF(CF$1='Stars and Floors'!$D5,1, 0) + IF(CF$1='Stars and Floors'!$E5,1, 0) + IF(CF$1='Stars and Floors'!$F5,1, 0) + IF(CF$1='Stars and Floors'!$G5,1, 0), 0)` |
| CG5 | `=IF('Stars and Floors'!$A5, IF(CG$1='Stars and Floors'!$C5,1, 0) + IF(CG$1='Stars and Floors'!$D5,1, 0) + IF(CG$1='Stars and Floors'!$E5,1, 0) + IF(CG$1='Stars and Floors'!$F5,1, 0) + IF(CG$1='Stars and Floors'!$G5,1, 0), 0)` |
| CH5 | `=IF('Stars and Floors'!$A5, IF(CH$1='Stars and Floors'!$C5,1, 0) + IF(CH$1='Stars and Floors'!$D5,1, 0) + IF(CH$1='Stars and Floors'!$E5,1, 0) + IF(CH$1='Stars and Floors'!$F5,1, 0) + IF(CH$1='Stars and Floors'!$G5,1, 0), 0)` |
| CI5 | `=IF('Stars and Floors'!$A5, IF(CI$1='Stars and Floors'!$C5,1, 0) + IF(CI$1='Stars and Floors'!$D5,1, 0) + IF(CI$1='Stars and Floors'!$E5,1, 0) + IF(CI$1='Stars and Floors'!$F5,1, 0) + IF(CI$1='Stars and Floors'!$G5,1, 0), 0)` |
| CJ5 | `=IF('Stars and Floors'!$A5, IF(CJ$1='Stars and Floors'!$C5,1, 0) + IF(CJ$1='Stars and Floors'!$D5,1, 0) + IF(CJ$1='Stars and Floors'!$E5,1, 0) + IF(CJ$1='Stars and Floors'!$F5,1, 0) + IF(CJ$1='Stars and Floors'!$G5,1, 0), 0)` |
| CK5 | `=IF('Stars and Floors'!$A5, IF(CK$1='Stars and Floors'!$C5,1, 0) + IF(CK$1='Stars and Floors'!$D5,1, 0) + IF(CK$1='Stars and Floors'!$E5,1, 0) + IF(CK$1='Stars and Floors'!$F5,1, 0) + IF(CK$1='Stars and Floors'!$G5,1, 0), 0)` |
| CL5 | `=IF('Stars and Floors'!$A5, IF(CL$1='Stars and Floors'!$C5,1, 0) + IF(CL$1='Stars and Floors'!$D5,1, 0) + IF(CL$1='Stars and Floors'!$E5,1, 0) + IF(CL$1='Stars and Floors'!$F5,1, 0) + IF(CL$1='Stars and Floors'!$G5,1, 0), 0)` |
| CM5 | `=IF('Stars and Floors'!$A5, IF(CM$1='Stars and Floors'!$C5,1, 0) + IF(CM$1='Stars and Floors'!$D5,1, 0) + IF(CM$1='Stars and Floors'!$E5,1, 0) + IF(CM$1='Stars and Floors'!$F5,1, 0) + IF(CM$1='Stars and Floors'!$G5,1, 0), 0)` |
| CN5 | `=IF('Stars and Floors'!$A5, IF(CN$1='Stars and Floors'!$C5,1, 0) + IF(CN$1='Stars and Floors'!$D5,1, 0) + IF(CN$1='Stars and Floors'!$E5,1, 0) + IF(CN$1='Stars and Floors'!$F5,1, 0) + IF(CN$1='Stars and Floors'!$G5,1, 0), 0)` |
| CO5 | `=IF('Stars and Floors'!$A5, IF(CO$1='Stars and Floors'!$C5,1, 0) + IF(CO$1='Stars and Floors'!$D5,1, 0) + IF(CO$1='Stars and Floors'!$E5,1, 0) + IF(CO$1='Stars and Floors'!$F5,1, 0) + IF(CO$1='Stars and Floors'!$G5,1, 0), 0)` |
| CP5 | `=IF('Stars and Floors'!$A5, IF(CP$1='Stars and Floors'!$C5,1, 0) + IF(CP$1='Stars and Floors'!$D5,1, 0) + IF(CP$1='Stars and Floors'!$E5,1, 0) + IF(CP$1='Stars and Floors'!$F5,1, 0) + IF(CP$1='Stars and Floors'!$G5,1, 0), 0)` |
| CQ5 | `=IF('Stars and Floors'!$A5, IF(CQ$1='Stars and Floors'!$C5,1, 0) + IF(CQ$1='Stars and Floors'!$D5,1, 0) + IF(CQ$1='Stars and Floors'!$E5,1, 0) + IF(CQ$1='Stars and Floors'!$F5,1, 0) + IF(CQ$1='Stars and Floors'!$G5,1, 0), 0)` |
| CR5 | `=IF('Stars and Floors'!$A5, IF(CR$1='Stars and Floors'!$C5,1, 0) + IF(CR$1='Stars and Floors'!$D5,1, 0) + IF(CR$1='Stars and Floors'!$E5,1, 0) + IF(CR$1='Stars and Floors'!$F5,1, 0) + IF(CR$1='Stars and Floors'!$G5,1, 0), 0)` |
| CS5 | `=IF('Stars and Floors'!$A5, IF(CS$1='Stars and Floors'!$C5,1, 0) + IF(CS$1='Stars and Floors'!$D5,1, 0) + IF(CS$1='Stars and Floors'!$E5,1, 0) + IF(CS$1='Stars and Floors'!$F5,1, 0) + IF(CS$1='Stars and Floors'!$G5,1, 0), 0)` |
| CT5 | `=IF('Stars and Floors'!$A5, IF(CT$1='Stars and Floors'!$C5,1, 0) + IF(CT$1='Stars and Floors'!$D5,1, 0) + IF(CT$1='Stars and Floors'!$E5,1, 0) + IF(CT$1='Stars and Floors'!$F5,1, 0) + IF(CT$1='Stars and Floors'!$G5,1, 0), 0)` |
| CU5 | `=IF('Stars and Floors'!$A5, IF(CU$1='Stars and Floors'!$C5,1, 0) + IF(CU$1='Stars and Floors'!$D5,1, 0) + IF(CU$1='Stars and Floors'!$E5,1, 0) + IF(CU$1='Stars and Floors'!$F5,1, 0) + IF(CU$1='Stars and Floors'!$G5,1, 0), 0)` |
| CV5 | `=IF('Stars and Floors'!$A5, IF(CV$1='Stars and Floors'!$C5,1, 0) + IF(CV$1='Stars and Floors'!$D5,1, 0) + IF(CV$1='Stars and Floors'!$E5,1, 0) + IF(CV$1='Stars and Floors'!$F5,1, 0) + IF(CV$1='Stars and Floors'!$G5,1, 0), 0)` |
| CW5 | `=IF('Stars and Floors'!$A5, IF(CW$1='Stars and Floors'!$C5,1, 0) + IF(CW$1='Stars and Floors'!$D5,1, 0) + IF(CW$1='Stars and Floors'!$E5,1, 0) + IF(CW$1='Stars and Floors'!$F5,1, 0) + IF(CW$1='Stars and Floors'!$G5,1, 0), 0)` |
| CX5 | `=IF('Stars and Floors'!$A5, IF(CX$1='Stars and Floors'!$C5,1, 0) + IF(CX$1='Stars and Floors'!$D5,1, 0) + IF(CX$1='Stars and Floors'!$E5,1, 0) + IF(CX$1='Stars and Floors'!$F5,1, 0) + IF(CX$1='Stars and Floors'!$G5,1, 0), 0)` |
| CY5 | `=IF('Stars and Floors'!$A5, IF(CY$1='Stars and Floors'!$C5,1, 0) + IF(CY$1='Stars and Floors'!$D5,1, 0) + IF(CY$1='Stars and Floors'!$E5,1, 0) + IF(CY$1='Stars and Floors'!$F5,1, 0) + IF(CY$1='Stars and Floors'!$G5,1, 0), 0)` |
| CZ5 | `=IF('Stars and Floors'!$A5, IF(CZ$1='Stars and Floors'!$C5,1, 0) + IF(CZ$1='Stars and Floors'!$D5,1, 0) + IF(CZ$1='Stars and Floors'!$E5,1, 0) + IF(CZ$1='Stars and Floors'!$F5,1, 0) + IF(CZ$1='Stars and Floors'!$G5,1, 0), 0)` |
| DA5 | `=IF('Stars and Floors'!$A5, IF(DA$1='Stars and Floors'!$C5,1, 0) + IF(DA$1='Stars and Floors'!$D5,1, 0) + IF(DA$1='Stars and Floors'!$E5,1, 0) + IF(DA$1='Stars and Floors'!$F5,1, 0) + IF(DA$1='Stars and Floors'!$G5,1, 0), 0)` |
| DB5 | `=IF('Stars and Floors'!$A5, IF(DB$1='Stars and Floors'!$C5,1, 0) + IF(DB$1='Stars and Floors'!$D5,1, 0) + IF(DB$1='Stars and Floors'!$E5,1, 0) + IF(DB$1='Stars and Floors'!$F5,1, 0) + IF(DB$1='Stars and Floors'!$G5,1, 0), 0)` |
| DC5 | `=IF('Stars and Floors'!$A5, IF(DC$1='Stars and Floors'!$C5,1, 0) + IF(DC$1='Stars and Floors'!$D5,1, 0) + IF(DC$1='Stars and Floors'!$E5,1, 0) + IF(DC$1='Stars and Floors'!$F5,1, 0) + IF(DC$1='Stars and Floors'!$G5,1, 0), 0)` |
| DD5 | `=IF('Stars and Floors'!$A5, IF(DD$1='Stars and Floors'!$C5,1, 0) + IF(DD$1='Stars and Floors'!$D5,1, 0) + IF(DD$1='Stars and Floors'!$E5,1, 0) + IF(DD$1='Stars and Floors'!$F5,1, 0) + IF(DD$1='Stars and Floors'!$G5,1, 0), 0)` |
| DE5 | `=IF('Stars and Floors'!$A5, IF(DE$1='Stars and Floors'!$C5,1, 0) + IF(DE$1='Stars and Floors'!$D5,1, 0) + IF(DE$1='Stars and Floors'!$E5,1, 0) + IF(DE$1='Stars and Floors'!$F5,1, 0) + IF(DE$1='Stars and Floors'!$G5,1, 0), 0)` |
| DF5 | `=IF('Stars and Floors'!$A5, IF(DF$1='Stars and Floors'!$C5,1, 0) + IF(DF$1='Stars and Floors'!$D5,1, 0) + IF(DF$1='Stars and Floors'!$E5,1, 0) + IF(DF$1='Stars and Floors'!$F5,1, 0) + IF(DF$1='Stars and Floors'!$G5,1, 0), 0)` |
| DG5 | `=IF('Stars and Floors'!$A5, IF(DG$1='Stars and Floors'!$C5,1, 0) + IF(DG$1='Stars and Floors'!$D5,1, 0) + IF(DG$1='Stars and Floors'!$E5,1, 0) + IF(DG$1='Stars and Floors'!$F5,1, 0) + IF(DG$1='Stars and Floors'!$G5,1, 0), 0)` |
| DH5 | `=IF('Stars and Floors'!$A5, IF(DH$1='Stars and Floors'!$C5,1, 0) + IF(DH$1='Stars and Floors'!$D5,1, 0) + IF(DH$1='Stars and Floors'!$E5,1, 0) + IF(DH$1='Stars and Floors'!$F5,1, 0) + IF(DH$1='Stars and Floors'!$G5,1, 0), 0)` |
| DI5 | `=IF('Stars and Floors'!$A5, IF(DI$1='Stars and Floors'!$C5,1, 0) + IF(DI$1='Stars and Floors'!$D5,1, 0) + IF(DI$1='Stars and Floors'!$E5,1, 0) + IF(DI$1='Stars and Floors'!$F5,1, 0) + IF(DI$1='Stars and Floors'!$G5,1, 0), 0)` |
| DJ5 | `=IF('Stars and Floors'!$A5, IF(DJ$1='Stars and Floors'!$C5,1, 0) + IF(DJ$1='Stars and Floors'!$D5,1, 0) + IF(DJ$1='Stars and Floors'!$E5,1, 0) + IF(DJ$1='Stars and Floors'!$F5,1, 0) + IF(DJ$1='Stars and Floors'!$G5,1, 0), 0)` |
| DK5 | `=IF('Stars and Floors'!$A5, IF(DK$1='Stars and Floors'!$C5,1, 0) + IF(DK$1='Stars and Floors'!$D5,1, 0) + IF(DK$1='Stars and Floors'!$E5,1, 0) + IF(DK$1='Stars and Floors'!$F5,1, 0) + IF(DK$1='Stars and Floors'!$G5,1, 0), 0)` |
| DL5 | `=IF('Stars and Floors'!$A5, IF(DL$1='Stars and Floors'!$C5,1, 0) + IF(DL$1='Stars and Floors'!$D5,1, 0) + IF(DL$1='Stars and Floors'!$E5,1, 0) + IF(DL$1='Stars and Floors'!$F5,1, 0) + IF(DL$1='Stars and Floors'!$G5,1, 0), 0)` |
| DM5 | `=IF('Stars and Floors'!$A5, IF(DM$1='Stars and Floors'!$C5,1, 0) + IF(DM$1='Stars and Floors'!$D5,1, 0) + IF(DM$1='Stars and Floors'!$E5,1, 0) + IF(DM$1='Stars and Floors'!$F5,1, 0) + IF(DM$1='Stars and Floors'!$G5,1, 0), 0)` |
| DN5 | `=IF('Stars and Floors'!$A5, IF(DN$1='Stars and Floors'!$C5,1, 0) + IF(DN$1='Stars and Floors'!$D5,1, 0) + IF(DN$1='Stars and Floors'!$E5,1, 0) + IF(DN$1='Stars and Floors'!$F5,1, 0) + IF(DN$1='Stars and Floors'!$G5,1, 0), 0)` |
| DO5 | `=IF('Stars and Floors'!$A5, IF(DO$1='Stars and Floors'!$C5,1, 0) + IF(DO$1='Stars and Floors'!$D5,1, 0) + IF(DO$1='Stars and Floors'!$E5,1, 0) + IF(DO$1='Stars and Floors'!$F5,1, 0) + IF(DO$1='Stars and Floors'!$G5,1, 0), 0)` |
| DP5 | `=IF('Stars and Floors'!$A5, IF(DP$1='Stars and Floors'!$C5,1, 0) + IF(DP$1='Stars and Floors'!$D5,1, 0) + IF(DP$1='Stars and Floors'!$E5,1, 0) + IF(DP$1='Stars and Floors'!$F5,1, 0) + IF(DP$1='Stars and Floors'!$G5,1, 0), 0)` |
| DQ5 | `=IF('Stars and Floors'!$A5, IF(DQ$1='Stars and Floors'!$C5,1, 0) + IF(DQ$1='Stars and Floors'!$D5,1, 0) + IF(DQ$1='Stars and Floors'!$E5,1, 0) + IF(DQ$1='Stars and Floors'!$F5,1, 0) + IF(DQ$1='Stars and Floors'!$G5,1, 0), 0)` |
| B6 | `=IF('Stars and Floors'!$A6, IF(B$1='Stars and Floors'!$C6,1, 0) + IF(B$1='Stars and Floors'!$D6,1, 0) + IF(B$1='Stars and Floors'!$E6,1, 0) + IF(B$1='Stars and Floors'!$F6,1, 0) + IF(B$1='Stars and Floors'!$G6,1, 0), 0)` |
| C6 | `=IF('Stars and Floors'!$A6, IF(C$1='Stars and Floors'!$C6,1, 0) + IF(C$1='Stars and Floors'!$D6,1, 0) + IF(C$1='Stars and Floors'!$E6,1, 0) + IF(C$1='Stars and Floors'!$F6,1, 0) + IF(C$1='Stars and Floors'!$G6,1, 0), 0)` |
| D6 | `=IF('Stars and Floors'!$A6, IF(D$1='Stars and Floors'!$C6,1, 0) + IF(D$1='Stars and Floors'!$D6,1, 0) + IF(D$1='Stars and Floors'!$E6,1, 0) + IF(D$1='Stars and Floors'!$F6,1, 0) + IF(D$1='Stars and Floors'!$G6,1, 0), 0)` |
| E6 | `=IF('Stars and Floors'!$A6, IF(E$1='Stars and Floors'!$C6,1, 0) + IF(E$1='Stars and Floors'!$D6,1, 0) + IF(E$1='Stars and Floors'!$E6,1, 0) + IF(E$1='Stars and Floors'!$F6,1, 0) + IF(E$1='Stars and Floors'!$G6,1, 0), 0)` |
| F6 | `=IF('Stars and Floors'!$A6, IF(F$1='Stars and Floors'!$C6,1, 0) + IF(F$1='Stars and Floors'!$D6,1, 0) + IF(F$1='Stars and Floors'!$E6,1, 0) + IF(F$1='Stars and Floors'!$F6,1, 0) + IF(F$1='Stars and Floors'!$G6,1, 0), 0)` |
| G6 | `=IF('Stars and Floors'!$A6, IF(G$1='Stars and Floors'!$C6,1, 0) + IF(G$1='Stars and Floors'!$D6,1, 0) + IF(G$1='Stars and Floors'!$E6,1, 0) + IF(G$1='Stars and Floors'!$F6,1, 0) + IF(G$1='Stars and Floors'!$G6,1, 0), 0)` |
| H6 | `=IF('Stars and Floors'!$A6, IF(H$1='Stars and Floors'!$C6,1, 0) + IF(H$1='Stars and Floors'!$D6,1, 0) + IF(H$1='Stars and Floors'!$E6,1, 0) + IF(H$1='Stars and Floors'!$F6,1, 0) + IF(H$1='Stars and Floors'!$G6,1, 0), 0)` |
| I6 | `=IF('Stars and Floors'!$A6, IF(I$1='Stars and Floors'!$C6,1, 0) + IF(I$1='Stars and Floors'!$D6,1, 0) + IF(I$1='Stars and Floors'!$E6,1, 0) + IF(I$1='Stars and Floors'!$F6,1, 0) + IF(I$1='Stars and Floors'!$G6,1, 0), 0)` |
| J6 | `=IF('Stars and Floors'!$A6, IF(J$1='Stars and Floors'!$C6,1, 0) + IF(J$1='Stars and Floors'!$D6,1, 0) + IF(J$1='Stars and Floors'!$E6,1, 0) + IF(J$1='Stars and Floors'!$F6,1, 0) + IF(J$1='Stars and Floors'!$G6,1, 0), 0)` |
| K6 | `=IF('Stars and Floors'!$A6, IF(K$1='Stars and Floors'!$C6,1, 0) + IF(K$1='Stars and Floors'!$D6,1, 0) + IF(K$1='Stars and Floors'!$E6,1, 0) + IF(K$1='Stars and Floors'!$F6,1, 0) + IF(K$1='Stars and Floors'!$G6,1, 0), 0)` |
| L6 | `=IF('Stars and Floors'!$A6, IF(L$1='Stars and Floors'!$C6,1, 0) + IF(L$1='Stars and Floors'!$D6,1, 0) + IF(L$1='Stars and Floors'!$E6,1, 0) + IF(L$1='Stars and Floors'!$F6,1, 0) + IF(L$1='Stars and Floors'!$G6,1, 0), 0)` |
| M6 | `=IF('Stars and Floors'!$A6, IF(M$1='Stars and Floors'!$C6,1, 0) + IF(M$1='Stars and Floors'!$D6,1, 0) + IF(M$1='Stars and Floors'!$E6,1, 0) + IF(M$1='Stars and Floors'!$F6,1, 0) + IF(M$1='Stars and Floors'!$G6,1, 0), 0)` |
| N6 | `=IF('Stars and Floors'!$A6, IF(N$1='Stars and Floors'!$C6,1, 0) + IF(N$1='Stars and Floors'!$D6,1, 0) + IF(N$1='Stars and Floors'!$E6,1, 0) + IF(N$1='Stars and Floors'!$F6,1, 0) + IF(N$1='Stars and Floors'!$G6,1, 0), 0)` |
| O6 | `=IF('Stars and Floors'!$A6, IF(O$1='Stars and Floors'!$C6,1, 0) + IF(O$1='Stars and Floors'!$D6,1, 0) + IF(O$1='Stars and Floors'!$E6,1, 0) + IF(O$1='Stars and Floors'!$F6,1, 0) + IF(O$1='Stars and Floors'!$G6,1, 0), 0)` |
| P6 | `=IF('Stars and Floors'!$A6, IF(P$1='Stars and Floors'!$C6,1, 0) + IF(P$1='Stars and Floors'!$D6,1, 0) + IF(P$1='Stars and Floors'!$E6,1, 0) + IF(P$1='Stars and Floors'!$F6,1, 0) + IF(P$1='Stars and Floors'!$G6,1, 0), 0)` |
| Q6 | `=IF('Stars and Floors'!$A6, IF(Q$1='Stars and Floors'!$C6,1, 0) + IF(Q$1='Stars and Floors'!$D6,1, 0) + IF(Q$1='Stars and Floors'!$E6,1, 0) + IF(Q$1='Stars and Floors'!$F6,1, 0) + IF(Q$1='Stars and Floors'!$G6,1, 0), 0)` |
| R6 | `=IF('Stars and Floors'!$A6, IF(R$1='Stars and Floors'!$C6,1, 0) + IF(R$1='Stars and Floors'!$D6,1, 0) + IF(R$1='Stars and Floors'!$E6,1, 0) + IF(R$1='Stars and Floors'!$F6,1, 0) + IF(R$1='Stars and Floors'!$G6,1, 0), 0)` |
| S6 | `=IF('Stars and Floors'!$A6, IF(S$1='Stars and Floors'!$C6,1, 0) + IF(S$1='Stars and Floors'!$D6,1, 0) + IF(S$1='Stars and Floors'!$E6,1, 0) + IF(S$1='Stars and Floors'!$F6,1, 0) + IF(S$1='Stars and Floors'!$G6,1, 0), 0)` |
| T6 | `=IF('Stars and Floors'!$A6, IF(T$1='Stars and Floors'!$C6,1, 0) + IF(T$1='Stars and Floors'!$D6,1, 0) + IF(T$1='Stars and Floors'!$E6,1, 0) + IF(T$1='Stars and Floors'!$F6,1, 0) + IF(T$1='Stars and Floors'!$G6,1, 0), 0)` |
| U6 | `=IF('Stars and Floors'!$A6, IF(U$1='Stars and Floors'!$C6,1, 0) + IF(U$1='Stars and Floors'!$D6,1, 0) + IF(U$1='Stars and Floors'!$E6,1, 0) + IF(U$1='Stars and Floors'!$F6,1, 0) + IF(U$1='Stars and Floors'!$G6,1, 0), 0)` |
| V6 | `=IF('Stars and Floors'!$A6, IF(V$1='Stars and Floors'!$C6,1, 0) + IF(V$1='Stars and Floors'!$D6,1, 0) + IF(V$1='Stars and Floors'!$E6,1, 0) + IF(V$1='Stars and Floors'!$F6,1, 0) + IF(V$1='Stars and Floors'!$G6,1, 0), 0)` |
| W6 | `=IF('Stars and Floors'!$A6, IF(W$1='Stars and Floors'!$C6,1, 0) + IF(W$1='Stars and Floors'!$D6,1, 0) + IF(W$1='Stars and Floors'!$E6,1, 0) + IF(W$1='Stars and Floors'!$F6,1, 0) + IF(W$1='Stars and Floors'!$G6,1, 0), 0)` |
| X6 | `=IF('Stars and Floors'!$A6, IF(X$1='Stars and Floors'!$C6,1, 0) + IF(X$1='Stars and Floors'!$D6,1, 0) + IF(X$1='Stars and Floors'!$E6,1, 0) + IF(X$1='Stars and Floors'!$F6,1, 0) + IF(X$1='Stars and Floors'!$G6,1, 0), 0)` |
| Y6 | `=IF('Stars and Floors'!$A6, IF(Y$1='Stars and Floors'!$C6,1, 0) + IF(Y$1='Stars and Floors'!$D6,1, 0) + IF(Y$1='Stars and Floors'!$E6,1, 0) + IF(Y$1='Stars and Floors'!$F6,1, 0) + IF(Y$1='Stars and Floors'!$G6,1, 0), 0)` |
| Z6 | `=IF('Stars and Floors'!$A6, IF(Z$1='Stars and Floors'!$C6,1, 0) + IF(Z$1='Stars and Floors'!$D6,1, 0) + IF(Z$1='Stars and Floors'!$E6,1, 0) + IF(Z$1='Stars and Floors'!$F6,1, 0) + IF(Z$1='Stars and Floors'!$G6,1, 0), 0)` |
| AA6 | `=IF('Stars and Floors'!$A6, IF(AA$1='Stars and Floors'!$C6,1, 0) + IF(AA$1='Stars and Floors'!$D6,1, 0) + IF(AA$1='Stars and Floors'!$E6,1, 0) + IF(AA$1='Stars and Floors'!$F6,1, 0) + IF(AA$1='Stars and Floors'!$G6,1, 0), 0)` |
| AB6 | `=IF('Stars and Floors'!$A6, IF(AB$1='Stars and Floors'!$C6,1, 0) + IF(AB$1='Stars and Floors'!$D6,1, 0) + IF(AB$1='Stars and Floors'!$E6,1, 0) + IF(AB$1='Stars and Floors'!$F6,1, 0) + IF(AB$1='Stars and Floors'!$G6,1, 0), 0)` |
| AC6 | `=IF('Stars and Floors'!$A6, IF(AC$1='Stars and Floors'!$C6,1, 0) + IF(AC$1='Stars and Floors'!$D6,1, 0) + IF(AC$1='Stars and Floors'!$E6,1, 0) + IF(AC$1='Stars and Floors'!$F6,1, 0) + IF(AC$1='Stars and Floors'!$G6,1, 0), 0)` |
| AD6 | `=IF('Stars and Floors'!$A6, IF(AD$1='Stars and Floors'!$C6,1, 0) + IF(AD$1='Stars and Floors'!$D6,1, 0) + IF(AD$1='Stars and Floors'!$E6,1, 0) + IF(AD$1='Stars and Floors'!$F6,1, 0) + IF(AD$1='Stars and Floors'!$G6,1, 0), 0)` |
| AE6 | `=IF('Stars and Floors'!$A6, IF(AE$1='Stars and Floors'!$C6,1, 0) + IF(AE$1='Stars and Floors'!$D6,1, 0) + IF(AE$1='Stars and Floors'!$E6,1, 0) + IF(AE$1='Stars and Floors'!$F6,1, 0) + IF(AE$1='Stars and Floors'!$G6,1, 0), 0)` |
| AF6 | `=IF('Stars and Floors'!$A6, IF(AF$1='Stars and Floors'!$C6,1, 0) + IF(AF$1='Stars and Floors'!$D6,1, 0) + IF(AF$1='Stars and Floors'!$E6,1, 0) + IF(AF$1='Stars and Floors'!$F6,1, 0) + IF(AF$1='Stars and Floors'!$G6,1, 0), 0)` |
| AG6 | `=IF('Stars and Floors'!$A6, IF(AG$1='Stars and Floors'!$C6,1, 0) + IF(AG$1='Stars and Floors'!$D6,1, 0) + IF(AG$1='Stars and Floors'!$E6,1, 0) + IF(AG$1='Stars and Floors'!$F6,1, 0) + IF(AG$1='Stars and Floors'!$G6,1, 0), 0)` |
| AH6 | `=IF('Stars and Floors'!$A6, IF(AH$1='Stars and Floors'!$C6,1, 0) + IF(AH$1='Stars and Floors'!$D6,1, 0) + IF(AH$1='Stars and Floors'!$E6,1, 0) + IF(AH$1='Stars and Floors'!$F6,1, 0) + IF(AH$1='Stars and Floors'!$G6,1, 0), 0)` |
| AI6 | `=IF('Stars and Floors'!$A6, IF(AI$1='Stars and Floors'!$C6,1, 0) + IF(AI$1='Stars and Floors'!$D6,1, 0) + IF(AI$1='Stars and Floors'!$E6,1, 0) + IF(AI$1='Stars and Floors'!$F6,1, 0) + IF(AI$1='Stars and Floors'!$G6,1, 0), 0)` |
| AJ6 | `=IF('Stars and Floors'!$A6, IF(AJ$1='Stars and Floors'!$C6,1, 0) + IF(AJ$1='Stars and Floors'!$D6,1, 0) + IF(AJ$1='Stars and Floors'!$E6,1, 0) + IF(AJ$1='Stars and Floors'!$F6,1, 0) + IF(AJ$1='Stars and Floors'!$G6,1, 0), 0)` |
| AK6 | `=IF('Stars and Floors'!$A6, IF(AK$1='Stars and Floors'!$C6,1, 0) + IF(AK$1='Stars and Floors'!$D6,1, 0) + IF(AK$1='Stars and Floors'!$E6,1, 0) + IF(AK$1='Stars and Floors'!$F6,1, 0) + IF(AK$1='Stars and Floors'!$G6,1, 0), 0)` |
| AL6 | `=IF('Stars and Floors'!$A6, IF(AL$1='Stars and Floors'!$C6,1, 0) + IF(AL$1='Stars and Floors'!$D6,1, 0) + IF(AL$1='Stars and Floors'!$E6,1, 0) + IF(AL$1='Stars and Floors'!$F6,1, 0) + IF(AL$1='Stars and Floors'!$G6,1, 0), 0)` |
| AM6 | `=IF('Stars and Floors'!$A6, IF(AM$1='Stars and Floors'!$C6,1, 0) + IF(AM$1='Stars and Floors'!$D6,1, 0) + IF(AM$1='Stars and Floors'!$E6,1, 0) + IF(AM$1='Stars and Floors'!$F6,1, 0) + IF(AM$1='Stars and Floors'!$G6,1, 0), 0)` |
| AN6 | `=IF('Stars and Floors'!$A6, IF(AN$1='Stars and Floors'!$C6,1, 0) + IF(AN$1='Stars and Floors'!$D6,1, 0) + IF(AN$1='Stars and Floors'!$E6,1, 0) + IF(AN$1='Stars and Floors'!$F6,1, 0) + IF(AN$1='Stars and Floors'!$G6,1, 0), 0)` |
| AO6 | `=IF('Stars and Floors'!$A6, IF(AO$1='Stars and Floors'!$C6,1, 0) + IF(AO$1='Stars and Floors'!$D6,1, 0) + IF(AO$1='Stars and Floors'!$E6,1, 0) + IF(AO$1='Stars and Floors'!$F6,1, 0) + IF(AO$1='Stars and Floors'!$G6,1, 0), 0)` |
| AP6 | `=IF('Stars and Floors'!$A6, IF(AP$1='Stars and Floors'!$C6,1, 0) + IF(AP$1='Stars and Floors'!$D6,1, 0) + IF(AP$1='Stars and Floors'!$E6,1, 0) + IF(AP$1='Stars and Floors'!$F6,1, 0) + IF(AP$1='Stars and Floors'!$G6,1, 0), 0)` |
| AQ6 | `=IF('Stars and Floors'!$A6, IF(AQ$1='Stars and Floors'!$C6,1, 0) + IF(AQ$1='Stars and Floors'!$D6,1, 0) + IF(AQ$1='Stars and Floors'!$E6,1, 0) + IF(AQ$1='Stars and Floors'!$F6,1, 0) + IF(AQ$1='Stars and Floors'!$G6,1, 0), 0)` |
| AR6 | `=IF('Stars and Floors'!$A6, IF(AR$1='Stars and Floors'!$C6,1, 0) + IF(AR$1='Stars and Floors'!$D6,1, 0) + IF(AR$1='Stars and Floors'!$E6,1, 0) + IF(AR$1='Stars and Floors'!$F6,1, 0) + IF(AR$1='Stars and Floors'!$G6,1, 0), 0)` |
| AS6 | `=IF('Stars and Floors'!$A6, IF(AS$1='Stars and Floors'!$C6,1, 0) + IF(AS$1='Stars and Floors'!$D6,1, 0) + IF(AS$1='Stars and Floors'!$E6,1, 0) + IF(AS$1='Stars and Floors'!$F6,1, 0) + IF(AS$1='Stars and Floors'!$G6,1, 0), 0)` |
| AT6 | `=IF('Stars and Floors'!$A6, IF(AT$1='Stars and Floors'!$C6,1, 0) + IF(AT$1='Stars and Floors'!$D6,1, 0) + IF(AT$1='Stars and Floors'!$E6,1, 0) + IF(AT$1='Stars and Floors'!$F6,1, 0) + IF(AT$1='Stars and Floors'!$G6,1, 0), 0)` |
| AU6 | `=IF('Stars and Floors'!$A6, IF(AU$1='Stars and Floors'!$C6,1, 0) + IF(AU$1='Stars and Floors'!$D6,1, 0) + IF(AU$1='Stars and Floors'!$E6,1, 0) + IF(AU$1='Stars and Floors'!$F6,1, 0) + IF(AU$1='Stars and Floors'!$G6,1, 0), 0)` |
| AV6 | `=IF('Stars and Floors'!$A6, IF(AV$1='Stars and Floors'!$C6,1, 0) + IF(AV$1='Stars and Floors'!$D6,1, 0) + IF(AV$1='Stars and Floors'!$E6,1, 0) + IF(AV$1='Stars and Floors'!$F6,1, 0) + IF(AV$1='Stars and Floors'!$G6,1, 0), 0)` |
| AW6 | `=IF('Stars and Floors'!$A6, IF(AW$1='Stars and Floors'!$C6,1, 0) + IF(AW$1='Stars and Floors'!$D6,1, 0) + IF(AW$1='Stars and Floors'!$E6,1, 0) + IF(AW$1='Stars and Floors'!$F6,1, 0) + IF(AW$1='Stars and Floors'!$G6,1, 0), 0)` |
| AX6 | `=IF('Stars and Floors'!$A6, IF(AX$1='Stars and Floors'!$C6,1, 0) + IF(AX$1='Stars and Floors'!$D6,1, 0) + IF(AX$1='Stars and Floors'!$E6,1, 0) + IF(AX$1='Stars and Floors'!$F6,1, 0) + IF(AX$1='Stars and Floors'!$G6,1, 0), 0)` |
| AY6 | `=IF('Stars and Floors'!$A6, IF(AY$1='Stars and Floors'!$C6,1, 0) + IF(AY$1='Stars and Floors'!$D6,1, 0) + IF(AY$1='Stars and Floors'!$E6,1, 0) + IF(AY$1='Stars and Floors'!$F6,1, 0) + IF(AY$1='Stars and Floors'!$G6,1, 0), 0)` |
| AZ6 | `=IF('Stars and Floors'!$A6, IF(AZ$1='Stars and Floors'!$C6,1, 0) + IF(AZ$1='Stars and Floors'!$D6,1, 0) + IF(AZ$1='Stars and Floors'!$E6,1, 0) + IF(AZ$1='Stars and Floors'!$F6,1, 0) + IF(AZ$1='Stars and Floors'!$G6,1, 0), 0)` |
| BA6 | `=IF('Stars and Floors'!$A6, IF(BA$1='Stars and Floors'!$C6,1, 0) + IF(BA$1='Stars and Floors'!$D6,1, 0) + IF(BA$1='Stars and Floors'!$E6,1, 0) + IF(BA$1='Stars and Floors'!$F6,1, 0) + IF(BA$1='Stars and Floors'!$G6,1, 0), 0)` |
| BB6 | `=IF('Stars and Floors'!$A6, IF(BB$1='Stars and Floors'!$C6,1, 0) + IF(BB$1='Stars and Floors'!$D6,1, 0) + IF(BB$1='Stars and Floors'!$E6,1, 0) + IF(BB$1='Stars and Floors'!$F6,1, 0) + IF(BB$1='Stars and Floors'!$G6,1, 0), 0)` |
| BC6 | `=IF('Stars and Floors'!$A6, IF(BC$1='Stars and Floors'!$C6,1, 0) + IF(BC$1='Stars and Floors'!$D6,1, 0) + IF(BC$1='Stars and Floors'!$E6,1, 0) + IF(BC$1='Stars and Floors'!$F6,1, 0) + IF(BC$1='Stars and Floors'!$G6,1, 0), 0)` |
| BD6 | `=IF('Stars and Floors'!$A6, IF(BD$1='Stars and Floors'!$C6,1, 0) + IF(BD$1='Stars and Floors'!$D6,1, 0) + IF(BD$1='Stars and Floors'!$E6,1, 0) + IF(BD$1='Stars and Floors'!$F6,1, 0) + IF(BD$1='Stars and Floors'!$G6,1, 0), 0)` |
| BE6 | `=IF('Stars and Floors'!$A6, IF(BE$1='Stars and Floors'!$C6,1, 0) + IF(BE$1='Stars and Floors'!$D6,1, 0) + IF(BE$1='Stars and Floors'!$E6,1, 0) + IF(BE$1='Stars and Floors'!$F6,1, 0) + IF(BE$1='Stars and Floors'!$G6,1, 0), 0)` |
| BF6 | `=IF('Stars and Floors'!$A6, IF(BF$1='Stars and Floors'!$C6,1, 0) + IF(BF$1='Stars and Floors'!$D6,1, 0) + IF(BF$1='Stars and Floors'!$E6,1, 0) + IF(BF$1='Stars and Floors'!$F6,1, 0) + IF(BF$1='Stars and Floors'!$G6,1, 0), 0)` |
| BG6 | `=IF('Stars and Floors'!$A6, IF(BG$1='Stars and Floors'!$C6,1, 0) + IF(BG$1='Stars and Floors'!$D6,1, 0) + IF(BG$1='Stars and Floors'!$E6,1, 0) + IF(BG$1='Stars and Floors'!$F6,1, 0) + IF(BG$1='Stars and Floors'!$G6,1, 0), 0)` |
| BH6 | `=IF('Stars and Floors'!$A6, IF(BH$1='Stars and Floors'!$C6,1, 0) + IF(BH$1='Stars and Floors'!$D6,1, 0) + IF(BH$1='Stars and Floors'!$E6,1, 0) + IF(BH$1='Stars and Floors'!$F6,1, 0) + IF(BH$1='Stars and Floors'!$G6,1, 0), 0)` |
| BI6 | `=IF('Stars and Floors'!$A6, IF(BI$1='Stars and Floors'!$C6,1, 0) + IF(BI$1='Stars and Floors'!$D6,1, 0) + IF(BI$1='Stars and Floors'!$E6,1, 0) + IF(BI$1='Stars and Floors'!$F6,1, 0) + IF(BI$1='Stars and Floors'!$G6,1, 0), 0)` |
| BJ6 | `=IF('Stars and Floors'!$A6, IF(BJ$1='Stars and Floors'!$C6,1, 0) + IF(BJ$1='Stars and Floors'!$D6,1, 0) + IF(BJ$1='Stars and Floors'!$E6,1, 0) + IF(BJ$1='Stars and Floors'!$F6,1, 0) + IF(BJ$1='Stars and Floors'!$G6,1, 0), 0)` |
| BK6 | `=IF('Stars and Floors'!$A6, IF(BK$1='Stars and Floors'!$C6,1, 0) + IF(BK$1='Stars and Floors'!$D6,1, 0) + IF(BK$1='Stars and Floors'!$E6,1, 0) + IF(BK$1='Stars and Floors'!$F6,1, 0) + IF(BK$1='Stars and Floors'!$G6,1, 0), 0)` |
| BL6 | `=IF('Stars and Floors'!$A6, IF(BL$1='Stars and Floors'!$C6,1, 0) + IF(BL$1='Stars and Floors'!$D6,1, 0) + IF(BL$1='Stars and Floors'!$E6,1, 0) + IF(BL$1='Stars and Floors'!$F6,1, 0) + IF(BL$1='Stars and Floors'!$G6,1, 0), 0)` |
| BM6 | `=IF('Stars and Floors'!$A6, IF(BM$1='Stars and Floors'!$C6,1, 0) + IF(BM$1='Stars and Floors'!$D6,1, 0) + IF(BM$1='Stars and Floors'!$E6,1, 0) + IF(BM$1='Stars and Floors'!$F6,1, 0) + IF(BM$1='Stars and Floors'!$G6,1, 0), 0)` |
| BN6 | `=IF('Stars and Floors'!$A6, IF(BN$1='Stars and Floors'!$C6,1, 0) + IF(BN$1='Stars and Floors'!$D6,1, 0) + IF(BN$1='Stars and Floors'!$E6,1, 0) + IF(BN$1='Stars and Floors'!$F6,1, 0) + IF(BN$1='Stars and Floors'!$G6,1, 0), 0)` |
| BO6 | `=IF('Stars and Floors'!$A6, IF(BO$1='Stars and Floors'!$C6,1, 0) + IF(BO$1='Stars and Floors'!$D6,1, 0) + IF(BO$1='Stars and Floors'!$E6,1, 0) + IF(BO$1='Stars and Floors'!$F6,1, 0) + IF(BO$1='Stars and Floors'!$G6,1, 0), 0)` |
| BP6 | `=IF('Stars and Floors'!$A6, IF(BP$1='Stars and Floors'!$C6,1, 0) + IF(BP$1='Stars and Floors'!$D6,1, 0) + IF(BP$1='Stars and Floors'!$E6,1, 0) + IF(BP$1='Stars and Floors'!$F6,1, 0) + IF(BP$1='Stars and Floors'!$G6,1, 0), 0)` |
| BQ6 | `=IF('Stars and Floors'!$A6, IF(BQ$1='Stars and Floors'!$C6,1, 0) + IF(BQ$1='Stars and Floors'!$D6,1, 0) + IF(BQ$1='Stars and Floors'!$E6,1, 0) + IF(BQ$1='Stars and Floors'!$F6,1, 0) + IF(BQ$1='Stars and Floors'!$G6,1, 0), 0)` |
| BR6 | `=IF('Stars and Floors'!$A6, IF(BR$1='Stars and Floors'!$C6,1, 0) + IF(BR$1='Stars and Floors'!$D6,1, 0) + IF(BR$1='Stars and Floors'!$E6,1, 0) + IF(BR$1='Stars and Floors'!$F6,1, 0) + IF(BR$1='Stars and Floors'!$G6,1, 0), 0)` |
| BS6 | `=IF('Stars and Floors'!$A6, IF(BS$1='Stars and Floors'!$C6,1, 0) + IF(BS$1='Stars and Floors'!$D6,1, 0) + IF(BS$1='Stars and Floors'!$E6,1, 0) + IF(BS$1='Stars and Floors'!$F6,1, 0) + IF(BS$1='Stars and Floors'!$G6,1, 0), 0)` |
| BT6 | `=IF('Stars and Floors'!$A6, IF(BT$1='Stars and Floors'!$C6,1, 0) + IF(BT$1='Stars and Floors'!$D6,1, 0) + IF(BT$1='Stars and Floors'!$E6,1, 0) + IF(BT$1='Stars and Floors'!$F6,1, 0) + IF(BT$1='Stars and Floors'!$G6,1, 0), 0)` |
| BU6 | `=IF('Stars and Floors'!$A6, IF(BU$1='Stars and Floors'!$C6,1, 0) + IF(BU$1='Stars and Floors'!$D6,1, 0) + IF(BU$1='Stars and Floors'!$E6,1, 0) + IF(BU$1='Stars and Floors'!$F6,1, 0) + IF(BU$1='Stars and Floors'!$G6,1, 0), 0)` |
| BV6 | `=IF('Stars and Floors'!$A6, IF(BV$1='Stars and Floors'!$C6,1, 0) + IF(BV$1='Stars and Floors'!$D6,1, 0) + IF(BV$1='Stars and Floors'!$E6,1, 0) + IF(BV$1='Stars and Floors'!$F6,1, 0) + IF(BV$1='Stars and Floors'!$G6,1, 0), 0)` |
| BW6 | `=IF('Stars and Floors'!$A6, IF(BW$1='Stars and Floors'!$C6,1, 0) + IF(BW$1='Stars and Floors'!$D6,1, 0) + IF(BW$1='Stars and Floors'!$E6,1, 0) + IF(BW$1='Stars and Floors'!$F6,1, 0) + IF(BW$1='Stars and Floors'!$G6,1, 0), 0)` |
| BX6 | `=IF('Stars and Floors'!$A6, IF(BX$1='Stars and Floors'!$C6,1, 0) + IF(BX$1='Stars and Floors'!$D6,1, 0) + IF(BX$1='Stars and Floors'!$E6,1, 0) + IF(BX$1='Stars and Floors'!$F6,1, 0) + IF(BX$1='Stars and Floors'!$G6,1, 0), 0)` |
| BY6 | `=IF('Stars and Floors'!$A6, IF(BY$1='Stars and Floors'!$C6,1, 0) + IF(BY$1='Stars and Floors'!$D6,1, 0) + IF(BY$1='Stars and Floors'!$E6,1, 0) + IF(BY$1='Stars and Floors'!$F6,1, 0) + IF(BY$1='Stars and Floors'!$G6,1, 0), 0)` |
| BZ6 | `=IF('Stars and Floors'!$A6, IF(BZ$1='Stars and Floors'!$C6,1, 0) + IF(BZ$1='Stars and Floors'!$D6,1, 0) + IF(BZ$1='Stars and Floors'!$E6,1, 0) + IF(BZ$1='Stars and Floors'!$F6,1, 0) + IF(BZ$1='Stars and Floors'!$G6,1, 0), 0)` |
| CA6 | `=IF('Stars and Floors'!$A6, IF(CA$1='Stars and Floors'!$C6,1, 0) + IF(CA$1='Stars and Floors'!$D6,1, 0) + IF(CA$1='Stars and Floors'!$E6,1, 0) + IF(CA$1='Stars and Floors'!$F6,1, 0) + IF(CA$1='Stars and Floors'!$G6,1, 0), 0)` |
| CB6 | `=IF('Stars and Floors'!$A6, IF(CB$1='Stars and Floors'!$C6,1, 0) + IF(CB$1='Stars and Floors'!$D6,1, 0) + IF(CB$1='Stars and Floors'!$E6,1, 0) + IF(CB$1='Stars and Floors'!$F6,1, 0) + IF(CB$1='Stars and Floors'!$G6,1, 0), 0)` |
| CC6 | `=IF('Stars and Floors'!$A6, IF(CC$1='Stars and Floors'!$C6,1, 0) + IF(CC$1='Stars and Floors'!$D6,1, 0) + IF(CC$1='Stars and Floors'!$E6,1, 0) + IF(CC$1='Stars and Floors'!$F6,1, 0) + IF(CC$1='Stars and Floors'!$G6,1, 0), 0)` |
| CD6 | `=IF('Stars and Floors'!$A6, IF(CD$1='Stars and Floors'!$C6,1, 0) + IF(CD$1='Stars and Floors'!$D6,1, 0) + IF(CD$1='Stars and Floors'!$E6,1, 0) + IF(CD$1='Stars and Floors'!$F6,1, 0) + IF(CD$1='Stars and Floors'!$G6,1, 0), 0)` |
| CE6 | `=IF('Stars and Floors'!$A6, IF(CE$1='Stars and Floors'!$C6,1, 0) + IF(CE$1='Stars and Floors'!$D6,1, 0) + IF(CE$1='Stars and Floors'!$E6,1, 0) + IF(CE$1='Stars and Floors'!$F6,1, 0) + IF(CE$1='Stars and Floors'!$G6,1, 0), 0)` |
| CF6 | `=IF('Stars and Floors'!$A6, IF(CF$1='Stars and Floors'!$C6,1, 0) + IF(CF$1='Stars and Floors'!$D6,1, 0) + IF(CF$1='Stars and Floors'!$E6,1, 0) + IF(CF$1='Stars and Floors'!$F6,1, 0) + IF(CF$1='Stars and Floors'!$G6,1, 0), 0)` |
| CG6 | `=IF('Stars and Floors'!$A6, IF(CG$1='Stars and Floors'!$C6,1, 0) + IF(CG$1='Stars and Floors'!$D6,1, 0) + IF(CG$1='Stars and Floors'!$E6,1, 0) + IF(CG$1='Stars and Floors'!$F6,1, 0) + IF(CG$1='Stars and Floors'!$G6,1, 0), 0)` |
| CH6 | `=IF('Stars and Floors'!$A6, IF(CH$1='Stars and Floors'!$C6,1, 0) + IF(CH$1='Stars and Floors'!$D6,1, 0) + IF(CH$1='Stars and Floors'!$E6,1, 0) + IF(CH$1='Stars and Floors'!$F6,1, 0) + IF(CH$1='Stars and Floors'!$G6,1, 0), 0)` |
| CI6 | `=IF('Stars and Floors'!$A6, IF(CI$1='Stars and Floors'!$C6,1, 0) + IF(CI$1='Stars and Floors'!$D6,1, 0) + IF(CI$1='Stars and Floors'!$E6,1, 0) + IF(CI$1='Stars and Floors'!$F6,1, 0) + IF(CI$1='Stars and Floors'!$G6,1, 0), 0)` |
| CJ6 | `=IF('Stars and Floors'!$A6, IF(CJ$1='Stars and Floors'!$C6,1, 0) + IF(CJ$1='Stars and Floors'!$D6,1, 0) + IF(CJ$1='Stars and Floors'!$E6,1, 0) + IF(CJ$1='Stars and Floors'!$F6,1, 0) + IF(CJ$1='Stars and Floors'!$G6,1, 0), 0)` |
| CK6 | `=IF('Stars and Floors'!$A6, IF(CK$1='Stars and Floors'!$C6,1, 0) + IF(CK$1='Stars and Floors'!$D6,1, 0) + IF(CK$1='Stars and Floors'!$E6,1, 0) + IF(CK$1='Stars and Floors'!$F6,1, 0) + IF(CK$1='Stars and Floors'!$G6,1, 0), 0)` |
| CL6 | `=IF('Stars and Floors'!$A6, IF(CL$1='Stars and Floors'!$C6,1, 0) + IF(CL$1='Stars and Floors'!$D6,1, 0) + IF(CL$1='Stars and Floors'!$E6,1, 0) + IF(CL$1='Stars and Floors'!$F6,1, 0) + IF(CL$1='Stars and Floors'!$G6,1, 0), 0)` |
| CM6 | `=IF('Stars and Floors'!$A6, IF(CM$1='Stars and Floors'!$C6,1, 0) + IF(CM$1='Stars and Floors'!$D6,1, 0) + IF(CM$1='Stars and Floors'!$E6,1, 0) + IF(CM$1='Stars and Floors'!$F6,1, 0) + IF(CM$1='Stars and Floors'!$G6,1, 0), 0)` |
| CN6 | `=IF('Stars and Floors'!$A6, IF(CN$1='Stars and Floors'!$C6,1, 0) + IF(CN$1='Stars and Floors'!$D6,1, 0) + IF(CN$1='Stars and Floors'!$E6,1, 0) + IF(CN$1='Stars and Floors'!$F6,1, 0) + IF(CN$1='Stars and Floors'!$G6,1, 0), 0)` |
| CO6 | `=IF('Stars and Floors'!$A6, IF(CO$1='Stars and Floors'!$C6,1, 0) + IF(CO$1='Stars and Floors'!$D6,1, 0) + IF(CO$1='Stars and Floors'!$E6,1, 0) + IF(CO$1='Stars and Floors'!$F6,1, 0) + IF(CO$1='Stars and Floors'!$G6,1, 0), 0)` |
| CP6 | `=IF('Stars and Floors'!$A6, IF(CP$1='Stars and Floors'!$C6,1, 0) + IF(CP$1='Stars and Floors'!$D6,1, 0) + IF(CP$1='Stars and Floors'!$E6,1, 0) + IF(CP$1='Stars and Floors'!$F6,1, 0) + IF(CP$1='Stars and Floors'!$G6,1, 0), 0)` |
| CQ6 | `=IF('Stars and Floors'!$A6, IF(CQ$1='Stars and Floors'!$C6,1, 0) + IF(CQ$1='Stars and Floors'!$D6,1, 0) + IF(CQ$1='Stars and Floors'!$E6,1, 0) + IF(CQ$1='Stars and Floors'!$F6,1, 0) + IF(CQ$1='Stars and Floors'!$G6,1, 0), 0)` |
| CR6 | `=IF('Stars and Floors'!$A6, IF(CR$1='Stars and Floors'!$C6,1, 0) + IF(CR$1='Stars and Floors'!$D6,1, 0) + IF(CR$1='Stars and Floors'!$E6,1, 0) + IF(CR$1='Stars and Floors'!$F6,1, 0) + IF(CR$1='Stars and Floors'!$G6,1, 0), 0)` |
| CS6 | `=IF('Stars and Floors'!$A6, IF(CS$1='Stars and Floors'!$C6,1, 0) + IF(CS$1='Stars and Floors'!$D6,1, 0) + IF(CS$1='Stars and Floors'!$E6,1, 0) + IF(CS$1='Stars and Floors'!$F6,1, 0) + IF(CS$1='Stars and Floors'!$G6,1, 0), 0)` |
| CT6 | `=IF('Stars and Floors'!$A6, IF(CT$1='Stars and Floors'!$C6,1, 0) + IF(CT$1='Stars and Floors'!$D6,1, 0) + IF(CT$1='Stars and Floors'!$E6,1, 0) + IF(CT$1='Stars and Floors'!$F6,1, 0) + IF(CT$1='Stars and Floors'!$G6,1, 0), 0)` |
| CU6 | `=IF('Stars and Floors'!$A6, IF(CU$1='Stars and Floors'!$C6,1, 0) + IF(CU$1='Stars and Floors'!$D6,1, 0) + IF(CU$1='Stars and Floors'!$E6,1, 0) + IF(CU$1='Stars and Floors'!$F6,1, 0) + IF(CU$1='Stars and Floors'!$G6,1, 0), 0)` |
| CV6 | `=IF('Stars and Floors'!$A6, IF(CV$1='Stars and Floors'!$C6,1, 0) + IF(CV$1='Stars and Floors'!$D6,1, 0) + IF(CV$1='Stars and Floors'!$E6,1, 0) + IF(CV$1='Stars and Floors'!$F6,1, 0) + IF(CV$1='Stars and Floors'!$G6,1, 0), 0)` |
| CW6 | `=IF('Stars and Floors'!$A6, IF(CW$1='Stars and Floors'!$C6,1, 0) + IF(CW$1='Stars and Floors'!$D6,1, 0) + IF(CW$1='Stars and Floors'!$E6,1, 0) + IF(CW$1='Stars and Floors'!$F6,1, 0) + IF(CW$1='Stars and Floors'!$G6,1, 0), 0)` |
| CX6 | `=IF('Stars and Floors'!$A6, IF(CX$1='Stars and Floors'!$C6,1, 0) + IF(CX$1='Stars and Floors'!$D6,1, 0) + IF(CX$1='Stars and Floors'!$E6,1, 0) + IF(CX$1='Stars and Floors'!$F6,1, 0) + IF(CX$1='Stars and Floors'!$G6,1, 0), 0)` |
| CY6 | `=IF('Stars and Floors'!$A6, IF(CY$1='Stars and Floors'!$C6,1, 0) + IF(CY$1='Stars and Floors'!$D6,1, 0) + IF(CY$1='Stars and Floors'!$E6,1, 0) + IF(CY$1='Stars and Floors'!$F6,1, 0) + IF(CY$1='Stars and Floors'!$G6,1, 0), 0)` |
| CZ6 | `=IF('Stars and Floors'!$A6, IF(CZ$1='Stars and Floors'!$C6,1, 0) + IF(CZ$1='Stars and Floors'!$D6,1, 0) + IF(CZ$1='Stars and Floors'!$E6,1, 0) + IF(CZ$1='Stars and Floors'!$F6,1, 0) + IF(CZ$1='Stars and Floors'!$G6,1, 0), 0)` |
| DA6 | `=IF('Stars and Floors'!$A6, IF(DA$1='Stars and Floors'!$C6,1, 0) + IF(DA$1='Stars and Floors'!$D6,1, 0) + IF(DA$1='Stars and Floors'!$E6,1, 0) + IF(DA$1='Stars and Floors'!$F6,1, 0) + IF(DA$1='Stars and Floors'!$G6,1, 0), 0)` |
| DB6 | `=IF('Stars and Floors'!$A6, IF(DB$1='Stars and Floors'!$C6,1, 0) + IF(DB$1='Stars and Floors'!$D6,1, 0) + IF(DB$1='Stars and Floors'!$E6,1, 0) + IF(DB$1='Stars and Floors'!$F6,1, 0) + IF(DB$1='Stars and Floors'!$G6,1, 0), 0)` |
| DC6 | `=IF('Stars and Floors'!$A6, IF(DC$1='Stars and Floors'!$C6,1, 0) + IF(DC$1='Stars and Floors'!$D6,1, 0) + IF(DC$1='Stars and Floors'!$E6,1, 0) + IF(DC$1='Stars and Floors'!$F6,1, 0) + IF(DC$1='Stars and Floors'!$G6,1, 0), 0)` |
| DD6 | `=IF('Stars and Floors'!$A6, IF(DD$1='Stars and Floors'!$C6,1, 0) + IF(DD$1='Stars and Floors'!$D6,1, 0) + IF(DD$1='Stars and Floors'!$E6,1, 0) + IF(DD$1='Stars and Floors'!$F6,1, 0) + IF(DD$1='Stars and Floors'!$G6,1, 0), 0)` |
| DE6 | `=IF('Stars and Floors'!$A6, IF(DE$1='Stars and Floors'!$C6,1, 0) + IF(DE$1='Stars and Floors'!$D6,1, 0) + IF(DE$1='Stars and Floors'!$E6,1, 0) + IF(DE$1='Stars and Floors'!$F6,1, 0) + IF(DE$1='Stars and Floors'!$G6,1, 0), 0)` |
| DF6 | `=IF('Stars and Floors'!$A6, IF(DF$1='Stars and Floors'!$C6,1, 0) + IF(DF$1='Stars and Floors'!$D6,1, 0) + IF(DF$1='Stars and Floors'!$E6,1, 0) + IF(DF$1='Stars and Floors'!$F6,1, 0) + IF(DF$1='Stars and Floors'!$G6,1, 0), 0)` |
| DG6 | `=IF('Stars and Floors'!$A6, IF(DG$1='Stars and Floors'!$C6,1, 0) + IF(DG$1='Stars and Floors'!$D6,1, 0) + IF(DG$1='Stars and Floors'!$E6,1, 0) + IF(DG$1='Stars and Floors'!$F6,1, 0) + IF(DG$1='Stars and Floors'!$G6,1, 0), 0)` |
| DH6 | `=IF('Stars and Floors'!$A6, IF(DH$1='Stars and Floors'!$C6,1, 0) + IF(DH$1='Stars and Floors'!$D6,1, 0) + IF(DH$1='Stars and Floors'!$E6,1, 0) + IF(DH$1='Stars and Floors'!$F6,1, 0) + IF(DH$1='Stars and Floors'!$G6,1, 0), 0)` |
| DI6 | `=IF('Stars and Floors'!$A6, IF(DI$1='Stars and Floors'!$C6,1, 0) + IF(DI$1='Stars and Floors'!$D6,1, 0) + IF(DI$1='Stars and Floors'!$E6,1, 0) + IF(DI$1='Stars and Floors'!$F6,1, 0) + IF(DI$1='Stars and Floors'!$G6,1, 0), 0)` |
| DJ6 | `=IF('Stars and Floors'!$A6, IF(DJ$1='Stars and Floors'!$C6,1, 0) + IF(DJ$1='Stars and Floors'!$D6,1, 0) + IF(DJ$1='Stars and Floors'!$E6,1, 0) + IF(DJ$1='Stars and Floors'!$F6,1, 0) + IF(DJ$1='Stars and Floors'!$G6,1, 0), 0)` |
| DK6 | `=IF('Stars and Floors'!$A6, IF(DK$1='Stars and Floors'!$C6,1, 0) + IF(DK$1='Stars and Floors'!$D6,1, 0) + IF(DK$1='Stars and Floors'!$E6,1, 0) + IF(DK$1='Stars and Floors'!$F6,1, 0) + IF(DK$1='Stars and Floors'!$G6,1, 0), 0)` |
| DL6 | `=IF('Stars and Floors'!$A6, IF(DL$1='Stars and Floors'!$C6,1, 0) + IF(DL$1='Stars and Floors'!$D6,1, 0) + IF(DL$1='Stars and Floors'!$E6,1, 0) + IF(DL$1='Stars and Floors'!$F6,1, 0) + IF(DL$1='Stars and Floors'!$G6,1, 0), 0)` |
| DM6 | `=IF('Stars and Floors'!$A6, IF(DM$1='Stars and Floors'!$C6,1, 0) + IF(DM$1='Stars and Floors'!$D6,1, 0) + IF(DM$1='Stars and Floors'!$E6,1, 0) + IF(DM$1='Stars and Floors'!$F6,1, 0) + IF(DM$1='Stars and Floors'!$G6,1, 0), 0)` |
| DN6 | `=IF('Stars and Floors'!$A6, IF(DN$1='Stars and Floors'!$C6,1, 0) + IF(DN$1='Stars and Floors'!$D6,1, 0) + IF(DN$1='Stars and Floors'!$E6,1, 0) + IF(DN$1='Stars and Floors'!$F6,1, 0) + IF(DN$1='Stars and Floors'!$G6,1, 0), 0)` |
| DO6 | `=IF('Stars and Floors'!$A6, IF(DO$1='Stars and Floors'!$C6,1, 0) + IF(DO$1='Stars and Floors'!$D6,1, 0) + IF(DO$1='Stars and Floors'!$E6,1, 0) + IF(DO$1='Stars and Floors'!$F6,1, 0) + IF(DO$1='Stars and Floors'!$G6,1, 0), 0)` |
| DP6 | `=IF('Stars and Floors'!$A6, IF(DP$1='Stars and Floors'!$C6,1, 0) + IF(DP$1='Stars and Floors'!$D6,1, 0) + IF(DP$1='Stars and Floors'!$E6,1, 0) + IF(DP$1='Stars and Floors'!$F6,1, 0) + IF(DP$1='Stars and Floors'!$G6,1, 0), 0)` |
| DQ6 | `=IF('Stars and Floors'!$A6, IF(DQ$1='Stars and Floors'!$C6,1, 0) + IF(DQ$1='Stars and Floors'!$D6,1, 0) + IF(DQ$1='Stars and Floors'!$E6,1, 0) + IF(DQ$1='Stars and Floors'!$F6,1, 0) + IF(DQ$1='Stars and Floors'!$G6,1, 0), 0)` |
| B7 | `=IF('Stars and Floors'!$A7, IF(B$1='Stars and Floors'!$C7,1, 0) + IF(B$1='Stars and Floors'!$D7,1, 0) + IF(B$1='Stars and Floors'!$E7,1, 0) + IF(B$1='Stars and Floors'!$F7,1, 0) + IF(B$1='Stars and Floors'!$G7,1, 0), 0)` |
| C7 | `=IF('Stars and Floors'!$A7, IF(C$1='Stars and Floors'!$C7,1, 0) + IF(C$1='Stars and Floors'!$D7,1, 0) + IF(C$1='Stars and Floors'!$E7,1, 0) + IF(C$1='Stars and Floors'!$F7,1, 0) + IF(C$1='Stars and Floors'!$G7,1, 0), 0)` |
| D7 | `=IF('Stars and Floors'!$A7, IF(D$1='Stars and Floors'!$C7,1, 0) + IF(D$1='Stars and Floors'!$D7,1, 0) + IF(D$1='Stars and Floors'!$E7,1, 0) + IF(D$1='Stars and Floors'!$F7,1, 0) + IF(D$1='Stars and Floors'!$G7,1, 0), 0)` |
| E7 | `=IF('Stars and Floors'!$A7, IF(E$1='Stars and Floors'!$C7,1, 0) + IF(E$1='Stars and Floors'!$D7,1, 0) + IF(E$1='Stars and Floors'!$E7,1, 0) + IF(E$1='Stars and Floors'!$F7,1, 0) + IF(E$1='Stars and Floors'!$G7,1, 0), 0)` |
| F7 | `=IF('Stars and Floors'!$A7, IF(F$1='Stars and Floors'!$C7,1, 0) + IF(F$1='Stars and Floors'!$D7,1, 0) + IF(F$1='Stars and Floors'!$E7,1, 0) + IF(F$1='Stars and Floors'!$F7,1, 0) + IF(F$1='Stars and Floors'!$G7,1, 0), 0)` |
| G7 | `=IF('Stars and Floors'!$A7, IF(G$1='Stars and Floors'!$C7,1, 0) + IF(G$1='Stars and Floors'!$D7,1, 0) + IF(G$1='Stars and Floors'!$E7,1, 0) + IF(G$1='Stars and Floors'!$F7,1, 0) + IF(G$1='Stars and Floors'!$G7,1, 0), 0)` |
| H7 | `=IF('Stars and Floors'!$A7, IF(H$1='Stars and Floors'!$C7,1, 0) + IF(H$1='Stars and Floors'!$D7,1, 0) + IF(H$1='Stars and Floors'!$E7,1, 0) + IF(H$1='Stars and Floors'!$F7,1, 0) + IF(H$1='Stars and Floors'!$G7,1, 0), 0)` |
| I7 | `=IF('Stars and Floors'!$A7, IF(I$1='Stars and Floors'!$C7,1, 0) + IF(I$1='Stars and Floors'!$D7,1, 0) + IF(I$1='Stars and Floors'!$E7,1, 0) + IF(I$1='Stars and Floors'!$F7,1, 0) + IF(I$1='Stars and Floors'!$G7,1, 0), 0)` |
| J7 | `=IF('Stars and Floors'!$A7, IF(J$1='Stars and Floors'!$C7,1, 0) + IF(J$1='Stars and Floors'!$D7,1, 0) + IF(J$1='Stars and Floors'!$E7,1, 0) + IF(J$1='Stars and Floors'!$F7,1, 0) + IF(J$1='Stars and Floors'!$G7,1, 0), 0)` |
| K7 | `=IF('Stars and Floors'!$A7, IF(K$1='Stars and Floors'!$C7,1, 0) + IF(K$1='Stars and Floors'!$D7,1, 0) + IF(K$1='Stars and Floors'!$E7,1, 0) + IF(K$1='Stars and Floors'!$F7,1, 0) + IF(K$1='Stars and Floors'!$G7,1, 0), 0)` |
| L7 | `=IF('Stars and Floors'!$A7, IF(L$1='Stars and Floors'!$C7,1, 0) + IF(L$1='Stars and Floors'!$D7,1, 0) + IF(L$1='Stars and Floors'!$E7,1, 0) + IF(L$1='Stars and Floors'!$F7,1, 0) + IF(L$1='Stars and Floors'!$G7,1, 0), 0)` |
| M7 | `=IF('Stars and Floors'!$A7, IF(M$1='Stars and Floors'!$C7,1, 0) + IF(M$1='Stars and Floors'!$D7,1, 0) + IF(M$1='Stars and Floors'!$E7,1, 0) + IF(M$1='Stars and Floors'!$F7,1, 0) + IF(M$1='Stars and Floors'!$G7,1, 0), 0)` |
| N7 | `=IF('Stars and Floors'!$A7, IF(N$1='Stars and Floors'!$C7,1, 0) + IF(N$1='Stars and Floors'!$D7,1, 0) + IF(N$1='Stars and Floors'!$E7,1, 0) + IF(N$1='Stars and Floors'!$F7,1, 0) + IF(N$1='Stars and Floors'!$G7,1, 0), 0)` |
| O7 | `=IF('Stars and Floors'!$A7, IF(O$1='Stars and Floors'!$C7,1, 0) + IF(O$1='Stars and Floors'!$D7,1, 0) + IF(O$1='Stars and Floors'!$E7,1, 0) + IF(O$1='Stars and Floors'!$F7,1, 0) + IF(O$1='Stars and Floors'!$G7,1, 0), 0)` |
| P7 | `=IF('Stars and Floors'!$A7, IF(P$1='Stars and Floors'!$C7,1, 0) + IF(P$1='Stars and Floors'!$D7,1, 0) + IF(P$1='Stars and Floors'!$E7,1, 0) + IF(P$1='Stars and Floors'!$F7,1, 0) + IF(P$1='Stars and Floors'!$G7,1, 0), 0)` |
| Q7 | `=IF('Stars and Floors'!$A7, IF(Q$1='Stars and Floors'!$C7,1, 0) + IF(Q$1='Stars and Floors'!$D7,1, 0) + IF(Q$1='Stars and Floors'!$E7,1, 0) + IF(Q$1='Stars and Floors'!$F7,1, 0) + IF(Q$1='Stars and Floors'!$G7,1, 0), 0)` |
| R7 | `=IF('Stars and Floors'!$A7, IF(R$1='Stars and Floors'!$C7,1, 0) + IF(R$1='Stars and Floors'!$D7,1, 0) + IF(R$1='Stars and Floors'!$E7,1, 0) + IF(R$1='Stars and Floors'!$F7,1, 0) + IF(R$1='Stars and Floors'!$G7,1, 0), 0)` |
| S7 | `=IF('Stars and Floors'!$A7, IF(S$1='Stars and Floors'!$C7,1, 0) + IF(S$1='Stars and Floors'!$D7,1, 0) + IF(S$1='Stars and Floors'!$E7,1, 0) + IF(S$1='Stars and Floors'!$F7,1, 0) + IF(S$1='Stars and Floors'!$G7,1, 0), 0)` |
| T7 | `=IF('Stars and Floors'!$A7, IF(T$1='Stars and Floors'!$C7,1, 0) + IF(T$1='Stars and Floors'!$D7,1, 0) + IF(T$1='Stars and Floors'!$E7,1, 0) + IF(T$1='Stars and Floors'!$F7,1, 0) + IF(T$1='Stars and Floors'!$G7,1, 0), 0)` |
| U7 | `=IF('Stars and Floors'!$A7, IF(U$1='Stars and Floors'!$C7,1, 0) + IF(U$1='Stars and Floors'!$D7,1, 0) + IF(U$1='Stars and Floors'!$E7,1, 0) + IF(U$1='Stars and Floors'!$F7,1, 0) + IF(U$1='Stars and Floors'!$G7,1, 0), 0)` |
| V7 | `=IF('Stars and Floors'!$A7, IF(V$1='Stars and Floors'!$C7,1, 0) + IF(V$1='Stars and Floors'!$D7,1, 0) + IF(V$1='Stars and Floors'!$E7,1, 0) + IF(V$1='Stars and Floors'!$F7,1, 0) + IF(V$1='Stars and Floors'!$G7,1, 0), 0)` |
| W7 | `=IF('Stars and Floors'!$A7, IF(W$1='Stars and Floors'!$C7,1, 0) + IF(W$1='Stars and Floors'!$D7,1, 0) + IF(W$1='Stars and Floors'!$E7,1, 0) + IF(W$1='Stars and Floors'!$F7,1, 0) + IF(W$1='Stars and Floors'!$G7,1, 0), 0)` |
| X7 | `=IF('Stars and Floors'!$A7, IF(X$1='Stars and Floors'!$C7,1, 0) + IF(X$1='Stars and Floors'!$D7,1, 0) + IF(X$1='Stars and Floors'!$E7,1, 0) + IF(X$1='Stars and Floors'!$F7,1, 0) + IF(X$1='Stars and Floors'!$G7,1, 0), 0)` |
| Y7 | `=IF('Stars and Floors'!$A7, IF(Y$1='Stars and Floors'!$C7,1, 0) + IF(Y$1='Stars and Floors'!$D7,1, 0) + IF(Y$1='Stars and Floors'!$E7,1, 0) + IF(Y$1='Stars and Floors'!$F7,1, 0) + IF(Y$1='Stars and Floors'!$G7,1, 0), 0)` |
| Z7 | `=IF('Stars and Floors'!$A7, IF(Z$1='Stars and Floors'!$C7,1, 0) + IF(Z$1='Stars and Floors'!$D7,1, 0) + IF(Z$1='Stars and Floors'!$E7,1, 0) + IF(Z$1='Stars and Floors'!$F7,1, 0) + IF(Z$1='Stars and Floors'!$G7,1, 0), 0)` |
| AA7 | `=IF('Stars and Floors'!$A7, IF(AA$1='Stars and Floors'!$C7,1, 0) + IF(AA$1='Stars and Floors'!$D7,1, 0) + IF(AA$1='Stars and Floors'!$E7,1, 0) + IF(AA$1='Stars and Floors'!$F7,1, 0) + IF(AA$1='Stars and Floors'!$G7,1, 0), 0)` |
| AB7 | `=IF('Stars and Floors'!$A7, IF(AB$1='Stars and Floors'!$C7,1, 0) + IF(AB$1='Stars and Floors'!$D7,1, 0) + IF(AB$1='Stars and Floors'!$E7,1, 0) + IF(AB$1='Stars and Floors'!$F7,1, 0) + IF(AB$1='Stars and Floors'!$G7,1, 0), 0)` |
| AC7 | `=IF('Stars and Floors'!$A7, IF(AC$1='Stars and Floors'!$C7,1, 0) + IF(AC$1='Stars and Floors'!$D7,1, 0) + IF(AC$1='Stars and Floors'!$E7,1, 0) + IF(AC$1='Stars and Floors'!$F7,1, 0) + IF(AC$1='Stars and Floors'!$G7,1, 0), 0)` |
| AD7 | `=IF('Stars and Floors'!$A7, IF(AD$1='Stars and Floors'!$C7,1, 0) + IF(AD$1='Stars and Floors'!$D7,1, 0) + IF(AD$1='Stars and Floors'!$E7,1, 0) + IF(AD$1='Stars and Floors'!$F7,1, 0) + IF(AD$1='Stars and Floors'!$G7,1, 0), 0)` |
| AE7 | `=IF('Stars and Floors'!$A7, IF(AE$1='Stars and Floors'!$C7,1, 0) + IF(AE$1='Stars and Floors'!$D7,1, 0) + IF(AE$1='Stars and Floors'!$E7,1, 0) + IF(AE$1='Stars and Floors'!$F7,1, 0) + IF(AE$1='Stars and Floors'!$G7,1, 0), 0)` |
| AF7 | `=IF('Stars and Floors'!$A7, IF(AF$1='Stars and Floors'!$C7,1, 0) + IF(AF$1='Stars and Floors'!$D7,1, 0) + IF(AF$1='Stars and Floors'!$E7,1, 0) + IF(AF$1='Stars and Floors'!$F7,1, 0) + IF(AF$1='Stars and Floors'!$G7,1, 0), 0)` |
| AG7 | `=IF('Stars and Floors'!$A7, IF(AG$1='Stars and Floors'!$C7,1, 0) + IF(AG$1='Stars and Floors'!$D7,1, 0) + IF(AG$1='Stars and Floors'!$E7,1, 0) + IF(AG$1='Stars and Floors'!$F7,1, 0) + IF(AG$1='Stars and Floors'!$G7,1, 0), 0)` |
| AH7 | `=IF('Stars and Floors'!$A7, IF(AH$1='Stars and Floors'!$C7,1, 0) + IF(AH$1='Stars and Floors'!$D7,1, 0) + IF(AH$1='Stars and Floors'!$E7,1, 0) + IF(AH$1='Stars and Floors'!$F7,1, 0) + IF(AH$1='Stars and Floors'!$G7,1, 0), 0)` |
| AI7 | `=IF('Stars and Floors'!$A7, IF(AI$1='Stars and Floors'!$C7,1, 0) + IF(AI$1='Stars and Floors'!$D7,1, 0) + IF(AI$1='Stars and Floors'!$E7,1, 0) + IF(AI$1='Stars and Floors'!$F7,1, 0) + IF(AI$1='Stars and Floors'!$G7,1, 0), 0)` |
| AJ7 | `=IF('Stars and Floors'!$A7, IF(AJ$1='Stars and Floors'!$C7,1, 0) + IF(AJ$1='Stars and Floors'!$D7,1, 0) + IF(AJ$1='Stars and Floors'!$E7,1, 0) + IF(AJ$1='Stars and Floors'!$F7,1, 0) + IF(AJ$1='Stars and Floors'!$G7,1, 0), 0)` |
| AK7 | `=IF('Stars and Floors'!$A7, IF(AK$1='Stars and Floors'!$C7,1, 0) + IF(AK$1='Stars and Floors'!$D7,1, 0) + IF(AK$1='Stars and Floors'!$E7,1, 0) + IF(AK$1='Stars and Floors'!$F7,1, 0) + IF(AK$1='Stars and Floors'!$G7,1, 0), 0)` |
| AL7 | `=IF('Stars and Floors'!$A7, IF(AL$1='Stars and Floors'!$C7,1, 0) + IF(AL$1='Stars and Floors'!$D7,1, 0) + IF(AL$1='Stars and Floors'!$E7,1, 0) + IF(AL$1='Stars and Floors'!$F7,1, 0) + IF(AL$1='Stars and Floors'!$G7,1, 0), 0)` |
| AM7 | `=IF('Stars and Floors'!$A7, IF(AM$1='Stars and Floors'!$C7,1, 0) + IF(AM$1='Stars and Floors'!$D7,1, 0) + IF(AM$1='Stars and Floors'!$E7,1, 0) + IF(AM$1='Stars and Floors'!$F7,1, 0) + IF(AM$1='Stars and Floors'!$G7,1, 0), 0)` |
| AN7 | `=IF('Stars and Floors'!$A7, IF(AN$1='Stars and Floors'!$C7,1, 0) + IF(AN$1='Stars and Floors'!$D7,1, 0) + IF(AN$1='Stars and Floors'!$E7,1, 0) + IF(AN$1='Stars and Floors'!$F7,1, 0) + IF(AN$1='Stars and Floors'!$G7,1, 0), 0)` |
| AO7 | `=IF('Stars and Floors'!$A7, IF(AO$1='Stars and Floors'!$C7,1, 0) + IF(AO$1='Stars and Floors'!$D7,1, 0) + IF(AO$1='Stars and Floors'!$E7,1, 0) + IF(AO$1='Stars and Floors'!$F7,1, 0) + IF(AO$1='Stars and Floors'!$G7,1, 0), 0)` |
| AP7 | `=IF('Stars and Floors'!$A7, IF(AP$1='Stars and Floors'!$C7,1, 0) + IF(AP$1='Stars and Floors'!$D7,1, 0) + IF(AP$1='Stars and Floors'!$E7,1, 0) + IF(AP$1='Stars and Floors'!$F7,1, 0) + IF(AP$1='Stars and Floors'!$G7,1, 0), 0)` |
| AQ7 | `=IF('Stars and Floors'!$A7, IF(AQ$1='Stars and Floors'!$C7,1, 0) + IF(AQ$1='Stars and Floors'!$D7,1, 0) + IF(AQ$1='Stars and Floors'!$E7,1, 0) + IF(AQ$1='Stars and Floors'!$F7,1, 0) + IF(AQ$1='Stars and Floors'!$G7,1, 0), 0)` |
| AR7 | `=IF('Stars and Floors'!$A7, IF(AR$1='Stars and Floors'!$C7,1, 0) + IF(AR$1='Stars and Floors'!$D7,1, 0) + IF(AR$1='Stars and Floors'!$E7,1, 0) + IF(AR$1='Stars and Floors'!$F7,1, 0) + IF(AR$1='Stars and Floors'!$G7,1, 0), 0)` |
| AS7 | `=IF('Stars and Floors'!$A7, IF(AS$1='Stars and Floors'!$C7,1, 0) + IF(AS$1='Stars and Floors'!$D7,1, 0) + IF(AS$1='Stars and Floors'!$E7,1, 0) + IF(AS$1='Stars and Floors'!$F7,1, 0) + IF(AS$1='Stars and Floors'!$G7,1, 0), 0)` |
| AT7 | `=IF('Stars and Floors'!$A7, IF(AT$1='Stars and Floors'!$C7,1, 0) + IF(AT$1='Stars and Floors'!$D7,1, 0) + IF(AT$1='Stars and Floors'!$E7,1, 0) + IF(AT$1='Stars and Floors'!$F7,1, 0) + IF(AT$1='Stars and Floors'!$G7,1, 0), 0)` |
| AU7 | `=IF('Stars and Floors'!$A7, IF(AU$1='Stars and Floors'!$C7,1, 0) + IF(AU$1='Stars and Floors'!$D7,1, 0) + IF(AU$1='Stars and Floors'!$E7,1, 0) + IF(AU$1='Stars and Floors'!$F7,1, 0) + IF(AU$1='Stars and Floors'!$G7,1, 0), 0)` |
| AV7 | `=IF('Stars and Floors'!$A7, IF(AV$1='Stars and Floors'!$C7,1, 0) + IF(AV$1='Stars and Floors'!$D7,1, 0) + IF(AV$1='Stars and Floors'!$E7,1, 0) + IF(AV$1='Stars and Floors'!$F7,1, 0) + IF(AV$1='Stars and Floors'!$G7,1, 0), 0)` |
| AW7 | `=IF('Stars and Floors'!$A7, IF(AW$1='Stars and Floors'!$C7,1, 0) + IF(AW$1='Stars and Floors'!$D7,1, 0) + IF(AW$1='Stars and Floors'!$E7,1, 0) + IF(AW$1='Stars and Floors'!$F7,1, 0) + IF(AW$1='Stars and Floors'!$G7,1, 0), 0)` |
| AX7 | `=IF('Stars and Floors'!$A7, IF(AX$1='Stars and Floors'!$C7,1, 0) + IF(AX$1='Stars and Floors'!$D7,1, 0) + IF(AX$1='Stars and Floors'!$E7,1, 0) + IF(AX$1='Stars and Floors'!$F7,1, 0) + IF(AX$1='Stars and Floors'!$G7,1, 0), 0)` |
| AY7 | `=IF('Stars and Floors'!$A7, IF(AY$1='Stars and Floors'!$C7,1, 0) + IF(AY$1='Stars and Floors'!$D7,1, 0) + IF(AY$1='Stars and Floors'!$E7,1, 0) + IF(AY$1='Stars and Floors'!$F7,1, 0) + IF(AY$1='Stars and Floors'!$G7,1, 0), 0)` |
| AZ7 | `=IF('Stars and Floors'!$A7, IF(AZ$1='Stars and Floors'!$C7,1, 0) + IF(AZ$1='Stars and Floors'!$D7,1, 0) + IF(AZ$1='Stars and Floors'!$E7,1, 0) + IF(AZ$1='Stars and Floors'!$F7,1, 0) + IF(AZ$1='Stars and Floors'!$G7,1, 0), 0)` |
| BA7 | `=IF('Stars and Floors'!$A7, IF(BA$1='Stars and Floors'!$C7,1, 0) + IF(BA$1='Stars and Floors'!$D7,1, 0) + IF(BA$1='Stars and Floors'!$E7,1, 0) + IF(BA$1='Stars and Floors'!$F7,1, 0) + IF(BA$1='Stars and Floors'!$G7,1, 0), 0)` |
| BB7 | `=IF('Stars and Floors'!$A7, IF(BB$1='Stars and Floors'!$C7,1, 0) + IF(BB$1='Stars and Floors'!$D7,1, 0) + IF(BB$1='Stars and Floors'!$E7,1, 0) + IF(BB$1='Stars and Floors'!$F7,1, 0) + IF(BB$1='Stars and Floors'!$G7,1, 0), 0)` |
| BC7 | `=IF('Stars and Floors'!$A7, IF(BC$1='Stars and Floors'!$C7,1, 0) + IF(BC$1='Stars and Floors'!$D7,1, 0) + IF(BC$1='Stars and Floors'!$E7,1, 0) + IF(BC$1='Stars and Floors'!$F7,1, 0) + IF(BC$1='Stars and Floors'!$G7,1, 0), 0)` |
| BD7 | `=IF('Stars and Floors'!$A7, IF(BD$1='Stars and Floors'!$C7,1, 0) + IF(BD$1='Stars and Floors'!$D7,1, 0) + IF(BD$1='Stars and Floors'!$E7,1, 0) + IF(BD$1='Stars and Floors'!$F7,1, 0) + IF(BD$1='Stars and Floors'!$G7,1, 0), 0)` |
| BE7 | `=IF('Stars and Floors'!$A7, IF(BE$1='Stars and Floors'!$C7,1, 0) + IF(BE$1='Stars and Floors'!$D7,1, 0) + IF(BE$1='Stars and Floors'!$E7,1, 0) + IF(BE$1='Stars and Floors'!$F7,1, 0) + IF(BE$1='Stars and Floors'!$G7,1, 0), 0)` |
| BF7 | `=IF('Stars and Floors'!$A7, IF(BF$1='Stars and Floors'!$C7,1, 0) + IF(BF$1='Stars and Floors'!$D7,1, 0) + IF(BF$1='Stars and Floors'!$E7,1, 0) + IF(BF$1='Stars and Floors'!$F7,1, 0) + IF(BF$1='Stars and Floors'!$G7,1, 0), 0)` |
| BG7 | `=IF('Stars and Floors'!$A7, IF(BG$1='Stars and Floors'!$C7,1, 0) + IF(BG$1='Stars and Floors'!$D7,1, 0) + IF(BG$1='Stars and Floors'!$E7,1, 0) + IF(BG$1='Stars and Floors'!$F7,1, 0) + IF(BG$1='Stars and Floors'!$G7,1, 0), 0)` |
| BH7 | `=IF('Stars and Floors'!$A7, IF(BH$1='Stars and Floors'!$C7,1, 0) + IF(BH$1='Stars and Floors'!$D7,1, 0) + IF(BH$1='Stars and Floors'!$E7,1, 0) + IF(BH$1='Stars and Floors'!$F7,1, 0) + IF(BH$1='Stars and Floors'!$G7,1, 0), 0)` |
| BI7 | `=IF('Stars and Floors'!$A7, IF(BI$1='Stars and Floors'!$C7,1, 0) + IF(BI$1='Stars and Floors'!$D7,1, 0) + IF(BI$1='Stars and Floors'!$E7,1, 0) + IF(BI$1='Stars and Floors'!$F7,1, 0) + IF(BI$1='Stars and Floors'!$G7,1, 0), 0)` |
| BJ7 | `=IF('Stars and Floors'!$A7, IF(BJ$1='Stars and Floors'!$C7,1, 0) + IF(BJ$1='Stars and Floors'!$D7,1, 0) + IF(BJ$1='Stars and Floors'!$E7,1, 0) + IF(BJ$1='Stars and Floors'!$F7,1, 0) + IF(BJ$1='Stars and Floors'!$G7,1, 0), 0)` |
| BK7 | `=IF('Stars and Floors'!$A7, IF(BK$1='Stars and Floors'!$C7,1, 0) + IF(BK$1='Stars and Floors'!$D7,1, 0) + IF(BK$1='Stars and Floors'!$E7,1, 0) + IF(BK$1='Stars and Floors'!$F7,1, 0) + IF(BK$1='Stars and Floors'!$G7,1, 0), 0)` |
| BL7 | `=IF('Stars and Floors'!$A7, IF(BL$1='Stars and Floors'!$C7,1, 0) + IF(BL$1='Stars and Floors'!$D7,1, 0) + IF(BL$1='Stars and Floors'!$E7,1, 0) + IF(BL$1='Stars and Floors'!$F7,1, 0) + IF(BL$1='Stars and Floors'!$G7,1, 0), 0)` |
| BM7 | `=IF('Stars and Floors'!$A7, IF(BM$1='Stars and Floors'!$C7,1, 0) + IF(BM$1='Stars and Floors'!$D7,1, 0) + IF(BM$1='Stars and Floors'!$E7,1, 0) + IF(BM$1='Stars and Floors'!$F7,1, 0) + IF(BM$1='Stars and Floors'!$G7,1, 0), 0)` |
| BN7 | `=IF('Stars and Floors'!$A7, IF(BN$1='Stars and Floors'!$C7,1, 0) + IF(BN$1='Stars and Floors'!$D7,1, 0) + IF(BN$1='Stars and Floors'!$E7,1, 0) + IF(BN$1='Stars and Floors'!$F7,1, 0) + IF(BN$1='Stars and Floors'!$G7,1, 0), 0)` |
| BO7 | `=IF('Stars and Floors'!$A7, IF(BO$1='Stars and Floors'!$C7,1, 0) + IF(BO$1='Stars and Floors'!$D7,1, 0) + IF(BO$1='Stars and Floors'!$E7,1, 0) + IF(BO$1='Stars and Floors'!$F7,1, 0) + IF(BO$1='Stars and Floors'!$G7,1, 0), 0)` |
| BP7 | `=IF('Stars and Floors'!$A7, IF(BP$1='Stars and Floors'!$C7,1, 0) + IF(BP$1='Stars and Floors'!$D7,1, 0) + IF(BP$1='Stars and Floors'!$E7,1, 0) + IF(BP$1='Stars and Floors'!$F7,1, 0) + IF(BP$1='Stars and Floors'!$G7,1, 0), 0)` |
| BQ7 | `=IF('Stars and Floors'!$A7, IF(BQ$1='Stars and Floors'!$C7,1, 0) + IF(BQ$1='Stars and Floors'!$D7,1, 0) + IF(BQ$1='Stars and Floors'!$E7,1, 0) + IF(BQ$1='Stars and Floors'!$F7,1, 0) + IF(BQ$1='Stars and Floors'!$G7,1, 0), 0)` |
| BR7 | `=IF('Stars and Floors'!$A7, IF(BR$1='Stars and Floors'!$C7,1, 0) + IF(BR$1='Stars and Floors'!$D7,1, 0) + IF(BR$1='Stars and Floors'!$E7,1, 0) + IF(BR$1='Stars and Floors'!$F7,1, 0) + IF(BR$1='Stars and Floors'!$G7,1, 0), 0)` |
| BS7 | `=IF('Stars and Floors'!$A7, IF(BS$1='Stars and Floors'!$C7,1, 0) + IF(BS$1='Stars and Floors'!$D7,1, 0) + IF(BS$1='Stars and Floors'!$E7,1, 0) + IF(BS$1='Stars and Floors'!$F7,1, 0) + IF(BS$1='Stars and Floors'!$G7,1, 0), 0)` |
| BT7 | `=IF('Stars and Floors'!$A7, IF(BT$1='Stars and Floors'!$C7,1, 0) + IF(BT$1='Stars and Floors'!$D7,1, 0) + IF(BT$1='Stars and Floors'!$E7,1, 0) + IF(BT$1='Stars and Floors'!$F7,1, 0) + IF(BT$1='Stars and Floors'!$G7,1, 0), 0)` |
| BU7 | `=IF('Stars and Floors'!$A7, IF(BU$1='Stars and Floors'!$C7,1, 0) + IF(BU$1='Stars and Floors'!$D7,1, 0) + IF(BU$1='Stars and Floors'!$E7,1, 0) + IF(BU$1='Stars and Floors'!$F7,1, 0) + IF(BU$1='Stars and Floors'!$G7,1, 0), 0)` |
| BV7 | `=IF('Stars and Floors'!$A7, IF(BV$1='Stars and Floors'!$C7,1, 0) + IF(BV$1='Stars and Floors'!$D7,1, 0) + IF(BV$1='Stars and Floors'!$E7,1, 0) + IF(BV$1='Stars and Floors'!$F7,1, 0) + IF(BV$1='Stars and Floors'!$G7,1, 0), 0)` |
| BW7 | `=IF('Stars and Floors'!$A7, IF(BW$1='Stars and Floors'!$C7,1, 0) + IF(BW$1='Stars and Floors'!$D7,1, 0) + IF(BW$1='Stars and Floors'!$E7,1, 0) + IF(BW$1='Stars and Floors'!$F7,1, 0) + IF(BW$1='Stars and Floors'!$G7,1, 0), 0)` |
| BX7 | `=IF('Stars and Floors'!$A7, IF(BX$1='Stars and Floors'!$C7,1, 0) + IF(BX$1='Stars and Floors'!$D7,1, 0) + IF(BX$1='Stars and Floors'!$E7,1, 0) + IF(BX$1='Stars and Floors'!$F7,1, 0) + IF(BX$1='Stars and Floors'!$G7,1, 0), 0)` |
| BY7 | `=IF('Stars and Floors'!$A7, IF(BY$1='Stars and Floors'!$C7,1, 0) + IF(BY$1='Stars and Floors'!$D7,1, 0) + IF(BY$1='Stars and Floors'!$E7,1, 0) + IF(BY$1='Stars and Floors'!$F7,1, 0) + IF(BY$1='Stars and Floors'!$G7,1, 0), 0)` |
| BZ7 | `=IF('Stars and Floors'!$A7, IF(BZ$1='Stars and Floors'!$C7,1, 0) + IF(BZ$1='Stars and Floors'!$D7,1, 0) + IF(BZ$1='Stars and Floors'!$E7,1, 0) + IF(BZ$1='Stars and Floors'!$F7,1, 0) + IF(BZ$1='Stars and Floors'!$G7,1, 0), 0)` |
| CA7 | `=IF('Stars and Floors'!$A7, IF(CA$1='Stars and Floors'!$C7,1, 0) + IF(CA$1='Stars and Floors'!$D7,1, 0) + IF(CA$1='Stars and Floors'!$E7,1, 0) + IF(CA$1='Stars and Floors'!$F7,1, 0) + IF(CA$1='Stars and Floors'!$G7,1, 0), 0)` |
| CB7 | `=IF('Stars and Floors'!$A7, IF(CB$1='Stars and Floors'!$C7,1, 0) + IF(CB$1='Stars and Floors'!$D7,1, 0) + IF(CB$1='Stars and Floors'!$E7,1, 0) + IF(CB$1='Stars and Floors'!$F7,1, 0) + IF(CB$1='Stars and Floors'!$G7,1, 0), 0)` |
| CC7 | `=IF('Stars and Floors'!$A7, IF(CC$1='Stars and Floors'!$C7,1, 0) + IF(CC$1='Stars and Floors'!$D7,1, 0) + IF(CC$1='Stars and Floors'!$E7,1, 0) + IF(CC$1='Stars and Floors'!$F7,1, 0) + IF(CC$1='Stars and Floors'!$G7,1, 0), 0)` |
| CD7 | `=IF('Stars and Floors'!$A7, IF(CD$1='Stars and Floors'!$C7,1, 0) + IF(CD$1='Stars and Floors'!$D7,1, 0) + IF(CD$1='Stars and Floors'!$E7,1, 0) + IF(CD$1='Stars and Floors'!$F7,1, 0) + IF(CD$1='Stars and Floors'!$G7,1, 0), 0)` |
| CE7 | `=IF('Stars and Floors'!$A7, IF(CE$1='Stars and Floors'!$C7,1, 0) + IF(CE$1='Stars and Floors'!$D7,1, 0) + IF(CE$1='Stars and Floors'!$E7,1, 0) + IF(CE$1='Stars and Floors'!$F7,1, 0) + IF(CE$1='Stars and Floors'!$G7,1, 0), 0)` |
| CF7 | `=IF('Stars and Floors'!$A7, IF(CF$1='Stars and Floors'!$C7,1, 0) + IF(CF$1='Stars and Floors'!$D7,1, 0) + IF(CF$1='Stars and Floors'!$E7,1, 0) + IF(CF$1='Stars and Floors'!$F7,1, 0) + IF(CF$1='Stars and Floors'!$G7,1, 0), 0)` |
| CG7 | `=IF('Stars and Floors'!$A7, IF(CG$1='Stars and Floors'!$C7,1, 0) + IF(CG$1='Stars and Floors'!$D7,1, 0) + IF(CG$1='Stars and Floors'!$E7,1, 0) + IF(CG$1='Stars and Floors'!$F7,1, 0) + IF(CG$1='Stars and Floors'!$G7,1, 0), 0)` |
| CH7 | `=IF('Stars and Floors'!$A7, IF(CH$1='Stars and Floors'!$C7,1, 0) + IF(CH$1='Stars and Floors'!$D7,1, 0) + IF(CH$1='Stars and Floors'!$E7,1, 0) + IF(CH$1='Stars and Floors'!$F7,1, 0) + IF(CH$1='Stars and Floors'!$G7,1, 0), 0)` |
| CI7 | `=IF('Stars and Floors'!$A7, IF(CI$1='Stars and Floors'!$C7,1, 0) + IF(CI$1='Stars and Floors'!$D7,1, 0) + IF(CI$1='Stars and Floors'!$E7,1, 0) + IF(CI$1='Stars and Floors'!$F7,1, 0) + IF(CI$1='Stars and Floors'!$G7,1, 0), 0)` |
| CJ7 | `=IF('Stars and Floors'!$A7, IF(CJ$1='Stars and Floors'!$C7,1, 0) + IF(CJ$1='Stars and Floors'!$D7,1, 0) + IF(CJ$1='Stars and Floors'!$E7,1, 0) + IF(CJ$1='Stars and Floors'!$F7,1, 0) + IF(CJ$1='Stars and Floors'!$G7,1, 0), 0)` |
| CK7 | `=IF('Stars and Floors'!$A7, IF(CK$1='Stars and Floors'!$C7,1, 0) + IF(CK$1='Stars and Floors'!$D7,1, 0) + IF(CK$1='Stars and Floors'!$E7,1, 0) + IF(CK$1='Stars and Floors'!$F7,1, 0) + IF(CK$1='Stars and Floors'!$G7,1, 0), 0)` |
| CL7 | `=IF('Stars and Floors'!$A7, IF(CL$1='Stars and Floors'!$C7,1, 0) + IF(CL$1='Stars and Floors'!$D7,1, 0) + IF(CL$1='Stars and Floors'!$E7,1, 0) + IF(CL$1='Stars and Floors'!$F7,1, 0) + IF(CL$1='Stars and Floors'!$G7,1, 0), 0)` |
| CM7 | `=IF('Stars and Floors'!$A7, IF(CM$1='Stars and Floors'!$C7,1, 0) + IF(CM$1='Stars and Floors'!$D7,1, 0) + IF(CM$1='Stars and Floors'!$E7,1, 0) + IF(CM$1='Stars and Floors'!$F7,1, 0) + IF(CM$1='Stars and Floors'!$G7,1, 0), 0)` |
| CN7 | `=IF('Stars and Floors'!$A7, IF(CN$1='Stars and Floors'!$C7,1, 0) + IF(CN$1='Stars and Floors'!$D7,1, 0) + IF(CN$1='Stars and Floors'!$E7,1, 0) + IF(CN$1='Stars and Floors'!$F7,1, 0) + IF(CN$1='Stars and Floors'!$G7,1, 0), 0)` |
| CO7 | `=IF('Stars and Floors'!$A7, IF(CO$1='Stars and Floors'!$C7,1, 0) + IF(CO$1='Stars and Floors'!$D7,1, 0) + IF(CO$1='Stars and Floors'!$E7,1, 0) + IF(CO$1='Stars and Floors'!$F7,1, 0) + IF(CO$1='Stars and Floors'!$G7,1, 0), 0)` |
| CP7 | `=IF('Stars and Floors'!$A7, IF(CP$1='Stars and Floors'!$C7,1, 0) + IF(CP$1='Stars and Floors'!$D7,1, 0) + IF(CP$1='Stars and Floors'!$E7,1, 0) + IF(CP$1='Stars and Floors'!$F7,1, 0) + IF(CP$1='Stars and Floors'!$G7,1, 0), 0)` |
| CQ7 | `=IF('Stars and Floors'!$A7, IF(CQ$1='Stars and Floors'!$C7,1, 0) + IF(CQ$1='Stars and Floors'!$D7,1, 0) + IF(CQ$1='Stars and Floors'!$E7,1, 0) + IF(CQ$1='Stars and Floors'!$F7,1, 0) + IF(CQ$1='Stars and Floors'!$G7,1, 0), 0)` |
| CR7 | `=IF('Stars and Floors'!$A7, IF(CR$1='Stars and Floors'!$C7,1, 0) + IF(CR$1='Stars and Floors'!$D7,1, 0) + IF(CR$1='Stars and Floors'!$E7,1, 0) + IF(CR$1='Stars and Floors'!$F7,1, 0) + IF(CR$1='Stars and Floors'!$G7,1, 0), 0)` |
| CS7 | `=IF('Stars and Floors'!$A7, IF(CS$1='Stars and Floors'!$C7,1, 0) + IF(CS$1='Stars and Floors'!$D7,1, 0) + IF(CS$1='Stars and Floors'!$E7,1, 0) + IF(CS$1='Stars and Floors'!$F7,1, 0) + IF(CS$1='Stars and Floors'!$G7,1, 0), 0)` |
| CT7 | `=IF('Stars and Floors'!$A7, IF(CT$1='Stars and Floors'!$C7,1, 0) + IF(CT$1='Stars and Floors'!$D7,1, 0) + IF(CT$1='Stars and Floors'!$E7,1, 0) + IF(CT$1='Stars and Floors'!$F7,1, 0) + IF(CT$1='Stars and Floors'!$G7,1, 0), 0)` |
| CU7 | `=IF('Stars and Floors'!$A7, IF(CU$1='Stars and Floors'!$C7,1, 0) + IF(CU$1='Stars and Floors'!$D7,1, 0) + IF(CU$1='Stars and Floors'!$E7,1, 0) + IF(CU$1='Stars and Floors'!$F7,1, 0) + IF(CU$1='Stars and Floors'!$G7,1, 0), 0)` |
| CV7 | `=IF('Stars and Floors'!$A7, IF(CV$1='Stars and Floors'!$C7,1, 0) + IF(CV$1='Stars and Floors'!$D7,1, 0) + IF(CV$1='Stars and Floors'!$E7,1, 0) + IF(CV$1='Stars and Floors'!$F7,1, 0) + IF(CV$1='Stars and Floors'!$G7,1, 0), 0)` |
| CW7 | `=IF('Stars and Floors'!$A7, IF(CW$1='Stars and Floors'!$C7,1, 0) + IF(CW$1='Stars and Floors'!$D7,1, 0) + IF(CW$1='Stars and Floors'!$E7,1, 0) + IF(CW$1='Stars and Floors'!$F7,1, 0) + IF(CW$1='Stars and Floors'!$G7,1, 0), 0)` |
| CX7 | `=IF('Stars and Floors'!$A7, IF(CX$1='Stars and Floors'!$C7,1, 0) + IF(CX$1='Stars and Floors'!$D7,1, 0) + IF(CX$1='Stars and Floors'!$E7,1, 0) + IF(CX$1='Stars and Floors'!$F7,1, 0) + IF(CX$1='Stars and Floors'!$G7,1, 0), 0)` |
| CY7 | `=IF('Stars and Floors'!$A7, IF(CY$1='Stars and Floors'!$C7,1, 0) + IF(CY$1='Stars and Floors'!$D7,1, 0) + IF(CY$1='Stars and Floors'!$E7,1, 0) + IF(CY$1='Stars and Floors'!$F7,1, 0) + IF(CY$1='Stars and Floors'!$G7,1, 0), 0)` |
| CZ7 | `=IF('Stars and Floors'!$A7, IF(CZ$1='Stars and Floors'!$C7,1, 0) + IF(CZ$1='Stars and Floors'!$D7,1, 0) + IF(CZ$1='Stars and Floors'!$E7,1, 0) + IF(CZ$1='Stars and Floors'!$F7,1, 0) + IF(CZ$1='Stars and Floors'!$G7,1, 0), 0)` |
| DA7 | `=IF('Stars and Floors'!$A7, IF(DA$1='Stars and Floors'!$C7,1, 0) + IF(DA$1='Stars and Floors'!$D7,1, 0) + IF(DA$1='Stars and Floors'!$E7,1, 0) + IF(DA$1='Stars and Floors'!$F7,1, 0) + IF(DA$1='Stars and Floors'!$G7,1, 0), 0)` |
| DB7 | `=IF('Stars and Floors'!$A7, IF(DB$1='Stars and Floors'!$C7,1, 0) + IF(DB$1='Stars and Floors'!$D7,1, 0) + IF(DB$1='Stars and Floors'!$E7,1, 0) + IF(DB$1='Stars and Floors'!$F7,1, 0) + IF(DB$1='Stars and Floors'!$G7,1, 0), 0)` |
| DC7 | `=IF('Stars and Floors'!$A7, IF(DC$1='Stars and Floors'!$C7,1, 0) + IF(DC$1='Stars and Floors'!$D7,1, 0) + IF(DC$1='Stars and Floors'!$E7,1, 0) + IF(DC$1='Stars and Floors'!$F7,1, 0) + IF(DC$1='Stars and Floors'!$G7,1, 0), 0)` |
| DD7 | `=IF('Stars and Floors'!$A7, IF(DD$1='Stars and Floors'!$C7,1, 0) + IF(DD$1='Stars and Floors'!$D7,1, 0) + IF(DD$1='Stars and Floors'!$E7,1, 0) + IF(DD$1='Stars and Floors'!$F7,1, 0) + IF(DD$1='Stars and Floors'!$G7,1, 0), 0)` |
| DE7 | `=IF('Stars and Floors'!$A7, IF(DE$1='Stars and Floors'!$C7,1, 0) + IF(DE$1='Stars and Floors'!$D7,1, 0) + IF(DE$1='Stars and Floors'!$E7,1, 0) + IF(DE$1='Stars and Floors'!$F7,1, 0) + IF(DE$1='Stars and Floors'!$G7,1, 0), 0)` |
| DF7 | `=IF('Stars and Floors'!$A7, IF(DF$1='Stars and Floors'!$C7,1, 0) + IF(DF$1='Stars and Floors'!$D7,1, 0) + IF(DF$1='Stars and Floors'!$E7,1, 0) + IF(DF$1='Stars and Floors'!$F7,1, 0) + IF(DF$1='Stars and Floors'!$G7,1, 0), 0)` |
| DG7 | `=IF('Stars and Floors'!$A7, IF(DG$1='Stars and Floors'!$C7,1, 0) + IF(DG$1='Stars and Floors'!$D7,1, 0) + IF(DG$1='Stars and Floors'!$E7,1, 0) + IF(DG$1='Stars and Floors'!$F7,1, 0) + IF(DG$1='Stars and Floors'!$G7,1, 0), 0)` |
| DH7 | `=IF('Stars and Floors'!$A7, IF(DH$1='Stars and Floors'!$C7,1, 0) + IF(DH$1='Stars and Floors'!$D7,1, 0) + IF(DH$1='Stars and Floors'!$E7,1, 0) + IF(DH$1='Stars and Floors'!$F7,1, 0) + IF(DH$1='Stars and Floors'!$G7,1, 0), 0)` |
| DI7 | `=IF('Stars and Floors'!$A7, IF(DI$1='Stars and Floors'!$C7,1, 0) + IF(DI$1='Stars and Floors'!$D7,1, 0) + IF(DI$1='Stars and Floors'!$E7,1, 0) + IF(DI$1='Stars and Floors'!$F7,1, 0) + IF(DI$1='Stars and Floors'!$G7,1, 0), 0)` |
| DJ7 | `=IF('Stars and Floors'!$A7, IF(DJ$1='Stars and Floors'!$C7,1, 0) + IF(DJ$1='Stars and Floors'!$D7,1, 0) + IF(DJ$1='Stars and Floors'!$E7,1, 0) + IF(DJ$1='Stars and Floors'!$F7,1, 0) + IF(DJ$1='Stars and Floors'!$G7,1, 0), 0)` |
| DK7 | `=IF('Stars and Floors'!$A7, IF(DK$1='Stars and Floors'!$C7,1, 0) + IF(DK$1='Stars and Floors'!$D7,1, 0) + IF(DK$1='Stars and Floors'!$E7,1, 0) + IF(DK$1='Stars and Floors'!$F7,1, 0) + IF(DK$1='Stars and Floors'!$G7,1, 0), 0)` |
| DL7 | `=IF('Stars and Floors'!$A7, IF(DL$1='Stars and Floors'!$C7,1, 0) + IF(DL$1='Stars and Floors'!$D7,1, 0) + IF(DL$1='Stars and Floors'!$E7,1, 0) + IF(DL$1='Stars and Floors'!$F7,1, 0) + IF(DL$1='Stars and Floors'!$G7,1, 0), 0)` |
| DM7 | `=IF('Stars and Floors'!$A7, IF(DM$1='Stars and Floors'!$C7,1, 0) + IF(DM$1='Stars and Floors'!$D7,1, 0) + IF(DM$1='Stars and Floors'!$E7,1, 0) + IF(DM$1='Stars and Floors'!$F7,1, 0) + IF(DM$1='Stars and Floors'!$G7,1, 0), 0)` |
| DN7 | `=IF('Stars and Floors'!$A7, IF(DN$1='Stars and Floors'!$C7,1, 0) + IF(DN$1='Stars and Floors'!$D7,1, 0) + IF(DN$1='Stars and Floors'!$E7,1, 0) + IF(DN$1='Stars and Floors'!$F7,1, 0) + IF(DN$1='Stars and Floors'!$G7,1, 0), 0)` |
| DO7 | `=IF('Stars and Floors'!$A7, IF(DO$1='Stars and Floors'!$C7,1, 0) + IF(DO$1='Stars and Floors'!$D7,1, 0) + IF(DO$1='Stars and Floors'!$E7,1, 0) + IF(DO$1='Stars and Floors'!$F7,1, 0) + IF(DO$1='Stars and Floors'!$G7,1, 0), 0)` |
| DP7 | `=IF('Stars and Floors'!$A7, IF(DP$1='Stars and Floors'!$C7,1, 0) + IF(DP$1='Stars and Floors'!$D7,1, 0) + IF(DP$1='Stars and Floors'!$E7,1, 0) + IF(DP$1='Stars and Floors'!$F7,1, 0) + IF(DP$1='Stars and Floors'!$G7,1, 0), 0)` |
| DQ7 | `=IF('Stars and Floors'!$A7, IF(DQ$1='Stars and Floors'!$C7,1, 0) + IF(DQ$1='Stars and Floors'!$D7,1, 0) + IF(DQ$1='Stars and Floors'!$E7,1, 0) + IF(DQ$1='Stars and Floors'!$F7,1, 0) + IF(DQ$1='Stars and Floors'!$G7,1, 0), 0)` |
| B8 | `=IF('Stars and Floors'!$A8, IF(B$1='Stars and Floors'!$C8,1, 0) + IF(B$1='Stars and Floors'!$D8,1, 0) + IF(B$1='Stars and Floors'!$E8,1, 0) + IF(B$1='Stars and Floors'!$F8,1, 0) + IF(B$1='Stars and Floors'!$G8,1, 0), 0)` |
| C8 | `=IF('Stars and Floors'!$A8, IF(C$1='Stars and Floors'!$C8,1, 0) + IF(C$1='Stars and Floors'!$D8,1, 0) + IF(C$1='Stars and Floors'!$E8,1, 0) + IF(C$1='Stars and Floors'!$F8,1, 0) + IF(C$1='Stars and Floors'!$G8,1, 0), 0)` |
| D8 | `=IF('Stars and Floors'!$A8, IF(D$1='Stars and Floors'!$C8,1, 0) + IF(D$1='Stars and Floors'!$D8,1, 0) + IF(D$1='Stars and Floors'!$E8,1, 0) + IF(D$1='Stars and Floors'!$F8,1, 0) + IF(D$1='Stars and Floors'!$G8,1, 0), 0)` |
| E8 | `=IF('Stars and Floors'!$A8, IF(E$1='Stars and Floors'!$C8,1, 0) + IF(E$1='Stars and Floors'!$D8,1, 0) + IF(E$1='Stars and Floors'!$E8,1, 0) + IF(E$1='Stars and Floors'!$F8,1, 0) + IF(E$1='Stars and Floors'!$G8,1, 0), 0)` |
| F8 | `=IF('Stars and Floors'!$A8, IF(F$1='Stars and Floors'!$C8,1, 0) + IF(F$1='Stars and Floors'!$D8,1, 0) + IF(F$1='Stars and Floors'!$E8,1, 0) + IF(F$1='Stars and Floors'!$F8,1, 0) + IF(F$1='Stars and Floors'!$G8,1, 0), 0)` |
| G8 | `=IF('Stars and Floors'!$A8, IF(G$1='Stars and Floors'!$C8,1, 0) + IF(G$1='Stars and Floors'!$D8,1, 0) + IF(G$1='Stars and Floors'!$E8,1, 0) + IF(G$1='Stars and Floors'!$F8,1, 0) + IF(G$1='Stars and Floors'!$G8,1, 0), 0)` |
| H8 | `=IF('Stars and Floors'!$A8, IF(H$1='Stars and Floors'!$C8,1, 0) + IF(H$1='Stars and Floors'!$D8,1, 0) + IF(H$1='Stars and Floors'!$E8,1, 0) + IF(H$1='Stars and Floors'!$F8,1, 0) + IF(H$1='Stars and Floors'!$G8,1, 0), 0)` |
| I8 | `=IF('Stars and Floors'!$A8, IF(I$1='Stars and Floors'!$C8,1, 0) + IF(I$1='Stars and Floors'!$D8,1, 0) + IF(I$1='Stars and Floors'!$E8,1, 0) + IF(I$1='Stars and Floors'!$F8,1, 0) + IF(I$1='Stars and Floors'!$G8,1, 0), 0)` |
| J8 | `=IF('Stars and Floors'!$A8, IF(J$1='Stars and Floors'!$C8,1, 0) + IF(J$1='Stars and Floors'!$D8,1, 0) + IF(J$1='Stars and Floors'!$E8,1, 0) + IF(J$1='Stars and Floors'!$F8,1, 0) + IF(J$1='Stars and Floors'!$G8,1, 0), 0)` |
| K8 | `=IF('Stars and Floors'!$A8, IF(K$1='Stars and Floors'!$C8,1, 0) + IF(K$1='Stars and Floors'!$D8,1, 0) + IF(K$1='Stars and Floors'!$E8,1, 0) + IF(K$1='Stars and Floors'!$F8,1, 0) + IF(K$1='Stars and Floors'!$G8,1, 0), 0)` |
| L8 | `=IF('Stars and Floors'!$A8, IF(L$1='Stars and Floors'!$C8,1, 0) + IF(L$1='Stars and Floors'!$D8,1, 0) + IF(L$1='Stars and Floors'!$E8,1, 0) + IF(L$1='Stars and Floors'!$F8,1, 0) + IF(L$1='Stars and Floors'!$G8,1, 0), 0)` |
| M8 | `=IF('Stars and Floors'!$A8, IF(M$1='Stars and Floors'!$C8,1, 0) + IF(M$1='Stars and Floors'!$D8,1, 0) + IF(M$1='Stars and Floors'!$E8,1, 0) + IF(M$1='Stars and Floors'!$F8,1, 0) + IF(M$1='Stars and Floors'!$G8,1, 0), 0)` |
| N8 | `=IF('Stars and Floors'!$A8, IF(N$1='Stars and Floors'!$C8,1, 0) + IF(N$1='Stars and Floors'!$D8,1, 0) + IF(N$1='Stars and Floors'!$E8,1, 0) + IF(N$1='Stars and Floors'!$F8,1, 0) + IF(N$1='Stars and Floors'!$G8,1, 0), 0)` |
| O8 | `=IF('Stars and Floors'!$A8, IF(O$1='Stars and Floors'!$C8,1, 0) + IF(O$1='Stars and Floors'!$D8,1, 0) + IF(O$1='Stars and Floors'!$E8,1, 0) + IF(O$1='Stars and Floors'!$F8,1, 0) + IF(O$1='Stars and Floors'!$G8,1, 0), 0)` |
| P8 | `=IF('Stars and Floors'!$A8, IF(P$1='Stars and Floors'!$C8,1, 0) + IF(P$1='Stars and Floors'!$D8,1, 0) + IF(P$1='Stars and Floors'!$E8,1, 0) + IF(P$1='Stars and Floors'!$F8,1, 0) + IF(P$1='Stars and Floors'!$G8,1, 0), 0)` |
| Q8 | `=IF('Stars and Floors'!$A8, IF(Q$1='Stars and Floors'!$C8,1, 0) + IF(Q$1='Stars and Floors'!$D8,1, 0) + IF(Q$1='Stars and Floors'!$E8,1, 0) + IF(Q$1='Stars and Floors'!$F8,1, 0) + IF(Q$1='Stars and Floors'!$G8,1, 0), 0)` |
| R8 | `=IF('Stars and Floors'!$A8, IF(R$1='Stars and Floors'!$C8,1, 0) + IF(R$1='Stars and Floors'!$D8,1, 0) + IF(R$1='Stars and Floors'!$E8,1, 0) + IF(R$1='Stars and Floors'!$F8,1, 0) + IF(R$1='Stars and Floors'!$G8,1, 0), 0)` |
| S8 | `=IF('Stars and Floors'!$A8, IF(S$1='Stars and Floors'!$C8,1, 0) + IF(S$1='Stars and Floors'!$D8,1, 0) + IF(S$1='Stars and Floors'!$E8,1, 0) + IF(S$1='Stars and Floors'!$F8,1, 0) + IF(S$1='Stars and Floors'!$G8,1, 0), 0)` |
| T8 | `=IF('Stars and Floors'!$A8, IF(T$1='Stars and Floors'!$C8,1, 0) + IF(T$1='Stars and Floors'!$D8,1, 0) + IF(T$1='Stars and Floors'!$E8,1, 0) + IF(T$1='Stars and Floors'!$F8,1, 0) + IF(T$1='Stars and Floors'!$G8,1, 0), 0)` |
| U8 | `=IF('Stars and Floors'!$A8, IF(U$1='Stars and Floors'!$C8,1, 0) + IF(U$1='Stars and Floors'!$D8,1, 0) + IF(U$1='Stars and Floors'!$E8,1, 0) + IF(U$1='Stars and Floors'!$F8,1, 0) + IF(U$1='Stars and Floors'!$G8,1, 0), 0)` |
| V8 | `=IF('Stars and Floors'!$A8, IF(V$1='Stars and Floors'!$C8,1, 0) + IF(V$1='Stars and Floors'!$D8,1, 0) + IF(V$1='Stars and Floors'!$E8,1, 0) + IF(V$1='Stars and Floors'!$F8,1, 0) + IF(V$1='Stars and Floors'!$G8,1, 0), 0)` |
| W8 | `=IF('Stars and Floors'!$A8, IF(W$1='Stars and Floors'!$C8,1, 0) + IF(W$1='Stars and Floors'!$D8,1, 0) + IF(W$1='Stars and Floors'!$E8,1, 0) + IF(W$1='Stars and Floors'!$F8,1, 0) + IF(W$1='Stars and Floors'!$G8,1, 0), 0)` |
| X8 | `=IF('Stars and Floors'!$A8, IF(X$1='Stars and Floors'!$C8,1, 0) + IF(X$1='Stars and Floors'!$D8,1, 0) + IF(X$1='Stars and Floors'!$E8,1, 0) + IF(X$1='Stars and Floors'!$F8,1, 0) + IF(X$1='Stars and Floors'!$G8,1, 0), 0)` |
| Y8 | `=IF('Stars and Floors'!$A8, IF(Y$1='Stars and Floors'!$C8,1, 0) + IF(Y$1='Stars and Floors'!$D8,1, 0) + IF(Y$1='Stars and Floors'!$E8,1, 0) + IF(Y$1='Stars and Floors'!$F8,1, 0) + IF(Y$1='Stars and Floors'!$G8,1, 0), 0)` |
| Z8 | `=IF('Stars and Floors'!$A8, IF(Z$1='Stars and Floors'!$C8,1, 0) + IF(Z$1='Stars and Floors'!$D8,1, 0) + IF(Z$1='Stars and Floors'!$E8,1, 0) + IF(Z$1='Stars and Floors'!$F8,1, 0) + IF(Z$1='Stars and Floors'!$G8,1, 0), 0)` |
| AA8 | `=IF('Stars and Floors'!$A8, IF(AA$1='Stars and Floors'!$C8,1, 0) + IF(AA$1='Stars and Floors'!$D8,1, 0) + IF(AA$1='Stars and Floors'!$E8,1, 0) + IF(AA$1='Stars and Floors'!$F8,1, 0) + IF(AA$1='Stars and Floors'!$G8,1, 0), 0)` |
| AB8 | `=IF('Stars and Floors'!$A8, IF(AB$1='Stars and Floors'!$C8,1, 0) + IF(AB$1='Stars and Floors'!$D8,1, 0) + IF(AB$1='Stars and Floors'!$E8,1, 0) + IF(AB$1='Stars and Floors'!$F8,1, 0) + IF(AB$1='Stars and Floors'!$G8,1, 0), 0)` |
| AC8 | `=IF('Stars and Floors'!$A8, IF(AC$1='Stars and Floors'!$C8,1, 0) + IF(AC$1='Stars and Floors'!$D8,1, 0) + IF(AC$1='Stars and Floors'!$E8,1, 0) + IF(AC$1='Stars and Floors'!$F8,1, 0) + IF(AC$1='Stars and Floors'!$G8,1, 0), 0)` |
| AD8 | `=IF('Stars and Floors'!$A8, IF(AD$1='Stars and Floors'!$C8,1, 0) + IF(AD$1='Stars and Floors'!$D8,1, 0) + IF(AD$1='Stars and Floors'!$E8,1, 0) + IF(AD$1='Stars and Floors'!$F8,1, 0) + IF(AD$1='Stars and Floors'!$G8,1, 0), 0)` |
| AE8 | `=IF('Stars and Floors'!$A8, IF(AE$1='Stars and Floors'!$C8,1, 0) + IF(AE$1='Stars and Floors'!$D8,1, 0) + IF(AE$1='Stars and Floors'!$E8,1, 0) + IF(AE$1='Stars and Floors'!$F8,1, 0) + IF(AE$1='Stars and Floors'!$G8,1, 0), 0)` |
| AF8 | `=IF('Stars and Floors'!$A8, IF(AF$1='Stars and Floors'!$C8,1, 0) + IF(AF$1='Stars and Floors'!$D8,1, 0) + IF(AF$1='Stars and Floors'!$E8,1, 0) + IF(AF$1='Stars and Floors'!$F8,1, 0) + IF(AF$1='Stars and Floors'!$G8,1, 0), 0)` |
| AG8 | `=IF('Stars and Floors'!$A8, IF(AG$1='Stars and Floors'!$C8,1, 0) + IF(AG$1='Stars and Floors'!$D8,1, 0) + IF(AG$1='Stars and Floors'!$E8,1, 0) + IF(AG$1='Stars and Floors'!$F8,1, 0) + IF(AG$1='Stars and Floors'!$G8,1, 0), 0)` |
| AH8 | `=IF('Stars and Floors'!$A8, IF(AH$1='Stars and Floors'!$C8,1, 0) + IF(AH$1='Stars and Floors'!$D8,1, 0) + IF(AH$1='Stars and Floors'!$E8,1, 0) + IF(AH$1='Stars and Floors'!$F8,1, 0) + IF(AH$1='Stars and Floors'!$G8,1, 0), 0)` |
| AI8 | `=IF('Stars and Floors'!$A8, IF(AI$1='Stars and Floors'!$C8,1, 0) + IF(AI$1='Stars and Floors'!$D8,1, 0) + IF(AI$1='Stars and Floors'!$E8,1, 0) + IF(AI$1='Stars and Floors'!$F8,1, 0) + IF(AI$1='Stars and Floors'!$G8,1, 0), 0)` |
| AJ8 | `=IF('Stars and Floors'!$A8, IF(AJ$1='Stars and Floors'!$C8,1, 0) + IF(AJ$1='Stars and Floors'!$D8,1, 0) + IF(AJ$1='Stars and Floors'!$E8,1, 0) + IF(AJ$1='Stars and Floors'!$F8,1, 0) + IF(AJ$1='Stars and Floors'!$G8,1, 0), 0)` |
| AK8 | `=IF('Stars and Floors'!$A8, IF(AK$1='Stars and Floors'!$C8,1, 0) + IF(AK$1='Stars and Floors'!$D8,1, 0) + IF(AK$1='Stars and Floors'!$E8,1, 0) + IF(AK$1='Stars and Floors'!$F8,1, 0) + IF(AK$1='Stars and Floors'!$G8,1, 0), 0)` |
| AL8 | `=IF('Stars and Floors'!$A8, IF(AL$1='Stars and Floors'!$C8,1, 0) + IF(AL$1='Stars and Floors'!$D8,1, 0) + IF(AL$1='Stars and Floors'!$E8,1, 0) + IF(AL$1='Stars and Floors'!$F8,1, 0) + IF(AL$1='Stars and Floors'!$G8,1, 0), 0)` |
| AM8 | `=IF('Stars and Floors'!$A8, IF(AM$1='Stars and Floors'!$C8,1, 0) + IF(AM$1='Stars and Floors'!$D8,1, 0) + IF(AM$1='Stars and Floors'!$E8,1, 0) + IF(AM$1='Stars and Floors'!$F8,1, 0) + IF(AM$1='Stars and Floors'!$G8,1, 0), 0)` |
| AN8 | `=IF('Stars and Floors'!$A8, IF(AN$1='Stars and Floors'!$C8,1, 0) + IF(AN$1='Stars and Floors'!$D8,1, 0) + IF(AN$1='Stars and Floors'!$E8,1, 0) + IF(AN$1='Stars and Floors'!$F8,1, 0) + IF(AN$1='Stars and Floors'!$G8,1, 0), 0)` |
| AO8 | `=IF('Stars and Floors'!$A8, IF(AO$1='Stars and Floors'!$C8,1, 0) + IF(AO$1='Stars and Floors'!$D8,1, 0) + IF(AO$1='Stars and Floors'!$E8,1, 0) + IF(AO$1='Stars and Floors'!$F8,1, 0) + IF(AO$1='Stars and Floors'!$G8,1, 0), 0)` |
| AP8 | `=IF('Stars and Floors'!$A8, IF(AP$1='Stars and Floors'!$C8,1, 0) + IF(AP$1='Stars and Floors'!$D8,1, 0) + IF(AP$1='Stars and Floors'!$E8,1, 0) + IF(AP$1='Stars and Floors'!$F8,1, 0) + IF(AP$1='Stars and Floors'!$G8,1, 0), 0)` |
| AQ8 | `=IF('Stars and Floors'!$A8, IF(AQ$1='Stars and Floors'!$C8,1, 0) + IF(AQ$1='Stars and Floors'!$D8,1, 0) + IF(AQ$1='Stars and Floors'!$E8,1, 0) + IF(AQ$1='Stars and Floors'!$F8,1, 0) + IF(AQ$1='Stars and Floors'!$G8,1, 0), 0)` |
| AR8 | `=IF('Stars and Floors'!$A8, IF(AR$1='Stars and Floors'!$C8,1, 0) + IF(AR$1='Stars and Floors'!$D8,1, 0) + IF(AR$1='Stars and Floors'!$E8,1, 0) + IF(AR$1='Stars and Floors'!$F8,1, 0) + IF(AR$1='Stars and Floors'!$G8,1, 0), 0)` |
| AS8 | `=IF('Stars and Floors'!$A8, IF(AS$1='Stars and Floors'!$C8,1, 0) + IF(AS$1='Stars and Floors'!$D8,1, 0) + IF(AS$1='Stars and Floors'!$E8,1, 0) + IF(AS$1='Stars and Floors'!$F8,1, 0) + IF(AS$1='Stars and Floors'!$G8,1, 0), 0)` |
| AT8 | `=IF('Stars and Floors'!$A8, IF(AT$1='Stars and Floors'!$C8,1, 0) + IF(AT$1='Stars and Floors'!$D8,1, 0) + IF(AT$1='Stars and Floors'!$E8,1, 0) + IF(AT$1='Stars and Floors'!$F8,1, 0) + IF(AT$1='Stars and Floors'!$G8,1, 0), 0)` |
| AU8 | `=IF('Stars and Floors'!$A8, IF(AU$1='Stars and Floors'!$C8,1, 0) + IF(AU$1='Stars and Floors'!$D8,1, 0) + IF(AU$1='Stars and Floors'!$E8,1, 0) + IF(AU$1='Stars and Floors'!$F8,1, 0) + IF(AU$1='Stars and Floors'!$G8,1, 0), 0)` |
| AV8 | `=IF('Stars and Floors'!$A8, IF(AV$1='Stars and Floors'!$C8,1, 0) + IF(AV$1='Stars and Floors'!$D8,1, 0) + IF(AV$1='Stars and Floors'!$E8,1, 0) + IF(AV$1='Stars and Floors'!$F8,1, 0) + IF(AV$1='Stars and Floors'!$G8,1, 0), 0)` |
| AW8 | `=IF('Stars and Floors'!$A8, IF(AW$1='Stars and Floors'!$C8,1, 0) + IF(AW$1='Stars and Floors'!$D8,1, 0) + IF(AW$1='Stars and Floors'!$E8,1, 0) + IF(AW$1='Stars and Floors'!$F8,1, 0) + IF(AW$1='Stars and Floors'!$G8,1, 0), 0)` |
| AX8 | `=IF('Stars and Floors'!$A8, IF(AX$1='Stars and Floors'!$C8,1, 0) + IF(AX$1='Stars and Floors'!$D8,1, 0) + IF(AX$1='Stars and Floors'!$E8,1, 0) + IF(AX$1='Stars and Floors'!$F8,1, 0) + IF(AX$1='Stars and Floors'!$G8,1, 0), 0)` |
| AY8 | `=IF('Stars and Floors'!$A8, IF(AY$1='Stars and Floors'!$C8,1, 0) + IF(AY$1='Stars and Floors'!$D8,1, 0) + IF(AY$1='Stars and Floors'!$E8,1, 0) + IF(AY$1='Stars and Floors'!$F8,1, 0) + IF(AY$1='Stars and Floors'!$G8,1, 0), 0)` |
| AZ8 | `=IF('Stars and Floors'!$A8, IF(AZ$1='Stars and Floors'!$C8,1, 0) + IF(AZ$1='Stars and Floors'!$D8,1, 0) + IF(AZ$1='Stars and Floors'!$E8,1, 0) + IF(AZ$1='Stars and Floors'!$F8,1, 0) + IF(AZ$1='Stars and Floors'!$G8,1, 0), 0)` |
| BA8 | `=IF('Stars and Floors'!$A8, IF(BA$1='Stars and Floors'!$C8,1, 0) + IF(BA$1='Stars and Floors'!$D8,1, 0) + IF(BA$1='Stars and Floors'!$E8,1, 0) + IF(BA$1='Stars and Floors'!$F8,1, 0) + IF(BA$1='Stars and Floors'!$G8,1, 0), 0)` |
| BB8 | `=IF('Stars and Floors'!$A8, IF(BB$1='Stars and Floors'!$C8,1, 0) + IF(BB$1='Stars and Floors'!$D8,1, 0) + IF(BB$1='Stars and Floors'!$E8,1, 0) + IF(BB$1='Stars and Floors'!$F8,1, 0) + IF(BB$1='Stars and Floors'!$G8,1, 0), 0)` |
| BC8 | `=IF('Stars and Floors'!$A8, IF(BC$1='Stars and Floors'!$C8,1, 0) + IF(BC$1='Stars and Floors'!$D8,1, 0) + IF(BC$1='Stars and Floors'!$E8,1, 0) + IF(BC$1='Stars and Floors'!$F8,1, 0) + IF(BC$1='Stars and Floors'!$G8,1, 0), 0)` |
| BD8 | `=IF('Stars and Floors'!$A8, IF(BD$1='Stars and Floors'!$C8,1, 0) + IF(BD$1='Stars and Floors'!$D8,1, 0) + IF(BD$1='Stars and Floors'!$E8,1, 0) + IF(BD$1='Stars and Floors'!$F8,1, 0) + IF(BD$1='Stars and Floors'!$G8,1, 0), 0)` |
| BE8 | `=IF('Stars and Floors'!$A8, IF(BE$1='Stars and Floors'!$C8,1, 0) + IF(BE$1='Stars and Floors'!$D8,1, 0) + IF(BE$1='Stars and Floors'!$E8,1, 0) + IF(BE$1='Stars and Floors'!$F8,1, 0) + IF(BE$1='Stars and Floors'!$G8,1, 0), 0)` |
| BF8 | `=IF('Stars and Floors'!$A8, IF(BF$1='Stars and Floors'!$C8,1, 0) + IF(BF$1='Stars and Floors'!$D8,1, 0) + IF(BF$1='Stars and Floors'!$E8,1, 0) + IF(BF$1='Stars and Floors'!$F8,1, 0) + IF(BF$1='Stars and Floors'!$G8,1, 0), 0)` |
| BG8 | `=IF('Stars and Floors'!$A8, IF(BG$1='Stars and Floors'!$C8,1, 0) + IF(BG$1='Stars and Floors'!$D8,1, 0) + IF(BG$1='Stars and Floors'!$E8,1, 0) + IF(BG$1='Stars and Floors'!$F8,1, 0) + IF(BG$1='Stars and Floors'!$G8,1, 0), 0)` |
| BH8 | `=IF('Stars and Floors'!$A8, IF(BH$1='Stars and Floors'!$C8,1, 0) + IF(BH$1='Stars and Floors'!$D8,1, 0) + IF(BH$1='Stars and Floors'!$E8,1, 0) + IF(BH$1='Stars and Floors'!$F8,1, 0) + IF(BH$1='Stars and Floors'!$G8,1, 0), 0)` |
| BI8 | `=IF('Stars and Floors'!$A8, IF(BI$1='Stars and Floors'!$C8,1, 0) + IF(BI$1='Stars and Floors'!$D8,1, 0) + IF(BI$1='Stars and Floors'!$E8,1, 0) + IF(BI$1='Stars and Floors'!$F8,1, 0) + IF(BI$1='Stars and Floors'!$G8,1, 0), 0)` |
| BJ8 | `=IF('Stars and Floors'!$A8, IF(BJ$1='Stars and Floors'!$C8,1, 0) + IF(BJ$1='Stars and Floors'!$D8,1, 0) + IF(BJ$1='Stars and Floors'!$E8,1, 0) + IF(BJ$1='Stars and Floors'!$F8,1, 0) + IF(BJ$1='Stars and Floors'!$G8,1, 0), 0)` |
| BK8 | `=IF('Stars and Floors'!$A8, IF(BK$1='Stars and Floors'!$C8,1, 0) + IF(BK$1='Stars and Floors'!$D8,1, 0) + IF(BK$1='Stars and Floors'!$E8,1, 0) + IF(BK$1='Stars and Floors'!$F8,1, 0) + IF(BK$1='Stars and Floors'!$G8,1, 0), 0)` |
| BL8 | `=IF('Stars and Floors'!$A8, IF(BL$1='Stars and Floors'!$C8,1, 0) + IF(BL$1='Stars and Floors'!$D8,1, 0) + IF(BL$1='Stars and Floors'!$E8,1, 0) + IF(BL$1='Stars and Floors'!$F8,1, 0) + IF(BL$1='Stars and Floors'!$G8,1, 0), 0)` |
| BM8 | `=IF('Stars and Floors'!$A8, IF(BM$1='Stars and Floors'!$C8,1, 0) + IF(BM$1='Stars and Floors'!$D8,1, 0) + IF(BM$1='Stars and Floors'!$E8,1, 0) + IF(BM$1='Stars and Floors'!$F8,1, 0) + IF(BM$1='Stars and Floors'!$G8,1, 0), 0)` |
| BN8 | `=IF('Stars and Floors'!$A8, IF(BN$1='Stars and Floors'!$C8,1, 0) + IF(BN$1='Stars and Floors'!$D8,1, 0) + IF(BN$1='Stars and Floors'!$E8,1, 0) + IF(BN$1='Stars and Floors'!$F8,1, 0) + IF(BN$1='Stars and Floors'!$G8,1, 0), 0)` |
| BO8 | `=IF('Stars and Floors'!$A8, IF(BO$1='Stars and Floors'!$C8,1, 0) + IF(BO$1='Stars and Floors'!$D8,1, 0) + IF(BO$1='Stars and Floors'!$E8,1, 0) + IF(BO$1='Stars and Floors'!$F8,1, 0) + IF(BO$1='Stars and Floors'!$G8,1, 0), 0)` |
| BP8 | `=IF('Stars and Floors'!$A8, IF(BP$1='Stars and Floors'!$C8,1, 0) + IF(BP$1='Stars and Floors'!$D8,1, 0) + IF(BP$1='Stars and Floors'!$E8,1, 0) + IF(BP$1='Stars and Floors'!$F8,1, 0) + IF(BP$1='Stars and Floors'!$G8,1, 0), 0)` |
| BQ8 | `=IF('Stars and Floors'!$A8, IF(BQ$1='Stars and Floors'!$C8,1, 0) + IF(BQ$1='Stars and Floors'!$D8,1, 0) + IF(BQ$1='Stars and Floors'!$E8,1, 0) + IF(BQ$1='Stars and Floors'!$F8,1, 0) + IF(BQ$1='Stars and Floors'!$G8,1, 0), 0)` |
| BR8 | `=IF('Stars and Floors'!$A8, IF(BR$1='Stars and Floors'!$C8,1, 0) + IF(BR$1='Stars and Floors'!$D8,1, 0) + IF(BR$1='Stars and Floors'!$E8,1, 0) + IF(BR$1='Stars and Floors'!$F8,1, 0) + IF(BR$1='Stars and Floors'!$G8,1, 0), 0)` |
| BS8 | `=IF('Stars and Floors'!$A8, IF(BS$1='Stars and Floors'!$C8,1, 0) + IF(BS$1='Stars and Floors'!$D8,1, 0) + IF(BS$1='Stars and Floors'!$E8,1, 0) + IF(BS$1='Stars and Floors'!$F8,1, 0) + IF(BS$1='Stars and Floors'!$G8,1, 0), 0)` |
| BT8 | `=IF('Stars and Floors'!$A8, IF(BT$1='Stars and Floors'!$C8,1, 0) + IF(BT$1='Stars and Floors'!$D8,1, 0) + IF(BT$1='Stars and Floors'!$E8,1, 0) + IF(BT$1='Stars and Floors'!$F8,1, 0) + IF(BT$1='Stars and Floors'!$G8,1, 0), 0)` |
| BU8 | `=IF('Stars and Floors'!$A8, IF(BU$1='Stars and Floors'!$C8,1, 0) + IF(BU$1='Stars and Floors'!$D8,1, 0) + IF(BU$1='Stars and Floors'!$E8,1, 0) + IF(BU$1='Stars and Floors'!$F8,1, 0) + IF(BU$1='Stars and Floors'!$G8,1, 0), 0)` |
| BV8 | `=IF('Stars and Floors'!$A8, IF(BV$1='Stars and Floors'!$C8,1, 0) + IF(BV$1='Stars and Floors'!$D8,1, 0) + IF(BV$1='Stars and Floors'!$E8,1, 0) + IF(BV$1='Stars and Floors'!$F8,1, 0) + IF(BV$1='Stars and Floors'!$G8,1, 0), 0)` |
| BW8 | `=IF('Stars and Floors'!$A8, IF(BW$1='Stars and Floors'!$C8,1, 0) + IF(BW$1='Stars and Floors'!$D8,1, 0) + IF(BW$1='Stars and Floors'!$E8,1, 0) + IF(BW$1='Stars and Floors'!$F8,1, 0) + IF(BW$1='Stars and Floors'!$G8,1, 0), 0)` |
| BX8 | `=IF('Stars and Floors'!$A8, IF(BX$1='Stars and Floors'!$C8,1, 0) + IF(BX$1='Stars and Floors'!$D8,1, 0) + IF(BX$1='Stars and Floors'!$E8,1, 0) + IF(BX$1='Stars and Floors'!$F8,1, 0) + IF(BX$1='Stars and Floors'!$G8,1, 0), 0)` |
| BY8 | `=IF('Stars and Floors'!$A8, IF(BY$1='Stars and Floors'!$C8,1, 0) + IF(BY$1='Stars and Floors'!$D8,1, 0) + IF(BY$1='Stars and Floors'!$E8,1, 0) + IF(BY$1='Stars and Floors'!$F8,1, 0) + IF(BY$1='Stars and Floors'!$G8,1, 0), 0)` |
| BZ8 | `=IF('Stars and Floors'!$A8, IF(BZ$1='Stars and Floors'!$C8,1, 0) + IF(BZ$1='Stars and Floors'!$D8,1, 0) + IF(BZ$1='Stars and Floors'!$E8,1, 0) + IF(BZ$1='Stars and Floors'!$F8,1, 0) + IF(BZ$1='Stars and Floors'!$G8,1, 0), 0)` |
| CA8 | `=IF('Stars and Floors'!$A8, IF(CA$1='Stars and Floors'!$C8,1, 0) + IF(CA$1='Stars and Floors'!$D8,1, 0) + IF(CA$1='Stars and Floors'!$E8,1, 0) + IF(CA$1='Stars and Floors'!$F8,1, 0) + IF(CA$1='Stars and Floors'!$G8,1, 0), 0)` |
| CB8 | `=IF('Stars and Floors'!$A8, IF(CB$1='Stars and Floors'!$C8,1, 0) + IF(CB$1='Stars and Floors'!$D8,1, 0) + IF(CB$1='Stars and Floors'!$E8,1, 0) + IF(CB$1='Stars and Floors'!$F8,1, 0) + IF(CB$1='Stars and Floors'!$G8,1, 0), 0)` |
| CC8 | `=IF('Stars and Floors'!$A8, IF(CC$1='Stars and Floors'!$C8,1, 0) + IF(CC$1='Stars and Floors'!$D8,1, 0) + IF(CC$1='Stars and Floors'!$E8,1, 0) + IF(CC$1='Stars and Floors'!$F8,1, 0) + IF(CC$1='Stars and Floors'!$G8,1, 0), 0)` |
| CD8 | `=IF('Stars and Floors'!$A8, IF(CD$1='Stars and Floors'!$C8,1, 0) + IF(CD$1='Stars and Floors'!$D8,1, 0) + IF(CD$1='Stars and Floors'!$E8,1, 0) + IF(CD$1='Stars and Floors'!$F8,1, 0) + IF(CD$1='Stars and Floors'!$G8,1, 0), 0)` |
| CE8 | `=IF('Stars and Floors'!$A8, IF(CE$1='Stars and Floors'!$C8,1, 0) + IF(CE$1='Stars and Floors'!$D8,1, 0) + IF(CE$1='Stars and Floors'!$E8,1, 0) + IF(CE$1='Stars and Floors'!$F8,1, 0) + IF(CE$1='Stars and Floors'!$G8,1, 0), 0)` |
| CF8 | `=IF('Stars and Floors'!$A8, IF(CF$1='Stars and Floors'!$C8,1, 0) + IF(CF$1='Stars and Floors'!$D8,1, 0) + IF(CF$1='Stars and Floors'!$E8,1, 0) + IF(CF$1='Stars and Floors'!$F8,1, 0) + IF(CF$1='Stars and Floors'!$G8,1, 0), 0)` |
| CG8 | `=IF('Stars and Floors'!$A8, IF(CG$1='Stars and Floors'!$C8,1, 0) + IF(CG$1='Stars and Floors'!$D8,1, 0) + IF(CG$1='Stars and Floors'!$E8,1, 0) + IF(CG$1='Stars and Floors'!$F8,1, 0) + IF(CG$1='Stars and Floors'!$G8,1, 0), 0)` |
| CH8 | `=IF('Stars and Floors'!$A8, IF(CH$1='Stars and Floors'!$C8,1, 0) + IF(CH$1='Stars and Floors'!$D8,1, 0) + IF(CH$1='Stars and Floors'!$E8,1, 0) + IF(CH$1='Stars and Floors'!$F8,1, 0) + IF(CH$1='Stars and Floors'!$G8,1, 0), 0)` |
| CI8 | `=IF('Stars and Floors'!$A8, IF(CI$1='Stars and Floors'!$C8,1, 0) + IF(CI$1='Stars and Floors'!$D8,1, 0) + IF(CI$1='Stars and Floors'!$E8,1, 0) + IF(CI$1='Stars and Floors'!$F8,1, 0) + IF(CI$1='Stars and Floors'!$G8,1, 0), 0)` |
| CJ8 | `=IF('Stars and Floors'!$A8, IF(CJ$1='Stars and Floors'!$C8,1, 0) + IF(CJ$1='Stars and Floors'!$D8,1, 0) + IF(CJ$1='Stars and Floors'!$E8,1, 0) + IF(CJ$1='Stars and Floors'!$F8,1, 0) + IF(CJ$1='Stars and Floors'!$G8,1, 0), 0)` |
| CK8 | `=IF('Stars and Floors'!$A8, IF(CK$1='Stars and Floors'!$C8,1, 0) + IF(CK$1='Stars and Floors'!$D8,1, 0) + IF(CK$1='Stars and Floors'!$E8,1, 0) + IF(CK$1='Stars and Floors'!$F8,1, 0) + IF(CK$1='Stars and Floors'!$G8,1, 0), 0)` |
| CL8 | `=IF('Stars and Floors'!$A8, IF(CL$1='Stars and Floors'!$C8,1, 0) + IF(CL$1='Stars and Floors'!$D8,1, 0) + IF(CL$1='Stars and Floors'!$E8,1, 0) + IF(CL$1='Stars and Floors'!$F8,1, 0) + IF(CL$1='Stars and Floors'!$G8,1, 0), 0)` |
| CM8 | `=IF('Stars and Floors'!$A8, IF(CM$1='Stars and Floors'!$C8,1, 0) + IF(CM$1='Stars and Floors'!$D8,1, 0) + IF(CM$1='Stars and Floors'!$E8,1, 0) + IF(CM$1='Stars and Floors'!$F8,1, 0) + IF(CM$1='Stars and Floors'!$G8,1, 0), 0)` |
| CN8 | `=IF('Stars and Floors'!$A8, IF(CN$1='Stars and Floors'!$C8,1, 0) + IF(CN$1='Stars and Floors'!$D8,1, 0) + IF(CN$1='Stars and Floors'!$E8,1, 0) + IF(CN$1='Stars and Floors'!$F8,1, 0) + IF(CN$1='Stars and Floors'!$G8,1, 0), 0)` |
| CO8 | `=IF('Stars and Floors'!$A8, IF(CO$1='Stars and Floors'!$C8,1, 0) + IF(CO$1='Stars and Floors'!$D8,1, 0) + IF(CO$1='Stars and Floors'!$E8,1, 0) + IF(CO$1='Stars and Floors'!$F8,1, 0) + IF(CO$1='Stars and Floors'!$G8,1, 0), 0)` |
| CP8 | `=IF('Stars and Floors'!$A8, IF(CP$1='Stars and Floors'!$C8,1, 0) + IF(CP$1='Stars and Floors'!$D8,1, 0) + IF(CP$1='Stars and Floors'!$E8,1, 0) + IF(CP$1='Stars and Floors'!$F8,1, 0) + IF(CP$1='Stars and Floors'!$G8,1, 0), 0)` |
| CQ8 | `=IF('Stars and Floors'!$A8, IF(CQ$1='Stars and Floors'!$C8,1, 0) + IF(CQ$1='Stars and Floors'!$D8,1, 0) + IF(CQ$1='Stars and Floors'!$E8,1, 0) + IF(CQ$1='Stars and Floors'!$F8,1, 0) + IF(CQ$1='Stars and Floors'!$G8,1, 0), 0)` |
| CR8 | `=IF('Stars and Floors'!$A8, IF(CR$1='Stars and Floors'!$C8,1, 0) + IF(CR$1='Stars and Floors'!$D8,1, 0) + IF(CR$1='Stars and Floors'!$E8,1, 0) + IF(CR$1='Stars and Floors'!$F8,1, 0) + IF(CR$1='Stars and Floors'!$G8,1, 0), 0)` |
| CS8 | `=IF('Stars and Floors'!$A8, IF(CS$1='Stars and Floors'!$C8,1, 0) + IF(CS$1='Stars and Floors'!$D8,1, 0) + IF(CS$1='Stars and Floors'!$E8,1, 0) + IF(CS$1='Stars and Floors'!$F8,1, 0) + IF(CS$1='Stars and Floors'!$G8,1, 0), 0)` |
| CT8 | `=IF('Stars and Floors'!$A8, IF(CT$1='Stars and Floors'!$C8,1, 0) + IF(CT$1='Stars and Floors'!$D8,1, 0) + IF(CT$1='Stars and Floors'!$E8,1, 0) + IF(CT$1='Stars and Floors'!$F8,1, 0) + IF(CT$1='Stars and Floors'!$G8,1, 0), 0)` |
| CU8 | `=IF('Stars and Floors'!$A8, IF(CU$1='Stars and Floors'!$C8,1, 0) + IF(CU$1='Stars and Floors'!$D8,1, 0) + IF(CU$1='Stars and Floors'!$E8,1, 0) + IF(CU$1='Stars and Floors'!$F8,1, 0) + IF(CU$1='Stars and Floors'!$G8,1, 0), 0)` |
| CV8 | `=IF('Stars and Floors'!$A8, IF(CV$1='Stars and Floors'!$C8,1, 0) + IF(CV$1='Stars and Floors'!$D8,1, 0) + IF(CV$1='Stars and Floors'!$E8,1, 0) + IF(CV$1='Stars and Floors'!$F8,1, 0) + IF(CV$1='Stars and Floors'!$G8,1, 0), 0)` |
| CW8 | `=IF('Stars and Floors'!$A8, IF(CW$1='Stars and Floors'!$C8,1, 0) + IF(CW$1='Stars and Floors'!$D8,1, 0) + IF(CW$1='Stars and Floors'!$E8,1, 0) + IF(CW$1='Stars and Floors'!$F8,1, 0) + IF(CW$1='Stars and Floors'!$G8,1, 0), 0)` |
| CX8 | `=IF('Stars and Floors'!$A8, IF(CX$1='Stars and Floors'!$C8,1, 0) + IF(CX$1='Stars and Floors'!$D8,1, 0) + IF(CX$1='Stars and Floors'!$E8,1, 0) + IF(CX$1='Stars and Floors'!$F8,1, 0) + IF(CX$1='Stars and Floors'!$G8,1, 0), 0)` |
| CY8 | `=IF('Stars and Floors'!$A8, IF(CY$1='Stars and Floors'!$C8,1, 0) + IF(CY$1='Stars and Floors'!$D8,1, 0) + IF(CY$1='Stars and Floors'!$E8,1, 0) + IF(CY$1='Stars and Floors'!$F8,1, 0) + IF(CY$1='Stars and Floors'!$G8,1, 0), 0)` |
| CZ8 | `=IF('Stars and Floors'!$A8, IF(CZ$1='Stars and Floors'!$C8,1, 0) + IF(CZ$1='Stars and Floors'!$D8,1, 0) + IF(CZ$1='Stars and Floors'!$E8,1, 0) + IF(CZ$1='Stars and Floors'!$F8,1, 0) + IF(CZ$1='Stars and Floors'!$G8,1, 0), 0)` |
| DA8 | `=IF('Stars and Floors'!$A8, IF(DA$1='Stars and Floors'!$C8,1, 0) + IF(DA$1='Stars and Floors'!$D8,1, 0) + IF(DA$1='Stars and Floors'!$E8,1, 0) + IF(DA$1='Stars and Floors'!$F8,1, 0) + IF(DA$1='Stars and Floors'!$G8,1, 0), 0)` |
| DB8 | `=IF('Stars and Floors'!$A8, IF(DB$1='Stars and Floors'!$C8,1, 0) + IF(DB$1='Stars and Floors'!$D8,1, 0) + IF(DB$1='Stars and Floors'!$E8,1, 0) + IF(DB$1='Stars and Floors'!$F8,1, 0) + IF(DB$1='Stars and Floors'!$G8,1, 0), 0)` |
| DC8 | `=IF('Stars and Floors'!$A8, IF(DC$1='Stars and Floors'!$C8,1, 0) + IF(DC$1='Stars and Floors'!$D8,1, 0) + IF(DC$1='Stars and Floors'!$E8,1, 0) + IF(DC$1='Stars and Floors'!$F8,1, 0) + IF(DC$1='Stars and Floors'!$G8,1, 0), 0)` |
| DD8 | `=IF('Stars and Floors'!$A8, IF(DD$1='Stars and Floors'!$C8,1, 0) + IF(DD$1='Stars and Floors'!$D8,1, 0) + IF(DD$1='Stars and Floors'!$E8,1, 0) + IF(DD$1='Stars and Floors'!$F8,1, 0) + IF(DD$1='Stars and Floors'!$G8,1, 0), 0)` |
| DE8 | `=IF('Stars and Floors'!$A8, IF(DE$1='Stars and Floors'!$C8,1, 0) + IF(DE$1='Stars and Floors'!$D8,1, 0) + IF(DE$1='Stars and Floors'!$E8,1, 0) + IF(DE$1='Stars and Floors'!$F8,1, 0) + IF(DE$1='Stars and Floors'!$G8,1, 0), 0)` |
| DF8 | `=IF('Stars and Floors'!$A8, IF(DF$1='Stars and Floors'!$C8,1, 0) + IF(DF$1='Stars and Floors'!$D8,1, 0) + IF(DF$1='Stars and Floors'!$E8,1, 0) + IF(DF$1='Stars and Floors'!$F8,1, 0) + IF(DF$1='Stars and Floors'!$G8,1, 0), 0)` |
| DG8 | `=IF('Stars and Floors'!$A8, IF(DG$1='Stars and Floors'!$C8,1, 0) + IF(DG$1='Stars and Floors'!$D8,1, 0) + IF(DG$1='Stars and Floors'!$E8,1, 0) + IF(DG$1='Stars and Floors'!$F8,1, 0) + IF(DG$1='Stars and Floors'!$G8,1, 0), 0)` |
| DH8 | `=IF('Stars and Floors'!$A8, IF(DH$1='Stars and Floors'!$C8,1, 0) + IF(DH$1='Stars and Floors'!$D8,1, 0) + IF(DH$1='Stars and Floors'!$E8,1, 0) + IF(DH$1='Stars and Floors'!$F8,1, 0) + IF(DH$1='Stars and Floors'!$G8,1, 0), 0)` |
| DI8 | `=IF('Stars and Floors'!$A8, IF(DI$1='Stars and Floors'!$C8,1, 0) + IF(DI$1='Stars and Floors'!$D8,1, 0) + IF(DI$1='Stars and Floors'!$E8,1, 0) + IF(DI$1='Stars and Floors'!$F8,1, 0) + IF(DI$1='Stars and Floors'!$G8,1, 0), 0)` |
| DJ8 | `=IF('Stars and Floors'!$A8, IF(DJ$1='Stars and Floors'!$C8,1, 0) + IF(DJ$1='Stars and Floors'!$D8,1, 0) + IF(DJ$1='Stars and Floors'!$E8,1, 0) + IF(DJ$1='Stars and Floors'!$F8,1, 0) + IF(DJ$1='Stars and Floors'!$G8,1, 0), 0)` |
| DK8 | `=IF('Stars and Floors'!$A8, IF(DK$1='Stars and Floors'!$C8,1, 0) + IF(DK$1='Stars and Floors'!$D8,1, 0) + IF(DK$1='Stars and Floors'!$E8,1, 0) + IF(DK$1='Stars and Floors'!$F8,1, 0) + IF(DK$1='Stars and Floors'!$G8,1, 0), 0)` |
| DL8 | `=IF('Stars and Floors'!$A8, IF(DL$1='Stars and Floors'!$C8,1, 0) + IF(DL$1='Stars and Floors'!$D8,1, 0) + IF(DL$1='Stars and Floors'!$E8,1, 0) + IF(DL$1='Stars and Floors'!$F8,1, 0) + IF(DL$1='Stars and Floors'!$G8,1, 0), 0)` |
| DM8 | `=IF('Stars and Floors'!$A8, IF(DM$1='Stars and Floors'!$C8,1, 0) + IF(DM$1='Stars and Floors'!$D8,1, 0) + IF(DM$1='Stars and Floors'!$E8,1, 0) + IF(DM$1='Stars and Floors'!$F8,1, 0) + IF(DM$1='Stars and Floors'!$G8,1, 0), 0)` |
| DN8 | `=IF('Stars and Floors'!$A8, IF(DN$1='Stars and Floors'!$C8,1, 0) + IF(DN$1='Stars and Floors'!$D8,1, 0) + IF(DN$1='Stars and Floors'!$E8,1, 0) + IF(DN$1='Stars and Floors'!$F8,1, 0) + IF(DN$1='Stars and Floors'!$G8,1, 0), 0)` |
| DO8 | `=IF('Stars and Floors'!$A8, IF(DO$1='Stars and Floors'!$C8,1, 0) + IF(DO$1='Stars and Floors'!$D8,1, 0) + IF(DO$1='Stars and Floors'!$E8,1, 0) + IF(DO$1='Stars and Floors'!$F8,1, 0) + IF(DO$1='Stars and Floors'!$G8,1, 0), 0)` |
| DP8 | `=IF('Stars and Floors'!$A8, IF(DP$1='Stars and Floors'!$C8,1, 0) + IF(DP$1='Stars and Floors'!$D8,1, 0) + IF(DP$1='Stars and Floors'!$E8,1, 0) + IF(DP$1='Stars and Floors'!$F8,1, 0) + IF(DP$1='Stars and Floors'!$G8,1, 0), 0)` |
| DQ8 | `=IF('Stars and Floors'!$A8, IF(DQ$1='Stars and Floors'!$C8,1, 0) + IF(DQ$1='Stars and Floors'!$D8,1, 0) + IF(DQ$1='Stars and Floors'!$E8,1, 0) + IF(DQ$1='Stars and Floors'!$F8,1, 0) + IF(DQ$1='Stars and Floors'!$G8,1, 0), 0)` |
| B9 | `=IF('Stars and Floors'!$A9, IF(B$1='Stars and Floors'!$C9,1, 0) + IF(B$1='Stars and Floors'!$D9,1, 0) + IF(B$1='Stars and Floors'!$E9,1, 0) + IF(B$1='Stars and Floors'!$F9,1, 0) + IF(B$1='Stars and Floors'!$G9,1, 0), 0)` |
| C9 | `=IF('Stars and Floors'!$A9, IF(C$1='Stars and Floors'!$C9,1, 0) + IF(C$1='Stars and Floors'!$D9,1, 0) + IF(C$1='Stars and Floors'!$E9,1, 0) + IF(C$1='Stars and Floors'!$F9,1, 0) + IF(C$1='Stars and Floors'!$G9,1, 0), 0)` |
| D9 | `=IF('Stars and Floors'!$A9, IF(D$1='Stars and Floors'!$C9,1, 0) + IF(D$1='Stars and Floors'!$D9,1, 0) + IF(D$1='Stars and Floors'!$E9,1, 0) + IF(D$1='Stars and Floors'!$F9,1, 0) + IF(D$1='Stars and Floors'!$G9,1, 0), 0)` |
| E9 | `=IF('Stars and Floors'!$A9, IF(E$1='Stars and Floors'!$C9,1, 0) + IF(E$1='Stars and Floors'!$D9,1, 0) + IF(E$1='Stars and Floors'!$E9,1, 0) + IF(E$1='Stars and Floors'!$F9,1, 0) + IF(E$1='Stars and Floors'!$G9,1, 0), 0)` |
| F9 | `=IF('Stars and Floors'!$A9, IF(F$1='Stars and Floors'!$C9,1, 0) + IF(F$1='Stars and Floors'!$D9,1, 0) + IF(F$1='Stars and Floors'!$E9,1, 0) + IF(F$1='Stars and Floors'!$F9,1, 0) + IF(F$1='Stars and Floors'!$G9,1, 0), 0)` |
| G9 | `=IF('Stars and Floors'!$A9, IF(G$1='Stars and Floors'!$C9,1, 0) + IF(G$1='Stars and Floors'!$D9,1, 0) + IF(G$1='Stars and Floors'!$E9,1, 0) + IF(G$1='Stars and Floors'!$F9,1, 0) + IF(G$1='Stars and Floors'!$G9,1, 0), 0)` |
| H9 | `=IF('Stars and Floors'!$A9, IF(H$1='Stars and Floors'!$C9,1, 0) + IF(H$1='Stars and Floors'!$D9,1, 0) + IF(H$1='Stars and Floors'!$E9,1, 0) + IF(H$1='Stars and Floors'!$F9,1, 0) + IF(H$1='Stars and Floors'!$G9,1, 0), 0)` |
| I9 | `=IF('Stars and Floors'!$A9, IF(I$1='Stars and Floors'!$C9,1, 0) + IF(I$1='Stars and Floors'!$D9,1, 0) + IF(I$1='Stars and Floors'!$E9,1, 0) + IF(I$1='Stars and Floors'!$F9,1, 0) + IF(I$1='Stars and Floors'!$G9,1, 0), 0)` |
| J9 | `=IF('Stars and Floors'!$A9, IF(J$1='Stars and Floors'!$C9,1, 0) + IF(J$1='Stars and Floors'!$D9,1, 0) + IF(J$1='Stars and Floors'!$E9,1, 0) + IF(J$1='Stars and Floors'!$F9,1, 0) + IF(J$1='Stars and Floors'!$G9,1, 0), 0)` |
| K9 | `=IF('Stars and Floors'!$A9, IF(K$1='Stars and Floors'!$C9,1, 0) + IF(K$1='Stars and Floors'!$D9,1, 0) + IF(K$1='Stars and Floors'!$E9,1, 0) + IF(K$1='Stars and Floors'!$F9,1, 0) + IF(K$1='Stars and Floors'!$G9,1, 0), 0)` |
| L9 | `=IF('Stars and Floors'!$A9, IF(L$1='Stars and Floors'!$C9,1, 0) + IF(L$1='Stars and Floors'!$D9,1, 0) + IF(L$1='Stars and Floors'!$E9,1, 0) + IF(L$1='Stars and Floors'!$F9,1, 0) + IF(L$1='Stars and Floors'!$G9,1, 0), 0)` |
| M9 | `=IF('Stars and Floors'!$A9, IF(M$1='Stars and Floors'!$C9,1, 0) + IF(M$1='Stars and Floors'!$D9,1, 0) + IF(M$1='Stars and Floors'!$E9,1, 0) + IF(M$1='Stars and Floors'!$F9,1, 0) + IF(M$1='Stars and Floors'!$G9,1, 0), 0)` |
| N9 | `=IF('Stars and Floors'!$A9, IF(N$1='Stars and Floors'!$C9,1, 0) + IF(N$1='Stars and Floors'!$D9,1, 0) + IF(N$1='Stars and Floors'!$E9,1, 0) + IF(N$1='Stars and Floors'!$F9,1, 0) + IF(N$1='Stars and Floors'!$G9,1, 0), 0)` |
| O9 | `=IF('Stars and Floors'!$A9, IF(O$1='Stars and Floors'!$C9,1, 0) + IF(O$1='Stars and Floors'!$D9,1, 0) + IF(O$1='Stars and Floors'!$E9,1, 0) + IF(O$1='Stars and Floors'!$F9,1, 0) + IF(O$1='Stars and Floors'!$G9,1, 0), 0)` |
| P9 | `=IF('Stars and Floors'!$A9, IF(P$1='Stars and Floors'!$C9,1, 0) + IF(P$1='Stars and Floors'!$D9,1, 0) + IF(P$1='Stars and Floors'!$E9,1, 0) + IF(P$1='Stars and Floors'!$F9,1, 0) + IF(P$1='Stars and Floors'!$G9,1, 0), 0)` |
| Q9 | `=IF('Stars and Floors'!$A9, IF(Q$1='Stars and Floors'!$C9,1, 0) + IF(Q$1='Stars and Floors'!$D9,1, 0) + IF(Q$1='Stars and Floors'!$E9,1, 0) + IF(Q$1='Stars and Floors'!$F9,1, 0) + IF(Q$1='Stars and Floors'!$G9,1, 0), 0)` |
| R9 | `=IF('Stars and Floors'!$A9, IF(R$1='Stars and Floors'!$C9,1, 0) + IF(R$1='Stars and Floors'!$D9,1, 0) + IF(R$1='Stars and Floors'!$E9,1, 0) + IF(R$1='Stars and Floors'!$F9,1, 0) + IF(R$1='Stars and Floors'!$G9,1, 0), 0)` |
| S9 | `=IF('Stars and Floors'!$A9, IF(S$1='Stars and Floors'!$C9,1, 0) + IF(S$1='Stars and Floors'!$D9,1, 0) + IF(S$1='Stars and Floors'!$E9,1, 0) + IF(S$1='Stars and Floors'!$F9,1, 0) + IF(S$1='Stars and Floors'!$G9,1, 0), 0)` |
| T9 | `=IF('Stars and Floors'!$A9, IF(T$1='Stars and Floors'!$C9,1, 0) + IF(T$1='Stars and Floors'!$D9,1, 0) + IF(T$1='Stars and Floors'!$E9,1, 0) + IF(T$1='Stars and Floors'!$F9,1, 0) + IF(T$1='Stars and Floors'!$G9,1, 0), 0)` |
| U9 | `=IF('Stars and Floors'!$A9, IF(U$1='Stars and Floors'!$C9,1, 0) + IF(U$1='Stars and Floors'!$D9,1, 0) + IF(U$1='Stars and Floors'!$E9,1, 0) + IF(U$1='Stars and Floors'!$F9,1, 0) + IF(U$1='Stars and Floors'!$G9,1, 0), 0)` |
| V9 | `=IF('Stars and Floors'!$A9, IF(V$1='Stars and Floors'!$C9,1, 0) + IF(V$1='Stars and Floors'!$D9,1, 0) + IF(V$1='Stars and Floors'!$E9,1, 0) + IF(V$1='Stars and Floors'!$F9,1, 0) + IF(V$1='Stars and Floors'!$G9,1, 0), 0)` |
| W9 | `=IF('Stars and Floors'!$A9, IF(W$1='Stars and Floors'!$C9,1, 0) + IF(W$1='Stars and Floors'!$D9,1, 0) + IF(W$1='Stars and Floors'!$E9,1, 0) + IF(W$1='Stars and Floors'!$F9,1, 0) + IF(W$1='Stars and Floors'!$G9,1, 0), 0)` |
| X9 | `=IF('Stars and Floors'!$A9, IF(X$1='Stars and Floors'!$C9,1, 0) + IF(X$1='Stars and Floors'!$D9,1, 0) + IF(X$1='Stars and Floors'!$E9,1, 0) + IF(X$1='Stars and Floors'!$F9,1, 0) + IF(X$1='Stars and Floors'!$G9,1, 0), 0)` |
| Y9 | `=IF('Stars and Floors'!$A9, IF(Y$1='Stars and Floors'!$C9,1, 0) + IF(Y$1='Stars and Floors'!$D9,1, 0) + IF(Y$1='Stars and Floors'!$E9,1, 0) + IF(Y$1='Stars and Floors'!$F9,1, 0) + IF(Y$1='Stars and Floors'!$G9,1, 0), 0)` |
| Z9 | `=IF('Stars and Floors'!$A9, IF(Z$1='Stars and Floors'!$C9,1, 0) + IF(Z$1='Stars and Floors'!$D9,1, 0) + IF(Z$1='Stars and Floors'!$E9,1, 0) + IF(Z$1='Stars and Floors'!$F9,1, 0) + IF(Z$1='Stars and Floors'!$G9,1, 0), 0)` |
| AA9 | `=IF('Stars and Floors'!$A9, IF(AA$1='Stars and Floors'!$C9,1, 0) + IF(AA$1='Stars and Floors'!$D9,1, 0) + IF(AA$1='Stars and Floors'!$E9,1, 0) + IF(AA$1='Stars and Floors'!$F9,1, 0) + IF(AA$1='Stars and Floors'!$G9,1, 0), 0)` |
| AB9 | `=IF('Stars and Floors'!$A9, IF(AB$1='Stars and Floors'!$C9,1, 0) + IF(AB$1='Stars and Floors'!$D9,1, 0) + IF(AB$1='Stars and Floors'!$E9,1, 0) + IF(AB$1='Stars and Floors'!$F9,1, 0) + IF(AB$1='Stars and Floors'!$G9,1, 0), 0)` |
| AC9 | `=IF('Stars and Floors'!$A9, IF(AC$1='Stars and Floors'!$C9,1, 0) + IF(AC$1='Stars and Floors'!$D9,1, 0) + IF(AC$1='Stars and Floors'!$E9,1, 0) + IF(AC$1='Stars and Floors'!$F9,1, 0) + IF(AC$1='Stars and Floors'!$G9,1, 0), 0)` |
| AD9 | `=IF('Stars and Floors'!$A9, IF(AD$1='Stars and Floors'!$C9,1, 0) + IF(AD$1='Stars and Floors'!$D9,1, 0) + IF(AD$1='Stars and Floors'!$E9,1, 0) + IF(AD$1='Stars and Floors'!$F9,1, 0) + IF(AD$1='Stars and Floors'!$G9,1, 0), 0)` |
| AE9 | `=IF('Stars and Floors'!$A9, IF(AE$1='Stars and Floors'!$C9,1, 0) + IF(AE$1='Stars and Floors'!$D9,1, 0) + IF(AE$1='Stars and Floors'!$E9,1, 0) + IF(AE$1='Stars and Floors'!$F9,1, 0) + IF(AE$1='Stars and Floors'!$G9,1, 0), 0)` |
| AF9 | `=IF('Stars and Floors'!$A9, IF(AF$1='Stars and Floors'!$C9,1, 0) + IF(AF$1='Stars and Floors'!$D9,1, 0) + IF(AF$1='Stars and Floors'!$E9,1, 0) + IF(AF$1='Stars and Floors'!$F9,1, 0) + IF(AF$1='Stars and Floors'!$G9,1, 0), 0)` |
| AG9 | `=IF('Stars and Floors'!$A9, IF(AG$1='Stars and Floors'!$C9,1, 0) + IF(AG$1='Stars and Floors'!$D9,1, 0) + IF(AG$1='Stars and Floors'!$E9,1, 0) + IF(AG$1='Stars and Floors'!$F9,1, 0) + IF(AG$1='Stars and Floors'!$G9,1, 0), 0)` |
| AH9 | `=IF('Stars and Floors'!$A9, IF(AH$1='Stars and Floors'!$C9,1, 0) + IF(AH$1='Stars and Floors'!$D9,1, 0) + IF(AH$1='Stars and Floors'!$E9,1, 0) + IF(AH$1='Stars and Floors'!$F9,1, 0) + IF(AH$1='Stars and Floors'!$G9,1, 0), 0)` |
| AI9 | `=IF('Stars and Floors'!$A9, IF(AI$1='Stars and Floors'!$C9,1, 0) + IF(AI$1='Stars and Floors'!$D9,1, 0) + IF(AI$1='Stars and Floors'!$E9,1, 0) + IF(AI$1='Stars and Floors'!$F9,1, 0) + IF(AI$1='Stars and Floors'!$G9,1, 0), 0)` |
| AJ9 | `=IF('Stars and Floors'!$A9, IF(AJ$1='Stars and Floors'!$C9,1, 0) + IF(AJ$1='Stars and Floors'!$D9,1, 0) + IF(AJ$1='Stars and Floors'!$E9,1, 0) + IF(AJ$1='Stars and Floors'!$F9,1, 0) + IF(AJ$1='Stars and Floors'!$G9,1, 0), 0)` |
| AK9 | `=IF('Stars and Floors'!$A9, IF(AK$1='Stars and Floors'!$C9,1, 0) + IF(AK$1='Stars and Floors'!$D9,1, 0) + IF(AK$1='Stars and Floors'!$E9,1, 0) + IF(AK$1='Stars and Floors'!$F9,1, 0) + IF(AK$1='Stars and Floors'!$G9,1, 0), 0)` |
| AL9 | `=IF('Stars and Floors'!$A9, IF(AL$1='Stars and Floors'!$C9,1, 0) + IF(AL$1='Stars and Floors'!$D9,1, 0) + IF(AL$1='Stars and Floors'!$E9,1, 0) + IF(AL$1='Stars and Floors'!$F9,1, 0) + IF(AL$1='Stars and Floors'!$G9,1, 0), 0)` |
| AM9 | `=IF('Stars and Floors'!$A9, IF(AM$1='Stars and Floors'!$C9,1, 0) + IF(AM$1='Stars and Floors'!$D9,1, 0) + IF(AM$1='Stars and Floors'!$E9,1, 0) + IF(AM$1='Stars and Floors'!$F9,1, 0) + IF(AM$1='Stars and Floors'!$G9,1, 0), 0)` |
| AN9 | `=IF('Stars and Floors'!$A9, IF(AN$1='Stars and Floors'!$C9,1, 0) + IF(AN$1='Stars and Floors'!$D9,1, 0) + IF(AN$1='Stars and Floors'!$E9,1, 0) + IF(AN$1='Stars and Floors'!$F9,1, 0) + IF(AN$1='Stars and Floors'!$G9,1, 0), 0)` |
| AO9 | `=IF('Stars and Floors'!$A9, IF(AO$1='Stars and Floors'!$C9,1, 0) + IF(AO$1='Stars and Floors'!$D9,1, 0) + IF(AO$1='Stars and Floors'!$E9,1, 0) + IF(AO$1='Stars and Floors'!$F9,1, 0) + IF(AO$1='Stars and Floors'!$G9,1, 0), 0)` |
| AP9 | `=IF('Stars and Floors'!$A9, IF(AP$1='Stars and Floors'!$C9,1, 0) + IF(AP$1='Stars and Floors'!$D9,1, 0) + IF(AP$1='Stars and Floors'!$E9,1, 0) + IF(AP$1='Stars and Floors'!$F9,1, 0) + IF(AP$1='Stars and Floors'!$G9,1, 0), 0)` |
| AQ9 | `=IF('Stars and Floors'!$A9, IF(AQ$1='Stars and Floors'!$C9,1, 0) + IF(AQ$1='Stars and Floors'!$D9,1, 0) + IF(AQ$1='Stars and Floors'!$E9,1, 0) + IF(AQ$1='Stars and Floors'!$F9,1, 0) + IF(AQ$1='Stars and Floors'!$G9,1, 0), 0)` |
| AR9 | `=IF('Stars and Floors'!$A9, IF(AR$1='Stars and Floors'!$C9,1, 0) + IF(AR$1='Stars and Floors'!$D9,1, 0) + IF(AR$1='Stars and Floors'!$E9,1, 0) + IF(AR$1='Stars and Floors'!$F9,1, 0) + IF(AR$1='Stars and Floors'!$G9,1, 0), 0)` |
| AS9 | `=IF('Stars and Floors'!$A9, IF(AS$1='Stars and Floors'!$C9,1, 0) + IF(AS$1='Stars and Floors'!$D9,1, 0) + IF(AS$1='Stars and Floors'!$E9,1, 0) + IF(AS$1='Stars and Floors'!$F9,1, 0) + IF(AS$1='Stars and Floors'!$G9,1, 0), 0)` |
| AT9 | `=IF('Stars and Floors'!$A9, IF(AT$1='Stars and Floors'!$C9,1, 0) + IF(AT$1='Stars and Floors'!$D9,1, 0) + IF(AT$1='Stars and Floors'!$E9,1, 0) + IF(AT$1='Stars and Floors'!$F9,1, 0) + IF(AT$1='Stars and Floors'!$G9,1, 0), 0)` |
| AU9 | `=IF('Stars and Floors'!$A9, IF(AU$1='Stars and Floors'!$C9,1, 0) + IF(AU$1='Stars and Floors'!$D9,1, 0) + IF(AU$1='Stars and Floors'!$E9,1, 0) + IF(AU$1='Stars and Floors'!$F9,1, 0) + IF(AU$1='Stars and Floors'!$G9,1, 0), 0)` |
| AV9 | `=IF('Stars and Floors'!$A9, IF(AV$1='Stars and Floors'!$C9,1, 0) + IF(AV$1='Stars and Floors'!$D9,1, 0) + IF(AV$1='Stars and Floors'!$E9,1, 0) + IF(AV$1='Stars and Floors'!$F9,1, 0) + IF(AV$1='Stars and Floors'!$G9,1, 0), 0)` |
| AW9 | `=IF('Stars and Floors'!$A9, IF(AW$1='Stars and Floors'!$C9,1, 0) + IF(AW$1='Stars and Floors'!$D9,1, 0) + IF(AW$1='Stars and Floors'!$E9,1, 0) + IF(AW$1='Stars and Floors'!$F9,1, 0) + IF(AW$1='Stars and Floors'!$G9,1, 0), 0)` |
| AX9 | `=IF('Stars and Floors'!$A9, IF(AX$1='Stars and Floors'!$C9,1, 0) + IF(AX$1='Stars and Floors'!$D9,1, 0) + IF(AX$1='Stars and Floors'!$E9,1, 0) + IF(AX$1='Stars and Floors'!$F9,1, 0) + IF(AX$1='Stars and Floors'!$G9,1, 0), 0)` |
| AY9 | `=IF('Stars and Floors'!$A9, IF(AY$1='Stars and Floors'!$C9,1, 0) + IF(AY$1='Stars and Floors'!$D9,1, 0) + IF(AY$1='Stars and Floors'!$E9,1, 0) + IF(AY$1='Stars and Floors'!$F9,1, 0) + IF(AY$1='Stars and Floors'!$G9,1, 0), 0)` |
| AZ9 | `=IF('Stars and Floors'!$A9, IF(AZ$1='Stars and Floors'!$C9,1, 0) + IF(AZ$1='Stars and Floors'!$D9,1, 0) + IF(AZ$1='Stars and Floors'!$E9,1, 0) + IF(AZ$1='Stars and Floors'!$F9,1, 0) + IF(AZ$1='Stars and Floors'!$G9,1, 0), 0)` |
| BA9 | `=IF('Stars and Floors'!$A9, IF(BA$1='Stars and Floors'!$C9,1, 0) + IF(BA$1='Stars and Floors'!$D9,1, 0) + IF(BA$1='Stars and Floors'!$E9,1, 0) + IF(BA$1='Stars and Floors'!$F9,1, 0) + IF(BA$1='Stars and Floors'!$G9,1, 0), 0)` |
| BB9 | `=IF('Stars and Floors'!$A9, IF(BB$1='Stars and Floors'!$C9,1, 0) + IF(BB$1='Stars and Floors'!$D9,1, 0) + IF(BB$1='Stars and Floors'!$E9,1, 0) + IF(BB$1='Stars and Floors'!$F9,1, 0) + IF(BB$1='Stars and Floors'!$G9,1, 0), 0)` |
| BC9 | `=IF('Stars and Floors'!$A9, IF(BC$1='Stars and Floors'!$C9,1, 0) + IF(BC$1='Stars and Floors'!$D9,1, 0) + IF(BC$1='Stars and Floors'!$E9,1, 0) + IF(BC$1='Stars and Floors'!$F9,1, 0) + IF(BC$1='Stars and Floors'!$G9,1, 0), 0)` |
| BD9 | `=IF('Stars and Floors'!$A9, IF(BD$1='Stars and Floors'!$C9,1, 0) + IF(BD$1='Stars and Floors'!$D9,1, 0) + IF(BD$1='Stars and Floors'!$E9,1, 0) + IF(BD$1='Stars and Floors'!$F9,1, 0) + IF(BD$1='Stars and Floors'!$G9,1, 0), 0)` |
| BE9 | `=IF('Stars and Floors'!$A9, IF(BE$1='Stars and Floors'!$C9,1, 0) + IF(BE$1='Stars and Floors'!$D9,1, 0) + IF(BE$1='Stars and Floors'!$E9,1, 0) + IF(BE$1='Stars and Floors'!$F9,1, 0) + IF(BE$1='Stars and Floors'!$G9,1, 0), 0)` |
| BF9 | `=IF('Stars and Floors'!$A9, IF(BF$1='Stars and Floors'!$C9,1, 0) + IF(BF$1='Stars and Floors'!$D9,1, 0) + IF(BF$1='Stars and Floors'!$E9,1, 0) + IF(BF$1='Stars and Floors'!$F9,1, 0) + IF(BF$1='Stars and Floors'!$G9,1, 0), 0)` |
| BG9 | `=IF('Stars and Floors'!$A9, IF(BG$1='Stars and Floors'!$C9,1, 0) + IF(BG$1='Stars and Floors'!$D9,1, 0) + IF(BG$1='Stars and Floors'!$E9,1, 0) + IF(BG$1='Stars and Floors'!$F9,1, 0) + IF(BG$1='Stars and Floors'!$G9,1, 0), 0)` |
| BH9 | `=IF('Stars and Floors'!$A9, IF(BH$1='Stars and Floors'!$C9,1, 0) + IF(BH$1='Stars and Floors'!$D9,1, 0) + IF(BH$1='Stars and Floors'!$E9,1, 0) + IF(BH$1='Stars and Floors'!$F9,1, 0) + IF(BH$1='Stars and Floors'!$G9,1, 0), 0)` |
| BI9 | `=IF('Stars and Floors'!$A9, IF(BI$1='Stars and Floors'!$C9,1, 0) + IF(BI$1='Stars and Floors'!$D9,1, 0) + IF(BI$1='Stars and Floors'!$E9,1, 0) + IF(BI$1='Stars and Floors'!$F9,1, 0) + IF(BI$1='Stars and Floors'!$G9,1, 0), 0)` |
| BJ9 | `=IF('Stars and Floors'!$A9, IF(BJ$1='Stars and Floors'!$C9,1, 0) + IF(BJ$1='Stars and Floors'!$D9,1, 0) + IF(BJ$1='Stars and Floors'!$E9,1, 0) + IF(BJ$1='Stars and Floors'!$F9,1, 0) + IF(BJ$1='Stars and Floors'!$G9,1, 0), 0)` |
| BK9 | `=IF('Stars and Floors'!$A9, IF(BK$1='Stars and Floors'!$C9,1, 0) + IF(BK$1='Stars and Floors'!$D9,1, 0) + IF(BK$1='Stars and Floors'!$E9,1, 0) + IF(BK$1='Stars and Floors'!$F9,1, 0) + IF(BK$1='Stars and Floors'!$G9,1, 0), 0)` |
| BL9 | `=IF('Stars and Floors'!$A9, IF(BL$1='Stars and Floors'!$C9,1, 0) + IF(BL$1='Stars and Floors'!$D9,1, 0) + IF(BL$1='Stars and Floors'!$E9,1, 0) + IF(BL$1='Stars and Floors'!$F9,1, 0) + IF(BL$1='Stars and Floors'!$G9,1, 0), 0)` |
| BM9 | `=IF('Stars and Floors'!$A9, IF(BM$1='Stars and Floors'!$C9,1, 0) + IF(BM$1='Stars and Floors'!$D9,1, 0) + IF(BM$1='Stars and Floors'!$E9,1, 0) + IF(BM$1='Stars and Floors'!$F9,1, 0) + IF(BM$1='Stars and Floors'!$G9,1, 0), 0)` |
| BN9 | `=IF('Stars and Floors'!$A9, IF(BN$1='Stars and Floors'!$C9,1, 0) + IF(BN$1='Stars and Floors'!$D9,1, 0) + IF(BN$1='Stars and Floors'!$E9,1, 0) + IF(BN$1='Stars and Floors'!$F9,1, 0) + IF(BN$1='Stars and Floors'!$G9,1, 0), 0)` |
| BO9 | `=IF('Stars and Floors'!$A9, IF(BO$1='Stars and Floors'!$C9,1, 0) + IF(BO$1='Stars and Floors'!$D9,1, 0) + IF(BO$1='Stars and Floors'!$E9,1, 0) + IF(BO$1='Stars and Floors'!$F9,1, 0) + IF(BO$1='Stars and Floors'!$G9,1, 0), 0)` |
| BP9 | `=IF('Stars and Floors'!$A9, IF(BP$1='Stars and Floors'!$C9,1, 0) + IF(BP$1='Stars and Floors'!$D9,1, 0) + IF(BP$1='Stars and Floors'!$E9,1, 0) + IF(BP$1='Stars and Floors'!$F9,1, 0) + IF(BP$1='Stars and Floors'!$G9,1, 0), 0)` |
| BQ9 | `=IF('Stars and Floors'!$A9, IF(BQ$1='Stars and Floors'!$C9,1, 0) + IF(BQ$1='Stars and Floors'!$D9,1, 0) + IF(BQ$1='Stars and Floors'!$E9,1, 0) + IF(BQ$1='Stars and Floors'!$F9,1, 0) + IF(BQ$1='Stars and Floors'!$G9,1, 0), 0)` |
| BR9 | `=IF('Stars and Floors'!$A9, IF(BR$1='Stars and Floors'!$C9,1, 0) + IF(BR$1='Stars and Floors'!$D9,1, 0) + IF(BR$1='Stars and Floors'!$E9,1, 0) + IF(BR$1='Stars and Floors'!$F9,1, 0) + IF(BR$1='Stars and Floors'!$G9,1, 0), 0)` |
| BS9 | `=IF('Stars and Floors'!$A9, IF(BS$1='Stars and Floors'!$C9,1, 0) + IF(BS$1='Stars and Floors'!$D9,1, 0) + IF(BS$1='Stars and Floors'!$E9,1, 0) + IF(BS$1='Stars and Floors'!$F9,1, 0) + IF(BS$1='Stars and Floors'!$G9,1, 0), 0)` |
| BT9 | `=IF('Stars and Floors'!$A9, IF(BT$1='Stars and Floors'!$C9,1, 0) + IF(BT$1='Stars and Floors'!$D9,1, 0) + IF(BT$1='Stars and Floors'!$E9,1, 0) + IF(BT$1='Stars and Floors'!$F9,1, 0) + IF(BT$1='Stars and Floors'!$G9,1, 0), 0)` |
| BU9 | `=IF('Stars and Floors'!$A9, IF(BU$1='Stars and Floors'!$C9,1, 0) + IF(BU$1='Stars and Floors'!$D9,1, 0) + IF(BU$1='Stars and Floors'!$E9,1, 0) + IF(BU$1='Stars and Floors'!$F9,1, 0) + IF(BU$1='Stars and Floors'!$G9,1, 0), 0)` |
| BV9 | `=IF('Stars and Floors'!$A9, IF(BV$1='Stars and Floors'!$C9,1, 0) + IF(BV$1='Stars and Floors'!$D9,1, 0) + IF(BV$1='Stars and Floors'!$E9,1, 0) + IF(BV$1='Stars and Floors'!$F9,1, 0) + IF(BV$1='Stars and Floors'!$G9,1, 0), 0)` |
| BW9 | `=IF('Stars and Floors'!$A9, IF(BW$1='Stars and Floors'!$C9,1, 0) + IF(BW$1='Stars and Floors'!$D9,1, 0) + IF(BW$1='Stars and Floors'!$E9,1, 0) + IF(BW$1='Stars and Floors'!$F9,1, 0) + IF(BW$1='Stars and Floors'!$G9,1, 0), 0)` |
| BX9 | `=IF('Stars and Floors'!$A9, IF(BX$1='Stars and Floors'!$C9,1, 0) + IF(BX$1='Stars and Floors'!$D9,1, 0) + IF(BX$1='Stars and Floors'!$E9,1, 0) + IF(BX$1='Stars and Floors'!$F9,1, 0) + IF(BX$1='Stars and Floors'!$G9,1, 0), 0)` |
| BY9 | `=IF('Stars and Floors'!$A9, IF(BY$1='Stars and Floors'!$C9,1, 0) + IF(BY$1='Stars and Floors'!$D9,1, 0) + IF(BY$1='Stars and Floors'!$E9,1, 0) + IF(BY$1='Stars and Floors'!$F9,1, 0) + IF(BY$1='Stars and Floors'!$G9,1, 0), 0)` |
| BZ9 | `=IF('Stars and Floors'!$A9, IF(BZ$1='Stars and Floors'!$C9,1, 0) + IF(BZ$1='Stars and Floors'!$D9,1, 0) + IF(BZ$1='Stars and Floors'!$E9,1, 0) + IF(BZ$1='Stars and Floors'!$F9,1, 0) + IF(BZ$1='Stars and Floors'!$G9,1, 0), 0)` |
| CA9 | `=IF('Stars and Floors'!$A9, IF(CA$1='Stars and Floors'!$C9,1, 0) + IF(CA$1='Stars and Floors'!$D9,1, 0) + IF(CA$1='Stars and Floors'!$E9,1, 0) + IF(CA$1='Stars and Floors'!$F9,1, 0) + IF(CA$1='Stars and Floors'!$G9,1, 0), 0)` |
| CB9 | `=IF('Stars and Floors'!$A9, IF(CB$1='Stars and Floors'!$C9,1, 0) + IF(CB$1='Stars and Floors'!$D9,1, 0) + IF(CB$1='Stars and Floors'!$E9,1, 0) + IF(CB$1='Stars and Floors'!$F9,1, 0) + IF(CB$1='Stars and Floors'!$G9,1, 0), 0)` |
| CC9 | `=IF('Stars and Floors'!$A9, IF(CC$1='Stars and Floors'!$C9,1, 0) + IF(CC$1='Stars and Floors'!$D9,1, 0) + IF(CC$1='Stars and Floors'!$E9,1, 0) + IF(CC$1='Stars and Floors'!$F9,1, 0) + IF(CC$1='Stars and Floors'!$G9,1, 0), 0)` |
| CD9 | `=IF('Stars and Floors'!$A9, IF(CD$1='Stars and Floors'!$C9,1, 0) + IF(CD$1='Stars and Floors'!$D9,1, 0) + IF(CD$1='Stars and Floors'!$E9,1, 0) + IF(CD$1='Stars and Floors'!$F9,1, 0) + IF(CD$1='Stars and Floors'!$G9,1, 0), 0)` |
| CE9 | `=IF('Stars and Floors'!$A9, IF(CE$1='Stars and Floors'!$C9,1, 0) + IF(CE$1='Stars and Floors'!$D9,1, 0) + IF(CE$1='Stars and Floors'!$E9,1, 0) + IF(CE$1='Stars and Floors'!$F9,1, 0) + IF(CE$1='Stars and Floors'!$G9,1, 0), 0)` |
| CF9 | `=IF('Stars and Floors'!$A9, IF(CF$1='Stars and Floors'!$C9,1, 0) + IF(CF$1='Stars and Floors'!$D9,1, 0) + IF(CF$1='Stars and Floors'!$E9,1, 0) + IF(CF$1='Stars and Floors'!$F9,1, 0) + IF(CF$1='Stars and Floors'!$G9,1, 0), 0)` |
| CG9 | `=IF('Stars and Floors'!$A9, IF(CG$1='Stars and Floors'!$C9,1, 0) + IF(CG$1='Stars and Floors'!$D9,1, 0) + IF(CG$1='Stars and Floors'!$E9,1, 0) + IF(CG$1='Stars and Floors'!$F9,1, 0) + IF(CG$1='Stars and Floors'!$G9,1, 0), 0)` |
| CH9 | `=IF('Stars and Floors'!$A9, IF(CH$1='Stars and Floors'!$C9,1, 0) + IF(CH$1='Stars and Floors'!$D9,1, 0) + IF(CH$1='Stars and Floors'!$E9,1, 0) + IF(CH$1='Stars and Floors'!$F9,1, 0) + IF(CH$1='Stars and Floors'!$G9,1, 0), 0)` |
| CI9 | `=IF('Stars and Floors'!$A9, IF(CI$1='Stars and Floors'!$C9,1, 0) + IF(CI$1='Stars and Floors'!$D9,1, 0) + IF(CI$1='Stars and Floors'!$E9,1, 0) + IF(CI$1='Stars and Floors'!$F9,1, 0) + IF(CI$1='Stars and Floors'!$G9,1, 0), 0)` |
| CJ9 | `=IF('Stars and Floors'!$A9, IF(CJ$1='Stars and Floors'!$C9,1, 0) + IF(CJ$1='Stars and Floors'!$D9,1, 0) + IF(CJ$1='Stars and Floors'!$E9,1, 0) + IF(CJ$1='Stars and Floors'!$F9,1, 0) + IF(CJ$1='Stars and Floors'!$G9,1, 0), 0)` |
| CK9 | `=IF('Stars and Floors'!$A9, IF(CK$1='Stars and Floors'!$C9,1, 0) + IF(CK$1='Stars and Floors'!$D9,1, 0) + IF(CK$1='Stars and Floors'!$E9,1, 0) + IF(CK$1='Stars and Floors'!$F9,1, 0) + IF(CK$1='Stars and Floors'!$G9,1, 0), 0)` |
| CL9 | `=IF('Stars and Floors'!$A9, IF(CL$1='Stars and Floors'!$C9,1, 0) + IF(CL$1='Stars and Floors'!$D9,1, 0) + IF(CL$1='Stars and Floors'!$E9,1, 0) + IF(CL$1='Stars and Floors'!$F9,1, 0) + IF(CL$1='Stars and Floors'!$G9,1, 0), 0)` |
| CM9 | `=IF('Stars and Floors'!$A9, IF(CM$1='Stars and Floors'!$C9,1, 0) + IF(CM$1='Stars and Floors'!$D9,1, 0) + IF(CM$1='Stars and Floors'!$E9,1, 0) + IF(CM$1='Stars and Floors'!$F9,1, 0) + IF(CM$1='Stars and Floors'!$G9,1, 0), 0)` |
| CN9 | `=IF('Stars and Floors'!$A9, IF(CN$1='Stars and Floors'!$C9,1, 0) + IF(CN$1='Stars and Floors'!$D9,1, 0) + IF(CN$1='Stars and Floors'!$E9,1, 0) + IF(CN$1='Stars and Floors'!$F9,1, 0) + IF(CN$1='Stars and Floors'!$G9,1, 0), 0)` |
| CO9 | `=IF('Stars and Floors'!$A9, IF(CO$1='Stars and Floors'!$C9,1, 0) + IF(CO$1='Stars and Floors'!$D9,1, 0) + IF(CO$1='Stars and Floors'!$E9,1, 0) + IF(CO$1='Stars and Floors'!$F9,1, 0) + IF(CO$1='Stars and Floors'!$G9,1, 0), 0)` |
| CP9 | `=IF('Stars and Floors'!$A9, IF(CP$1='Stars and Floors'!$C9,1, 0) + IF(CP$1='Stars and Floors'!$D9,1, 0) + IF(CP$1='Stars and Floors'!$E9,1, 0) + IF(CP$1='Stars and Floors'!$F9,1, 0) + IF(CP$1='Stars and Floors'!$G9,1, 0), 0)` |
| CQ9 | `=IF('Stars and Floors'!$A9, IF(CQ$1='Stars and Floors'!$C9,1, 0) + IF(CQ$1='Stars and Floors'!$D9,1, 0) + IF(CQ$1='Stars and Floors'!$E9,1, 0) + IF(CQ$1='Stars and Floors'!$F9,1, 0) + IF(CQ$1='Stars and Floors'!$G9,1, 0), 0)` |
| CR9 | `=IF('Stars and Floors'!$A9, IF(CR$1='Stars and Floors'!$C9,1, 0) + IF(CR$1='Stars and Floors'!$D9,1, 0) + IF(CR$1='Stars and Floors'!$E9,1, 0) + IF(CR$1='Stars and Floors'!$F9,1, 0) + IF(CR$1='Stars and Floors'!$G9,1, 0), 0)` |
| CS9 | `=IF('Stars and Floors'!$A9, IF(CS$1='Stars and Floors'!$C9,1, 0) + IF(CS$1='Stars and Floors'!$D9,1, 0) + IF(CS$1='Stars and Floors'!$E9,1, 0) + IF(CS$1='Stars and Floors'!$F9,1, 0) + IF(CS$1='Stars and Floors'!$G9,1, 0), 0)` |
| CT9 | `=IF('Stars and Floors'!$A9, IF(CT$1='Stars and Floors'!$C9,1, 0) + IF(CT$1='Stars and Floors'!$D9,1, 0) + IF(CT$1='Stars and Floors'!$E9,1, 0) + IF(CT$1='Stars and Floors'!$F9,1, 0) + IF(CT$1='Stars and Floors'!$G9,1, 0), 0)` |
| CU9 | `=IF('Stars and Floors'!$A9, IF(CU$1='Stars and Floors'!$C9,1, 0) + IF(CU$1='Stars and Floors'!$D9,1, 0) + IF(CU$1='Stars and Floors'!$E9,1, 0) + IF(CU$1='Stars and Floors'!$F9,1, 0) + IF(CU$1='Stars and Floors'!$G9,1, 0), 0)` |
| CV9 | `=IF('Stars and Floors'!$A9, IF(CV$1='Stars and Floors'!$C9,1, 0) + IF(CV$1='Stars and Floors'!$D9,1, 0) + IF(CV$1='Stars and Floors'!$E9,1, 0) + IF(CV$1='Stars and Floors'!$F9,1, 0) + IF(CV$1='Stars and Floors'!$G9,1, 0), 0)` |
| CW9 | `=IF('Stars and Floors'!$A9, IF(CW$1='Stars and Floors'!$C9,1, 0) + IF(CW$1='Stars and Floors'!$D9,1, 0) + IF(CW$1='Stars and Floors'!$E9,1, 0) + IF(CW$1='Stars and Floors'!$F9,1, 0) + IF(CW$1='Stars and Floors'!$G9,1, 0), 0)` |
| CX9 | `=IF('Stars and Floors'!$A9, IF(CX$1='Stars and Floors'!$C9,1, 0) + IF(CX$1='Stars and Floors'!$D9,1, 0) + IF(CX$1='Stars and Floors'!$E9,1, 0) + IF(CX$1='Stars and Floors'!$F9,1, 0) + IF(CX$1='Stars and Floors'!$G9,1, 0), 0)` |
| CY9 | `=IF('Stars and Floors'!$A9, IF(CY$1='Stars and Floors'!$C9,1, 0) + IF(CY$1='Stars and Floors'!$D9,1, 0) + IF(CY$1='Stars and Floors'!$E9,1, 0) + IF(CY$1='Stars and Floors'!$F9,1, 0) + IF(CY$1='Stars and Floors'!$G9,1, 0), 0)` |
| CZ9 | `=IF('Stars and Floors'!$A9, IF(CZ$1='Stars and Floors'!$C9,1, 0) + IF(CZ$1='Stars and Floors'!$D9,1, 0) + IF(CZ$1='Stars and Floors'!$E9,1, 0) + IF(CZ$1='Stars and Floors'!$F9,1, 0) + IF(CZ$1='Stars and Floors'!$G9,1, 0), 0)` |
| DA9 | `=IF('Stars and Floors'!$A9, IF(DA$1='Stars and Floors'!$C9,1, 0) + IF(DA$1='Stars and Floors'!$D9,1, 0) + IF(DA$1='Stars and Floors'!$E9,1, 0) + IF(DA$1='Stars and Floors'!$F9,1, 0) + IF(DA$1='Stars and Floors'!$G9,1, 0), 0)` |
| DB9 | `=IF('Stars and Floors'!$A9, IF(DB$1='Stars and Floors'!$C9,1, 0) + IF(DB$1='Stars and Floors'!$D9,1, 0) + IF(DB$1='Stars and Floors'!$E9,1, 0) + IF(DB$1='Stars and Floors'!$F9,1, 0) + IF(DB$1='Stars and Floors'!$G9,1, 0), 0)` |
| DC9 | `=IF('Stars and Floors'!$A9, IF(DC$1='Stars and Floors'!$C9,1, 0) + IF(DC$1='Stars and Floors'!$D9,1, 0) + IF(DC$1='Stars and Floors'!$E9,1, 0) + IF(DC$1='Stars and Floors'!$F9,1, 0) + IF(DC$1='Stars and Floors'!$G9,1, 0), 0)` |
| DD9 | `=IF('Stars and Floors'!$A9, IF(DD$1='Stars and Floors'!$C9,1, 0) + IF(DD$1='Stars and Floors'!$D9,1, 0) + IF(DD$1='Stars and Floors'!$E9,1, 0) + IF(DD$1='Stars and Floors'!$F9,1, 0) + IF(DD$1='Stars and Floors'!$G9,1, 0), 0)` |
| DE9 | `=IF('Stars and Floors'!$A9, IF(DE$1='Stars and Floors'!$C9,1, 0) + IF(DE$1='Stars and Floors'!$D9,1, 0) + IF(DE$1='Stars and Floors'!$E9,1, 0) + IF(DE$1='Stars and Floors'!$F9,1, 0) + IF(DE$1='Stars and Floors'!$G9,1, 0), 0)` |
| DF9 | `=IF('Stars and Floors'!$A9, IF(DF$1='Stars and Floors'!$C9,1, 0) + IF(DF$1='Stars and Floors'!$D9,1, 0) + IF(DF$1='Stars and Floors'!$E9,1, 0) + IF(DF$1='Stars and Floors'!$F9,1, 0) + IF(DF$1='Stars and Floors'!$G9,1, 0), 0)` |
| DG9 | `=IF('Stars and Floors'!$A9, IF(DG$1='Stars and Floors'!$C9,1, 0) + IF(DG$1='Stars and Floors'!$D9,1, 0) + IF(DG$1='Stars and Floors'!$E9,1, 0) + IF(DG$1='Stars and Floors'!$F9,1, 0) + IF(DG$1='Stars and Floors'!$G9,1, 0), 0)` |
| DH9 | `=IF('Stars and Floors'!$A9, IF(DH$1='Stars and Floors'!$C9,1, 0) + IF(DH$1='Stars and Floors'!$D9,1, 0) + IF(DH$1='Stars and Floors'!$E9,1, 0) + IF(DH$1='Stars and Floors'!$F9,1, 0) + IF(DH$1='Stars and Floors'!$G9,1, 0), 0)` |
| DI9 | `=IF('Stars and Floors'!$A9, IF(DI$1='Stars and Floors'!$C9,1, 0) + IF(DI$1='Stars and Floors'!$D9,1, 0) + IF(DI$1='Stars and Floors'!$E9,1, 0) + IF(DI$1='Stars and Floors'!$F9,1, 0) + IF(DI$1='Stars and Floors'!$G9,1, 0), 0)` |
| DJ9 | `=IF('Stars and Floors'!$A9, IF(DJ$1='Stars and Floors'!$C9,1, 0) + IF(DJ$1='Stars and Floors'!$D9,1, 0) + IF(DJ$1='Stars and Floors'!$E9,1, 0) + IF(DJ$1='Stars and Floors'!$F9,1, 0) + IF(DJ$1='Stars and Floors'!$G9,1, 0), 0)` |
| DK9 | `=IF('Stars and Floors'!$A9, IF(DK$1='Stars and Floors'!$C9,1, 0) + IF(DK$1='Stars and Floors'!$D9,1, 0) + IF(DK$1='Stars and Floors'!$E9,1, 0) + IF(DK$1='Stars and Floors'!$F9,1, 0) + IF(DK$1='Stars and Floors'!$G9,1, 0), 0)` |
| DL9 | `=IF('Stars and Floors'!$A9, IF(DL$1='Stars and Floors'!$C9,1, 0) + IF(DL$1='Stars and Floors'!$D9,1, 0) + IF(DL$1='Stars and Floors'!$E9,1, 0) + IF(DL$1='Stars and Floors'!$F9,1, 0) + IF(DL$1='Stars and Floors'!$G9,1, 0), 0)` |
| DM9 | `=IF('Stars and Floors'!$A9, IF(DM$1='Stars and Floors'!$C9,1, 0) + IF(DM$1='Stars and Floors'!$D9,1, 0) + IF(DM$1='Stars and Floors'!$E9,1, 0) + IF(DM$1='Stars and Floors'!$F9,1, 0) + IF(DM$1='Stars and Floors'!$G9,1, 0), 0)` |
| DN9 | `=IF('Stars and Floors'!$A9, IF(DN$1='Stars and Floors'!$C9,1, 0) + IF(DN$1='Stars and Floors'!$D9,1, 0) + IF(DN$1='Stars and Floors'!$E9,1, 0) + IF(DN$1='Stars and Floors'!$F9,1, 0) + IF(DN$1='Stars and Floors'!$G9,1, 0), 0)` |
| DO9 | `=IF('Stars and Floors'!$A9, IF(DO$1='Stars and Floors'!$C9,1, 0) + IF(DO$1='Stars and Floors'!$D9,1, 0) + IF(DO$1='Stars and Floors'!$E9,1, 0) + IF(DO$1='Stars and Floors'!$F9,1, 0) + IF(DO$1='Stars and Floors'!$G9,1, 0), 0)` |
| DP9 | `=IF('Stars and Floors'!$A9, IF(DP$1='Stars and Floors'!$C9,1, 0) + IF(DP$1='Stars and Floors'!$D9,1, 0) + IF(DP$1='Stars and Floors'!$E9,1, 0) + IF(DP$1='Stars and Floors'!$F9,1, 0) + IF(DP$1='Stars and Floors'!$G9,1, 0), 0)` |
| DQ9 | `=IF('Stars and Floors'!$A9, IF(DQ$1='Stars and Floors'!$C9,1, 0) + IF(DQ$1='Stars and Floors'!$D9,1, 0) + IF(DQ$1='Stars and Floors'!$E9,1, 0) + IF(DQ$1='Stars and Floors'!$F9,1, 0) + IF(DQ$1='Stars and Floors'!$G9,1, 0), 0)` |
| B10 | `=IF('Stars and Floors'!$A10, IF(B$1='Stars and Floors'!$C10,1, 0) + IF(B$1='Stars and Floors'!$D10,1, 0) + IF(B$1='Stars and Floors'!$E10,1, 0) + IF(B$1='Stars and Floors'!$F10,1, 0) + IF(B$1='Stars and Floors'!$G10,1, 0), 0)` |
| C10 | `=IF('Stars and Floors'!$A10, IF(C$1='Stars and Floors'!$C10,1, 0) + IF(C$1='Stars and Floors'!$D10,1, 0) + IF(C$1='Stars and Floors'!$E10,1, 0) + IF(C$1='Stars and Floors'!$F10,1, 0) + IF(C$1='Stars and Floors'!$G10,1, 0), 0)` |
| D10 | `=IF('Stars and Floors'!$A10, IF(D$1='Stars and Floors'!$C10,1, 0) + IF(D$1='Stars and Floors'!$D10,1, 0) + IF(D$1='Stars and Floors'!$E10,1, 0) + IF(D$1='Stars and Floors'!$F10,1, 0) + IF(D$1='Stars and Floors'!$G10,1, 0), 0)` |
| E10 | `=IF('Stars and Floors'!$A10, IF(E$1='Stars and Floors'!$C10,1, 0) + IF(E$1='Stars and Floors'!$D10,1, 0) + IF(E$1='Stars and Floors'!$E10,1, 0) + IF(E$1='Stars and Floors'!$F10,1, 0) + IF(E$1='Stars and Floors'!$G10,1, 0), 0)` |
| F10 | `=IF('Stars and Floors'!$A10, IF(F$1='Stars and Floors'!$C10,1, 0) + IF(F$1='Stars and Floors'!$D10,1, 0) + IF(F$1='Stars and Floors'!$E10,1, 0) + IF(F$1='Stars and Floors'!$F10,1, 0) + IF(F$1='Stars and Floors'!$G10,1, 0), 0)` |
| G10 | `=IF('Stars and Floors'!$A10, IF(G$1='Stars and Floors'!$C10,1, 0) + IF(G$1='Stars and Floors'!$D10,1, 0) + IF(G$1='Stars and Floors'!$E10,1, 0) + IF(G$1='Stars and Floors'!$F10,1, 0) + IF(G$1='Stars and Floors'!$G10,1, 0), 0)` |
| H10 | `=IF('Stars and Floors'!$A10, IF(H$1='Stars and Floors'!$C10,1, 0) + IF(H$1='Stars and Floors'!$D10,1, 0) + IF(H$1='Stars and Floors'!$E10,1, 0) + IF(H$1='Stars and Floors'!$F10,1, 0) + IF(H$1='Stars and Floors'!$G10,1, 0), 0)` |
| I10 | `=IF('Stars and Floors'!$A10, IF(I$1='Stars and Floors'!$C10,1, 0) + IF(I$1='Stars and Floors'!$D10,1, 0) + IF(I$1='Stars and Floors'!$E10,1, 0) + IF(I$1='Stars and Floors'!$F10,1, 0) + IF(I$1='Stars and Floors'!$G10,1, 0), 0)` |
| J10 | `=IF('Stars and Floors'!$A10, IF(J$1='Stars and Floors'!$C10,1, 0) + IF(J$1='Stars and Floors'!$D10,1, 0) + IF(J$1='Stars and Floors'!$E10,1, 0) + IF(J$1='Stars and Floors'!$F10,1, 0) + IF(J$1='Stars and Floors'!$G10,1, 0), 0)` |
| K10 | `=IF('Stars and Floors'!$A10, IF(K$1='Stars and Floors'!$C10,1, 0) + IF(K$1='Stars and Floors'!$D10,1, 0) + IF(K$1='Stars and Floors'!$E10,1, 0) + IF(K$1='Stars and Floors'!$F10,1, 0) + IF(K$1='Stars and Floors'!$G10,1, 0), 0)` |
| L10 | `=IF('Stars and Floors'!$A10, IF(L$1='Stars and Floors'!$C10,1, 0) + IF(L$1='Stars and Floors'!$D10,1, 0) + IF(L$1='Stars and Floors'!$E10,1, 0) + IF(L$1='Stars and Floors'!$F10,1, 0) + IF(L$1='Stars and Floors'!$G10,1, 0), 0)` |
| M10 | `=IF('Stars and Floors'!$A10, IF(M$1='Stars and Floors'!$C10,1, 0) + IF(M$1='Stars and Floors'!$D10,1, 0) + IF(M$1='Stars and Floors'!$E10,1, 0) + IF(M$1='Stars and Floors'!$F10,1, 0) + IF(M$1='Stars and Floors'!$G10,1, 0), 0)` |
| N10 | `=IF('Stars and Floors'!$A10, IF(N$1='Stars and Floors'!$C10,1, 0) + IF(N$1='Stars and Floors'!$D10,1, 0) + IF(N$1='Stars and Floors'!$E10,1, 0) + IF(N$1='Stars and Floors'!$F10,1, 0) + IF(N$1='Stars and Floors'!$G10,1, 0), 0)` |
| O10 | `=IF('Stars and Floors'!$A10, IF(O$1='Stars and Floors'!$C10,1, 0) + IF(O$1='Stars and Floors'!$D10,1, 0) + IF(O$1='Stars and Floors'!$E10,1, 0) + IF(O$1='Stars and Floors'!$F10,1, 0) + IF(O$1='Stars and Floors'!$G10,1, 0), 0)` |
| P10 | `=IF('Stars and Floors'!$A10, IF(P$1='Stars and Floors'!$C10,1, 0) + IF(P$1='Stars and Floors'!$D10,1, 0) + IF(P$1='Stars and Floors'!$E10,1, 0) + IF(P$1='Stars and Floors'!$F10,1, 0) + IF(P$1='Stars and Floors'!$G10,1, 0), 0)` |
| Q10 | `=IF('Stars and Floors'!$A10, IF(Q$1='Stars and Floors'!$C10,1, 0) + IF(Q$1='Stars and Floors'!$D10,1, 0) + IF(Q$1='Stars and Floors'!$E10,1, 0) + IF(Q$1='Stars and Floors'!$F10,1, 0) + IF(Q$1='Stars and Floors'!$G10,1, 0), 0)` |
| R10 | `=IF('Stars and Floors'!$A10, IF(R$1='Stars and Floors'!$C10,1, 0) + IF(R$1='Stars and Floors'!$D10,1, 0) + IF(R$1='Stars and Floors'!$E10,1, 0) + IF(R$1='Stars and Floors'!$F10,1, 0) + IF(R$1='Stars and Floors'!$G10,1, 0), 0)` |
| S10 | `=IF('Stars and Floors'!$A10, IF(S$1='Stars and Floors'!$C10,1, 0) + IF(S$1='Stars and Floors'!$D10,1, 0) + IF(S$1='Stars and Floors'!$E10,1, 0) + IF(S$1='Stars and Floors'!$F10,1, 0) + IF(S$1='Stars and Floors'!$G10,1, 0), 0)` |
| T10 | `=IF('Stars and Floors'!$A10, IF(T$1='Stars and Floors'!$C10,1, 0) + IF(T$1='Stars and Floors'!$D10,1, 0) + IF(T$1='Stars and Floors'!$E10,1, 0) + IF(T$1='Stars and Floors'!$F10,1, 0) + IF(T$1='Stars and Floors'!$G10,1, 0), 0)` |
| U10 | `=IF('Stars and Floors'!$A10, IF(U$1='Stars and Floors'!$C10,1, 0) + IF(U$1='Stars and Floors'!$D10,1, 0) + IF(U$1='Stars and Floors'!$E10,1, 0) + IF(U$1='Stars and Floors'!$F10,1, 0) + IF(U$1='Stars and Floors'!$G10,1, 0), 0)` |
| V10 | `=IF('Stars and Floors'!$A10, IF(V$1='Stars and Floors'!$C10,1, 0) + IF(V$1='Stars and Floors'!$D10,1, 0) + IF(V$1='Stars and Floors'!$E10,1, 0) + IF(V$1='Stars and Floors'!$F10,1, 0) + IF(V$1='Stars and Floors'!$G10,1, 0), 0)` |
| W10 | `=IF('Stars and Floors'!$A10, IF(W$1='Stars and Floors'!$C10,1, 0) + IF(W$1='Stars and Floors'!$D10,1, 0) + IF(W$1='Stars and Floors'!$E10,1, 0) + IF(W$1='Stars and Floors'!$F10,1, 0) + IF(W$1='Stars and Floors'!$G10,1, 0), 0)` |
| X10 | `=IF('Stars and Floors'!$A10, IF(X$1='Stars and Floors'!$C10,1, 0) + IF(X$1='Stars and Floors'!$D10,1, 0) + IF(X$1='Stars and Floors'!$E10,1, 0) + IF(X$1='Stars and Floors'!$F10,1, 0) + IF(X$1='Stars and Floors'!$G10,1, 0), 0)` |
| Y10 | `=IF('Stars and Floors'!$A10, IF(Y$1='Stars and Floors'!$C10,1, 0) + IF(Y$1='Stars and Floors'!$D10,1, 0) + IF(Y$1='Stars and Floors'!$E10,1, 0) + IF(Y$1='Stars and Floors'!$F10,1, 0) + IF(Y$1='Stars and Floors'!$G10,1, 0), 0)` |
| Z10 | `=IF('Stars and Floors'!$A10, IF(Z$1='Stars and Floors'!$C10,1, 0) + IF(Z$1='Stars and Floors'!$D10,1, 0) + IF(Z$1='Stars and Floors'!$E10,1, 0) + IF(Z$1='Stars and Floors'!$F10,1, 0) + IF(Z$1='Stars and Floors'!$G10,1, 0), 0)` |
| AA10 | `=IF('Stars and Floors'!$A10, IF(AA$1='Stars and Floors'!$C10,1, 0) + IF(AA$1='Stars and Floors'!$D10,1, 0) + IF(AA$1='Stars and Floors'!$E10,1, 0) + IF(AA$1='Stars and Floors'!$F10,1, 0) + IF(AA$1='Stars and Floors'!$G10,1, 0), 0)` |
| AB10 | `=IF('Stars and Floors'!$A10, IF(AB$1='Stars and Floors'!$C10,1, 0) + IF(AB$1='Stars and Floors'!$D10,1, 0) + IF(AB$1='Stars and Floors'!$E10,1, 0) + IF(AB$1='Stars and Floors'!$F10,1, 0) + IF(AB$1='Stars and Floors'!$G10,1, 0), 0)` |
| AC10 | `=IF('Stars and Floors'!$A10, IF(AC$1='Stars and Floors'!$C10,1, 0) + IF(AC$1='Stars and Floors'!$D10,1, 0) + IF(AC$1='Stars and Floors'!$E10,1, 0) + IF(AC$1='Stars and Floors'!$F10,1, 0) + IF(AC$1='Stars and Floors'!$G10,1, 0), 0)` |
| AD10 | `=IF('Stars and Floors'!$A10, IF(AD$1='Stars and Floors'!$C10,1, 0) + IF(AD$1='Stars and Floors'!$D10,1, 0) + IF(AD$1='Stars and Floors'!$E10,1, 0) + IF(AD$1='Stars and Floors'!$F10,1, 0) + IF(AD$1='Stars and Floors'!$G10,1, 0), 0)` |
| AE10 | `=IF('Stars and Floors'!$A10, IF(AE$1='Stars and Floors'!$C10,1, 0) + IF(AE$1='Stars and Floors'!$D10,1, 0) + IF(AE$1='Stars and Floors'!$E10,1, 0) + IF(AE$1='Stars and Floors'!$F10,1, 0) + IF(AE$1='Stars and Floors'!$G10,1, 0), 0)` |
| AF10 | `=IF('Stars and Floors'!$A10, IF(AF$1='Stars and Floors'!$C10,1, 0) + IF(AF$1='Stars and Floors'!$D10,1, 0) + IF(AF$1='Stars and Floors'!$E10,1, 0) + IF(AF$1='Stars and Floors'!$F10,1, 0) + IF(AF$1='Stars and Floors'!$G10,1, 0), 0)` |
| AG10 | `=IF('Stars and Floors'!$A10, IF(AG$1='Stars and Floors'!$C10,1, 0) + IF(AG$1='Stars and Floors'!$D10,1, 0) + IF(AG$1='Stars and Floors'!$E10,1, 0) + IF(AG$1='Stars and Floors'!$F10,1, 0) + IF(AG$1='Stars and Floors'!$G10,1, 0), 0)` |
| AH10 | `=IF('Stars and Floors'!$A10, IF(AH$1='Stars and Floors'!$C10,1, 0) + IF(AH$1='Stars and Floors'!$D10,1, 0) + IF(AH$1='Stars and Floors'!$E10,1, 0) + IF(AH$1='Stars and Floors'!$F10,1, 0) + IF(AH$1='Stars and Floors'!$G10,1, 0), 0)` |
| AI10 | `=IF('Stars and Floors'!$A10, IF(AI$1='Stars and Floors'!$C10,1, 0) + IF(AI$1='Stars and Floors'!$D10,1, 0) + IF(AI$1='Stars and Floors'!$E10,1, 0) + IF(AI$1='Stars and Floors'!$F10,1, 0) + IF(AI$1='Stars and Floors'!$G10,1, 0), 0)` |
| AJ10 | `=IF('Stars and Floors'!$A10, IF(AJ$1='Stars and Floors'!$C10,1, 0) + IF(AJ$1='Stars and Floors'!$D10,1, 0) + IF(AJ$1='Stars and Floors'!$E10,1, 0) + IF(AJ$1='Stars and Floors'!$F10,1, 0) + IF(AJ$1='Stars and Floors'!$G10,1, 0), 0)` |
| AK10 | `=IF('Stars and Floors'!$A10, IF(AK$1='Stars and Floors'!$C10,1, 0) + IF(AK$1='Stars and Floors'!$D10,1, 0) + IF(AK$1='Stars and Floors'!$E10,1, 0) + IF(AK$1='Stars and Floors'!$F10,1, 0) + IF(AK$1='Stars and Floors'!$G10,1, 0), 0)` |
| AL10 | `=IF('Stars and Floors'!$A10, IF(AL$1='Stars and Floors'!$C10,1, 0) + IF(AL$1='Stars and Floors'!$D10,1, 0) + IF(AL$1='Stars and Floors'!$E10,1, 0) + IF(AL$1='Stars and Floors'!$F10,1, 0) + IF(AL$1='Stars and Floors'!$G10,1, 0), 0)` |
| AM10 | `=IF('Stars and Floors'!$A10, IF(AM$1='Stars and Floors'!$C10,1, 0) + IF(AM$1='Stars and Floors'!$D10,1, 0) + IF(AM$1='Stars and Floors'!$E10,1, 0) + IF(AM$1='Stars and Floors'!$F10,1, 0) + IF(AM$1='Stars and Floors'!$G10,1, 0), 0)` |
| AN10 | `=IF('Stars and Floors'!$A10, IF(AN$1='Stars and Floors'!$C10,1, 0) + IF(AN$1='Stars and Floors'!$D10,1, 0) + IF(AN$1='Stars and Floors'!$E10,1, 0) + IF(AN$1='Stars and Floors'!$F10,1, 0) + IF(AN$1='Stars and Floors'!$G10,1, 0), 0)` |
| AO10 | `=IF('Stars and Floors'!$A10, IF(AO$1='Stars and Floors'!$C10,1, 0) + IF(AO$1='Stars and Floors'!$D10,1, 0) + IF(AO$1='Stars and Floors'!$E10,1, 0) + IF(AO$1='Stars and Floors'!$F10,1, 0) + IF(AO$1='Stars and Floors'!$G10,1, 0), 0)` |
| AP10 | `=IF('Stars and Floors'!$A10, IF(AP$1='Stars and Floors'!$C10,1, 0) + IF(AP$1='Stars and Floors'!$D10,1, 0) + IF(AP$1='Stars and Floors'!$E10,1, 0) + IF(AP$1='Stars and Floors'!$F10,1, 0) + IF(AP$1='Stars and Floors'!$G10,1, 0), 0)` |
| AQ10 | `=IF('Stars and Floors'!$A10, IF(AQ$1='Stars and Floors'!$C10,1, 0) + IF(AQ$1='Stars and Floors'!$D10,1, 0) + IF(AQ$1='Stars and Floors'!$E10,1, 0) + IF(AQ$1='Stars and Floors'!$F10,1, 0) + IF(AQ$1='Stars and Floors'!$G10,1, 0), 0)` |
| AR10 | `=IF('Stars and Floors'!$A10, IF(AR$1='Stars and Floors'!$C10,1, 0) + IF(AR$1='Stars and Floors'!$D10,1, 0) + IF(AR$1='Stars and Floors'!$E10,1, 0) + IF(AR$1='Stars and Floors'!$F10,1, 0) + IF(AR$1='Stars and Floors'!$G10,1, 0), 0)` |
| AS10 | `=IF('Stars and Floors'!$A10, IF(AS$1='Stars and Floors'!$C10,1, 0) + IF(AS$1='Stars and Floors'!$D10,1, 0) + IF(AS$1='Stars and Floors'!$E10,1, 0) + IF(AS$1='Stars and Floors'!$F10,1, 0) + IF(AS$1='Stars and Floors'!$G10,1, 0), 0)` |
| AT10 | `=IF('Stars and Floors'!$A10, IF(AT$1='Stars and Floors'!$C10,1, 0) + IF(AT$1='Stars and Floors'!$D10,1, 0) + IF(AT$1='Stars and Floors'!$E10,1, 0) + IF(AT$1='Stars and Floors'!$F10,1, 0) + IF(AT$1='Stars and Floors'!$G10,1, 0), 0)` |
| AU10 | `=IF('Stars and Floors'!$A10, IF(AU$1='Stars and Floors'!$C10,1, 0) + IF(AU$1='Stars and Floors'!$D10,1, 0) + IF(AU$1='Stars and Floors'!$E10,1, 0) + IF(AU$1='Stars and Floors'!$F10,1, 0) + IF(AU$1='Stars and Floors'!$G10,1, 0), 0)` |
| AV10 | `=IF('Stars and Floors'!$A10, IF(AV$1='Stars and Floors'!$C10,1, 0) + IF(AV$1='Stars and Floors'!$D10,1, 0) + IF(AV$1='Stars and Floors'!$E10,1, 0) + IF(AV$1='Stars and Floors'!$F10,1, 0) + IF(AV$1='Stars and Floors'!$G10,1, 0), 0)` |
| AW10 | `=IF('Stars and Floors'!$A10, IF(AW$1='Stars and Floors'!$C10,1, 0) + IF(AW$1='Stars and Floors'!$D10,1, 0) + IF(AW$1='Stars and Floors'!$E10,1, 0) + IF(AW$1='Stars and Floors'!$F10,1, 0) + IF(AW$1='Stars and Floors'!$G10,1, 0), 0)` |
| AX10 | `=IF('Stars and Floors'!$A10, IF(AX$1='Stars and Floors'!$C10,1, 0) + IF(AX$1='Stars and Floors'!$D10,1, 0) + IF(AX$1='Stars and Floors'!$E10,1, 0) + IF(AX$1='Stars and Floors'!$F10,1, 0) + IF(AX$1='Stars and Floors'!$G10,1, 0), 0)` |
| AY10 | `=IF('Stars and Floors'!$A10, IF(AY$1='Stars and Floors'!$C10,1, 0) + IF(AY$1='Stars and Floors'!$D10,1, 0) + IF(AY$1='Stars and Floors'!$E10,1, 0) + IF(AY$1='Stars and Floors'!$F10,1, 0) + IF(AY$1='Stars and Floors'!$G10,1, 0), 0)` |
| AZ10 | `=IF('Stars and Floors'!$A10, IF(AZ$1='Stars and Floors'!$C10,1, 0) + IF(AZ$1='Stars and Floors'!$D10,1, 0) + IF(AZ$1='Stars and Floors'!$E10,1, 0) + IF(AZ$1='Stars and Floors'!$F10,1, 0) + IF(AZ$1='Stars and Floors'!$G10,1, 0), 0)` |
| BA10 | `=IF('Stars and Floors'!$A10, IF(BA$1='Stars and Floors'!$C10,1, 0) + IF(BA$1='Stars and Floors'!$D10,1, 0) + IF(BA$1='Stars and Floors'!$E10,1, 0) + IF(BA$1='Stars and Floors'!$F10,1, 0) + IF(BA$1='Stars and Floors'!$G10,1, 0), 0)` |
| BB10 | `=IF('Stars and Floors'!$A10, IF(BB$1='Stars and Floors'!$C10,1, 0) + IF(BB$1='Stars and Floors'!$D10,1, 0) + IF(BB$1='Stars and Floors'!$E10,1, 0) + IF(BB$1='Stars and Floors'!$F10,1, 0) + IF(BB$1='Stars and Floors'!$G10,1, 0), 0)` |
| BC10 | `=IF('Stars and Floors'!$A10, IF(BC$1='Stars and Floors'!$C10,1, 0) + IF(BC$1='Stars and Floors'!$D10,1, 0) + IF(BC$1='Stars and Floors'!$E10,1, 0) + IF(BC$1='Stars and Floors'!$F10,1, 0) + IF(BC$1='Stars and Floors'!$G10,1, 0), 0)` |
| BD10 | `=IF('Stars and Floors'!$A10, IF(BD$1='Stars and Floors'!$C10,1, 0) + IF(BD$1='Stars and Floors'!$D10,1, 0) + IF(BD$1='Stars and Floors'!$E10,1, 0) + IF(BD$1='Stars and Floors'!$F10,1, 0) + IF(BD$1='Stars and Floors'!$G10,1, 0), 0)` |
| BE10 | `=IF('Stars and Floors'!$A10, IF(BE$1='Stars and Floors'!$C10,1, 0) + IF(BE$1='Stars and Floors'!$D10,1, 0) + IF(BE$1='Stars and Floors'!$E10,1, 0) + IF(BE$1='Stars and Floors'!$F10,1, 0) + IF(BE$1='Stars and Floors'!$G10,1, 0), 0)` |
| BF10 | `=IF('Stars and Floors'!$A10, IF(BF$1='Stars and Floors'!$C10,1, 0) + IF(BF$1='Stars and Floors'!$D10,1, 0) + IF(BF$1='Stars and Floors'!$E10,1, 0) + IF(BF$1='Stars and Floors'!$F10,1, 0) + IF(BF$1='Stars and Floors'!$G10,1, 0), 0)` |
| BG10 | `=IF('Stars and Floors'!$A10, IF(BG$1='Stars and Floors'!$C10,1, 0) + IF(BG$1='Stars and Floors'!$D10,1, 0) + IF(BG$1='Stars and Floors'!$E10,1, 0) + IF(BG$1='Stars and Floors'!$F10,1, 0) + IF(BG$1='Stars and Floors'!$G10,1, 0), 0)` |
| BH10 | `=IF('Stars and Floors'!$A10, IF(BH$1='Stars and Floors'!$C10,1, 0) + IF(BH$1='Stars and Floors'!$D10,1, 0) + IF(BH$1='Stars and Floors'!$E10,1, 0) + IF(BH$1='Stars and Floors'!$F10,1, 0) + IF(BH$1='Stars and Floors'!$G10,1, 0), 0)` |
| BI10 | `=IF('Stars and Floors'!$A10, IF(BI$1='Stars and Floors'!$C10,1, 0) + IF(BI$1='Stars and Floors'!$D10,1, 0) + IF(BI$1='Stars and Floors'!$E10,1, 0) + IF(BI$1='Stars and Floors'!$F10,1, 0) + IF(BI$1='Stars and Floors'!$G10,1, 0), 0)` |
| BJ10 | `=IF('Stars and Floors'!$A10, IF(BJ$1='Stars and Floors'!$C10,1, 0) + IF(BJ$1='Stars and Floors'!$D10,1, 0) + IF(BJ$1='Stars and Floors'!$E10,1, 0) + IF(BJ$1='Stars and Floors'!$F10,1, 0) + IF(BJ$1='Stars and Floors'!$G10,1, 0), 0)` |
| BK10 | `=IF('Stars and Floors'!$A10, IF(BK$1='Stars and Floors'!$C10,1, 0) + IF(BK$1='Stars and Floors'!$D10,1, 0) + IF(BK$1='Stars and Floors'!$E10,1, 0) + IF(BK$1='Stars and Floors'!$F10,1, 0) + IF(BK$1='Stars and Floors'!$G10,1, 0), 0)` |
| BL10 | `=IF('Stars and Floors'!$A10, IF(BL$1='Stars and Floors'!$C10,1, 0) + IF(BL$1='Stars and Floors'!$D10,1, 0) + IF(BL$1='Stars and Floors'!$E10,1, 0) + IF(BL$1='Stars and Floors'!$F10,1, 0) + IF(BL$1='Stars and Floors'!$G10,1, 0), 0)` |
| BM10 | `=IF('Stars and Floors'!$A10, IF(BM$1='Stars and Floors'!$C10,1, 0) + IF(BM$1='Stars and Floors'!$D10,1, 0) + IF(BM$1='Stars and Floors'!$E10,1, 0) + IF(BM$1='Stars and Floors'!$F10,1, 0) + IF(BM$1='Stars and Floors'!$G10,1, 0), 0)` |
| BN10 | `=IF('Stars and Floors'!$A10, IF(BN$1='Stars and Floors'!$C10,1, 0) + IF(BN$1='Stars and Floors'!$D10,1, 0) + IF(BN$1='Stars and Floors'!$E10,1, 0) + IF(BN$1='Stars and Floors'!$F10,1, 0) + IF(BN$1='Stars and Floors'!$G10,1, 0), 0)` |
| BO10 | `=IF('Stars and Floors'!$A10, IF(BO$1='Stars and Floors'!$C10,1, 0) + IF(BO$1='Stars and Floors'!$D10,1, 0) + IF(BO$1='Stars and Floors'!$E10,1, 0) + IF(BO$1='Stars and Floors'!$F10,1, 0) + IF(BO$1='Stars and Floors'!$G10,1, 0), 0)` |
| BP10 | `=IF('Stars and Floors'!$A10, IF(BP$1='Stars and Floors'!$C10,1, 0) + IF(BP$1='Stars and Floors'!$D10,1, 0) + IF(BP$1='Stars and Floors'!$E10,1, 0) + IF(BP$1='Stars and Floors'!$F10,1, 0) + IF(BP$1='Stars and Floors'!$G10,1, 0), 0)` |
| BQ10 | `=IF('Stars and Floors'!$A10, IF(BQ$1='Stars and Floors'!$C10,1, 0) + IF(BQ$1='Stars and Floors'!$D10,1, 0) + IF(BQ$1='Stars and Floors'!$E10,1, 0) + IF(BQ$1='Stars and Floors'!$F10,1, 0) + IF(BQ$1='Stars and Floors'!$G10,1, 0), 0)` |
| BR10 | `=IF('Stars and Floors'!$A10, IF(BR$1='Stars and Floors'!$C10,1, 0) + IF(BR$1='Stars and Floors'!$D10,1, 0) + IF(BR$1='Stars and Floors'!$E10,1, 0) + IF(BR$1='Stars and Floors'!$F10,1, 0) + IF(BR$1='Stars and Floors'!$G10,1, 0), 0)` |
| BS10 | `=IF('Stars and Floors'!$A10, IF(BS$1='Stars and Floors'!$C10,1, 0) + IF(BS$1='Stars and Floors'!$D10,1, 0) + IF(BS$1='Stars and Floors'!$E10,1, 0) + IF(BS$1='Stars and Floors'!$F10,1, 0) + IF(BS$1='Stars and Floors'!$G10,1, 0), 0)` |
| BT10 | `=IF('Stars and Floors'!$A10, IF(BT$1='Stars and Floors'!$C10,1, 0) + IF(BT$1='Stars and Floors'!$D10,1, 0) + IF(BT$1='Stars and Floors'!$E10,1, 0) + IF(BT$1='Stars and Floors'!$F10,1, 0) + IF(BT$1='Stars and Floors'!$G10,1, 0), 0)` |
| BU10 | `=IF('Stars and Floors'!$A10, IF(BU$1='Stars and Floors'!$C10,1, 0) + IF(BU$1='Stars and Floors'!$D10,1, 0) + IF(BU$1='Stars and Floors'!$E10,1, 0) + IF(BU$1='Stars and Floors'!$F10,1, 0) + IF(BU$1='Stars and Floors'!$G10,1, 0), 0)` |
| BV10 | `=IF('Stars and Floors'!$A10, IF(BV$1='Stars and Floors'!$C10,1, 0) + IF(BV$1='Stars and Floors'!$D10,1, 0) + IF(BV$1='Stars and Floors'!$E10,1, 0) + IF(BV$1='Stars and Floors'!$F10,1, 0) + IF(BV$1='Stars and Floors'!$G10,1, 0), 0)` |
| BW10 | `=IF('Stars and Floors'!$A10, IF(BW$1='Stars and Floors'!$C10,1, 0) + IF(BW$1='Stars and Floors'!$D10,1, 0) + IF(BW$1='Stars and Floors'!$E10,1, 0) + IF(BW$1='Stars and Floors'!$F10,1, 0) + IF(BW$1='Stars and Floors'!$G10,1, 0), 0)` |
| BX10 | `=IF('Stars and Floors'!$A10, IF(BX$1='Stars and Floors'!$C10,1, 0) + IF(BX$1='Stars and Floors'!$D10,1, 0) + IF(BX$1='Stars and Floors'!$E10,1, 0) + IF(BX$1='Stars and Floors'!$F10,1, 0) + IF(BX$1='Stars and Floors'!$G10,1, 0), 0)` |
| BY10 | `=IF('Stars and Floors'!$A10, IF(BY$1='Stars and Floors'!$C10,1, 0) + IF(BY$1='Stars and Floors'!$D10,1, 0) + IF(BY$1='Stars and Floors'!$E10,1, 0) + IF(BY$1='Stars and Floors'!$F10,1, 0) + IF(BY$1='Stars and Floors'!$G10,1, 0), 0)` |
| BZ10 | `=IF('Stars and Floors'!$A10, IF(BZ$1='Stars and Floors'!$C10,1, 0) + IF(BZ$1='Stars and Floors'!$D10,1, 0) + IF(BZ$1='Stars and Floors'!$E10,1, 0) + IF(BZ$1='Stars and Floors'!$F10,1, 0) + IF(BZ$1='Stars and Floors'!$G10,1, 0), 0)` |
| CA10 | `=IF('Stars and Floors'!$A10, IF(CA$1='Stars and Floors'!$C10,1, 0) + IF(CA$1='Stars and Floors'!$D10,1, 0) + IF(CA$1='Stars and Floors'!$E10,1, 0) + IF(CA$1='Stars and Floors'!$F10,1, 0) + IF(CA$1='Stars and Floors'!$G10,1, 0), 0)` |
| CB10 | `=IF('Stars and Floors'!$A10, IF(CB$1='Stars and Floors'!$C10,1, 0) + IF(CB$1='Stars and Floors'!$D10,1, 0) + IF(CB$1='Stars and Floors'!$E10,1, 0) + IF(CB$1='Stars and Floors'!$F10,1, 0) + IF(CB$1='Stars and Floors'!$G10,1, 0), 0)` |
| CC10 | `=IF('Stars and Floors'!$A10, IF(CC$1='Stars and Floors'!$C10,1, 0) + IF(CC$1='Stars and Floors'!$D10,1, 0) + IF(CC$1='Stars and Floors'!$E10,1, 0) + IF(CC$1='Stars and Floors'!$F10,1, 0) + IF(CC$1='Stars and Floors'!$G10,1, 0), 0)` |
| CD10 | `=IF('Stars and Floors'!$A10, IF(CD$1='Stars and Floors'!$C10,1, 0) + IF(CD$1='Stars and Floors'!$D10,1, 0) + IF(CD$1='Stars and Floors'!$E10,1, 0) + IF(CD$1='Stars and Floors'!$F10,1, 0) + IF(CD$1='Stars and Floors'!$G10,1, 0), 0)` |
| CE10 | `=IF('Stars and Floors'!$A10, IF(CE$1='Stars and Floors'!$C10,1, 0) + IF(CE$1='Stars and Floors'!$D10,1, 0) + IF(CE$1='Stars and Floors'!$E10,1, 0) + IF(CE$1='Stars and Floors'!$F10,1, 0) + IF(CE$1='Stars and Floors'!$G10,1, 0), 0)` |
| CF10 | `=IF('Stars and Floors'!$A10, IF(CF$1='Stars and Floors'!$C10,1, 0) + IF(CF$1='Stars and Floors'!$D10,1, 0) + IF(CF$1='Stars and Floors'!$E10,1, 0) + IF(CF$1='Stars and Floors'!$F10,1, 0) + IF(CF$1='Stars and Floors'!$G10,1, 0), 0)` |
| CG10 | `=IF('Stars and Floors'!$A10, IF(CG$1='Stars and Floors'!$C10,1, 0) + IF(CG$1='Stars and Floors'!$D10,1, 0) + IF(CG$1='Stars and Floors'!$E10,1, 0) + IF(CG$1='Stars and Floors'!$F10,1, 0) + IF(CG$1='Stars and Floors'!$G10,1, 0), 0)` |
| CH10 | `=IF('Stars and Floors'!$A10, IF(CH$1='Stars and Floors'!$C10,1, 0) + IF(CH$1='Stars and Floors'!$D10,1, 0) + IF(CH$1='Stars and Floors'!$E10,1, 0) + IF(CH$1='Stars and Floors'!$F10,1, 0) + IF(CH$1='Stars and Floors'!$G10,1, 0), 0)` |
| CI10 | `=IF('Stars and Floors'!$A10, IF(CI$1='Stars and Floors'!$C10,1, 0) + IF(CI$1='Stars and Floors'!$D10,1, 0) + IF(CI$1='Stars and Floors'!$E10,1, 0) + IF(CI$1='Stars and Floors'!$F10,1, 0) + IF(CI$1='Stars and Floors'!$G10,1, 0), 0)` |
| CJ10 | `=IF('Stars and Floors'!$A10, IF(CJ$1='Stars and Floors'!$C10,1, 0) + IF(CJ$1='Stars and Floors'!$D10,1, 0) + IF(CJ$1='Stars and Floors'!$E10,1, 0) + IF(CJ$1='Stars and Floors'!$F10,1, 0) + IF(CJ$1='Stars and Floors'!$G10,1, 0), 0)` |
| CK10 | `=IF('Stars and Floors'!$A10, IF(CK$1='Stars and Floors'!$C10,1, 0) + IF(CK$1='Stars and Floors'!$D10,1, 0) + IF(CK$1='Stars and Floors'!$E10,1, 0) + IF(CK$1='Stars and Floors'!$F10,1, 0) + IF(CK$1='Stars and Floors'!$G10,1, 0), 0)` |
| CL10 | `=IF('Stars and Floors'!$A10, IF(CL$1='Stars and Floors'!$C10,1, 0) + IF(CL$1='Stars and Floors'!$D10,1, 0) + IF(CL$1='Stars and Floors'!$E10,1, 0) + IF(CL$1='Stars and Floors'!$F10,1, 0) + IF(CL$1='Stars and Floors'!$G10,1, 0), 0)` |
| CM10 | `=IF('Stars and Floors'!$A10, IF(CM$1='Stars and Floors'!$C10,1, 0) + IF(CM$1='Stars and Floors'!$D10,1, 0) + IF(CM$1='Stars and Floors'!$E10,1, 0) + IF(CM$1='Stars and Floors'!$F10,1, 0) + IF(CM$1='Stars and Floors'!$G10,1, 0), 0)` |
| CN10 | `=IF('Stars and Floors'!$A10, IF(CN$1='Stars and Floors'!$C10,1, 0) + IF(CN$1='Stars and Floors'!$D10,1, 0) + IF(CN$1='Stars and Floors'!$E10,1, 0) + IF(CN$1='Stars and Floors'!$F10,1, 0) + IF(CN$1='Stars and Floors'!$G10,1, 0), 0)` |
| CO10 | `=IF('Stars and Floors'!$A10, IF(CO$1='Stars and Floors'!$C10,1, 0) + IF(CO$1='Stars and Floors'!$D10,1, 0) + IF(CO$1='Stars and Floors'!$E10,1, 0) + IF(CO$1='Stars and Floors'!$F10,1, 0) + IF(CO$1='Stars and Floors'!$G10,1, 0), 0)` |
| CP10 | `=IF('Stars and Floors'!$A10, IF(CP$1='Stars and Floors'!$C10,1, 0) + IF(CP$1='Stars and Floors'!$D10,1, 0) + IF(CP$1='Stars and Floors'!$E10,1, 0) + IF(CP$1='Stars and Floors'!$F10,1, 0) + IF(CP$1='Stars and Floors'!$G10,1, 0), 0)` |
| CQ10 | `=IF('Stars and Floors'!$A10, IF(CQ$1='Stars and Floors'!$C10,1, 0) + IF(CQ$1='Stars and Floors'!$D10,1, 0) + IF(CQ$1='Stars and Floors'!$E10,1, 0) + IF(CQ$1='Stars and Floors'!$F10,1, 0) + IF(CQ$1='Stars and Floors'!$G10,1, 0), 0)` |
| CR10 | `=IF('Stars and Floors'!$A10, IF(CR$1='Stars and Floors'!$C10,1, 0) + IF(CR$1='Stars and Floors'!$D10,1, 0) + IF(CR$1='Stars and Floors'!$E10,1, 0) + IF(CR$1='Stars and Floors'!$F10,1, 0) + IF(CR$1='Stars and Floors'!$G10,1, 0), 0)` |
| CS10 | `=IF('Stars and Floors'!$A10, IF(CS$1='Stars and Floors'!$C10,1, 0) + IF(CS$1='Stars and Floors'!$D10,1, 0) + IF(CS$1='Stars and Floors'!$E10,1, 0) + IF(CS$1='Stars and Floors'!$F10,1, 0) + IF(CS$1='Stars and Floors'!$G10,1, 0), 0)` |
| CT10 | `=IF('Stars and Floors'!$A10, IF(CT$1='Stars and Floors'!$C10,1, 0) + IF(CT$1='Stars and Floors'!$D10,1, 0) + IF(CT$1='Stars and Floors'!$E10,1, 0) + IF(CT$1='Stars and Floors'!$F10,1, 0) + IF(CT$1='Stars and Floors'!$G10,1, 0), 0)` |
| CU10 | `=IF('Stars and Floors'!$A10, IF(CU$1='Stars and Floors'!$C10,1, 0) + IF(CU$1='Stars and Floors'!$D10,1, 0) + IF(CU$1='Stars and Floors'!$E10,1, 0) + IF(CU$1='Stars and Floors'!$F10,1, 0) + IF(CU$1='Stars and Floors'!$G10,1, 0), 0)` |
| CV10 | `=IF('Stars and Floors'!$A10, IF(CV$1='Stars and Floors'!$C10,1, 0) + IF(CV$1='Stars and Floors'!$D10,1, 0) + IF(CV$1='Stars and Floors'!$E10,1, 0) + IF(CV$1='Stars and Floors'!$F10,1, 0) + IF(CV$1='Stars and Floors'!$G10,1, 0), 0)` |
| CW10 | `=IF('Stars and Floors'!$A10, IF(CW$1='Stars and Floors'!$C10,1, 0) + IF(CW$1='Stars and Floors'!$D10,1, 0) + IF(CW$1='Stars and Floors'!$E10,1, 0) + IF(CW$1='Stars and Floors'!$F10,1, 0) + IF(CW$1='Stars and Floors'!$G10,1, 0), 0)` |
| CX10 | `=IF('Stars and Floors'!$A10, IF(CX$1='Stars and Floors'!$C10,1, 0) + IF(CX$1='Stars and Floors'!$D10,1, 0) + IF(CX$1='Stars and Floors'!$E10,1, 0) + IF(CX$1='Stars and Floors'!$F10,1, 0) + IF(CX$1='Stars and Floors'!$G10,1, 0), 0)` |
| CY10 | `=IF('Stars and Floors'!$A10, IF(CY$1='Stars and Floors'!$C10,1, 0) + IF(CY$1='Stars and Floors'!$D10,1, 0) + IF(CY$1='Stars and Floors'!$E10,1, 0) + IF(CY$1='Stars and Floors'!$F10,1, 0) + IF(CY$1='Stars and Floors'!$G10,1, 0), 0)` |
| CZ10 | `=IF('Stars and Floors'!$A10, IF(CZ$1='Stars and Floors'!$C10,1, 0) + IF(CZ$1='Stars and Floors'!$D10,1, 0) + IF(CZ$1='Stars and Floors'!$E10,1, 0) + IF(CZ$1='Stars and Floors'!$F10,1, 0) + IF(CZ$1='Stars and Floors'!$G10,1, 0), 0)` |
| DA10 | `=IF('Stars and Floors'!$A10, IF(DA$1='Stars and Floors'!$C10,1, 0) + IF(DA$1='Stars and Floors'!$D10,1, 0) + IF(DA$1='Stars and Floors'!$E10,1, 0) + IF(DA$1='Stars and Floors'!$F10,1, 0) + IF(DA$1='Stars and Floors'!$G10,1, 0), 0)` |
| DB10 | `=IF('Stars and Floors'!$A10, IF(DB$1='Stars and Floors'!$C10,1, 0) + IF(DB$1='Stars and Floors'!$D10,1, 0) + IF(DB$1='Stars and Floors'!$E10,1, 0) + IF(DB$1='Stars and Floors'!$F10,1, 0) + IF(DB$1='Stars and Floors'!$G10,1, 0), 0)` |
| DC10 | `=IF('Stars and Floors'!$A10, IF(DC$1='Stars and Floors'!$C10,1, 0) + IF(DC$1='Stars and Floors'!$D10,1, 0) + IF(DC$1='Stars and Floors'!$E10,1, 0) + IF(DC$1='Stars and Floors'!$F10,1, 0) + IF(DC$1='Stars and Floors'!$G10,1, 0), 0)` |
| DD10 | `=IF('Stars and Floors'!$A10, IF(DD$1='Stars and Floors'!$C10,1, 0) + IF(DD$1='Stars and Floors'!$D10,1, 0) + IF(DD$1='Stars and Floors'!$E10,1, 0) + IF(DD$1='Stars and Floors'!$F10,1, 0) + IF(DD$1='Stars and Floors'!$G10,1, 0), 0)` |
| DE10 | `=IF('Stars and Floors'!$A10, IF(DE$1='Stars and Floors'!$C10,1, 0) + IF(DE$1='Stars and Floors'!$D10,1, 0) + IF(DE$1='Stars and Floors'!$E10,1, 0) + IF(DE$1='Stars and Floors'!$F10,1, 0) + IF(DE$1='Stars and Floors'!$G10,1, 0), 0)` |
| DF10 | `=IF('Stars and Floors'!$A10, IF(DF$1='Stars and Floors'!$C10,1, 0) + IF(DF$1='Stars and Floors'!$D10,1, 0) + IF(DF$1='Stars and Floors'!$E10,1, 0) + IF(DF$1='Stars and Floors'!$F10,1, 0) + IF(DF$1='Stars and Floors'!$G10,1, 0), 0)` |
| DG10 | `=IF('Stars and Floors'!$A10, IF(DG$1='Stars and Floors'!$C10,1, 0) + IF(DG$1='Stars and Floors'!$D10,1, 0) + IF(DG$1='Stars and Floors'!$E10,1, 0) + IF(DG$1='Stars and Floors'!$F10,1, 0) + IF(DG$1='Stars and Floors'!$G10,1, 0), 0)` |
| DH10 | `=IF('Stars and Floors'!$A10, IF(DH$1='Stars and Floors'!$C10,1, 0) + IF(DH$1='Stars and Floors'!$D10,1, 0) + IF(DH$1='Stars and Floors'!$E10,1, 0) + IF(DH$1='Stars and Floors'!$F10,1, 0) + IF(DH$1='Stars and Floors'!$G10,1, 0), 0)` |
| DI10 | `=IF('Stars and Floors'!$A10, IF(DI$1='Stars and Floors'!$C10,1, 0) + IF(DI$1='Stars and Floors'!$D10,1, 0) + IF(DI$1='Stars and Floors'!$E10,1, 0) + IF(DI$1='Stars and Floors'!$F10,1, 0) + IF(DI$1='Stars and Floors'!$G10,1, 0), 0)` |
| DJ10 | `=IF('Stars and Floors'!$A10, IF(DJ$1='Stars and Floors'!$C10,1, 0) + IF(DJ$1='Stars and Floors'!$D10,1, 0) + IF(DJ$1='Stars and Floors'!$E10,1, 0) + IF(DJ$1='Stars and Floors'!$F10,1, 0) + IF(DJ$1='Stars and Floors'!$G10,1, 0), 0)` |
| DK10 | `=IF('Stars and Floors'!$A10, IF(DK$1='Stars and Floors'!$C10,1, 0) + IF(DK$1='Stars and Floors'!$D10,1, 0) + IF(DK$1='Stars and Floors'!$E10,1, 0) + IF(DK$1='Stars and Floors'!$F10,1, 0) + IF(DK$1='Stars and Floors'!$G10,1, 0), 0)` |
| DL10 | `=IF('Stars and Floors'!$A10, IF(DL$1='Stars and Floors'!$C10,1, 0) + IF(DL$1='Stars and Floors'!$D10,1, 0) + IF(DL$1='Stars and Floors'!$E10,1, 0) + IF(DL$1='Stars and Floors'!$F10,1, 0) + IF(DL$1='Stars and Floors'!$G10,1, 0), 0)` |
| DM10 | `=IF('Stars and Floors'!$A10, IF(DM$1='Stars and Floors'!$C10,1, 0) + IF(DM$1='Stars and Floors'!$D10,1, 0) + IF(DM$1='Stars and Floors'!$E10,1, 0) + IF(DM$1='Stars and Floors'!$F10,1, 0) + IF(DM$1='Stars and Floors'!$G10,1, 0), 0)` |
| DN10 | `=IF('Stars and Floors'!$A10, IF(DN$1='Stars and Floors'!$C10,1, 0) + IF(DN$1='Stars and Floors'!$D10,1, 0) + IF(DN$1='Stars and Floors'!$E10,1, 0) + IF(DN$1='Stars and Floors'!$F10,1, 0) + IF(DN$1='Stars and Floors'!$G10,1, 0), 0)` |
| DO10 | `=IF('Stars and Floors'!$A10, IF(DO$1='Stars and Floors'!$C10,1, 0) + IF(DO$1='Stars and Floors'!$D10,1, 0) + IF(DO$1='Stars and Floors'!$E10,1, 0) + IF(DO$1='Stars and Floors'!$F10,1, 0) + IF(DO$1='Stars and Floors'!$G10,1, 0), 0)` |
| DP10 | `=IF('Stars and Floors'!$A10, IF(DP$1='Stars and Floors'!$C10,1, 0) + IF(DP$1='Stars and Floors'!$D10,1, 0) + IF(DP$1='Stars and Floors'!$E10,1, 0) + IF(DP$1='Stars and Floors'!$F10,1, 0) + IF(DP$1='Stars and Floors'!$G10,1, 0), 0)` |
| DQ10 | `=IF('Stars and Floors'!$A10, IF(DQ$1='Stars and Floors'!$C10,1, 0) + IF(DQ$1='Stars and Floors'!$D10,1, 0) + IF(DQ$1='Stars and Floors'!$E10,1, 0) + IF(DQ$1='Stars and Floors'!$F10,1, 0) + IF(DQ$1='Stars and Floors'!$G10,1, 0), 0)` |
| B11 | `=IF('Stars and Floors'!$A11, IF(B$1='Stars and Floors'!$C11,1, 0) + IF(B$1='Stars and Floors'!$D11,1, 0) + IF(B$1='Stars and Floors'!$E11,1, 0) + IF(B$1='Stars and Floors'!$F11,1, 0) + IF(B$1='Stars and Floors'!$G11,1, 0), 0)` |
| C11 | `=IF('Stars and Floors'!$A11, IF(C$1='Stars and Floors'!$C11,1, 0) + IF(C$1='Stars and Floors'!$D11,1, 0) + IF(C$1='Stars and Floors'!$E11,1, 0) + IF(C$1='Stars and Floors'!$F11,1, 0) + IF(C$1='Stars and Floors'!$G11,1, 0), 0)` |
| D11 | `=IF('Stars and Floors'!$A11, IF(D$1='Stars and Floors'!$C11,1, 0) + IF(D$1='Stars and Floors'!$D11,1, 0) + IF(D$1='Stars and Floors'!$E11,1, 0) + IF(D$1='Stars and Floors'!$F11,1, 0) + IF(D$1='Stars and Floors'!$G11,1, 0), 0)` |
| E11 | `=IF('Stars and Floors'!$A11, IF(E$1='Stars and Floors'!$C11,1, 0) + IF(E$1='Stars and Floors'!$D11,1, 0) + IF(E$1='Stars and Floors'!$E11,1, 0) + IF(E$1='Stars and Floors'!$F11,1, 0) + IF(E$1='Stars and Floors'!$G11,1, 0), 0)` |
| F11 | `=IF('Stars and Floors'!$A11, IF(F$1='Stars and Floors'!$C11,1, 0) + IF(F$1='Stars and Floors'!$D11,1, 0) + IF(F$1='Stars and Floors'!$E11,1, 0) + IF(F$1='Stars and Floors'!$F11,1, 0) + IF(F$1='Stars and Floors'!$G11,1, 0), 0)` |
| G11 | `=IF('Stars and Floors'!$A11, IF(G$1='Stars and Floors'!$C11,1, 0) + IF(G$1='Stars and Floors'!$D11,1, 0) + IF(G$1='Stars and Floors'!$E11,1, 0) + IF(G$1='Stars and Floors'!$F11,1, 0) + IF(G$1='Stars and Floors'!$G11,1, 0), 0)` |
| H11 | `=IF('Stars and Floors'!$A11, IF(H$1='Stars and Floors'!$C11,1, 0) + IF(H$1='Stars and Floors'!$D11,1, 0) + IF(H$1='Stars and Floors'!$E11,1, 0) + IF(H$1='Stars and Floors'!$F11,1, 0) + IF(H$1='Stars and Floors'!$G11,1, 0), 0)` |
| I11 | `=IF('Stars and Floors'!$A11, IF(I$1='Stars and Floors'!$C11,1, 0) + IF(I$1='Stars and Floors'!$D11,1, 0) + IF(I$1='Stars and Floors'!$E11,1, 0) + IF(I$1='Stars and Floors'!$F11,1, 0) + IF(I$1='Stars and Floors'!$G11,1, 0), 0)` |
| J11 | `=IF('Stars and Floors'!$A11, IF(J$1='Stars and Floors'!$C11,1, 0) + IF(J$1='Stars and Floors'!$D11,1, 0) + IF(J$1='Stars and Floors'!$E11,1, 0) + IF(J$1='Stars and Floors'!$F11,1, 0) + IF(J$1='Stars and Floors'!$G11,1, 0), 0)` |
| K11 | `=IF('Stars and Floors'!$A11, IF(K$1='Stars and Floors'!$C11,1, 0) + IF(K$1='Stars and Floors'!$D11,1, 0) + IF(K$1='Stars and Floors'!$E11,1, 0) + IF(K$1='Stars and Floors'!$F11,1, 0) + IF(K$1='Stars and Floors'!$G11,1, 0), 0)` |
| L11 | `=IF('Stars and Floors'!$A11, IF(L$1='Stars and Floors'!$C11,1, 0) + IF(L$1='Stars and Floors'!$D11,1, 0) + IF(L$1='Stars and Floors'!$E11,1, 0) + IF(L$1='Stars and Floors'!$F11,1, 0) + IF(L$1='Stars and Floors'!$G11,1, 0), 0)` |
| M11 | `=IF('Stars and Floors'!$A11, IF(M$1='Stars and Floors'!$C11,1, 0) + IF(M$1='Stars and Floors'!$D11,1, 0) + IF(M$1='Stars and Floors'!$E11,1, 0) + IF(M$1='Stars and Floors'!$F11,1, 0) + IF(M$1='Stars and Floors'!$G11,1, 0), 0)` |
| N11 | `=IF('Stars and Floors'!$A11, IF(N$1='Stars and Floors'!$C11,1, 0) + IF(N$1='Stars and Floors'!$D11,1, 0) + IF(N$1='Stars and Floors'!$E11,1, 0) + IF(N$1='Stars and Floors'!$F11,1, 0) + IF(N$1='Stars and Floors'!$G11,1, 0), 0)` |
| O11 | `=IF('Stars and Floors'!$A11, IF(O$1='Stars and Floors'!$C11,1, 0) + IF(O$1='Stars and Floors'!$D11,1, 0) + IF(O$1='Stars and Floors'!$E11,1, 0) + IF(O$1='Stars and Floors'!$F11,1, 0) + IF(O$1='Stars and Floors'!$G11,1, 0), 0)` |
| P11 | `=IF('Stars and Floors'!$A11, IF(P$1='Stars and Floors'!$C11,1, 0) + IF(P$1='Stars and Floors'!$D11,1, 0) + IF(P$1='Stars and Floors'!$E11,1, 0) + IF(P$1='Stars and Floors'!$F11,1, 0) + IF(P$1='Stars and Floors'!$G11,1, 0), 0)` |
| Q11 | `=IF('Stars and Floors'!$A11, IF(Q$1='Stars and Floors'!$C11,1, 0) + IF(Q$1='Stars and Floors'!$D11,1, 0) + IF(Q$1='Stars and Floors'!$E11,1, 0) + IF(Q$1='Stars and Floors'!$F11,1, 0) + IF(Q$1='Stars and Floors'!$G11,1, 0), 0)` |
| R11 | `=IF('Stars and Floors'!$A11, IF(R$1='Stars and Floors'!$C11,1, 0) + IF(R$1='Stars and Floors'!$D11,1, 0) + IF(R$1='Stars and Floors'!$E11,1, 0) + IF(R$1='Stars and Floors'!$F11,1, 0) + IF(R$1='Stars and Floors'!$G11,1, 0), 0)` |
| S11 | `=IF('Stars and Floors'!$A11, IF(S$1='Stars and Floors'!$C11,1, 0) + IF(S$1='Stars and Floors'!$D11,1, 0) + IF(S$1='Stars and Floors'!$E11,1, 0) + IF(S$1='Stars and Floors'!$F11,1, 0) + IF(S$1='Stars and Floors'!$G11,1, 0), 0)` |
| T11 | `=IF('Stars and Floors'!$A11, IF(T$1='Stars and Floors'!$C11,1, 0) + IF(T$1='Stars and Floors'!$D11,1, 0) + IF(T$1='Stars and Floors'!$E11,1, 0) + IF(T$1='Stars and Floors'!$F11,1, 0) + IF(T$1='Stars and Floors'!$G11,1, 0), 0)` |
| U11 | `=IF('Stars and Floors'!$A11, IF(U$1='Stars and Floors'!$C11,1, 0) + IF(U$1='Stars and Floors'!$D11,1, 0) + IF(U$1='Stars and Floors'!$E11,1, 0) + IF(U$1='Stars and Floors'!$F11,1, 0) + IF(U$1='Stars and Floors'!$G11,1, 0), 0)` |
| V11 | `=IF('Stars and Floors'!$A11, IF(V$1='Stars and Floors'!$C11,1, 0) + IF(V$1='Stars and Floors'!$D11,1, 0) + IF(V$1='Stars and Floors'!$E11,1, 0) + IF(V$1='Stars and Floors'!$F11,1, 0) + IF(V$1='Stars and Floors'!$G11,1, 0), 0)` |
| W11 | `=IF('Stars and Floors'!$A11, IF(W$1='Stars and Floors'!$C11,1, 0) + IF(W$1='Stars and Floors'!$D11,1, 0) + IF(W$1='Stars and Floors'!$E11,1, 0) + IF(W$1='Stars and Floors'!$F11,1, 0) + IF(W$1='Stars and Floors'!$G11,1, 0), 0)` |
| X11 | `=IF('Stars and Floors'!$A11, IF(X$1='Stars and Floors'!$C11,1, 0) + IF(X$1='Stars and Floors'!$D11,1, 0) + IF(X$1='Stars and Floors'!$E11,1, 0) + IF(X$1='Stars and Floors'!$F11,1, 0) + IF(X$1='Stars and Floors'!$G11,1, 0), 0)` |
| Y11 | `=IF('Stars and Floors'!$A11, IF(Y$1='Stars and Floors'!$C11,1, 0) + IF(Y$1='Stars and Floors'!$D11,1, 0) + IF(Y$1='Stars and Floors'!$E11,1, 0) + IF(Y$1='Stars and Floors'!$F11,1, 0) + IF(Y$1='Stars and Floors'!$G11,1, 0), 0)` |
| Z11 | `=IF('Stars and Floors'!$A11, IF(Z$1='Stars and Floors'!$C11,1, 0) + IF(Z$1='Stars and Floors'!$D11,1, 0) + IF(Z$1='Stars and Floors'!$E11,1, 0) + IF(Z$1='Stars and Floors'!$F11,1, 0) + IF(Z$1='Stars and Floors'!$G11,1, 0), 0)` |
| AA11 | `=IF('Stars and Floors'!$A11, IF(AA$1='Stars and Floors'!$C11,1, 0) + IF(AA$1='Stars and Floors'!$D11,1, 0) + IF(AA$1='Stars and Floors'!$E11,1, 0) + IF(AA$1='Stars and Floors'!$F11,1, 0) + IF(AA$1='Stars and Floors'!$G11,1, 0), 0)` |
| AB11 | `=IF('Stars and Floors'!$A11, IF(AB$1='Stars and Floors'!$C11,1, 0) + IF(AB$1='Stars and Floors'!$D11,1, 0) + IF(AB$1='Stars and Floors'!$E11,1, 0) + IF(AB$1='Stars and Floors'!$F11,1, 0) + IF(AB$1='Stars and Floors'!$G11,1, 0), 0)` |
| AC11 | `=IF('Stars and Floors'!$A11, IF(AC$1='Stars and Floors'!$C11,1, 0) + IF(AC$1='Stars and Floors'!$D11,1, 0) + IF(AC$1='Stars and Floors'!$E11,1, 0) + IF(AC$1='Stars and Floors'!$F11,1, 0) + IF(AC$1='Stars and Floors'!$G11,1, 0), 0)` |
| AD11 | `=IF('Stars and Floors'!$A11, IF(AD$1='Stars and Floors'!$C11,1, 0) + IF(AD$1='Stars and Floors'!$D11,1, 0) + IF(AD$1='Stars and Floors'!$E11,1, 0) + IF(AD$1='Stars and Floors'!$F11,1, 0) + IF(AD$1='Stars and Floors'!$G11,1, 0), 0)` |
| AE11 | `=IF('Stars and Floors'!$A11, IF(AE$1='Stars and Floors'!$C11,1, 0) + IF(AE$1='Stars and Floors'!$D11,1, 0) + IF(AE$1='Stars and Floors'!$E11,1, 0) + IF(AE$1='Stars and Floors'!$F11,1, 0) + IF(AE$1='Stars and Floors'!$G11,1, 0), 0)` |
| AF11 | `=IF('Stars and Floors'!$A11, IF(AF$1='Stars and Floors'!$C11,1, 0) + IF(AF$1='Stars and Floors'!$D11,1, 0) + IF(AF$1='Stars and Floors'!$E11,1, 0) + IF(AF$1='Stars and Floors'!$F11,1, 0) + IF(AF$1='Stars and Floors'!$G11,1, 0), 0)` |
| AG11 | `=IF('Stars and Floors'!$A11, IF(AG$1='Stars and Floors'!$C11,1, 0) + IF(AG$1='Stars and Floors'!$D11,1, 0) + IF(AG$1='Stars and Floors'!$E11,1, 0) + IF(AG$1='Stars and Floors'!$F11,1, 0) + IF(AG$1='Stars and Floors'!$G11,1, 0), 0)` |
| AH11 | `=IF('Stars and Floors'!$A11, IF(AH$1='Stars and Floors'!$C11,1, 0) + IF(AH$1='Stars and Floors'!$D11,1, 0) + IF(AH$1='Stars and Floors'!$E11,1, 0) + IF(AH$1='Stars and Floors'!$F11,1, 0) + IF(AH$1='Stars and Floors'!$G11,1, 0), 0)` |
| AI11 | `=IF('Stars and Floors'!$A11, IF(AI$1='Stars and Floors'!$C11,1, 0) + IF(AI$1='Stars and Floors'!$D11,1, 0) + IF(AI$1='Stars and Floors'!$E11,1, 0) + IF(AI$1='Stars and Floors'!$F11,1, 0) + IF(AI$1='Stars and Floors'!$G11,1, 0), 0)` |
| AJ11 | `=IF('Stars and Floors'!$A11, IF(AJ$1='Stars and Floors'!$C11,1, 0) + IF(AJ$1='Stars and Floors'!$D11,1, 0) + IF(AJ$1='Stars and Floors'!$E11,1, 0) + IF(AJ$1='Stars and Floors'!$F11,1, 0) + IF(AJ$1='Stars and Floors'!$G11,1, 0), 0)` |
| AK11 | `=IF('Stars and Floors'!$A11, IF(AK$1='Stars and Floors'!$C11,1, 0) + IF(AK$1='Stars and Floors'!$D11,1, 0) + IF(AK$1='Stars and Floors'!$E11,1, 0) + IF(AK$1='Stars and Floors'!$F11,1, 0) + IF(AK$1='Stars and Floors'!$G11,1, 0), 0)` |
| AL11 | `=IF('Stars and Floors'!$A11, IF(AL$1='Stars and Floors'!$C11,1, 0) + IF(AL$1='Stars and Floors'!$D11,1, 0) + IF(AL$1='Stars and Floors'!$E11,1, 0) + IF(AL$1='Stars and Floors'!$F11,1, 0) + IF(AL$1='Stars and Floors'!$G11,1, 0), 0)` |
| AM11 | `=IF('Stars and Floors'!$A11, IF(AM$1='Stars and Floors'!$C11,1, 0) + IF(AM$1='Stars and Floors'!$D11,1, 0) + IF(AM$1='Stars and Floors'!$E11,1, 0) + IF(AM$1='Stars and Floors'!$F11,1, 0) + IF(AM$1='Stars and Floors'!$G11,1, 0), 0)` |
| AN11 | `=IF('Stars and Floors'!$A11, IF(AN$1='Stars and Floors'!$C11,1, 0) + IF(AN$1='Stars and Floors'!$D11,1, 0) + IF(AN$1='Stars and Floors'!$E11,1, 0) + IF(AN$1='Stars and Floors'!$F11,1, 0) + IF(AN$1='Stars and Floors'!$G11,1, 0), 0)` |
| AO11 | `=IF('Stars and Floors'!$A11, IF(AO$1='Stars and Floors'!$C11,1, 0) + IF(AO$1='Stars and Floors'!$D11,1, 0) + IF(AO$1='Stars and Floors'!$E11,1, 0) + IF(AO$1='Stars and Floors'!$F11,1, 0) + IF(AO$1='Stars and Floors'!$G11,1, 0), 0)` |
| AP11 | `=IF('Stars and Floors'!$A11, IF(AP$1='Stars and Floors'!$C11,1, 0) + IF(AP$1='Stars and Floors'!$D11,1, 0) + IF(AP$1='Stars and Floors'!$E11,1, 0) + IF(AP$1='Stars and Floors'!$F11,1, 0) + IF(AP$1='Stars and Floors'!$G11,1, 0), 0)` |
| AQ11 | `=IF('Stars and Floors'!$A11, IF(AQ$1='Stars and Floors'!$C11,1, 0) + IF(AQ$1='Stars and Floors'!$D11,1, 0) + IF(AQ$1='Stars and Floors'!$E11,1, 0) + IF(AQ$1='Stars and Floors'!$F11,1, 0) + IF(AQ$1='Stars and Floors'!$G11,1, 0), 0)` |
| AR11 | `=IF('Stars and Floors'!$A11, IF(AR$1='Stars and Floors'!$C11,1, 0) + IF(AR$1='Stars and Floors'!$D11,1, 0) + IF(AR$1='Stars and Floors'!$E11,1, 0) + IF(AR$1='Stars and Floors'!$F11,1, 0) + IF(AR$1='Stars and Floors'!$G11,1, 0), 0)` |
| AS11 | `=IF('Stars and Floors'!$A11, IF(AS$1='Stars and Floors'!$C11,1, 0) + IF(AS$1='Stars and Floors'!$D11,1, 0) + IF(AS$1='Stars and Floors'!$E11,1, 0) + IF(AS$1='Stars and Floors'!$F11,1, 0) + IF(AS$1='Stars and Floors'!$G11,1, 0), 0)` |
| AT11 | `=IF('Stars and Floors'!$A11, IF(AT$1='Stars and Floors'!$C11,1, 0) + IF(AT$1='Stars and Floors'!$D11,1, 0) + IF(AT$1='Stars and Floors'!$E11,1, 0) + IF(AT$1='Stars and Floors'!$F11,1, 0) + IF(AT$1='Stars and Floors'!$G11,1, 0), 0)` |
| AU11 | `=IF('Stars and Floors'!$A11, IF(AU$1='Stars and Floors'!$C11,1, 0) + IF(AU$1='Stars and Floors'!$D11,1, 0) + IF(AU$1='Stars and Floors'!$E11,1, 0) + IF(AU$1='Stars and Floors'!$F11,1, 0) + IF(AU$1='Stars and Floors'!$G11,1, 0), 0)` |
| AV11 | `=IF('Stars and Floors'!$A11, IF(AV$1='Stars and Floors'!$C11,1, 0) + IF(AV$1='Stars and Floors'!$D11,1, 0) + IF(AV$1='Stars and Floors'!$E11,1, 0) + IF(AV$1='Stars and Floors'!$F11,1, 0) + IF(AV$1='Stars and Floors'!$G11,1, 0), 0)` |
| AW11 | `=IF('Stars and Floors'!$A11, IF(AW$1='Stars and Floors'!$C11,1, 0) + IF(AW$1='Stars and Floors'!$D11,1, 0) + IF(AW$1='Stars and Floors'!$E11,1, 0) + IF(AW$1='Stars and Floors'!$F11,1, 0) + IF(AW$1='Stars and Floors'!$G11,1, 0), 0)` |
| AX11 | `=IF('Stars and Floors'!$A11, IF(AX$1='Stars and Floors'!$C11,1, 0) + IF(AX$1='Stars and Floors'!$D11,1, 0) + IF(AX$1='Stars and Floors'!$E11,1, 0) + IF(AX$1='Stars and Floors'!$F11,1, 0) + IF(AX$1='Stars and Floors'!$G11,1, 0), 0)` |
| AY11 | `=IF('Stars and Floors'!$A11, IF(AY$1='Stars and Floors'!$C11,1, 0) + IF(AY$1='Stars and Floors'!$D11,1, 0) + IF(AY$1='Stars and Floors'!$E11,1, 0) + IF(AY$1='Stars and Floors'!$F11,1, 0) + IF(AY$1='Stars and Floors'!$G11,1, 0), 0)` |
| AZ11 | `=IF('Stars and Floors'!$A11, IF(AZ$1='Stars and Floors'!$C11,1, 0) + IF(AZ$1='Stars and Floors'!$D11,1, 0) + IF(AZ$1='Stars and Floors'!$E11,1, 0) + IF(AZ$1='Stars and Floors'!$F11,1, 0) + IF(AZ$1='Stars and Floors'!$G11,1, 0), 0)` |
| BA11 | `=IF('Stars and Floors'!$A11, IF(BA$1='Stars and Floors'!$C11,1, 0) + IF(BA$1='Stars and Floors'!$D11,1, 0) + IF(BA$1='Stars and Floors'!$E11,1, 0) + IF(BA$1='Stars and Floors'!$F11,1, 0) + IF(BA$1='Stars and Floors'!$G11,1, 0), 0)` |
| BB11 | `=IF('Stars and Floors'!$A11, IF(BB$1='Stars and Floors'!$C11,1, 0) + IF(BB$1='Stars and Floors'!$D11,1, 0) + IF(BB$1='Stars and Floors'!$E11,1, 0) + IF(BB$1='Stars and Floors'!$F11,1, 0) + IF(BB$1='Stars and Floors'!$G11,1, 0), 0)` |
| BC11 | `=IF('Stars and Floors'!$A11, IF(BC$1='Stars and Floors'!$C11,1, 0) + IF(BC$1='Stars and Floors'!$D11,1, 0) + IF(BC$1='Stars and Floors'!$E11,1, 0) + IF(BC$1='Stars and Floors'!$F11,1, 0) + IF(BC$1='Stars and Floors'!$G11,1, 0), 0)` |
| BD11 | `=IF('Stars and Floors'!$A11, IF(BD$1='Stars and Floors'!$C11,1, 0) + IF(BD$1='Stars and Floors'!$D11,1, 0) + IF(BD$1='Stars and Floors'!$E11,1, 0) + IF(BD$1='Stars and Floors'!$F11,1, 0) + IF(BD$1='Stars and Floors'!$G11,1, 0), 0)` |
| BE11 | `=IF('Stars and Floors'!$A11, IF(BE$1='Stars and Floors'!$C11,1, 0) + IF(BE$1='Stars and Floors'!$D11,1, 0) + IF(BE$1='Stars and Floors'!$E11,1, 0) + IF(BE$1='Stars and Floors'!$F11,1, 0) + IF(BE$1='Stars and Floors'!$G11,1, 0), 0)` |
| BF11 | `=IF('Stars and Floors'!$A11, IF(BF$1='Stars and Floors'!$C11,1, 0) + IF(BF$1='Stars and Floors'!$D11,1, 0) + IF(BF$1='Stars and Floors'!$E11,1, 0) + IF(BF$1='Stars and Floors'!$F11,1, 0) + IF(BF$1='Stars and Floors'!$G11,1, 0), 0)` |
| BG11 | `=IF('Stars and Floors'!$A11, IF(BG$1='Stars and Floors'!$C11,1, 0) + IF(BG$1='Stars and Floors'!$D11,1, 0) + IF(BG$1='Stars and Floors'!$E11,1, 0) + IF(BG$1='Stars and Floors'!$F11,1, 0) + IF(BG$1='Stars and Floors'!$G11,1, 0), 0)` |
| BH11 | `=IF('Stars and Floors'!$A11, IF(BH$1='Stars and Floors'!$C11,1, 0) + IF(BH$1='Stars and Floors'!$D11,1, 0) + IF(BH$1='Stars and Floors'!$E11,1, 0) + IF(BH$1='Stars and Floors'!$F11,1, 0) + IF(BH$1='Stars and Floors'!$G11,1, 0), 0)` |
| BI11 | `=IF('Stars and Floors'!$A11, IF(BI$1='Stars and Floors'!$C11,1, 0) + IF(BI$1='Stars and Floors'!$D11,1, 0) + IF(BI$1='Stars and Floors'!$E11,1, 0) + IF(BI$1='Stars and Floors'!$F11,1, 0) + IF(BI$1='Stars and Floors'!$G11,1, 0), 0)` |
| BJ11 | `=IF('Stars and Floors'!$A11, IF(BJ$1='Stars and Floors'!$C11,1, 0) + IF(BJ$1='Stars and Floors'!$D11,1, 0) + IF(BJ$1='Stars and Floors'!$E11,1, 0) + IF(BJ$1='Stars and Floors'!$F11,1, 0) + IF(BJ$1='Stars and Floors'!$G11,1, 0), 0)` |
| BK11 | `=IF('Stars and Floors'!$A11, IF(BK$1='Stars and Floors'!$C11,1, 0) + IF(BK$1='Stars and Floors'!$D11,1, 0) + IF(BK$1='Stars and Floors'!$E11,1, 0) + IF(BK$1='Stars and Floors'!$F11,1, 0) + IF(BK$1='Stars and Floors'!$G11,1, 0), 0)` |
| BL11 | `=IF('Stars and Floors'!$A11, IF(BL$1='Stars and Floors'!$C11,1, 0) + IF(BL$1='Stars and Floors'!$D11,1, 0) + IF(BL$1='Stars and Floors'!$E11,1, 0) + IF(BL$1='Stars and Floors'!$F11,1, 0) + IF(BL$1='Stars and Floors'!$G11,1, 0), 0)` |
| BM11 | `=IF('Stars and Floors'!$A11, IF(BM$1='Stars and Floors'!$C11,1, 0) + IF(BM$1='Stars and Floors'!$D11,1, 0) + IF(BM$1='Stars and Floors'!$E11,1, 0) + IF(BM$1='Stars and Floors'!$F11,1, 0) + IF(BM$1='Stars and Floors'!$G11,1, 0), 0)` |
| BN11 | `=IF('Stars and Floors'!$A11, IF(BN$1='Stars and Floors'!$C11,1, 0) + IF(BN$1='Stars and Floors'!$D11,1, 0) + IF(BN$1='Stars and Floors'!$E11,1, 0) + IF(BN$1='Stars and Floors'!$F11,1, 0) + IF(BN$1='Stars and Floors'!$G11,1, 0), 0)` |
| BO11 | `=IF('Stars and Floors'!$A11, IF(BO$1='Stars and Floors'!$C11,1, 0) + IF(BO$1='Stars and Floors'!$D11,1, 0) + IF(BO$1='Stars and Floors'!$E11,1, 0) + IF(BO$1='Stars and Floors'!$F11,1, 0) + IF(BO$1='Stars and Floors'!$G11,1, 0), 0)` |
| BP11 | `=IF('Stars and Floors'!$A11, IF(BP$1='Stars and Floors'!$C11,1, 0) + IF(BP$1='Stars and Floors'!$D11,1, 0) + IF(BP$1='Stars and Floors'!$E11,1, 0) + IF(BP$1='Stars and Floors'!$F11,1, 0) + IF(BP$1='Stars and Floors'!$G11,1, 0), 0)` |
| BQ11 | `=IF('Stars and Floors'!$A11, IF(BQ$1='Stars and Floors'!$C11,1, 0) + IF(BQ$1='Stars and Floors'!$D11,1, 0) + IF(BQ$1='Stars and Floors'!$E11,1, 0) + IF(BQ$1='Stars and Floors'!$F11,1, 0) + IF(BQ$1='Stars and Floors'!$G11,1, 0), 0)` |
| BR11 | `=IF('Stars and Floors'!$A11, IF(BR$1='Stars and Floors'!$C11,1, 0) + IF(BR$1='Stars and Floors'!$D11,1, 0) + IF(BR$1='Stars and Floors'!$E11,1, 0) + IF(BR$1='Stars and Floors'!$F11,1, 0) + IF(BR$1='Stars and Floors'!$G11,1, 0), 0)` |
| BS11 | `=IF('Stars and Floors'!$A11, IF(BS$1='Stars and Floors'!$C11,1, 0) + IF(BS$1='Stars and Floors'!$D11,1, 0) + IF(BS$1='Stars and Floors'!$E11,1, 0) + IF(BS$1='Stars and Floors'!$F11,1, 0) + IF(BS$1='Stars and Floors'!$G11,1, 0), 0)` |
| BT11 | `=IF('Stars and Floors'!$A11, IF(BT$1='Stars and Floors'!$C11,1, 0) + IF(BT$1='Stars and Floors'!$D11,1, 0) + IF(BT$1='Stars and Floors'!$E11,1, 0) + IF(BT$1='Stars and Floors'!$F11,1, 0) + IF(BT$1='Stars and Floors'!$G11,1, 0), 0)` |
| BU11 | `=IF('Stars and Floors'!$A11, IF(BU$1='Stars and Floors'!$C11,1, 0) + IF(BU$1='Stars and Floors'!$D11,1, 0) + IF(BU$1='Stars and Floors'!$E11,1, 0) + IF(BU$1='Stars and Floors'!$F11,1, 0) + IF(BU$1='Stars and Floors'!$G11,1, 0), 0)` |
| BV11 | `=IF('Stars and Floors'!$A11, IF(BV$1='Stars and Floors'!$C11,1, 0) + IF(BV$1='Stars and Floors'!$D11,1, 0) + IF(BV$1='Stars and Floors'!$E11,1, 0) + IF(BV$1='Stars and Floors'!$F11,1, 0) + IF(BV$1='Stars and Floors'!$G11,1, 0), 0)` |
| BW11 | `=IF('Stars and Floors'!$A11, IF(BW$1='Stars and Floors'!$C11,1, 0) + IF(BW$1='Stars and Floors'!$D11,1, 0) + IF(BW$1='Stars and Floors'!$E11,1, 0) + IF(BW$1='Stars and Floors'!$F11,1, 0) + IF(BW$1='Stars and Floors'!$G11,1, 0), 0)` |
| BX11 | `=IF('Stars and Floors'!$A11, IF(BX$1='Stars and Floors'!$C11,1, 0) + IF(BX$1='Stars and Floors'!$D11,1, 0) + IF(BX$1='Stars and Floors'!$E11,1, 0) + IF(BX$1='Stars and Floors'!$F11,1, 0) + IF(BX$1='Stars and Floors'!$G11,1, 0), 0)` |
| BY11 | `=IF('Stars and Floors'!$A11, IF(BY$1='Stars and Floors'!$C11,1, 0) + IF(BY$1='Stars and Floors'!$D11,1, 0) + IF(BY$1='Stars and Floors'!$E11,1, 0) + IF(BY$1='Stars and Floors'!$F11,1, 0) + IF(BY$1='Stars and Floors'!$G11,1, 0), 0)` |
| BZ11 | `=IF('Stars and Floors'!$A11, IF(BZ$1='Stars and Floors'!$C11,1, 0) + IF(BZ$1='Stars and Floors'!$D11,1, 0) + IF(BZ$1='Stars and Floors'!$E11,1, 0) + IF(BZ$1='Stars and Floors'!$F11,1, 0) + IF(BZ$1='Stars and Floors'!$G11,1, 0), 0)` |
| CA11 | `=IF('Stars and Floors'!$A11, IF(CA$1='Stars and Floors'!$C11,1, 0) + IF(CA$1='Stars and Floors'!$D11,1, 0) + IF(CA$1='Stars and Floors'!$E11,1, 0) + IF(CA$1='Stars and Floors'!$F11,1, 0) + IF(CA$1='Stars and Floors'!$G11,1, 0), 0)` |
| CB11 | `=IF('Stars and Floors'!$A11, IF(CB$1='Stars and Floors'!$C11,1, 0) + IF(CB$1='Stars and Floors'!$D11,1, 0) + IF(CB$1='Stars and Floors'!$E11,1, 0) + IF(CB$1='Stars and Floors'!$F11,1, 0) + IF(CB$1='Stars and Floors'!$G11,1, 0), 0)` |
| CC11 | `=IF('Stars and Floors'!$A11, IF(CC$1='Stars and Floors'!$C11,1, 0) + IF(CC$1='Stars and Floors'!$D11,1, 0) + IF(CC$1='Stars and Floors'!$E11,1, 0) + IF(CC$1='Stars and Floors'!$F11,1, 0) + IF(CC$1='Stars and Floors'!$G11,1, 0), 0)` |
| CD11 | `=IF('Stars and Floors'!$A11, IF(CD$1='Stars and Floors'!$C11,1, 0) + IF(CD$1='Stars and Floors'!$D11,1, 0) + IF(CD$1='Stars and Floors'!$E11,1, 0) + IF(CD$1='Stars and Floors'!$F11,1, 0) + IF(CD$1='Stars and Floors'!$G11,1, 0), 0)` |
| CE11 | `=IF('Stars and Floors'!$A11, IF(CE$1='Stars and Floors'!$C11,1, 0) + IF(CE$1='Stars and Floors'!$D11,1, 0) + IF(CE$1='Stars and Floors'!$E11,1, 0) + IF(CE$1='Stars and Floors'!$F11,1, 0) + IF(CE$1='Stars and Floors'!$G11,1, 0), 0)` |
| CF11 | `=IF('Stars and Floors'!$A11, IF(CF$1='Stars and Floors'!$C11,1, 0) + IF(CF$1='Stars and Floors'!$D11,1, 0) + IF(CF$1='Stars and Floors'!$E11,1, 0) + IF(CF$1='Stars and Floors'!$F11,1, 0) + IF(CF$1='Stars and Floors'!$G11,1, 0), 0)` |
| CG11 | `=IF('Stars and Floors'!$A11, IF(CG$1='Stars and Floors'!$C11,1, 0) + IF(CG$1='Stars and Floors'!$D11,1, 0) + IF(CG$1='Stars and Floors'!$E11,1, 0) + IF(CG$1='Stars and Floors'!$F11,1, 0) + IF(CG$1='Stars and Floors'!$G11,1, 0), 0)` |
| CH11 | `=IF('Stars and Floors'!$A11, IF(CH$1='Stars and Floors'!$C11,1, 0) + IF(CH$1='Stars and Floors'!$D11,1, 0) + IF(CH$1='Stars and Floors'!$E11,1, 0) + IF(CH$1='Stars and Floors'!$F11,1, 0) + IF(CH$1='Stars and Floors'!$G11,1, 0), 0)` |
| CI11 | `=IF('Stars and Floors'!$A11, IF(CI$1='Stars and Floors'!$C11,1, 0) + IF(CI$1='Stars and Floors'!$D11,1, 0) + IF(CI$1='Stars and Floors'!$E11,1, 0) + IF(CI$1='Stars and Floors'!$F11,1, 0) + IF(CI$1='Stars and Floors'!$G11,1, 0), 0)` |
| CJ11 | `=IF('Stars and Floors'!$A11, IF(CJ$1='Stars and Floors'!$C11,1, 0) + IF(CJ$1='Stars and Floors'!$D11,1, 0) + IF(CJ$1='Stars and Floors'!$E11,1, 0) + IF(CJ$1='Stars and Floors'!$F11,1, 0) + IF(CJ$1='Stars and Floors'!$G11,1, 0), 0)` |
| CK11 | `=IF('Stars and Floors'!$A11, IF(CK$1='Stars and Floors'!$C11,1, 0) + IF(CK$1='Stars and Floors'!$D11,1, 0) + IF(CK$1='Stars and Floors'!$E11,1, 0) + IF(CK$1='Stars and Floors'!$F11,1, 0) + IF(CK$1='Stars and Floors'!$G11,1, 0), 0)` |
| CL11 | `=IF('Stars and Floors'!$A11, IF(CL$1='Stars and Floors'!$C11,1, 0) + IF(CL$1='Stars and Floors'!$D11,1, 0) + IF(CL$1='Stars and Floors'!$E11,1, 0) + IF(CL$1='Stars and Floors'!$F11,1, 0) + IF(CL$1='Stars and Floors'!$G11,1, 0), 0)` |
| CM11 | `=IF('Stars and Floors'!$A11, IF(CM$1='Stars and Floors'!$C11,1, 0) + IF(CM$1='Stars and Floors'!$D11,1, 0) + IF(CM$1='Stars and Floors'!$E11,1, 0) + IF(CM$1='Stars and Floors'!$F11,1, 0) + IF(CM$1='Stars and Floors'!$G11,1, 0), 0)` |
| CN11 | `=IF('Stars and Floors'!$A11, IF(CN$1='Stars and Floors'!$C11,1, 0) + IF(CN$1='Stars and Floors'!$D11,1, 0) + IF(CN$1='Stars and Floors'!$E11,1, 0) + IF(CN$1='Stars and Floors'!$F11,1, 0) + IF(CN$1='Stars and Floors'!$G11,1, 0), 0)` |
| CO11 | `=IF('Stars and Floors'!$A11, IF(CO$1='Stars and Floors'!$C11,1, 0) + IF(CO$1='Stars and Floors'!$D11,1, 0) + IF(CO$1='Stars and Floors'!$E11,1, 0) + IF(CO$1='Stars and Floors'!$F11,1, 0) + IF(CO$1='Stars and Floors'!$G11,1, 0), 0)` |
| CP11 | `=IF('Stars and Floors'!$A11, IF(CP$1='Stars and Floors'!$C11,1, 0) + IF(CP$1='Stars and Floors'!$D11,1, 0) + IF(CP$1='Stars and Floors'!$E11,1, 0) + IF(CP$1='Stars and Floors'!$F11,1, 0) + IF(CP$1='Stars and Floors'!$G11,1, 0), 0)` |
| CQ11 | `=IF('Stars and Floors'!$A11, IF(CQ$1='Stars and Floors'!$C11,1, 0) + IF(CQ$1='Stars and Floors'!$D11,1, 0) + IF(CQ$1='Stars and Floors'!$E11,1, 0) + IF(CQ$1='Stars and Floors'!$F11,1, 0) + IF(CQ$1='Stars and Floors'!$G11,1, 0), 0)` |
| CR11 | `=IF('Stars and Floors'!$A11, IF(CR$1='Stars and Floors'!$C11,1, 0) + IF(CR$1='Stars and Floors'!$D11,1, 0) + IF(CR$1='Stars and Floors'!$E11,1, 0) + IF(CR$1='Stars and Floors'!$F11,1, 0) + IF(CR$1='Stars and Floors'!$G11,1, 0), 0)` |
| CS11 | `=IF('Stars and Floors'!$A11, IF(CS$1='Stars and Floors'!$C11,1, 0) + IF(CS$1='Stars and Floors'!$D11,1, 0) + IF(CS$1='Stars and Floors'!$E11,1, 0) + IF(CS$1='Stars and Floors'!$F11,1, 0) + IF(CS$1='Stars and Floors'!$G11,1, 0), 0)` |
| CT11 | `=IF('Stars and Floors'!$A11, IF(CT$1='Stars and Floors'!$C11,1, 0) + IF(CT$1='Stars and Floors'!$D11,1, 0) + IF(CT$1='Stars and Floors'!$E11,1, 0) + IF(CT$1='Stars and Floors'!$F11,1, 0) + IF(CT$1='Stars and Floors'!$G11,1, 0), 0)` |
| CU11 | `=IF('Stars and Floors'!$A11, IF(CU$1='Stars and Floors'!$C11,1, 0) + IF(CU$1='Stars and Floors'!$D11,1, 0) + IF(CU$1='Stars and Floors'!$E11,1, 0) + IF(CU$1='Stars and Floors'!$F11,1, 0) + IF(CU$1='Stars and Floors'!$G11,1, 0), 0)` |
| CV11 | `=IF('Stars and Floors'!$A11, IF(CV$1='Stars and Floors'!$C11,1, 0) + IF(CV$1='Stars and Floors'!$D11,1, 0) + IF(CV$1='Stars and Floors'!$E11,1, 0) + IF(CV$1='Stars and Floors'!$F11,1, 0) + IF(CV$1='Stars and Floors'!$G11,1, 0), 0)` |
| CW11 | `=IF('Stars and Floors'!$A11, IF(CW$1='Stars and Floors'!$C11,1, 0) + IF(CW$1='Stars and Floors'!$D11,1, 0) + IF(CW$1='Stars and Floors'!$E11,1, 0) + IF(CW$1='Stars and Floors'!$F11,1, 0) + IF(CW$1='Stars and Floors'!$G11,1, 0), 0)` |
| CX11 | `=IF('Stars and Floors'!$A11, IF(CX$1='Stars and Floors'!$C11,1, 0) + IF(CX$1='Stars and Floors'!$D11,1, 0) + IF(CX$1='Stars and Floors'!$E11,1, 0) + IF(CX$1='Stars and Floors'!$F11,1, 0) + IF(CX$1='Stars and Floors'!$G11,1, 0), 0)` |
| CY11 | `=IF('Stars and Floors'!$A11, IF(CY$1='Stars and Floors'!$C11,1, 0) + IF(CY$1='Stars and Floors'!$D11,1, 0) + IF(CY$1='Stars and Floors'!$E11,1, 0) + IF(CY$1='Stars and Floors'!$F11,1, 0) + IF(CY$1='Stars and Floors'!$G11,1, 0), 0)` |
| CZ11 | `=IF('Stars and Floors'!$A11, IF(CZ$1='Stars and Floors'!$C11,1, 0) + IF(CZ$1='Stars and Floors'!$D11,1, 0) + IF(CZ$1='Stars and Floors'!$E11,1, 0) + IF(CZ$1='Stars and Floors'!$F11,1, 0) + IF(CZ$1='Stars and Floors'!$G11,1, 0), 0)` |
| DA11 | `=IF('Stars and Floors'!$A11, IF(DA$1='Stars and Floors'!$C11,1, 0) + IF(DA$1='Stars and Floors'!$D11,1, 0) + IF(DA$1='Stars and Floors'!$E11,1, 0) + IF(DA$1='Stars and Floors'!$F11,1, 0) + IF(DA$1='Stars and Floors'!$G11,1, 0), 0)` |
| DB11 | `=IF('Stars and Floors'!$A11, IF(DB$1='Stars and Floors'!$C11,1, 0) + IF(DB$1='Stars and Floors'!$D11,1, 0) + IF(DB$1='Stars and Floors'!$E11,1, 0) + IF(DB$1='Stars and Floors'!$F11,1, 0) + IF(DB$1='Stars and Floors'!$G11,1, 0), 0)` |
| DC11 | `=IF('Stars and Floors'!$A11, IF(DC$1='Stars and Floors'!$C11,1, 0) + IF(DC$1='Stars and Floors'!$D11,1, 0) + IF(DC$1='Stars and Floors'!$E11,1, 0) + IF(DC$1='Stars and Floors'!$F11,1, 0) + IF(DC$1='Stars and Floors'!$G11,1, 0), 0)` |
| DD11 | `=IF('Stars and Floors'!$A11, IF(DD$1='Stars and Floors'!$C11,1, 0) + IF(DD$1='Stars and Floors'!$D11,1, 0) + IF(DD$1='Stars and Floors'!$E11,1, 0) + IF(DD$1='Stars and Floors'!$F11,1, 0) + IF(DD$1='Stars and Floors'!$G11,1, 0), 0)` |
| DE11 | `=IF('Stars and Floors'!$A11, IF(DE$1='Stars and Floors'!$C11,1, 0) + IF(DE$1='Stars and Floors'!$D11,1, 0) + IF(DE$1='Stars and Floors'!$E11,1, 0) + IF(DE$1='Stars and Floors'!$F11,1, 0) + IF(DE$1='Stars and Floors'!$G11,1, 0), 0)` |
| DF11 | `=IF('Stars and Floors'!$A11, IF(DF$1='Stars and Floors'!$C11,1, 0) + IF(DF$1='Stars and Floors'!$D11,1, 0) + IF(DF$1='Stars and Floors'!$E11,1, 0) + IF(DF$1='Stars and Floors'!$F11,1, 0) + IF(DF$1='Stars and Floors'!$G11,1, 0), 0)` |
| DG11 | `=IF('Stars and Floors'!$A11, IF(DG$1='Stars and Floors'!$C11,1, 0) + IF(DG$1='Stars and Floors'!$D11,1, 0) + IF(DG$1='Stars and Floors'!$E11,1, 0) + IF(DG$1='Stars and Floors'!$F11,1, 0) + IF(DG$1='Stars and Floors'!$G11,1, 0), 0)` |
| DH11 | `=IF('Stars and Floors'!$A11, IF(DH$1='Stars and Floors'!$C11,1, 0) + IF(DH$1='Stars and Floors'!$D11,1, 0) + IF(DH$1='Stars and Floors'!$E11,1, 0) + IF(DH$1='Stars and Floors'!$F11,1, 0) + IF(DH$1='Stars and Floors'!$G11,1, 0), 0)` |
| DI11 | `=IF('Stars and Floors'!$A11, IF(DI$1='Stars and Floors'!$C11,1, 0) + IF(DI$1='Stars and Floors'!$D11,1, 0) + IF(DI$1='Stars and Floors'!$E11,1, 0) + IF(DI$1='Stars and Floors'!$F11,1, 0) + IF(DI$1='Stars and Floors'!$G11,1, 0), 0)` |
| DJ11 | `=IF('Stars and Floors'!$A11, IF(DJ$1='Stars and Floors'!$C11,1, 0) + IF(DJ$1='Stars and Floors'!$D11,1, 0) + IF(DJ$1='Stars and Floors'!$E11,1, 0) + IF(DJ$1='Stars and Floors'!$F11,1, 0) + IF(DJ$1='Stars and Floors'!$G11,1, 0), 0)` |
| DK11 | `=IF('Stars and Floors'!$A11, IF(DK$1='Stars and Floors'!$C11,1, 0) + IF(DK$1='Stars and Floors'!$D11,1, 0) + IF(DK$1='Stars and Floors'!$E11,1, 0) + IF(DK$1='Stars and Floors'!$F11,1, 0) + IF(DK$1='Stars and Floors'!$G11,1, 0), 0)` |
| DL11 | `=IF('Stars and Floors'!$A11, IF(DL$1='Stars and Floors'!$C11,1, 0) + IF(DL$1='Stars and Floors'!$D11,1, 0) + IF(DL$1='Stars and Floors'!$E11,1, 0) + IF(DL$1='Stars and Floors'!$F11,1, 0) + IF(DL$1='Stars and Floors'!$G11,1, 0), 0)` |
| DM11 | `=IF('Stars and Floors'!$A11, IF(DM$1='Stars and Floors'!$C11,1, 0) + IF(DM$1='Stars and Floors'!$D11,1, 0) + IF(DM$1='Stars and Floors'!$E11,1, 0) + IF(DM$1='Stars and Floors'!$F11,1, 0) + IF(DM$1='Stars and Floors'!$G11,1, 0), 0)` |
| DN11 | `=IF('Stars and Floors'!$A11, IF(DN$1='Stars and Floors'!$C11,1, 0) + IF(DN$1='Stars and Floors'!$D11,1, 0) + IF(DN$1='Stars and Floors'!$E11,1, 0) + IF(DN$1='Stars and Floors'!$F11,1, 0) + IF(DN$1='Stars and Floors'!$G11,1, 0), 0)` |
| DO11 | `=IF('Stars and Floors'!$A11, IF(DO$1='Stars and Floors'!$C11,1, 0) + IF(DO$1='Stars and Floors'!$D11,1, 0) + IF(DO$1='Stars and Floors'!$E11,1, 0) + IF(DO$1='Stars and Floors'!$F11,1, 0) + IF(DO$1='Stars and Floors'!$G11,1, 0), 0)` |
| DP11 | `=IF('Stars and Floors'!$A11, IF(DP$1='Stars and Floors'!$C11,1, 0) + IF(DP$1='Stars and Floors'!$D11,1, 0) + IF(DP$1='Stars and Floors'!$E11,1, 0) + IF(DP$1='Stars and Floors'!$F11,1, 0) + IF(DP$1='Stars and Floors'!$G11,1, 0), 0)` |
| DQ11 | `=IF('Stars and Floors'!$A11, IF(DQ$1='Stars and Floors'!$C11,1, 0) + IF(DQ$1='Stars and Floors'!$D11,1, 0) + IF(DQ$1='Stars and Floors'!$E11,1, 0) + IF(DQ$1='Stars and Floors'!$F11,1, 0) + IF(DQ$1='Stars and Floors'!$G11,1, 0), 0)` |
| B12 | `=IF('Stars and Floors'!$A12, IF(B$1='Stars and Floors'!$C12,1, 0) + IF(B$1='Stars and Floors'!$D12,1, 0) + IF(B$1='Stars and Floors'!$E12,1, 0) + IF(B$1='Stars and Floors'!$F12,1, 0) + IF(B$1='Stars and Floors'!$G12,1, 0), 0)` |
| C12 | `=IF('Stars and Floors'!$A12, IF(C$1='Stars and Floors'!$C12,1, 0) + IF(C$1='Stars and Floors'!$D12,1, 0) + IF(C$1='Stars and Floors'!$E12,1, 0) + IF(C$1='Stars and Floors'!$F12,1, 0) + IF(C$1='Stars and Floors'!$G12,1, 0), 0)` |
| D12 | `=IF('Stars and Floors'!$A12, IF(D$1='Stars and Floors'!$C12,1, 0) + IF(D$1='Stars and Floors'!$D12,1, 0) + IF(D$1='Stars and Floors'!$E12,1, 0) + IF(D$1='Stars and Floors'!$F12,1, 0) + IF(D$1='Stars and Floors'!$G12,1, 0), 0)` |
| E12 | `=IF('Stars and Floors'!$A12, IF(E$1='Stars and Floors'!$C12,1, 0) + IF(E$1='Stars and Floors'!$D12,1, 0) + IF(E$1='Stars and Floors'!$E12,1, 0) + IF(E$1='Stars and Floors'!$F12,1, 0) + IF(E$1='Stars and Floors'!$G12,1, 0), 0)` |
| F12 | `=IF('Stars and Floors'!$A12, IF(F$1='Stars and Floors'!$C12,1, 0) + IF(F$1='Stars and Floors'!$D12,1, 0) + IF(F$1='Stars and Floors'!$E12,1, 0) + IF(F$1='Stars and Floors'!$F12,1, 0) + IF(F$1='Stars and Floors'!$G12,1, 0), 0)` |
| G12 | `=IF('Stars and Floors'!$A12, IF(G$1='Stars and Floors'!$C12,1, 0) + IF(G$1='Stars and Floors'!$D12,1, 0) + IF(G$1='Stars and Floors'!$E12,1, 0) + IF(G$1='Stars and Floors'!$F12,1, 0) + IF(G$1='Stars and Floors'!$G12,1, 0), 0)` |
| H12 | `=IF('Stars and Floors'!$A12, IF(H$1='Stars and Floors'!$C12,1, 0) + IF(H$1='Stars and Floors'!$D12,1, 0) + IF(H$1='Stars and Floors'!$E12,1, 0) + IF(H$1='Stars and Floors'!$F12,1, 0) + IF(H$1='Stars and Floors'!$G12,1, 0), 0)` |
| I12 | `=IF('Stars and Floors'!$A12, IF(I$1='Stars and Floors'!$C12,1, 0) + IF(I$1='Stars and Floors'!$D12,1, 0) + IF(I$1='Stars and Floors'!$E12,1, 0) + IF(I$1='Stars and Floors'!$F12,1, 0) + IF(I$1='Stars and Floors'!$G12,1, 0), 0)` |
| J12 | `=IF('Stars and Floors'!$A12, IF(J$1='Stars and Floors'!$C12,1, 0) + IF(J$1='Stars and Floors'!$D12,1, 0) + IF(J$1='Stars and Floors'!$E12,1, 0) + IF(J$1='Stars and Floors'!$F12,1, 0) + IF(J$1='Stars and Floors'!$G12,1, 0), 0)` |
| K12 | `=IF('Stars and Floors'!$A12, IF(K$1='Stars and Floors'!$C12,1, 0) + IF(K$1='Stars and Floors'!$D12,1, 0) + IF(K$1='Stars and Floors'!$E12,1, 0) + IF(K$1='Stars and Floors'!$F12,1, 0) + IF(K$1='Stars and Floors'!$G12,1, 0), 0)` |
| L12 | `=IF('Stars and Floors'!$A12, IF(L$1='Stars and Floors'!$C12,1, 0) + IF(L$1='Stars and Floors'!$D12,1, 0) + IF(L$1='Stars and Floors'!$E12,1, 0) + IF(L$1='Stars and Floors'!$F12,1, 0) + IF(L$1='Stars and Floors'!$G12,1, 0), 0)` |
| M12 | `=IF('Stars and Floors'!$A12, IF(M$1='Stars and Floors'!$C12,1, 0) + IF(M$1='Stars and Floors'!$D12,1, 0) + IF(M$1='Stars and Floors'!$E12,1, 0) + IF(M$1='Stars and Floors'!$F12,1, 0) + IF(M$1='Stars and Floors'!$G12,1, 0), 0)` |
| N12 | `=IF('Stars and Floors'!$A12, IF(N$1='Stars and Floors'!$C12,1, 0) + IF(N$1='Stars and Floors'!$D12,1, 0) + IF(N$1='Stars and Floors'!$E12,1, 0) + IF(N$1='Stars and Floors'!$F12,1, 0) + IF(N$1='Stars and Floors'!$G12,1, 0), 0)` |
| O12 | `=IF('Stars and Floors'!$A12, IF(O$1='Stars and Floors'!$C12,1, 0) + IF(O$1='Stars and Floors'!$D12,1, 0) + IF(O$1='Stars and Floors'!$E12,1, 0) + IF(O$1='Stars and Floors'!$F12,1, 0) + IF(O$1='Stars and Floors'!$G12,1, 0), 0)` |
| P12 | `=IF('Stars and Floors'!$A12, IF(P$1='Stars and Floors'!$C12,1, 0) + IF(P$1='Stars and Floors'!$D12,1, 0) + IF(P$1='Stars and Floors'!$E12,1, 0) + IF(P$1='Stars and Floors'!$F12,1, 0) + IF(P$1='Stars and Floors'!$G12,1, 0), 0)` |
| Q12 | `=IF('Stars and Floors'!$A12, IF(Q$1='Stars and Floors'!$C12,1, 0) + IF(Q$1='Stars and Floors'!$D12,1, 0) + IF(Q$1='Stars and Floors'!$E12,1, 0) + IF(Q$1='Stars and Floors'!$F12,1, 0) + IF(Q$1='Stars and Floors'!$G12,1, 0), 0)` |
| R12 | `=IF('Stars and Floors'!$A12, IF(R$1='Stars and Floors'!$C12,1, 0) + IF(R$1='Stars and Floors'!$D12,1, 0) + IF(R$1='Stars and Floors'!$E12,1, 0) + IF(R$1='Stars and Floors'!$F12,1, 0) + IF(R$1='Stars and Floors'!$G12,1, 0), 0)` |
| S12 | `=IF('Stars and Floors'!$A12, IF(S$1='Stars and Floors'!$C12,1, 0) + IF(S$1='Stars and Floors'!$D12,1, 0) + IF(S$1='Stars and Floors'!$E12,1, 0) + IF(S$1='Stars and Floors'!$F12,1, 0) + IF(S$1='Stars and Floors'!$G12,1, 0), 0)` |
| T12 | `=IF('Stars and Floors'!$A12, IF(T$1='Stars and Floors'!$C12,1, 0) + IF(T$1='Stars and Floors'!$D12,1, 0) + IF(T$1='Stars and Floors'!$E12,1, 0) + IF(T$1='Stars and Floors'!$F12,1, 0) + IF(T$1='Stars and Floors'!$G12,1, 0), 0)` |
| U12 | `=IF('Stars and Floors'!$A12, IF(U$1='Stars and Floors'!$C12,1, 0) + IF(U$1='Stars and Floors'!$D12,1, 0) + IF(U$1='Stars and Floors'!$E12,1, 0) + IF(U$1='Stars and Floors'!$F12,1, 0) + IF(U$1='Stars and Floors'!$G12,1, 0), 0)` |
| V12 | `=IF('Stars and Floors'!$A12, IF(V$1='Stars and Floors'!$C12,1, 0) + IF(V$1='Stars and Floors'!$D12,1, 0) + IF(V$1='Stars and Floors'!$E12,1, 0) + IF(V$1='Stars and Floors'!$F12,1, 0) + IF(V$1='Stars and Floors'!$G12,1, 0), 0)` |
| W12 | `=IF('Stars and Floors'!$A12, IF(W$1='Stars and Floors'!$C12,1, 0) + IF(W$1='Stars and Floors'!$D12,1, 0) + IF(W$1='Stars and Floors'!$E12,1, 0) + IF(W$1='Stars and Floors'!$F12,1, 0) + IF(W$1='Stars and Floors'!$G12,1, 0), 0)` |
| X12 | `=IF('Stars and Floors'!$A12, IF(X$1='Stars and Floors'!$C12,1, 0) + IF(X$1='Stars and Floors'!$D12,1, 0) + IF(X$1='Stars and Floors'!$E12,1, 0) + IF(X$1='Stars and Floors'!$F12,1, 0) + IF(X$1='Stars and Floors'!$G12,1, 0), 0)` |
| Y12 | `=IF('Stars and Floors'!$A12, IF(Y$1='Stars and Floors'!$C12,1, 0) + IF(Y$1='Stars and Floors'!$D12,1, 0) + IF(Y$1='Stars and Floors'!$E12,1, 0) + IF(Y$1='Stars and Floors'!$F12,1, 0) + IF(Y$1='Stars and Floors'!$G12,1, 0), 0)` |
| Z12 | `=IF('Stars and Floors'!$A12, IF(Z$1='Stars and Floors'!$C12,1, 0) + IF(Z$1='Stars and Floors'!$D12,1, 0) + IF(Z$1='Stars and Floors'!$E12,1, 0) + IF(Z$1='Stars and Floors'!$F12,1, 0) + IF(Z$1='Stars and Floors'!$G12,1, 0), 0)` |
| AA12 | `=IF('Stars and Floors'!$A12, IF(AA$1='Stars and Floors'!$C12,1, 0) + IF(AA$1='Stars and Floors'!$D12,1, 0) + IF(AA$1='Stars and Floors'!$E12,1, 0) + IF(AA$1='Stars and Floors'!$F12,1, 0) + IF(AA$1='Stars and Floors'!$G12,1, 0), 0)` |
| AB12 | `=IF('Stars and Floors'!$A12, IF(AB$1='Stars and Floors'!$C12,1, 0) + IF(AB$1='Stars and Floors'!$D12,1, 0) + IF(AB$1='Stars and Floors'!$E12,1, 0) + IF(AB$1='Stars and Floors'!$F12,1, 0) + IF(AB$1='Stars and Floors'!$G12,1, 0), 0)` |
| AC12 | `=IF('Stars and Floors'!$A12, IF(AC$1='Stars and Floors'!$C12,1, 0) + IF(AC$1='Stars and Floors'!$D12,1, 0) + IF(AC$1='Stars and Floors'!$E12,1, 0) + IF(AC$1='Stars and Floors'!$F12,1, 0) + IF(AC$1='Stars and Floors'!$G12,1, 0), 0)` |
| AD12 | `=IF('Stars and Floors'!$A12, IF(AD$1='Stars and Floors'!$C12,1, 0) + IF(AD$1='Stars and Floors'!$D12,1, 0) + IF(AD$1='Stars and Floors'!$E12,1, 0) + IF(AD$1='Stars and Floors'!$F12,1, 0) + IF(AD$1='Stars and Floors'!$G12,1, 0), 0)` |
| AE12 | `=IF('Stars and Floors'!$A12, IF(AE$1='Stars and Floors'!$C12,1, 0) + IF(AE$1='Stars and Floors'!$D12,1, 0) + IF(AE$1='Stars and Floors'!$E12,1, 0) + IF(AE$1='Stars and Floors'!$F12,1, 0) + IF(AE$1='Stars and Floors'!$G12,1, 0), 0)` |
| AF12 | `=IF('Stars and Floors'!$A12, IF(AF$1='Stars and Floors'!$C12,1, 0) + IF(AF$1='Stars and Floors'!$D12,1, 0) + IF(AF$1='Stars and Floors'!$E12,1, 0) + IF(AF$1='Stars and Floors'!$F12,1, 0) + IF(AF$1='Stars and Floors'!$G12,1, 0), 0)` |
| AG12 | `=IF('Stars and Floors'!$A12, IF(AG$1='Stars and Floors'!$C12,1, 0) + IF(AG$1='Stars and Floors'!$D12,1, 0) + IF(AG$1='Stars and Floors'!$E12,1, 0) + IF(AG$1='Stars and Floors'!$F12,1, 0) + IF(AG$1='Stars and Floors'!$G12,1, 0), 0)` |
| AH12 | `=IF('Stars and Floors'!$A12, IF(AH$1='Stars and Floors'!$C12,1, 0) + IF(AH$1='Stars and Floors'!$D12,1, 0) + IF(AH$1='Stars and Floors'!$E12,1, 0) + IF(AH$1='Stars and Floors'!$F12,1, 0) + IF(AH$1='Stars and Floors'!$G12,1, 0), 0)` |
| AI12 | `=IF('Stars and Floors'!$A12, IF(AI$1='Stars and Floors'!$C12,1, 0) + IF(AI$1='Stars and Floors'!$D12,1, 0) + IF(AI$1='Stars and Floors'!$E12,1, 0) + IF(AI$1='Stars and Floors'!$F12,1, 0) + IF(AI$1='Stars and Floors'!$G12,1, 0), 0)` |
| AJ12 | `=IF('Stars and Floors'!$A12, IF(AJ$1='Stars and Floors'!$C12,1, 0) + IF(AJ$1='Stars and Floors'!$D12,1, 0) + IF(AJ$1='Stars and Floors'!$E12,1, 0) + IF(AJ$1='Stars and Floors'!$F12,1, 0) + IF(AJ$1='Stars and Floors'!$G12,1, 0), 0)` |
| AK12 | `=IF('Stars and Floors'!$A12, IF(AK$1='Stars and Floors'!$C12,1, 0) + IF(AK$1='Stars and Floors'!$D12,1, 0) + IF(AK$1='Stars and Floors'!$E12,1, 0) + IF(AK$1='Stars and Floors'!$F12,1, 0) + IF(AK$1='Stars and Floors'!$G12,1, 0), 0)` |
| AL12 | `=IF('Stars and Floors'!$A12, IF(AL$1='Stars and Floors'!$C12,1, 0) + IF(AL$1='Stars and Floors'!$D12,1, 0) + IF(AL$1='Stars and Floors'!$E12,1, 0) + IF(AL$1='Stars and Floors'!$F12,1, 0) + IF(AL$1='Stars and Floors'!$G12,1, 0), 0)` |
| AM12 | `=IF('Stars and Floors'!$A12, IF(AM$1='Stars and Floors'!$C12,1, 0) + IF(AM$1='Stars and Floors'!$D12,1, 0) + IF(AM$1='Stars and Floors'!$E12,1, 0) + IF(AM$1='Stars and Floors'!$F12,1, 0) + IF(AM$1='Stars and Floors'!$G12,1, 0), 0)` |
| AN12 | `=IF('Stars and Floors'!$A12, IF(AN$1='Stars and Floors'!$C12,1, 0) + IF(AN$1='Stars and Floors'!$D12,1, 0) + IF(AN$1='Stars and Floors'!$E12,1, 0) + IF(AN$1='Stars and Floors'!$F12,1, 0) + IF(AN$1='Stars and Floors'!$G12,1, 0), 0)` |
| AO12 | `=IF('Stars and Floors'!$A12, IF(AO$1='Stars and Floors'!$C12,1, 0) + IF(AO$1='Stars and Floors'!$D12,1, 0) + IF(AO$1='Stars and Floors'!$E12,1, 0) + IF(AO$1='Stars and Floors'!$F12,1, 0) + IF(AO$1='Stars and Floors'!$G12,1, 0), 0)` |
| AP12 | `=IF('Stars and Floors'!$A12, IF(AP$1='Stars and Floors'!$C12,1, 0) + IF(AP$1='Stars and Floors'!$D12,1, 0) + IF(AP$1='Stars and Floors'!$E12,1, 0) + IF(AP$1='Stars and Floors'!$F12,1, 0) + IF(AP$1='Stars and Floors'!$G12,1, 0), 0)` |
| AQ12 | `=IF('Stars and Floors'!$A12, IF(AQ$1='Stars and Floors'!$C12,1, 0) + IF(AQ$1='Stars and Floors'!$D12,1, 0) + IF(AQ$1='Stars and Floors'!$E12,1, 0) + IF(AQ$1='Stars and Floors'!$F12,1, 0) + IF(AQ$1='Stars and Floors'!$G12,1, 0), 0)` |
| AR12 | `=IF('Stars and Floors'!$A12, IF(AR$1='Stars and Floors'!$C12,1, 0) + IF(AR$1='Stars and Floors'!$D12,1, 0) + IF(AR$1='Stars and Floors'!$E12,1, 0) + IF(AR$1='Stars and Floors'!$F12,1, 0) + IF(AR$1='Stars and Floors'!$G12,1, 0), 0)` |
| AS12 | `=IF('Stars and Floors'!$A12, IF(AS$1='Stars and Floors'!$C12,1, 0) + IF(AS$1='Stars and Floors'!$D12,1, 0) + IF(AS$1='Stars and Floors'!$E12,1, 0) + IF(AS$1='Stars and Floors'!$F12,1, 0) + IF(AS$1='Stars and Floors'!$G12,1, 0), 0)` |
| AT12 | `=IF('Stars and Floors'!$A12, IF(AT$1='Stars and Floors'!$C12,1, 0) + IF(AT$1='Stars and Floors'!$D12,1, 0) + IF(AT$1='Stars and Floors'!$E12,1, 0) + IF(AT$1='Stars and Floors'!$F12,1, 0) + IF(AT$1='Stars and Floors'!$G12,1, 0), 0)` |
| AU12 | `=IF('Stars and Floors'!$A12, IF(AU$1='Stars and Floors'!$C12,1, 0) + IF(AU$1='Stars and Floors'!$D12,1, 0) + IF(AU$1='Stars and Floors'!$E12,1, 0) + IF(AU$1='Stars and Floors'!$F12,1, 0) + IF(AU$1='Stars and Floors'!$G12,1, 0), 0)` |
| AV12 | `=IF('Stars and Floors'!$A12, IF(AV$1='Stars and Floors'!$C12,1, 0) + IF(AV$1='Stars and Floors'!$D12,1, 0) + IF(AV$1='Stars and Floors'!$E12,1, 0) + IF(AV$1='Stars and Floors'!$F12,1, 0) + IF(AV$1='Stars and Floors'!$G12,1, 0), 0)` |
| AW12 | `=IF('Stars and Floors'!$A12, IF(AW$1='Stars and Floors'!$C12,1, 0) + IF(AW$1='Stars and Floors'!$D12,1, 0) + IF(AW$1='Stars and Floors'!$E12,1, 0) + IF(AW$1='Stars and Floors'!$F12,1, 0) + IF(AW$1='Stars and Floors'!$G12,1, 0), 0)` |
| AX12 | `=IF('Stars and Floors'!$A12, IF(AX$1='Stars and Floors'!$C12,1, 0) + IF(AX$1='Stars and Floors'!$D12,1, 0) + IF(AX$1='Stars and Floors'!$E12,1, 0) + IF(AX$1='Stars and Floors'!$F12,1, 0) + IF(AX$1='Stars and Floors'!$G12,1, 0), 0)` |
| AY12 | `=IF('Stars and Floors'!$A12, IF(AY$1='Stars and Floors'!$C12,1, 0) + IF(AY$1='Stars and Floors'!$D12,1, 0) + IF(AY$1='Stars and Floors'!$E12,1, 0) + IF(AY$1='Stars and Floors'!$F12,1, 0) + IF(AY$1='Stars and Floors'!$G12,1, 0), 0)` |
| AZ12 | `=IF('Stars and Floors'!$A12, IF(AZ$1='Stars and Floors'!$C12,1, 0) + IF(AZ$1='Stars and Floors'!$D12,1, 0) + IF(AZ$1='Stars and Floors'!$E12,1, 0) + IF(AZ$1='Stars and Floors'!$F12,1, 0) + IF(AZ$1='Stars and Floors'!$G12,1, 0), 0)` |
| BA12 | `=IF('Stars and Floors'!$A12, IF(BA$1='Stars and Floors'!$C12,1, 0) + IF(BA$1='Stars and Floors'!$D12,1, 0) + IF(BA$1='Stars and Floors'!$E12,1, 0) + IF(BA$1='Stars and Floors'!$F12,1, 0) + IF(BA$1='Stars and Floors'!$G12,1, 0), 0)` |
| BB12 | `=IF('Stars and Floors'!$A12, IF(BB$1='Stars and Floors'!$C12,1, 0) + IF(BB$1='Stars and Floors'!$D12,1, 0) + IF(BB$1='Stars and Floors'!$E12,1, 0) + IF(BB$1='Stars and Floors'!$F12,1, 0) + IF(BB$1='Stars and Floors'!$G12,1, 0), 0)` |
| BC12 | `=IF('Stars and Floors'!$A12, IF(BC$1='Stars and Floors'!$C12,1, 0) + IF(BC$1='Stars and Floors'!$D12,1, 0) + IF(BC$1='Stars and Floors'!$E12,1, 0) + IF(BC$1='Stars and Floors'!$F12,1, 0) + IF(BC$1='Stars and Floors'!$G12,1, 0), 0)` |
| BD12 | `=IF('Stars and Floors'!$A12, IF(BD$1='Stars and Floors'!$C12,1, 0) + IF(BD$1='Stars and Floors'!$D12,1, 0) + IF(BD$1='Stars and Floors'!$E12,1, 0) + IF(BD$1='Stars and Floors'!$F12,1, 0) + IF(BD$1='Stars and Floors'!$G12,1, 0), 0)` |
| BE12 | `=IF('Stars and Floors'!$A12, IF(BE$1='Stars and Floors'!$C12,1, 0) + IF(BE$1='Stars and Floors'!$D12,1, 0) + IF(BE$1='Stars and Floors'!$E12,1, 0) + IF(BE$1='Stars and Floors'!$F12,1, 0) + IF(BE$1='Stars and Floors'!$G12,1, 0), 0)` |
| BF12 | `=IF('Stars and Floors'!$A12, IF(BF$1='Stars and Floors'!$C12,1, 0) + IF(BF$1='Stars and Floors'!$D12,1, 0) + IF(BF$1='Stars and Floors'!$E12,1, 0) + IF(BF$1='Stars and Floors'!$F12,1, 0) + IF(BF$1='Stars and Floors'!$G12,1, 0), 0)` |
| BG12 | `=IF('Stars and Floors'!$A12, IF(BG$1='Stars and Floors'!$C12,1, 0) + IF(BG$1='Stars and Floors'!$D12,1, 0) + IF(BG$1='Stars and Floors'!$E12,1, 0) + IF(BG$1='Stars and Floors'!$F12,1, 0) + IF(BG$1='Stars and Floors'!$G12,1, 0), 0)` |
| BH12 | `=IF('Stars and Floors'!$A12, IF(BH$1='Stars and Floors'!$C12,1, 0) + IF(BH$1='Stars and Floors'!$D12,1, 0) + IF(BH$1='Stars and Floors'!$E12,1, 0) + IF(BH$1='Stars and Floors'!$F12,1, 0) + IF(BH$1='Stars and Floors'!$G12,1, 0), 0)` |
| BI12 | `=IF('Stars and Floors'!$A12, IF(BI$1='Stars and Floors'!$C12,1, 0) + IF(BI$1='Stars and Floors'!$D12,1, 0) + IF(BI$1='Stars and Floors'!$E12,1, 0) + IF(BI$1='Stars and Floors'!$F12,1, 0) + IF(BI$1='Stars and Floors'!$G12,1, 0), 0)` |
| BJ12 | `=IF('Stars and Floors'!$A12, IF(BJ$1='Stars and Floors'!$C12,1, 0) + IF(BJ$1='Stars and Floors'!$D12,1, 0) + IF(BJ$1='Stars and Floors'!$E12,1, 0) + IF(BJ$1='Stars and Floors'!$F12,1, 0) + IF(BJ$1='Stars and Floors'!$G12,1, 0), 0)` |
| BK12 | `=IF('Stars and Floors'!$A12, IF(BK$1='Stars and Floors'!$C12,1, 0) + IF(BK$1='Stars and Floors'!$D12,1, 0) + IF(BK$1='Stars and Floors'!$E12,1, 0) + IF(BK$1='Stars and Floors'!$F12,1, 0) + IF(BK$1='Stars and Floors'!$G12,1, 0), 0)` |
| BL12 | `=IF('Stars and Floors'!$A12, IF(BL$1='Stars and Floors'!$C12,1, 0) + IF(BL$1='Stars and Floors'!$D12,1, 0) + IF(BL$1='Stars and Floors'!$E12,1, 0) + IF(BL$1='Stars and Floors'!$F12,1, 0) + IF(BL$1='Stars and Floors'!$G12,1, 0), 0)` |
| BM12 | `=IF('Stars and Floors'!$A12, IF(BM$1='Stars and Floors'!$C12,1, 0) + IF(BM$1='Stars and Floors'!$D12,1, 0) + IF(BM$1='Stars and Floors'!$E12,1, 0) + IF(BM$1='Stars and Floors'!$F12,1, 0) + IF(BM$1='Stars and Floors'!$G12,1, 0), 0)` |
| BN12 | `=IF('Stars and Floors'!$A12, IF(BN$1='Stars and Floors'!$C12,1, 0) + IF(BN$1='Stars and Floors'!$D12,1, 0) + IF(BN$1='Stars and Floors'!$E12,1, 0) + IF(BN$1='Stars and Floors'!$F12,1, 0) + IF(BN$1='Stars and Floors'!$G12,1, 0), 0)` |
| BO12 | `=IF('Stars and Floors'!$A12, IF(BO$1='Stars and Floors'!$C12,1, 0) + IF(BO$1='Stars and Floors'!$D12,1, 0) + IF(BO$1='Stars and Floors'!$E12,1, 0) + IF(BO$1='Stars and Floors'!$F12,1, 0) + IF(BO$1='Stars and Floors'!$G12,1, 0), 0)` |
| BP12 | `=IF('Stars and Floors'!$A12, IF(BP$1='Stars and Floors'!$C12,1, 0) + IF(BP$1='Stars and Floors'!$D12,1, 0) + IF(BP$1='Stars and Floors'!$E12,1, 0) + IF(BP$1='Stars and Floors'!$F12,1, 0) + IF(BP$1='Stars and Floors'!$G12,1, 0), 0)` |
| BQ12 | `=IF('Stars and Floors'!$A12, IF(BQ$1='Stars and Floors'!$C12,1, 0) + IF(BQ$1='Stars and Floors'!$D12,1, 0) + IF(BQ$1='Stars and Floors'!$E12,1, 0) + IF(BQ$1='Stars and Floors'!$F12,1, 0) + IF(BQ$1='Stars and Floors'!$G12,1, 0), 0)` |
| BR12 | `=IF('Stars and Floors'!$A12, IF(BR$1='Stars and Floors'!$C12,1, 0) + IF(BR$1='Stars and Floors'!$D12,1, 0) + IF(BR$1='Stars and Floors'!$E12,1, 0) + IF(BR$1='Stars and Floors'!$F12,1, 0) + IF(BR$1='Stars and Floors'!$G12,1, 0), 0)` |
| BS12 | `=IF('Stars and Floors'!$A12, IF(BS$1='Stars and Floors'!$C12,1, 0) + IF(BS$1='Stars and Floors'!$D12,1, 0) + IF(BS$1='Stars and Floors'!$E12,1, 0) + IF(BS$1='Stars and Floors'!$F12,1, 0) + IF(BS$1='Stars and Floors'!$G12,1, 0), 0)` |
| BT12 | `=IF('Stars and Floors'!$A12, IF(BT$1='Stars and Floors'!$C12,1, 0) + IF(BT$1='Stars and Floors'!$D12,1, 0) + IF(BT$1='Stars and Floors'!$E12,1, 0) + IF(BT$1='Stars and Floors'!$F12,1, 0) + IF(BT$1='Stars and Floors'!$G12,1, 0), 0)` |
| BU12 | `=IF('Stars and Floors'!$A12, IF(BU$1='Stars and Floors'!$C12,1, 0) + IF(BU$1='Stars and Floors'!$D12,1, 0) + IF(BU$1='Stars and Floors'!$E12,1, 0) + IF(BU$1='Stars and Floors'!$F12,1, 0) + IF(BU$1='Stars and Floors'!$G12,1, 0), 0)` |
| BV12 | `=IF('Stars and Floors'!$A12, IF(BV$1='Stars and Floors'!$C12,1, 0) + IF(BV$1='Stars and Floors'!$D12,1, 0) + IF(BV$1='Stars and Floors'!$E12,1, 0) + IF(BV$1='Stars and Floors'!$F12,1, 0) + IF(BV$1='Stars and Floors'!$G12,1, 0), 0)` |
| BW12 | `=IF('Stars and Floors'!$A12, IF(BW$1='Stars and Floors'!$C12,1, 0) + IF(BW$1='Stars and Floors'!$D12,1, 0) + IF(BW$1='Stars and Floors'!$E12,1, 0) + IF(BW$1='Stars and Floors'!$F12,1, 0) + IF(BW$1='Stars and Floors'!$G12,1, 0), 0)` |
| BX12 | `=IF('Stars and Floors'!$A12, IF(BX$1='Stars and Floors'!$C12,1, 0) + IF(BX$1='Stars and Floors'!$D12,1, 0) + IF(BX$1='Stars and Floors'!$E12,1, 0) + IF(BX$1='Stars and Floors'!$F12,1, 0) + IF(BX$1='Stars and Floors'!$G12,1, 0), 0)` |
| BY12 | `=IF('Stars and Floors'!$A12, IF(BY$1='Stars and Floors'!$C12,1, 0) + IF(BY$1='Stars and Floors'!$D12,1, 0) + IF(BY$1='Stars and Floors'!$E12,1, 0) + IF(BY$1='Stars and Floors'!$F12,1, 0) + IF(BY$1='Stars and Floors'!$G12,1, 0), 0)` |
| BZ12 | `=IF('Stars and Floors'!$A12, IF(BZ$1='Stars and Floors'!$C12,1, 0) + IF(BZ$1='Stars and Floors'!$D12,1, 0) + IF(BZ$1='Stars and Floors'!$E12,1, 0) + IF(BZ$1='Stars and Floors'!$F12,1, 0) + IF(BZ$1='Stars and Floors'!$G12,1, 0), 0)` |
| CA12 | `=IF('Stars and Floors'!$A12, IF(CA$1='Stars and Floors'!$C12,1, 0) + IF(CA$1='Stars and Floors'!$D12,1, 0) + IF(CA$1='Stars and Floors'!$E12,1, 0) + IF(CA$1='Stars and Floors'!$F12,1, 0) + IF(CA$1='Stars and Floors'!$G12,1, 0), 0)` |
| CB12 | `=IF('Stars and Floors'!$A12, IF(CB$1='Stars and Floors'!$C12,1, 0) + IF(CB$1='Stars and Floors'!$D12,1, 0) + IF(CB$1='Stars and Floors'!$E12,1, 0) + IF(CB$1='Stars and Floors'!$F12,1, 0) + IF(CB$1='Stars and Floors'!$G12,1, 0), 0)` |
| CC12 | `=IF('Stars and Floors'!$A12, IF(CC$1='Stars and Floors'!$C12,1, 0) + IF(CC$1='Stars and Floors'!$D12,1, 0) + IF(CC$1='Stars and Floors'!$E12,1, 0) + IF(CC$1='Stars and Floors'!$F12,1, 0) + IF(CC$1='Stars and Floors'!$G12,1, 0), 0)` |
| CD12 | `=IF('Stars and Floors'!$A12, IF(CD$1='Stars and Floors'!$C12,1, 0) + IF(CD$1='Stars and Floors'!$D12,1, 0) + IF(CD$1='Stars and Floors'!$E12,1, 0) + IF(CD$1='Stars and Floors'!$F12,1, 0) + IF(CD$1='Stars and Floors'!$G12,1, 0), 0)` |
| CE12 | `=IF('Stars and Floors'!$A12, IF(CE$1='Stars and Floors'!$C12,1, 0) + IF(CE$1='Stars and Floors'!$D12,1, 0) + IF(CE$1='Stars and Floors'!$E12,1, 0) + IF(CE$1='Stars and Floors'!$F12,1, 0) + IF(CE$1='Stars and Floors'!$G12,1, 0), 0)` |
| CF12 | `=IF('Stars and Floors'!$A12, IF(CF$1='Stars and Floors'!$C12,1, 0) + IF(CF$1='Stars and Floors'!$D12,1, 0) + IF(CF$1='Stars and Floors'!$E12,1, 0) + IF(CF$1='Stars and Floors'!$F12,1, 0) + IF(CF$1='Stars and Floors'!$G12,1, 0), 0)` |
| CG12 | `=IF('Stars and Floors'!$A12, IF(CG$1='Stars and Floors'!$C12,1, 0) + IF(CG$1='Stars and Floors'!$D12,1, 0) + IF(CG$1='Stars and Floors'!$E12,1, 0) + IF(CG$1='Stars and Floors'!$F12,1, 0) + IF(CG$1='Stars and Floors'!$G12,1, 0), 0)` |
| CH12 | `=IF('Stars and Floors'!$A12, IF(CH$1='Stars and Floors'!$C12,1, 0) + IF(CH$1='Stars and Floors'!$D12,1, 0) + IF(CH$1='Stars and Floors'!$E12,1, 0) + IF(CH$1='Stars and Floors'!$F12,1, 0) + IF(CH$1='Stars and Floors'!$G12,1, 0), 0)` |
| CI12 | `=IF('Stars and Floors'!$A12, IF(CI$1='Stars and Floors'!$C12,1, 0) + IF(CI$1='Stars and Floors'!$D12,1, 0) + IF(CI$1='Stars and Floors'!$E12,1, 0) + IF(CI$1='Stars and Floors'!$F12,1, 0) + IF(CI$1='Stars and Floors'!$G12,1, 0), 0)` |
| CJ12 | `=IF('Stars and Floors'!$A12, IF(CJ$1='Stars and Floors'!$C12,1, 0) + IF(CJ$1='Stars and Floors'!$D12,1, 0) + IF(CJ$1='Stars and Floors'!$E12,1, 0) + IF(CJ$1='Stars and Floors'!$F12,1, 0) + IF(CJ$1='Stars and Floors'!$G12,1, 0), 0)` |
| CK12 | `=IF('Stars and Floors'!$A12, IF(CK$1='Stars and Floors'!$C12,1, 0) + IF(CK$1='Stars and Floors'!$D12,1, 0) + IF(CK$1='Stars and Floors'!$E12,1, 0) + IF(CK$1='Stars and Floors'!$F12,1, 0) + IF(CK$1='Stars and Floors'!$G12,1, 0), 0)` |
| CL12 | `=IF('Stars and Floors'!$A12, IF(CL$1='Stars and Floors'!$C12,1, 0) + IF(CL$1='Stars and Floors'!$D12,1, 0) + IF(CL$1='Stars and Floors'!$E12,1, 0) + IF(CL$1='Stars and Floors'!$F12,1, 0) + IF(CL$1='Stars and Floors'!$G12,1, 0), 0)` |
| CM12 | `=IF('Stars and Floors'!$A12, IF(CM$1='Stars and Floors'!$C12,1, 0) + IF(CM$1='Stars and Floors'!$D12,1, 0) + IF(CM$1='Stars and Floors'!$E12,1, 0) + IF(CM$1='Stars and Floors'!$F12,1, 0) + IF(CM$1='Stars and Floors'!$G12,1, 0), 0)` |
| CN12 | `=IF('Stars and Floors'!$A12, IF(CN$1='Stars and Floors'!$C12,1, 0) + IF(CN$1='Stars and Floors'!$D12,1, 0) + IF(CN$1='Stars and Floors'!$E12,1, 0) + IF(CN$1='Stars and Floors'!$F12,1, 0) + IF(CN$1='Stars and Floors'!$G12,1, 0), 0)` |
| CO12 | `=IF('Stars and Floors'!$A12, IF(CO$1='Stars and Floors'!$C12,1, 0) + IF(CO$1='Stars and Floors'!$D12,1, 0) + IF(CO$1='Stars and Floors'!$E12,1, 0) + IF(CO$1='Stars and Floors'!$F12,1, 0) + IF(CO$1='Stars and Floors'!$G12,1, 0), 0)` |
| CP12 | `=IF('Stars and Floors'!$A12, IF(CP$1='Stars and Floors'!$C12,1, 0) + IF(CP$1='Stars and Floors'!$D12,1, 0) + IF(CP$1='Stars and Floors'!$E12,1, 0) + IF(CP$1='Stars and Floors'!$F12,1, 0) + IF(CP$1='Stars and Floors'!$G12,1, 0), 0)` |
| CQ12 | `=IF('Stars and Floors'!$A12, IF(CQ$1='Stars and Floors'!$C12,1, 0) + IF(CQ$1='Stars and Floors'!$D12,1, 0) + IF(CQ$1='Stars and Floors'!$E12,1, 0) + IF(CQ$1='Stars and Floors'!$F12,1, 0) + IF(CQ$1='Stars and Floors'!$G12,1, 0), 0)` |
| CR12 | `=IF('Stars and Floors'!$A12, IF(CR$1='Stars and Floors'!$C12,1, 0) + IF(CR$1='Stars and Floors'!$D12,1, 0) + IF(CR$1='Stars and Floors'!$E12,1, 0) + IF(CR$1='Stars and Floors'!$F12,1, 0) + IF(CR$1='Stars and Floors'!$G12,1, 0), 0)` |
| CS12 | `=IF('Stars and Floors'!$A12, IF(CS$1='Stars and Floors'!$C12,1, 0) + IF(CS$1='Stars and Floors'!$D12,1, 0) + IF(CS$1='Stars and Floors'!$E12,1, 0) + IF(CS$1='Stars and Floors'!$F12,1, 0) + IF(CS$1='Stars and Floors'!$G12,1, 0), 0)` |
| CT12 | `=IF('Stars and Floors'!$A12, IF(CT$1='Stars and Floors'!$C12,1, 0) + IF(CT$1='Stars and Floors'!$D12,1, 0) + IF(CT$1='Stars and Floors'!$E12,1, 0) + IF(CT$1='Stars and Floors'!$F12,1, 0) + IF(CT$1='Stars and Floors'!$G12,1, 0), 0)` |
| CU12 | `=IF('Stars and Floors'!$A12, IF(CU$1='Stars and Floors'!$C12,1, 0) + IF(CU$1='Stars and Floors'!$D12,1, 0) + IF(CU$1='Stars and Floors'!$E12,1, 0) + IF(CU$1='Stars and Floors'!$F12,1, 0) + IF(CU$1='Stars and Floors'!$G12,1, 0), 0)` |
| CV12 | `=IF('Stars and Floors'!$A12, IF(CV$1='Stars and Floors'!$C12,1, 0) + IF(CV$1='Stars and Floors'!$D12,1, 0) + IF(CV$1='Stars and Floors'!$E12,1, 0) + IF(CV$1='Stars and Floors'!$F12,1, 0) + IF(CV$1='Stars and Floors'!$G12,1, 0), 0)` |
| CW12 | `=IF('Stars and Floors'!$A12, IF(CW$1='Stars and Floors'!$C12,1, 0) + IF(CW$1='Stars and Floors'!$D12,1, 0) + IF(CW$1='Stars and Floors'!$E12,1, 0) + IF(CW$1='Stars and Floors'!$F12,1, 0) + IF(CW$1='Stars and Floors'!$G12,1, 0), 0)` |
| CX12 | `=IF('Stars and Floors'!$A12, IF(CX$1='Stars and Floors'!$C12,1, 0) + IF(CX$1='Stars and Floors'!$D12,1, 0) + IF(CX$1='Stars and Floors'!$E12,1, 0) + IF(CX$1='Stars and Floors'!$F12,1, 0) + IF(CX$1='Stars and Floors'!$G12,1, 0), 0)` |
| CY12 | `=IF('Stars and Floors'!$A12, IF(CY$1='Stars and Floors'!$C12,1, 0) + IF(CY$1='Stars and Floors'!$D12,1, 0) + IF(CY$1='Stars and Floors'!$E12,1, 0) + IF(CY$1='Stars and Floors'!$F12,1, 0) + IF(CY$1='Stars and Floors'!$G12,1, 0), 0)` |
| CZ12 | `=IF('Stars and Floors'!$A12, IF(CZ$1='Stars and Floors'!$C12,1, 0) + IF(CZ$1='Stars and Floors'!$D12,1, 0) + IF(CZ$1='Stars and Floors'!$E12,1, 0) + IF(CZ$1='Stars and Floors'!$F12,1, 0) + IF(CZ$1='Stars and Floors'!$G12,1, 0), 0)` |
| DA12 | `=IF('Stars and Floors'!$A12, IF(DA$1='Stars and Floors'!$C12,1, 0) + IF(DA$1='Stars and Floors'!$D12,1, 0) + IF(DA$1='Stars and Floors'!$E12,1, 0) + IF(DA$1='Stars and Floors'!$F12,1, 0) + IF(DA$1='Stars and Floors'!$G12,1, 0), 0)` |
| DB12 | `=IF('Stars and Floors'!$A12, IF(DB$1='Stars and Floors'!$C12,1, 0) + IF(DB$1='Stars and Floors'!$D12,1, 0) + IF(DB$1='Stars and Floors'!$E12,1, 0) + IF(DB$1='Stars and Floors'!$F12,1, 0) + IF(DB$1='Stars and Floors'!$G12,1, 0), 0)` |
| DC12 | `=IF('Stars and Floors'!$A12, IF(DC$1='Stars and Floors'!$C12,1, 0) + IF(DC$1='Stars and Floors'!$D12,1, 0) + IF(DC$1='Stars and Floors'!$E12,1, 0) + IF(DC$1='Stars and Floors'!$F12,1, 0) + IF(DC$1='Stars and Floors'!$G12,1, 0), 0)` |
| DD12 | `=IF('Stars and Floors'!$A12, IF(DD$1='Stars and Floors'!$C12,1, 0) + IF(DD$1='Stars and Floors'!$D12,1, 0) + IF(DD$1='Stars and Floors'!$E12,1, 0) + IF(DD$1='Stars and Floors'!$F12,1, 0) + IF(DD$1='Stars and Floors'!$G12,1, 0), 0)` |
| DE12 | `=IF('Stars and Floors'!$A12, IF(DE$1='Stars and Floors'!$C12,1, 0) + IF(DE$1='Stars and Floors'!$D12,1, 0) + IF(DE$1='Stars and Floors'!$E12,1, 0) + IF(DE$1='Stars and Floors'!$F12,1, 0) + IF(DE$1='Stars and Floors'!$G12,1, 0), 0)` |
| DF12 | `=IF('Stars and Floors'!$A12, IF(DF$1='Stars and Floors'!$C12,1, 0) + IF(DF$1='Stars and Floors'!$D12,1, 0) + IF(DF$1='Stars and Floors'!$E12,1, 0) + IF(DF$1='Stars and Floors'!$F12,1, 0) + IF(DF$1='Stars and Floors'!$G12,1, 0), 0)` |
| DG12 | `=IF('Stars and Floors'!$A12, IF(DG$1='Stars and Floors'!$C12,1, 0) + IF(DG$1='Stars and Floors'!$D12,1, 0) + IF(DG$1='Stars and Floors'!$E12,1, 0) + IF(DG$1='Stars and Floors'!$F12,1, 0) + IF(DG$1='Stars and Floors'!$G12,1, 0), 0)` |
| DH12 | `=IF('Stars and Floors'!$A12, IF(DH$1='Stars and Floors'!$C12,1, 0) + IF(DH$1='Stars and Floors'!$D12,1, 0) + IF(DH$1='Stars and Floors'!$E12,1, 0) + IF(DH$1='Stars and Floors'!$F12,1, 0) + IF(DH$1='Stars and Floors'!$G12,1, 0), 0)` |
| DI12 | `=IF('Stars and Floors'!$A12, IF(DI$1='Stars and Floors'!$C12,1, 0) + IF(DI$1='Stars and Floors'!$D12,1, 0) + IF(DI$1='Stars and Floors'!$E12,1, 0) + IF(DI$1='Stars and Floors'!$F12,1, 0) + IF(DI$1='Stars and Floors'!$G12,1, 0), 0)` |
| DJ12 | `=IF('Stars and Floors'!$A12, IF(DJ$1='Stars and Floors'!$C12,1, 0) + IF(DJ$1='Stars and Floors'!$D12,1, 0) + IF(DJ$1='Stars and Floors'!$E12,1, 0) + IF(DJ$1='Stars and Floors'!$F12,1, 0) + IF(DJ$1='Stars and Floors'!$G12,1, 0), 0)` |
| DK12 | `=IF('Stars and Floors'!$A12, IF(DK$1='Stars and Floors'!$C12,1, 0) + IF(DK$1='Stars and Floors'!$D12,1, 0) + IF(DK$1='Stars and Floors'!$E12,1, 0) + IF(DK$1='Stars and Floors'!$F12,1, 0) + IF(DK$1='Stars and Floors'!$G12,1, 0), 0)` |
| DL12 | `=IF('Stars and Floors'!$A12, IF(DL$1='Stars and Floors'!$C12,1, 0) + IF(DL$1='Stars and Floors'!$D12,1, 0) + IF(DL$1='Stars and Floors'!$E12,1, 0) + IF(DL$1='Stars and Floors'!$F12,1, 0) + IF(DL$1='Stars and Floors'!$G12,1, 0), 0)` |
| DM12 | `=IF('Stars and Floors'!$A12, IF(DM$1='Stars and Floors'!$C12,1, 0) + IF(DM$1='Stars and Floors'!$D12,1, 0) + IF(DM$1='Stars and Floors'!$E12,1, 0) + IF(DM$1='Stars and Floors'!$F12,1, 0) + IF(DM$1='Stars and Floors'!$G12,1, 0), 0)` |
| DN12 | `=IF('Stars and Floors'!$A12, IF(DN$1='Stars and Floors'!$C12,1, 0) + IF(DN$1='Stars and Floors'!$D12,1, 0) + IF(DN$1='Stars and Floors'!$E12,1, 0) + IF(DN$1='Stars and Floors'!$F12,1, 0) + IF(DN$1='Stars and Floors'!$G12,1, 0), 0)` |
| DO12 | `=IF('Stars and Floors'!$A12, IF(DO$1='Stars and Floors'!$C12,1, 0) + IF(DO$1='Stars and Floors'!$D12,1, 0) + IF(DO$1='Stars and Floors'!$E12,1, 0) + IF(DO$1='Stars and Floors'!$F12,1, 0) + IF(DO$1='Stars and Floors'!$G12,1, 0), 0)` |
| DP12 | `=IF('Stars and Floors'!$A12, IF(DP$1='Stars and Floors'!$C12,1, 0) + IF(DP$1='Stars and Floors'!$D12,1, 0) + IF(DP$1='Stars and Floors'!$E12,1, 0) + IF(DP$1='Stars and Floors'!$F12,1, 0) + IF(DP$1='Stars and Floors'!$G12,1, 0), 0)` |
| DQ12 | `=IF('Stars and Floors'!$A12, IF(DQ$1='Stars and Floors'!$C12,1, 0) + IF(DQ$1='Stars and Floors'!$D12,1, 0) + IF(DQ$1='Stars and Floors'!$E12,1, 0) + IF(DQ$1='Stars and Floors'!$F12,1, 0) + IF(DQ$1='Stars and Floors'!$G12,1, 0), 0)` |
| B13 | `=IF('Stars and Floors'!$A13, IF(B$1='Stars and Floors'!$C13,1, 0) + IF(B$1='Stars and Floors'!$D13,1, 0) + IF(B$1='Stars and Floors'!$E13,1, 0) + IF(B$1='Stars and Floors'!$F13,1, 0) + IF(B$1='Stars and Floors'!$G13,1, 0), 0)` |
| C13 | `=IF('Stars and Floors'!$A13, IF(C$1='Stars and Floors'!$C13,1, 0) + IF(C$1='Stars and Floors'!$D13,1, 0) + IF(C$1='Stars and Floors'!$E13,1, 0) + IF(C$1='Stars and Floors'!$F13,1, 0) + IF(C$1='Stars and Floors'!$G13,1, 0), 0)` |
| D13 | `=IF('Stars and Floors'!$A13, IF(D$1='Stars and Floors'!$C13,1, 0) + IF(D$1='Stars and Floors'!$D13,1, 0) + IF(D$1='Stars and Floors'!$E13,1, 0) + IF(D$1='Stars and Floors'!$F13,1, 0) + IF(D$1='Stars and Floors'!$G13,1, 0), 0)` |
| E13 | `=IF('Stars and Floors'!$A13, IF(E$1='Stars and Floors'!$C13,1, 0) + IF(E$1='Stars and Floors'!$D13,1, 0) + IF(E$1='Stars and Floors'!$E13,1, 0) + IF(E$1='Stars and Floors'!$F13,1, 0) + IF(E$1='Stars and Floors'!$G13,1, 0), 0)` |
| F13 | `=IF('Stars and Floors'!$A13, IF(F$1='Stars and Floors'!$C13,1, 0) + IF(F$1='Stars and Floors'!$D13,1, 0) + IF(F$1='Stars and Floors'!$E13,1, 0) + IF(F$1='Stars and Floors'!$F13,1, 0) + IF(F$1='Stars and Floors'!$G13,1, 0), 0)` |
| G13 | `=IF('Stars and Floors'!$A13, IF(G$1='Stars and Floors'!$C13,1, 0) + IF(G$1='Stars and Floors'!$D13,1, 0) + IF(G$1='Stars and Floors'!$E13,1, 0) + IF(G$1='Stars and Floors'!$F13,1, 0) + IF(G$1='Stars and Floors'!$G13,1, 0), 0)` |
| H13 | `=IF('Stars and Floors'!$A13, IF(H$1='Stars and Floors'!$C13,1, 0) + IF(H$1='Stars and Floors'!$D13,1, 0) + IF(H$1='Stars and Floors'!$E13,1, 0) + IF(H$1='Stars and Floors'!$F13,1, 0) + IF(H$1='Stars and Floors'!$G13,1, 0), 0)` |
| I13 | `=IF('Stars and Floors'!$A13, IF(I$1='Stars and Floors'!$C13,1, 0) + IF(I$1='Stars and Floors'!$D13,1, 0) + IF(I$1='Stars and Floors'!$E13,1, 0) + IF(I$1='Stars and Floors'!$F13,1, 0) + IF(I$1='Stars and Floors'!$G13,1, 0), 0)` |
| J13 | `=IF('Stars and Floors'!$A13, IF(J$1='Stars and Floors'!$C13,1, 0) + IF(J$1='Stars and Floors'!$D13,1, 0) + IF(J$1='Stars and Floors'!$E13,1, 0) + IF(J$1='Stars and Floors'!$F13,1, 0) + IF(J$1='Stars and Floors'!$G13,1, 0), 0)` |
| K13 | `=IF('Stars and Floors'!$A13, IF(K$1='Stars and Floors'!$C13,1, 0) + IF(K$1='Stars and Floors'!$D13,1, 0) + IF(K$1='Stars and Floors'!$E13,1, 0) + IF(K$1='Stars and Floors'!$F13,1, 0) + IF(K$1='Stars and Floors'!$G13,1, 0), 0)` |
| L13 | `=IF('Stars and Floors'!$A13, IF(L$1='Stars and Floors'!$C13,1, 0) + IF(L$1='Stars and Floors'!$D13,1, 0) + IF(L$1='Stars and Floors'!$E13,1, 0) + IF(L$1='Stars and Floors'!$F13,1, 0) + IF(L$1='Stars and Floors'!$G13,1, 0), 0)` |
| M13 | `=IF('Stars and Floors'!$A13, IF(M$1='Stars and Floors'!$C13,1, 0) + IF(M$1='Stars and Floors'!$D13,1, 0) + IF(M$1='Stars and Floors'!$E13,1, 0) + IF(M$1='Stars and Floors'!$F13,1, 0) + IF(M$1='Stars and Floors'!$G13,1, 0), 0)` |
| N13 | `=IF('Stars and Floors'!$A13, IF(N$1='Stars and Floors'!$C13,1, 0) + IF(N$1='Stars and Floors'!$D13,1, 0) + IF(N$1='Stars and Floors'!$E13,1, 0) + IF(N$1='Stars and Floors'!$F13,1, 0) + IF(N$1='Stars and Floors'!$G13,1, 0), 0)` |
| O13 | `=IF('Stars and Floors'!$A13, IF(O$1='Stars and Floors'!$C13,1, 0) + IF(O$1='Stars and Floors'!$D13,1, 0) + IF(O$1='Stars and Floors'!$E13,1, 0) + IF(O$1='Stars and Floors'!$F13,1, 0) + IF(O$1='Stars and Floors'!$G13,1, 0), 0)` |
| P13 | `=IF('Stars and Floors'!$A13, IF(P$1='Stars and Floors'!$C13,1, 0) + IF(P$1='Stars and Floors'!$D13,1, 0) + IF(P$1='Stars and Floors'!$E13,1, 0) + IF(P$1='Stars and Floors'!$F13,1, 0) + IF(P$1='Stars and Floors'!$G13,1, 0), 0)` |
| Q13 | `=IF('Stars and Floors'!$A13, IF(Q$1='Stars and Floors'!$C13,1, 0) + IF(Q$1='Stars and Floors'!$D13,1, 0) + IF(Q$1='Stars and Floors'!$E13,1, 0) + IF(Q$1='Stars and Floors'!$F13,1, 0) + IF(Q$1='Stars and Floors'!$G13,1, 0), 0)` |
| R13 | `=IF('Stars and Floors'!$A13, IF(R$1='Stars and Floors'!$C13,1, 0) + IF(R$1='Stars and Floors'!$D13,1, 0) + IF(R$1='Stars and Floors'!$E13,1, 0) + IF(R$1='Stars and Floors'!$F13,1, 0) + IF(R$1='Stars and Floors'!$G13,1, 0), 0)` |
| S13 | `=IF('Stars and Floors'!$A13, IF(S$1='Stars and Floors'!$C13,1, 0) + IF(S$1='Stars and Floors'!$D13,1, 0) + IF(S$1='Stars and Floors'!$E13,1, 0) + IF(S$1='Stars and Floors'!$F13,1, 0) + IF(S$1='Stars and Floors'!$G13,1, 0), 0)` |
| T13 | `=IF('Stars and Floors'!$A13, IF(T$1='Stars and Floors'!$C13,1, 0) + IF(T$1='Stars and Floors'!$D13,1, 0) + IF(T$1='Stars and Floors'!$E13,1, 0) + IF(T$1='Stars and Floors'!$F13,1, 0) + IF(T$1='Stars and Floors'!$G13,1, 0), 0)` |
| U13 | `=IF('Stars and Floors'!$A13, IF(U$1='Stars and Floors'!$C13,1, 0) + IF(U$1='Stars and Floors'!$D13,1, 0) + IF(U$1='Stars and Floors'!$E13,1, 0) + IF(U$1='Stars and Floors'!$F13,1, 0) + IF(U$1='Stars and Floors'!$G13,1, 0), 0)` |
| V13 | `=IF('Stars and Floors'!$A13, IF(V$1='Stars and Floors'!$C13,1, 0) + IF(V$1='Stars and Floors'!$D13,1, 0) + IF(V$1='Stars and Floors'!$E13,1, 0) + IF(V$1='Stars and Floors'!$F13,1, 0) + IF(V$1='Stars and Floors'!$G13,1, 0), 0)` |
| W13 | `=IF('Stars and Floors'!$A13, IF(W$1='Stars and Floors'!$C13,1, 0) + IF(W$1='Stars and Floors'!$D13,1, 0) + IF(W$1='Stars and Floors'!$E13,1, 0) + IF(W$1='Stars and Floors'!$F13,1, 0) + IF(W$1='Stars and Floors'!$G13,1, 0), 0)` |
| X13 | `=IF('Stars and Floors'!$A13, IF(X$1='Stars and Floors'!$C13,1, 0) + IF(X$1='Stars and Floors'!$D13,1, 0) + IF(X$1='Stars and Floors'!$E13,1, 0) + IF(X$1='Stars and Floors'!$F13,1, 0) + IF(X$1='Stars and Floors'!$G13,1, 0), 0)` |
| Y13 | `=IF('Stars and Floors'!$A13, IF(Y$1='Stars and Floors'!$C13,1, 0) + IF(Y$1='Stars and Floors'!$D13,1, 0) + IF(Y$1='Stars and Floors'!$E13,1, 0) + IF(Y$1='Stars and Floors'!$F13,1, 0) + IF(Y$1='Stars and Floors'!$G13,1, 0), 0)` |
| Z13 | `=IF('Stars and Floors'!$A13, IF(Z$1='Stars and Floors'!$C13,1, 0) + IF(Z$1='Stars and Floors'!$D13,1, 0) + IF(Z$1='Stars and Floors'!$E13,1, 0) + IF(Z$1='Stars and Floors'!$F13,1, 0) + IF(Z$1='Stars and Floors'!$G13,1, 0), 0)` |
| AA13 | `=IF('Stars and Floors'!$A13, IF(AA$1='Stars and Floors'!$C13,1, 0) + IF(AA$1='Stars and Floors'!$D13,1, 0) + IF(AA$1='Stars and Floors'!$E13,1, 0) + IF(AA$1='Stars and Floors'!$F13,1, 0) + IF(AA$1='Stars and Floors'!$G13,1, 0), 0)` |
| AB13 | `=IF('Stars and Floors'!$A13, IF(AB$1='Stars and Floors'!$C13,1, 0) + IF(AB$1='Stars and Floors'!$D13,1, 0) + IF(AB$1='Stars and Floors'!$E13,1, 0) + IF(AB$1='Stars and Floors'!$F13,1, 0) + IF(AB$1='Stars and Floors'!$G13,1, 0), 0)` |
| AC13 | `=IF('Stars and Floors'!$A13, IF(AC$1='Stars and Floors'!$C13,1, 0) + IF(AC$1='Stars and Floors'!$D13,1, 0) + IF(AC$1='Stars and Floors'!$E13,1, 0) + IF(AC$1='Stars and Floors'!$F13,1, 0) + IF(AC$1='Stars and Floors'!$G13,1, 0), 0)` |
| AD13 | `=IF('Stars and Floors'!$A13, IF(AD$1='Stars and Floors'!$C13,1, 0) + IF(AD$1='Stars and Floors'!$D13,1, 0) + IF(AD$1='Stars and Floors'!$E13,1, 0) + IF(AD$1='Stars and Floors'!$F13,1, 0) + IF(AD$1='Stars and Floors'!$G13,1, 0), 0)` |
| AE13 | `=IF('Stars and Floors'!$A13, IF(AE$1='Stars and Floors'!$C13,1, 0) + IF(AE$1='Stars and Floors'!$D13,1, 0) + IF(AE$1='Stars and Floors'!$E13,1, 0) + IF(AE$1='Stars and Floors'!$F13,1, 0) + IF(AE$1='Stars and Floors'!$G13,1, 0), 0)` |
| AF13 | `=IF('Stars and Floors'!$A13, IF(AF$1='Stars and Floors'!$C13,1, 0) + IF(AF$1='Stars and Floors'!$D13,1, 0) + IF(AF$1='Stars and Floors'!$E13,1, 0) + IF(AF$1='Stars and Floors'!$F13,1, 0) + IF(AF$1='Stars and Floors'!$G13,1, 0), 0)` |
| AG13 | `=IF('Stars and Floors'!$A13, IF(AG$1='Stars and Floors'!$C13,1, 0) + IF(AG$1='Stars and Floors'!$D13,1, 0) + IF(AG$1='Stars and Floors'!$E13,1, 0) + IF(AG$1='Stars and Floors'!$F13,1, 0) + IF(AG$1='Stars and Floors'!$G13,1, 0), 0)` |
| AH13 | `=IF('Stars and Floors'!$A13, IF(AH$1='Stars and Floors'!$C13,1, 0) + IF(AH$1='Stars and Floors'!$D13,1, 0) + IF(AH$1='Stars and Floors'!$E13,1, 0) + IF(AH$1='Stars and Floors'!$F13,1, 0) + IF(AH$1='Stars and Floors'!$G13,1, 0), 0)` |
| AI13 | `=IF('Stars and Floors'!$A13, IF(AI$1='Stars and Floors'!$C13,1, 0) + IF(AI$1='Stars and Floors'!$D13,1, 0) + IF(AI$1='Stars and Floors'!$E13,1, 0) + IF(AI$1='Stars and Floors'!$F13,1, 0) + IF(AI$1='Stars and Floors'!$G13,1, 0), 0)` |
| AJ13 | `=IF('Stars and Floors'!$A13, IF(AJ$1='Stars and Floors'!$C13,1, 0) + IF(AJ$1='Stars and Floors'!$D13,1, 0) + IF(AJ$1='Stars and Floors'!$E13,1, 0) + IF(AJ$1='Stars and Floors'!$F13,1, 0) + IF(AJ$1='Stars and Floors'!$G13,1, 0), 0)` |
| AK13 | `=IF('Stars and Floors'!$A13, IF(AK$1='Stars and Floors'!$C13,1, 0) + IF(AK$1='Stars and Floors'!$D13,1, 0) + IF(AK$1='Stars and Floors'!$E13,1, 0) + IF(AK$1='Stars and Floors'!$F13,1, 0) + IF(AK$1='Stars and Floors'!$G13,1, 0), 0)` |
| AL13 | `=IF('Stars and Floors'!$A13, IF(AL$1='Stars and Floors'!$C13,1, 0) + IF(AL$1='Stars and Floors'!$D13,1, 0) + IF(AL$1='Stars and Floors'!$E13,1, 0) + IF(AL$1='Stars and Floors'!$F13,1, 0) + IF(AL$1='Stars and Floors'!$G13,1, 0), 0)` |
| AM13 | `=IF('Stars and Floors'!$A13, IF(AM$1='Stars and Floors'!$C13,1, 0) + IF(AM$1='Stars and Floors'!$D13,1, 0) + IF(AM$1='Stars and Floors'!$E13,1, 0) + IF(AM$1='Stars and Floors'!$F13,1, 0) + IF(AM$1='Stars and Floors'!$G13,1, 0), 0)` |
| AN13 | `=IF('Stars and Floors'!$A13, IF(AN$1='Stars and Floors'!$C13,1, 0) + IF(AN$1='Stars and Floors'!$D13,1, 0) + IF(AN$1='Stars and Floors'!$E13,1, 0) + IF(AN$1='Stars and Floors'!$F13,1, 0) + IF(AN$1='Stars and Floors'!$G13,1, 0), 0)` |
| AO13 | `=IF('Stars and Floors'!$A13, IF(AO$1='Stars and Floors'!$C13,1, 0) + IF(AO$1='Stars and Floors'!$D13,1, 0) + IF(AO$1='Stars and Floors'!$E13,1, 0) + IF(AO$1='Stars and Floors'!$F13,1, 0) + IF(AO$1='Stars and Floors'!$G13,1, 0), 0)` |
| AP13 | `=IF('Stars and Floors'!$A13, IF(AP$1='Stars and Floors'!$C13,1, 0) + IF(AP$1='Stars and Floors'!$D13,1, 0) + IF(AP$1='Stars and Floors'!$E13,1, 0) + IF(AP$1='Stars and Floors'!$F13,1, 0) + IF(AP$1='Stars and Floors'!$G13,1, 0), 0)` |
| AQ13 | `=IF('Stars and Floors'!$A13, IF(AQ$1='Stars and Floors'!$C13,1, 0) + IF(AQ$1='Stars and Floors'!$D13,1, 0) + IF(AQ$1='Stars and Floors'!$E13,1, 0) + IF(AQ$1='Stars and Floors'!$F13,1, 0) + IF(AQ$1='Stars and Floors'!$G13,1, 0), 0)` |
| AR13 | `=IF('Stars and Floors'!$A13, IF(AR$1='Stars and Floors'!$C13,1, 0) + IF(AR$1='Stars and Floors'!$D13,1, 0) + IF(AR$1='Stars and Floors'!$E13,1, 0) + IF(AR$1='Stars and Floors'!$F13,1, 0) + IF(AR$1='Stars and Floors'!$G13,1, 0), 0)` |
| AS13 | `=IF('Stars and Floors'!$A13, IF(AS$1='Stars and Floors'!$C13,1, 0) + IF(AS$1='Stars and Floors'!$D13,1, 0) + IF(AS$1='Stars and Floors'!$E13,1, 0) + IF(AS$1='Stars and Floors'!$F13,1, 0) + IF(AS$1='Stars and Floors'!$G13,1, 0), 0)` |
| AT13 | `=IF('Stars and Floors'!$A13, IF(AT$1='Stars and Floors'!$C13,1, 0) + IF(AT$1='Stars and Floors'!$D13,1, 0) + IF(AT$1='Stars and Floors'!$E13,1, 0) + IF(AT$1='Stars and Floors'!$F13,1, 0) + IF(AT$1='Stars and Floors'!$G13,1, 0), 0)` |
| AU13 | `=IF('Stars and Floors'!$A13, IF(AU$1='Stars and Floors'!$C13,1, 0) + IF(AU$1='Stars and Floors'!$D13,1, 0) + IF(AU$1='Stars and Floors'!$E13,1, 0) + IF(AU$1='Stars and Floors'!$F13,1, 0) + IF(AU$1='Stars and Floors'!$G13,1, 0), 0)` |
| AV13 | `=IF('Stars and Floors'!$A13, IF(AV$1='Stars and Floors'!$C13,1, 0) + IF(AV$1='Stars and Floors'!$D13,1, 0) + IF(AV$1='Stars and Floors'!$E13,1, 0) + IF(AV$1='Stars and Floors'!$F13,1, 0) + IF(AV$1='Stars and Floors'!$G13,1, 0), 0)` |
| AW13 | `=IF('Stars and Floors'!$A13, IF(AW$1='Stars and Floors'!$C13,1, 0) + IF(AW$1='Stars and Floors'!$D13,1, 0) + IF(AW$1='Stars and Floors'!$E13,1, 0) + IF(AW$1='Stars and Floors'!$F13,1, 0) + IF(AW$1='Stars and Floors'!$G13,1, 0), 0)` |
| AX13 | `=IF('Stars and Floors'!$A13, IF(AX$1='Stars and Floors'!$C13,1, 0) + IF(AX$1='Stars and Floors'!$D13,1, 0) + IF(AX$1='Stars and Floors'!$E13,1, 0) + IF(AX$1='Stars and Floors'!$F13,1, 0) + IF(AX$1='Stars and Floors'!$G13,1, 0), 0)` |
| AY13 | `=IF('Stars and Floors'!$A13, IF(AY$1='Stars and Floors'!$C13,1, 0) + IF(AY$1='Stars and Floors'!$D13,1, 0) + IF(AY$1='Stars and Floors'!$E13,1, 0) + IF(AY$1='Stars and Floors'!$F13,1, 0) + IF(AY$1='Stars and Floors'!$G13,1, 0), 0)` |
| AZ13 | `=IF('Stars and Floors'!$A13, IF(AZ$1='Stars and Floors'!$C13,1, 0) + IF(AZ$1='Stars and Floors'!$D13,1, 0) + IF(AZ$1='Stars and Floors'!$E13,1, 0) + IF(AZ$1='Stars and Floors'!$F13,1, 0) + IF(AZ$1='Stars and Floors'!$G13,1, 0), 0)` |
| BA13 | `=IF('Stars and Floors'!$A13, IF(BA$1='Stars and Floors'!$C13,1, 0) + IF(BA$1='Stars and Floors'!$D13,1, 0) + IF(BA$1='Stars and Floors'!$E13,1, 0) + IF(BA$1='Stars and Floors'!$F13,1, 0) + IF(BA$1='Stars and Floors'!$G13,1, 0), 0)` |
| BB13 | `=IF('Stars and Floors'!$A13, IF(BB$1='Stars and Floors'!$C13,1, 0) + IF(BB$1='Stars and Floors'!$D13,1, 0) + IF(BB$1='Stars and Floors'!$E13,1, 0) + IF(BB$1='Stars and Floors'!$F13,1, 0) + IF(BB$1='Stars and Floors'!$G13,1, 0), 0)` |
| BC13 | `=IF('Stars and Floors'!$A13, IF(BC$1='Stars and Floors'!$C13,1, 0) + IF(BC$1='Stars and Floors'!$D13,1, 0) + IF(BC$1='Stars and Floors'!$E13,1, 0) + IF(BC$1='Stars and Floors'!$F13,1, 0) + IF(BC$1='Stars and Floors'!$G13,1, 0), 0)` |
| BD13 | `=IF('Stars and Floors'!$A13, IF(BD$1='Stars and Floors'!$C13,1, 0) + IF(BD$1='Stars and Floors'!$D13,1, 0) + IF(BD$1='Stars and Floors'!$E13,1, 0) + IF(BD$1='Stars and Floors'!$F13,1, 0) + IF(BD$1='Stars and Floors'!$G13,1, 0), 0)` |
| BE13 | `=IF('Stars and Floors'!$A13, IF(BE$1='Stars and Floors'!$C13,1, 0) + IF(BE$1='Stars and Floors'!$D13,1, 0) + IF(BE$1='Stars and Floors'!$E13,1, 0) + IF(BE$1='Stars and Floors'!$F13,1, 0) + IF(BE$1='Stars and Floors'!$G13,1, 0), 0)` |
| BF13 | `=IF('Stars and Floors'!$A13, IF(BF$1='Stars and Floors'!$C13,1, 0) + IF(BF$1='Stars and Floors'!$D13,1, 0) + IF(BF$1='Stars and Floors'!$E13,1, 0) + IF(BF$1='Stars and Floors'!$F13,1, 0) + IF(BF$1='Stars and Floors'!$G13,1, 0), 0)` |
| BG13 | `=IF('Stars and Floors'!$A13, IF(BG$1='Stars and Floors'!$C13,1, 0) + IF(BG$1='Stars and Floors'!$D13,1, 0) + IF(BG$1='Stars and Floors'!$E13,1, 0) + IF(BG$1='Stars and Floors'!$F13,1, 0) + IF(BG$1='Stars and Floors'!$G13,1, 0), 0)` |
| BH13 | `=IF('Stars and Floors'!$A13, IF(BH$1='Stars and Floors'!$C13,1, 0) + IF(BH$1='Stars and Floors'!$D13,1, 0) + IF(BH$1='Stars and Floors'!$E13,1, 0) + IF(BH$1='Stars and Floors'!$F13,1, 0) + IF(BH$1='Stars and Floors'!$G13,1, 0), 0)` |
| BI13 | `=IF('Stars and Floors'!$A13, IF(BI$1='Stars and Floors'!$C13,1, 0) + IF(BI$1='Stars and Floors'!$D13,1, 0) + IF(BI$1='Stars and Floors'!$E13,1, 0) + IF(BI$1='Stars and Floors'!$F13,1, 0) + IF(BI$1='Stars and Floors'!$G13,1, 0), 0)` |
| BJ13 | `=IF('Stars and Floors'!$A13, IF(BJ$1='Stars and Floors'!$C13,1, 0) + IF(BJ$1='Stars and Floors'!$D13,1, 0) + IF(BJ$1='Stars and Floors'!$E13,1, 0) + IF(BJ$1='Stars and Floors'!$F13,1, 0) + IF(BJ$1='Stars and Floors'!$G13,1, 0), 0)` |
| BK13 | `=IF('Stars and Floors'!$A13, IF(BK$1='Stars and Floors'!$C13,1, 0) + IF(BK$1='Stars and Floors'!$D13,1, 0) + IF(BK$1='Stars and Floors'!$E13,1, 0) + IF(BK$1='Stars and Floors'!$F13,1, 0) + IF(BK$1='Stars and Floors'!$G13,1, 0), 0)` |
| BL13 | `=IF('Stars and Floors'!$A13, IF(BL$1='Stars and Floors'!$C13,1, 0) + IF(BL$1='Stars and Floors'!$D13,1, 0) + IF(BL$1='Stars and Floors'!$E13,1, 0) + IF(BL$1='Stars and Floors'!$F13,1, 0) + IF(BL$1='Stars and Floors'!$G13,1, 0), 0)` |
| BM13 | `=IF('Stars and Floors'!$A13, IF(BM$1='Stars and Floors'!$C13,1, 0) + IF(BM$1='Stars and Floors'!$D13,1, 0) + IF(BM$1='Stars and Floors'!$E13,1, 0) + IF(BM$1='Stars and Floors'!$F13,1, 0) + IF(BM$1='Stars and Floors'!$G13,1, 0), 0)` |
| BN13 | `=IF('Stars and Floors'!$A13, IF(BN$1='Stars and Floors'!$C13,1, 0) + IF(BN$1='Stars and Floors'!$D13,1, 0) + IF(BN$1='Stars and Floors'!$E13,1, 0) + IF(BN$1='Stars and Floors'!$F13,1, 0) + IF(BN$1='Stars and Floors'!$G13,1, 0), 0)` |
| BO13 | `=IF('Stars and Floors'!$A13, IF(BO$1='Stars and Floors'!$C13,1, 0) + IF(BO$1='Stars and Floors'!$D13,1, 0) + IF(BO$1='Stars and Floors'!$E13,1, 0) + IF(BO$1='Stars and Floors'!$F13,1, 0) + IF(BO$1='Stars and Floors'!$G13,1, 0), 0)` |
| BP13 | `=IF('Stars and Floors'!$A13, IF(BP$1='Stars and Floors'!$C13,1, 0) + IF(BP$1='Stars and Floors'!$D13,1, 0) + IF(BP$1='Stars and Floors'!$E13,1, 0) + IF(BP$1='Stars and Floors'!$F13,1, 0) + IF(BP$1='Stars and Floors'!$G13,1, 0), 0)` |
| BQ13 | `=IF('Stars and Floors'!$A13, IF(BQ$1='Stars and Floors'!$C13,1, 0) + IF(BQ$1='Stars and Floors'!$D13,1, 0) + IF(BQ$1='Stars and Floors'!$E13,1, 0) + IF(BQ$1='Stars and Floors'!$F13,1, 0) + IF(BQ$1='Stars and Floors'!$G13,1, 0), 0)` |
| BR13 | `=IF('Stars and Floors'!$A13, IF(BR$1='Stars and Floors'!$C13,1, 0) + IF(BR$1='Stars and Floors'!$D13,1, 0) + IF(BR$1='Stars and Floors'!$E13,1, 0) + IF(BR$1='Stars and Floors'!$F13,1, 0) + IF(BR$1='Stars and Floors'!$G13,1, 0), 0)` |
| BS13 | `=IF('Stars and Floors'!$A13, IF(BS$1='Stars and Floors'!$C13,1, 0) + IF(BS$1='Stars and Floors'!$D13,1, 0) + IF(BS$1='Stars and Floors'!$E13,1, 0) + IF(BS$1='Stars and Floors'!$F13,1, 0) + IF(BS$1='Stars and Floors'!$G13,1, 0), 0)` |
| BT13 | `=IF('Stars and Floors'!$A13, IF(BT$1='Stars and Floors'!$C13,1, 0) + IF(BT$1='Stars and Floors'!$D13,1, 0) + IF(BT$1='Stars and Floors'!$E13,1, 0) + IF(BT$1='Stars and Floors'!$F13,1, 0) + IF(BT$1='Stars and Floors'!$G13,1, 0), 0)` |
| BU13 | `=IF('Stars and Floors'!$A13, IF(BU$1='Stars and Floors'!$C13,1, 0) + IF(BU$1='Stars and Floors'!$D13,1, 0) + IF(BU$1='Stars and Floors'!$E13,1, 0) + IF(BU$1='Stars and Floors'!$F13,1, 0) + IF(BU$1='Stars and Floors'!$G13,1, 0), 0)` |
| BV13 | `=IF('Stars and Floors'!$A13, IF(BV$1='Stars and Floors'!$C13,1, 0) + IF(BV$1='Stars and Floors'!$D13,1, 0) + IF(BV$1='Stars and Floors'!$E13,1, 0) + IF(BV$1='Stars and Floors'!$F13,1, 0) + IF(BV$1='Stars and Floors'!$G13,1, 0), 0)` |
| BW13 | `=IF('Stars and Floors'!$A13, IF(BW$1='Stars and Floors'!$C13,1, 0) + IF(BW$1='Stars and Floors'!$D13,1, 0) + IF(BW$1='Stars and Floors'!$E13,1, 0) + IF(BW$1='Stars and Floors'!$F13,1, 0) + IF(BW$1='Stars and Floors'!$G13,1, 0), 0)` |
| BX13 | `=IF('Stars and Floors'!$A13, IF(BX$1='Stars and Floors'!$C13,1, 0) + IF(BX$1='Stars and Floors'!$D13,1, 0) + IF(BX$1='Stars and Floors'!$E13,1, 0) + IF(BX$1='Stars and Floors'!$F13,1, 0) + IF(BX$1='Stars and Floors'!$G13,1, 0), 0)` |
| BY13 | `=IF('Stars and Floors'!$A13, IF(BY$1='Stars and Floors'!$C13,1, 0) + IF(BY$1='Stars and Floors'!$D13,1, 0) + IF(BY$1='Stars and Floors'!$E13,1, 0) + IF(BY$1='Stars and Floors'!$F13,1, 0) + IF(BY$1='Stars and Floors'!$G13,1, 0), 0)` |
| BZ13 | `=IF('Stars and Floors'!$A13, IF(BZ$1='Stars and Floors'!$C13,1, 0) + IF(BZ$1='Stars and Floors'!$D13,1, 0) + IF(BZ$1='Stars and Floors'!$E13,1, 0) + IF(BZ$1='Stars and Floors'!$F13,1, 0) + IF(BZ$1='Stars and Floors'!$G13,1, 0), 0)` |
| CA13 | `=IF('Stars and Floors'!$A13, IF(CA$1='Stars and Floors'!$C13,1, 0) + IF(CA$1='Stars and Floors'!$D13,1, 0) + IF(CA$1='Stars and Floors'!$E13,1, 0) + IF(CA$1='Stars and Floors'!$F13,1, 0) + IF(CA$1='Stars and Floors'!$G13,1, 0), 0)` |
| CB13 | `=IF('Stars and Floors'!$A13, IF(CB$1='Stars and Floors'!$C13,1, 0) + IF(CB$1='Stars and Floors'!$D13,1, 0) + IF(CB$1='Stars and Floors'!$E13,1, 0) + IF(CB$1='Stars and Floors'!$F13,1, 0) + IF(CB$1='Stars and Floors'!$G13,1, 0), 0)` |
| CC13 | `=IF('Stars and Floors'!$A13, IF(CC$1='Stars and Floors'!$C13,1, 0) + IF(CC$1='Stars and Floors'!$D13,1, 0) + IF(CC$1='Stars and Floors'!$E13,1, 0) + IF(CC$1='Stars and Floors'!$F13,1, 0) + IF(CC$1='Stars and Floors'!$G13,1, 0), 0)` |
| CD13 | `=IF('Stars and Floors'!$A13, IF(CD$1='Stars and Floors'!$C13,1, 0) + IF(CD$1='Stars and Floors'!$D13,1, 0) + IF(CD$1='Stars and Floors'!$E13,1, 0) + IF(CD$1='Stars and Floors'!$F13,1, 0) + IF(CD$1='Stars and Floors'!$G13,1, 0), 0)` |
| CE13 | `=IF('Stars and Floors'!$A13, IF(CE$1='Stars and Floors'!$C13,1, 0) + IF(CE$1='Stars and Floors'!$D13,1, 0) + IF(CE$1='Stars and Floors'!$E13,1, 0) + IF(CE$1='Stars and Floors'!$F13,1, 0) + IF(CE$1='Stars and Floors'!$G13,1, 0), 0)` |
| CF13 | `=IF('Stars and Floors'!$A13, IF(CF$1='Stars and Floors'!$C13,1, 0) + IF(CF$1='Stars and Floors'!$D13,1, 0) + IF(CF$1='Stars and Floors'!$E13,1, 0) + IF(CF$1='Stars and Floors'!$F13,1, 0) + IF(CF$1='Stars and Floors'!$G13,1, 0), 0)` |
| CG13 | `=IF('Stars and Floors'!$A13, IF(CG$1='Stars and Floors'!$C13,1, 0) + IF(CG$1='Stars and Floors'!$D13,1, 0) + IF(CG$1='Stars and Floors'!$E13,1, 0) + IF(CG$1='Stars and Floors'!$F13,1, 0) + IF(CG$1='Stars and Floors'!$G13,1, 0), 0)` |
| CH13 | `=IF('Stars and Floors'!$A13, IF(CH$1='Stars and Floors'!$C13,1, 0) + IF(CH$1='Stars and Floors'!$D13,1, 0) + IF(CH$1='Stars and Floors'!$E13,1, 0) + IF(CH$1='Stars and Floors'!$F13,1, 0) + IF(CH$1='Stars and Floors'!$G13,1, 0), 0)` |
| CI13 | `=IF('Stars and Floors'!$A13, IF(CI$1='Stars and Floors'!$C13,1, 0) + IF(CI$1='Stars and Floors'!$D13,1, 0) + IF(CI$1='Stars and Floors'!$E13,1, 0) + IF(CI$1='Stars and Floors'!$F13,1, 0) + IF(CI$1='Stars and Floors'!$G13,1, 0), 0)` |
| CJ13 | `=IF('Stars and Floors'!$A13, IF(CJ$1='Stars and Floors'!$C13,1, 0) + IF(CJ$1='Stars and Floors'!$D13,1, 0) + IF(CJ$1='Stars and Floors'!$E13,1, 0) + IF(CJ$1='Stars and Floors'!$F13,1, 0) + IF(CJ$1='Stars and Floors'!$G13,1, 0), 0)` |
| CK13 | `=IF('Stars and Floors'!$A13, IF(CK$1='Stars and Floors'!$C13,1, 0) + IF(CK$1='Stars and Floors'!$D13,1, 0) + IF(CK$1='Stars and Floors'!$E13,1, 0) + IF(CK$1='Stars and Floors'!$F13,1, 0) + IF(CK$1='Stars and Floors'!$G13,1, 0), 0)` |
| CL13 | `=IF('Stars and Floors'!$A13, IF(CL$1='Stars and Floors'!$C13,1, 0) + IF(CL$1='Stars and Floors'!$D13,1, 0) + IF(CL$1='Stars and Floors'!$E13,1, 0) + IF(CL$1='Stars and Floors'!$F13,1, 0) + IF(CL$1='Stars and Floors'!$G13,1, 0), 0)` |
| CM13 | `=IF('Stars and Floors'!$A13, IF(CM$1='Stars and Floors'!$C13,1, 0) + IF(CM$1='Stars and Floors'!$D13,1, 0) + IF(CM$1='Stars and Floors'!$E13,1, 0) + IF(CM$1='Stars and Floors'!$F13,1, 0) + IF(CM$1='Stars and Floors'!$G13,1, 0), 0)` |
| CN13 | `=IF('Stars and Floors'!$A13, IF(CN$1='Stars and Floors'!$C13,1, 0) + IF(CN$1='Stars and Floors'!$D13,1, 0) + IF(CN$1='Stars and Floors'!$E13,1, 0) + IF(CN$1='Stars and Floors'!$F13,1, 0) + IF(CN$1='Stars and Floors'!$G13,1, 0), 0)` |
| CO13 | `=IF('Stars and Floors'!$A13, IF(CO$1='Stars and Floors'!$C13,1, 0) + IF(CO$1='Stars and Floors'!$D13,1, 0) + IF(CO$1='Stars and Floors'!$E13,1, 0) + IF(CO$1='Stars and Floors'!$F13,1, 0) + IF(CO$1='Stars and Floors'!$G13,1, 0), 0)` |
| CP13 | `=IF('Stars and Floors'!$A13, IF(CP$1='Stars and Floors'!$C13,1, 0) + IF(CP$1='Stars and Floors'!$D13,1, 0) + IF(CP$1='Stars and Floors'!$E13,1, 0) + IF(CP$1='Stars and Floors'!$F13,1, 0) + IF(CP$1='Stars and Floors'!$G13,1, 0), 0)` |
| CQ13 | `=IF('Stars and Floors'!$A13, IF(CQ$1='Stars and Floors'!$C13,1, 0) + IF(CQ$1='Stars and Floors'!$D13,1, 0) + IF(CQ$1='Stars and Floors'!$E13,1, 0) + IF(CQ$1='Stars and Floors'!$F13,1, 0) + IF(CQ$1='Stars and Floors'!$G13,1, 0), 0)` |
| CR13 | `=IF('Stars and Floors'!$A13, IF(CR$1='Stars and Floors'!$C13,1, 0) + IF(CR$1='Stars and Floors'!$D13,1, 0) + IF(CR$1='Stars and Floors'!$E13,1, 0) + IF(CR$1='Stars and Floors'!$F13,1, 0) + IF(CR$1='Stars and Floors'!$G13,1, 0), 0)` |
| CS13 | `=IF('Stars and Floors'!$A13, IF(CS$1='Stars and Floors'!$C13,1, 0) + IF(CS$1='Stars and Floors'!$D13,1, 0) + IF(CS$1='Stars and Floors'!$E13,1, 0) + IF(CS$1='Stars and Floors'!$F13,1, 0) + IF(CS$1='Stars and Floors'!$G13,1, 0), 0)` |
| CT13 | `=IF('Stars and Floors'!$A13, IF(CT$1='Stars and Floors'!$C13,1, 0) + IF(CT$1='Stars and Floors'!$D13,1, 0) + IF(CT$1='Stars and Floors'!$E13,1, 0) + IF(CT$1='Stars and Floors'!$F13,1, 0) + IF(CT$1='Stars and Floors'!$G13,1, 0), 0)` |
| CU13 | `=IF('Stars and Floors'!$A13, IF(CU$1='Stars and Floors'!$C13,1, 0) + IF(CU$1='Stars and Floors'!$D13,1, 0) + IF(CU$1='Stars and Floors'!$E13,1, 0) + IF(CU$1='Stars and Floors'!$F13,1, 0) + IF(CU$1='Stars and Floors'!$G13,1, 0), 0)` |
| CV13 | `=IF('Stars and Floors'!$A13, IF(CV$1='Stars and Floors'!$C13,1, 0) + IF(CV$1='Stars and Floors'!$D13,1, 0) + IF(CV$1='Stars and Floors'!$E13,1, 0) + IF(CV$1='Stars and Floors'!$F13,1, 0) + IF(CV$1='Stars and Floors'!$G13,1, 0), 0)` |
| CW13 | `=IF('Stars and Floors'!$A13, IF(CW$1='Stars and Floors'!$C13,1, 0) + IF(CW$1='Stars and Floors'!$D13,1, 0) + IF(CW$1='Stars and Floors'!$E13,1, 0) + IF(CW$1='Stars and Floors'!$F13,1, 0) + IF(CW$1='Stars and Floors'!$G13,1, 0), 0)` |
| CX13 | `=IF('Stars and Floors'!$A13, IF(CX$1='Stars and Floors'!$C13,1, 0) + IF(CX$1='Stars and Floors'!$D13,1, 0) + IF(CX$1='Stars and Floors'!$E13,1, 0) + IF(CX$1='Stars and Floors'!$F13,1, 0) + IF(CX$1='Stars and Floors'!$G13,1, 0), 0)` |
| CY13 | `=IF('Stars and Floors'!$A13, IF(CY$1='Stars and Floors'!$C13,1, 0) + IF(CY$1='Stars and Floors'!$D13,1, 0) + IF(CY$1='Stars and Floors'!$E13,1, 0) + IF(CY$1='Stars and Floors'!$F13,1, 0) + IF(CY$1='Stars and Floors'!$G13,1, 0), 0)` |
| CZ13 | `=IF('Stars and Floors'!$A13, IF(CZ$1='Stars and Floors'!$C13,1, 0) + IF(CZ$1='Stars and Floors'!$D13,1, 0) + IF(CZ$1='Stars and Floors'!$E13,1, 0) + IF(CZ$1='Stars and Floors'!$F13,1, 0) + IF(CZ$1='Stars and Floors'!$G13,1, 0), 0)` |
| DA13 | `=IF('Stars and Floors'!$A13, IF(DA$1='Stars and Floors'!$C13,1, 0) + IF(DA$1='Stars and Floors'!$D13,1, 0) + IF(DA$1='Stars and Floors'!$E13,1, 0) + IF(DA$1='Stars and Floors'!$F13,1, 0) + IF(DA$1='Stars and Floors'!$G13,1, 0), 0)` |
| DB13 | `=IF('Stars and Floors'!$A13, IF(DB$1='Stars and Floors'!$C13,1, 0) + IF(DB$1='Stars and Floors'!$D13,1, 0) + IF(DB$1='Stars and Floors'!$E13,1, 0) + IF(DB$1='Stars and Floors'!$F13,1, 0) + IF(DB$1='Stars and Floors'!$G13,1, 0), 0)` |
| DC13 | `=IF('Stars and Floors'!$A13, IF(DC$1='Stars and Floors'!$C13,1, 0) + IF(DC$1='Stars and Floors'!$D13,1, 0) + IF(DC$1='Stars and Floors'!$E13,1, 0) + IF(DC$1='Stars and Floors'!$F13,1, 0) + IF(DC$1='Stars and Floors'!$G13,1, 0), 0)` |
| DD13 | `=IF('Stars and Floors'!$A13, IF(DD$1='Stars and Floors'!$C13,1, 0) + IF(DD$1='Stars and Floors'!$D13,1, 0) + IF(DD$1='Stars and Floors'!$E13,1, 0) + IF(DD$1='Stars and Floors'!$F13,1, 0) + IF(DD$1='Stars and Floors'!$G13,1, 0), 0)` |
| DE13 | `=IF('Stars and Floors'!$A13, IF(DE$1='Stars and Floors'!$C13,1, 0) + IF(DE$1='Stars and Floors'!$D13,1, 0) + IF(DE$1='Stars and Floors'!$E13,1, 0) + IF(DE$1='Stars and Floors'!$F13,1, 0) + IF(DE$1='Stars and Floors'!$G13,1, 0), 0)` |
| DF13 | `=IF('Stars and Floors'!$A13, IF(DF$1='Stars and Floors'!$C13,1, 0) + IF(DF$1='Stars and Floors'!$D13,1, 0) + IF(DF$1='Stars and Floors'!$E13,1, 0) + IF(DF$1='Stars and Floors'!$F13,1, 0) + IF(DF$1='Stars and Floors'!$G13,1, 0), 0)` |
| DG13 | `=IF('Stars and Floors'!$A13, IF(DG$1='Stars and Floors'!$C13,1, 0) + IF(DG$1='Stars and Floors'!$D13,1, 0) + IF(DG$1='Stars and Floors'!$E13,1, 0) + IF(DG$1='Stars and Floors'!$F13,1, 0) + IF(DG$1='Stars and Floors'!$G13,1, 0), 0)` |
| DH13 | `=IF('Stars and Floors'!$A13, IF(DH$1='Stars and Floors'!$C13,1, 0) + IF(DH$1='Stars and Floors'!$D13,1, 0) + IF(DH$1='Stars and Floors'!$E13,1, 0) + IF(DH$1='Stars and Floors'!$F13,1, 0) + IF(DH$1='Stars and Floors'!$G13,1, 0), 0)` |
| DI13 | `=IF('Stars and Floors'!$A13, IF(DI$1='Stars and Floors'!$C13,1, 0) + IF(DI$1='Stars and Floors'!$D13,1, 0) + IF(DI$1='Stars and Floors'!$E13,1, 0) + IF(DI$1='Stars and Floors'!$F13,1, 0) + IF(DI$1='Stars and Floors'!$G13,1, 0), 0)` |
| DJ13 | `=IF('Stars and Floors'!$A13, IF(DJ$1='Stars and Floors'!$C13,1, 0) + IF(DJ$1='Stars and Floors'!$D13,1, 0) + IF(DJ$1='Stars and Floors'!$E13,1, 0) + IF(DJ$1='Stars and Floors'!$F13,1, 0) + IF(DJ$1='Stars and Floors'!$G13,1, 0), 0)` |
| DK13 | `=IF('Stars and Floors'!$A13, IF(DK$1='Stars and Floors'!$C13,1, 0) + IF(DK$1='Stars and Floors'!$D13,1, 0) + IF(DK$1='Stars and Floors'!$E13,1, 0) + IF(DK$1='Stars and Floors'!$F13,1, 0) + IF(DK$1='Stars and Floors'!$G13,1, 0), 0)` |
| DL13 | `=IF('Stars and Floors'!$A13, IF(DL$1='Stars and Floors'!$C13,1, 0) + IF(DL$1='Stars and Floors'!$D13,1, 0) + IF(DL$1='Stars and Floors'!$E13,1, 0) + IF(DL$1='Stars and Floors'!$F13,1, 0) + IF(DL$1='Stars and Floors'!$G13,1, 0), 0)` |
| DM13 | `=IF('Stars and Floors'!$A13, IF(DM$1='Stars and Floors'!$C13,1, 0) + IF(DM$1='Stars and Floors'!$D13,1, 0) + IF(DM$1='Stars and Floors'!$E13,1, 0) + IF(DM$1='Stars and Floors'!$F13,1, 0) + IF(DM$1='Stars and Floors'!$G13,1, 0), 0)` |
| DN13 | `=IF('Stars and Floors'!$A13, IF(DN$1='Stars and Floors'!$C13,1, 0) + IF(DN$1='Stars and Floors'!$D13,1, 0) + IF(DN$1='Stars and Floors'!$E13,1, 0) + IF(DN$1='Stars and Floors'!$F13,1, 0) + IF(DN$1='Stars and Floors'!$G13,1, 0), 0)` |
| DO13 | `=IF('Stars and Floors'!$A13, IF(DO$1='Stars and Floors'!$C13,1, 0) + IF(DO$1='Stars and Floors'!$D13,1, 0) + IF(DO$1='Stars and Floors'!$E13,1, 0) + IF(DO$1='Stars and Floors'!$F13,1, 0) + IF(DO$1='Stars and Floors'!$G13,1, 0), 0)` |
| DP13 | `=IF('Stars and Floors'!$A13, IF(DP$1='Stars and Floors'!$C13,1, 0) + IF(DP$1='Stars and Floors'!$D13,1, 0) + IF(DP$1='Stars and Floors'!$E13,1, 0) + IF(DP$1='Stars and Floors'!$F13,1, 0) + IF(DP$1='Stars and Floors'!$G13,1, 0), 0)` |
| DQ13 | `=IF('Stars and Floors'!$A13, IF(DQ$1='Stars and Floors'!$C13,1, 0) + IF(DQ$1='Stars and Floors'!$D13,1, 0) + IF(DQ$1='Stars and Floors'!$E13,1, 0) + IF(DQ$1='Stars and Floors'!$F13,1, 0) + IF(DQ$1='Stars and Floors'!$G13,1, 0), 0)` |
| B14 | `=IF('Stars and Floors'!$A14, IF(B$1='Stars and Floors'!$C14,1, 0) + IF(B$1='Stars and Floors'!$D14,1, 0) + IF(B$1='Stars and Floors'!$E14,1, 0) + IF(B$1='Stars and Floors'!$F14,1, 0) + IF(B$1='Stars and Floors'!$G14,1, 0), 0)` |
| C14 | `=IF('Stars and Floors'!$A14, IF(C$1='Stars and Floors'!$C14,1, 0) + IF(C$1='Stars and Floors'!$D14,1, 0) + IF(C$1='Stars and Floors'!$E14,1, 0) + IF(C$1='Stars and Floors'!$F14,1, 0) + IF(C$1='Stars and Floors'!$G14,1, 0), 0)` |
| D14 | `=IF('Stars and Floors'!$A14, IF(D$1='Stars and Floors'!$C14,1, 0) + IF(D$1='Stars and Floors'!$D14,1, 0) + IF(D$1='Stars and Floors'!$E14,1, 0) + IF(D$1='Stars and Floors'!$F14,1, 0) + IF(D$1='Stars and Floors'!$G14,1, 0), 0)` |
| E14 | `=IF('Stars and Floors'!$A14, IF(E$1='Stars and Floors'!$C14,1, 0) + IF(E$1='Stars and Floors'!$D14,1, 0) + IF(E$1='Stars and Floors'!$E14,1, 0) + IF(E$1='Stars and Floors'!$F14,1, 0) + IF(E$1='Stars and Floors'!$G14,1, 0), 0)` |
| F14 | `=IF('Stars and Floors'!$A14, IF(F$1='Stars and Floors'!$C14,1, 0) + IF(F$1='Stars and Floors'!$D14,1, 0) + IF(F$1='Stars and Floors'!$E14,1, 0) + IF(F$1='Stars and Floors'!$F14,1, 0) + IF(F$1='Stars and Floors'!$G14,1, 0), 0)` |
| G14 | `=IF('Stars and Floors'!$A14, IF(G$1='Stars and Floors'!$C14,1, 0) + IF(G$1='Stars and Floors'!$D14,1, 0) + IF(G$1='Stars and Floors'!$E14,1, 0) + IF(G$1='Stars and Floors'!$F14,1, 0) + IF(G$1='Stars and Floors'!$G14,1, 0), 0)` |
| H14 | `=IF('Stars and Floors'!$A14, IF(H$1='Stars and Floors'!$C14,1, 0) + IF(H$1='Stars and Floors'!$D14,1, 0) + IF(H$1='Stars and Floors'!$E14,1, 0) + IF(H$1='Stars and Floors'!$F14,1, 0) + IF(H$1='Stars and Floors'!$G14,1, 0), 0)` |
| I14 | `=IF('Stars and Floors'!$A14, IF(I$1='Stars and Floors'!$C14,1, 0) + IF(I$1='Stars and Floors'!$D14,1, 0) + IF(I$1='Stars and Floors'!$E14,1, 0) + IF(I$1='Stars and Floors'!$F14,1, 0) + IF(I$1='Stars and Floors'!$G14,1, 0), 0)` |
| J14 | `=IF('Stars and Floors'!$A14, IF(J$1='Stars and Floors'!$C14,1, 0) + IF(J$1='Stars and Floors'!$D14,1, 0) + IF(J$1='Stars and Floors'!$E14,1, 0) + IF(J$1='Stars and Floors'!$F14,1, 0) + IF(J$1='Stars and Floors'!$G14,1, 0), 0)` |
| K14 | `=IF('Stars and Floors'!$A14, IF(K$1='Stars and Floors'!$C14,1, 0) + IF(K$1='Stars and Floors'!$D14,1, 0) + IF(K$1='Stars and Floors'!$E14,1, 0) + IF(K$1='Stars and Floors'!$F14,1, 0) + IF(K$1='Stars and Floors'!$G14,1, 0), 0)` |
| L14 | `=IF('Stars and Floors'!$A14, IF(L$1='Stars and Floors'!$C14,1, 0) + IF(L$1='Stars and Floors'!$D14,1, 0) + IF(L$1='Stars and Floors'!$E14,1, 0) + IF(L$1='Stars and Floors'!$F14,1, 0) + IF(L$1='Stars and Floors'!$G14,1, 0), 0)` |
| M14 | `=IF('Stars and Floors'!$A14, IF(M$1='Stars and Floors'!$C14,1, 0) + IF(M$1='Stars and Floors'!$D14,1, 0) + IF(M$1='Stars and Floors'!$E14,1, 0) + IF(M$1='Stars and Floors'!$F14,1, 0) + IF(M$1='Stars and Floors'!$G14,1, 0), 0)` |
| N14 | `=IF('Stars and Floors'!$A14, IF(N$1='Stars and Floors'!$C14,1, 0) + IF(N$1='Stars and Floors'!$D14,1, 0) + IF(N$1='Stars and Floors'!$E14,1, 0) + IF(N$1='Stars and Floors'!$F14,1, 0) + IF(N$1='Stars and Floors'!$G14,1, 0), 0)` |
| O14 | `=IF('Stars and Floors'!$A14, IF(O$1='Stars and Floors'!$C14,1, 0) + IF(O$1='Stars and Floors'!$D14,1, 0) + IF(O$1='Stars and Floors'!$E14,1, 0) + IF(O$1='Stars and Floors'!$F14,1, 0) + IF(O$1='Stars and Floors'!$G14,1, 0), 0)` |
| P14 | `=IF('Stars and Floors'!$A14, IF(P$1='Stars and Floors'!$C14,1, 0) + IF(P$1='Stars and Floors'!$D14,1, 0) + IF(P$1='Stars and Floors'!$E14,1, 0) + IF(P$1='Stars and Floors'!$F14,1, 0) + IF(P$1='Stars and Floors'!$G14,1, 0), 0)` |
| Q14 | `=IF('Stars and Floors'!$A14, IF(Q$1='Stars and Floors'!$C14,1, 0) + IF(Q$1='Stars and Floors'!$D14,1, 0) + IF(Q$1='Stars and Floors'!$E14,1, 0) + IF(Q$1='Stars and Floors'!$F14,1, 0) + IF(Q$1='Stars and Floors'!$G14,1, 0), 0)` |
| R14 | `=IF('Stars and Floors'!$A14, IF(R$1='Stars and Floors'!$C14,1, 0) + IF(R$1='Stars and Floors'!$D14,1, 0) + IF(R$1='Stars and Floors'!$E14,1, 0) + IF(R$1='Stars and Floors'!$F14,1, 0) + IF(R$1='Stars and Floors'!$G14,1, 0), 0)` |
| S14 | `=IF('Stars and Floors'!$A14, IF(S$1='Stars and Floors'!$C14,1, 0) + IF(S$1='Stars and Floors'!$D14,1, 0) + IF(S$1='Stars and Floors'!$E14,1, 0) + IF(S$1='Stars and Floors'!$F14,1, 0) + IF(S$1='Stars and Floors'!$G14,1, 0), 0)` |
| T14 | `=IF('Stars and Floors'!$A14, IF(T$1='Stars and Floors'!$C14,1, 0) + IF(T$1='Stars and Floors'!$D14,1, 0) + IF(T$1='Stars and Floors'!$E14,1, 0) + IF(T$1='Stars and Floors'!$F14,1, 0) + IF(T$1='Stars and Floors'!$G14,1, 0), 0)` |
| U14 | `=IF('Stars and Floors'!$A14, IF(U$1='Stars and Floors'!$C14,1, 0) + IF(U$1='Stars and Floors'!$D14,1, 0) + IF(U$1='Stars and Floors'!$E14,1, 0) + IF(U$1='Stars and Floors'!$F14,1, 0) + IF(U$1='Stars and Floors'!$G14,1, 0), 0)` |
| V14 | `=IF('Stars and Floors'!$A14, IF(V$1='Stars and Floors'!$C14,1, 0) + IF(V$1='Stars and Floors'!$D14,1, 0) + IF(V$1='Stars and Floors'!$E14,1, 0) + IF(V$1='Stars and Floors'!$F14,1, 0) + IF(V$1='Stars and Floors'!$G14,1, 0), 0)` |
| W14 | `=IF('Stars and Floors'!$A14, IF(W$1='Stars and Floors'!$C14,1, 0) + IF(W$1='Stars and Floors'!$D14,1, 0) + IF(W$1='Stars and Floors'!$E14,1, 0) + IF(W$1='Stars and Floors'!$F14,1, 0) + IF(W$1='Stars and Floors'!$G14,1, 0), 0)` |
| X14 | `=IF('Stars and Floors'!$A14, IF(X$1='Stars and Floors'!$C14,1, 0) + IF(X$1='Stars and Floors'!$D14,1, 0) + IF(X$1='Stars and Floors'!$E14,1, 0) + IF(X$1='Stars and Floors'!$F14,1, 0) + IF(X$1='Stars and Floors'!$G14,1, 0), 0)` |
| Y14 | `=IF('Stars and Floors'!$A14, IF(Y$1='Stars and Floors'!$C14,1, 0) + IF(Y$1='Stars and Floors'!$D14,1, 0) + IF(Y$1='Stars and Floors'!$E14,1, 0) + IF(Y$1='Stars and Floors'!$F14,1, 0) + IF(Y$1='Stars and Floors'!$G14,1, 0), 0)` |
| Z14 | `=IF('Stars and Floors'!$A14, IF(Z$1='Stars and Floors'!$C14,1, 0) + IF(Z$1='Stars and Floors'!$D14,1, 0) + IF(Z$1='Stars and Floors'!$E14,1, 0) + IF(Z$1='Stars and Floors'!$F14,1, 0) + IF(Z$1='Stars and Floors'!$G14,1, 0), 0)` |
| AA14 | `=IF('Stars and Floors'!$A14, IF(AA$1='Stars and Floors'!$C14,1, 0) + IF(AA$1='Stars and Floors'!$D14,1, 0) + IF(AA$1='Stars and Floors'!$E14,1, 0) + IF(AA$1='Stars and Floors'!$F14,1, 0) + IF(AA$1='Stars and Floors'!$G14,1, 0), 0)` |
| AB14 | `=IF('Stars and Floors'!$A14, IF(AB$1='Stars and Floors'!$C14,1, 0) + IF(AB$1='Stars and Floors'!$D14,1, 0) + IF(AB$1='Stars and Floors'!$E14,1, 0) + IF(AB$1='Stars and Floors'!$F14,1, 0) + IF(AB$1='Stars and Floors'!$G14,1, 0), 0)` |
| AC14 | `=IF('Stars and Floors'!$A14, IF(AC$1='Stars and Floors'!$C14,1, 0) + IF(AC$1='Stars and Floors'!$D14,1, 0) + IF(AC$1='Stars and Floors'!$E14,1, 0) + IF(AC$1='Stars and Floors'!$F14,1, 0) + IF(AC$1='Stars and Floors'!$G14,1, 0), 0)` |
| AD14 | `=IF('Stars and Floors'!$A14, IF(AD$1='Stars and Floors'!$C14,1, 0) + IF(AD$1='Stars and Floors'!$D14,1, 0) + IF(AD$1='Stars and Floors'!$E14,1, 0) + IF(AD$1='Stars and Floors'!$F14,1, 0) + IF(AD$1='Stars and Floors'!$G14,1, 0), 0)` |
| AE14 | `=IF('Stars and Floors'!$A14, IF(AE$1='Stars and Floors'!$C14,1, 0) + IF(AE$1='Stars and Floors'!$D14,1, 0) + IF(AE$1='Stars and Floors'!$E14,1, 0) + IF(AE$1='Stars and Floors'!$F14,1, 0) + IF(AE$1='Stars and Floors'!$G14,1, 0), 0)` |
| AF14 | `=IF('Stars and Floors'!$A14, IF(AF$1='Stars and Floors'!$C14,1, 0) + IF(AF$1='Stars and Floors'!$D14,1, 0) + IF(AF$1='Stars and Floors'!$E14,1, 0) + IF(AF$1='Stars and Floors'!$F14,1, 0) + IF(AF$1='Stars and Floors'!$G14,1, 0), 0)` |
| AG14 | `=IF('Stars and Floors'!$A14, IF(AG$1='Stars and Floors'!$C14,1, 0) + IF(AG$1='Stars and Floors'!$D14,1, 0) + IF(AG$1='Stars and Floors'!$E14,1, 0) + IF(AG$1='Stars and Floors'!$F14,1, 0) + IF(AG$1='Stars and Floors'!$G14,1, 0), 0)` |
| AH14 | `=IF('Stars and Floors'!$A14, IF(AH$1='Stars and Floors'!$C14,1, 0) + IF(AH$1='Stars and Floors'!$D14,1, 0) + IF(AH$1='Stars and Floors'!$E14,1, 0) + IF(AH$1='Stars and Floors'!$F14,1, 0) + IF(AH$1='Stars and Floors'!$G14,1, 0), 0)` |
| AI14 | `=IF('Stars and Floors'!$A14, IF(AI$1='Stars and Floors'!$C14,1, 0) + IF(AI$1='Stars and Floors'!$D14,1, 0) + IF(AI$1='Stars and Floors'!$E14,1, 0) + IF(AI$1='Stars and Floors'!$F14,1, 0) + IF(AI$1='Stars and Floors'!$G14,1, 0), 0)` |
| AJ14 | `=IF('Stars and Floors'!$A14, IF(AJ$1='Stars and Floors'!$C14,1, 0) + IF(AJ$1='Stars and Floors'!$D14,1, 0) + IF(AJ$1='Stars and Floors'!$E14,1, 0) + IF(AJ$1='Stars and Floors'!$F14,1, 0) + IF(AJ$1='Stars and Floors'!$G14,1, 0), 0)` |
| AK14 | `=IF('Stars and Floors'!$A14, IF(AK$1='Stars and Floors'!$C14,1, 0) + IF(AK$1='Stars and Floors'!$D14,1, 0) + IF(AK$1='Stars and Floors'!$E14,1, 0) + IF(AK$1='Stars and Floors'!$F14,1, 0) + IF(AK$1='Stars and Floors'!$G14,1, 0), 0)` |
| AL14 | `=IF('Stars and Floors'!$A14, IF(AL$1='Stars and Floors'!$C14,1, 0) + IF(AL$1='Stars and Floors'!$D14,1, 0) + IF(AL$1='Stars and Floors'!$E14,1, 0) + IF(AL$1='Stars and Floors'!$F14,1, 0) + IF(AL$1='Stars and Floors'!$G14,1, 0), 0)` |
| AM14 | `=IF('Stars and Floors'!$A14, IF(AM$1='Stars and Floors'!$C14,1, 0) + IF(AM$1='Stars and Floors'!$D14,1, 0) + IF(AM$1='Stars and Floors'!$E14,1, 0) + IF(AM$1='Stars and Floors'!$F14,1, 0) + IF(AM$1='Stars and Floors'!$G14,1, 0), 0)` |
| AN14 | `=IF('Stars and Floors'!$A14, IF(AN$1='Stars and Floors'!$C14,1, 0) + IF(AN$1='Stars and Floors'!$D14,1, 0) + IF(AN$1='Stars and Floors'!$E14,1, 0) + IF(AN$1='Stars and Floors'!$F14,1, 0) + IF(AN$1='Stars and Floors'!$G14,1, 0), 0)` |
| AO14 | `=IF('Stars and Floors'!$A14, IF(AO$1='Stars and Floors'!$C14,1, 0) + IF(AO$1='Stars and Floors'!$D14,1, 0) + IF(AO$1='Stars and Floors'!$E14,1, 0) + IF(AO$1='Stars and Floors'!$F14,1, 0) + IF(AO$1='Stars and Floors'!$G14,1, 0), 0)` |
| AP14 | `=IF('Stars and Floors'!$A14, IF(AP$1='Stars and Floors'!$C14,1, 0) + IF(AP$1='Stars and Floors'!$D14,1, 0) + IF(AP$1='Stars and Floors'!$E14,1, 0) + IF(AP$1='Stars and Floors'!$F14,1, 0) + IF(AP$1='Stars and Floors'!$G14,1, 0), 0)` |
| AQ14 | `=IF('Stars and Floors'!$A14, IF(AQ$1='Stars and Floors'!$C14,1, 0) + IF(AQ$1='Stars and Floors'!$D14,1, 0) + IF(AQ$1='Stars and Floors'!$E14,1, 0) + IF(AQ$1='Stars and Floors'!$F14,1, 0) + IF(AQ$1='Stars and Floors'!$G14,1, 0), 0)` |
| AR14 | `=IF('Stars and Floors'!$A14, IF(AR$1='Stars and Floors'!$C14,1, 0) + IF(AR$1='Stars and Floors'!$D14,1, 0) + IF(AR$1='Stars and Floors'!$E14,1, 0) + IF(AR$1='Stars and Floors'!$F14,1, 0) + IF(AR$1='Stars and Floors'!$G14,1, 0), 0)` |
| AS14 | `=IF('Stars and Floors'!$A14, IF(AS$1='Stars and Floors'!$C14,1, 0) + IF(AS$1='Stars and Floors'!$D14,1, 0) + IF(AS$1='Stars and Floors'!$E14,1, 0) + IF(AS$1='Stars and Floors'!$F14,1, 0) + IF(AS$1='Stars and Floors'!$G14,1, 0), 0)` |
| AT14 | `=IF('Stars and Floors'!$A14, IF(AT$1='Stars and Floors'!$C14,1, 0) + IF(AT$1='Stars and Floors'!$D14,1, 0) + IF(AT$1='Stars and Floors'!$E14,1, 0) + IF(AT$1='Stars and Floors'!$F14,1, 0) + IF(AT$1='Stars and Floors'!$G14,1, 0), 0)` |
| AU14 | `=IF('Stars and Floors'!$A14, IF(AU$1='Stars and Floors'!$C14,1, 0) + IF(AU$1='Stars and Floors'!$D14,1, 0) + IF(AU$1='Stars and Floors'!$E14,1, 0) + IF(AU$1='Stars and Floors'!$F14,1, 0) + IF(AU$1='Stars and Floors'!$G14,1, 0), 0)` |
| AV14 | `=IF('Stars and Floors'!$A14, IF(AV$1='Stars and Floors'!$C14,1, 0) + IF(AV$1='Stars and Floors'!$D14,1, 0) + IF(AV$1='Stars and Floors'!$E14,1, 0) + IF(AV$1='Stars and Floors'!$F14,1, 0) + IF(AV$1='Stars and Floors'!$G14,1, 0), 0)` |
| AW14 | `=IF('Stars and Floors'!$A14, IF(AW$1='Stars and Floors'!$C14,1, 0) + IF(AW$1='Stars and Floors'!$D14,1, 0) + IF(AW$1='Stars and Floors'!$E14,1, 0) + IF(AW$1='Stars and Floors'!$F14,1, 0) + IF(AW$1='Stars and Floors'!$G14,1, 0), 0)` |
| AX14 | `=IF('Stars and Floors'!$A14, IF(AX$1='Stars and Floors'!$C14,1, 0) + IF(AX$1='Stars and Floors'!$D14,1, 0) + IF(AX$1='Stars and Floors'!$E14,1, 0) + IF(AX$1='Stars and Floors'!$F14,1, 0) + IF(AX$1='Stars and Floors'!$G14,1, 0), 0)` |
| AY14 | `=IF('Stars and Floors'!$A14, IF(AY$1='Stars and Floors'!$C14,1, 0) + IF(AY$1='Stars and Floors'!$D14,1, 0) + IF(AY$1='Stars and Floors'!$E14,1, 0) + IF(AY$1='Stars and Floors'!$F14,1, 0) + IF(AY$1='Stars and Floors'!$G14,1, 0), 0)` |
| AZ14 | `=IF('Stars and Floors'!$A14, IF(AZ$1='Stars and Floors'!$C14,1, 0) + IF(AZ$1='Stars and Floors'!$D14,1, 0) + IF(AZ$1='Stars and Floors'!$E14,1, 0) + IF(AZ$1='Stars and Floors'!$F14,1, 0) + IF(AZ$1='Stars and Floors'!$G14,1, 0), 0)` |
| BA14 | `=IF('Stars and Floors'!$A14, IF(BA$1='Stars and Floors'!$C14,1, 0) + IF(BA$1='Stars and Floors'!$D14,1, 0) + IF(BA$1='Stars and Floors'!$E14,1, 0) + IF(BA$1='Stars and Floors'!$F14,1, 0) + IF(BA$1='Stars and Floors'!$G14,1, 0), 0)` |
| BB14 | `=IF('Stars and Floors'!$A14, IF(BB$1='Stars and Floors'!$C14,1, 0) + IF(BB$1='Stars and Floors'!$D14,1, 0) + IF(BB$1='Stars and Floors'!$E14,1, 0) + IF(BB$1='Stars and Floors'!$F14,1, 0) + IF(BB$1='Stars and Floors'!$G14,1, 0), 0)` |
| BC14 | `=IF('Stars and Floors'!$A14, IF(BC$1='Stars and Floors'!$C14,1, 0) + IF(BC$1='Stars and Floors'!$D14,1, 0) + IF(BC$1='Stars and Floors'!$E14,1, 0) + IF(BC$1='Stars and Floors'!$F14,1, 0) + IF(BC$1='Stars and Floors'!$G14,1, 0), 0)` |
| BD14 | `=IF('Stars and Floors'!$A14, IF(BD$1='Stars and Floors'!$C14,1, 0) + IF(BD$1='Stars and Floors'!$D14,1, 0) + IF(BD$1='Stars and Floors'!$E14,1, 0) + IF(BD$1='Stars and Floors'!$F14,1, 0) + IF(BD$1='Stars and Floors'!$G14,1, 0), 0)` |
| BE14 | `=IF('Stars and Floors'!$A14, IF(BE$1='Stars and Floors'!$C14,1, 0) + IF(BE$1='Stars and Floors'!$D14,1, 0) + IF(BE$1='Stars and Floors'!$E14,1, 0) + IF(BE$1='Stars and Floors'!$F14,1, 0) + IF(BE$1='Stars and Floors'!$G14,1, 0), 0)` |
| BF14 | `=IF('Stars and Floors'!$A14, IF(BF$1='Stars and Floors'!$C14,1, 0) + IF(BF$1='Stars and Floors'!$D14,1, 0) + IF(BF$1='Stars and Floors'!$E14,1, 0) + IF(BF$1='Stars and Floors'!$F14,1, 0) + IF(BF$1='Stars and Floors'!$G14,1, 0), 0)` |
| BG14 | `=IF('Stars and Floors'!$A14, IF(BG$1='Stars and Floors'!$C14,1, 0) + IF(BG$1='Stars and Floors'!$D14,1, 0) + IF(BG$1='Stars and Floors'!$E14,1, 0) + IF(BG$1='Stars and Floors'!$F14,1, 0) + IF(BG$1='Stars and Floors'!$G14,1, 0), 0)` |
| BH14 | `=IF('Stars and Floors'!$A14, IF(BH$1='Stars and Floors'!$C14,1, 0) + IF(BH$1='Stars and Floors'!$D14,1, 0) + IF(BH$1='Stars and Floors'!$E14,1, 0) + IF(BH$1='Stars and Floors'!$F14,1, 0) + IF(BH$1='Stars and Floors'!$G14,1, 0), 0)` |
| BI14 | `=IF('Stars and Floors'!$A14, IF(BI$1='Stars and Floors'!$C14,1, 0) + IF(BI$1='Stars and Floors'!$D14,1, 0) + IF(BI$1='Stars and Floors'!$E14,1, 0) + IF(BI$1='Stars and Floors'!$F14,1, 0) + IF(BI$1='Stars and Floors'!$G14,1, 0), 0)` |
| BJ14 | `=IF('Stars and Floors'!$A14, IF(BJ$1='Stars and Floors'!$C14,1, 0) + IF(BJ$1='Stars and Floors'!$D14,1, 0) + IF(BJ$1='Stars and Floors'!$E14,1, 0) + IF(BJ$1='Stars and Floors'!$F14,1, 0) + IF(BJ$1='Stars and Floors'!$G14,1, 0), 0)` |
| BK14 | `=IF('Stars and Floors'!$A14, IF(BK$1='Stars and Floors'!$C14,1, 0) + IF(BK$1='Stars and Floors'!$D14,1, 0) + IF(BK$1='Stars and Floors'!$E14,1, 0) + IF(BK$1='Stars and Floors'!$F14,1, 0) + IF(BK$1='Stars and Floors'!$G14,1, 0), 0)` |
| BL14 | `=IF('Stars and Floors'!$A14, IF(BL$1='Stars and Floors'!$C14,1, 0) + IF(BL$1='Stars and Floors'!$D14,1, 0) + IF(BL$1='Stars and Floors'!$E14,1, 0) + IF(BL$1='Stars and Floors'!$F14,1, 0) + IF(BL$1='Stars and Floors'!$G14,1, 0), 0)` |
| BM14 | `=IF('Stars and Floors'!$A14, IF(BM$1='Stars and Floors'!$C14,1, 0) + IF(BM$1='Stars and Floors'!$D14,1, 0) + IF(BM$1='Stars and Floors'!$E14,1, 0) + IF(BM$1='Stars and Floors'!$F14,1, 0) + IF(BM$1='Stars and Floors'!$G14,1, 0), 0)` |
| BN14 | `=IF('Stars and Floors'!$A14, IF(BN$1='Stars and Floors'!$C14,1, 0) + IF(BN$1='Stars and Floors'!$D14,1, 0) + IF(BN$1='Stars and Floors'!$E14,1, 0) + IF(BN$1='Stars and Floors'!$F14,1, 0) + IF(BN$1='Stars and Floors'!$G14,1, 0), 0)` |
| BO14 | `=IF('Stars and Floors'!$A14, IF(BO$1='Stars and Floors'!$C14,1, 0) + IF(BO$1='Stars and Floors'!$D14,1, 0) + IF(BO$1='Stars and Floors'!$E14,1, 0) + IF(BO$1='Stars and Floors'!$F14,1, 0) + IF(BO$1='Stars and Floors'!$G14,1, 0), 0)` |
| BP14 | `=IF('Stars and Floors'!$A14, IF(BP$1='Stars and Floors'!$C14,1, 0) + IF(BP$1='Stars and Floors'!$D14,1, 0) + IF(BP$1='Stars and Floors'!$E14,1, 0) + IF(BP$1='Stars and Floors'!$F14,1, 0) + IF(BP$1='Stars and Floors'!$G14,1, 0), 0)` |
| BQ14 | `=IF('Stars and Floors'!$A14, IF(BQ$1='Stars and Floors'!$C14,1, 0) + IF(BQ$1='Stars and Floors'!$D14,1, 0) + IF(BQ$1='Stars and Floors'!$E14,1, 0) + IF(BQ$1='Stars and Floors'!$F14,1, 0) + IF(BQ$1='Stars and Floors'!$G14,1, 0), 0)` |
| BR14 | `=IF('Stars and Floors'!$A14, IF(BR$1='Stars and Floors'!$C14,1, 0) + IF(BR$1='Stars and Floors'!$D14,1, 0) + IF(BR$1='Stars and Floors'!$E14,1, 0) + IF(BR$1='Stars and Floors'!$F14,1, 0) + IF(BR$1='Stars and Floors'!$G14,1, 0), 0)` |
| BS14 | `=IF('Stars and Floors'!$A14, IF(BS$1='Stars and Floors'!$C14,1, 0) + IF(BS$1='Stars and Floors'!$D14,1, 0) + IF(BS$1='Stars and Floors'!$E14,1, 0) + IF(BS$1='Stars and Floors'!$F14,1, 0) + IF(BS$1='Stars and Floors'!$G14,1, 0), 0)` |
| BT14 | `=IF('Stars and Floors'!$A14, IF(BT$1='Stars and Floors'!$C14,1, 0) + IF(BT$1='Stars and Floors'!$D14,1, 0) + IF(BT$1='Stars and Floors'!$E14,1, 0) + IF(BT$1='Stars and Floors'!$F14,1, 0) + IF(BT$1='Stars and Floors'!$G14,1, 0), 0)` |
| BU14 | `=IF('Stars and Floors'!$A14, IF(BU$1='Stars and Floors'!$C14,1, 0) + IF(BU$1='Stars and Floors'!$D14,1, 0) + IF(BU$1='Stars and Floors'!$E14,1, 0) + IF(BU$1='Stars and Floors'!$F14,1, 0) + IF(BU$1='Stars and Floors'!$G14,1, 0), 0)` |
| BV14 | `=IF('Stars and Floors'!$A14, IF(BV$1='Stars and Floors'!$C14,1, 0) + IF(BV$1='Stars and Floors'!$D14,1, 0) + IF(BV$1='Stars and Floors'!$E14,1, 0) + IF(BV$1='Stars and Floors'!$F14,1, 0) + IF(BV$1='Stars and Floors'!$G14,1, 0), 0)` |
| BW14 | `=IF('Stars and Floors'!$A14, IF(BW$1='Stars and Floors'!$C14,1, 0) + IF(BW$1='Stars and Floors'!$D14,1, 0) + IF(BW$1='Stars and Floors'!$E14,1, 0) + IF(BW$1='Stars and Floors'!$F14,1, 0) + IF(BW$1='Stars and Floors'!$G14,1, 0), 0)` |
| BX14 | `=IF('Stars and Floors'!$A14, IF(BX$1='Stars and Floors'!$C14,1, 0) + IF(BX$1='Stars and Floors'!$D14,1, 0) + IF(BX$1='Stars and Floors'!$E14,1, 0) + IF(BX$1='Stars and Floors'!$F14,1, 0) + IF(BX$1='Stars and Floors'!$G14,1, 0), 0)` |
| BY14 | `=IF('Stars and Floors'!$A14, IF(BY$1='Stars and Floors'!$C14,1, 0) + IF(BY$1='Stars and Floors'!$D14,1, 0) + IF(BY$1='Stars and Floors'!$E14,1, 0) + IF(BY$1='Stars and Floors'!$F14,1, 0) + IF(BY$1='Stars and Floors'!$G14,1, 0), 0)` |
| BZ14 | `=IF('Stars and Floors'!$A14, IF(BZ$1='Stars and Floors'!$C14,1, 0) + IF(BZ$1='Stars and Floors'!$D14,1, 0) + IF(BZ$1='Stars and Floors'!$E14,1, 0) + IF(BZ$1='Stars and Floors'!$F14,1, 0) + IF(BZ$1='Stars and Floors'!$G14,1, 0), 0)` |
| CA14 | `=IF('Stars and Floors'!$A14, IF(CA$1='Stars and Floors'!$C14,1, 0) + IF(CA$1='Stars and Floors'!$D14,1, 0) + IF(CA$1='Stars and Floors'!$E14,1, 0) + IF(CA$1='Stars and Floors'!$F14,1, 0) + IF(CA$1='Stars and Floors'!$G14,1, 0), 0)` |
| CB14 | `=IF('Stars and Floors'!$A14, IF(CB$1='Stars and Floors'!$C14,1, 0) + IF(CB$1='Stars and Floors'!$D14,1, 0) + IF(CB$1='Stars and Floors'!$E14,1, 0) + IF(CB$1='Stars and Floors'!$F14,1, 0) + IF(CB$1='Stars and Floors'!$G14,1, 0), 0)` |
| CC14 | `=IF('Stars and Floors'!$A14, IF(CC$1='Stars and Floors'!$C14,1, 0) + IF(CC$1='Stars and Floors'!$D14,1, 0) + IF(CC$1='Stars and Floors'!$E14,1, 0) + IF(CC$1='Stars and Floors'!$F14,1, 0) + IF(CC$1='Stars and Floors'!$G14,1, 0), 0)` |
| CD14 | `=IF('Stars and Floors'!$A14, IF(CD$1='Stars and Floors'!$C14,1, 0) + IF(CD$1='Stars and Floors'!$D14,1, 0) + IF(CD$1='Stars and Floors'!$E14,1, 0) + IF(CD$1='Stars and Floors'!$F14,1, 0) + IF(CD$1='Stars and Floors'!$G14,1, 0), 0)` |
| CE14 | `=IF('Stars and Floors'!$A14, IF(CE$1='Stars and Floors'!$C14,1, 0) + IF(CE$1='Stars and Floors'!$D14,1, 0) + IF(CE$1='Stars and Floors'!$E14,1, 0) + IF(CE$1='Stars and Floors'!$F14,1, 0) + IF(CE$1='Stars and Floors'!$G14,1, 0), 0)` |
| CF14 | `=IF('Stars and Floors'!$A14, IF(CF$1='Stars and Floors'!$C14,1, 0) + IF(CF$1='Stars and Floors'!$D14,1, 0) + IF(CF$1='Stars and Floors'!$E14,1, 0) + IF(CF$1='Stars and Floors'!$F14,1, 0) + IF(CF$1='Stars and Floors'!$G14,1, 0), 0)` |
| CG14 | `=IF('Stars and Floors'!$A14, IF(CG$1='Stars and Floors'!$C14,1, 0) + IF(CG$1='Stars and Floors'!$D14,1, 0) + IF(CG$1='Stars and Floors'!$E14,1, 0) + IF(CG$1='Stars and Floors'!$F14,1, 0) + IF(CG$1='Stars and Floors'!$G14,1, 0), 0)` |
| CH14 | `=IF('Stars and Floors'!$A14, IF(CH$1='Stars and Floors'!$C14,1, 0) + IF(CH$1='Stars and Floors'!$D14,1, 0) + IF(CH$1='Stars and Floors'!$E14,1, 0) + IF(CH$1='Stars and Floors'!$F14,1, 0) + IF(CH$1='Stars and Floors'!$G14,1, 0), 0)` |
| CI14 | `=IF('Stars and Floors'!$A14, IF(CI$1='Stars and Floors'!$C14,1, 0) + IF(CI$1='Stars and Floors'!$D14,1, 0) + IF(CI$1='Stars and Floors'!$E14,1, 0) + IF(CI$1='Stars and Floors'!$F14,1, 0) + IF(CI$1='Stars and Floors'!$G14,1, 0), 0)` |
| CJ14 | `=IF('Stars and Floors'!$A14, IF(CJ$1='Stars and Floors'!$C14,1, 0) + IF(CJ$1='Stars and Floors'!$D14,1, 0) + IF(CJ$1='Stars and Floors'!$E14,1, 0) + IF(CJ$1='Stars and Floors'!$F14,1, 0) + IF(CJ$1='Stars and Floors'!$G14,1, 0), 0)` |
| CK14 | `=IF('Stars and Floors'!$A14, IF(CK$1='Stars and Floors'!$C14,1, 0) + IF(CK$1='Stars and Floors'!$D14,1, 0) + IF(CK$1='Stars and Floors'!$E14,1, 0) + IF(CK$1='Stars and Floors'!$F14,1, 0) + IF(CK$1='Stars and Floors'!$G14,1, 0), 0)` |
| CL14 | `=IF('Stars and Floors'!$A14, IF(CL$1='Stars and Floors'!$C14,1, 0) + IF(CL$1='Stars and Floors'!$D14,1, 0) + IF(CL$1='Stars and Floors'!$E14,1, 0) + IF(CL$1='Stars and Floors'!$F14,1, 0) + IF(CL$1='Stars and Floors'!$G14,1, 0), 0)` |
| CM14 | `=IF('Stars and Floors'!$A14, IF(CM$1='Stars and Floors'!$C14,1, 0) + IF(CM$1='Stars and Floors'!$D14,1, 0) + IF(CM$1='Stars and Floors'!$E14,1, 0) + IF(CM$1='Stars and Floors'!$F14,1, 0) + IF(CM$1='Stars and Floors'!$G14,1, 0), 0)` |
| CN14 | `=IF('Stars and Floors'!$A14, IF(CN$1='Stars and Floors'!$C14,1, 0) + IF(CN$1='Stars and Floors'!$D14,1, 0) + IF(CN$1='Stars and Floors'!$E14,1, 0) + IF(CN$1='Stars and Floors'!$F14,1, 0) + IF(CN$1='Stars and Floors'!$G14,1, 0), 0)` |
| CO14 | `=IF('Stars and Floors'!$A14, IF(CO$1='Stars and Floors'!$C14,1, 0) + IF(CO$1='Stars and Floors'!$D14,1, 0) + IF(CO$1='Stars and Floors'!$E14,1, 0) + IF(CO$1='Stars and Floors'!$F14,1, 0) + IF(CO$1='Stars and Floors'!$G14,1, 0), 0)` |
| CP14 | `=IF('Stars and Floors'!$A14, IF(CP$1='Stars and Floors'!$C14,1, 0) + IF(CP$1='Stars and Floors'!$D14,1, 0) + IF(CP$1='Stars and Floors'!$E14,1, 0) + IF(CP$1='Stars and Floors'!$F14,1, 0) + IF(CP$1='Stars and Floors'!$G14,1, 0), 0)` |
| CQ14 | `=IF('Stars and Floors'!$A14, IF(CQ$1='Stars and Floors'!$C14,1, 0) + IF(CQ$1='Stars and Floors'!$D14,1, 0) + IF(CQ$1='Stars and Floors'!$E14,1, 0) + IF(CQ$1='Stars and Floors'!$F14,1, 0) + IF(CQ$1='Stars and Floors'!$G14,1, 0), 0)` |
| CR14 | `=IF('Stars and Floors'!$A14, IF(CR$1='Stars and Floors'!$C14,1, 0) + IF(CR$1='Stars and Floors'!$D14,1, 0) + IF(CR$1='Stars and Floors'!$E14,1, 0) + IF(CR$1='Stars and Floors'!$F14,1, 0) + IF(CR$1='Stars and Floors'!$G14,1, 0), 0)` |
| CS14 | `=IF('Stars and Floors'!$A14, IF(CS$1='Stars and Floors'!$C14,1, 0) + IF(CS$1='Stars and Floors'!$D14,1, 0) + IF(CS$1='Stars and Floors'!$E14,1, 0) + IF(CS$1='Stars and Floors'!$F14,1, 0) + IF(CS$1='Stars and Floors'!$G14,1, 0), 0)` |
| CT14 | `=IF('Stars and Floors'!$A14, IF(CT$1='Stars and Floors'!$C14,1, 0) + IF(CT$1='Stars and Floors'!$D14,1, 0) + IF(CT$1='Stars and Floors'!$E14,1, 0) + IF(CT$1='Stars and Floors'!$F14,1, 0) + IF(CT$1='Stars and Floors'!$G14,1, 0), 0)` |
| CU14 | `=IF('Stars and Floors'!$A14, IF(CU$1='Stars and Floors'!$C14,1, 0) + IF(CU$1='Stars and Floors'!$D14,1, 0) + IF(CU$1='Stars and Floors'!$E14,1, 0) + IF(CU$1='Stars and Floors'!$F14,1, 0) + IF(CU$1='Stars and Floors'!$G14,1, 0), 0)` |
| CV14 | `=IF('Stars and Floors'!$A14, IF(CV$1='Stars and Floors'!$C14,1, 0) + IF(CV$1='Stars and Floors'!$D14,1, 0) + IF(CV$1='Stars and Floors'!$E14,1, 0) + IF(CV$1='Stars and Floors'!$F14,1, 0) + IF(CV$1='Stars and Floors'!$G14,1, 0), 0)` |
| CW14 | `=IF('Stars and Floors'!$A14, IF(CW$1='Stars and Floors'!$C14,1, 0) + IF(CW$1='Stars and Floors'!$D14,1, 0) + IF(CW$1='Stars and Floors'!$E14,1, 0) + IF(CW$1='Stars and Floors'!$F14,1, 0) + IF(CW$1='Stars and Floors'!$G14,1, 0), 0)` |
| CX14 | `=IF('Stars and Floors'!$A14, IF(CX$1='Stars and Floors'!$C14,1, 0) + IF(CX$1='Stars and Floors'!$D14,1, 0) + IF(CX$1='Stars and Floors'!$E14,1, 0) + IF(CX$1='Stars and Floors'!$F14,1, 0) + IF(CX$1='Stars and Floors'!$G14,1, 0), 0)` |
| CY14 | `=IF('Stars and Floors'!$A14, IF(CY$1='Stars and Floors'!$C14,1, 0) + IF(CY$1='Stars and Floors'!$D14,1, 0) + IF(CY$1='Stars and Floors'!$E14,1, 0) + IF(CY$1='Stars and Floors'!$F14,1, 0) + IF(CY$1='Stars and Floors'!$G14,1, 0), 0)` |
| CZ14 | `=IF('Stars and Floors'!$A14, IF(CZ$1='Stars and Floors'!$C14,1, 0) + IF(CZ$1='Stars and Floors'!$D14,1, 0) + IF(CZ$1='Stars and Floors'!$E14,1, 0) + IF(CZ$1='Stars and Floors'!$F14,1, 0) + IF(CZ$1='Stars and Floors'!$G14,1, 0), 0)` |
| DA14 | `=IF('Stars and Floors'!$A14, IF(DA$1='Stars and Floors'!$C14,1, 0) + IF(DA$1='Stars and Floors'!$D14,1, 0) + IF(DA$1='Stars and Floors'!$E14,1, 0) + IF(DA$1='Stars and Floors'!$F14,1, 0) + IF(DA$1='Stars and Floors'!$G14,1, 0), 0)` |
| DB14 | `=IF('Stars and Floors'!$A14, IF(DB$1='Stars and Floors'!$C14,1, 0) + IF(DB$1='Stars and Floors'!$D14,1, 0) + IF(DB$1='Stars and Floors'!$E14,1, 0) + IF(DB$1='Stars and Floors'!$F14,1, 0) + IF(DB$1='Stars and Floors'!$G14,1, 0), 0)` |
| DC14 | `=IF('Stars and Floors'!$A14, IF(DC$1='Stars and Floors'!$C14,1, 0) + IF(DC$1='Stars and Floors'!$D14,1, 0) + IF(DC$1='Stars and Floors'!$E14,1, 0) + IF(DC$1='Stars and Floors'!$F14,1, 0) + IF(DC$1='Stars and Floors'!$G14,1, 0), 0)` |
| DD14 | `=IF('Stars and Floors'!$A14, IF(DD$1='Stars and Floors'!$C14,1, 0) + IF(DD$1='Stars and Floors'!$D14,1, 0) + IF(DD$1='Stars and Floors'!$E14,1, 0) + IF(DD$1='Stars and Floors'!$F14,1, 0) + IF(DD$1='Stars and Floors'!$G14,1, 0), 0)` |
| DE14 | `=IF('Stars and Floors'!$A14, IF(DE$1='Stars and Floors'!$C14,1, 0) + IF(DE$1='Stars and Floors'!$D14,1, 0) + IF(DE$1='Stars and Floors'!$E14,1, 0) + IF(DE$1='Stars and Floors'!$F14,1, 0) + IF(DE$1='Stars and Floors'!$G14,1, 0), 0)` |
| DF14 | `=IF('Stars and Floors'!$A14, IF(DF$1='Stars and Floors'!$C14,1, 0) + IF(DF$1='Stars and Floors'!$D14,1, 0) + IF(DF$1='Stars and Floors'!$E14,1, 0) + IF(DF$1='Stars and Floors'!$F14,1, 0) + IF(DF$1='Stars and Floors'!$G14,1, 0), 0)` |
| DG14 | `=IF('Stars and Floors'!$A14, IF(DG$1='Stars and Floors'!$C14,1, 0) + IF(DG$1='Stars and Floors'!$D14,1, 0) + IF(DG$1='Stars and Floors'!$E14,1, 0) + IF(DG$1='Stars and Floors'!$F14,1, 0) + IF(DG$1='Stars and Floors'!$G14,1, 0), 0)` |
| DH14 | `=IF('Stars and Floors'!$A14, IF(DH$1='Stars and Floors'!$C14,1, 0) + IF(DH$1='Stars and Floors'!$D14,1, 0) + IF(DH$1='Stars and Floors'!$E14,1, 0) + IF(DH$1='Stars and Floors'!$F14,1, 0) + IF(DH$1='Stars and Floors'!$G14,1, 0), 0)` |
| DI14 | `=IF('Stars and Floors'!$A14, IF(DI$1='Stars and Floors'!$C14,1, 0) + IF(DI$1='Stars and Floors'!$D14,1, 0) + IF(DI$1='Stars and Floors'!$E14,1, 0) + IF(DI$1='Stars and Floors'!$F14,1, 0) + IF(DI$1='Stars and Floors'!$G14,1, 0), 0)` |
| DJ14 | `=IF('Stars and Floors'!$A14, IF(DJ$1='Stars and Floors'!$C14,1, 0) + IF(DJ$1='Stars and Floors'!$D14,1, 0) + IF(DJ$1='Stars and Floors'!$E14,1, 0) + IF(DJ$1='Stars and Floors'!$F14,1, 0) + IF(DJ$1='Stars and Floors'!$G14,1, 0), 0)` |
| DK14 | `=IF('Stars and Floors'!$A14, IF(DK$1='Stars and Floors'!$C14,1, 0) + IF(DK$1='Stars and Floors'!$D14,1, 0) + IF(DK$1='Stars and Floors'!$E14,1, 0) + IF(DK$1='Stars and Floors'!$F14,1, 0) + IF(DK$1='Stars and Floors'!$G14,1, 0), 0)` |
| DL14 | `=IF('Stars and Floors'!$A14, IF(DL$1='Stars and Floors'!$C14,1, 0) + IF(DL$1='Stars and Floors'!$D14,1, 0) + IF(DL$1='Stars and Floors'!$E14,1, 0) + IF(DL$1='Stars and Floors'!$F14,1, 0) + IF(DL$1='Stars and Floors'!$G14,1, 0), 0)` |
| DM14 | `=IF('Stars and Floors'!$A14, IF(DM$1='Stars and Floors'!$C14,1, 0) + IF(DM$1='Stars and Floors'!$D14,1, 0) + IF(DM$1='Stars and Floors'!$E14,1, 0) + IF(DM$1='Stars and Floors'!$F14,1, 0) + IF(DM$1='Stars and Floors'!$G14,1, 0), 0)` |
| DN14 | `=IF('Stars and Floors'!$A14, IF(DN$1='Stars and Floors'!$C14,1, 0) + IF(DN$1='Stars and Floors'!$D14,1, 0) + IF(DN$1='Stars and Floors'!$E14,1, 0) + IF(DN$1='Stars and Floors'!$F14,1, 0) + IF(DN$1='Stars and Floors'!$G14,1, 0), 0)` |
| DO14 | `=IF('Stars and Floors'!$A14, IF(DO$1='Stars and Floors'!$C14,1, 0) + IF(DO$1='Stars and Floors'!$D14,1, 0) + IF(DO$1='Stars and Floors'!$E14,1, 0) + IF(DO$1='Stars and Floors'!$F14,1, 0) + IF(DO$1='Stars and Floors'!$G14,1, 0), 0)` |
| DP14 | `=IF('Stars and Floors'!$A14, IF(DP$1='Stars and Floors'!$C14,1, 0) + IF(DP$1='Stars and Floors'!$D14,1, 0) + IF(DP$1='Stars and Floors'!$E14,1, 0) + IF(DP$1='Stars and Floors'!$F14,1, 0) + IF(DP$1='Stars and Floors'!$G14,1, 0), 0)` |
| DQ14 | `=IF('Stars and Floors'!$A14, IF(DQ$1='Stars and Floors'!$C14,1, 0) + IF(DQ$1='Stars and Floors'!$D14,1, 0) + IF(DQ$1='Stars and Floors'!$E14,1, 0) + IF(DQ$1='Stars and Floors'!$F14,1, 0) + IF(DQ$1='Stars and Floors'!$G14,1, 0), 0)` |
| B15 | `=IF('Stars and Floors'!$A15, IF(B$1='Stars and Floors'!$C15,1, 0) + IF(B$1='Stars and Floors'!$D15,1, 0) + IF(B$1='Stars and Floors'!$E15,1, 0) + IF(B$1='Stars and Floors'!$F15,1, 0) + IF(B$1='Stars and Floors'!$G15,1, 0), 0)` |
| C15 | `=IF('Stars and Floors'!$A15, IF(C$1='Stars and Floors'!$C15,1, 0) + IF(C$1='Stars and Floors'!$D15,1, 0) + IF(C$1='Stars and Floors'!$E15,1, 0) + IF(C$1='Stars and Floors'!$F15,1, 0) + IF(C$1='Stars and Floors'!$G15,1, 0), 0)` |
| D15 | `=IF('Stars and Floors'!$A15, IF(D$1='Stars and Floors'!$C15,1, 0) + IF(D$1='Stars and Floors'!$D15,1, 0) + IF(D$1='Stars and Floors'!$E15,1, 0) + IF(D$1='Stars and Floors'!$F15,1, 0) + IF(D$1='Stars and Floors'!$G15,1, 0), 0)` |
| E15 | `=IF('Stars and Floors'!$A15, IF(E$1='Stars and Floors'!$C15,1, 0) + IF(E$1='Stars and Floors'!$D15,1, 0) + IF(E$1='Stars and Floors'!$E15,1, 0) + IF(E$1='Stars and Floors'!$F15,1, 0) + IF(E$1='Stars and Floors'!$G15,1, 0), 0)` |
| F15 | `=IF('Stars and Floors'!$A15, IF(F$1='Stars and Floors'!$C15,1, 0) + IF(F$1='Stars and Floors'!$D15,1, 0) + IF(F$1='Stars and Floors'!$E15,1, 0) + IF(F$1='Stars and Floors'!$F15,1, 0) + IF(F$1='Stars and Floors'!$G15,1, 0), 0)` |
| G15 | `=IF('Stars and Floors'!$A15, IF(G$1='Stars and Floors'!$C15,1, 0) + IF(G$1='Stars and Floors'!$D15,1, 0) + IF(G$1='Stars and Floors'!$E15,1, 0) + IF(G$1='Stars and Floors'!$F15,1, 0) + IF(G$1='Stars and Floors'!$G15,1, 0), 0)` |
| H15 | `=IF('Stars and Floors'!$A15, IF(H$1='Stars and Floors'!$C15,1, 0) + IF(H$1='Stars and Floors'!$D15,1, 0) + IF(H$1='Stars and Floors'!$E15,1, 0) + IF(H$1='Stars and Floors'!$F15,1, 0) + IF(H$1='Stars and Floors'!$G15,1, 0), 0)` |
| I15 | `=IF('Stars and Floors'!$A15, IF(I$1='Stars and Floors'!$C15,1, 0) + IF(I$1='Stars and Floors'!$D15,1, 0) + IF(I$1='Stars and Floors'!$E15,1, 0) + IF(I$1='Stars and Floors'!$F15,1, 0) + IF(I$1='Stars and Floors'!$G15,1, 0), 0)` |
| J15 | `=IF('Stars and Floors'!$A15, IF(J$1='Stars and Floors'!$C15,1, 0) + IF(J$1='Stars and Floors'!$D15,1, 0) + IF(J$1='Stars and Floors'!$E15,1, 0) + IF(J$1='Stars and Floors'!$F15,1, 0) + IF(J$1='Stars and Floors'!$G15,1, 0), 0)` |
| K15 | `=IF('Stars and Floors'!$A15, IF(K$1='Stars and Floors'!$C15,1, 0) + IF(K$1='Stars and Floors'!$D15,1, 0) + IF(K$1='Stars and Floors'!$E15,1, 0) + IF(K$1='Stars and Floors'!$F15,1, 0) + IF(K$1='Stars and Floors'!$G15,1, 0), 0)` |
| L15 | `=IF('Stars and Floors'!$A15, IF(L$1='Stars and Floors'!$C15,1, 0) + IF(L$1='Stars and Floors'!$D15,1, 0) + IF(L$1='Stars and Floors'!$E15,1, 0) + IF(L$1='Stars and Floors'!$F15,1, 0) + IF(L$1='Stars and Floors'!$G15,1, 0), 0)` |
| M15 | `=IF('Stars and Floors'!$A15, IF(M$1='Stars and Floors'!$C15,1, 0) + IF(M$1='Stars and Floors'!$D15,1, 0) + IF(M$1='Stars and Floors'!$E15,1, 0) + IF(M$1='Stars and Floors'!$F15,1, 0) + IF(M$1='Stars and Floors'!$G15,1, 0), 0)` |
| N15 | `=IF('Stars and Floors'!$A15, IF(N$1='Stars and Floors'!$C15,1, 0) + IF(N$1='Stars and Floors'!$D15,1, 0) + IF(N$1='Stars and Floors'!$E15,1, 0) + IF(N$1='Stars and Floors'!$F15,1, 0) + IF(N$1='Stars and Floors'!$G15,1, 0), 0)` |
| O15 | `=IF('Stars and Floors'!$A15, IF(O$1='Stars and Floors'!$C15,1, 0) + IF(O$1='Stars and Floors'!$D15,1, 0) + IF(O$1='Stars and Floors'!$E15,1, 0) + IF(O$1='Stars and Floors'!$F15,1, 0) + IF(O$1='Stars and Floors'!$G15,1, 0), 0)` |
| P15 | `=IF('Stars and Floors'!$A15, IF(P$1='Stars and Floors'!$C15,1, 0) + IF(P$1='Stars and Floors'!$D15,1, 0) + IF(P$1='Stars and Floors'!$E15,1, 0) + IF(P$1='Stars and Floors'!$F15,1, 0) + IF(P$1='Stars and Floors'!$G15,1, 0), 0)` |
| Q15 | `=IF('Stars and Floors'!$A15, IF(Q$1='Stars and Floors'!$C15,1, 0) + IF(Q$1='Stars and Floors'!$D15,1, 0) + IF(Q$1='Stars and Floors'!$E15,1, 0) + IF(Q$1='Stars and Floors'!$F15,1, 0) + IF(Q$1='Stars and Floors'!$G15,1, 0), 0)` |
| R15 | `=IF('Stars and Floors'!$A15, IF(R$1='Stars and Floors'!$C15,1, 0) + IF(R$1='Stars and Floors'!$D15,1, 0) + IF(R$1='Stars and Floors'!$E15,1, 0) + IF(R$1='Stars and Floors'!$F15,1, 0) + IF(R$1='Stars and Floors'!$G15,1, 0), 0)` |
| S15 | `=IF('Stars and Floors'!$A15, IF(S$1='Stars and Floors'!$C15,1, 0) + IF(S$1='Stars and Floors'!$D15,1, 0) + IF(S$1='Stars and Floors'!$E15,1, 0) + IF(S$1='Stars and Floors'!$F15,1, 0) + IF(S$1='Stars and Floors'!$G15,1, 0), 0)` |
| T15 | `=IF('Stars and Floors'!$A15, IF(T$1='Stars and Floors'!$C15,1, 0) + IF(T$1='Stars and Floors'!$D15,1, 0) + IF(T$1='Stars and Floors'!$E15,1, 0) + IF(T$1='Stars and Floors'!$F15,1, 0) + IF(T$1='Stars and Floors'!$G15,1, 0), 0)` |
| U15 | `=IF('Stars and Floors'!$A15, IF(U$1='Stars and Floors'!$C15,1, 0) + IF(U$1='Stars and Floors'!$D15,1, 0) + IF(U$1='Stars and Floors'!$E15,1, 0) + IF(U$1='Stars and Floors'!$F15,1, 0) + IF(U$1='Stars and Floors'!$G15,1, 0), 0)` |
| V15 | `=IF('Stars and Floors'!$A15, IF(V$1='Stars and Floors'!$C15,1, 0) + IF(V$1='Stars and Floors'!$D15,1, 0) + IF(V$1='Stars and Floors'!$E15,1, 0) + IF(V$1='Stars and Floors'!$F15,1, 0) + IF(V$1='Stars and Floors'!$G15,1, 0), 0)` |
| W15 | `=IF('Stars and Floors'!$A15, IF(W$1='Stars and Floors'!$C15,1, 0) + IF(W$1='Stars and Floors'!$D15,1, 0) + IF(W$1='Stars and Floors'!$E15,1, 0) + IF(W$1='Stars and Floors'!$F15,1, 0) + IF(W$1='Stars and Floors'!$G15,1, 0), 0)` |
| X15 | `=IF('Stars and Floors'!$A15, IF(X$1='Stars and Floors'!$C15,1, 0) + IF(X$1='Stars and Floors'!$D15,1, 0) + IF(X$1='Stars and Floors'!$E15,1, 0) + IF(X$1='Stars and Floors'!$F15,1, 0) + IF(X$1='Stars and Floors'!$G15,1, 0), 0)` |
| Y15 | `=IF('Stars and Floors'!$A15, IF(Y$1='Stars and Floors'!$C15,1, 0) + IF(Y$1='Stars and Floors'!$D15,1, 0) + IF(Y$1='Stars and Floors'!$E15,1, 0) + IF(Y$1='Stars and Floors'!$F15,1, 0) + IF(Y$1='Stars and Floors'!$G15,1, 0), 0)` |
| Z15 | `=IF('Stars and Floors'!$A15, IF(Z$1='Stars and Floors'!$C15,1, 0) + IF(Z$1='Stars and Floors'!$D15,1, 0) + IF(Z$1='Stars and Floors'!$E15,1, 0) + IF(Z$1='Stars and Floors'!$F15,1, 0) + IF(Z$1='Stars and Floors'!$G15,1, 0), 0)` |
| AA15 | `=IF('Stars and Floors'!$A15, IF(AA$1='Stars and Floors'!$C15,1, 0) + IF(AA$1='Stars and Floors'!$D15,1, 0) + IF(AA$1='Stars and Floors'!$E15,1, 0) + IF(AA$1='Stars and Floors'!$F15,1, 0) + IF(AA$1='Stars and Floors'!$G15,1, 0), 0)` |
| AB15 | `=IF('Stars and Floors'!$A15, IF(AB$1='Stars and Floors'!$C15,1, 0) + IF(AB$1='Stars and Floors'!$D15,1, 0) + IF(AB$1='Stars and Floors'!$E15,1, 0) + IF(AB$1='Stars and Floors'!$F15,1, 0) + IF(AB$1='Stars and Floors'!$G15,1, 0), 0)` |
| AC15 | `=IF('Stars and Floors'!$A15, IF(AC$1='Stars and Floors'!$C15,1, 0) + IF(AC$1='Stars and Floors'!$D15,1, 0) + IF(AC$1='Stars and Floors'!$E15,1, 0) + IF(AC$1='Stars and Floors'!$F15,1, 0) + IF(AC$1='Stars and Floors'!$G15,1, 0), 0)` |
| AD15 | `=IF('Stars and Floors'!$A15, IF(AD$1='Stars and Floors'!$C15,1, 0) + IF(AD$1='Stars and Floors'!$D15,1, 0) + IF(AD$1='Stars and Floors'!$E15,1, 0) + IF(AD$1='Stars and Floors'!$F15,1, 0) + IF(AD$1='Stars and Floors'!$G15,1, 0), 0)` |
| AE15 | `=IF('Stars and Floors'!$A15, IF(AE$1='Stars and Floors'!$C15,1, 0) + IF(AE$1='Stars and Floors'!$D15,1, 0) + IF(AE$1='Stars and Floors'!$E15,1, 0) + IF(AE$1='Stars and Floors'!$F15,1, 0) + IF(AE$1='Stars and Floors'!$G15,1, 0), 0)` |
| AF15 | `=IF('Stars and Floors'!$A15, IF(AF$1='Stars and Floors'!$C15,1, 0) + IF(AF$1='Stars and Floors'!$D15,1, 0) + IF(AF$1='Stars and Floors'!$E15,1, 0) + IF(AF$1='Stars and Floors'!$F15,1, 0) + IF(AF$1='Stars and Floors'!$G15,1, 0), 0)` |
| AG15 | `=IF('Stars and Floors'!$A15, IF(AG$1='Stars and Floors'!$C15,1, 0) + IF(AG$1='Stars and Floors'!$D15,1, 0) + IF(AG$1='Stars and Floors'!$E15,1, 0) + IF(AG$1='Stars and Floors'!$F15,1, 0) + IF(AG$1='Stars and Floors'!$G15,1, 0), 0)` |
| AH15 | `=IF('Stars and Floors'!$A15, IF(AH$1='Stars and Floors'!$C15,1, 0) + IF(AH$1='Stars and Floors'!$D15,1, 0) + IF(AH$1='Stars and Floors'!$E15,1, 0) + IF(AH$1='Stars and Floors'!$F15,1, 0) + IF(AH$1='Stars and Floors'!$G15,1, 0), 0)` |
| AI15 | `=IF('Stars and Floors'!$A15, IF(AI$1='Stars and Floors'!$C15,1, 0) + IF(AI$1='Stars and Floors'!$D15,1, 0) + IF(AI$1='Stars and Floors'!$E15,1, 0) + IF(AI$1='Stars and Floors'!$F15,1, 0) + IF(AI$1='Stars and Floors'!$G15,1, 0), 0)` |
| AJ15 | `=IF('Stars and Floors'!$A15, IF(AJ$1='Stars and Floors'!$C15,1, 0) + IF(AJ$1='Stars and Floors'!$D15,1, 0) + IF(AJ$1='Stars and Floors'!$E15,1, 0) + IF(AJ$1='Stars and Floors'!$F15,1, 0) + IF(AJ$1='Stars and Floors'!$G15,1, 0), 0)` |
| AK15 | `=IF('Stars and Floors'!$A15, IF(AK$1='Stars and Floors'!$C15,1, 0) + IF(AK$1='Stars and Floors'!$D15,1, 0) + IF(AK$1='Stars and Floors'!$E15,1, 0) + IF(AK$1='Stars and Floors'!$F15,1, 0) + IF(AK$1='Stars and Floors'!$G15,1, 0), 0)` |
| AL15 | `=IF('Stars and Floors'!$A15, IF(AL$1='Stars and Floors'!$C15,1, 0) + IF(AL$1='Stars and Floors'!$D15,1, 0) + IF(AL$1='Stars and Floors'!$E15,1, 0) + IF(AL$1='Stars and Floors'!$F15,1, 0) + IF(AL$1='Stars and Floors'!$G15,1, 0), 0)` |
| AM15 | `=IF('Stars and Floors'!$A15, IF(AM$1='Stars and Floors'!$C15,1, 0) + IF(AM$1='Stars and Floors'!$D15,1, 0) + IF(AM$1='Stars and Floors'!$E15,1, 0) + IF(AM$1='Stars and Floors'!$F15,1, 0) + IF(AM$1='Stars and Floors'!$G15,1, 0), 0)` |
| AN15 | `=IF('Stars and Floors'!$A15, IF(AN$1='Stars and Floors'!$C15,1, 0) + IF(AN$1='Stars and Floors'!$D15,1, 0) + IF(AN$1='Stars and Floors'!$E15,1, 0) + IF(AN$1='Stars and Floors'!$F15,1, 0) + IF(AN$1='Stars and Floors'!$G15,1, 0), 0)` |
| AO15 | `=IF('Stars and Floors'!$A15, IF(AO$1='Stars and Floors'!$C15,1, 0) + IF(AO$1='Stars and Floors'!$D15,1, 0) + IF(AO$1='Stars and Floors'!$E15,1, 0) + IF(AO$1='Stars and Floors'!$F15,1, 0) + IF(AO$1='Stars and Floors'!$G15,1, 0), 0)` |
| AP15 | `=IF('Stars and Floors'!$A15, IF(AP$1='Stars and Floors'!$C15,1, 0) + IF(AP$1='Stars and Floors'!$D15,1, 0) + IF(AP$1='Stars and Floors'!$E15,1, 0) + IF(AP$1='Stars and Floors'!$F15,1, 0) + IF(AP$1='Stars and Floors'!$G15,1, 0), 0)` |
| AQ15 | `=IF('Stars and Floors'!$A15, IF(AQ$1='Stars and Floors'!$C15,1, 0) + IF(AQ$1='Stars and Floors'!$D15,1, 0) + IF(AQ$1='Stars and Floors'!$E15,1, 0) + IF(AQ$1='Stars and Floors'!$F15,1, 0) + IF(AQ$1='Stars and Floors'!$G15,1, 0), 0)` |
| AR15 | `=IF('Stars and Floors'!$A15, IF(AR$1='Stars and Floors'!$C15,1, 0) + IF(AR$1='Stars and Floors'!$D15,1, 0) + IF(AR$1='Stars and Floors'!$E15,1, 0) + IF(AR$1='Stars and Floors'!$F15,1, 0) + IF(AR$1='Stars and Floors'!$G15,1, 0), 0)` |
| AS15 | `=IF('Stars and Floors'!$A15, IF(AS$1='Stars and Floors'!$C15,1, 0) + IF(AS$1='Stars and Floors'!$D15,1, 0) + IF(AS$1='Stars and Floors'!$E15,1, 0) + IF(AS$1='Stars and Floors'!$F15,1, 0) + IF(AS$1='Stars and Floors'!$G15,1, 0), 0)` |
| AT15 | `=IF('Stars and Floors'!$A15, IF(AT$1='Stars and Floors'!$C15,1, 0) + IF(AT$1='Stars and Floors'!$D15,1, 0) + IF(AT$1='Stars and Floors'!$E15,1, 0) + IF(AT$1='Stars and Floors'!$F15,1, 0) + IF(AT$1='Stars and Floors'!$G15,1, 0), 0)` |
| AU15 | `=IF('Stars and Floors'!$A15, IF(AU$1='Stars and Floors'!$C15,1, 0) + IF(AU$1='Stars and Floors'!$D15,1, 0) + IF(AU$1='Stars and Floors'!$E15,1, 0) + IF(AU$1='Stars and Floors'!$F15,1, 0) + IF(AU$1='Stars and Floors'!$G15,1, 0), 0)` |
| AV15 | `=IF('Stars and Floors'!$A15, IF(AV$1='Stars and Floors'!$C15,1, 0) + IF(AV$1='Stars and Floors'!$D15,1, 0) + IF(AV$1='Stars and Floors'!$E15,1, 0) + IF(AV$1='Stars and Floors'!$F15,1, 0) + IF(AV$1='Stars and Floors'!$G15,1, 0), 0)` |
| AW15 | `=IF('Stars and Floors'!$A15, IF(AW$1='Stars and Floors'!$C15,1, 0) + IF(AW$1='Stars and Floors'!$D15,1, 0) + IF(AW$1='Stars and Floors'!$E15,1, 0) + IF(AW$1='Stars and Floors'!$F15,1, 0) + IF(AW$1='Stars and Floors'!$G15,1, 0), 0)` |
| AX15 | `=IF('Stars and Floors'!$A15, IF(AX$1='Stars and Floors'!$C15,1, 0) + IF(AX$1='Stars and Floors'!$D15,1, 0) + IF(AX$1='Stars and Floors'!$E15,1, 0) + IF(AX$1='Stars and Floors'!$F15,1, 0) + IF(AX$1='Stars and Floors'!$G15,1, 0), 0)` |
| AY15 | `=IF('Stars and Floors'!$A15, IF(AY$1='Stars and Floors'!$C15,1, 0) + IF(AY$1='Stars and Floors'!$D15,1, 0) + IF(AY$1='Stars and Floors'!$E15,1, 0) + IF(AY$1='Stars and Floors'!$F15,1, 0) + IF(AY$1='Stars and Floors'!$G15,1, 0), 0)` |
| AZ15 | `=IF('Stars and Floors'!$A15, IF(AZ$1='Stars and Floors'!$C15,1, 0) + IF(AZ$1='Stars and Floors'!$D15,1, 0) + IF(AZ$1='Stars and Floors'!$E15,1, 0) + IF(AZ$1='Stars and Floors'!$F15,1, 0) + IF(AZ$1='Stars and Floors'!$G15,1, 0), 0)` |
| BA15 | `=IF('Stars and Floors'!$A15, IF(BA$1='Stars and Floors'!$C15,1, 0) + IF(BA$1='Stars and Floors'!$D15,1, 0) + IF(BA$1='Stars and Floors'!$E15,1, 0) + IF(BA$1='Stars and Floors'!$F15,1, 0) + IF(BA$1='Stars and Floors'!$G15,1, 0), 0)` |
| BB15 | `=IF('Stars and Floors'!$A15, IF(BB$1='Stars and Floors'!$C15,1, 0) + IF(BB$1='Stars and Floors'!$D15,1, 0) + IF(BB$1='Stars and Floors'!$E15,1, 0) + IF(BB$1='Stars and Floors'!$F15,1, 0) + IF(BB$1='Stars and Floors'!$G15,1, 0), 0)` |
| BC15 | `=IF('Stars and Floors'!$A15, IF(BC$1='Stars and Floors'!$C15,1, 0) + IF(BC$1='Stars and Floors'!$D15,1, 0) + IF(BC$1='Stars and Floors'!$E15,1, 0) + IF(BC$1='Stars and Floors'!$F15,1, 0) + IF(BC$1='Stars and Floors'!$G15,1, 0), 0)` |
| BD15 | `=IF('Stars and Floors'!$A15, IF(BD$1='Stars and Floors'!$C15,1, 0) + IF(BD$1='Stars and Floors'!$D15,1, 0) + IF(BD$1='Stars and Floors'!$E15,1, 0) + IF(BD$1='Stars and Floors'!$F15,1, 0) + IF(BD$1='Stars and Floors'!$G15,1, 0), 0)` |
| BE15 | `=IF('Stars and Floors'!$A15, IF(BE$1='Stars and Floors'!$C15,1, 0) + IF(BE$1='Stars and Floors'!$D15,1, 0) + IF(BE$1='Stars and Floors'!$E15,1, 0) + IF(BE$1='Stars and Floors'!$F15,1, 0) + IF(BE$1='Stars and Floors'!$G15,1, 0), 0)` |
| BF15 | `=IF('Stars and Floors'!$A15, IF(BF$1='Stars and Floors'!$C15,1, 0) + IF(BF$1='Stars and Floors'!$D15,1, 0) + IF(BF$1='Stars and Floors'!$E15,1, 0) + IF(BF$1='Stars and Floors'!$F15,1, 0) + IF(BF$1='Stars and Floors'!$G15,1, 0), 0)` |
| BG15 | `=IF('Stars and Floors'!$A15, IF(BG$1='Stars and Floors'!$C15,1, 0) + IF(BG$1='Stars and Floors'!$D15,1, 0) + IF(BG$1='Stars and Floors'!$E15,1, 0) + IF(BG$1='Stars and Floors'!$F15,1, 0) + IF(BG$1='Stars and Floors'!$G15,1, 0), 0)` |
| BH15 | `=IF('Stars and Floors'!$A15, IF(BH$1='Stars and Floors'!$C15,1, 0) + IF(BH$1='Stars and Floors'!$D15,1, 0) + IF(BH$1='Stars and Floors'!$E15,1, 0) + IF(BH$1='Stars and Floors'!$F15,1, 0) + IF(BH$1='Stars and Floors'!$G15,1, 0), 0)` |
| BI15 | `=IF('Stars and Floors'!$A15, IF(BI$1='Stars and Floors'!$C15,1, 0) + IF(BI$1='Stars and Floors'!$D15,1, 0) + IF(BI$1='Stars and Floors'!$E15,1, 0) + IF(BI$1='Stars and Floors'!$F15,1, 0) + IF(BI$1='Stars and Floors'!$G15,1, 0), 0)` |
| BJ15 | `=IF('Stars and Floors'!$A15, IF(BJ$1='Stars and Floors'!$C15,1, 0) + IF(BJ$1='Stars and Floors'!$D15,1, 0) + IF(BJ$1='Stars and Floors'!$E15,1, 0) + IF(BJ$1='Stars and Floors'!$F15,1, 0) + IF(BJ$1='Stars and Floors'!$G15,1, 0), 0)` |
| BK15 | `=IF('Stars and Floors'!$A15, IF(BK$1='Stars and Floors'!$C15,1, 0) + IF(BK$1='Stars and Floors'!$D15,1, 0) + IF(BK$1='Stars and Floors'!$E15,1, 0) + IF(BK$1='Stars and Floors'!$F15,1, 0) + IF(BK$1='Stars and Floors'!$G15,1, 0), 0)` |
| BL15 | `=IF('Stars and Floors'!$A15, IF(BL$1='Stars and Floors'!$C15,1, 0) + IF(BL$1='Stars and Floors'!$D15,1, 0) + IF(BL$1='Stars and Floors'!$E15,1, 0) + IF(BL$1='Stars and Floors'!$F15,1, 0) + IF(BL$1='Stars and Floors'!$G15,1, 0), 0)` |
| BM15 | `=IF('Stars and Floors'!$A15, IF(BM$1='Stars and Floors'!$C15,1, 0) + IF(BM$1='Stars and Floors'!$D15,1, 0) + IF(BM$1='Stars and Floors'!$E15,1, 0) + IF(BM$1='Stars and Floors'!$F15,1, 0) + IF(BM$1='Stars and Floors'!$G15,1, 0), 0)` |
| BN15 | `=IF('Stars and Floors'!$A15, IF(BN$1='Stars and Floors'!$C15,1, 0) + IF(BN$1='Stars and Floors'!$D15,1, 0) + IF(BN$1='Stars and Floors'!$E15,1, 0) + IF(BN$1='Stars and Floors'!$F15,1, 0) + IF(BN$1='Stars and Floors'!$G15,1, 0), 0)` |
| BO15 | `=IF('Stars and Floors'!$A15, IF(BO$1='Stars and Floors'!$C15,1, 0) + IF(BO$1='Stars and Floors'!$D15,1, 0) + IF(BO$1='Stars and Floors'!$E15,1, 0) + IF(BO$1='Stars and Floors'!$F15,1, 0) + IF(BO$1='Stars and Floors'!$G15,1, 0), 0)` |
| BP15 | `=IF('Stars and Floors'!$A15, IF(BP$1='Stars and Floors'!$C15,1, 0) + IF(BP$1='Stars and Floors'!$D15,1, 0) + IF(BP$1='Stars and Floors'!$E15,1, 0) + IF(BP$1='Stars and Floors'!$F15,1, 0) + IF(BP$1='Stars and Floors'!$G15,1, 0), 0)` |
| BQ15 | `=IF('Stars and Floors'!$A15, IF(BQ$1='Stars and Floors'!$C15,1, 0) + IF(BQ$1='Stars and Floors'!$D15,1, 0) + IF(BQ$1='Stars and Floors'!$E15,1, 0) + IF(BQ$1='Stars and Floors'!$F15,1, 0) + IF(BQ$1='Stars and Floors'!$G15,1, 0), 0)` |
| BR15 | `=IF('Stars and Floors'!$A15, IF(BR$1='Stars and Floors'!$C15,1, 0) + IF(BR$1='Stars and Floors'!$D15,1, 0) + IF(BR$1='Stars and Floors'!$E15,1, 0) + IF(BR$1='Stars and Floors'!$F15,1, 0) + IF(BR$1='Stars and Floors'!$G15,1, 0), 0)` |
| BS15 | `=IF('Stars and Floors'!$A15, IF(BS$1='Stars and Floors'!$C15,1, 0) + IF(BS$1='Stars and Floors'!$D15,1, 0) + IF(BS$1='Stars and Floors'!$E15,1, 0) + IF(BS$1='Stars and Floors'!$F15,1, 0) + IF(BS$1='Stars and Floors'!$G15,1, 0), 0)` |
| BT15 | `=IF('Stars and Floors'!$A15, IF(BT$1='Stars and Floors'!$C15,1, 0) + IF(BT$1='Stars and Floors'!$D15,1, 0) + IF(BT$1='Stars and Floors'!$E15,1, 0) + IF(BT$1='Stars and Floors'!$F15,1, 0) + IF(BT$1='Stars and Floors'!$G15,1, 0), 0)` |
| BU15 | `=IF('Stars and Floors'!$A15, IF(BU$1='Stars and Floors'!$C15,1, 0) + IF(BU$1='Stars and Floors'!$D15,1, 0) + IF(BU$1='Stars and Floors'!$E15,1, 0) + IF(BU$1='Stars and Floors'!$F15,1, 0) + IF(BU$1='Stars and Floors'!$G15,1, 0), 0)` |
| BV15 | `=IF('Stars and Floors'!$A15, IF(BV$1='Stars and Floors'!$C15,1, 0) + IF(BV$1='Stars and Floors'!$D15,1, 0) + IF(BV$1='Stars and Floors'!$E15,1, 0) + IF(BV$1='Stars and Floors'!$F15,1, 0) + IF(BV$1='Stars and Floors'!$G15,1, 0), 0)` |
| BW15 | `=IF('Stars and Floors'!$A15, IF(BW$1='Stars and Floors'!$C15,1, 0) + IF(BW$1='Stars and Floors'!$D15,1, 0) + IF(BW$1='Stars and Floors'!$E15,1, 0) + IF(BW$1='Stars and Floors'!$F15,1, 0) + IF(BW$1='Stars and Floors'!$G15,1, 0), 0)` |
| BX15 | `=IF('Stars and Floors'!$A15, IF(BX$1='Stars and Floors'!$C15,1, 0) + IF(BX$1='Stars and Floors'!$D15,1, 0) + IF(BX$1='Stars and Floors'!$E15,1, 0) + IF(BX$1='Stars and Floors'!$F15,1, 0) + IF(BX$1='Stars and Floors'!$G15,1, 0), 0)` |
| BY15 | `=IF('Stars and Floors'!$A15, IF(BY$1='Stars and Floors'!$C15,1, 0) + IF(BY$1='Stars and Floors'!$D15,1, 0) + IF(BY$1='Stars and Floors'!$E15,1, 0) + IF(BY$1='Stars and Floors'!$F15,1, 0) + IF(BY$1='Stars and Floors'!$G15,1, 0), 0)` |
| BZ15 | `=IF('Stars and Floors'!$A15, IF(BZ$1='Stars and Floors'!$C15,1, 0) + IF(BZ$1='Stars and Floors'!$D15,1, 0) + IF(BZ$1='Stars and Floors'!$E15,1, 0) + IF(BZ$1='Stars and Floors'!$F15,1, 0) + IF(BZ$1='Stars and Floors'!$G15,1, 0), 0)` |
| CA15 | `=IF('Stars and Floors'!$A15, IF(CA$1='Stars and Floors'!$C15,1, 0) + IF(CA$1='Stars and Floors'!$D15,1, 0) + IF(CA$1='Stars and Floors'!$E15,1, 0) + IF(CA$1='Stars and Floors'!$F15,1, 0) + IF(CA$1='Stars and Floors'!$G15,1, 0), 0)` |
| CB15 | `=IF('Stars and Floors'!$A15, IF(CB$1='Stars and Floors'!$C15,1, 0) + IF(CB$1='Stars and Floors'!$D15,1, 0) + IF(CB$1='Stars and Floors'!$E15,1, 0) + IF(CB$1='Stars and Floors'!$F15,1, 0) + IF(CB$1='Stars and Floors'!$G15,1, 0), 0)` |
| CC15 | `=IF('Stars and Floors'!$A15, IF(CC$1='Stars and Floors'!$C15,1, 0) + IF(CC$1='Stars and Floors'!$D15,1, 0) + IF(CC$1='Stars and Floors'!$E15,1, 0) + IF(CC$1='Stars and Floors'!$F15,1, 0) + IF(CC$1='Stars and Floors'!$G15,1, 0), 0)` |
| CD15 | `=IF('Stars and Floors'!$A15, IF(CD$1='Stars and Floors'!$C15,1, 0) + IF(CD$1='Stars and Floors'!$D15,1, 0) + IF(CD$1='Stars and Floors'!$E15,1, 0) + IF(CD$1='Stars and Floors'!$F15,1, 0) + IF(CD$1='Stars and Floors'!$G15,1, 0), 0)` |
| CE15 | `=IF('Stars and Floors'!$A15, IF(CE$1='Stars and Floors'!$C15,1, 0) + IF(CE$1='Stars and Floors'!$D15,1, 0) + IF(CE$1='Stars and Floors'!$E15,1, 0) + IF(CE$1='Stars and Floors'!$F15,1, 0) + IF(CE$1='Stars and Floors'!$G15,1, 0), 0)` |
| CF15 | `=IF('Stars and Floors'!$A15, IF(CF$1='Stars and Floors'!$C15,1, 0) + IF(CF$1='Stars and Floors'!$D15,1, 0) + IF(CF$1='Stars and Floors'!$E15,1, 0) + IF(CF$1='Stars and Floors'!$F15,1, 0) + IF(CF$1='Stars and Floors'!$G15,1, 0), 0)` |
| CG15 | `=IF('Stars and Floors'!$A15, IF(CG$1='Stars and Floors'!$C15,1, 0) + IF(CG$1='Stars and Floors'!$D15,1, 0) + IF(CG$1='Stars and Floors'!$E15,1, 0) + IF(CG$1='Stars and Floors'!$F15,1, 0) + IF(CG$1='Stars and Floors'!$G15,1, 0), 0)` |
| CH15 | `=IF('Stars and Floors'!$A15, IF(CH$1='Stars and Floors'!$C15,1, 0) + IF(CH$1='Stars and Floors'!$D15,1, 0) + IF(CH$1='Stars and Floors'!$E15,1, 0) + IF(CH$1='Stars and Floors'!$F15,1, 0) + IF(CH$1='Stars and Floors'!$G15,1, 0), 0)` |
| CI15 | `=IF('Stars and Floors'!$A15, IF(CI$1='Stars and Floors'!$C15,1, 0) + IF(CI$1='Stars and Floors'!$D15,1, 0) + IF(CI$1='Stars and Floors'!$E15,1, 0) + IF(CI$1='Stars and Floors'!$F15,1, 0) + IF(CI$1='Stars and Floors'!$G15,1, 0), 0)` |
| CJ15 | `=IF('Stars and Floors'!$A15, IF(CJ$1='Stars and Floors'!$C15,1, 0) + IF(CJ$1='Stars and Floors'!$D15,1, 0) + IF(CJ$1='Stars and Floors'!$E15,1, 0) + IF(CJ$1='Stars and Floors'!$F15,1, 0) + IF(CJ$1='Stars and Floors'!$G15,1, 0), 0)` |
| CK15 | `=IF('Stars and Floors'!$A15, IF(CK$1='Stars and Floors'!$C15,1, 0) + IF(CK$1='Stars and Floors'!$D15,1, 0) + IF(CK$1='Stars and Floors'!$E15,1, 0) + IF(CK$1='Stars and Floors'!$F15,1, 0) + IF(CK$1='Stars and Floors'!$G15,1, 0), 0)` |
| CL15 | `=IF('Stars and Floors'!$A15, IF(CL$1='Stars and Floors'!$C15,1, 0) + IF(CL$1='Stars and Floors'!$D15,1, 0) + IF(CL$1='Stars and Floors'!$E15,1, 0) + IF(CL$1='Stars and Floors'!$F15,1, 0) + IF(CL$1='Stars and Floors'!$G15,1, 0), 0)` |
| CM15 | `=IF('Stars and Floors'!$A15, IF(CM$1='Stars and Floors'!$C15,1, 0) + IF(CM$1='Stars and Floors'!$D15,1, 0) + IF(CM$1='Stars and Floors'!$E15,1, 0) + IF(CM$1='Stars and Floors'!$F15,1, 0) + IF(CM$1='Stars and Floors'!$G15,1, 0), 0)` |
| CN15 | `=IF('Stars and Floors'!$A15, IF(CN$1='Stars and Floors'!$C15,1, 0) + IF(CN$1='Stars and Floors'!$D15,1, 0) + IF(CN$1='Stars and Floors'!$E15,1, 0) + IF(CN$1='Stars and Floors'!$F15,1, 0) + IF(CN$1='Stars and Floors'!$G15,1, 0), 0)` |
| CO15 | `=IF('Stars and Floors'!$A15, IF(CO$1='Stars and Floors'!$C15,1, 0) + IF(CO$1='Stars and Floors'!$D15,1, 0) + IF(CO$1='Stars and Floors'!$E15,1, 0) + IF(CO$1='Stars and Floors'!$F15,1, 0) + IF(CO$1='Stars and Floors'!$G15,1, 0), 0)` |
| CP15 | `=IF('Stars and Floors'!$A15, IF(CP$1='Stars and Floors'!$C15,1, 0) + IF(CP$1='Stars and Floors'!$D15,1, 0) + IF(CP$1='Stars and Floors'!$E15,1, 0) + IF(CP$1='Stars and Floors'!$F15,1, 0) + IF(CP$1='Stars and Floors'!$G15,1, 0), 0)` |
| CQ15 | `=IF('Stars and Floors'!$A15, IF(CQ$1='Stars and Floors'!$C15,1, 0) + IF(CQ$1='Stars and Floors'!$D15,1, 0) + IF(CQ$1='Stars and Floors'!$E15,1, 0) + IF(CQ$1='Stars and Floors'!$F15,1, 0) + IF(CQ$1='Stars and Floors'!$G15,1, 0), 0)` |
| CR15 | `=IF('Stars and Floors'!$A15, IF(CR$1='Stars and Floors'!$C15,1, 0) + IF(CR$1='Stars and Floors'!$D15,1, 0) + IF(CR$1='Stars and Floors'!$E15,1, 0) + IF(CR$1='Stars and Floors'!$F15,1, 0) + IF(CR$1='Stars and Floors'!$G15,1, 0), 0)` |
| CS15 | `=IF('Stars and Floors'!$A15, IF(CS$1='Stars and Floors'!$C15,1, 0) + IF(CS$1='Stars and Floors'!$D15,1, 0) + IF(CS$1='Stars and Floors'!$E15,1, 0) + IF(CS$1='Stars and Floors'!$F15,1, 0) + IF(CS$1='Stars and Floors'!$G15,1, 0), 0)` |
| CT15 | `=IF('Stars and Floors'!$A15, IF(CT$1='Stars and Floors'!$C15,1, 0) + IF(CT$1='Stars and Floors'!$D15,1, 0) + IF(CT$1='Stars and Floors'!$E15,1, 0) + IF(CT$1='Stars and Floors'!$F15,1, 0) + IF(CT$1='Stars and Floors'!$G15,1, 0), 0)` |
| CU15 | `=IF('Stars and Floors'!$A15, IF(CU$1='Stars and Floors'!$C15,1, 0) + IF(CU$1='Stars and Floors'!$D15,1, 0) + IF(CU$1='Stars and Floors'!$E15,1, 0) + IF(CU$1='Stars and Floors'!$F15,1, 0) + IF(CU$1='Stars and Floors'!$G15,1, 0), 0)` |
| CV15 | `=IF('Stars and Floors'!$A15, IF(CV$1='Stars and Floors'!$C15,1, 0) + IF(CV$1='Stars and Floors'!$D15,1, 0) + IF(CV$1='Stars and Floors'!$E15,1, 0) + IF(CV$1='Stars and Floors'!$F15,1, 0) + IF(CV$1='Stars and Floors'!$G15,1, 0), 0)` |
| CW15 | `=IF('Stars and Floors'!$A15, IF(CW$1='Stars and Floors'!$C15,1, 0) + IF(CW$1='Stars and Floors'!$D15,1, 0) + IF(CW$1='Stars and Floors'!$E15,1, 0) + IF(CW$1='Stars and Floors'!$F15,1, 0) + IF(CW$1='Stars and Floors'!$G15,1, 0), 0)` |
| CX15 | `=IF('Stars and Floors'!$A15, IF(CX$1='Stars and Floors'!$C15,1, 0) + IF(CX$1='Stars and Floors'!$D15,1, 0) + IF(CX$1='Stars and Floors'!$E15,1, 0) + IF(CX$1='Stars and Floors'!$F15,1, 0) + IF(CX$1='Stars and Floors'!$G15,1, 0), 0)` |
| CY15 | `=IF('Stars and Floors'!$A15, IF(CY$1='Stars and Floors'!$C15,1, 0) + IF(CY$1='Stars and Floors'!$D15,1, 0) + IF(CY$1='Stars and Floors'!$E15,1, 0) + IF(CY$1='Stars and Floors'!$F15,1, 0) + IF(CY$1='Stars and Floors'!$G15,1, 0), 0)` |
| CZ15 | `=IF('Stars and Floors'!$A15, IF(CZ$1='Stars and Floors'!$C15,1, 0) + IF(CZ$1='Stars and Floors'!$D15,1, 0) + IF(CZ$1='Stars and Floors'!$E15,1, 0) + IF(CZ$1='Stars and Floors'!$F15,1, 0) + IF(CZ$1='Stars and Floors'!$G15,1, 0), 0)` |
| DA15 | `=IF('Stars and Floors'!$A15, IF(DA$1='Stars and Floors'!$C15,1, 0) + IF(DA$1='Stars and Floors'!$D15,1, 0) + IF(DA$1='Stars and Floors'!$E15,1, 0) + IF(DA$1='Stars and Floors'!$F15,1, 0) + IF(DA$1='Stars and Floors'!$G15,1, 0), 0)` |
| DB15 | `=IF('Stars and Floors'!$A15, IF(DB$1='Stars and Floors'!$C15,1, 0) + IF(DB$1='Stars and Floors'!$D15,1, 0) + IF(DB$1='Stars and Floors'!$E15,1, 0) + IF(DB$1='Stars and Floors'!$F15,1, 0) + IF(DB$1='Stars and Floors'!$G15,1, 0), 0)` |
| DC15 | `=IF('Stars and Floors'!$A15, IF(DC$1='Stars and Floors'!$C15,1, 0) + IF(DC$1='Stars and Floors'!$D15,1, 0) + IF(DC$1='Stars and Floors'!$E15,1, 0) + IF(DC$1='Stars and Floors'!$F15,1, 0) + IF(DC$1='Stars and Floors'!$G15,1, 0), 0)` |
| DD15 | `=IF('Stars and Floors'!$A15, IF(DD$1='Stars and Floors'!$C15,1, 0) + IF(DD$1='Stars and Floors'!$D15,1, 0) + IF(DD$1='Stars and Floors'!$E15,1, 0) + IF(DD$1='Stars and Floors'!$F15,1, 0) + IF(DD$1='Stars and Floors'!$G15,1, 0), 0)` |
| DE15 | `=IF('Stars and Floors'!$A15, IF(DE$1='Stars and Floors'!$C15,1, 0) + IF(DE$1='Stars and Floors'!$D15,1, 0) + IF(DE$1='Stars and Floors'!$E15,1, 0) + IF(DE$1='Stars and Floors'!$F15,1, 0) + IF(DE$1='Stars and Floors'!$G15,1, 0), 0)` |
| DF15 | `=IF('Stars and Floors'!$A15, IF(DF$1='Stars and Floors'!$C15,1, 0) + IF(DF$1='Stars and Floors'!$D15,1, 0) + IF(DF$1='Stars and Floors'!$E15,1, 0) + IF(DF$1='Stars and Floors'!$F15,1, 0) + IF(DF$1='Stars and Floors'!$G15,1, 0), 0)` |
| DG15 | `=IF('Stars and Floors'!$A15, IF(DG$1='Stars and Floors'!$C15,1, 0) + IF(DG$1='Stars and Floors'!$D15,1, 0) + IF(DG$1='Stars and Floors'!$E15,1, 0) + IF(DG$1='Stars and Floors'!$F15,1, 0) + IF(DG$1='Stars and Floors'!$G15,1, 0), 0)` |
| DH15 | `=IF('Stars and Floors'!$A15, IF(DH$1='Stars and Floors'!$C15,1, 0) + IF(DH$1='Stars and Floors'!$D15,1, 0) + IF(DH$1='Stars and Floors'!$E15,1, 0) + IF(DH$1='Stars and Floors'!$F15,1, 0) + IF(DH$1='Stars and Floors'!$G15,1, 0), 0)` |
| DI15 | `=IF('Stars and Floors'!$A15, IF(DI$1='Stars and Floors'!$C15,1, 0) + IF(DI$1='Stars and Floors'!$D15,1, 0) + IF(DI$1='Stars and Floors'!$E15,1, 0) + IF(DI$1='Stars and Floors'!$F15,1, 0) + IF(DI$1='Stars and Floors'!$G15,1, 0), 0)` |
| DJ15 | `=IF('Stars and Floors'!$A15, IF(DJ$1='Stars and Floors'!$C15,1, 0) + IF(DJ$1='Stars and Floors'!$D15,1, 0) + IF(DJ$1='Stars and Floors'!$E15,1, 0) + IF(DJ$1='Stars and Floors'!$F15,1, 0) + IF(DJ$1='Stars and Floors'!$G15,1, 0), 0)` |
| DK15 | `=IF('Stars and Floors'!$A15, IF(DK$1='Stars and Floors'!$C15,1, 0) + IF(DK$1='Stars and Floors'!$D15,1, 0) + IF(DK$1='Stars and Floors'!$E15,1, 0) + IF(DK$1='Stars and Floors'!$F15,1, 0) + IF(DK$1='Stars and Floors'!$G15,1, 0), 0)` |
| DL15 | `=IF('Stars and Floors'!$A15, IF(DL$1='Stars and Floors'!$C15,1, 0) + IF(DL$1='Stars and Floors'!$D15,1, 0) + IF(DL$1='Stars and Floors'!$E15,1, 0) + IF(DL$1='Stars and Floors'!$F15,1, 0) + IF(DL$1='Stars and Floors'!$G15,1, 0), 0)` |
| DM15 | `=IF('Stars and Floors'!$A15, IF(DM$1='Stars and Floors'!$C15,1, 0) + IF(DM$1='Stars and Floors'!$D15,1, 0) + IF(DM$1='Stars and Floors'!$E15,1, 0) + IF(DM$1='Stars and Floors'!$F15,1, 0) + IF(DM$1='Stars and Floors'!$G15,1, 0), 0)` |
| DN15 | `=IF('Stars and Floors'!$A15, IF(DN$1='Stars and Floors'!$C15,1, 0) + IF(DN$1='Stars and Floors'!$D15,1, 0) + IF(DN$1='Stars and Floors'!$E15,1, 0) + IF(DN$1='Stars and Floors'!$F15,1, 0) + IF(DN$1='Stars and Floors'!$G15,1, 0), 0)` |
| DO15 | `=IF('Stars and Floors'!$A15, IF(DO$1='Stars and Floors'!$C15,1, 0) + IF(DO$1='Stars and Floors'!$D15,1, 0) + IF(DO$1='Stars and Floors'!$E15,1, 0) + IF(DO$1='Stars and Floors'!$F15,1, 0) + IF(DO$1='Stars and Floors'!$G15,1, 0), 0)` |
| DP15 | `=IF('Stars and Floors'!$A15, IF(DP$1='Stars and Floors'!$C15,1, 0) + IF(DP$1='Stars and Floors'!$D15,1, 0) + IF(DP$1='Stars and Floors'!$E15,1, 0) + IF(DP$1='Stars and Floors'!$F15,1, 0) + IF(DP$1='Stars and Floors'!$G15,1, 0), 0)` |
| DQ15 | `=IF('Stars and Floors'!$A15, IF(DQ$1='Stars and Floors'!$C15,1, 0) + IF(DQ$1='Stars and Floors'!$D15,1, 0) + IF(DQ$1='Stars and Floors'!$E15,1, 0) + IF(DQ$1='Stars and Floors'!$F15,1, 0) + IF(DQ$1='Stars and Floors'!$G15,1, 0), 0)` |
| B16 | `=IF('Stars and Floors'!$A16, IF(B$1='Stars and Floors'!$C16,1, 0) + IF(B$1='Stars and Floors'!$D16,1, 0) + IF(B$1='Stars and Floors'!$E16,1, 0) + IF(B$1='Stars and Floors'!$F16,1, 0) + IF(B$1='Stars and Floors'!$G16,1, 0), 0)` |
| C16 | `=IF('Stars and Floors'!$A16, IF(C$1='Stars and Floors'!$C16,1, 0) + IF(C$1='Stars and Floors'!$D16,1, 0) + IF(C$1='Stars and Floors'!$E16,1, 0) + IF(C$1='Stars and Floors'!$F16,1, 0) + IF(C$1='Stars and Floors'!$G16,1, 0), 0)` |
| D16 | `=IF('Stars and Floors'!$A16, IF(D$1='Stars and Floors'!$C16,1, 0) + IF(D$1='Stars and Floors'!$D16,1, 0) + IF(D$1='Stars and Floors'!$E16,1, 0) + IF(D$1='Stars and Floors'!$F16,1, 0) + IF(D$1='Stars and Floors'!$G16,1, 0), 0)` |
| E16 | `=IF('Stars and Floors'!$A16, IF(E$1='Stars and Floors'!$C16,1, 0) + IF(E$1='Stars and Floors'!$D16,1, 0) + IF(E$1='Stars and Floors'!$E16,1, 0) + IF(E$1='Stars and Floors'!$F16,1, 0) + IF(E$1='Stars and Floors'!$G16,1, 0), 0)` |
| F16 | `=IF('Stars and Floors'!$A16, IF(F$1='Stars and Floors'!$C16,1, 0) + IF(F$1='Stars and Floors'!$D16,1, 0) + IF(F$1='Stars and Floors'!$E16,1, 0) + IF(F$1='Stars and Floors'!$F16,1, 0) + IF(F$1='Stars and Floors'!$G16,1, 0), 0)` |
| G16 | `=IF('Stars and Floors'!$A16, IF(G$1='Stars and Floors'!$C16,1, 0) + IF(G$1='Stars and Floors'!$D16,1, 0) + IF(G$1='Stars and Floors'!$E16,1, 0) + IF(G$1='Stars and Floors'!$F16,1, 0) + IF(G$1='Stars and Floors'!$G16,1, 0), 0)` |
| H16 | `=IF('Stars and Floors'!$A16, IF(H$1='Stars and Floors'!$C16,1, 0) + IF(H$1='Stars and Floors'!$D16,1, 0) + IF(H$1='Stars and Floors'!$E16,1, 0) + IF(H$1='Stars and Floors'!$F16,1, 0) + IF(H$1='Stars and Floors'!$G16,1, 0), 0)` |
| I16 | `=IF('Stars and Floors'!$A16, IF(I$1='Stars and Floors'!$C16,1, 0) + IF(I$1='Stars and Floors'!$D16,1, 0) + IF(I$1='Stars and Floors'!$E16,1, 0) + IF(I$1='Stars and Floors'!$F16,1, 0) + IF(I$1='Stars and Floors'!$G16,1, 0), 0)` |
| J16 | `=IF('Stars and Floors'!$A16, IF(J$1='Stars and Floors'!$C16,1, 0) + IF(J$1='Stars and Floors'!$D16,1, 0) + IF(J$1='Stars and Floors'!$E16,1, 0) + IF(J$1='Stars and Floors'!$F16,1, 0) + IF(J$1='Stars and Floors'!$G16,1, 0), 0)` |
| K16 | `=IF('Stars and Floors'!$A16, IF(K$1='Stars and Floors'!$C16,1, 0) + IF(K$1='Stars and Floors'!$D16,1, 0) + IF(K$1='Stars and Floors'!$E16,1, 0) + IF(K$1='Stars and Floors'!$F16,1, 0) + IF(K$1='Stars and Floors'!$G16,1, 0), 0)` |
| L16 | `=IF('Stars and Floors'!$A16, IF(L$1='Stars and Floors'!$C16,1, 0) + IF(L$1='Stars and Floors'!$D16,1, 0) + IF(L$1='Stars and Floors'!$E16,1, 0) + IF(L$1='Stars and Floors'!$F16,1, 0) + IF(L$1='Stars and Floors'!$G16,1, 0), 0)` |
| M16 | `=IF('Stars and Floors'!$A16, IF(M$1='Stars and Floors'!$C16,1, 0) + IF(M$1='Stars and Floors'!$D16,1, 0) + IF(M$1='Stars and Floors'!$E16,1, 0) + IF(M$1='Stars and Floors'!$F16,1, 0) + IF(M$1='Stars and Floors'!$G16,1, 0), 0)` |
| N16 | `=IF('Stars and Floors'!$A16, IF(N$1='Stars and Floors'!$C16,1, 0) + IF(N$1='Stars and Floors'!$D16,1, 0) + IF(N$1='Stars and Floors'!$E16,1, 0) + IF(N$1='Stars and Floors'!$F16,1, 0) + IF(N$1='Stars and Floors'!$G16,1, 0), 0)` |
| O16 | `=IF('Stars and Floors'!$A16, IF(O$1='Stars and Floors'!$C16,1, 0) + IF(O$1='Stars and Floors'!$D16,1, 0) + IF(O$1='Stars and Floors'!$E16,1, 0) + IF(O$1='Stars and Floors'!$F16,1, 0) + IF(O$1='Stars and Floors'!$G16,1, 0), 0)` |
| P16 | `=IF('Stars and Floors'!$A16, IF(P$1='Stars and Floors'!$C16,1, 0) + IF(P$1='Stars and Floors'!$D16,1, 0) + IF(P$1='Stars and Floors'!$E16,1, 0) + IF(P$1='Stars and Floors'!$F16,1, 0) + IF(P$1='Stars and Floors'!$G16,1, 0), 0)` |
| Q16 | `=IF('Stars and Floors'!$A16, IF(Q$1='Stars and Floors'!$C16,1, 0) + IF(Q$1='Stars and Floors'!$D16,1, 0) + IF(Q$1='Stars and Floors'!$E16,1, 0) + IF(Q$1='Stars and Floors'!$F16,1, 0) + IF(Q$1='Stars and Floors'!$G16,1, 0), 0)` |
| R16 | `=IF('Stars and Floors'!$A16, IF(R$1='Stars and Floors'!$C16,1, 0) + IF(R$1='Stars and Floors'!$D16,1, 0) + IF(R$1='Stars and Floors'!$E16,1, 0) + IF(R$1='Stars and Floors'!$F16,1, 0) + IF(R$1='Stars and Floors'!$G16,1, 0), 0)` |
| S16 | `=IF('Stars and Floors'!$A16, IF(S$1='Stars and Floors'!$C16,1, 0) + IF(S$1='Stars and Floors'!$D16,1, 0) + IF(S$1='Stars and Floors'!$E16,1, 0) + IF(S$1='Stars and Floors'!$F16,1, 0) + IF(S$1='Stars and Floors'!$G16,1, 0), 0)` |
| T16 | `=IF('Stars and Floors'!$A16, IF(T$1='Stars and Floors'!$C16,1, 0) + IF(T$1='Stars and Floors'!$D16,1, 0) + IF(T$1='Stars and Floors'!$E16,1, 0) + IF(T$1='Stars and Floors'!$F16,1, 0) + IF(T$1='Stars and Floors'!$G16,1, 0), 0)` |
| U16 | `=IF('Stars and Floors'!$A16, IF(U$1='Stars and Floors'!$C16,1, 0) + IF(U$1='Stars and Floors'!$D16,1, 0) + IF(U$1='Stars and Floors'!$E16,1, 0) + IF(U$1='Stars and Floors'!$F16,1, 0) + IF(U$1='Stars and Floors'!$G16,1, 0), 0)` |
| V16 | `=IF('Stars and Floors'!$A16, IF(V$1='Stars and Floors'!$C16,1, 0) + IF(V$1='Stars and Floors'!$D16,1, 0) + IF(V$1='Stars and Floors'!$E16,1, 0) + IF(V$1='Stars and Floors'!$F16,1, 0) + IF(V$1='Stars and Floors'!$G16,1, 0), 0)` |
| W16 | `=IF('Stars and Floors'!$A16, IF(W$1='Stars and Floors'!$C16,1, 0) + IF(W$1='Stars and Floors'!$D16,1, 0) + IF(W$1='Stars and Floors'!$E16,1, 0) + IF(W$1='Stars and Floors'!$F16,1, 0) + IF(W$1='Stars and Floors'!$G16,1, 0), 0)` |
| X16 | `=IF('Stars and Floors'!$A16, IF(X$1='Stars and Floors'!$C16,1, 0) + IF(X$1='Stars and Floors'!$D16,1, 0) + IF(X$1='Stars and Floors'!$E16,1, 0) + IF(X$1='Stars and Floors'!$F16,1, 0) + IF(X$1='Stars and Floors'!$G16,1, 0), 0)` |
| Y16 | `=IF('Stars and Floors'!$A16, IF(Y$1='Stars and Floors'!$C16,1, 0) + IF(Y$1='Stars and Floors'!$D16,1, 0) + IF(Y$1='Stars and Floors'!$E16,1, 0) + IF(Y$1='Stars and Floors'!$F16,1, 0) + IF(Y$1='Stars and Floors'!$G16,1, 0), 0)` |
| Z16 | `=IF('Stars and Floors'!$A16, IF(Z$1='Stars and Floors'!$C16,1, 0) + IF(Z$1='Stars and Floors'!$D16,1, 0) + IF(Z$1='Stars and Floors'!$E16,1, 0) + IF(Z$1='Stars and Floors'!$F16,1, 0) + IF(Z$1='Stars and Floors'!$G16,1, 0), 0)` |
| AA16 | `=IF('Stars and Floors'!$A16, IF(AA$1='Stars and Floors'!$C16,1, 0) + IF(AA$1='Stars and Floors'!$D16,1, 0) + IF(AA$1='Stars and Floors'!$E16,1, 0) + IF(AA$1='Stars and Floors'!$F16,1, 0) + IF(AA$1='Stars and Floors'!$G16,1, 0), 0)` |
| AB16 | `=IF('Stars and Floors'!$A16, IF(AB$1='Stars and Floors'!$C16,1, 0) + IF(AB$1='Stars and Floors'!$D16,1, 0) + IF(AB$1='Stars and Floors'!$E16,1, 0) + IF(AB$1='Stars and Floors'!$F16,1, 0) + IF(AB$1='Stars and Floors'!$G16,1, 0), 0)` |
| AC16 | `=IF('Stars and Floors'!$A16, IF(AC$1='Stars and Floors'!$C16,1, 0) + IF(AC$1='Stars and Floors'!$D16,1, 0) + IF(AC$1='Stars and Floors'!$E16,1, 0) + IF(AC$1='Stars and Floors'!$F16,1, 0) + IF(AC$1='Stars and Floors'!$G16,1, 0), 0)` |
| AD16 | `=IF('Stars and Floors'!$A16, IF(AD$1='Stars and Floors'!$C16,1, 0) + IF(AD$1='Stars and Floors'!$D16,1, 0) + IF(AD$1='Stars and Floors'!$E16,1, 0) + IF(AD$1='Stars and Floors'!$F16,1, 0) + IF(AD$1='Stars and Floors'!$G16,1, 0), 0)` |
| AE16 | `=IF('Stars and Floors'!$A16, IF(AE$1='Stars and Floors'!$C16,1, 0) + IF(AE$1='Stars and Floors'!$D16,1, 0) + IF(AE$1='Stars and Floors'!$E16,1, 0) + IF(AE$1='Stars and Floors'!$F16,1, 0) + IF(AE$1='Stars and Floors'!$G16,1, 0), 0)` |
| AF16 | `=IF('Stars and Floors'!$A16, IF(AF$1='Stars and Floors'!$C16,1, 0) + IF(AF$1='Stars and Floors'!$D16,1, 0) + IF(AF$1='Stars and Floors'!$E16,1, 0) + IF(AF$1='Stars and Floors'!$F16,1, 0) + IF(AF$1='Stars and Floors'!$G16,1, 0), 0)` |
| AG16 | `=IF('Stars and Floors'!$A16, IF(AG$1='Stars and Floors'!$C16,1, 0) + IF(AG$1='Stars and Floors'!$D16,1, 0) + IF(AG$1='Stars and Floors'!$E16,1, 0) + IF(AG$1='Stars and Floors'!$F16,1, 0) + IF(AG$1='Stars and Floors'!$G16,1, 0), 0)` |
| AH16 | `=IF('Stars and Floors'!$A16, IF(AH$1='Stars and Floors'!$C16,1, 0) + IF(AH$1='Stars and Floors'!$D16,1, 0) + IF(AH$1='Stars and Floors'!$E16,1, 0) + IF(AH$1='Stars and Floors'!$F16,1, 0) + IF(AH$1='Stars and Floors'!$G16,1, 0), 0)` |
| AI16 | `=IF('Stars and Floors'!$A16, IF(AI$1='Stars and Floors'!$C16,1, 0) + IF(AI$1='Stars and Floors'!$D16,1, 0) + IF(AI$1='Stars and Floors'!$E16,1, 0) + IF(AI$1='Stars and Floors'!$F16,1, 0) + IF(AI$1='Stars and Floors'!$G16,1, 0), 0)` |
| AJ16 | `=IF('Stars and Floors'!$A16, IF(AJ$1='Stars and Floors'!$C16,1, 0) + IF(AJ$1='Stars and Floors'!$D16,1, 0) + IF(AJ$1='Stars and Floors'!$E16,1, 0) + IF(AJ$1='Stars and Floors'!$F16,1, 0) + IF(AJ$1='Stars and Floors'!$G16,1, 0), 0)` |
| AK16 | `=IF('Stars and Floors'!$A16, IF(AK$1='Stars and Floors'!$C16,1, 0) + IF(AK$1='Stars and Floors'!$D16,1, 0) + IF(AK$1='Stars and Floors'!$E16,1, 0) + IF(AK$1='Stars and Floors'!$F16,1, 0) + IF(AK$1='Stars and Floors'!$G16,1, 0), 0)` |
| AL16 | `=IF('Stars and Floors'!$A16, IF(AL$1='Stars and Floors'!$C16,1, 0) + IF(AL$1='Stars and Floors'!$D16,1, 0) + IF(AL$1='Stars and Floors'!$E16,1, 0) + IF(AL$1='Stars and Floors'!$F16,1, 0) + IF(AL$1='Stars and Floors'!$G16,1, 0), 0)` |
| AM16 | `=IF('Stars and Floors'!$A16, IF(AM$1='Stars and Floors'!$C16,1, 0) + IF(AM$1='Stars and Floors'!$D16,1, 0) + IF(AM$1='Stars and Floors'!$E16,1, 0) + IF(AM$1='Stars and Floors'!$F16,1, 0) + IF(AM$1='Stars and Floors'!$G16,1, 0), 0)` |
| AN16 | `=IF('Stars and Floors'!$A16, IF(AN$1='Stars and Floors'!$C16,1, 0) + IF(AN$1='Stars and Floors'!$D16,1, 0) + IF(AN$1='Stars and Floors'!$E16,1, 0) + IF(AN$1='Stars and Floors'!$F16,1, 0) + IF(AN$1='Stars and Floors'!$G16,1, 0), 0)` |
| AO16 | `=IF('Stars and Floors'!$A16, IF(AO$1='Stars and Floors'!$C16,1, 0) + IF(AO$1='Stars and Floors'!$D16,1, 0) + IF(AO$1='Stars and Floors'!$E16,1, 0) + IF(AO$1='Stars and Floors'!$F16,1, 0) + IF(AO$1='Stars and Floors'!$G16,1, 0), 0)` |
| AP16 | `=IF('Stars and Floors'!$A16, IF(AP$1='Stars and Floors'!$C16,1, 0) + IF(AP$1='Stars and Floors'!$D16,1, 0) + IF(AP$1='Stars and Floors'!$E16,1, 0) + IF(AP$1='Stars and Floors'!$F16,1, 0) + IF(AP$1='Stars and Floors'!$G16,1, 0), 0)` |
| AQ16 | `=IF('Stars and Floors'!$A16, IF(AQ$1='Stars and Floors'!$C16,1, 0) + IF(AQ$1='Stars and Floors'!$D16,1, 0) + IF(AQ$1='Stars and Floors'!$E16,1, 0) + IF(AQ$1='Stars and Floors'!$F16,1, 0) + IF(AQ$1='Stars and Floors'!$G16,1, 0), 0)` |
| AR16 | `=IF('Stars and Floors'!$A16, IF(AR$1='Stars and Floors'!$C16,1, 0) + IF(AR$1='Stars and Floors'!$D16,1, 0) + IF(AR$1='Stars and Floors'!$E16,1, 0) + IF(AR$1='Stars and Floors'!$F16,1, 0) + IF(AR$1='Stars and Floors'!$G16,1, 0), 0)` |
| AS16 | `=IF('Stars and Floors'!$A16, IF(AS$1='Stars and Floors'!$C16,1, 0) + IF(AS$1='Stars and Floors'!$D16,1, 0) + IF(AS$1='Stars and Floors'!$E16,1, 0) + IF(AS$1='Stars and Floors'!$F16,1, 0) + IF(AS$1='Stars and Floors'!$G16,1, 0), 0)` |
| AT16 | `=IF('Stars and Floors'!$A16, IF(AT$1='Stars and Floors'!$C16,1, 0) + IF(AT$1='Stars and Floors'!$D16,1, 0) + IF(AT$1='Stars and Floors'!$E16,1, 0) + IF(AT$1='Stars and Floors'!$F16,1, 0) + IF(AT$1='Stars and Floors'!$G16,1, 0), 0)` |
| AU16 | `=IF('Stars and Floors'!$A16, IF(AU$1='Stars and Floors'!$C16,1, 0) + IF(AU$1='Stars and Floors'!$D16,1, 0) + IF(AU$1='Stars and Floors'!$E16,1, 0) + IF(AU$1='Stars and Floors'!$F16,1, 0) + IF(AU$1='Stars and Floors'!$G16,1, 0), 0)` |
| AV16 | `=IF('Stars and Floors'!$A16, IF(AV$1='Stars and Floors'!$C16,1, 0) + IF(AV$1='Stars and Floors'!$D16,1, 0) + IF(AV$1='Stars and Floors'!$E16,1, 0) + IF(AV$1='Stars and Floors'!$F16,1, 0) + IF(AV$1='Stars and Floors'!$G16,1, 0), 0)` |
| AW16 | `=IF('Stars and Floors'!$A16, IF(AW$1='Stars and Floors'!$C16,1, 0) + IF(AW$1='Stars and Floors'!$D16,1, 0) + IF(AW$1='Stars and Floors'!$E16,1, 0) + IF(AW$1='Stars and Floors'!$F16,1, 0) + IF(AW$1='Stars and Floors'!$G16,1, 0), 0)` |
| AX16 | `=IF('Stars and Floors'!$A16, IF(AX$1='Stars and Floors'!$C16,1, 0) + IF(AX$1='Stars and Floors'!$D16,1, 0) + IF(AX$1='Stars and Floors'!$E16,1, 0) + IF(AX$1='Stars and Floors'!$F16,1, 0) + IF(AX$1='Stars and Floors'!$G16,1, 0), 0)` |
| AY16 | `=IF('Stars and Floors'!$A16, IF(AY$1='Stars and Floors'!$C16,1, 0) + IF(AY$1='Stars and Floors'!$D16,1, 0) + IF(AY$1='Stars and Floors'!$E16,1, 0) + IF(AY$1='Stars and Floors'!$F16,1, 0) + IF(AY$1='Stars and Floors'!$G16,1, 0), 0)` |
| AZ16 | `=IF('Stars and Floors'!$A16, IF(AZ$1='Stars and Floors'!$C16,1, 0) + IF(AZ$1='Stars and Floors'!$D16,1, 0) + IF(AZ$1='Stars and Floors'!$E16,1, 0) + IF(AZ$1='Stars and Floors'!$F16,1, 0) + IF(AZ$1='Stars and Floors'!$G16,1, 0), 0)` |
| BA16 | `=IF('Stars and Floors'!$A16, IF(BA$1='Stars and Floors'!$C16,1, 0) + IF(BA$1='Stars and Floors'!$D16,1, 0) + IF(BA$1='Stars and Floors'!$E16,1, 0) + IF(BA$1='Stars and Floors'!$F16,1, 0) + IF(BA$1='Stars and Floors'!$G16,1, 0), 0)` |
| BB16 | `=IF('Stars and Floors'!$A16, IF(BB$1='Stars and Floors'!$C16,1, 0) + IF(BB$1='Stars and Floors'!$D16,1, 0) + IF(BB$1='Stars and Floors'!$E16,1, 0) + IF(BB$1='Stars and Floors'!$F16,1, 0) + IF(BB$1='Stars and Floors'!$G16,1, 0), 0)` |
| BC16 | `=IF('Stars and Floors'!$A16, IF(BC$1='Stars and Floors'!$C16,1, 0) + IF(BC$1='Stars and Floors'!$D16,1, 0) + IF(BC$1='Stars and Floors'!$E16,1, 0) + IF(BC$1='Stars and Floors'!$F16,1, 0) + IF(BC$1='Stars and Floors'!$G16,1, 0), 0)` |
| BD16 | `=IF('Stars and Floors'!$A16, IF(BD$1='Stars and Floors'!$C16,1, 0) + IF(BD$1='Stars and Floors'!$D16,1, 0) + IF(BD$1='Stars and Floors'!$E16,1, 0) + IF(BD$1='Stars and Floors'!$F16,1, 0) + IF(BD$1='Stars and Floors'!$G16,1, 0), 0)` |
| BE16 | `=IF('Stars and Floors'!$A16, IF(BE$1='Stars and Floors'!$C16,1, 0) + IF(BE$1='Stars and Floors'!$D16,1, 0) + IF(BE$1='Stars and Floors'!$E16,1, 0) + IF(BE$1='Stars and Floors'!$F16,1, 0) + IF(BE$1='Stars and Floors'!$G16,1, 0), 0)` |
| BF16 | `=IF('Stars and Floors'!$A16, IF(BF$1='Stars and Floors'!$C16,1, 0) + IF(BF$1='Stars and Floors'!$D16,1, 0) + IF(BF$1='Stars and Floors'!$E16,1, 0) + IF(BF$1='Stars and Floors'!$F16,1, 0) + IF(BF$1='Stars and Floors'!$G16,1, 0), 0)` |
| BG16 | `=IF('Stars and Floors'!$A16, IF(BG$1='Stars and Floors'!$C16,1, 0) + IF(BG$1='Stars and Floors'!$D16,1, 0) + IF(BG$1='Stars and Floors'!$E16,1, 0) + IF(BG$1='Stars and Floors'!$F16,1, 0) + IF(BG$1='Stars and Floors'!$G16,1, 0), 0)` |
| BH16 | `=IF('Stars and Floors'!$A16, IF(BH$1='Stars and Floors'!$C16,1, 0) + IF(BH$1='Stars and Floors'!$D16,1, 0) + IF(BH$1='Stars and Floors'!$E16,1, 0) + IF(BH$1='Stars and Floors'!$F16,1, 0) + IF(BH$1='Stars and Floors'!$G16,1, 0), 0)` |
| BI16 | `=IF('Stars and Floors'!$A16, IF(BI$1='Stars and Floors'!$C16,1, 0) + IF(BI$1='Stars and Floors'!$D16,1, 0) + IF(BI$1='Stars and Floors'!$E16,1, 0) + IF(BI$1='Stars and Floors'!$F16,1, 0) + IF(BI$1='Stars and Floors'!$G16,1, 0), 0)` |
| BJ16 | `=IF('Stars and Floors'!$A16, IF(BJ$1='Stars and Floors'!$C16,1, 0) + IF(BJ$1='Stars and Floors'!$D16,1, 0) + IF(BJ$1='Stars and Floors'!$E16,1, 0) + IF(BJ$1='Stars and Floors'!$F16,1, 0) + IF(BJ$1='Stars and Floors'!$G16,1, 0), 0)` |
| BK16 | `=IF('Stars and Floors'!$A16, IF(BK$1='Stars and Floors'!$C16,1, 0) + IF(BK$1='Stars and Floors'!$D16,1, 0) + IF(BK$1='Stars and Floors'!$E16,1, 0) + IF(BK$1='Stars and Floors'!$F16,1, 0) + IF(BK$1='Stars and Floors'!$G16,1, 0), 0)` |
| BL16 | `=IF('Stars and Floors'!$A16, IF(BL$1='Stars and Floors'!$C16,1, 0) + IF(BL$1='Stars and Floors'!$D16,1, 0) + IF(BL$1='Stars and Floors'!$E16,1, 0) + IF(BL$1='Stars and Floors'!$F16,1, 0) + IF(BL$1='Stars and Floors'!$G16,1, 0), 0)` |
| BM16 | `=IF('Stars and Floors'!$A16, IF(BM$1='Stars and Floors'!$C16,1, 0) + IF(BM$1='Stars and Floors'!$D16,1, 0) + IF(BM$1='Stars and Floors'!$E16,1, 0) + IF(BM$1='Stars and Floors'!$F16,1, 0) + IF(BM$1='Stars and Floors'!$G16,1, 0), 0)` |
| BN16 | `=IF('Stars and Floors'!$A16, IF(BN$1='Stars and Floors'!$C16,1, 0) + IF(BN$1='Stars and Floors'!$D16,1, 0) + IF(BN$1='Stars and Floors'!$E16,1, 0) + IF(BN$1='Stars and Floors'!$F16,1, 0) + IF(BN$1='Stars and Floors'!$G16,1, 0), 0)` |
| BO16 | `=IF('Stars and Floors'!$A16, IF(BO$1='Stars and Floors'!$C16,1, 0) + IF(BO$1='Stars and Floors'!$D16,1, 0) + IF(BO$1='Stars and Floors'!$E16,1, 0) + IF(BO$1='Stars and Floors'!$F16,1, 0) + IF(BO$1='Stars and Floors'!$G16,1, 0), 0)` |
| BP16 | `=IF('Stars and Floors'!$A16, IF(BP$1='Stars and Floors'!$C16,1, 0) + IF(BP$1='Stars and Floors'!$D16,1, 0) + IF(BP$1='Stars and Floors'!$E16,1, 0) + IF(BP$1='Stars and Floors'!$F16,1, 0) + IF(BP$1='Stars and Floors'!$G16,1, 0), 0)` |
| BQ16 | `=IF('Stars and Floors'!$A16, IF(BQ$1='Stars and Floors'!$C16,1, 0) + IF(BQ$1='Stars and Floors'!$D16,1, 0) + IF(BQ$1='Stars and Floors'!$E16,1, 0) + IF(BQ$1='Stars and Floors'!$F16,1, 0) + IF(BQ$1='Stars and Floors'!$G16,1, 0), 0)` |
| BR16 | `=IF('Stars and Floors'!$A16, IF(BR$1='Stars and Floors'!$C16,1, 0) + IF(BR$1='Stars and Floors'!$D16,1, 0) + IF(BR$1='Stars and Floors'!$E16,1, 0) + IF(BR$1='Stars and Floors'!$F16,1, 0) + IF(BR$1='Stars and Floors'!$G16,1, 0), 0)` |
| BS16 | `=IF('Stars and Floors'!$A16, IF(BS$1='Stars and Floors'!$C16,1, 0) + IF(BS$1='Stars and Floors'!$D16,1, 0) + IF(BS$1='Stars and Floors'!$E16,1, 0) + IF(BS$1='Stars and Floors'!$F16,1, 0) + IF(BS$1='Stars and Floors'!$G16,1, 0), 0)` |
| BT16 | `=IF('Stars and Floors'!$A16, IF(BT$1='Stars and Floors'!$C16,1, 0) + IF(BT$1='Stars and Floors'!$D16,1, 0) + IF(BT$1='Stars and Floors'!$E16,1, 0) + IF(BT$1='Stars and Floors'!$F16,1, 0) + IF(BT$1='Stars and Floors'!$G16,1, 0), 0)` |
| BU16 | `=IF('Stars and Floors'!$A16, IF(BU$1='Stars and Floors'!$C16,1, 0) + IF(BU$1='Stars and Floors'!$D16,1, 0) + IF(BU$1='Stars and Floors'!$E16,1, 0) + IF(BU$1='Stars and Floors'!$F16,1, 0) + IF(BU$1='Stars and Floors'!$G16,1, 0), 0)` |
| BV16 | `=IF('Stars and Floors'!$A16, IF(BV$1='Stars and Floors'!$C16,1, 0) + IF(BV$1='Stars and Floors'!$D16,1, 0) + IF(BV$1='Stars and Floors'!$E16,1, 0) + IF(BV$1='Stars and Floors'!$F16,1, 0) + IF(BV$1='Stars and Floors'!$G16,1, 0), 0)` |
| BW16 | `=IF('Stars and Floors'!$A16, IF(BW$1='Stars and Floors'!$C16,1, 0) + IF(BW$1='Stars and Floors'!$D16,1, 0) + IF(BW$1='Stars and Floors'!$E16,1, 0) + IF(BW$1='Stars and Floors'!$F16,1, 0) + IF(BW$1='Stars and Floors'!$G16,1, 0), 0)` |
| BX16 | `=IF('Stars and Floors'!$A16, IF(BX$1='Stars and Floors'!$C16,1, 0) + IF(BX$1='Stars and Floors'!$D16,1, 0) + IF(BX$1='Stars and Floors'!$E16,1, 0) + IF(BX$1='Stars and Floors'!$F16,1, 0) + IF(BX$1='Stars and Floors'!$G16,1, 0), 0)` |
| BY16 | `=IF('Stars and Floors'!$A16, IF(BY$1='Stars and Floors'!$C16,1, 0) + IF(BY$1='Stars and Floors'!$D16,1, 0) + IF(BY$1='Stars and Floors'!$E16,1, 0) + IF(BY$1='Stars and Floors'!$F16,1, 0) + IF(BY$1='Stars and Floors'!$G16,1, 0), 0)` |
| BZ16 | `=IF('Stars and Floors'!$A16, IF(BZ$1='Stars and Floors'!$C16,1, 0) + IF(BZ$1='Stars and Floors'!$D16,1, 0) + IF(BZ$1='Stars and Floors'!$E16,1, 0) + IF(BZ$1='Stars and Floors'!$F16,1, 0) + IF(BZ$1='Stars and Floors'!$G16,1, 0), 0)` |
| CA16 | `=IF('Stars and Floors'!$A16, IF(CA$1='Stars and Floors'!$C16,1, 0) + IF(CA$1='Stars and Floors'!$D16,1, 0) + IF(CA$1='Stars and Floors'!$E16,1, 0) + IF(CA$1='Stars and Floors'!$F16,1, 0) + IF(CA$1='Stars and Floors'!$G16,1, 0), 0)` |
| CB16 | `=IF('Stars and Floors'!$A16, IF(CB$1='Stars and Floors'!$C16,1, 0) + IF(CB$1='Stars and Floors'!$D16,1, 0) + IF(CB$1='Stars and Floors'!$E16,1, 0) + IF(CB$1='Stars and Floors'!$F16,1, 0) + IF(CB$1='Stars and Floors'!$G16,1, 0), 0)` |
| CC16 | `=IF('Stars and Floors'!$A16, IF(CC$1='Stars and Floors'!$C16,1, 0) + IF(CC$1='Stars and Floors'!$D16,1, 0) + IF(CC$1='Stars and Floors'!$E16,1, 0) + IF(CC$1='Stars and Floors'!$F16,1, 0) + IF(CC$1='Stars and Floors'!$G16,1, 0), 0)` |
| CD16 | `=IF('Stars and Floors'!$A16, IF(CD$1='Stars and Floors'!$C16,1, 0) + IF(CD$1='Stars and Floors'!$D16,1, 0) + IF(CD$1='Stars and Floors'!$E16,1, 0) + IF(CD$1='Stars and Floors'!$F16,1, 0) + IF(CD$1='Stars and Floors'!$G16,1, 0), 0)` |
| CE16 | `=IF('Stars and Floors'!$A16, IF(CE$1='Stars and Floors'!$C16,1, 0) + IF(CE$1='Stars and Floors'!$D16,1, 0) + IF(CE$1='Stars and Floors'!$E16,1, 0) + IF(CE$1='Stars and Floors'!$F16,1, 0) + IF(CE$1='Stars and Floors'!$G16,1, 0), 0)` |
| CF16 | `=IF('Stars and Floors'!$A16, IF(CF$1='Stars and Floors'!$C16,1, 0) + IF(CF$1='Stars and Floors'!$D16,1, 0) + IF(CF$1='Stars and Floors'!$E16,1, 0) + IF(CF$1='Stars and Floors'!$F16,1, 0) + IF(CF$1='Stars and Floors'!$G16,1, 0), 0)` |
| CG16 | `=IF('Stars and Floors'!$A16, IF(CG$1='Stars and Floors'!$C16,1, 0) + IF(CG$1='Stars and Floors'!$D16,1, 0) + IF(CG$1='Stars and Floors'!$E16,1, 0) + IF(CG$1='Stars and Floors'!$F16,1, 0) + IF(CG$1='Stars and Floors'!$G16,1, 0), 0)` |
| CH16 | `=IF('Stars and Floors'!$A16, IF(CH$1='Stars and Floors'!$C16,1, 0) + IF(CH$1='Stars and Floors'!$D16,1, 0) + IF(CH$1='Stars and Floors'!$E16,1, 0) + IF(CH$1='Stars and Floors'!$F16,1, 0) + IF(CH$1='Stars and Floors'!$G16,1, 0), 0)` |
| CI16 | `=IF('Stars and Floors'!$A16, IF(CI$1='Stars and Floors'!$C16,1, 0) + IF(CI$1='Stars and Floors'!$D16,1, 0) + IF(CI$1='Stars and Floors'!$E16,1, 0) + IF(CI$1='Stars and Floors'!$F16,1, 0) + IF(CI$1='Stars and Floors'!$G16,1, 0), 0)` |
| CJ16 | `=IF('Stars and Floors'!$A16, IF(CJ$1='Stars and Floors'!$C16,1, 0) + IF(CJ$1='Stars and Floors'!$D16,1, 0) + IF(CJ$1='Stars and Floors'!$E16,1, 0) + IF(CJ$1='Stars and Floors'!$F16,1, 0) + IF(CJ$1='Stars and Floors'!$G16,1, 0), 0)` |
| CK16 | `=IF('Stars and Floors'!$A16, IF(CK$1='Stars and Floors'!$C16,1, 0) + IF(CK$1='Stars and Floors'!$D16,1, 0) + IF(CK$1='Stars and Floors'!$E16,1, 0) + IF(CK$1='Stars and Floors'!$F16,1, 0) + IF(CK$1='Stars and Floors'!$G16,1, 0), 0)` |
| CL16 | `=IF('Stars and Floors'!$A16, IF(CL$1='Stars and Floors'!$C16,1, 0) + IF(CL$1='Stars and Floors'!$D16,1, 0) + IF(CL$1='Stars and Floors'!$E16,1, 0) + IF(CL$1='Stars and Floors'!$F16,1, 0) + IF(CL$1='Stars and Floors'!$G16,1, 0), 0)` |
| CM16 | `=IF('Stars and Floors'!$A16, IF(CM$1='Stars and Floors'!$C16,1, 0) + IF(CM$1='Stars and Floors'!$D16,1, 0) + IF(CM$1='Stars and Floors'!$E16,1, 0) + IF(CM$1='Stars and Floors'!$F16,1, 0) + IF(CM$1='Stars and Floors'!$G16,1, 0), 0)` |
| CN16 | `=IF('Stars and Floors'!$A16, IF(CN$1='Stars and Floors'!$C16,1, 0) + IF(CN$1='Stars and Floors'!$D16,1, 0) + IF(CN$1='Stars and Floors'!$E16,1, 0) + IF(CN$1='Stars and Floors'!$F16,1, 0) + IF(CN$1='Stars and Floors'!$G16,1, 0), 0)` |
| CO16 | `=IF('Stars and Floors'!$A16, IF(CO$1='Stars and Floors'!$C16,1, 0) + IF(CO$1='Stars and Floors'!$D16,1, 0) + IF(CO$1='Stars and Floors'!$E16,1, 0) + IF(CO$1='Stars and Floors'!$F16,1, 0) + IF(CO$1='Stars and Floors'!$G16,1, 0), 0)` |
| CP16 | `=IF('Stars and Floors'!$A16, IF(CP$1='Stars and Floors'!$C16,1, 0) + IF(CP$1='Stars and Floors'!$D16,1, 0) + IF(CP$1='Stars and Floors'!$E16,1, 0) + IF(CP$1='Stars and Floors'!$F16,1, 0) + IF(CP$1='Stars and Floors'!$G16,1, 0), 0)` |
| CQ16 | `=IF('Stars and Floors'!$A16, IF(CQ$1='Stars and Floors'!$C16,1, 0) + IF(CQ$1='Stars and Floors'!$D16,1, 0) + IF(CQ$1='Stars and Floors'!$E16,1, 0) + IF(CQ$1='Stars and Floors'!$F16,1, 0) + IF(CQ$1='Stars and Floors'!$G16,1, 0), 0)` |
| CR16 | `=IF('Stars and Floors'!$A16, IF(CR$1='Stars and Floors'!$C16,1, 0) + IF(CR$1='Stars and Floors'!$D16,1, 0) + IF(CR$1='Stars and Floors'!$E16,1, 0) + IF(CR$1='Stars and Floors'!$F16,1, 0) + IF(CR$1='Stars and Floors'!$G16,1, 0), 0)` |
| CS16 | `=IF('Stars and Floors'!$A16, IF(CS$1='Stars and Floors'!$C16,1, 0) + IF(CS$1='Stars and Floors'!$D16,1, 0) + IF(CS$1='Stars and Floors'!$E16,1, 0) + IF(CS$1='Stars and Floors'!$F16,1, 0) + IF(CS$1='Stars and Floors'!$G16,1, 0), 0)` |
| CT16 | `=IF('Stars and Floors'!$A16, IF(CT$1='Stars and Floors'!$C16,1, 0) + IF(CT$1='Stars and Floors'!$D16,1, 0) + IF(CT$1='Stars and Floors'!$E16,1, 0) + IF(CT$1='Stars and Floors'!$F16,1, 0) + IF(CT$1='Stars and Floors'!$G16,1, 0), 0)` |
| CU16 | `=IF('Stars and Floors'!$A16, IF(CU$1='Stars and Floors'!$C16,1, 0) + IF(CU$1='Stars and Floors'!$D16,1, 0) + IF(CU$1='Stars and Floors'!$E16,1, 0) + IF(CU$1='Stars and Floors'!$F16,1, 0) + IF(CU$1='Stars and Floors'!$G16,1, 0), 0)` |
| CV16 | `=IF('Stars and Floors'!$A16, IF(CV$1='Stars and Floors'!$C16,1, 0) + IF(CV$1='Stars and Floors'!$D16,1, 0) + IF(CV$1='Stars and Floors'!$E16,1, 0) + IF(CV$1='Stars and Floors'!$F16,1, 0) + IF(CV$1='Stars and Floors'!$G16,1, 0), 0)` |
| CW16 | `=IF('Stars and Floors'!$A16, IF(CW$1='Stars and Floors'!$C16,1, 0) + IF(CW$1='Stars and Floors'!$D16,1, 0) + IF(CW$1='Stars and Floors'!$E16,1, 0) + IF(CW$1='Stars and Floors'!$F16,1, 0) + IF(CW$1='Stars and Floors'!$G16,1, 0), 0)` |
| CX16 | `=IF('Stars and Floors'!$A16, IF(CX$1='Stars and Floors'!$C16,1, 0) + IF(CX$1='Stars and Floors'!$D16,1, 0) + IF(CX$1='Stars and Floors'!$E16,1, 0) + IF(CX$1='Stars and Floors'!$F16,1, 0) + IF(CX$1='Stars and Floors'!$G16,1, 0), 0)` |
| CY16 | `=IF('Stars and Floors'!$A16, IF(CY$1='Stars and Floors'!$C16,1, 0) + IF(CY$1='Stars and Floors'!$D16,1, 0) + IF(CY$1='Stars and Floors'!$E16,1, 0) + IF(CY$1='Stars and Floors'!$F16,1, 0) + IF(CY$1='Stars and Floors'!$G16,1, 0), 0)` |
| CZ16 | `=IF('Stars and Floors'!$A16, IF(CZ$1='Stars and Floors'!$C16,1, 0) + IF(CZ$1='Stars and Floors'!$D16,1, 0) + IF(CZ$1='Stars and Floors'!$E16,1, 0) + IF(CZ$1='Stars and Floors'!$F16,1, 0) + IF(CZ$1='Stars and Floors'!$G16,1, 0), 0)` |
| DA16 | `=IF('Stars and Floors'!$A16, IF(DA$1='Stars and Floors'!$C16,1, 0) + IF(DA$1='Stars and Floors'!$D16,1, 0) + IF(DA$1='Stars and Floors'!$E16,1, 0) + IF(DA$1='Stars and Floors'!$F16,1, 0) + IF(DA$1='Stars and Floors'!$G16,1, 0), 0)` |
| DB16 | `=IF('Stars and Floors'!$A16, IF(DB$1='Stars and Floors'!$C16,1, 0) + IF(DB$1='Stars and Floors'!$D16,1, 0) + IF(DB$1='Stars and Floors'!$E16,1, 0) + IF(DB$1='Stars and Floors'!$F16,1, 0) + IF(DB$1='Stars and Floors'!$G16,1, 0), 0)` |
| DC16 | `=IF('Stars and Floors'!$A16, IF(DC$1='Stars and Floors'!$C16,1, 0) + IF(DC$1='Stars and Floors'!$D16,1, 0) + IF(DC$1='Stars and Floors'!$E16,1, 0) + IF(DC$1='Stars and Floors'!$F16,1, 0) + IF(DC$1='Stars and Floors'!$G16,1, 0), 0)` |
| DD16 | `=IF('Stars and Floors'!$A16, IF(DD$1='Stars and Floors'!$C16,1, 0) + IF(DD$1='Stars and Floors'!$D16,1, 0) + IF(DD$1='Stars and Floors'!$E16,1, 0) + IF(DD$1='Stars and Floors'!$F16,1, 0) + IF(DD$1='Stars and Floors'!$G16,1, 0), 0)` |
| DE16 | `=IF('Stars and Floors'!$A16, IF(DE$1='Stars and Floors'!$C16,1, 0) + IF(DE$1='Stars and Floors'!$D16,1, 0) + IF(DE$1='Stars and Floors'!$E16,1, 0) + IF(DE$1='Stars and Floors'!$F16,1, 0) + IF(DE$1='Stars and Floors'!$G16,1, 0), 0)` |
| DF16 | `=IF('Stars and Floors'!$A16, IF(DF$1='Stars and Floors'!$C16,1, 0) + IF(DF$1='Stars and Floors'!$D16,1, 0) + IF(DF$1='Stars and Floors'!$E16,1, 0) + IF(DF$1='Stars and Floors'!$F16,1, 0) + IF(DF$1='Stars and Floors'!$G16,1, 0), 0)` |
| DG16 | `=IF('Stars and Floors'!$A16, IF(DG$1='Stars and Floors'!$C16,1, 0) + IF(DG$1='Stars and Floors'!$D16,1, 0) + IF(DG$1='Stars and Floors'!$E16,1, 0) + IF(DG$1='Stars and Floors'!$F16,1, 0) + IF(DG$1='Stars and Floors'!$G16,1, 0), 0)` |
| DH16 | `=IF('Stars and Floors'!$A16, IF(DH$1='Stars and Floors'!$C16,1, 0) + IF(DH$1='Stars and Floors'!$D16,1, 0) + IF(DH$1='Stars and Floors'!$E16,1, 0) + IF(DH$1='Stars and Floors'!$F16,1, 0) + IF(DH$1='Stars and Floors'!$G16,1, 0), 0)` |
| DI16 | `=IF('Stars and Floors'!$A16, IF(DI$1='Stars and Floors'!$C16,1, 0) + IF(DI$1='Stars and Floors'!$D16,1, 0) + IF(DI$1='Stars and Floors'!$E16,1, 0) + IF(DI$1='Stars and Floors'!$F16,1, 0) + IF(DI$1='Stars and Floors'!$G16,1, 0), 0)` |
| DJ16 | `=IF('Stars and Floors'!$A16, IF(DJ$1='Stars and Floors'!$C16,1, 0) + IF(DJ$1='Stars and Floors'!$D16,1, 0) + IF(DJ$1='Stars and Floors'!$E16,1, 0) + IF(DJ$1='Stars and Floors'!$F16,1, 0) + IF(DJ$1='Stars and Floors'!$G16,1, 0), 0)` |
| DK16 | `=IF('Stars and Floors'!$A16, IF(DK$1='Stars and Floors'!$C16,1, 0) + IF(DK$1='Stars and Floors'!$D16,1, 0) + IF(DK$1='Stars and Floors'!$E16,1, 0) + IF(DK$1='Stars and Floors'!$F16,1, 0) + IF(DK$1='Stars and Floors'!$G16,1, 0), 0)` |
| DL16 | `=IF('Stars and Floors'!$A16, IF(DL$1='Stars and Floors'!$C16,1, 0) + IF(DL$1='Stars and Floors'!$D16,1, 0) + IF(DL$1='Stars and Floors'!$E16,1, 0) + IF(DL$1='Stars and Floors'!$F16,1, 0) + IF(DL$1='Stars and Floors'!$G16,1, 0), 0)` |
| DM16 | `=IF('Stars and Floors'!$A16, IF(DM$1='Stars and Floors'!$C16,1, 0) + IF(DM$1='Stars and Floors'!$D16,1, 0) + IF(DM$1='Stars and Floors'!$E16,1, 0) + IF(DM$1='Stars and Floors'!$F16,1, 0) + IF(DM$1='Stars and Floors'!$G16,1, 0), 0)` |
| DN16 | `=IF('Stars and Floors'!$A16, IF(DN$1='Stars and Floors'!$C16,1, 0) + IF(DN$1='Stars and Floors'!$D16,1, 0) + IF(DN$1='Stars and Floors'!$E16,1, 0) + IF(DN$1='Stars and Floors'!$F16,1, 0) + IF(DN$1='Stars and Floors'!$G16,1, 0), 0)` |
| DO16 | `=IF('Stars and Floors'!$A16, IF(DO$1='Stars and Floors'!$C16,1, 0) + IF(DO$1='Stars and Floors'!$D16,1, 0) + IF(DO$1='Stars and Floors'!$E16,1, 0) + IF(DO$1='Stars and Floors'!$F16,1, 0) + IF(DO$1='Stars and Floors'!$G16,1, 0), 0)` |
| DP16 | `=IF('Stars and Floors'!$A16, IF(DP$1='Stars and Floors'!$C16,1, 0) + IF(DP$1='Stars and Floors'!$D16,1, 0) + IF(DP$1='Stars and Floors'!$E16,1, 0) + IF(DP$1='Stars and Floors'!$F16,1, 0) + IF(DP$1='Stars and Floors'!$G16,1, 0), 0)` |
| DQ16 | `=IF('Stars and Floors'!$A16, IF(DQ$1='Stars and Floors'!$C16,1, 0) + IF(DQ$1='Stars and Floors'!$D16,1, 0) + IF(DQ$1='Stars and Floors'!$E16,1, 0) + IF(DQ$1='Stars and Floors'!$F16,1, 0) + IF(DQ$1='Stars and Floors'!$G16,1, 0), 0)` |
| B17 | `=IF('Stars and Floors'!$A17, IF(B$1='Stars and Floors'!$C17,1, 0) + IF(B$1='Stars and Floors'!$D17,1, 0) + IF(B$1='Stars and Floors'!$E17,1, 0) + IF(B$1='Stars and Floors'!$F17,1, 0) + IF(B$1='Stars and Floors'!$G17,1, 0), 0)` |
| C17 | `=IF('Stars and Floors'!$A17, IF(C$1='Stars and Floors'!$C17,1, 0) + IF(C$1='Stars and Floors'!$D17,1, 0) + IF(C$1='Stars and Floors'!$E17,1, 0) + IF(C$1='Stars and Floors'!$F17,1, 0) + IF(C$1='Stars and Floors'!$G17,1, 0), 0)` |
| D17 | `=IF('Stars and Floors'!$A17, IF(D$1='Stars and Floors'!$C17,1, 0) + IF(D$1='Stars and Floors'!$D17,1, 0) + IF(D$1='Stars and Floors'!$E17,1, 0) + IF(D$1='Stars and Floors'!$F17,1, 0) + IF(D$1='Stars and Floors'!$G17,1, 0), 0)` |
| E17 | `=IF('Stars and Floors'!$A17, IF(E$1='Stars and Floors'!$C17,1, 0) + IF(E$1='Stars and Floors'!$D17,1, 0) + IF(E$1='Stars and Floors'!$E17,1, 0) + IF(E$1='Stars and Floors'!$F17,1, 0) + IF(E$1='Stars and Floors'!$G17,1, 0), 0)` |
| F17 | `=IF('Stars and Floors'!$A17, IF(F$1='Stars and Floors'!$C17,1, 0) + IF(F$1='Stars and Floors'!$D17,1, 0) + IF(F$1='Stars and Floors'!$E17,1, 0) + IF(F$1='Stars and Floors'!$F17,1, 0) + IF(F$1='Stars and Floors'!$G17,1, 0), 0)` |
| G17 | `=IF('Stars and Floors'!$A17, IF(G$1='Stars and Floors'!$C17,1, 0) + IF(G$1='Stars and Floors'!$D17,1, 0) + IF(G$1='Stars and Floors'!$E17,1, 0) + IF(G$1='Stars and Floors'!$F17,1, 0) + IF(G$1='Stars and Floors'!$G17,1, 0), 0)` |
| H17 | `=IF('Stars and Floors'!$A17, IF(H$1='Stars and Floors'!$C17,1, 0) + IF(H$1='Stars and Floors'!$D17,1, 0) + IF(H$1='Stars and Floors'!$E17,1, 0) + IF(H$1='Stars and Floors'!$F17,1, 0) + IF(H$1='Stars and Floors'!$G17,1, 0), 0)` |
| I17 | `=IF('Stars and Floors'!$A17, IF(I$1='Stars and Floors'!$C17,1, 0) + IF(I$1='Stars and Floors'!$D17,1, 0) + IF(I$1='Stars and Floors'!$E17,1, 0) + IF(I$1='Stars and Floors'!$F17,1, 0) + IF(I$1='Stars and Floors'!$G17,1, 0), 0)` |
| J17 | `=IF('Stars and Floors'!$A17, IF(J$1='Stars and Floors'!$C17,1, 0) + IF(J$1='Stars and Floors'!$D17,1, 0) + IF(J$1='Stars and Floors'!$E17,1, 0) + IF(J$1='Stars and Floors'!$F17,1, 0) + IF(J$1='Stars and Floors'!$G17,1, 0), 0)` |
| K17 | `=IF('Stars and Floors'!$A17, IF(K$1='Stars and Floors'!$C17,1, 0) + IF(K$1='Stars and Floors'!$D17,1, 0) + IF(K$1='Stars and Floors'!$E17,1, 0) + IF(K$1='Stars and Floors'!$F17,1, 0) + IF(K$1='Stars and Floors'!$G17,1, 0), 0)` |
| L17 | `=IF('Stars and Floors'!$A17, IF(L$1='Stars and Floors'!$C17,1, 0) + IF(L$1='Stars and Floors'!$D17,1, 0) + IF(L$1='Stars and Floors'!$E17,1, 0) + IF(L$1='Stars and Floors'!$F17,1, 0) + IF(L$1='Stars and Floors'!$G17,1, 0), 0)` |
| M17 | `=IF('Stars and Floors'!$A17, IF(M$1='Stars and Floors'!$C17,1, 0) + IF(M$1='Stars and Floors'!$D17,1, 0) + IF(M$1='Stars and Floors'!$E17,1, 0) + IF(M$1='Stars and Floors'!$F17,1, 0) + IF(M$1='Stars and Floors'!$G17,1, 0), 0)` |
| N17 | `=IF('Stars and Floors'!$A17, IF(N$1='Stars and Floors'!$C17,1, 0) + IF(N$1='Stars and Floors'!$D17,1, 0) + IF(N$1='Stars and Floors'!$E17,1, 0) + IF(N$1='Stars and Floors'!$F17,1, 0) + IF(N$1='Stars and Floors'!$G17,1, 0), 0)` |
| O17 | `=IF('Stars and Floors'!$A17, IF(O$1='Stars and Floors'!$C17,1, 0) + IF(O$1='Stars and Floors'!$D17,1, 0) + IF(O$1='Stars and Floors'!$E17,1, 0) + IF(O$1='Stars and Floors'!$F17,1, 0) + IF(O$1='Stars and Floors'!$G17,1, 0), 0)` |
| P17 | `=IF('Stars and Floors'!$A17, IF(P$1='Stars and Floors'!$C17,1, 0) + IF(P$1='Stars and Floors'!$D17,1, 0) + IF(P$1='Stars and Floors'!$E17,1, 0) + IF(P$1='Stars and Floors'!$F17,1, 0) + IF(P$1='Stars and Floors'!$G17,1, 0), 0)` |
| Q17 | `=IF('Stars and Floors'!$A17, IF(Q$1='Stars and Floors'!$C17,1, 0) + IF(Q$1='Stars and Floors'!$D17,1, 0) + IF(Q$1='Stars and Floors'!$E17,1, 0) + IF(Q$1='Stars and Floors'!$F17,1, 0) + IF(Q$1='Stars and Floors'!$G17,1, 0), 0)` |
| R17 | `=IF('Stars and Floors'!$A17, IF(R$1='Stars and Floors'!$C17,1, 0) + IF(R$1='Stars and Floors'!$D17,1, 0) + IF(R$1='Stars and Floors'!$E17,1, 0) + IF(R$1='Stars and Floors'!$F17,1, 0) + IF(R$1='Stars and Floors'!$G17,1, 0), 0)` |
| S17 | `=IF('Stars and Floors'!$A17, IF(S$1='Stars and Floors'!$C17,1, 0) + IF(S$1='Stars and Floors'!$D17,1, 0) + IF(S$1='Stars and Floors'!$E17,1, 0) + IF(S$1='Stars and Floors'!$F17,1, 0) + IF(S$1='Stars and Floors'!$G17,1, 0), 0)` |
| T17 | `=IF('Stars and Floors'!$A17, IF(T$1='Stars and Floors'!$C17,1, 0) + IF(T$1='Stars and Floors'!$D17,1, 0) + IF(T$1='Stars and Floors'!$E17,1, 0) + IF(T$1='Stars and Floors'!$F17,1, 0) + IF(T$1='Stars and Floors'!$G17,1, 0), 0)` |
| U17 | `=IF('Stars and Floors'!$A17, IF(U$1='Stars and Floors'!$C17,1, 0) + IF(U$1='Stars and Floors'!$D17,1, 0) + IF(U$1='Stars and Floors'!$E17,1, 0) + IF(U$1='Stars and Floors'!$F17,1, 0) + IF(U$1='Stars and Floors'!$G17,1, 0), 0)` |
| V17 | `=IF('Stars and Floors'!$A17, IF(V$1='Stars and Floors'!$C17,1, 0) + IF(V$1='Stars and Floors'!$D17,1, 0) + IF(V$1='Stars and Floors'!$E17,1, 0) + IF(V$1='Stars and Floors'!$F17,1, 0) + IF(V$1='Stars and Floors'!$G17,1, 0), 0)` |
| W17 | `=IF('Stars and Floors'!$A17, IF(W$1='Stars and Floors'!$C17,1, 0) + IF(W$1='Stars and Floors'!$D17,1, 0) + IF(W$1='Stars and Floors'!$E17,1, 0) + IF(W$1='Stars and Floors'!$F17,1, 0) + IF(W$1='Stars and Floors'!$G17,1, 0), 0)` |
| X17 | `=IF('Stars and Floors'!$A17, IF(X$1='Stars and Floors'!$C17,1, 0) + IF(X$1='Stars and Floors'!$D17,1, 0) + IF(X$1='Stars and Floors'!$E17,1, 0) + IF(X$1='Stars and Floors'!$F17,1, 0) + IF(X$1='Stars and Floors'!$G17,1, 0), 0)` |
| Y17 | `=IF('Stars and Floors'!$A17, IF(Y$1='Stars and Floors'!$C17,1, 0) + IF(Y$1='Stars and Floors'!$D17,1, 0) + IF(Y$1='Stars and Floors'!$E17,1, 0) + IF(Y$1='Stars and Floors'!$F17,1, 0) + IF(Y$1='Stars and Floors'!$G17,1, 0), 0)` |
| Z17 | `=IF('Stars and Floors'!$A17, IF(Z$1='Stars and Floors'!$C17,1, 0) + IF(Z$1='Stars and Floors'!$D17,1, 0) + IF(Z$1='Stars and Floors'!$E17,1, 0) + IF(Z$1='Stars and Floors'!$F17,1, 0) + IF(Z$1='Stars and Floors'!$G17,1, 0), 0)` |
| AA17 | `=IF('Stars and Floors'!$A17, IF(AA$1='Stars and Floors'!$C17,1, 0) + IF(AA$1='Stars and Floors'!$D17,1, 0) + IF(AA$1='Stars and Floors'!$E17,1, 0) + IF(AA$1='Stars and Floors'!$F17,1, 0) + IF(AA$1='Stars and Floors'!$G17,1, 0), 0)` |
| AB17 | `=IF('Stars and Floors'!$A17, IF(AB$1='Stars and Floors'!$C17,1, 0) + IF(AB$1='Stars and Floors'!$D17,1, 0) + IF(AB$1='Stars and Floors'!$E17,1, 0) + IF(AB$1='Stars and Floors'!$F17,1, 0) + IF(AB$1='Stars and Floors'!$G17,1, 0), 0)` |
| AC17 | `=IF('Stars and Floors'!$A17, IF(AC$1='Stars and Floors'!$C17,1, 0) + IF(AC$1='Stars and Floors'!$D17,1, 0) + IF(AC$1='Stars and Floors'!$E17,1, 0) + IF(AC$1='Stars and Floors'!$F17,1, 0) + IF(AC$1='Stars and Floors'!$G17,1, 0), 0)` |
| AD17 | `=IF('Stars and Floors'!$A17, IF(AD$1='Stars and Floors'!$C17,1, 0) + IF(AD$1='Stars and Floors'!$D17,1, 0) + IF(AD$1='Stars and Floors'!$E17,1, 0) + IF(AD$1='Stars and Floors'!$F17,1, 0) + IF(AD$1='Stars and Floors'!$G17,1, 0), 0)` |
| AE17 | `=IF('Stars and Floors'!$A17, IF(AE$1='Stars and Floors'!$C17,1, 0) + IF(AE$1='Stars and Floors'!$D17,1, 0) + IF(AE$1='Stars and Floors'!$E17,1, 0) + IF(AE$1='Stars and Floors'!$F17,1, 0) + IF(AE$1='Stars and Floors'!$G17,1, 0), 0)` |
| AF17 | `=IF('Stars and Floors'!$A17, IF(AF$1='Stars and Floors'!$C17,1, 0) + IF(AF$1='Stars and Floors'!$D17,1, 0) + IF(AF$1='Stars and Floors'!$E17,1, 0) + IF(AF$1='Stars and Floors'!$F17,1, 0) + IF(AF$1='Stars and Floors'!$G17,1, 0), 0)` |
| AG17 | `=IF('Stars and Floors'!$A17, IF(AG$1='Stars and Floors'!$C17,1, 0) + IF(AG$1='Stars and Floors'!$D17,1, 0) + IF(AG$1='Stars and Floors'!$E17,1, 0) + IF(AG$1='Stars and Floors'!$F17,1, 0) + IF(AG$1='Stars and Floors'!$G17,1, 0), 0)` |
| AH17 | `=IF('Stars and Floors'!$A17, IF(AH$1='Stars and Floors'!$C17,1, 0) + IF(AH$1='Stars and Floors'!$D17,1, 0) + IF(AH$1='Stars and Floors'!$E17,1, 0) + IF(AH$1='Stars and Floors'!$F17,1, 0) + IF(AH$1='Stars and Floors'!$G17,1, 0), 0)` |
| AI17 | `=IF('Stars and Floors'!$A17, IF(AI$1='Stars and Floors'!$C17,1, 0) + IF(AI$1='Stars and Floors'!$D17,1, 0) + IF(AI$1='Stars and Floors'!$E17,1, 0) + IF(AI$1='Stars and Floors'!$F17,1, 0) + IF(AI$1='Stars and Floors'!$G17,1, 0), 0)` |
| AJ17 | `=IF('Stars and Floors'!$A17, IF(AJ$1='Stars and Floors'!$C17,1, 0) + IF(AJ$1='Stars and Floors'!$D17,1, 0) + IF(AJ$1='Stars and Floors'!$E17,1, 0) + IF(AJ$1='Stars and Floors'!$F17,1, 0) + IF(AJ$1='Stars and Floors'!$G17,1, 0), 0)` |
| AK17 | `=IF('Stars and Floors'!$A17, IF(AK$1='Stars and Floors'!$C17,1, 0) + IF(AK$1='Stars and Floors'!$D17,1, 0) + IF(AK$1='Stars and Floors'!$E17,1, 0) + IF(AK$1='Stars and Floors'!$F17,1, 0) + IF(AK$1='Stars and Floors'!$G17,1, 0), 0)` |
| AL17 | `=IF('Stars and Floors'!$A17, IF(AL$1='Stars and Floors'!$C17,1, 0) + IF(AL$1='Stars and Floors'!$D17,1, 0) + IF(AL$1='Stars and Floors'!$E17,1, 0) + IF(AL$1='Stars and Floors'!$F17,1, 0) + IF(AL$1='Stars and Floors'!$G17,1, 0), 0)` |
| AM17 | `=IF('Stars and Floors'!$A17, IF(AM$1='Stars and Floors'!$C17,1, 0) + IF(AM$1='Stars and Floors'!$D17,1, 0) + IF(AM$1='Stars and Floors'!$E17,1, 0) + IF(AM$1='Stars and Floors'!$F17,1, 0) + IF(AM$1='Stars and Floors'!$G17,1, 0), 0)` |
| AN17 | `=IF('Stars and Floors'!$A17, IF(AN$1='Stars and Floors'!$C17,1, 0) + IF(AN$1='Stars and Floors'!$D17,1, 0) + IF(AN$1='Stars and Floors'!$E17,1, 0) + IF(AN$1='Stars and Floors'!$F17,1, 0) + IF(AN$1='Stars and Floors'!$G17,1, 0), 0)` |
| AO17 | `=IF('Stars and Floors'!$A17, IF(AO$1='Stars and Floors'!$C17,1, 0) + IF(AO$1='Stars and Floors'!$D17,1, 0) + IF(AO$1='Stars and Floors'!$E17,1, 0) + IF(AO$1='Stars and Floors'!$F17,1, 0) + IF(AO$1='Stars and Floors'!$G17,1, 0), 0)` |
| AP17 | `=IF('Stars and Floors'!$A17, IF(AP$1='Stars and Floors'!$C17,1, 0) + IF(AP$1='Stars and Floors'!$D17,1, 0) + IF(AP$1='Stars and Floors'!$E17,1, 0) + IF(AP$1='Stars and Floors'!$F17,1, 0) + IF(AP$1='Stars and Floors'!$G17,1, 0), 0)` |
| AQ17 | `=IF('Stars and Floors'!$A17, IF(AQ$1='Stars and Floors'!$C17,1, 0) + IF(AQ$1='Stars and Floors'!$D17,1, 0) + IF(AQ$1='Stars and Floors'!$E17,1, 0) + IF(AQ$1='Stars and Floors'!$F17,1, 0) + IF(AQ$1='Stars and Floors'!$G17,1, 0), 0)` |
| AR17 | `=IF('Stars and Floors'!$A17, IF(AR$1='Stars and Floors'!$C17,1, 0) + IF(AR$1='Stars and Floors'!$D17,1, 0) + IF(AR$1='Stars and Floors'!$E17,1, 0) + IF(AR$1='Stars and Floors'!$F17,1, 0) + IF(AR$1='Stars and Floors'!$G17,1, 0), 0)` |
| AS17 | `=IF('Stars and Floors'!$A17, IF(AS$1='Stars and Floors'!$C17,1, 0) + IF(AS$1='Stars and Floors'!$D17,1, 0) + IF(AS$1='Stars and Floors'!$E17,1, 0) + IF(AS$1='Stars and Floors'!$F17,1, 0) + IF(AS$1='Stars and Floors'!$G17,1, 0), 0)` |
| AT17 | `=IF('Stars and Floors'!$A17, IF(AT$1='Stars and Floors'!$C17,1, 0) + IF(AT$1='Stars and Floors'!$D17,1, 0) + IF(AT$1='Stars and Floors'!$E17,1, 0) + IF(AT$1='Stars and Floors'!$F17,1, 0) + IF(AT$1='Stars and Floors'!$G17,1, 0), 0)` |
| AU17 | `=IF('Stars and Floors'!$A17, IF(AU$1='Stars and Floors'!$C17,1, 0) + IF(AU$1='Stars and Floors'!$D17,1, 0) + IF(AU$1='Stars and Floors'!$E17,1, 0) + IF(AU$1='Stars and Floors'!$F17,1, 0) + IF(AU$1='Stars and Floors'!$G17,1, 0), 0)` |
| AV17 | `=IF('Stars and Floors'!$A17, IF(AV$1='Stars and Floors'!$C17,1, 0) + IF(AV$1='Stars and Floors'!$D17,1, 0) + IF(AV$1='Stars and Floors'!$E17,1, 0) + IF(AV$1='Stars and Floors'!$F17,1, 0) + IF(AV$1='Stars and Floors'!$G17,1, 0), 0)` |
| AW17 | `=IF('Stars and Floors'!$A17, IF(AW$1='Stars and Floors'!$C17,1, 0) + IF(AW$1='Stars and Floors'!$D17,1, 0) + IF(AW$1='Stars and Floors'!$E17,1, 0) + IF(AW$1='Stars and Floors'!$F17,1, 0) + IF(AW$1='Stars and Floors'!$G17,1, 0), 0)` |
| AX17 | `=IF('Stars and Floors'!$A17, IF(AX$1='Stars and Floors'!$C17,1, 0) + IF(AX$1='Stars and Floors'!$D17,1, 0) + IF(AX$1='Stars and Floors'!$E17,1, 0) + IF(AX$1='Stars and Floors'!$F17,1, 0) + IF(AX$1='Stars and Floors'!$G17,1, 0), 0)` |
| AY17 | `=IF('Stars and Floors'!$A17, IF(AY$1='Stars and Floors'!$C17,1, 0) + IF(AY$1='Stars and Floors'!$D17,1, 0) + IF(AY$1='Stars and Floors'!$E17,1, 0) + IF(AY$1='Stars and Floors'!$F17,1, 0) + IF(AY$1='Stars and Floors'!$G17,1, 0), 0)` |
| AZ17 | `=IF('Stars and Floors'!$A17, IF(AZ$1='Stars and Floors'!$C17,1, 0) + IF(AZ$1='Stars and Floors'!$D17,1, 0) + IF(AZ$1='Stars and Floors'!$E17,1, 0) + IF(AZ$1='Stars and Floors'!$F17,1, 0) + IF(AZ$1='Stars and Floors'!$G17,1, 0), 0)` |
| BA17 | `=IF('Stars and Floors'!$A17, IF(BA$1='Stars and Floors'!$C17,1, 0) + IF(BA$1='Stars and Floors'!$D17,1, 0) + IF(BA$1='Stars and Floors'!$E17,1, 0) + IF(BA$1='Stars and Floors'!$F17,1, 0) + IF(BA$1='Stars and Floors'!$G17,1, 0), 0)` |
| BB17 | `=IF('Stars and Floors'!$A17, IF(BB$1='Stars and Floors'!$C17,1, 0) + IF(BB$1='Stars and Floors'!$D17,1, 0) + IF(BB$1='Stars and Floors'!$E17,1, 0) + IF(BB$1='Stars and Floors'!$F17,1, 0) + IF(BB$1='Stars and Floors'!$G17,1, 0), 0)` |
| BC17 | `=IF('Stars and Floors'!$A17, IF(BC$1='Stars and Floors'!$C17,1, 0) + IF(BC$1='Stars and Floors'!$D17,1, 0) + IF(BC$1='Stars and Floors'!$E17,1, 0) + IF(BC$1='Stars and Floors'!$F17,1, 0) + IF(BC$1='Stars and Floors'!$G17,1, 0), 0)` |
| BD17 | `=IF('Stars and Floors'!$A17, IF(BD$1='Stars and Floors'!$C17,1, 0) + IF(BD$1='Stars and Floors'!$D17,1, 0) + IF(BD$1='Stars and Floors'!$E17,1, 0) + IF(BD$1='Stars and Floors'!$F17,1, 0) + IF(BD$1='Stars and Floors'!$G17,1, 0), 0)` |
| BE17 | `=IF('Stars and Floors'!$A17, IF(BE$1='Stars and Floors'!$C17,1, 0) + IF(BE$1='Stars and Floors'!$D17,1, 0) + IF(BE$1='Stars and Floors'!$E17,1, 0) + IF(BE$1='Stars and Floors'!$F17,1, 0) + IF(BE$1='Stars and Floors'!$G17,1, 0), 0)` |
| BF17 | `=IF('Stars and Floors'!$A17, IF(BF$1='Stars and Floors'!$C17,1, 0) + IF(BF$1='Stars and Floors'!$D17,1, 0) + IF(BF$1='Stars and Floors'!$E17,1, 0) + IF(BF$1='Stars and Floors'!$F17,1, 0) + IF(BF$1='Stars and Floors'!$G17,1, 0), 0)` |
| BG17 | `=IF('Stars and Floors'!$A17, IF(BG$1='Stars and Floors'!$C17,1, 0) + IF(BG$1='Stars and Floors'!$D17,1, 0) + IF(BG$1='Stars and Floors'!$E17,1, 0) + IF(BG$1='Stars and Floors'!$F17,1, 0) + IF(BG$1='Stars and Floors'!$G17,1, 0), 0)` |
| BH17 | `=IF('Stars and Floors'!$A17, IF(BH$1='Stars and Floors'!$C17,1, 0) + IF(BH$1='Stars and Floors'!$D17,1, 0) + IF(BH$1='Stars and Floors'!$E17,1, 0) + IF(BH$1='Stars and Floors'!$F17,1, 0) + IF(BH$1='Stars and Floors'!$G17,1, 0), 0)` |
| BI17 | `=IF('Stars and Floors'!$A17, IF(BI$1='Stars and Floors'!$C17,1, 0) + IF(BI$1='Stars and Floors'!$D17,1, 0) + IF(BI$1='Stars and Floors'!$E17,1, 0) + IF(BI$1='Stars and Floors'!$F17,1, 0) + IF(BI$1='Stars and Floors'!$G17,1, 0), 0)` |
| BJ17 | `=IF('Stars and Floors'!$A17, IF(BJ$1='Stars and Floors'!$C17,1, 0) + IF(BJ$1='Stars and Floors'!$D17,1, 0) + IF(BJ$1='Stars and Floors'!$E17,1, 0) + IF(BJ$1='Stars and Floors'!$F17,1, 0) + IF(BJ$1='Stars and Floors'!$G17,1, 0), 0)` |
| BK17 | `=IF('Stars and Floors'!$A17, IF(BK$1='Stars and Floors'!$C17,1, 0) + IF(BK$1='Stars and Floors'!$D17,1, 0) + IF(BK$1='Stars and Floors'!$E17,1, 0) + IF(BK$1='Stars and Floors'!$F17,1, 0) + IF(BK$1='Stars and Floors'!$G17,1, 0), 0)` |
| BL17 | `=IF('Stars and Floors'!$A17, IF(BL$1='Stars and Floors'!$C17,1, 0) + IF(BL$1='Stars and Floors'!$D17,1, 0) + IF(BL$1='Stars and Floors'!$E17,1, 0) + IF(BL$1='Stars and Floors'!$F17,1, 0) + IF(BL$1='Stars and Floors'!$G17,1, 0), 0)` |
| BM17 | `=IF('Stars and Floors'!$A17, IF(BM$1='Stars and Floors'!$C17,1, 0) + IF(BM$1='Stars and Floors'!$D17,1, 0) + IF(BM$1='Stars and Floors'!$E17,1, 0) + IF(BM$1='Stars and Floors'!$F17,1, 0) + IF(BM$1='Stars and Floors'!$G17,1, 0), 0)` |
| BN17 | `=IF('Stars and Floors'!$A17, IF(BN$1='Stars and Floors'!$C17,1, 0) + IF(BN$1='Stars and Floors'!$D17,1, 0) + IF(BN$1='Stars and Floors'!$E17,1, 0) + IF(BN$1='Stars and Floors'!$F17,1, 0) + IF(BN$1='Stars and Floors'!$G17,1, 0), 0)` |
| BO17 | `=IF('Stars and Floors'!$A17, IF(BO$1='Stars and Floors'!$C17,1, 0) + IF(BO$1='Stars and Floors'!$D17,1, 0) + IF(BO$1='Stars and Floors'!$E17,1, 0) + IF(BO$1='Stars and Floors'!$F17,1, 0) + IF(BO$1='Stars and Floors'!$G17,1, 0), 0)` |
| BP17 | `=IF('Stars and Floors'!$A17, IF(BP$1='Stars and Floors'!$C17,1, 0) + IF(BP$1='Stars and Floors'!$D17,1, 0) + IF(BP$1='Stars and Floors'!$E17,1, 0) + IF(BP$1='Stars and Floors'!$F17,1, 0) + IF(BP$1='Stars and Floors'!$G17,1, 0), 0)` |
| BQ17 | `=IF('Stars and Floors'!$A17, IF(BQ$1='Stars and Floors'!$C17,1, 0) + IF(BQ$1='Stars and Floors'!$D17,1, 0) + IF(BQ$1='Stars and Floors'!$E17,1, 0) + IF(BQ$1='Stars and Floors'!$F17,1, 0) + IF(BQ$1='Stars and Floors'!$G17,1, 0), 0)` |
| BR17 | `=IF('Stars and Floors'!$A17, IF(BR$1='Stars and Floors'!$C17,1, 0) + IF(BR$1='Stars and Floors'!$D17,1, 0) + IF(BR$1='Stars and Floors'!$E17,1, 0) + IF(BR$1='Stars and Floors'!$F17,1, 0) + IF(BR$1='Stars and Floors'!$G17,1, 0), 0)` |
| BS17 | `=IF('Stars and Floors'!$A17, IF(BS$1='Stars and Floors'!$C17,1, 0) + IF(BS$1='Stars and Floors'!$D17,1, 0) + IF(BS$1='Stars and Floors'!$E17,1, 0) + IF(BS$1='Stars and Floors'!$F17,1, 0) + IF(BS$1='Stars and Floors'!$G17,1, 0), 0)` |
| BT17 | `=IF('Stars and Floors'!$A17, IF(BT$1='Stars and Floors'!$C17,1, 0) + IF(BT$1='Stars and Floors'!$D17,1, 0) + IF(BT$1='Stars and Floors'!$E17,1, 0) + IF(BT$1='Stars and Floors'!$F17,1, 0) + IF(BT$1='Stars and Floors'!$G17,1, 0), 0)` |
| BU17 | `=IF('Stars and Floors'!$A17, IF(BU$1='Stars and Floors'!$C17,1, 0) + IF(BU$1='Stars and Floors'!$D17,1, 0) + IF(BU$1='Stars and Floors'!$E17,1, 0) + IF(BU$1='Stars and Floors'!$F17,1, 0) + IF(BU$1='Stars and Floors'!$G17,1, 0), 0)` |
| BV17 | `=IF('Stars and Floors'!$A17, IF(BV$1='Stars and Floors'!$C17,1, 0) + IF(BV$1='Stars and Floors'!$D17,1, 0) + IF(BV$1='Stars and Floors'!$E17,1, 0) + IF(BV$1='Stars and Floors'!$F17,1, 0) + IF(BV$1='Stars and Floors'!$G17,1, 0), 0)` |
| BW17 | `=IF('Stars and Floors'!$A17, IF(BW$1='Stars and Floors'!$C17,1, 0) + IF(BW$1='Stars and Floors'!$D17,1, 0) + IF(BW$1='Stars and Floors'!$E17,1, 0) + IF(BW$1='Stars and Floors'!$F17,1, 0) + IF(BW$1='Stars and Floors'!$G17,1, 0), 0)` |
| BX17 | `=IF('Stars and Floors'!$A17, IF(BX$1='Stars and Floors'!$C17,1, 0) + IF(BX$1='Stars and Floors'!$D17,1, 0) + IF(BX$1='Stars and Floors'!$E17,1, 0) + IF(BX$1='Stars and Floors'!$F17,1, 0) + IF(BX$1='Stars and Floors'!$G17,1, 0), 0)` |
| BY17 | `=IF('Stars and Floors'!$A17, IF(BY$1='Stars and Floors'!$C17,1, 0) + IF(BY$1='Stars and Floors'!$D17,1, 0) + IF(BY$1='Stars and Floors'!$E17,1, 0) + IF(BY$1='Stars and Floors'!$F17,1, 0) + IF(BY$1='Stars and Floors'!$G17,1, 0), 0)` |
| BZ17 | `=IF('Stars and Floors'!$A17, IF(BZ$1='Stars and Floors'!$C17,1, 0) + IF(BZ$1='Stars and Floors'!$D17,1, 0) + IF(BZ$1='Stars and Floors'!$E17,1, 0) + IF(BZ$1='Stars and Floors'!$F17,1, 0) + IF(BZ$1='Stars and Floors'!$G17,1, 0), 0)` |
| CA17 | `=IF('Stars and Floors'!$A17, IF(CA$1='Stars and Floors'!$C17,1, 0) + IF(CA$1='Stars and Floors'!$D17,1, 0) + IF(CA$1='Stars and Floors'!$E17,1, 0) + IF(CA$1='Stars and Floors'!$F17,1, 0) + IF(CA$1='Stars and Floors'!$G17,1, 0), 0)` |
| CB17 | `=IF('Stars and Floors'!$A17, IF(CB$1='Stars and Floors'!$C17,1, 0) + IF(CB$1='Stars and Floors'!$D17,1, 0) + IF(CB$1='Stars and Floors'!$E17,1, 0) + IF(CB$1='Stars and Floors'!$F17,1, 0) + IF(CB$1='Stars and Floors'!$G17,1, 0), 0)` |
| CC17 | `=IF('Stars and Floors'!$A17, IF(CC$1='Stars and Floors'!$C17,1, 0) + IF(CC$1='Stars and Floors'!$D17,1, 0) + IF(CC$1='Stars and Floors'!$E17,1, 0) + IF(CC$1='Stars and Floors'!$F17,1, 0) + IF(CC$1='Stars and Floors'!$G17,1, 0), 0)` |
| CD17 | `=IF('Stars and Floors'!$A17, IF(CD$1='Stars and Floors'!$C17,1, 0) + IF(CD$1='Stars and Floors'!$D17,1, 0) + IF(CD$1='Stars and Floors'!$E17,1, 0) + IF(CD$1='Stars and Floors'!$F17,1, 0) + IF(CD$1='Stars and Floors'!$G17,1, 0), 0)` |
| CE17 | `=IF('Stars and Floors'!$A17, IF(CE$1='Stars and Floors'!$C17,1, 0) + IF(CE$1='Stars and Floors'!$D17,1, 0) + IF(CE$1='Stars and Floors'!$E17,1, 0) + IF(CE$1='Stars and Floors'!$F17,1, 0) + IF(CE$1='Stars and Floors'!$G17,1, 0), 0)` |
| CF17 | `=IF('Stars and Floors'!$A17, IF(CF$1='Stars and Floors'!$C17,1, 0) + IF(CF$1='Stars and Floors'!$D17,1, 0) + IF(CF$1='Stars and Floors'!$E17,1, 0) + IF(CF$1='Stars and Floors'!$F17,1, 0) + IF(CF$1='Stars and Floors'!$G17,1, 0), 0)` |
| CG17 | `=IF('Stars and Floors'!$A17, IF(CG$1='Stars and Floors'!$C17,1, 0) + IF(CG$1='Stars and Floors'!$D17,1, 0) + IF(CG$1='Stars and Floors'!$E17,1, 0) + IF(CG$1='Stars and Floors'!$F17,1, 0) + IF(CG$1='Stars and Floors'!$G17,1, 0), 0)` |
| CH17 | `=IF('Stars and Floors'!$A17, IF(CH$1='Stars and Floors'!$C17,1, 0) + IF(CH$1='Stars and Floors'!$D17,1, 0) + IF(CH$1='Stars and Floors'!$E17,1, 0) + IF(CH$1='Stars and Floors'!$F17,1, 0) + IF(CH$1='Stars and Floors'!$G17,1, 0), 0)` |
| CI17 | `=IF('Stars and Floors'!$A17, IF(CI$1='Stars and Floors'!$C17,1, 0) + IF(CI$1='Stars and Floors'!$D17,1, 0) + IF(CI$1='Stars and Floors'!$E17,1, 0) + IF(CI$1='Stars and Floors'!$F17,1, 0) + IF(CI$1='Stars and Floors'!$G17,1, 0), 0)` |
| CJ17 | `=IF('Stars and Floors'!$A17, IF(CJ$1='Stars and Floors'!$C17,1, 0) + IF(CJ$1='Stars and Floors'!$D17,1, 0) + IF(CJ$1='Stars and Floors'!$E17,1, 0) + IF(CJ$1='Stars and Floors'!$F17,1, 0) + IF(CJ$1='Stars and Floors'!$G17,1, 0), 0)` |
| CK17 | `=IF('Stars and Floors'!$A17, IF(CK$1='Stars and Floors'!$C17,1, 0) + IF(CK$1='Stars and Floors'!$D17,1, 0) + IF(CK$1='Stars and Floors'!$E17,1, 0) + IF(CK$1='Stars and Floors'!$F17,1, 0) + IF(CK$1='Stars and Floors'!$G17,1, 0), 0)` |
| CL17 | `=IF('Stars and Floors'!$A17, IF(CL$1='Stars and Floors'!$C17,1, 0) + IF(CL$1='Stars and Floors'!$D17,1, 0) + IF(CL$1='Stars and Floors'!$E17,1, 0) + IF(CL$1='Stars and Floors'!$F17,1, 0) + IF(CL$1='Stars and Floors'!$G17,1, 0), 0)` |
| CM17 | `=IF('Stars and Floors'!$A17, IF(CM$1='Stars and Floors'!$C17,1, 0) + IF(CM$1='Stars and Floors'!$D17,1, 0) + IF(CM$1='Stars and Floors'!$E17,1, 0) + IF(CM$1='Stars and Floors'!$F17,1, 0) + IF(CM$1='Stars and Floors'!$G17,1, 0), 0)` |
| CN17 | `=IF('Stars and Floors'!$A17, IF(CN$1='Stars and Floors'!$C17,1, 0) + IF(CN$1='Stars and Floors'!$D17,1, 0) + IF(CN$1='Stars and Floors'!$E17,1, 0) + IF(CN$1='Stars and Floors'!$F17,1, 0) + IF(CN$1='Stars and Floors'!$G17,1, 0), 0)` |
| CO17 | `=IF('Stars and Floors'!$A17, IF(CO$1='Stars and Floors'!$C17,1, 0) + IF(CO$1='Stars and Floors'!$D17,1, 0) + IF(CO$1='Stars and Floors'!$E17,1, 0) + IF(CO$1='Stars and Floors'!$F17,1, 0) + IF(CO$1='Stars and Floors'!$G17,1, 0), 0)` |
| CP17 | `=IF('Stars and Floors'!$A17, IF(CP$1='Stars and Floors'!$C17,1, 0) + IF(CP$1='Stars and Floors'!$D17,1, 0) + IF(CP$1='Stars and Floors'!$E17,1, 0) + IF(CP$1='Stars and Floors'!$F17,1, 0) + IF(CP$1='Stars and Floors'!$G17,1, 0), 0)` |
| CQ17 | `=IF('Stars and Floors'!$A17, IF(CQ$1='Stars and Floors'!$C17,1, 0) + IF(CQ$1='Stars and Floors'!$D17,1, 0) + IF(CQ$1='Stars and Floors'!$E17,1, 0) + IF(CQ$1='Stars and Floors'!$F17,1, 0) + IF(CQ$1='Stars and Floors'!$G17,1, 0), 0)` |
| CR17 | `=IF('Stars and Floors'!$A17, IF(CR$1='Stars and Floors'!$C17,1, 0) + IF(CR$1='Stars and Floors'!$D17,1, 0) + IF(CR$1='Stars and Floors'!$E17,1, 0) + IF(CR$1='Stars and Floors'!$F17,1, 0) + IF(CR$1='Stars and Floors'!$G17,1, 0), 0)` |
| CS17 | `=IF('Stars and Floors'!$A17, IF(CS$1='Stars and Floors'!$C17,1, 0) + IF(CS$1='Stars and Floors'!$D17,1, 0) + IF(CS$1='Stars and Floors'!$E17,1, 0) + IF(CS$1='Stars and Floors'!$F17,1, 0) + IF(CS$1='Stars and Floors'!$G17,1, 0), 0)` |
| CT17 | `=IF('Stars and Floors'!$A17, IF(CT$1='Stars and Floors'!$C17,1, 0) + IF(CT$1='Stars and Floors'!$D17,1, 0) + IF(CT$1='Stars and Floors'!$E17,1, 0) + IF(CT$1='Stars and Floors'!$F17,1, 0) + IF(CT$1='Stars and Floors'!$G17,1, 0), 0)` |
| CU17 | `=IF('Stars and Floors'!$A17, IF(CU$1='Stars and Floors'!$C17,1, 0) + IF(CU$1='Stars and Floors'!$D17,1, 0) + IF(CU$1='Stars and Floors'!$E17,1, 0) + IF(CU$1='Stars and Floors'!$F17,1, 0) + IF(CU$1='Stars and Floors'!$G17,1, 0), 0)` |
| CV17 | `=IF('Stars and Floors'!$A17, IF(CV$1='Stars and Floors'!$C17,1, 0) + IF(CV$1='Stars and Floors'!$D17,1, 0) + IF(CV$1='Stars and Floors'!$E17,1, 0) + IF(CV$1='Stars and Floors'!$F17,1, 0) + IF(CV$1='Stars and Floors'!$G17,1, 0), 0)` |
| CW17 | `=IF('Stars and Floors'!$A17, IF(CW$1='Stars and Floors'!$C17,1, 0) + IF(CW$1='Stars and Floors'!$D17,1, 0) + IF(CW$1='Stars and Floors'!$E17,1, 0) + IF(CW$1='Stars and Floors'!$F17,1, 0) + IF(CW$1='Stars and Floors'!$G17,1, 0), 0)` |
| CX17 | `=IF('Stars and Floors'!$A17, IF(CX$1='Stars and Floors'!$C17,1, 0) + IF(CX$1='Stars and Floors'!$D17,1, 0) + IF(CX$1='Stars and Floors'!$E17,1, 0) + IF(CX$1='Stars and Floors'!$F17,1, 0) + IF(CX$1='Stars and Floors'!$G17,1, 0), 0)` |
| CY17 | `=IF('Stars and Floors'!$A17, IF(CY$1='Stars and Floors'!$C17,1, 0) + IF(CY$1='Stars and Floors'!$D17,1, 0) + IF(CY$1='Stars and Floors'!$E17,1, 0) + IF(CY$1='Stars and Floors'!$F17,1, 0) + IF(CY$1='Stars and Floors'!$G17,1, 0), 0)` |
| CZ17 | `=IF('Stars and Floors'!$A17, IF(CZ$1='Stars and Floors'!$C17,1, 0) + IF(CZ$1='Stars and Floors'!$D17,1, 0) + IF(CZ$1='Stars and Floors'!$E17,1, 0) + IF(CZ$1='Stars and Floors'!$F17,1, 0) + IF(CZ$1='Stars and Floors'!$G17,1, 0), 0)` |
| DA17 | `=IF('Stars and Floors'!$A17, IF(DA$1='Stars and Floors'!$C17,1, 0) + IF(DA$1='Stars and Floors'!$D17,1, 0) + IF(DA$1='Stars and Floors'!$E17,1, 0) + IF(DA$1='Stars and Floors'!$F17,1, 0) + IF(DA$1='Stars and Floors'!$G17,1, 0), 0)` |
| DB17 | `=IF('Stars and Floors'!$A17, IF(DB$1='Stars and Floors'!$C17,1, 0) + IF(DB$1='Stars and Floors'!$D17,1, 0) + IF(DB$1='Stars and Floors'!$E17,1, 0) + IF(DB$1='Stars and Floors'!$F17,1, 0) + IF(DB$1='Stars and Floors'!$G17,1, 0), 0)` |
| DC17 | `=IF('Stars and Floors'!$A17, IF(DC$1='Stars and Floors'!$C17,1, 0) + IF(DC$1='Stars and Floors'!$D17,1, 0) + IF(DC$1='Stars and Floors'!$E17,1, 0) + IF(DC$1='Stars and Floors'!$F17,1, 0) + IF(DC$1='Stars and Floors'!$G17,1, 0), 0)` |
| DD17 | `=IF('Stars and Floors'!$A17, IF(DD$1='Stars and Floors'!$C17,1, 0) + IF(DD$1='Stars and Floors'!$D17,1, 0) + IF(DD$1='Stars and Floors'!$E17,1, 0) + IF(DD$1='Stars and Floors'!$F17,1, 0) + IF(DD$1='Stars and Floors'!$G17,1, 0), 0)` |
| DE17 | `=IF('Stars and Floors'!$A17, IF(DE$1='Stars and Floors'!$C17,1, 0) + IF(DE$1='Stars and Floors'!$D17,1, 0) + IF(DE$1='Stars and Floors'!$E17,1, 0) + IF(DE$1='Stars and Floors'!$F17,1, 0) + IF(DE$1='Stars and Floors'!$G17,1, 0), 0)` |
| DF17 | `=IF('Stars and Floors'!$A17, IF(DF$1='Stars and Floors'!$C17,1, 0) + IF(DF$1='Stars and Floors'!$D17,1, 0) + IF(DF$1='Stars and Floors'!$E17,1, 0) + IF(DF$1='Stars and Floors'!$F17,1, 0) + IF(DF$1='Stars and Floors'!$G17,1, 0), 0)` |
| DG17 | `=IF('Stars and Floors'!$A17, IF(DG$1='Stars and Floors'!$C17,1, 0) + IF(DG$1='Stars and Floors'!$D17,1, 0) + IF(DG$1='Stars and Floors'!$E17,1, 0) + IF(DG$1='Stars and Floors'!$F17,1, 0) + IF(DG$1='Stars and Floors'!$G17,1, 0), 0)` |
| DH17 | `=IF('Stars and Floors'!$A17, IF(DH$1='Stars and Floors'!$C17,1, 0) + IF(DH$1='Stars and Floors'!$D17,1, 0) + IF(DH$1='Stars and Floors'!$E17,1, 0) + IF(DH$1='Stars and Floors'!$F17,1, 0) + IF(DH$1='Stars and Floors'!$G17,1, 0), 0)` |
| DI17 | `=IF('Stars and Floors'!$A17, IF(DI$1='Stars and Floors'!$C17,1, 0) + IF(DI$1='Stars and Floors'!$D17,1, 0) + IF(DI$1='Stars and Floors'!$E17,1, 0) + IF(DI$1='Stars and Floors'!$F17,1, 0) + IF(DI$1='Stars and Floors'!$G17,1, 0), 0)` |
| DJ17 | `=IF('Stars and Floors'!$A17, IF(DJ$1='Stars and Floors'!$C17,1, 0) + IF(DJ$1='Stars and Floors'!$D17,1, 0) + IF(DJ$1='Stars and Floors'!$E17,1, 0) + IF(DJ$1='Stars and Floors'!$F17,1, 0) + IF(DJ$1='Stars and Floors'!$G17,1, 0), 0)` |
| DK17 | `=IF('Stars and Floors'!$A17, IF(DK$1='Stars and Floors'!$C17,1, 0) + IF(DK$1='Stars and Floors'!$D17,1, 0) + IF(DK$1='Stars and Floors'!$E17,1, 0) + IF(DK$1='Stars and Floors'!$F17,1, 0) + IF(DK$1='Stars and Floors'!$G17,1, 0), 0)` |
| DL17 | `=IF('Stars and Floors'!$A17, IF(DL$1='Stars and Floors'!$C17,1, 0) + IF(DL$1='Stars and Floors'!$D17,1, 0) + IF(DL$1='Stars and Floors'!$E17,1, 0) + IF(DL$1='Stars and Floors'!$F17,1, 0) + IF(DL$1='Stars and Floors'!$G17,1, 0), 0)` |
| DM17 | `=IF('Stars and Floors'!$A17, IF(DM$1='Stars and Floors'!$C17,1, 0) + IF(DM$1='Stars and Floors'!$D17,1, 0) + IF(DM$1='Stars and Floors'!$E17,1, 0) + IF(DM$1='Stars and Floors'!$F17,1, 0) + IF(DM$1='Stars and Floors'!$G17,1, 0), 0)` |
| DN17 | `=IF('Stars and Floors'!$A17, IF(DN$1='Stars and Floors'!$C17,1, 0) + IF(DN$1='Stars and Floors'!$D17,1, 0) + IF(DN$1='Stars and Floors'!$E17,1, 0) + IF(DN$1='Stars and Floors'!$F17,1, 0) + IF(DN$1='Stars and Floors'!$G17,1, 0), 0)` |
| DO17 | `=IF('Stars and Floors'!$A17, IF(DO$1='Stars and Floors'!$C17,1, 0) + IF(DO$1='Stars and Floors'!$D17,1, 0) + IF(DO$1='Stars and Floors'!$E17,1, 0) + IF(DO$1='Stars and Floors'!$F17,1, 0) + IF(DO$1='Stars and Floors'!$G17,1, 0), 0)` |
| DP17 | `=IF('Stars and Floors'!$A17, IF(DP$1='Stars and Floors'!$C17,1, 0) + IF(DP$1='Stars and Floors'!$D17,1, 0) + IF(DP$1='Stars and Floors'!$E17,1, 0) + IF(DP$1='Stars and Floors'!$F17,1, 0) + IF(DP$1='Stars and Floors'!$G17,1, 0), 0)` |
| DQ17 | `=IF('Stars and Floors'!$A17, IF(DQ$1='Stars and Floors'!$C17,1, 0) + IF(DQ$1='Stars and Floors'!$D17,1, 0) + IF(DQ$1='Stars and Floors'!$E17,1, 0) + IF(DQ$1='Stars and Floors'!$F17,1, 0) + IF(DQ$1='Stars and Floors'!$G17,1, 0), 0)` |
| B18 | `=IF('Stars and Floors'!$A18, IF(B$1='Stars and Floors'!$C18,1, 0) + IF(B$1='Stars and Floors'!$D18,1, 0) + IF(B$1='Stars and Floors'!$E18,1, 0) + IF(B$1='Stars and Floors'!$F18,1, 0) + IF(B$1='Stars and Floors'!$G18,1, 0), 0)` |
| C18 | `=IF('Stars and Floors'!$A18, IF(C$1='Stars and Floors'!$C18,1, 0) + IF(C$1='Stars and Floors'!$D18,1, 0) + IF(C$1='Stars and Floors'!$E18,1, 0) + IF(C$1='Stars and Floors'!$F18,1, 0) + IF(C$1='Stars and Floors'!$G18,1, 0), 0)` |
| D18 | `=IF('Stars and Floors'!$A18, IF(D$1='Stars and Floors'!$C18,1, 0) + IF(D$1='Stars and Floors'!$D18,1, 0) + IF(D$1='Stars and Floors'!$E18,1, 0) + IF(D$1='Stars and Floors'!$F18,1, 0) + IF(D$1='Stars and Floors'!$G18,1, 0), 0)` |
| E18 | `=IF('Stars and Floors'!$A18, IF(E$1='Stars and Floors'!$C18,1, 0) + IF(E$1='Stars and Floors'!$D18,1, 0) + IF(E$1='Stars and Floors'!$E18,1, 0) + IF(E$1='Stars and Floors'!$F18,1, 0) + IF(E$1='Stars and Floors'!$G18,1, 0), 0)` |
| F18 | `=IF('Stars and Floors'!$A18, IF(F$1='Stars and Floors'!$C18,1, 0) + IF(F$1='Stars and Floors'!$D18,1, 0) + IF(F$1='Stars and Floors'!$E18,1, 0) + IF(F$1='Stars and Floors'!$F18,1, 0) + IF(F$1='Stars and Floors'!$G18,1, 0), 0)` |
| G18 | `=IF('Stars and Floors'!$A18, IF(G$1='Stars and Floors'!$C18,1, 0) + IF(G$1='Stars and Floors'!$D18,1, 0) + IF(G$1='Stars and Floors'!$E18,1, 0) + IF(G$1='Stars and Floors'!$F18,1, 0) + IF(G$1='Stars and Floors'!$G18,1, 0), 0)` |
| H18 | `=IF('Stars and Floors'!$A18, IF(H$1='Stars and Floors'!$C18,1, 0) + IF(H$1='Stars and Floors'!$D18,1, 0) + IF(H$1='Stars and Floors'!$E18,1, 0) + IF(H$1='Stars and Floors'!$F18,1, 0) + IF(H$1='Stars and Floors'!$G18,1, 0), 0)` |
| I18 | `=IF('Stars and Floors'!$A18, IF(I$1='Stars and Floors'!$C18,1, 0) + IF(I$1='Stars and Floors'!$D18,1, 0) + IF(I$1='Stars and Floors'!$E18,1, 0) + IF(I$1='Stars and Floors'!$F18,1, 0) + IF(I$1='Stars and Floors'!$G18,1, 0), 0)` |
| J18 | `=IF('Stars and Floors'!$A18, IF(J$1='Stars and Floors'!$C18,1, 0) + IF(J$1='Stars and Floors'!$D18,1, 0) + IF(J$1='Stars and Floors'!$E18,1, 0) + IF(J$1='Stars and Floors'!$F18,1, 0) + IF(J$1='Stars and Floors'!$G18,1, 0), 0)` |
| K18 | `=IF('Stars and Floors'!$A18, IF(K$1='Stars and Floors'!$C18,1, 0) + IF(K$1='Stars and Floors'!$D18,1, 0) + IF(K$1='Stars and Floors'!$E18,1, 0) + IF(K$1='Stars and Floors'!$F18,1, 0) + IF(K$1='Stars and Floors'!$G18,1, 0), 0)` |
| L18 | `=IF('Stars and Floors'!$A18, IF(L$1='Stars and Floors'!$C18,1, 0) + IF(L$1='Stars and Floors'!$D18,1, 0) + IF(L$1='Stars and Floors'!$E18,1, 0) + IF(L$1='Stars and Floors'!$F18,1, 0) + IF(L$1='Stars and Floors'!$G18,1, 0), 0)` |
| M18 | `=IF('Stars and Floors'!$A18, IF(M$1='Stars and Floors'!$C18,1, 0) + IF(M$1='Stars and Floors'!$D18,1, 0) + IF(M$1='Stars and Floors'!$E18,1, 0) + IF(M$1='Stars and Floors'!$F18,1, 0) + IF(M$1='Stars and Floors'!$G18,1, 0), 0)` |
| N18 | `=IF('Stars and Floors'!$A18, IF(N$1='Stars and Floors'!$C18,1, 0) + IF(N$1='Stars and Floors'!$D18,1, 0) + IF(N$1='Stars and Floors'!$E18,1, 0) + IF(N$1='Stars and Floors'!$F18,1, 0) + IF(N$1='Stars and Floors'!$G18,1, 0), 0)` |
| O18 | `=IF('Stars and Floors'!$A18, IF(O$1='Stars and Floors'!$C18,1, 0) + IF(O$1='Stars and Floors'!$D18,1, 0) + IF(O$1='Stars and Floors'!$E18,1, 0) + IF(O$1='Stars and Floors'!$F18,1, 0) + IF(O$1='Stars and Floors'!$G18,1, 0), 0)` |
| P18 | `=IF('Stars and Floors'!$A18, IF(P$1='Stars and Floors'!$C18,1, 0) + IF(P$1='Stars and Floors'!$D18,1, 0) + IF(P$1='Stars and Floors'!$E18,1, 0) + IF(P$1='Stars and Floors'!$F18,1, 0) + IF(P$1='Stars and Floors'!$G18,1, 0), 0)` |
| Q18 | `=IF('Stars and Floors'!$A18, IF(Q$1='Stars and Floors'!$C18,1, 0) + IF(Q$1='Stars and Floors'!$D18,1, 0) + IF(Q$1='Stars and Floors'!$E18,1, 0) + IF(Q$1='Stars and Floors'!$F18,1, 0) + IF(Q$1='Stars and Floors'!$G18,1, 0), 0)` |
| R18 | `=IF('Stars and Floors'!$A18, IF(R$1='Stars and Floors'!$C18,1, 0) + IF(R$1='Stars and Floors'!$D18,1, 0) + IF(R$1='Stars and Floors'!$E18,1, 0) + IF(R$1='Stars and Floors'!$F18,1, 0) + IF(R$1='Stars and Floors'!$G18,1, 0), 0)` |
| S18 | `=IF('Stars and Floors'!$A18, IF(S$1='Stars and Floors'!$C18,1, 0) + IF(S$1='Stars and Floors'!$D18,1, 0) + IF(S$1='Stars and Floors'!$E18,1, 0) + IF(S$1='Stars and Floors'!$F18,1, 0) + IF(S$1='Stars and Floors'!$G18,1, 0), 0)` |
| T18 | `=IF('Stars and Floors'!$A18, IF(T$1='Stars and Floors'!$C18,1, 0) + IF(T$1='Stars and Floors'!$D18,1, 0) + IF(T$1='Stars and Floors'!$E18,1, 0) + IF(T$1='Stars and Floors'!$F18,1, 0) + IF(T$1='Stars and Floors'!$G18,1, 0), 0)` |
| U18 | `=IF('Stars and Floors'!$A18, IF(U$1='Stars and Floors'!$C18,1, 0) + IF(U$1='Stars and Floors'!$D18,1, 0) + IF(U$1='Stars and Floors'!$E18,1, 0) + IF(U$1='Stars and Floors'!$F18,1, 0) + IF(U$1='Stars and Floors'!$G18,1, 0), 0)` |
| V18 | `=IF('Stars and Floors'!$A18, IF(V$1='Stars and Floors'!$C18,1, 0) + IF(V$1='Stars and Floors'!$D18,1, 0) + IF(V$1='Stars and Floors'!$E18,1, 0) + IF(V$1='Stars and Floors'!$F18,1, 0) + IF(V$1='Stars and Floors'!$G18,1, 0), 0)` |
| W18 | `=IF('Stars and Floors'!$A18, IF(W$1='Stars and Floors'!$C18,1, 0) + IF(W$1='Stars and Floors'!$D18,1, 0) + IF(W$1='Stars and Floors'!$E18,1, 0) + IF(W$1='Stars and Floors'!$F18,1, 0) + IF(W$1='Stars and Floors'!$G18,1, 0), 0)` |
| X18 | `=IF('Stars and Floors'!$A18, IF(X$1='Stars and Floors'!$C18,1, 0) + IF(X$1='Stars and Floors'!$D18,1, 0) + IF(X$1='Stars and Floors'!$E18,1, 0) + IF(X$1='Stars and Floors'!$F18,1, 0) + IF(X$1='Stars and Floors'!$G18,1, 0), 0)` |
| Y18 | `=IF('Stars and Floors'!$A18, IF(Y$1='Stars and Floors'!$C18,1, 0) + IF(Y$1='Stars and Floors'!$D18,1, 0) + IF(Y$1='Stars and Floors'!$E18,1, 0) + IF(Y$1='Stars and Floors'!$F18,1, 0) + IF(Y$1='Stars and Floors'!$G18,1, 0), 0)` |
| Z18 | `=IF('Stars and Floors'!$A18, IF(Z$1='Stars and Floors'!$C18,1, 0) + IF(Z$1='Stars and Floors'!$D18,1, 0) + IF(Z$1='Stars and Floors'!$E18,1, 0) + IF(Z$1='Stars and Floors'!$F18,1, 0) + IF(Z$1='Stars and Floors'!$G18,1, 0), 0)` |
| AA18 | `=IF('Stars and Floors'!$A18, IF(AA$1='Stars and Floors'!$C18,1, 0) + IF(AA$1='Stars and Floors'!$D18,1, 0) + IF(AA$1='Stars and Floors'!$E18,1, 0) + IF(AA$1='Stars and Floors'!$F18,1, 0) + IF(AA$1='Stars and Floors'!$G18,1, 0), 0)` |
| AB18 | `=IF('Stars and Floors'!$A18, IF(AB$1='Stars and Floors'!$C18,1, 0) + IF(AB$1='Stars and Floors'!$D18,1, 0) + IF(AB$1='Stars and Floors'!$E18,1, 0) + IF(AB$1='Stars and Floors'!$F18,1, 0) + IF(AB$1='Stars and Floors'!$G18,1, 0), 0)` |
| AC18 | `=IF('Stars and Floors'!$A18, IF(AC$1='Stars and Floors'!$C18,1, 0) + IF(AC$1='Stars and Floors'!$D18,1, 0) + IF(AC$1='Stars and Floors'!$E18,1, 0) + IF(AC$1='Stars and Floors'!$F18,1, 0) + IF(AC$1='Stars and Floors'!$G18,1, 0), 0)` |
| AD18 | `=IF('Stars and Floors'!$A18, IF(AD$1='Stars and Floors'!$C18,1, 0) + IF(AD$1='Stars and Floors'!$D18,1, 0) + IF(AD$1='Stars and Floors'!$E18,1, 0) + IF(AD$1='Stars and Floors'!$F18,1, 0) + IF(AD$1='Stars and Floors'!$G18,1, 0), 0)` |
| AE18 | `=IF('Stars and Floors'!$A18, IF(AE$1='Stars and Floors'!$C18,1, 0) + IF(AE$1='Stars and Floors'!$D18,1, 0) + IF(AE$1='Stars and Floors'!$E18,1, 0) + IF(AE$1='Stars and Floors'!$F18,1, 0) + IF(AE$1='Stars and Floors'!$G18,1, 0), 0)` |
| AF18 | `=IF('Stars and Floors'!$A18, IF(AF$1='Stars and Floors'!$C18,1, 0) + IF(AF$1='Stars and Floors'!$D18,1, 0) + IF(AF$1='Stars and Floors'!$E18,1, 0) + IF(AF$1='Stars and Floors'!$F18,1, 0) + IF(AF$1='Stars and Floors'!$G18,1, 0), 0)` |
| AG18 | `=IF('Stars and Floors'!$A18, IF(AG$1='Stars and Floors'!$C18,1, 0) + IF(AG$1='Stars and Floors'!$D18,1, 0) + IF(AG$1='Stars and Floors'!$E18,1, 0) + IF(AG$1='Stars and Floors'!$F18,1, 0) + IF(AG$1='Stars and Floors'!$G18,1, 0), 0)` |
| AH18 | `=IF('Stars and Floors'!$A18, IF(AH$1='Stars and Floors'!$C18,1, 0) + IF(AH$1='Stars and Floors'!$D18,1, 0) + IF(AH$1='Stars and Floors'!$E18,1, 0) + IF(AH$1='Stars and Floors'!$F18,1, 0) + IF(AH$1='Stars and Floors'!$G18,1, 0), 0)` |
| AI18 | `=IF('Stars and Floors'!$A18, IF(AI$1='Stars and Floors'!$C18,1, 0) + IF(AI$1='Stars and Floors'!$D18,1, 0) + IF(AI$1='Stars and Floors'!$E18,1, 0) + IF(AI$1='Stars and Floors'!$F18,1, 0) + IF(AI$1='Stars and Floors'!$G18,1, 0), 0)` |
| AJ18 | `=IF('Stars and Floors'!$A18, IF(AJ$1='Stars and Floors'!$C18,1, 0) + IF(AJ$1='Stars and Floors'!$D18,1, 0) + IF(AJ$1='Stars and Floors'!$E18,1, 0) + IF(AJ$1='Stars and Floors'!$F18,1, 0) + IF(AJ$1='Stars and Floors'!$G18,1, 0), 0)` |
| AK18 | `=IF('Stars and Floors'!$A18, IF(AK$1='Stars and Floors'!$C18,1, 0) + IF(AK$1='Stars and Floors'!$D18,1, 0) + IF(AK$1='Stars and Floors'!$E18,1, 0) + IF(AK$1='Stars and Floors'!$F18,1, 0) + IF(AK$1='Stars and Floors'!$G18,1, 0), 0)` |
| AL18 | `=IF('Stars and Floors'!$A18, IF(AL$1='Stars and Floors'!$C18,1, 0) + IF(AL$1='Stars and Floors'!$D18,1, 0) + IF(AL$1='Stars and Floors'!$E18,1, 0) + IF(AL$1='Stars and Floors'!$F18,1, 0) + IF(AL$1='Stars and Floors'!$G18,1, 0), 0)` |
| AM18 | `=IF('Stars and Floors'!$A18, IF(AM$1='Stars and Floors'!$C18,1, 0) + IF(AM$1='Stars and Floors'!$D18,1, 0) + IF(AM$1='Stars and Floors'!$E18,1, 0) + IF(AM$1='Stars and Floors'!$F18,1, 0) + IF(AM$1='Stars and Floors'!$G18,1, 0), 0)` |
| AN18 | `=IF('Stars and Floors'!$A18, IF(AN$1='Stars and Floors'!$C18,1, 0) + IF(AN$1='Stars and Floors'!$D18,1, 0) + IF(AN$1='Stars and Floors'!$E18,1, 0) + IF(AN$1='Stars and Floors'!$F18,1, 0) + IF(AN$1='Stars and Floors'!$G18,1, 0), 0)` |
| AO18 | `=IF('Stars and Floors'!$A18, IF(AO$1='Stars and Floors'!$C18,1, 0) + IF(AO$1='Stars and Floors'!$D18,1, 0) + IF(AO$1='Stars and Floors'!$E18,1, 0) + IF(AO$1='Stars and Floors'!$F18,1, 0) + IF(AO$1='Stars and Floors'!$G18,1, 0), 0)` |
| AP18 | `=IF('Stars and Floors'!$A18, IF(AP$1='Stars and Floors'!$C18,1, 0) + IF(AP$1='Stars and Floors'!$D18,1, 0) + IF(AP$1='Stars and Floors'!$E18,1, 0) + IF(AP$1='Stars and Floors'!$F18,1, 0) + IF(AP$1='Stars and Floors'!$G18,1, 0), 0)` |
| AQ18 | `=IF('Stars and Floors'!$A18, IF(AQ$1='Stars and Floors'!$C18,1, 0) + IF(AQ$1='Stars and Floors'!$D18,1, 0) + IF(AQ$1='Stars and Floors'!$E18,1, 0) + IF(AQ$1='Stars and Floors'!$F18,1, 0) + IF(AQ$1='Stars and Floors'!$G18,1, 0), 0)` |
| AR18 | `=IF('Stars and Floors'!$A18, IF(AR$1='Stars and Floors'!$C18,1, 0) + IF(AR$1='Stars and Floors'!$D18,1, 0) + IF(AR$1='Stars and Floors'!$E18,1, 0) + IF(AR$1='Stars and Floors'!$F18,1, 0) + IF(AR$1='Stars and Floors'!$G18,1, 0), 0)` |
| AS18 | `=IF('Stars and Floors'!$A18, IF(AS$1='Stars and Floors'!$C18,1, 0) + IF(AS$1='Stars and Floors'!$D18,1, 0) + IF(AS$1='Stars and Floors'!$E18,1, 0) + IF(AS$1='Stars and Floors'!$F18,1, 0) + IF(AS$1='Stars and Floors'!$G18,1, 0), 0)` |
| AT18 | `=IF('Stars and Floors'!$A18, IF(AT$1='Stars and Floors'!$C18,1, 0) + IF(AT$1='Stars and Floors'!$D18,1, 0) + IF(AT$1='Stars and Floors'!$E18,1, 0) + IF(AT$1='Stars and Floors'!$F18,1, 0) + IF(AT$1='Stars and Floors'!$G18,1, 0), 0)` |
| AU18 | `=IF('Stars and Floors'!$A18, IF(AU$1='Stars and Floors'!$C18,1, 0) + IF(AU$1='Stars and Floors'!$D18,1, 0) + IF(AU$1='Stars and Floors'!$E18,1, 0) + IF(AU$1='Stars and Floors'!$F18,1, 0) + IF(AU$1='Stars and Floors'!$G18,1, 0), 0)` |
| AV18 | `=IF('Stars and Floors'!$A18, IF(AV$1='Stars and Floors'!$C18,1, 0) + IF(AV$1='Stars and Floors'!$D18,1, 0) + IF(AV$1='Stars and Floors'!$E18,1, 0) + IF(AV$1='Stars and Floors'!$F18,1, 0) + IF(AV$1='Stars and Floors'!$G18,1, 0), 0)` |
| AW18 | `=IF('Stars and Floors'!$A18, IF(AW$1='Stars and Floors'!$C18,1, 0) + IF(AW$1='Stars and Floors'!$D18,1, 0) + IF(AW$1='Stars and Floors'!$E18,1, 0) + IF(AW$1='Stars and Floors'!$F18,1, 0) + IF(AW$1='Stars and Floors'!$G18,1, 0), 0)` |
| AX18 | `=IF('Stars and Floors'!$A18, IF(AX$1='Stars and Floors'!$C18,1, 0) + IF(AX$1='Stars and Floors'!$D18,1, 0) + IF(AX$1='Stars and Floors'!$E18,1, 0) + IF(AX$1='Stars and Floors'!$F18,1, 0) + IF(AX$1='Stars and Floors'!$G18,1, 0), 0)` |
| AY18 | `=IF('Stars and Floors'!$A18, IF(AY$1='Stars and Floors'!$C18,1, 0) + IF(AY$1='Stars and Floors'!$D18,1, 0) + IF(AY$1='Stars and Floors'!$E18,1, 0) + IF(AY$1='Stars and Floors'!$F18,1, 0) + IF(AY$1='Stars and Floors'!$G18,1, 0), 0)` |
| AZ18 | `=IF('Stars and Floors'!$A18, IF(AZ$1='Stars and Floors'!$C18,1, 0) + IF(AZ$1='Stars and Floors'!$D18,1, 0) + IF(AZ$1='Stars and Floors'!$E18,1, 0) + IF(AZ$1='Stars and Floors'!$F18,1, 0) + IF(AZ$1='Stars and Floors'!$G18,1, 0), 0)` |
| BA18 | `=IF('Stars and Floors'!$A18, IF(BA$1='Stars and Floors'!$C18,1, 0) + IF(BA$1='Stars and Floors'!$D18,1, 0) + IF(BA$1='Stars and Floors'!$E18,1, 0) + IF(BA$1='Stars and Floors'!$F18,1, 0) + IF(BA$1='Stars and Floors'!$G18,1, 0), 0)` |
| BB18 | `=IF('Stars and Floors'!$A18, IF(BB$1='Stars and Floors'!$C18,1, 0) + IF(BB$1='Stars and Floors'!$D18,1, 0) + IF(BB$1='Stars and Floors'!$E18,1, 0) + IF(BB$1='Stars and Floors'!$F18,1, 0) + IF(BB$1='Stars and Floors'!$G18,1, 0), 0)` |
| BC18 | `=IF('Stars and Floors'!$A18, IF(BC$1='Stars and Floors'!$C18,1, 0) + IF(BC$1='Stars and Floors'!$D18,1, 0) + IF(BC$1='Stars and Floors'!$E18,1, 0) + IF(BC$1='Stars and Floors'!$F18,1, 0) + IF(BC$1='Stars and Floors'!$G18,1, 0), 0)` |
| BD18 | `=IF('Stars and Floors'!$A18, IF(BD$1='Stars and Floors'!$C18,1, 0) + IF(BD$1='Stars and Floors'!$D18,1, 0) + IF(BD$1='Stars and Floors'!$E18,1, 0) + IF(BD$1='Stars and Floors'!$F18,1, 0) + IF(BD$1='Stars and Floors'!$G18,1, 0), 0)` |
| BE18 | `=IF('Stars and Floors'!$A18, IF(BE$1='Stars and Floors'!$C18,1, 0) + IF(BE$1='Stars and Floors'!$D18,1, 0) + IF(BE$1='Stars and Floors'!$E18,1, 0) + IF(BE$1='Stars and Floors'!$F18,1, 0) + IF(BE$1='Stars and Floors'!$G18,1, 0), 0)` |
| BF18 | `=IF('Stars and Floors'!$A18, IF(BF$1='Stars and Floors'!$C18,1, 0) + IF(BF$1='Stars and Floors'!$D18,1, 0) + IF(BF$1='Stars and Floors'!$E18,1, 0) + IF(BF$1='Stars and Floors'!$F18,1, 0) + IF(BF$1='Stars and Floors'!$G18,1, 0), 0)` |
| BG18 | `=IF('Stars and Floors'!$A18, IF(BG$1='Stars and Floors'!$C18,1, 0) + IF(BG$1='Stars and Floors'!$D18,1, 0) + IF(BG$1='Stars and Floors'!$E18,1, 0) + IF(BG$1='Stars and Floors'!$F18,1, 0) + IF(BG$1='Stars and Floors'!$G18,1, 0), 0)` |
| BH18 | `=IF('Stars and Floors'!$A18, IF(BH$1='Stars and Floors'!$C18,1, 0) + IF(BH$1='Stars and Floors'!$D18,1, 0) + IF(BH$1='Stars and Floors'!$E18,1, 0) + IF(BH$1='Stars and Floors'!$F18,1, 0) + IF(BH$1='Stars and Floors'!$G18,1, 0), 0)` |
| BI18 | `=IF('Stars and Floors'!$A18, IF(BI$1='Stars and Floors'!$C18,1, 0) + IF(BI$1='Stars and Floors'!$D18,1, 0) + IF(BI$1='Stars and Floors'!$E18,1, 0) + IF(BI$1='Stars and Floors'!$F18,1, 0) + IF(BI$1='Stars and Floors'!$G18,1, 0), 0)` |
| BJ18 | `=IF('Stars and Floors'!$A18, IF(BJ$1='Stars and Floors'!$C18,1, 0) + IF(BJ$1='Stars and Floors'!$D18,1, 0) + IF(BJ$1='Stars and Floors'!$E18,1, 0) + IF(BJ$1='Stars and Floors'!$F18,1, 0) + IF(BJ$1='Stars and Floors'!$G18,1, 0), 0)` |
| BK18 | `=IF('Stars and Floors'!$A18, IF(BK$1='Stars and Floors'!$C18,1, 0) + IF(BK$1='Stars and Floors'!$D18,1, 0) + IF(BK$1='Stars and Floors'!$E18,1, 0) + IF(BK$1='Stars and Floors'!$F18,1, 0) + IF(BK$1='Stars and Floors'!$G18,1, 0), 0)` |
| BL18 | `=IF('Stars and Floors'!$A18, IF(BL$1='Stars and Floors'!$C18,1, 0) + IF(BL$1='Stars and Floors'!$D18,1, 0) + IF(BL$1='Stars and Floors'!$E18,1, 0) + IF(BL$1='Stars and Floors'!$F18,1, 0) + IF(BL$1='Stars and Floors'!$G18,1, 0), 0)` |
| BM18 | `=IF('Stars and Floors'!$A18, IF(BM$1='Stars and Floors'!$C18,1, 0) + IF(BM$1='Stars and Floors'!$D18,1, 0) + IF(BM$1='Stars and Floors'!$E18,1, 0) + IF(BM$1='Stars and Floors'!$F18,1, 0) + IF(BM$1='Stars and Floors'!$G18,1, 0), 0)` |
| BN18 | `=IF('Stars and Floors'!$A18, IF(BN$1='Stars and Floors'!$C18,1, 0) + IF(BN$1='Stars and Floors'!$D18,1, 0) + IF(BN$1='Stars and Floors'!$E18,1, 0) + IF(BN$1='Stars and Floors'!$F18,1, 0) + IF(BN$1='Stars and Floors'!$G18,1, 0), 0)` |
| BO18 | `=IF('Stars and Floors'!$A18, IF(BO$1='Stars and Floors'!$C18,1, 0) + IF(BO$1='Stars and Floors'!$D18,1, 0) + IF(BO$1='Stars and Floors'!$E18,1, 0) + IF(BO$1='Stars and Floors'!$F18,1, 0) + IF(BO$1='Stars and Floors'!$G18,1, 0), 0)` |
| BP18 | `=IF('Stars and Floors'!$A18, IF(BP$1='Stars and Floors'!$C18,1, 0) + IF(BP$1='Stars and Floors'!$D18,1, 0) + IF(BP$1='Stars and Floors'!$E18,1, 0) + IF(BP$1='Stars and Floors'!$F18,1, 0) + IF(BP$1='Stars and Floors'!$G18,1, 0), 0)` |
| BQ18 | `=IF('Stars and Floors'!$A18, IF(BQ$1='Stars and Floors'!$C18,1, 0) + IF(BQ$1='Stars and Floors'!$D18,1, 0) + IF(BQ$1='Stars and Floors'!$E18,1, 0) + IF(BQ$1='Stars and Floors'!$F18,1, 0) + IF(BQ$1='Stars and Floors'!$G18,1, 0), 0)` |
| BR18 | `=IF('Stars and Floors'!$A18, IF(BR$1='Stars and Floors'!$C18,1, 0) + IF(BR$1='Stars and Floors'!$D18,1, 0) + IF(BR$1='Stars and Floors'!$E18,1, 0) + IF(BR$1='Stars and Floors'!$F18,1, 0) + IF(BR$1='Stars and Floors'!$G18,1, 0), 0)` |
| BS18 | `=IF('Stars and Floors'!$A18, IF(BS$1='Stars and Floors'!$C18,1, 0) + IF(BS$1='Stars and Floors'!$D18,1, 0) + IF(BS$1='Stars and Floors'!$E18,1, 0) + IF(BS$1='Stars and Floors'!$F18,1, 0) + IF(BS$1='Stars and Floors'!$G18,1, 0), 0)` |
| BT18 | `=IF('Stars and Floors'!$A18, IF(BT$1='Stars and Floors'!$C18,1, 0) + IF(BT$1='Stars and Floors'!$D18,1, 0) + IF(BT$1='Stars and Floors'!$E18,1, 0) + IF(BT$1='Stars and Floors'!$F18,1, 0) + IF(BT$1='Stars and Floors'!$G18,1, 0), 0)` |
| BU18 | `=IF('Stars and Floors'!$A18, IF(BU$1='Stars and Floors'!$C18,1, 0) + IF(BU$1='Stars and Floors'!$D18,1, 0) + IF(BU$1='Stars and Floors'!$E18,1, 0) + IF(BU$1='Stars and Floors'!$F18,1, 0) + IF(BU$1='Stars and Floors'!$G18,1, 0), 0)` |
| BV18 | `=IF('Stars and Floors'!$A18, IF(BV$1='Stars and Floors'!$C18,1, 0) + IF(BV$1='Stars and Floors'!$D18,1, 0) + IF(BV$1='Stars and Floors'!$E18,1, 0) + IF(BV$1='Stars and Floors'!$F18,1, 0) + IF(BV$1='Stars and Floors'!$G18,1, 0), 0)` |
| BW18 | `=IF('Stars and Floors'!$A18, IF(BW$1='Stars and Floors'!$C18,1, 0) + IF(BW$1='Stars and Floors'!$D18,1, 0) + IF(BW$1='Stars and Floors'!$E18,1, 0) + IF(BW$1='Stars and Floors'!$F18,1, 0) + IF(BW$1='Stars and Floors'!$G18,1, 0), 0)` |
| BX18 | `=IF('Stars and Floors'!$A18, IF(BX$1='Stars and Floors'!$C18,1, 0) + IF(BX$1='Stars and Floors'!$D18,1, 0) + IF(BX$1='Stars and Floors'!$E18,1, 0) + IF(BX$1='Stars and Floors'!$F18,1, 0) + IF(BX$1='Stars and Floors'!$G18,1, 0), 0)` |
| BY18 | `=IF('Stars and Floors'!$A18, IF(BY$1='Stars and Floors'!$C18,1, 0) + IF(BY$1='Stars and Floors'!$D18,1, 0) + IF(BY$1='Stars and Floors'!$E18,1, 0) + IF(BY$1='Stars and Floors'!$F18,1, 0) + IF(BY$1='Stars and Floors'!$G18,1, 0), 0)` |
| BZ18 | `=IF('Stars and Floors'!$A18, IF(BZ$1='Stars and Floors'!$C18,1, 0) + IF(BZ$1='Stars and Floors'!$D18,1, 0) + IF(BZ$1='Stars and Floors'!$E18,1, 0) + IF(BZ$1='Stars and Floors'!$F18,1, 0) + IF(BZ$1='Stars and Floors'!$G18,1, 0), 0)` |
| CA18 | `=IF('Stars and Floors'!$A18, IF(CA$1='Stars and Floors'!$C18,1, 0) + IF(CA$1='Stars and Floors'!$D18,1, 0) + IF(CA$1='Stars and Floors'!$E18,1, 0) + IF(CA$1='Stars and Floors'!$F18,1, 0) + IF(CA$1='Stars and Floors'!$G18,1, 0), 0)` |
| CB18 | `=IF('Stars and Floors'!$A18, IF(CB$1='Stars and Floors'!$C18,1, 0) + IF(CB$1='Stars and Floors'!$D18,1, 0) + IF(CB$1='Stars and Floors'!$E18,1, 0) + IF(CB$1='Stars and Floors'!$F18,1, 0) + IF(CB$1='Stars and Floors'!$G18,1, 0), 0)` |
| CC18 | `=IF('Stars and Floors'!$A18, IF(CC$1='Stars and Floors'!$C18,1, 0) + IF(CC$1='Stars and Floors'!$D18,1, 0) + IF(CC$1='Stars and Floors'!$E18,1, 0) + IF(CC$1='Stars and Floors'!$F18,1, 0) + IF(CC$1='Stars and Floors'!$G18,1, 0), 0)` |
| CD18 | `=IF('Stars and Floors'!$A18, IF(CD$1='Stars and Floors'!$C18,1, 0) + IF(CD$1='Stars and Floors'!$D18,1, 0) + IF(CD$1='Stars and Floors'!$E18,1, 0) + IF(CD$1='Stars and Floors'!$F18,1, 0) + IF(CD$1='Stars and Floors'!$G18,1, 0), 0)` |
| CE18 | `=IF('Stars and Floors'!$A18, IF(CE$1='Stars and Floors'!$C18,1, 0) + IF(CE$1='Stars and Floors'!$D18,1, 0) + IF(CE$1='Stars and Floors'!$E18,1, 0) + IF(CE$1='Stars and Floors'!$F18,1, 0) + IF(CE$1='Stars and Floors'!$G18,1, 0), 0)` |
| CF18 | `=IF('Stars and Floors'!$A18, IF(CF$1='Stars and Floors'!$C18,1, 0) + IF(CF$1='Stars and Floors'!$D18,1, 0) + IF(CF$1='Stars and Floors'!$E18,1, 0) + IF(CF$1='Stars and Floors'!$F18,1, 0) + IF(CF$1='Stars and Floors'!$G18,1, 0), 0)` |
| CG18 | `=IF('Stars and Floors'!$A18, IF(CG$1='Stars and Floors'!$C18,1, 0) + IF(CG$1='Stars and Floors'!$D18,1, 0) + IF(CG$1='Stars and Floors'!$E18,1, 0) + IF(CG$1='Stars and Floors'!$F18,1, 0) + IF(CG$1='Stars and Floors'!$G18,1, 0), 0)` |
| CH18 | `=IF('Stars and Floors'!$A18, IF(CH$1='Stars and Floors'!$C18,1, 0) + IF(CH$1='Stars and Floors'!$D18,1, 0) + IF(CH$1='Stars and Floors'!$E18,1, 0) + IF(CH$1='Stars and Floors'!$F18,1, 0) + IF(CH$1='Stars and Floors'!$G18,1, 0), 0)` |
| CI18 | `=IF('Stars and Floors'!$A18, IF(CI$1='Stars and Floors'!$C18,1, 0) + IF(CI$1='Stars and Floors'!$D18,1, 0) + IF(CI$1='Stars and Floors'!$E18,1, 0) + IF(CI$1='Stars and Floors'!$F18,1, 0) + IF(CI$1='Stars and Floors'!$G18,1, 0), 0)` |
| CJ18 | `=IF('Stars and Floors'!$A18, IF(CJ$1='Stars and Floors'!$C18,1, 0) + IF(CJ$1='Stars and Floors'!$D18,1, 0) + IF(CJ$1='Stars and Floors'!$E18,1, 0) + IF(CJ$1='Stars and Floors'!$F18,1, 0) + IF(CJ$1='Stars and Floors'!$G18,1, 0), 0)` |
| CK18 | `=IF('Stars and Floors'!$A18, IF(CK$1='Stars and Floors'!$C18,1, 0) + IF(CK$1='Stars and Floors'!$D18,1, 0) + IF(CK$1='Stars and Floors'!$E18,1, 0) + IF(CK$1='Stars and Floors'!$F18,1, 0) + IF(CK$1='Stars and Floors'!$G18,1, 0), 0)` |
| CL18 | `=IF('Stars and Floors'!$A18, IF(CL$1='Stars and Floors'!$C18,1, 0) + IF(CL$1='Stars and Floors'!$D18,1, 0) + IF(CL$1='Stars and Floors'!$E18,1, 0) + IF(CL$1='Stars and Floors'!$F18,1, 0) + IF(CL$1='Stars and Floors'!$G18,1, 0), 0)` |
| CM18 | `=IF('Stars and Floors'!$A18, IF(CM$1='Stars and Floors'!$C18,1, 0) + IF(CM$1='Stars and Floors'!$D18,1, 0) + IF(CM$1='Stars and Floors'!$E18,1, 0) + IF(CM$1='Stars and Floors'!$F18,1, 0) + IF(CM$1='Stars and Floors'!$G18,1, 0), 0)` |
| CN18 | `=IF('Stars and Floors'!$A18, IF(CN$1='Stars and Floors'!$C18,1, 0) + IF(CN$1='Stars and Floors'!$D18,1, 0) + IF(CN$1='Stars and Floors'!$E18,1, 0) + IF(CN$1='Stars and Floors'!$F18,1, 0) + IF(CN$1='Stars and Floors'!$G18,1, 0), 0)` |
| CO18 | `=IF('Stars and Floors'!$A18, IF(CO$1='Stars and Floors'!$C18,1, 0) + IF(CO$1='Stars and Floors'!$D18,1, 0) + IF(CO$1='Stars and Floors'!$E18,1, 0) + IF(CO$1='Stars and Floors'!$F18,1, 0) + IF(CO$1='Stars and Floors'!$G18,1, 0), 0)` |
| CP18 | `=IF('Stars and Floors'!$A18, IF(CP$1='Stars and Floors'!$C18,1, 0) + IF(CP$1='Stars and Floors'!$D18,1, 0) + IF(CP$1='Stars and Floors'!$E18,1, 0) + IF(CP$1='Stars and Floors'!$F18,1, 0) + IF(CP$1='Stars and Floors'!$G18,1, 0), 0)` |
| CQ18 | `=IF('Stars and Floors'!$A18, IF(CQ$1='Stars and Floors'!$C18,1, 0) + IF(CQ$1='Stars and Floors'!$D18,1, 0) + IF(CQ$1='Stars and Floors'!$E18,1, 0) + IF(CQ$1='Stars and Floors'!$F18,1, 0) + IF(CQ$1='Stars and Floors'!$G18,1, 0), 0)` |
| CR18 | `=IF('Stars and Floors'!$A18, IF(CR$1='Stars and Floors'!$C18,1, 0) + IF(CR$1='Stars and Floors'!$D18,1, 0) + IF(CR$1='Stars and Floors'!$E18,1, 0) + IF(CR$1='Stars and Floors'!$F18,1, 0) + IF(CR$1='Stars and Floors'!$G18,1, 0), 0)` |
| CS18 | `=IF('Stars and Floors'!$A18, IF(CS$1='Stars and Floors'!$C18,1, 0) + IF(CS$1='Stars and Floors'!$D18,1, 0) + IF(CS$1='Stars and Floors'!$E18,1, 0) + IF(CS$1='Stars and Floors'!$F18,1, 0) + IF(CS$1='Stars and Floors'!$G18,1, 0), 0)` |
| CT18 | `=IF('Stars and Floors'!$A18, IF(CT$1='Stars and Floors'!$C18,1, 0) + IF(CT$1='Stars and Floors'!$D18,1, 0) + IF(CT$1='Stars and Floors'!$E18,1, 0) + IF(CT$1='Stars and Floors'!$F18,1, 0) + IF(CT$1='Stars and Floors'!$G18,1, 0), 0)` |
| CU18 | `=IF('Stars and Floors'!$A18, IF(CU$1='Stars and Floors'!$C18,1, 0) + IF(CU$1='Stars and Floors'!$D18,1, 0) + IF(CU$1='Stars and Floors'!$E18,1, 0) + IF(CU$1='Stars and Floors'!$F18,1, 0) + IF(CU$1='Stars and Floors'!$G18,1, 0), 0)` |
| CV18 | `=IF('Stars and Floors'!$A18, IF(CV$1='Stars and Floors'!$C18,1, 0) + IF(CV$1='Stars and Floors'!$D18,1, 0) + IF(CV$1='Stars and Floors'!$E18,1, 0) + IF(CV$1='Stars and Floors'!$F18,1, 0) + IF(CV$1='Stars and Floors'!$G18,1, 0), 0)` |
| CW18 | `=IF('Stars and Floors'!$A18, IF(CW$1='Stars and Floors'!$C18,1, 0) + IF(CW$1='Stars and Floors'!$D18,1, 0) + IF(CW$1='Stars and Floors'!$E18,1, 0) + IF(CW$1='Stars and Floors'!$F18,1, 0) + IF(CW$1='Stars and Floors'!$G18,1, 0), 0)` |
| CX18 | `=IF('Stars and Floors'!$A18, IF(CX$1='Stars and Floors'!$C18,1, 0) + IF(CX$1='Stars and Floors'!$D18,1, 0) + IF(CX$1='Stars and Floors'!$E18,1, 0) + IF(CX$1='Stars and Floors'!$F18,1, 0) + IF(CX$1='Stars and Floors'!$G18,1, 0), 0)` |
| CY18 | `=IF('Stars and Floors'!$A18, IF(CY$1='Stars and Floors'!$C18,1, 0) + IF(CY$1='Stars and Floors'!$D18,1, 0) + IF(CY$1='Stars and Floors'!$E18,1, 0) + IF(CY$1='Stars and Floors'!$F18,1, 0) + IF(CY$1='Stars and Floors'!$G18,1, 0), 0)` |
| CZ18 | `=IF('Stars and Floors'!$A18, IF(CZ$1='Stars and Floors'!$C18,1, 0) + IF(CZ$1='Stars and Floors'!$D18,1, 0) + IF(CZ$1='Stars and Floors'!$E18,1, 0) + IF(CZ$1='Stars and Floors'!$F18,1, 0) + IF(CZ$1='Stars and Floors'!$G18,1, 0), 0)` |
| DA18 | `=IF('Stars and Floors'!$A18, IF(DA$1='Stars and Floors'!$C18,1, 0) + IF(DA$1='Stars and Floors'!$D18,1, 0) + IF(DA$1='Stars and Floors'!$E18,1, 0) + IF(DA$1='Stars and Floors'!$F18,1, 0) + IF(DA$1='Stars and Floors'!$G18,1, 0), 0)` |
| DB18 | `=IF('Stars and Floors'!$A18, IF(DB$1='Stars and Floors'!$C18,1, 0) + IF(DB$1='Stars and Floors'!$D18,1, 0) + IF(DB$1='Stars and Floors'!$E18,1, 0) + IF(DB$1='Stars and Floors'!$F18,1, 0) + IF(DB$1='Stars and Floors'!$G18,1, 0), 0)` |
| DC18 | `=IF('Stars and Floors'!$A18, IF(DC$1='Stars and Floors'!$C18,1, 0) + IF(DC$1='Stars and Floors'!$D18,1, 0) + IF(DC$1='Stars and Floors'!$E18,1, 0) + IF(DC$1='Stars and Floors'!$F18,1, 0) + IF(DC$1='Stars and Floors'!$G18,1, 0), 0)` |
| DD18 | `=IF('Stars and Floors'!$A18, IF(DD$1='Stars and Floors'!$C18,1, 0) + IF(DD$1='Stars and Floors'!$D18,1, 0) + IF(DD$1='Stars and Floors'!$E18,1, 0) + IF(DD$1='Stars and Floors'!$F18,1, 0) + IF(DD$1='Stars and Floors'!$G18,1, 0), 0)` |
| DE18 | `=IF('Stars and Floors'!$A18, IF(DE$1='Stars and Floors'!$C18,1, 0) + IF(DE$1='Stars and Floors'!$D18,1, 0) + IF(DE$1='Stars and Floors'!$E18,1, 0) + IF(DE$1='Stars and Floors'!$F18,1, 0) + IF(DE$1='Stars and Floors'!$G18,1, 0), 0)` |
| DF18 | `=IF('Stars and Floors'!$A18, IF(DF$1='Stars and Floors'!$C18,1, 0) + IF(DF$1='Stars and Floors'!$D18,1, 0) + IF(DF$1='Stars and Floors'!$E18,1, 0) + IF(DF$1='Stars and Floors'!$F18,1, 0) + IF(DF$1='Stars and Floors'!$G18,1, 0), 0)` |
| DG18 | `=IF('Stars and Floors'!$A18, IF(DG$1='Stars and Floors'!$C18,1, 0) + IF(DG$1='Stars and Floors'!$D18,1, 0) + IF(DG$1='Stars and Floors'!$E18,1, 0) + IF(DG$1='Stars and Floors'!$F18,1, 0) + IF(DG$1='Stars and Floors'!$G18,1, 0), 0)` |
| DH18 | `=IF('Stars and Floors'!$A18, IF(DH$1='Stars and Floors'!$C18,1, 0) + IF(DH$1='Stars and Floors'!$D18,1, 0) + IF(DH$1='Stars and Floors'!$E18,1, 0) + IF(DH$1='Stars and Floors'!$F18,1, 0) + IF(DH$1='Stars and Floors'!$G18,1, 0), 0)` |
| DI18 | `=IF('Stars and Floors'!$A18, IF(DI$1='Stars and Floors'!$C18,1, 0) + IF(DI$1='Stars and Floors'!$D18,1, 0) + IF(DI$1='Stars and Floors'!$E18,1, 0) + IF(DI$1='Stars and Floors'!$F18,1, 0) + IF(DI$1='Stars and Floors'!$G18,1, 0), 0)` |
| DJ18 | `=IF('Stars and Floors'!$A18, IF(DJ$1='Stars and Floors'!$C18,1, 0) + IF(DJ$1='Stars and Floors'!$D18,1, 0) + IF(DJ$1='Stars and Floors'!$E18,1, 0) + IF(DJ$1='Stars and Floors'!$F18,1, 0) + IF(DJ$1='Stars and Floors'!$G18,1, 0), 0)` |
| DK18 | `=IF('Stars and Floors'!$A18, IF(DK$1='Stars and Floors'!$C18,1, 0) + IF(DK$1='Stars and Floors'!$D18,1, 0) + IF(DK$1='Stars and Floors'!$E18,1, 0) + IF(DK$1='Stars and Floors'!$F18,1, 0) + IF(DK$1='Stars and Floors'!$G18,1, 0), 0)` |
| DL18 | `=IF('Stars and Floors'!$A18, IF(DL$1='Stars and Floors'!$C18,1, 0) + IF(DL$1='Stars and Floors'!$D18,1, 0) + IF(DL$1='Stars and Floors'!$E18,1, 0) + IF(DL$1='Stars and Floors'!$F18,1, 0) + IF(DL$1='Stars and Floors'!$G18,1, 0), 0)` |
| DM18 | `=IF('Stars and Floors'!$A18, IF(DM$1='Stars and Floors'!$C18,1, 0) + IF(DM$1='Stars and Floors'!$D18,1, 0) + IF(DM$1='Stars and Floors'!$E18,1, 0) + IF(DM$1='Stars and Floors'!$F18,1, 0) + IF(DM$1='Stars and Floors'!$G18,1, 0), 0)` |
| DN18 | `=IF('Stars and Floors'!$A18, IF(DN$1='Stars and Floors'!$C18,1, 0) + IF(DN$1='Stars and Floors'!$D18,1, 0) + IF(DN$1='Stars and Floors'!$E18,1, 0) + IF(DN$1='Stars and Floors'!$F18,1, 0) + IF(DN$1='Stars and Floors'!$G18,1, 0), 0)` |
| DO18 | `=IF('Stars and Floors'!$A18, IF(DO$1='Stars and Floors'!$C18,1, 0) + IF(DO$1='Stars and Floors'!$D18,1, 0) + IF(DO$1='Stars and Floors'!$E18,1, 0) + IF(DO$1='Stars and Floors'!$F18,1, 0) + IF(DO$1='Stars and Floors'!$G18,1, 0), 0)` |
| DP18 | `=IF('Stars and Floors'!$A18, IF(DP$1='Stars and Floors'!$C18,1, 0) + IF(DP$1='Stars and Floors'!$D18,1, 0) + IF(DP$1='Stars and Floors'!$E18,1, 0) + IF(DP$1='Stars and Floors'!$F18,1, 0) + IF(DP$1='Stars and Floors'!$G18,1, 0), 0)` |
| DQ18 | `=IF('Stars and Floors'!$A18, IF(DQ$1='Stars and Floors'!$C18,1, 0) + IF(DQ$1='Stars and Floors'!$D18,1, 0) + IF(DQ$1='Stars and Floors'!$E18,1, 0) + IF(DQ$1='Stars and Floors'!$F18,1, 0) + IF(DQ$1='Stars and Floors'!$G18,1, 0), 0)` |
| B19 | `=IF('Stars and Floors'!$A19, IF(B$1='Stars and Floors'!$C19,1, 0) + IF(B$1='Stars and Floors'!$D19,1, 0) + IF(B$1='Stars and Floors'!$E19,1, 0) + IF(B$1='Stars and Floors'!$F19,1, 0) + IF(B$1='Stars and Floors'!$G19,1, 0), 0)` |
| C19 | `=IF('Stars and Floors'!$A19, IF(C$1='Stars and Floors'!$C19,1, 0) + IF(C$1='Stars and Floors'!$D19,1, 0) + IF(C$1='Stars and Floors'!$E19,1, 0) + IF(C$1='Stars and Floors'!$F19,1, 0) + IF(C$1='Stars and Floors'!$G19,1, 0), 0)` |
| D19 | `=IF('Stars and Floors'!$A19, IF(D$1='Stars and Floors'!$C19,1, 0) + IF(D$1='Stars and Floors'!$D19,1, 0) + IF(D$1='Stars and Floors'!$E19,1, 0) + IF(D$1='Stars and Floors'!$F19,1, 0) + IF(D$1='Stars and Floors'!$G19,1, 0), 0)` |
| E19 | `=IF('Stars and Floors'!$A19, IF(E$1='Stars and Floors'!$C19,1, 0) + IF(E$1='Stars and Floors'!$D19,1, 0) + IF(E$1='Stars and Floors'!$E19,1, 0) + IF(E$1='Stars and Floors'!$F19,1, 0) + IF(E$1='Stars and Floors'!$G19,1, 0), 0)` |
| F19 | `=IF('Stars and Floors'!$A19, IF(F$1='Stars and Floors'!$C19,1, 0) + IF(F$1='Stars and Floors'!$D19,1, 0) + IF(F$1='Stars and Floors'!$E19,1, 0) + IF(F$1='Stars and Floors'!$F19,1, 0) + IF(F$1='Stars and Floors'!$G19,1, 0), 0)` |
| G19 | `=IF('Stars and Floors'!$A19, IF(G$1='Stars and Floors'!$C19,1, 0) + IF(G$1='Stars and Floors'!$D19,1, 0) + IF(G$1='Stars and Floors'!$E19,1, 0) + IF(G$1='Stars and Floors'!$F19,1, 0) + IF(G$1='Stars and Floors'!$G19,1, 0), 0)` |
| H19 | `=IF('Stars and Floors'!$A19, IF(H$1='Stars and Floors'!$C19,1, 0) + IF(H$1='Stars and Floors'!$D19,1, 0) + IF(H$1='Stars and Floors'!$E19,1, 0) + IF(H$1='Stars and Floors'!$F19,1, 0) + IF(H$1='Stars and Floors'!$G19,1, 0), 0)` |
| I19 | `=IF('Stars and Floors'!$A19, IF(I$1='Stars and Floors'!$C19,1, 0) + IF(I$1='Stars and Floors'!$D19,1, 0) + IF(I$1='Stars and Floors'!$E19,1, 0) + IF(I$1='Stars and Floors'!$F19,1, 0) + IF(I$1='Stars and Floors'!$G19,1, 0), 0)` |
| J19 | `=IF('Stars and Floors'!$A19, IF(J$1='Stars and Floors'!$C19,1, 0) + IF(J$1='Stars and Floors'!$D19,1, 0) + IF(J$1='Stars and Floors'!$E19,1, 0) + IF(J$1='Stars and Floors'!$F19,1, 0) + IF(J$1='Stars and Floors'!$G19,1, 0), 0)` |
| K19 | `=IF('Stars and Floors'!$A19, IF(K$1='Stars and Floors'!$C19,1, 0) + IF(K$1='Stars and Floors'!$D19,1, 0) + IF(K$1='Stars and Floors'!$E19,1, 0) + IF(K$1='Stars and Floors'!$F19,1, 0) + IF(K$1='Stars and Floors'!$G19,1, 0), 0)` |
| L19 | `=IF('Stars and Floors'!$A19, IF(L$1='Stars and Floors'!$C19,1, 0) + IF(L$1='Stars and Floors'!$D19,1, 0) + IF(L$1='Stars and Floors'!$E19,1, 0) + IF(L$1='Stars and Floors'!$F19,1, 0) + IF(L$1='Stars and Floors'!$G19,1, 0), 0)` |
| M19 | `=IF('Stars and Floors'!$A19, IF(M$1='Stars and Floors'!$C19,1, 0) + IF(M$1='Stars and Floors'!$D19,1, 0) + IF(M$1='Stars and Floors'!$E19,1, 0) + IF(M$1='Stars and Floors'!$F19,1, 0) + IF(M$1='Stars and Floors'!$G19,1, 0), 0)` |
| N19 | `=IF('Stars and Floors'!$A19, IF(N$1='Stars and Floors'!$C19,1, 0) + IF(N$1='Stars and Floors'!$D19,1, 0) + IF(N$1='Stars and Floors'!$E19,1, 0) + IF(N$1='Stars and Floors'!$F19,1, 0) + IF(N$1='Stars and Floors'!$G19,1, 0), 0)` |
| O19 | `=IF('Stars and Floors'!$A19, IF(O$1='Stars and Floors'!$C19,1, 0) + IF(O$1='Stars and Floors'!$D19,1, 0) + IF(O$1='Stars and Floors'!$E19,1, 0) + IF(O$1='Stars and Floors'!$F19,1, 0) + IF(O$1='Stars and Floors'!$G19,1, 0), 0)` |
| P19 | `=IF('Stars and Floors'!$A19, IF(P$1='Stars and Floors'!$C19,1, 0) + IF(P$1='Stars and Floors'!$D19,1, 0) + IF(P$1='Stars and Floors'!$E19,1, 0) + IF(P$1='Stars and Floors'!$F19,1, 0) + IF(P$1='Stars and Floors'!$G19,1, 0), 0)` |
| Q19 | `=IF('Stars and Floors'!$A19, IF(Q$1='Stars and Floors'!$C19,1, 0) + IF(Q$1='Stars and Floors'!$D19,1, 0) + IF(Q$1='Stars and Floors'!$E19,1, 0) + IF(Q$1='Stars and Floors'!$F19,1, 0) + IF(Q$1='Stars and Floors'!$G19,1, 0), 0)` |
| R19 | `=IF('Stars and Floors'!$A19, IF(R$1='Stars and Floors'!$C19,1, 0) + IF(R$1='Stars and Floors'!$D19,1, 0) + IF(R$1='Stars and Floors'!$E19,1, 0) + IF(R$1='Stars and Floors'!$F19,1, 0) + IF(R$1='Stars and Floors'!$G19,1, 0), 0)` |
| S19 | `=IF('Stars and Floors'!$A19, IF(S$1='Stars and Floors'!$C19,1, 0) + IF(S$1='Stars and Floors'!$D19,1, 0) + IF(S$1='Stars and Floors'!$E19,1, 0) + IF(S$1='Stars and Floors'!$F19,1, 0) + IF(S$1='Stars and Floors'!$G19,1, 0), 0)` |
| T19 | `=IF('Stars and Floors'!$A19, IF(T$1='Stars and Floors'!$C19,1, 0) + IF(T$1='Stars and Floors'!$D19,1, 0) + IF(T$1='Stars and Floors'!$E19,1, 0) + IF(T$1='Stars and Floors'!$F19,1, 0) + IF(T$1='Stars and Floors'!$G19,1, 0), 0)` |
| U19 | `=IF('Stars and Floors'!$A19, IF(U$1='Stars and Floors'!$C19,1, 0) + IF(U$1='Stars and Floors'!$D19,1, 0) + IF(U$1='Stars and Floors'!$E19,1, 0) + IF(U$1='Stars and Floors'!$F19,1, 0) + IF(U$1='Stars and Floors'!$G19,1, 0), 0)` |
| V19 | `=IF('Stars and Floors'!$A19, IF(V$1='Stars and Floors'!$C19,1, 0) + IF(V$1='Stars and Floors'!$D19,1, 0) + IF(V$1='Stars and Floors'!$E19,1, 0) + IF(V$1='Stars and Floors'!$F19,1, 0) + IF(V$1='Stars and Floors'!$G19,1, 0), 0)` |
| W19 | `=IF('Stars and Floors'!$A19, IF(W$1='Stars and Floors'!$C19,1, 0) + IF(W$1='Stars and Floors'!$D19,1, 0) + IF(W$1='Stars and Floors'!$E19,1, 0) + IF(W$1='Stars and Floors'!$F19,1, 0) + IF(W$1='Stars and Floors'!$G19,1, 0), 0)` |
| X19 | `=IF('Stars and Floors'!$A19, IF(X$1='Stars and Floors'!$C19,1, 0) + IF(X$1='Stars and Floors'!$D19,1, 0) + IF(X$1='Stars and Floors'!$E19,1, 0) + IF(X$1='Stars and Floors'!$F19,1, 0) + IF(X$1='Stars and Floors'!$G19,1, 0), 0)` |
| Y19 | `=IF('Stars and Floors'!$A19, IF(Y$1='Stars and Floors'!$C19,1, 0) + IF(Y$1='Stars and Floors'!$D19,1, 0) + IF(Y$1='Stars and Floors'!$E19,1, 0) + IF(Y$1='Stars and Floors'!$F19,1, 0) + IF(Y$1='Stars and Floors'!$G19,1, 0), 0)` |
| Z19 | `=IF('Stars and Floors'!$A19, IF(Z$1='Stars and Floors'!$C19,1, 0) + IF(Z$1='Stars and Floors'!$D19,1, 0) + IF(Z$1='Stars and Floors'!$E19,1, 0) + IF(Z$1='Stars and Floors'!$F19,1, 0) + IF(Z$1='Stars and Floors'!$G19,1, 0), 0)` |
| AA19 | `=IF('Stars and Floors'!$A19, IF(AA$1='Stars and Floors'!$C19,1, 0) + IF(AA$1='Stars and Floors'!$D19,1, 0) + IF(AA$1='Stars and Floors'!$E19,1, 0) + IF(AA$1='Stars and Floors'!$F19,1, 0) + IF(AA$1='Stars and Floors'!$G19,1, 0), 0)` |
| AB19 | `=IF('Stars and Floors'!$A19, IF(AB$1='Stars and Floors'!$C19,1, 0) + IF(AB$1='Stars and Floors'!$D19,1, 0) + IF(AB$1='Stars and Floors'!$E19,1, 0) + IF(AB$1='Stars and Floors'!$F19,1, 0) + IF(AB$1='Stars and Floors'!$G19,1, 0), 0)` |
| AC19 | `=IF('Stars and Floors'!$A19, IF(AC$1='Stars and Floors'!$C19,1, 0) + IF(AC$1='Stars and Floors'!$D19,1, 0) + IF(AC$1='Stars and Floors'!$E19,1, 0) + IF(AC$1='Stars and Floors'!$F19,1, 0) + IF(AC$1='Stars and Floors'!$G19,1, 0), 0)` |
| AD19 | `=IF('Stars and Floors'!$A19, IF(AD$1='Stars and Floors'!$C19,1, 0) + IF(AD$1='Stars and Floors'!$D19,1, 0) + IF(AD$1='Stars and Floors'!$E19,1, 0) + IF(AD$1='Stars and Floors'!$F19,1, 0) + IF(AD$1='Stars and Floors'!$G19,1, 0), 0)` |
| AE19 | `=IF('Stars and Floors'!$A19, IF(AE$1='Stars and Floors'!$C19,1, 0) + IF(AE$1='Stars and Floors'!$D19,1, 0) + IF(AE$1='Stars and Floors'!$E19,1, 0) + IF(AE$1='Stars and Floors'!$F19,1, 0) + IF(AE$1='Stars and Floors'!$G19,1, 0), 0)` |
| AF19 | `=IF('Stars and Floors'!$A19, IF(AF$1='Stars and Floors'!$C19,1, 0) + IF(AF$1='Stars and Floors'!$D19,1, 0) + IF(AF$1='Stars and Floors'!$E19,1, 0) + IF(AF$1='Stars and Floors'!$F19,1, 0) + IF(AF$1='Stars and Floors'!$G19,1, 0), 0)` |
| AG19 | `=IF('Stars and Floors'!$A19, IF(AG$1='Stars and Floors'!$C19,1, 0) + IF(AG$1='Stars and Floors'!$D19,1, 0) + IF(AG$1='Stars and Floors'!$E19,1, 0) + IF(AG$1='Stars and Floors'!$F19,1, 0) + IF(AG$1='Stars and Floors'!$G19,1, 0), 0)` |
| AH19 | `=IF('Stars and Floors'!$A19, IF(AH$1='Stars and Floors'!$C19,1, 0) + IF(AH$1='Stars and Floors'!$D19,1, 0) + IF(AH$1='Stars and Floors'!$E19,1, 0) + IF(AH$1='Stars and Floors'!$F19,1, 0) + IF(AH$1='Stars and Floors'!$G19,1, 0), 0)` |
| AI19 | `=IF('Stars and Floors'!$A19, IF(AI$1='Stars and Floors'!$C19,1, 0) + IF(AI$1='Stars and Floors'!$D19,1, 0) + IF(AI$1='Stars and Floors'!$E19,1, 0) + IF(AI$1='Stars and Floors'!$F19,1, 0) + IF(AI$1='Stars and Floors'!$G19,1, 0), 0)` |
| AJ19 | `=IF('Stars and Floors'!$A19, IF(AJ$1='Stars and Floors'!$C19,1, 0) + IF(AJ$1='Stars and Floors'!$D19,1, 0) + IF(AJ$1='Stars and Floors'!$E19,1, 0) + IF(AJ$1='Stars and Floors'!$F19,1, 0) + IF(AJ$1='Stars and Floors'!$G19,1, 0), 0)` |
| AK19 | `=IF('Stars and Floors'!$A19, IF(AK$1='Stars and Floors'!$C19,1, 0) + IF(AK$1='Stars and Floors'!$D19,1, 0) + IF(AK$1='Stars and Floors'!$E19,1, 0) + IF(AK$1='Stars and Floors'!$F19,1, 0) + IF(AK$1='Stars and Floors'!$G19,1, 0), 0)` |
| AL19 | `=IF('Stars and Floors'!$A19, IF(AL$1='Stars and Floors'!$C19,1, 0) + IF(AL$1='Stars and Floors'!$D19,1, 0) + IF(AL$1='Stars and Floors'!$E19,1, 0) + IF(AL$1='Stars and Floors'!$F19,1, 0) + IF(AL$1='Stars and Floors'!$G19,1, 0), 0)` |
| AM19 | `=IF('Stars and Floors'!$A19, IF(AM$1='Stars and Floors'!$C19,1, 0) + IF(AM$1='Stars and Floors'!$D19,1, 0) + IF(AM$1='Stars and Floors'!$E19,1, 0) + IF(AM$1='Stars and Floors'!$F19,1, 0) + IF(AM$1='Stars and Floors'!$G19,1, 0), 0)` |
| AN19 | `=IF('Stars and Floors'!$A19, IF(AN$1='Stars and Floors'!$C19,1, 0) + IF(AN$1='Stars and Floors'!$D19,1, 0) + IF(AN$1='Stars and Floors'!$E19,1, 0) + IF(AN$1='Stars and Floors'!$F19,1, 0) + IF(AN$1='Stars and Floors'!$G19,1, 0), 0)` |
| AO19 | `=IF('Stars and Floors'!$A19, IF(AO$1='Stars and Floors'!$C19,1, 0) + IF(AO$1='Stars and Floors'!$D19,1, 0) + IF(AO$1='Stars and Floors'!$E19,1, 0) + IF(AO$1='Stars and Floors'!$F19,1, 0) + IF(AO$1='Stars and Floors'!$G19,1, 0), 0)` |
| AP19 | `=IF('Stars and Floors'!$A19, IF(AP$1='Stars and Floors'!$C19,1, 0) + IF(AP$1='Stars and Floors'!$D19,1, 0) + IF(AP$1='Stars and Floors'!$E19,1, 0) + IF(AP$1='Stars and Floors'!$F19,1, 0) + IF(AP$1='Stars and Floors'!$G19,1, 0), 0)` |
| AQ19 | `=IF('Stars and Floors'!$A19, IF(AQ$1='Stars and Floors'!$C19,1, 0) + IF(AQ$1='Stars and Floors'!$D19,1, 0) + IF(AQ$1='Stars and Floors'!$E19,1, 0) + IF(AQ$1='Stars and Floors'!$F19,1, 0) + IF(AQ$1='Stars and Floors'!$G19,1, 0), 0)` |
| AR19 | `=IF('Stars and Floors'!$A19, IF(AR$1='Stars and Floors'!$C19,1, 0) + IF(AR$1='Stars and Floors'!$D19,1, 0) + IF(AR$1='Stars and Floors'!$E19,1, 0) + IF(AR$1='Stars and Floors'!$F19,1, 0) + IF(AR$1='Stars and Floors'!$G19,1, 0), 0)` |
| AS19 | `=IF('Stars and Floors'!$A19, IF(AS$1='Stars and Floors'!$C19,1, 0) + IF(AS$1='Stars and Floors'!$D19,1, 0) + IF(AS$1='Stars and Floors'!$E19,1, 0) + IF(AS$1='Stars and Floors'!$F19,1, 0) + IF(AS$1='Stars and Floors'!$G19,1, 0), 0)` |
| AT19 | `=IF('Stars and Floors'!$A19, IF(AT$1='Stars and Floors'!$C19,1, 0) + IF(AT$1='Stars and Floors'!$D19,1, 0) + IF(AT$1='Stars and Floors'!$E19,1, 0) + IF(AT$1='Stars and Floors'!$F19,1, 0) + IF(AT$1='Stars and Floors'!$G19,1, 0), 0)` |
| AU19 | `=IF('Stars and Floors'!$A19, IF(AU$1='Stars and Floors'!$C19,1, 0) + IF(AU$1='Stars and Floors'!$D19,1, 0) + IF(AU$1='Stars and Floors'!$E19,1, 0) + IF(AU$1='Stars and Floors'!$F19,1, 0) + IF(AU$1='Stars and Floors'!$G19,1, 0), 0)` |
| AV19 | `=IF('Stars and Floors'!$A19, IF(AV$1='Stars and Floors'!$C19,1, 0) + IF(AV$1='Stars and Floors'!$D19,1, 0) + IF(AV$1='Stars and Floors'!$E19,1, 0) + IF(AV$1='Stars and Floors'!$F19,1, 0) + IF(AV$1='Stars and Floors'!$G19,1, 0), 0)` |
| AW19 | `=IF('Stars and Floors'!$A19, IF(AW$1='Stars and Floors'!$C19,1, 0) + IF(AW$1='Stars and Floors'!$D19,1, 0) + IF(AW$1='Stars and Floors'!$E19,1, 0) + IF(AW$1='Stars and Floors'!$F19,1, 0) + IF(AW$1='Stars and Floors'!$G19,1, 0), 0)` |
| AX19 | `=IF('Stars and Floors'!$A19, IF(AX$1='Stars and Floors'!$C19,1, 0) + IF(AX$1='Stars and Floors'!$D19,1, 0) + IF(AX$1='Stars and Floors'!$E19,1, 0) + IF(AX$1='Stars and Floors'!$F19,1, 0) + IF(AX$1='Stars and Floors'!$G19,1, 0), 0)` |
| AY19 | `=IF('Stars and Floors'!$A19, IF(AY$1='Stars and Floors'!$C19,1, 0) + IF(AY$1='Stars and Floors'!$D19,1, 0) + IF(AY$1='Stars and Floors'!$E19,1, 0) + IF(AY$1='Stars and Floors'!$F19,1, 0) + IF(AY$1='Stars and Floors'!$G19,1, 0), 0)` |
| AZ19 | `=IF('Stars and Floors'!$A19, IF(AZ$1='Stars and Floors'!$C19,1, 0) + IF(AZ$1='Stars and Floors'!$D19,1, 0) + IF(AZ$1='Stars and Floors'!$E19,1, 0) + IF(AZ$1='Stars and Floors'!$F19,1, 0) + IF(AZ$1='Stars and Floors'!$G19,1, 0), 0)` |
| BA19 | `=IF('Stars and Floors'!$A19, IF(BA$1='Stars and Floors'!$C19,1, 0) + IF(BA$1='Stars and Floors'!$D19,1, 0) + IF(BA$1='Stars and Floors'!$E19,1, 0) + IF(BA$1='Stars and Floors'!$F19,1, 0) + IF(BA$1='Stars and Floors'!$G19,1, 0), 0)` |
| BB19 | `=IF('Stars and Floors'!$A19, IF(BB$1='Stars and Floors'!$C19,1, 0) + IF(BB$1='Stars and Floors'!$D19,1, 0) + IF(BB$1='Stars and Floors'!$E19,1, 0) + IF(BB$1='Stars and Floors'!$F19,1, 0) + IF(BB$1='Stars and Floors'!$G19,1, 0), 0)` |
| BC19 | `=IF('Stars and Floors'!$A19, IF(BC$1='Stars and Floors'!$C19,1, 0) + IF(BC$1='Stars and Floors'!$D19,1, 0) + IF(BC$1='Stars and Floors'!$E19,1, 0) + IF(BC$1='Stars and Floors'!$F19,1, 0) + IF(BC$1='Stars and Floors'!$G19,1, 0), 0)` |
| BD19 | `=IF('Stars and Floors'!$A19, IF(BD$1='Stars and Floors'!$C19,1, 0) + IF(BD$1='Stars and Floors'!$D19,1, 0) + IF(BD$1='Stars and Floors'!$E19,1, 0) + IF(BD$1='Stars and Floors'!$F19,1, 0) + IF(BD$1='Stars and Floors'!$G19,1, 0), 0)` |
| BE19 | `=IF('Stars and Floors'!$A19, IF(BE$1='Stars and Floors'!$C19,1, 0) + IF(BE$1='Stars and Floors'!$D19,1, 0) + IF(BE$1='Stars and Floors'!$E19,1, 0) + IF(BE$1='Stars and Floors'!$F19,1, 0) + IF(BE$1='Stars and Floors'!$G19,1, 0), 0)` |
| BF19 | `=IF('Stars and Floors'!$A19, IF(BF$1='Stars and Floors'!$C19,1, 0) + IF(BF$1='Stars and Floors'!$D19,1, 0) + IF(BF$1='Stars and Floors'!$E19,1, 0) + IF(BF$1='Stars and Floors'!$F19,1, 0) + IF(BF$1='Stars and Floors'!$G19,1, 0), 0)` |
| BG19 | `=IF('Stars and Floors'!$A19, IF(BG$1='Stars and Floors'!$C19,1, 0) + IF(BG$1='Stars and Floors'!$D19,1, 0) + IF(BG$1='Stars and Floors'!$E19,1, 0) + IF(BG$1='Stars and Floors'!$F19,1, 0) + IF(BG$1='Stars and Floors'!$G19,1, 0), 0)` |
| BH19 | `=IF('Stars and Floors'!$A19, IF(BH$1='Stars and Floors'!$C19,1, 0) + IF(BH$1='Stars and Floors'!$D19,1, 0) + IF(BH$1='Stars and Floors'!$E19,1, 0) + IF(BH$1='Stars and Floors'!$F19,1, 0) + IF(BH$1='Stars and Floors'!$G19,1, 0), 0)` |
| BI19 | `=IF('Stars and Floors'!$A19, IF(BI$1='Stars and Floors'!$C19,1, 0) + IF(BI$1='Stars and Floors'!$D19,1, 0) + IF(BI$1='Stars and Floors'!$E19,1, 0) + IF(BI$1='Stars and Floors'!$F19,1, 0) + IF(BI$1='Stars and Floors'!$G19,1, 0), 0)` |
| BJ19 | `=IF('Stars and Floors'!$A19, IF(BJ$1='Stars and Floors'!$C19,1, 0) + IF(BJ$1='Stars and Floors'!$D19,1, 0) + IF(BJ$1='Stars and Floors'!$E19,1, 0) + IF(BJ$1='Stars and Floors'!$F19,1, 0) + IF(BJ$1='Stars and Floors'!$G19,1, 0), 0)` |
| BK19 | `=IF('Stars and Floors'!$A19, IF(BK$1='Stars and Floors'!$C19,1, 0) + IF(BK$1='Stars and Floors'!$D19,1, 0) + IF(BK$1='Stars and Floors'!$E19,1, 0) + IF(BK$1='Stars and Floors'!$F19,1, 0) + IF(BK$1='Stars and Floors'!$G19,1, 0), 0)` |
| BL19 | `=IF('Stars and Floors'!$A19, IF(BL$1='Stars and Floors'!$C19,1, 0) + IF(BL$1='Stars and Floors'!$D19,1, 0) + IF(BL$1='Stars and Floors'!$E19,1, 0) + IF(BL$1='Stars and Floors'!$F19,1, 0) + IF(BL$1='Stars and Floors'!$G19,1, 0), 0)` |
| BM19 | `=IF('Stars and Floors'!$A19, IF(BM$1='Stars and Floors'!$C19,1, 0) + IF(BM$1='Stars and Floors'!$D19,1, 0) + IF(BM$1='Stars and Floors'!$E19,1, 0) + IF(BM$1='Stars and Floors'!$F19,1, 0) + IF(BM$1='Stars and Floors'!$G19,1, 0), 0)` |
| BN19 | `=IF('Stars and Floors'!$A19, IF(BN$1='Stars and Floors'!$C19,1, 0) + IF(BN$1='Stars and Floors'!$D19,1, 0) + IF(BN$1='Stars and Floors'!$E19,1, 0) + IF(BN$1='Stars and Floors'!$F19,1, 0) + IF(BN$1='Stars and Floors'!$G19,1, 0), 0)` |
| BO19 | `=IF('Stars and Floors'!$A19, IF(BO$1='Stars and Floors'!$C19,1, 0) + IF(BO$1='Stars and Floors'!$D19,1, 0) + IF(BO$1='Stars and Floors'!$E19,1, 0) + IF(BO$1='Stars and Floors'!$F19,1, 0) + IF(BO$1='Stars and Floors'!$G19,1, 0), 0)` |
| BP19 | `=IF('Stars and Floors'!$A19, IF(BP$1='Stars and Floors'!$C19,1, 0) + IF(BP$1='Stars and Floors'!$D19,1, 0) + IF(BP$1='Stars and Floors'!$E19,1, 0) + IF(BP$1='Stars and Floors'!$F19,1, 0) + IF(BP$1='Stars and Floors'!$G19,1, 0), 0)` |
| BQ19 | `=IF('Stars and Floors'!$A19, IF(BQ$1='Stars and Floors'!$C19,1, 0) + IF(BQ$1='Stars and Floors'!$D19,1, 0) + IF(BQ$1='Stars and Floors'!$E19,1, 0) + IF(BQ$1='Stars and Floors'!$F19,1, 0) + IF(BQ$1='Stars and Floors'!$G19,1, 0), 0)` |
| BR19 | `=IF('Stars and Floors'!$A19, IF(BR$1='Stars and Floors'!$C19,1, 0) + IF(BR$1='Stars and Floors'!$D19,1, 0) + IF(BR$1='Stars and Floors'!$E19,1, 0) + IF(BR$1='Stars and Floors'!$F19,1, 0) + IF(BR$1='Stars and Floors'!$G19,1, 0), 0)` |
| BS19 | `=IF('Stars and Floors'!$A19, IF(BS$1='Stars and Floors'!$C19,1, 0) + IF(BS$1='Stars and Floors'!$D19,1, 0) + IF(BS$1='Stars and Floors'!$E19,1, 0) + IF(BS$1='Stars and Floors'!$F19,1, 0) + IF(BS$1='Stars and Floors'!$G19,1, 0), 0)` |
| BT19 | `=IF('Stars and Floors'!$A19, IF(BT$1='Stars and Floors'!$C19,1, 0) + IF(BT$1='Stars and Floors'!$D19,1, 0) + IF(BT$1='Stars and Floors'!$E19,1, 0) + IF(BT$1='Stars and Floors'!$F19,1, 0) + IF(BT$1='Stars and Floors'!$G19,1, 0), 0)` |
| BU19 | `=IF('Stars and Floors'!$A19, IF(BU$1='Stars and Floors'!$C19,1, 0) + IF(BU$1='Stars and Floors'!$D19,1, 0) + IF(BU$1='Stars and Floors'!$E19,1, 0) + IF(BU$1='Stars and Floors'!$F19,1, 0) + IF(BU$1='Stars and Floors'!$G19,1, 0), 0)` |
| BV19 | `=IF('Stars and Floors'!$A19, IF(BV$1='Stars and Floors'!$C19,1, 0) + IF(BV$1='Stars and Floors'!$D19,1, 0) + IF(BV$1='Stars and Floors'!$E19,1, 0) + IF(BV$1='Stars and Floors'!$F19,1, 0) + IF(BV$1='Stars and Floors'!$G19,1, 0), 0)` |
| BW19 | `=IF('Stars and Floors'!$A19, IF(BW$1='Stars and Floors'!$C19,1, 0) + IF(BW$1='Stars and Floors'!$D19,1, 0) + IF(BW$1='Stars and Floors'!$E19,1, 0) + IF(BW$1='Stars and Floors'!$F19,1, 0) + IF(BW$1='Stars and Floors'!$G19,1, 0), 0)` |
| BX19 | `=IF('Stars and Floors'!$A19, IF(BX$1='Stars and Floors'!$C19,1, 0) + IF(BX$1='Stars and Floors'!$D19,1, 0) + IF(BX$1='Stars and Floors'!$E19,1, 0) + IF(BX$1='Stars and Floors'!$F19,1, 0) + IF(BX$1='Stars and Floors'!$G19,1, 0), 0)` |
| BY19 | `=IF('Stars and Floors'!$A19, IF(BY$1='Stars and Floors'!$C19,1, 0) + IF(BY$1='Stars and Floors'!$D19,1, 0) + IF(BY$1='Stars and Floors'!$E19,1, 0) + IF(BY$1='Stars and Floors'!$F19,1, 0) + IF(BY$1='Stars and Floors'!$G19,1, 0), 0)` |
| BZ19 | `=IF('Stars and Floors'!$A19, IF(BZ$1='Stars and Floors'!$C19,1, 0) + IF(BZ$1='Stars and Floors'!$D19,1, 0) + IF(BZ$1='Stars and Floors'!$E19,1, 0) + IF(BZ$1='Stars and Floors'!$F19,1, 0) + IF(BZ$1='Stars and Floors'!$G19,1, 0), 0)` |
| CA19 | `=IF('Stars and Floors'!$A19, IF(CA$1='Stars and Floors'!$C19,1, 0) + IF(CA$1='Stars and Floors'!$D19,1, 0) + IF(CA$1='Stars and Floors'!$E19,1, 0) + IF(CA$1='Stars and Floors'!$F19,1, 0) + IF(CA$1='Stars and Floors'!$G19,1, 0), 0)` |
| CB19 | `=IF('Stars and Floors'!$A19, IF(CB$1='Stars and Floors'!$C19,1, 0) + IF(CB$1='Stars and Floors'!$D19,1, 0) + IF(CB$1='Stars and Floors'!$E19,1, 0) + IF(CB$1='Stars and Floors'!$F19,1, 0) + IF(CB$1='Stars and Floors'!$G19,1, 0), 0)` |
| CC19 | `=IF('Stars and Floors'!$A19, IF(CC$1='Stars and Floors'!$C19,1, 0) + IF(CC$1='Stars and Floors'!$D19,1, 0) + IF(CC$1='Stars and Floors'!$E19,1, 0) + IF(CC$1='Stars and Floors'!$F19,1, 0) + IF(CC$1='Stars and Floors'!$G19,1, 0), 0)` |
| CD19 | `=IF('Stars and Floors'!$A19, IF(CD$1='Stars and Floors'!$C19,1, 0) + IF(CD$1='Stars and Floors'!$D19,1, 0) + IF(CD$1='Stars and Floors'!$E19,1, 0) + IF(CD$1='Stars and Floors'!$F19,1, 0) + IF(CD$1='Stars and Floors'!$G19,1, 0), 0)` |
| CE19 | `=IF('Stars and Floors'!$A19, IF(CE$1='Stars and Floors'!$C19,1, 0) + IF(CE$1='Stars and Floors'!$D19,1, 0) + IF(CE$1='Stars and Floors'!$E19,1, 0) + IF(CE$1='Stars and Floors'!$F19,1, 0) + IF(CE$1='Stars and Floors'!$G19,1, 0), 0)` |
| CF19 | `=IF('Stars and Floors'!$A19, IF(CF$1='Stars and Floors'!$C19,1, 0) + IF(CF$1='Stars and Floors'!$D19,1, 0) + IF(CF$1='Stars and Floors'!$E19,1, 0) + IF(CF$1='Stars and Floors'!$F19,1, 0) + IF(CF$1='Stars and Floors'!$G19,1, 0), 0)` |
| CG19 | `=IF('Stars and Floors'!$A19, IF(CG$1='Stars and Floors'!$C19,1, 0) + IF(CG$1='Stars and Floors'!$D19,1, 0) + IF(CG$1='Stars and Floors'!$E19,1, 0) + IF(CG$1='Stars and Floors'!$F19,1, 0) + IF(CG$1='Stars and Floors'!$G19,1, 0), 0)` |
| CH19 | `=IF('Stars and Floors'!$A19, IF(CH$1='Stars and Floors'!$C19,1, 0) + IF(CH$1='Stars and Floors'!$D19,1, 0) + IF(CH$1='Stars and Floors'!$E19,1, 0) + IF(CH$1='Stars and Floors'!$F19,1, 0) + IF(CH$1='Stars and Floors'!$G19,1, 0), 0)` |
| CI19 | `=IF('Stars and Floors'!$A19, IF(CI$1='Stars and Floors'!$C19,1, 0) + IF(CI$1='Stars and Floors'!$D19,1, 0) + IF(CI$1='Stars and Floors'!$E19,1, 0) + IF(CI$1='Stars and Floors'!$F19,1, 0) + IF(CI$1='Stars and Floors'!$G19,1, 0), 0)` |
| CJ19 | `=IF('Stars and Floors'!$A19, IF(CJ$1='Stars and Floors'!$C19,1, 0) + IF(CJ$1='Stars and Floors'!$D19,1, 0) + IF(CJ$1='Stars and Floors'!$E19,1, 0) + IF(CJ$1='Stars and Floors'!$F19,1, 0) + IF(CJ$1='Stars and Floors'!$G19,1, 0), 0)` |
| CK19 | `=IF('Stars and Floors'!$A19, IF(CK$1='Stars and Floors'!$C19,1, 0) + IF(CK$1='Stars and Floors'!$D19,1, 0) + IF(CK$1='Stars and Floors'!$E19,1, 0) + IF(CK$1='Stars and Floors'!$F19,1, 0) + IF(CK$1='Stars and Floors'!$G19,1, 0), 0)` |
| CL19 | `=IF('Stars and Floors'!$A19, IF(CL$1='Stars and Floors'!$C19,1, 0) + IF(CL$1='Stars and Floors'!$D19,1, 0) + IF(CL$1='Stars and Floors'!$E19,1, 0) + IF(CL$1='Stars and Floors'!$F19,1, 0) + IF(CL$1='Stars and Floors'!$G19,1, 0), 0)` |
| CM19 | `=IF('Stars and Floors'!$A19, IF(CM$1='Stars and Floors'!$C19,1, 0) + IF(CM$1='Stars and Floors'!$D19,1, 0) + IF(CM$1='Stars and Floors'!$E19,1, 0) + IF(CM$1='Stars and Floors'!$F19,1, 0) + IF(CM$1='Stars and Floors'!$G19,1, 0), 0)` |
| CN19 | `=IF('Stars and Floors'!$A19, IF(CN$1='Stars and Floors'!$C19,1, 0) + IF(CN$1='Stars and Floors'!$D19,1, 0) + IF(CN$1='Stars and Floors'!$E19,1, 0) + IF(CN$1='Stars and Floors'!$F19,1, 0) + IF(CN$1='Stars and Floors'!$G19,1, 0), 0)` |
| CO19 | `=IF('Stars and Floors'!$A19, IF(CO$1='Stars and Floors'!$C19,1, 0) + IF(CO$1='Stars and Floors'!$D19,1, 0) + IF(CO$1='Stars and Floors'!$E19,1, 0) + IF(CO$1='Stars and Floors'!$F19,1, 0) + IF(CO$1='Stars and Floors'!$G19,1, 0), 0)` |
| CP19 | `=IF('Stars and Floors'!$A19, IF(CP$1='Stars and Floors'!$C19,1, 0) + IF(CP$1='Stars and Floors'!$D19,1, 0) + IF(CP$1='Stars and Floors'!$E19,1, 0) + IF(CP$1='Stars and Floors'!$F19,1, 0) + IF(CP$1='Stars and Floors'!$G19,1, 0), 0)` |
| CQ19 | `=IF('Stars and Floors'!$A19, IF(CQ$1='Stars and Floors'!$C19,1, 0) + IF(CQ$1='Stars and Floors'!$D19,1, 0) + IF(CQ$1='Stars and Floors'!$E19,1, 0) + IF(CQ$1='Stars and Floors'!$F19,1, 0) + IF(CQ$1='Stars and Floors'!$G19,1, 0), 0)` |
| CR19 | `=IF('Stars and Floors'!$A19, IF(CR$1='Stars and Floors'!$C19,1, 0) + IF(CR$1='Stars and Floors'!$D19,1, 0) + IF(CR$1='Stars and Floors'!$E19,1, 0) + IF(CR$1='Stars and Floors'!$F19,1, 0) + IF(CR$1='Stars and Floors'!$G19,1, 0), 0)` |
| CS19 | `=IF('Stars and Floors'!$A19, IF(CS$1='Stars and Floors'!$C19,1, 0) + IF(CS$1='Stars and Floors'!$D19,1, 0) + IF(CS$1='Stars and Floors'!$E19,1, 0) + IF(CS$1='Stars and Floors'!$F19,1, 0) + IF(CS$1='Stars and Floors'!$G19,1, 0), 0)` |
| CT19 | `=IF('Stars and Floors'!$A19, IF(CT$1='Stars and Floors'!$C19,1, 0) + IF(CT$1='Stars and Floors'!$D19,1, 0) + IF(CT$1='Stars and Floors'!$E19,1, 0) + IF(CT$1='Stars and Floors'!$F19,1, 0) + IF(CT$1='Stars and Floors'!$G19,1, 0), 0)` |
| CU19 | `=IF('Stars and Floors'!$A19, IF(CU$1='Stars and Floors'!$C19,1, 0) + IF(CU$1='Stars and Floors'!$D19,1, 0) + IF(CU$1='Stars and Floors'!$E19,1, 0) + IF(CU$1='Stars and Floors'!$F19,1, 0) + IF(CU$1='Stars and Floors'!$G19,1, 0), 0)` |
| CV19 | `=IF('Stars and Floors'!$A19, IF(CV$1='Stars and Floors'!$C19,1, 0) + IF(CV$1='Stars and Floors'!$D19,1, 0) + IF(CV$1='Stars and Floors'!$E19,1, 0) + IF(CV$1='Stars and Floors'!$F19,1, 0) + IF(CV$1='Stars and Floors'!$G19,1, 0), 0)` |
| CW19 | `=IF('Stars and Floors'!$A19, IF(CW$1='Stars and Floors'!$C19,1, 0) + IF(CW$1='Stars and Floors'!$D19,1, 0) + IF(CW$1='Stars and Floors'!$E19,1, 0) + IF(CW$1='Stars and Floors'!$F19,1, 0) + IF(CW$1='Stars and Floors'!$G19,1, 0), 0)` |
| CX19 | `=IF('Stars and Floors'!$A19, IF(CX$1='Stars and Floors'!$C19,1, 0) + IF(CX$1='Stars and Floors'!$D19,1, 0) + IF(CX$1='Stars and Floors'!$E19,1, 0) + IF(CX$1='Stars and Floors'!$F19,1, 0) + IF(CX$1='Stars and Floors'!$G19,1, 0), 0)` |
| CY19 | `=IF('Stars and Floors'!$A19, IF(CY$1='Stars and Floors'!$C19,1, 0) + IF(CY$1='Stars and Floors'!$D19,1, 0) + IF(CY$1='Stars and Floors'!$E19,1, 0) + IF(CY$1='Stars and Floors'!$F19,1, 0) + IF(CY$1='Stars and Floors'!$G19,1, 0), 0)` |
| CZ19 | `=IF('Stars and Floors'!$A19, IF(CZ$1='Stars and Floors'!$C19,1, 0) + IF(CZ$1='Stars and Floors'!$D19,1, 0) + IF(CZ$1='Stars and Floors'!$E19,1, 0) + IF(CZ$1='Stars and Floors'!$F19,1, 0) + IF(CZ$1='Stars and Floors'!$G19,1, 0), 0)` |
| DA19 | `=IF('Stars and Floors'!$A19, IF(DA$1='Stars and Floors'!$C19,1, 0) + IF(DA$1='Stars and Floors'!$D19,1, 0) + IF(DA$1='Stars and Floors'!$E19,1, 0) + IF(DA$1='Stars and Floors'!$F19,1, 0) + IF(DA$1='Stars and Floors'!$G19,1, 0), 0)` |
| DB19 | `=IF('Stars and Floors'!$A19, IF(DB$1='Stars and Floors'!$C19,1, 0) + IF(DB$1='Stars and Floors'!$D19,1, 0) + IF(DB$1='Stars and Floors'!$E19,1, 0) + IF(DB$1='Stars and Floors'!$F19,1, 0) + IF(DB$1='Stars and Floors'!$G19,1, 0), 0)` |
| DC19 | `=IF('Stars and Floors'!$A19, IF(DC$1='Stars and Floors'!$C19,1, 0) + IF(DC$1='Stars and Floors'!$D19,1, 0) + IF(DC$1='Stars and Floors'!$E19,1, 0) + IF(DC$1='Stars and Floors'!$F19,1, 0) + IF(DC$1='Stars and Floors'!$G19,1, 0), 0)` |
| DD19 | `=IF('Stars and Floors'!$A19, IF(DD$1='Stars and Floors'!$C19,1, 0) + IF(DD$1='Stars and Floors'!$D19,1, 0) + IF(DD$1='Stars and Floors'!$E19,1, 0) + IF(DD$1='Stars and Floors'!$F19,1, 0) + IF(DD$1='Stars and Floors'!$G19,1, 0), 0)` |
| DE19 | `=IF('Stars and Floors'!$A19, IF(DE$1='Stars and Floors'!$C19,1, 0) + IF(DE$1='Stars and Floors'!$D19,1, 0) + IF(DE$1='Stars and Floors'!$E19,1, 0) + IF(DE$1='Stars and Floors'!$F19,1, 0) + IF(DE$1='Stars and Floors'!$G19,1, 0), 0)` |
| DF19 | `=IF('Stars and Floors'!$A19, IF(DF$1='Stars and Floors'!$C19,1, 0) + IF(DF$1='Stars and Floors'!$D19,1, 0) + IF(DF$1='Stars and Floors'!$E19,1, 0) + IF(DF$1='Stars and Floors'!$F19,1, 0) + IF(DF$1='Stars and Floors'!$G19,1, 0), 0)` |
| DG19 | `=IF('Stars and Floors'!$A19, IF(DG$1='Stars and Floors'!$C19,1, 0) + IF(DG$1='Stars and Floors'!$D19,1, 0) + IF(DG$1='Stars and Floors'!$E19,1, 0) + IF(DG$1='Stars and Floors'!$F19,1, 0) + IF(DG$1='Stars and Floors'!$G19,1, 0), 0)` |
| DH19 | `=IF('Stars and Floors'!$A19, IF(DH$1='Stars and Floors'!$C19,1, 0) + IF(DH$1='Stars and Floors'!$D19,1, 0) + IF(DH$1='Stars and Floors'!$E19,1, 0) + IF(DH$1='Stars and Floors'!$F19,1, 0) + IF(DH$1='Stars and Floors'!$G19,1, 0), 0)` |
| DI19 | `=IF('Stars and Floors'!$A19, IF(DI$1='Stars and Floors'!$C19,1, 0) + IF(DI$1='Stars and Floors'!$D19,1, 0) + IF(DI$1='Stars and Floors'!$E19,1, 0) + IF(DI$1='Stars and Floors'!$F19,1, 0) + IF(DI$1='Stars and Floors'!$G19,1, 0), 0)` |
| DJ19 | `=IF('Stars and Floors'!$A19, IF(DJ$1='Stars and Floors'!$C19,1, 0) + IF(DJ$1='Stars and Floors'!$D19,1, 0) + IF(DJ$1='Stars and Floors'!$E19,1, 0) + IF(DJ$1='Stars and Floors'!$F19,1, 0) + IF(DJ$1='Stars and Floors'!$G19,1, 0), 0)` |
| DK19 | `=IF('Stars and Floors'!$A19, IF(DK$1='Stars and Floors'!$C19,1, 0) + IF(DK$1='Stars and Floors'!$D19,1, 0) + IF(DK$1='Stars and Floors'!$E19,1, 0) + IF(DK$1='Stars and Floors'!$F19,1, 0) + IF(DK$1='Stars and Floors'!$G19,1, 0), 0)` |
| DL19 | `=IF('Stars and Floors'!$A19, IF(DL$1='Stars and Floors'!$C19,1, 0) + IF(DL$1='Stars and Floors'!$D19,1, 0) + IF(DL$1='Stars and Floors'!$E19,1, 0) + IF(DL$1='Stars and Floors'!$F19,1, 0) + IF(DL$1='Stars and Floors'!$G19,1, 0), 0)` |
| DM19 | `=IF('Stars and Floors'!$A19, IF(DM$1='Stars and Floors'!$C19,1, 0) + IF(DM$1='Stars and Floors'!$D19,1, 0) + IF(DM$1='Stars and Floors'!$E19,1, 0) + IF(DM$1='Stars and Floors'!$F19,1, 0) + IF(DM$1='Stars and Floors'!$G19,1, 0), 0)` |
| DN19 | `=IF('Stars and Floors'!$A19, IF(DN$1='Stars and Floors'!$C19,1, 0) + IF(DN$1='Stars and Floors'!$D19,1, 0) + IF(DN$1='Stars and Floors'!$E19,1, 0) + IF(DN$1='Stars and Floors'!$F19,1, 0) + IF(DN$1='Stars and Floors'!$G19,1, 0), 0)` |
| DO19 | `=IF('Stars and Floors'!$A19, IF(DO$1='Stars and Floors'!$C19,1, 0) + IF(DO$1='Stars and Floors'!$D19,1, 0) + IF(DO$1='Stars and Floors'!$E19,1, 0) + IF(DO$1='Stars and Floors'!$F19,1, 0) + IF(DO$1='Stars and Floors'!$G19,1, 0), 0)` |
| DP19 | `=IF('Stars and Floors'!$A19, IF(DP$1='Stars and Floors'!$C19,1, 0) + IF(DP$1='Stars and Floors'!$D19,1, 0) + IF(DP$1='Stars and Floors'!$E19,1, 0) + IF(DP$1='Stars and Floors'!$F19,1, 0) + IF(DP$1='Stars and Floors'!$G19,1, 0), 0)` |
| DQ19 | `=IF('Stars and Floors'!$A19, IF(DQ$1='Stars and Floors'!$C19,1, 0) + IF(DQ$1='Stars and Floors'!$D19,1, 0) + IF(DQ$1='Stars and Floors'!$E19,1, 0) + IF(DQ$1='Stars and Floors'!$F19,1, 0) + IF(DQ$1='Stars and Floors'!$G19,1, 0), 0)` |
| B20 | `=IF('Stars and Floors'!$A20, IF(B$1='Stars and Floors'!$C20,1, 0) + IF(B$1='Stars and Floors'!$D20,1, 0) + IF(B$1='Stars and Floors'!$E20,1, 0) + IF(B$1='Stars and Floors'!$F20,1, 0) + IF(B$1='Stars and Floors'!$G20,1, 0), 0)` |
| C20 | `=IF('Stars and Floors'!$A20, IF(C$1='Stars and Floors'!$C20,1, 0) + IF(C$1='Stars and Floors'!$D20,1, 0) + IF(C$1='Stars and Floors'!$E20,1, 0) + IF(C$1='Stars and Floors'!$F20,1, 0) + IF(C$1='Stars and Floors'!$G20,1, 0), 0)` |
| D20 | `=IF('Stars and Floors'!$A20, IF(D$1='Stars and Floors'!$C20,1, 0) + IF(D$1='Stars and Floors'!$D20,1, 0) + IF(D$1='Stars and Floors'!$E20,1, 0) + IF(D$1='Stars and Floors'!$F20,1, 0) + IF(D$1='Stars and Floors'!$G20,1, 0), 0)` |
| E20 | `=IF('Stars and Floors'!$A20, IF(E$1='Stars and Floors'!$C20,1, 0) + IF(E$1='Stars and Floors'!$D20,1, 0) + IF(E$1='Stars and Floors'!$E20,1, 0) + IF(E$1='Stars and Floors'!$F20,1, 0) + IF(E$1='Stars and Floors'!$G20,1, 0), 0)` |
| F20 | `=IF('Stars and Floors'!$A20, IF(F$1='Stars and Floors'!$C20,1, 0) + IF(F$1='Stars and Floors'!$D20,1, 0) + IF(F$1='Stars and Floors'!$E20,1, 0) + IF(F$1='Stars and Floors'!$F20,1, 0) + IF(F$1='Stars and Floors'!$G20,1, 0), 0)` |
| G20 | `=IF('Stars and Floors'!$A20, IF(G$1='Stars and Floors'!$C20,1, 0) + IF(G$1='Stars and Floors'!$D20,1, 0) + IF(G$1='Stars and Floors'!$E20,1, 0) + IF(G$1='Stars and Floors'!$F20,1, 0) + IF(G$1='Stars and Floors'!$G20,1, 0), 0)` |
| H20 | `=IF('Stars and Floors'!$A20, IF(H$1='Stars and Floors'!$C20,1, 0) + IF(H$1='Stars and Floors'!$D20,1, 0) + IF(H$1='Stars and Floors'!$E20,1, 0) + IF(H$1='Stars and Floors'!$F20,1, 0) + IF(H$1='Stars and Floors'!$G20,1, 0), 0)` |
| I20 | `=IF('Stars and Floors'!$A20, IF(I$1='Stars and Floors'!$C20,1, 0) + IF(I$1='Stars and Floors'!$D20,1, 0) + IF(I$1='Stars and Floors'!$E20,1, 0) + IF(I$1='Stars and Floors'!$F20,1, 0) + IF(I$1='Stars and Floors'!$G20,1, 0), 0)` |
| J20 | `=IF('Stars and Floors'!$A20, IF(J$1='Stars and Floors'!$C20,1, 0) + IF(J$1='Stars and Floors'!$D20,1, 0) + IF(J$1='Stars and Floors'!$E20,1, 0) + IF(J$1='Stars and Floors'!$F20,1, 0) + IF(J$1='Stars and Floors'!$G20,1, 0), 0)` |
| K20 | `=IF('Stars and Floors'!$A20, IF(K$1='Stars and Floors'!$C20,1, 0) + IF(K$1='Stars and Floors'!$D20,1, 0) + IF(K$1='Stars and Floors'!$E20,1, 0) + IF(K$1='Stars and Floors'!$F20,1, 0) + IF(K$1='Stars and Floors'!$G20,1, 0), 0)` |
| L20 | `=IF('Stars and Floors'!$A20, IF(L$1='Stars and Floors'!$C20,1, 0) + IF(L$1='Stars and Floors'!$D20,1, 0) + IF(L$1='Stars and Floors'!$E20,1, 0) + IF(L$1='Stars and Floors'!$F20,1, 0) + IF(L$1='Stars and Floors'!$G20,1, 0), 0)` |
| M20 | `=IF('Stars and Floors'!$A20, IF(M$1='Stars and Floors'!$C20,1, 0) + IF(M$1='Stars and Floors'!$D20,1, 0) + IF(M$1='Stars and Floors'!$E20,1, 0) + IF(M$1='Stars and Floors'!$F20,1, 0) + IF(M$1='Stars and Floors'!$G20,1, 0), 0)` |
| N20 | `=IF('Stars and Floors'!$A20, IF(N$1='Stars and Floors'!$C20,1, 0) + IF(N$1='Stars and Floors'!$D20,1, 0) + IF(N$1='Stars and Floors'!$E20,1, 0) + IF(N$1='Stars and Floors'!$F20,1, 0) + IF(N$1='Stars and Floors'!$G20,1, 0), 0)` |
| O20 | `=IF('Stars and Floors'!$A20, IF(O$1='Stars and Floors'!$C20,1, 0) + IF(O$1='Stars and Floors'!$D20,1, 0) + IF(O$1='Stars and Floors'!$E20,1, 0) + IF(O$1='Stars and Floors'!$F20,1, 0) + IF(O$1='Stars and Floors'!$G20,1, 0), 0)` |
| P20 | `=IF('Stars and Floors'!$A20, IF(P$1='Stars and Floors'!$C20,1, 0) + IF(P$1='Stars and Floors'!$D20,1, 0) + IF(P$1='Stars and Floors'!$E20,1, 0) + IF(P$1='Stars and Floors'!$F20,1, 0) + IF(P$1='Stars and Floors'!$G20,1, 0), 0)` |
| Q20 | `=IF('Stars and Floors'!$A20, IF(Q$1='Stars and Floors'!$C20,1, 0) + IF(Q$1='Stars and Floors'!$D20,1, 0) + IF(Q$1='Stars and Floors'!$E20,1, 0) + IF(Q$1='Stars and Floors'!$F20,1, 0) + IF(Q$1='Stars and Floors'!$G20,1, 0), 0)` |
| R20 | `=IF('Stars and Floors'!$A20, IF(R$1='Stars and Floors'!$C20,1, 0) + IF(R$1='Stars and Floors'!$D20,1, 0) + IF(R$1='Stars and Floors'!$E20,1, 0) + IF(R$1='Stars and Floors'!$F20,1, 0) + IF(R$1='Stars and Floors'!$G20,1, 0), 0)` |
| S20 | `=IF('Stars and Floors'!$A20, IF(S$1='Stars and Floors'!$C20,1, 0) + IF(S$1='Stars and Floors'!$D20,1, 0) + IF(S$1='Stars and Floors'!$E20,1, 0) + IF(S$1='Stars and Floors'!$F20,1, 0) + IF(S$1='Stars and Floors'!$G20,1, 0), 0)` |
| T20 | `=IF('Stars and Floors'!$A20, IF(T$1='Stars and Floors'!$C20,1, 0) + IF(T$1='Stars and Floors'!$D20,1, 0) + IF(T$1='Stars and Floors'!$E20,1, 0) + IF(T$1='Stars and Floors'!$F20,1, 0) + IF(T$1='Stars and Floors'!$G20,1, 0), 0)` |
| U20 | `=IF('Stars and Floors'!$A20, IF(U$1='Stars and Floors'!$C20,1, 0) + IF(U$1='Stars and Floors'!$D20,1, 0) + IF(U$1='Stars and Floors'!$E20,1, 0) + IF(U$1='Stars and Floors'!$F20,1, 0) + IF(U$1='Stars and Floors'!$G20,1, 0), 0)` |
| V20 | `=IF('Stars and Floors'!$A20, IF(V$1='Stars and Floors'!$C20,1, 0) + IF(V$1='Stars and Floors'!$D20,1, 0) + IF(V$1='Stars and Floors'!$E20,1, 0) + IF(V$1='Stars and Floors'!$F20,1, 0) + IF(V$1='Stars and Floors'!$G20,1, 0), 0)` |
| W20 | `=IF('Stars and Floors'!$A20, IF(W$1='Stars and Floors'!$C20,1, 0) + IF(W$1='Stars and Floors'!$D20,1, 0) + IF(W$1='Stars and Floors'!$E20,1, 0) + IF(W$1='Stars and Floors'!$F20,1, 0) + IF(W$1='Stars and Floors'!$G20,1, 0), 0)` |
| X20 | `=IF('Stars and Floors'!$A20, IF(X$1='Stars and Floors'!$C20,1, 0) + IF(X$1='Stars and Floors'!$D20,1, 0) + IF(X$1='Stars and Floors'!$E20,1, 0) + IF(X$1='Stars and Floors'!$F20,1, 0) + IF(X$1='Stars and Floors'!$G20,1, 0), 0)` |
| Y20 | `=IF('Stars and Floors'!$A20, IF(Y$1='Stars and Floors'!$C20,1, 0) + IF(Y$1='Stars and Floors'!$D20,1, 0) + IF(Y$1='Stars and Floors'!$E20,1, 0) + IF(Y$1='Stars and Floors'!$F20,1, 0) + IF(Y$1='Stars and Floors'!$G20,1, 0), 0)` |
| Z20 | `=IF('Stars and Floors'!$A20, IF(Z$1='Stars and Floors'!$C20,1, 0) + IF(Z$1='Stars and Floors'!$D20,1, 0) + IF(Z$1='Stars and Floors'!$E20,1, 0) + IF(Z$1='Stars and Floors'!$F20,1, 0) + IF(Z$1='Stars and Floors'!$G20,1, 0), 0)` |
| AA20 | `=IF('Stars and Floors'!$A20, IF(AA$1='Stars and Floors'!$C20,1, 0) + IF(AA$1='Stars and Floors'!$D20,1, 0) + IF(AA$1='Stars and Floors'!$E20,1, 0) + IF(AA$1='Stars and Floors'!$F20,1, 0) + IF(AA$1='Stars and Floors'!$G20,1, 0), 0)` |
| AB20 | `=IF('Stars and Floors'!$A20, IF(AB$1='Stars and Floors'!$C20,1, 0) + IF(AB$1='Stars and Floors'!$D20,1, 0) + IF(AB$1='Stars and Floors'!$E20,1, 0) + IF(AB$1='Stars and Floors'!$F20,1, 0) + IF(AB$1='Stars and Floors'!$G20,1, 0), 0)` |
| AC20 | `=IF('Stars and Floors'!$A20, IF(AC$1='Stars and Floors'!$C20,1, 0) + IF(AC$1='Stars and Floors'!$D20,1, 0) + IF(AC$1='Stars and Floors'!$E20,1, 0) + IF(AC$1='Stars and Floors'!$F20,1, 0) + IF(AC$1='Stars and Floors'!$G20,1, 0), 0)` |
| AD20 | `=IF('Stars and Floors'!$A20, IF(AD$1='Stars and Floors'!$C20,1, 0) + IF(AD$1='Stars and Floors'!$D20,1, 0) + IF(AD$1='Stars and Floors'!$E20,1, 0) + IF(AD$1='Stars and Floors'!$F20,1, 0) + IF(AD$1='Stars and Floors'!$G20,1, 0), 0)` |
| AE20 | `=IF('Stars and Floors'!$A20, IF(AE$1='Stars and Floors'!$C20,1, 0) + IF(AE$1='Stars and Floors'!$D20,1, 0) + IF(AE$1='Stars and Floors'!$E20,1, 0) + IF(AE$1='Stars and Floors'!$F20,1, 0) + IF(AE$1='Stars and Floors'!$G20,1, 0), 0)` |
| AF20 | `=IF('Stars and Floors'!$A20, IF(AF$1='Stars and Floors'!$C20,1, 0) + IF(AF$1='Stars and Floors'!$D20,1, 0) + IF(AF$1='Stars and Floors'!$E20,1, 0) + IF(AF$1='Stars and Floors'!$F20,1, 0) + IF(AF$1='Stars and Floors'!$G20,1, 0), 0)` |
| AG20 | `=IF('Stars and Floors'!$A20, IF(AG$1='Stars and Floors'!$C20,1, 0) + IF(AG$1='Stars and Floors'!$D20,1, 0) + IF(AG$1='Stars and Floors'!$E20,1, 0) + IF(AG$1='Stars and Floors'!$F20,1, 0) + IF(AG$1='Stars and Floors'!$G20,1, 0), 0)` |
| AH20 | `=IF('Stars and Floors'!$A20, IF(AH$1='Stars and Floors'!$C20,1, 0) + IF(AH$1='Stars and Floors'!$D20,1, 0) + IF(AH$1='Stars and Floors'!$E20,1, 0) + IF(AH$1='Stars and Floors'!$F20,1, 0) + IF(AH$1='Stars and Floors'!$G20,1, 0), 0)` |
| AI20 | `=IF('Stars and Floors'!$A20, IF(AI$1='Stars and Floors'!$C20,1, 0) + IF(AI$1='Stars and Floors'!$D20,1, 0) + IF(AI$1='Stars and Floors'!$E20,1, 0) + IF(AI$1='Stars and Floors'!$F20,1, 0) + IF(AI$1='Stars and Floors'!$G20,1, 0), 0)` |
| AJ20 | `=IF('Stars and Floors'!$A20, IF(AJ$1='Stars and Floors'!$C20,1, 0) + IF(AJ$1='Stars and Floors'!$D20,1, 0) + IF(AJ$1='Stars and Floors'!$E20,1, 0) + IF(AJ$1='Stars and Floors'!$F20,1, 0) + IF(AJ$1='Stars and Floors'!$G20,1, 0), 0)` |
| AK20 | `=IF('Stars and Floors'!$A20, IF(AK$1='Stars and Floors'!$C20,1, 0) + IF(AK$1='Stars and Floors'!$D20,1, 0) + IF(AK$1='Stars and Floors'!$E20,1, 0) + IF(AK$1='Stars and Floors'!$F20,1, 0) + IF(AK$1='Stars and Floors'!$G20,1, 0), 0)` |
| AL20 | `=IF('Stars and Floors'!$A20, IF(AL$1='Stars and Floors'!$C20,1, 0) + IF(AL$1='Stars and Floors'!$D20,1, 0) + IF(AL$1='Stars and Floors'!$E20,1, 0) + IF(AL$1='Stars and Floors'!$F20,1, 0) + IF(AL$1='Stars and Floors'!$G20,1, 0), 0)` |
| AM20 | `=IF('Stars and Floors'!$A20, IF(AM$1='Stars and Floors'!$C20,1, 0) + IF(AM$1='Stars and Floors'!$D20,1, 0) + IF(AM$1='Stars and Floors'!$E20,1, 0) + IF(AM$1='Stars and Floors'!$F20,1, 0) + IF(AM$1='Stars and Floors'!$G20,1, 0), 0)` |
| AN20 | `=IF('Stars and Floors'!$A20, IF(AN$1='Stars and Floors'!$C20,1, 0) + IF(AN$1='Stars and Floors'!$D20,1, 0) + IF(AN$1='Stars and Floors'!$E20,1, 0) + IF(AN$1='Stars and Floors'!$F20,1, 0) + IF(AN$1='Stars and Floors'!$G20,1, 0), 0)` |
| AO20 | `=IF('Stars and Floors'!$A20, IF(AO$1='Stars and Floors'!$C20,1, 0) + IF(AO$1='Stars and Floors'!$D20,1, 0) + IF(AO$1='Stars and Floors'!$E20,1, 0) + IF(AO$1='Stars and Floors'!$F20,1, 0) + IF(AO$1='Stars and Floors'!$G20,1, 0), 0)` |
| AP20 | `=IF('Stars and Floors'!$A20, IF(AP$1='Stars and Floors'!$C20,1, 0) + IF(AP$1='Stars and Floors'!$D20,1, 0) + IF(AP$1='Stars and Floors'!$E20,1, 0) + IF(AP$1='Stars and Floors'!$F20,1, 0) + IF(AP$1='Stars and Floors'!$G20,1, 0), 0)` |
| AQ20 | `=IF('Stars and Floors'!$A20, IF(AQ$1='Stars and Floors'!$C20,1, 0) + IF(AQ$1='Stars and Floors'!$D20,1, 0) + IF(AQ$1='Stars and Floors'!$E20,1, 0) + IF(AQ$1='Stars and Floors'!$F20,1, 0) + IF(AQ$1='Stars and Floors'!$G20,1, 0), 0)` |
| AR20 | `=IF('Stars and Floors'!$A20, IF(AR$1='Stars and Floors'!$C20,1, 0) + IF(AR$1='Stars and Floors'!$D20,1, 0) + IF(AR$1='Stars and Floors'!$E20,1, 0) + IF(AR$1='Stars and Floors'!$F20,1, 0) + IF(AR$1='Stars and Floors'!$G20,1, 0), 0)` |
| AS20 | `=IF('Stars and Floors'!$A20, IF(AS$1='Stars and Floors'!$C20,1, 0) + IF(AS$1='Stars and Floors'!$D20,1, 0) + IF(AS$1='Stars and Floors'!$E20,1, 0) + IF(AS$1='Stars and Floors'!$F20,1, 0) + IF(AS$1='Stars and Floors'!$G20,1, 0), 0)` |
| AT20 | `=IF('Stars and Floors'!$A20, IF(AT$1='Stars and Floors'!$C20,1, 0) + IF(AT$1='Stars and Floors'!$D20,1, 0) + IF(AT$1='Stars and Floors'!$E20,1, 0) + IF(AT$1='Stars and Floors'!$F20,1, 0) + IF(AT$1='Stars and Floors'!$G20,1, 0), 0)` |
| AU20 | `=IF('Stars and Floors'!$A20, IF(AU$1='Stars and Floors'!$C20,1, 0) + IF(AU$1='Stars and Floors'!$D20,1, 0) + IF(AU$1='Stars and Floors'!$E20,1, 0) + IF(AU$1='Stars and Floors'!$F20,1, 0) + IF(AU$1='Stars and Floors'!$G20,1, 0), 0)` |
| AV20 | `=IF('Stars and Floors'!$A20, IF(AV$1='Stars and Floors'!$C20,1, 0) + IF(AV$1='Stars and Floors'!$D20,1, 0) + IF(AV$1='Stars and Floors'!$E20,1, 0) + IF(AV$1='Stars and Floors'!$F20,1, 0) + IF(AV$1='Stars and Floors'!$G20,1, 0), 0)` |
| AW20 | `=IF('Stars and Floors'!$A20, IF(AW$1='Stars and Floors'!$C20,1, 0) + IF(AW$1='Stars and Floors'!$D20,1, 0) + IF(AW$1='Stars and Floors'!$E20,1, 0) + IF(AW$1='Stars and Floors'!$F20,1, 0) + IF(AW$1='Stars and Floors'!$G20,1, 0), 0)` |
| AX20 | `=IF('Stars and Floors'!$A20, IF(AX$1='Stars and Floors'!$C20,1, 0) + IF(AX$1='Stars and Floors'!$D20,1, 0) + IF(AX$1='Stars and Floors'!$E20,1, 0) + IF(AX$1='Stars and Floors'!$F20,1, 0) + IF(AX$1='Stars and Floors'!$G20,1, 0), 0)` |
| AY20 | `=IF('Stars and Floors'!$A20, IF(AY$1='Stars and Floors'!$C20,1, 0) + IF(AY$1='Stars and Floors'!$D20,1, 0) + IF(AY$1='Stars and Floors'!$E20,1, 0) + IF(AY$1='Stars and Floors'!$F20,1, 0) + IF(AY$1='Stars and Floors'!$G20,1, 0), 0)` |
| AZ20 | `=IF('Stars and Floors'!$A20, IF(AZ$1='Stars and Floors'!$C20,1, 0) + IF(AZ$1='Stars and Floors'!$D20,1, 0) + IF(AZ$1='Stars and Floors'!$E20,1, 0) + IF(AZ$1='Stars and Floors'!$F20,1, 0) + IF(AZ$1='Stars and Floors'!$G20,1, 0), 0)` |
| BA20 | `=IF('Stars and Floors'!$A20, IF(BA$1='Stars and Floors'!$C20,1, 0) + IF(BA$1='Stars and Floors'!$D20,1, 0) + IF(BA$1='Stars and Floors'!$E20,1, 0) + IF(BA$1='Stars and Floors'!$F20,1, 0) + IF(BA$1='Stars and Floors'!$G20,1, 0), 0)` |
| BB20 | `=IF('Stars and Floors'!$A20, IF(BB$1='Stars and Floors'!$C20,1, 0) + IF(BB$1='Stars and Floors'!$D20,1, 0) + IF(BB$1='Stars and Floors'!$E20,1, 0) + IF(BB$1='Stars and Floors'!$F20,1, 0) + IF(BB$1='Stars and Floors'!$G20,1, 0), 0)` |
| BC20 | `=IF('Stars and Floors'!$A20, IF(BC$1='Stars and Floors'!$C20,1, 0) + IF(BC$1='Stars and Floors'!$D20,1, 0) + IF(BC$1='Stars and Floors'!$E20,1, 0) + IF(BC$1='Stars and Floors'!$F20,1, 0) + IF(BC$1='Stars and Floors'!$G20,1, 0), 0)` |
| BD20 | `=IF('Stars and Floors'!$A20, IF(BD$1='Stars and Floors'!$C20,1, 0) + IF(BD$1='Stars and Floors'!$D20,1, 0) + IF(BD$1='Stars and Floors'!$E20,1, 0) + IF(BD$1='Stars and Floors'!$F20,1, 0) + IF(BD$1='Stars and Floors'!$G20,1, 0), 0)` |
| BE20 | `=IF('Stars and Floors'!$A20, IF(BE$1='Stars and Floors'!$C20,1, 0) + IF(BE$1='Stars and Floors'!$D20,1, 0) + IF(BE$1='Stars and Floors'!$E20,1, 0) + IF(BE$1='Stars and Floors'!$F20,1, 0) + IF(BE$1='Stars and Floors'!$G20,1, 0), 0)` |
| BF20 | `=IF('Stars and Floors'!$A20, IF(BF$1='Stars and Floors'!$C20,1, 0) + IF(BF$1='Stars and Floors'!$D20,1, 0) + IF(BF$1='Stars and Floors'!$E20,1, 0) + IF(BF$1='Stars and Floors'!$F20,1, 0) + IF(BF$1='Stars and Floors'!$G20,1, 0), 0)` |
| BG20 | `=IF('Stars and Floors'!$A20, IF(BG$1='Stars and Floors'!$C20,1, 0) + IF(BG$1='Stars and Floors'!$D20,1, 0) + IF(BG$1='Stars and Floors'!$E20,1, 0) + IF(BG$1='Stars and Floors'!$F20,1, 0) + IF(BG$1='Stars and Floors'!$G20,1, 0), 0)` |
| BH20 | `=IF('Stars and Floors'!$A20, IF(BH$1='Stars and Floors'!$C20,1, 0) + IF(BH$1='Stars and Floors'!$D20,1, 0) + IF(BH$1='Stars and Floors'!$E20,1, 0) + IF(BH$1='Stars and Floors'!$F20,1, 0) + IF(BH$1='Stars and Floors'!$G20,1, 0), 0)` |
| BI20 | `=IF('Stars and Floors'!$A20, IF(BI$1='Stars and Floors'!$C20,1, 0) + IF(BI$1='Stars and Floors'!$D20,1, 0) + IF(BI$1='Stars and Floors'!$E20,1, 0) + IF(BI$1='Stars and Floors'!$F20,1, 0) + IF(BI$1='Stars and Floors'!$G20,1, 0), 0)` |
| BJ20 | `=IF('Stars and Floors'!$A20, IF(BJ$1='Stars and Floors'!$C20,1, 0) + IF(BJ$1='Stars and Floors'!$D20,1, 0) + IF(BJ$1='Stars and Floors'!$E20,1, 0) + IF(BJ$1='Stars and Floors'!$F20,1, 0) + IF(BJ$1='Stars and Floors'!$G20,1, 0), 0)` |
| BK20 | `=IF('Stars and Floors'!$A20, IF(BK$1='Stars and Floors'!$C20,1, 0) + IF(BK$1='Stars and Floors'!$D20,1, 0) + IF(BK$1='Stars and Floors'!$E20,1, 0) + IF(BK$1='Stars and Floors'!$F20,1, 0) + IF(BK$1='Stars and Floors'!$G20,1, 0), 0)` |
| BL20 | `=IF('Stars and Floors'!$A20, IF(BL$1='Stars and Floors'!$C20,1, 0) + IF(BL$1='Stars and Floors'!$D20,1, 0) + IF(BL$1='Stars and Floors'!$E20,1, 0) + IF(BL$1='Stars and Floors'!$F20,1, 0) + IF(BL$1='Stars and Floors'!$G20,1, 0), 0)` |
| BM20 | `=IF('Stars and Floors'!$A20, IF(BM$1='Stars and Floors'!$C20,1, 0) + IF(BM$1='Stars and Floors'!$D20,1, 0) + IF(BM$1='Stars and Floors'!$E20,1, 0) + IF(BM$1='Stars and Floors'!$F20,1, 0) + IF(BM$1='Stars and Floors'!$G20,1, 0), 0)` |
| BN20 | `=IF('Stars and Floors'!$A20, IF(BN$1='Stars and Floors'!$C20,1, 0) + IF(BN$1='Stars and Floors'!$D20,1, 0) + IF(BN$1='Stars and Floors'!$E20,1, 0) + IF(BN$1='Stars and Floors'!$F20,1, 0) + IF(BN$1='Stars and Floors'!$G20,1, 0), 0)` |
| BO20 | `=IF('Stars and Floors'!$A20, IF(BO$1='Stars and Floors'!$C20,1, 0) + IF(BO$1='Stars and Floors'!$D20,1, 0) + IF(BO$1='Stars and Floors'!$E20,1, 0) + IF(BO$1='Stars and Floors'!$F20,1, 0) + IF(BO$1='Stars and Floors'!$G20,1, 0), 0)` |
| BP20 | `=IF('Stars and Floors'!$A20, IF(BP$1='Stars and Floors'!$C20,1, 0) + IF(BP$1='Stars and Floors'!$D20,1, 0) + IF(BP$1='Stars and Floors'!$E20,1, 0) + IF(BP$1='Stars and Floors'!$F20,1, 0) + IF(BP$1='Stars and Floors'!$G20,1, 0), 0)` |
| BQ20 | `=IF('Stars and Floors'!$A20, IF(BQ$1='Stars and Floors'!$C20,1, 0) + IF(BQ$1='Stars and Floors'!$D20,1, 0) + IF(BQ$1='Stars and Floors'!$E20,1, 0) + IF(BQ$1='Stars and Floors'!$F20,1, 0) + IF(BQ$1='Stars and Floors'!$G20,1, 0), 0)` |
| BR20 | `=IF('Stars and Floors'!$A20, IF(BR$1='Stars and Floors'!$C20,1, 0) + IF(BR$1='Stars and Floors'!$D20,1, 0) + IF(BR$1='Stars and Floors'!$E20,1, 0) + IF(BR$1='Stars and Floors'!$F20,1, 0) + IF(BR$1='Stars and Floors'!$G20,1, 0), 0)` |
| BS20 | `=IF('Stars and Floors'!$A20, IF(BS$1='Stars and Floors'!$C20,1, 0) + IF(BS$1='Stars and Floors'!$D20,1, 0) + IF(BS$1='Stars and Floors'!$E20,1, 0) + IF(BS$1='Stars and Floors'!$F20,1, 0) + IF(BS$1='Stars and Floors'!$G20,1, 0), 0)` |
| BT20 | `=IF('Stars and Floors'!$A20, IF(BT$1='Stars and Floors'!$C20,1, 0) + IF(BT$1='Stars and Floors'!$D20,1, 0) + IF(BT$1='Stars and Floors'!$E20,1, 0) + IF(BT$1='Stars and Floors'!$F20,1, 0) + IF(BT$1='Stars and Floors'!$G20,1, 0), 0)` |
| BU20 | `=IF('Stars and Floors'!$A20, IF(BU$1='Stars and Floors'!$C20,1, 0) + IF(BU$1='Stars and Floors'!$D20,1, 0) + IF(BU$1='Stars and Floors'!$E20,1, 0) + IF(BU$1='Stars and Floors'!$F20,1, 0) + IF(BU$1='Stars and Floors'!$G20,1, 0), 0)` |
| BV20 | `=IF('Stars and Floors'!$A20, IF(BV$1='Stars and Floors'!$C20,1, 0) + IF(BV$1='Stars and Floors'!$D20,1, 0) + IF(BV$1='Stars and Floors'!$E20,1, 0) + IF(BV$1='Stars and Floors'!$F20,1, 0) + IF(BV$1='Stars and Floors'!$G20,1, 0), 0)` |
| BW20 | `=IF('Stars and Floors'!$A20, IF(BW$1='Stars and Floors'!$C20,1, 0) + IF(BW$1='Stars and Floors'!$D20,1, 0) + IF(BW$1='Stars and Floors'!$E20,1, 0) + IF(BW$1='Stars and Floors'!$F20,1, 0) + IF(BW$1='Stars and Floors'!$G20,1, 0), 0)` |
| BX20 | `=IF('Stars and Floors'!$A20, IF(BX$1='Stars and Floors'!$C20,1, 0) + IF(BX$1='Stars and Floors'!$D20,1, 0) + IF(BX$1='Stars and Floors'!$E20,1, 0) + IF(BX$1='Stars and Floors'!$F20,1, 0) + IF(BX$1='Stars and Floors'!$G20,1, 0), 0)` |
| BY20 | `=IF('Stars and Floors'!$A20, IF(BY$1='Stars and Floors'!$C20,1, 0) + IF(BY$1='Stars and Floors'!$D20,1, 0) + IF(BY$1='Stars and Floors'!$E20,1, 0) + IF(BY$1='Stars and Floors'!$F20,1, 0) + IF(BY$1='Stars and Floors'!$G20,1, 0), 0)` |
| BZ20 | `=IF('Stars and Floors'!$A20, IF(BZ$1='Stars and Floors'!$C20,1, 0) + IF(BZ$1='Stars and Floors'!$D20,1, 0) + IF(BZ$1='Stars and Floors'!$E20,1, 0) + IF(BZ$1='Stars and Floors'!$F20,1, 0) + IF(BZ$1='Stars and Floors'!$G20,1, 0), 0)` |
| CA20 | `=IF('Stars and Floors'!$A20, IF(CA$1='Stars and Floors'!$C20,1, 0) + IF(CA$1='Stars and Floors'!$D20,1, 0) + IF(CA$1='Stars and Floors'!$E20,1, 0) + IF(CA$1='Stars and Floors'!$F20,1, 0) + IF(CA$1='Stars and Floors'!$G20,1, 0), 0)` |
| CB20 | `=IF('Stars and Floors'!$A20, IF(CB$1='Stars and Floors'!$C20,1, 0) + IF(CB$1='Stars and Floors'!$D20,1, 0) + IF(CB$1='Stars and Floors'!$E20,1, 0) + IF(CB$1='Stars and Floors'!$F20,1, 0) + IF(CB$1='Stars and Floors'!$G20,1, 0), 0)` |
| CC20 | `=IF('Stars and Floors'!$A20, IF(CC$1='Stars and Floors'!$C20,1, 0) + IF(CC$1='Stars and Floors'!$D20,1, 0) + IF(CC$1='Stars and Floors'!$E20,1, 0) + IF(CC$1='Stars and Floors'!$F20,1, 0) + IF(CC$1='Stars and Floors'!$G20,1, 0), 0)` |
| CD20 | `=IF('Stars and Floors'!$A20, IF(CD$1='Stars and Floors'!$C20,1, 0) + IF(CD$1='Stars and Floors'!$D20,1, 0) + IF(CD$1='Stars and Floors'!$E20,1, 0) + IF(CD$1='Stars and Floors'!$F20,1, 0) + IF(CD$1='Stars and Floors'!$G20,1, 0), 0)` |
| CE20 | `=IF('Stars and Floors'!$A20, IF(CE$1='Stars and Floors'!$C20,1, 0) + IF(CE$1='Stars and Floors'!$D20,1, 0) + IF(CE$1='Stars and Floors'!$E20,1, 0) + IF(CE$1='Stars and Floors'!$F20,1, 0) + IF(CE$1='Stars and Floors'!$G20,1, 0), 0)` |
| CF20 | `=IF('Stars and Floors'!$A20, IF(CF$1='Stars and Floors'!$C20,1, 0) + IF(CF$1='Stars and Floors'!$D20,1, 0) + IF(CF$1='Stars and Floors'!$E20,1, 0) + IF(CF$1='Stars and Floors'!$F20,1, 0) + IF(CF$1='Stars and Floors'!$G20,1, 0), 0)` |
| CG20 | `=IF('Stars and Floors'!$A20, IF(CG$1='Stars and Floors'!$C20,1, 0) + IF(CG$1='Stars and Floors'!$D20,1, 0) + IF(CG$1='Stars and Floors'!$E20,1, 0) + IF(CG$1='Stars and Floors'!$F20,1, 0) + IF(CG$1='Stars and Floors'!$G20,1, 0), 0)` |
| CH20 | `=IF('Stars and Floors'!$A20, IF(CH$1='Stars and Floors'!$C20,1, 0) + IF(CH$1='Stars and Floors'!$D20,1, 0) + IF(CH$1='Stars and Floors'!$E20,1, 0) + IF(CH$1='Stars and Floors'!$F20,1, 0) + IF(CH$1='Stars and Floors'!$G20,1, 0), 0)` |
| CI20 | `=IF('Stars and Floors'!$A20, IF(CI$1='Stars and Floors'!$C20,1, 0) + IF(CI$1='Stars and Floors'!$D20,1, 0) + IF(CI$1='Stars and Floors'!$E20,1, 0) + IF(CI$1='Stars and Floors'!$F20,1, 0) + IF(CI$1='Stars and Floors'!$G20,1, 0), 0)` |
| CJ20 | `=IF('Stars and Floors'!$A20, IF(CJ$1='Stars and Floors'!$C20,1, 0) + IF(CJ$1='Stars and Floors'!$D20,1, 0) + IF(CJ$1='Stars and Floors'!$E20,1, 0) + IF(CJ$1='Stars and Floors'!$F20,1, 0) + IF(CJ$1='Stars and Floors'!$G20,1, 0), 0)` |
| CK20 | `=IF('Stars and Floors'!$A20, IF(CK$1='Stars and Floors'!$C20,1, 0) + IF(CK$1='Stars and Floors'!$D20,1, 0) + IF(CK$1='Stars and Floors'!$E20,1, 0) + IF(CK$1='Stars and Floors'!$F20,1, 0) + IF(CK$1='Stars and Floors'!$G20,1, 0), 0)` |
| CL20 | `=IF('Stars and Floors'!$A20, IF(CL$1='Stars and Floors'!$C20,1, 0) + IF(CL$1='Stars and Floors'!$D20,1, 0) + IF(CL$1='Stars and Floors'!$E20,1, 0) + IF(CL$1='Stars and Floors'!$F20,1, 0) + IF(CL$1='Stars and Floors'!$G20,1, 0), 0)` |
| CM20 | `=IF('Stars and Floors'!$A20, IF(CM$1='Stars and Floors'!$C20,1, 0) + IF(CM$1='Stars and Floors'!$D20,1, 0) + IF(CM$1='Stars and Floors'!$E20,1, 0) + IF(CM$1='Stars and Floors'!$F20,1, 0) + IF(CM$1='Stars and Floors'!$G20,1, 0), 0)` |
| CN20 | `=IF('Stars and Floors'!$A20, IF(CN$1='Stars and Floors'!$C20,1, 0) + IF(CN$1='Stars and Floors'!$D20,1, 0) + IF(CN$1='Stars and Floors'!$E20,1, 0) + IF(CN$1='Stars and Floors'!$F20,1, 0) + IF(CN$1='Stars and Floors'!$G20,1, 0), 0)` |
| CO20 | `=IF('Stars and Floors'!$A20, IF(CO$1='Stars and Floors'!$C20,1, 0) + IF(CO$1='Stars and Floors'!$D20,1, 0) + IF(CO$1='Stars and Floors'!$E20,1, 0) + IF(CO$1='Stars and Floors'!$F20,1, 0) + IF(CO$1='Stars and Floors'!$G20,1, 0), 0)` |
| CP20 | `=IF('Stars and Floors'!$A20, IF(CP$1='Stars and Floors'!$C20,1, 0) + IF(CP$1='Stars and Floors'!$D20,1, 0) + IF(CP$1='Stars and Floors'!$E20,1, 0) + IF(CP$1='Stars and Floors'!$F20,1, 0) + IF(CP$1='Stars and Floors'!$G20,1, 0), 0)` |
| CQ20 | `=IF('Stars and Floors'!$A20, IF(CQ$1='Stars and Floors'!$C20,1, 0) + IF(CQ$1='Stars and Floors'!$D20,1, 0) + IF(CQ$1='Stars and Floors'!$E20,1, 0) + IF(CQ$1='Stars and Floors'!$F20,1, 0) + IF(CQ$1='Stars and Floors'!$G20,1, 0), 0)` |
| CR20 | `=IF('Stars and Floors'!$A20, IF(CR$1='Stars and Floors'!$C20,1, 0) + IF(CR$1='Stars and Floors'!$D20,1, 0) + IF(CR$1='Stars and Floors'!$E20,1, 0) + IF(CR$1='Stars and Floors'!$F20,1, 0) + IF(CR$1='Stars and Floors'!$G20,1, 0), 0)` |
| CS20 | `=IF('Stars and Floors'!$A20, IF(CS$1='Stars and Floors'!$C20,1, 0) + IF(CS$1='Stars and Floors'!$D20,1, 0) + IF(CS$1='Stars and Floors'!$E20,1, 0) + IF(CS$1='Stars and Floors'!$F20,1, 0) + IF(CS$1='Stars and Floors'!$G20,1, 0), 0)` |
| CT20 | `=IF('Stars and Floors'!$A20, IF(CT$1='Stars and Floors'!$C20,1, 0) + IF(CT$1='Stars and Floors'!$D20,1, 0) + IF(CT$1='Stars and Floors'!$E20,1, 0) + IF(CT$1='Stars and Floors'!$F20,1, 0) + IF(CT$1='Stars and Floors'!$G20,1, 0), 0)` |
| CU20 | `=IF('Stars and Floors'!$A20, IF(CU$1='Stars and Floors'!$C20,1, 0) + IF(CU$1='Stars and Floors'!$D20,1, 0) + IF(CU$1='Stars and Floors'!$E20,1, 0) + IF(CU$1='Stars and Floors'!$F20,1, 0) + IF(CU$1='Stars and Floors'!$G20,1, 0), 0)` |
| CV20 | `=IF('Stars and Floors'!$A20, IF(CV$1='Stars and Floors'!$C20,1, 0) + IF(CV$1='Stars and Floors'!$D20,1, 0) + IF(CV$1='Stars and Floors'!$E20,1, 0) + IF(CV$1='Stars and Floors'!$F20,1, 0) + IF(CV$1='Stars and Floors'!$G20,1, 0), 0)` |
| CW20 | `=IF('Stars and Floors'!$A20, IF(CW$1='Stars and Floors'!$C20,1, 0) + IF(CW$1='Stars and Floors'!$D20,1, 0) + IF(CW$1='Stars and Floors'!$E20,1, 0) + IF(CW$1='Stars and Floors'!$F20,1, 0) + IF(CW$1='Stars and Floors'!$G20,1, 0), 0)` |
| CX20 | `=IF('Stars and Floors'!$A20, IF(CX$1='Stars and Floors'!$C20,1, 0) + IF(CX$1='Stars and Floors'!$D20,1, 0) + IF(CX$1='Stars and Floors'!$E20,1, 0) + IF(CX$1='Stars and Floors'!$F20,1, 0) + IF(CX$1='Stars and Floors'!$G20,1, 0), 0)` |
| CY20 | `=IF('Stars and Floors'!$A20, IF(CY$1='Stars and Floors'!$C20,1, 0) + IF(CY$1='Stars and Floors'!$D20,1, 0) + IF(CY$1='Stars and Floors'!$E20,1, 0) + IF(CY$1='Stars and Floors'!$F20,1, 0) + IF(CY$1='Stars and Floors'!$G20,1, 0), 0)` |
| CZ20 | `=IF('Stars and Floors'!$A20, IF(CZ$1='Stars and Floors'!$C20,1, 0) + IF(CZ$1='Stars and Floors'!$D20,1, 0) + IF(CZ$1='Stars and Floors'!$E20,1, 0) + IF(CZ$1='Stars and Floors'!$F20,1, 0) + IF(CZ$1='Stars and Floors'!$G20,1, 0), 0)` |
| DA20 | `=IF('Stars and Floors'!$A20, IF(DA$1='Stars and Floors'!$C20,1, 0) + IF(DA$1='Stars and Floors'!$D20,1, 0) + IF(DA$1='Stars and Floors'!$E20,1, 0) + IF(DA$1='Stars and Floors'!$F20,1, 0) + IF(DA$1='Stars and Floors'!$G20,1, 0), 0)` |
| DB20 | `=IF('Stars and Floors'!$A20, IF(DB$1='Stars and Floors'!$C20,1, 0) + IF(DB$1='Stars and Floors'!$D20,1, 0) + IF(DB$1='Stars and Floors'!$E20,1, 0) + IF(DB$1='Stars and Floors'!$F20,1, 0) + IF(DB$1='Stars and Floors'!$G20,1, 0), 0)` |
| DC20 | `=IF('Stars and Floors'!$A20, IF(DC$1='Stars and Floors'!$C20,1, 0) + IF(DC$1='Stars and Floors'!$D20,1, 0) + IF(DC$1='Stars and Floors'!$E20,1, 0) + IF(DC$1='Stars and Floors'!$F20,1, 0) + IF(DC$1='Stars and Floors'!$G20,1, 0), 0)` |
| DD20 | `=IF('Stars and Floors'!$A20, IF(DD$1='Stars and Floors'!$C20,1, 0) + IF(DD$1='Stars and Floors'!$D20,1, 0) + IF(DD$1='Stars and Floors'!$E20,1, 0) + IF(DD$1='Stars and Floors'!$F20,1, 0) + IF(DD$1='Stars and Floors'!$G20,1, 0), 0)` |
| DE20 | `=IF('Stars and Floors'!$A20, IF(DE$1='Stars and Floors'!$C20,1, 0) + IF(DE$1='Stars and Floors'!$D20,1, 0) + IF(DE$1='Stars and Floors'!$E20,1, 0) + IF(DE$1='Stars and Floors'!$F20,1, 0) + IF(DE$1='Stars and Floors'!$G20,1, 0), 0)` |
| DF20 | `=IF('Stars and Floors'!$A20, IF(DF$1='Stars and Floors'!$C20,1, 0) + IF(DF$1='Stars and Floors'!$D20,1, 0) + IF(DF$1='Stars and Floors'!$E20,1, 0) + IF(DF$1='Stars and Floors'!$F20,1, 0) + IF(DF$1='Stars and Floors'!$G20,1, 0), 0)` |
| DG20 | `=IF('Stars and Floors'!$A20, IF(DG$1='Stars and Floors'!$C20,1, 0) + IF(DG$1='Stars and Floors'!$D20,1, 0) + IF(DG$1='Stars and Floors'!$E20,1, 0) + IF(DG$1='Stars and Floors'!$F20,1, 0) + IF(DG$1='Stars and Floors'!$G20,1, 0), 0)` |
| DH20 | `=IF('Stars and Floors'!$A20, IF(DH$1='Stars and Floors'!$C20,1, 0) + IF(DH$1='Stars and Floors'!$D20,1, 0) + IF(DH$1='Stars and Floors'!$E20,1, 0) + IF(DH$1='Stars and Floors'!$F20,1, 0) + IF(DH$1='Stars and Floors'!$G20,1, 0), 0)` |
| DI20 | `=IF('Stars and Floors'!$A20, IF(DI$1='Stars and Floors'!$C20,1, 0) + IF(DI$1='Stars and Floors'!$D20,1, 0) + IF(DI$1='Stars and Floors'!$E20,1, 0) + IF(DI$1='Stars and Floors'!$F20,1, 0) + IF(DI$1='Stars and Floors'!$G20,1, 0), 0)` |
| DJ20 | `=IF('Stars and Floors'!$A20, IF(DJ$1='Stars and Floors'!$C20,1, 0) + IF(DJ$1='Stars and Floors'!$D20,1, 0) + IF(DJ$1='Stars and Floors'!$E20,1, 0) + IF(DJ$1='Stars and Floors'!$F20,1, 0) + IF(DJ$1='Stars and Floors'!$G20,1, 0), 0)` |
| DK20 | `=IF('Stars and Floors'!$A20, IF(DK$1='Stars and Floors'!$C20,1, 0) + IF(DK$1='Stars and Floors'!$D20,1, 0) + IF(DK$1='Stars and Floors'!$E20,1, 0) + IF(DK$1='Stars and Floors'!$F20,1, 0) + IF(DK$1='Stars and Floors'!$G20,1, 0), 0)` |
| DL20 | `=IF('Stars and Floors'!$A20, IF(DL$1='Stars and Floors'!$C20,1, 0) + IF(DL$1='Stars and Floors'!$D20,1, 0) + IF(DL$1='Stars and Floors'!$E20,1, 0) + IF(DL$1='Stars and Floors'!$F20,1, 0) + IF(DL$1='Stars and Floors'!$G20,1, 0), 0)` |
| DM20 | `=IF('Stars and Floors'!$A20, IF(DM$1='Stars and Floors'!$C20,1, 0) + IF(DM$1='Stars and Floors'!$D20,1, 0) + IF(DM$1='Stars and Floors'!$E20,1, 0) + IF(DM$1='Stars and Floors'!$F20,1, 0) + IF(DM$1='Stars and Floors'!$G20,1, 0), 0)` |
| DN20 | `=IF('Stars and Floors'!$A20, IF(DN$1='Stars and Floors'!$C20,1, 0) + IF(DN$1='Stars and Floors'!$D20,1, 0) + IF(DN$1='Stars and Floors'!$E20,1, 0) + IF(DN$1='Stars and Floors'!$F20,1, 0) + IF(DN$1='Stars and Floors'!$G20,1, 0), 0)` |
| DO20 | `=IF('Stars and Floors'!$A20, IF(DO$1='Stars and Floors'!$C20,1, 0) + IF(DO$1='Stars and Floors'!$D20,1, 0) + IF(DO$1='Stars and Floors'!$E20,1, 0) + IF(DO$1='Stars and Floors'!$F20,1, 0) + IF(DO$1='Stars and Floors'!$G20,1, 0), 0)` |
| DP20 | `=IF('Stars and Floors'!$A20, IF(DP$1='Stars and Floors'!$C20,1, 0) + IF(DP$1='Stars and Floors'!$D20,1, 0) + IF(DP$1='Stars and Floors'!$E20,1, 0) + IF(DP$1='Stars and Floors'!$F20,1, 0) + IF(DP$1='Stars and Floors'!$G20,1, 0), 0)` |
| DQ20 | `=IF('Stars and Floors'!$A20, IF(DQ$1='Stars and Floors'!$C20,1, 0) + IF(DQ$1='Stars and Floors'!$D20,1, 0) + IF(DQ$1='Stars and Floors'!$E20,1, 0) + IF(DQ$1='Stars and Floors'!$F20,1, 0) + IF(DQ$1='Stars and Floors'!$G20,1, 0), 0)` |
| B21 | `=SUM(B2:B20)` |
| C21 | `=SUM(C2:C20)` |
| D21 | `=SUM(D2:D20)` |
| E21 | `=SUM(E2:E20)` |
| F21 | `=SUM(F2:F20)` |
| G21 | `=SUM(G2:G20)` |
| H21 | `=SUM(H2:H20)` |
| I21 | `=SUM(I2:I20)` |
| J21 | `=SUM(J2:J20)` |
| K21 | `=SUM(K2:K20)` |
| L21 | `=SUM(L2:L20)` |
| M21 | `=SUM(M2:M20)` |
| N21 | `=SUM(N2:N20)` |
| O21 | `=SUM(O2:O20)` |
| P21 | `=SUM(P2:P20)` |
| Q21 | `=SUM(Q2:Q20)` |
| R21 | `=SUM(R2:R20)` |
| S21 | `=SUM(S2:S20)` |
| T21 | `=SUM(T2:T20)` |
| U21 | `=SUM(U2:U20)` |
| V21 | `=SUM(V2:V20)` |
| W21 | `=SUM(W2:W20)` |
| X21 | `=SUM(X2:X20)` |
| Y21 | `=SUM(Y2:Y20)` |
| Z21 | `=SUM(Z2:Z20)` |
| AA21 | `=SUM(AA2:AA20)` |
| AB21 | `=SUM(AB2:AB20)` |
| AC21 | `=SUM(AC2:AC20)` |
| AD21 | `=SUM(AD2:AD20)` |
| AE21 | `=SUM(AE2:AE20)` |
| AF21 | `=SUM(AF2:AF20)` |
| AG21 | `=SUM(AG2:AG20)` |
| AH21 | `=SUM(AH2:AH20)` |
| AI21 | `=SUM(AI2:AI20)` |
| AJ21 | `=SUM(AJ2:AJ20)` |
| AK21 | `=SUM(AK2:AK20)` |
| AL21 | `=SUM(AL2:AL20)` |
| AM21 | `=SUM(AM2:AM20)` |
| AN21 | `=SUM(AN2:AN20)` |
| AO21 | `=SUM(AO2:AO20)` |
| AP21 | `=SUM(AP2:AP20)` |
| AQ21 | `=SUM(AQ2:AQ20)` |
| AR21 | `=SUM(AR2:AR20)` |
| AS21 | `=SUM(AS2:AS20)` |
| AT21 | `=SUM(AT2:AT20)` |
| AU21 | `=SUM(AU2:AU20)` |
| AV21 | `=SUM(AV2:AV20)` |
| AW21 | `=SUM(AW2:AW20)` |
| AX21 | `=SUM(AX2:AX20)` |
| AY21 | `=SUM(AY2:AY20)` |
| AZ21 | `=SUM(AZ2:AZ20)` |
| BA21 | `=SUM(BA2:BA20)` |
| BB21 | `=SUM(BB2:BB20)` |
| BC21 | `=SUM(BC2:BC20)` |
| BD21 | `=SUM(BD2:BD20)` |
| BE21 | `=SUM(BE2:BE20)` |
| BF21 | `=SUM(BF2:BF20)` |
| BG21 | `=SUM(BG2:BG20)` |
| BH21 | `=SUM(BH2:BH20)` |
| BI21 | `=SUM(BI2:BI20)` |
| BJ21 | `=SUM(BJ2:BJ20)` |
| BK21 | `=SUM(BK2:BK20)` |
| BL21 | `=SUM(BL2:BL20)` |
| BM21 | `=SUM(BM2:BM20)` |
| BN21 | `=SUM(BN2:BN20)` |
| BO21 | `=SUM(BO2:BO20)` |
| BP21 | `=SUM(BP2:BP20)` |
| BQ21 | `=SUM(BQ2:BQ20)` |
| BR21 | `=SUM(BR2:BR20)` |
| BS21 | `=SUM(BS2:BS20)` |
| BT21 | `=SUM(BT2:BT20)` |
| BU21 | `=SUM(BU2:BU20)` |
| BV21 | `=SUM(BV2:BV20)` |
| BW21 | `=SUM(BW2:BW20)` |
| BX21 | `=SUM(BX2:BX20)` |
| BY21 | `=SUM(BY2:BY20)` |
| BZ21 | `=SUM(BZ2:BZ20)` |
| CA21 | `=SUM(CA2:CA20)` |
| CB21 | `=SUM(CB2:CB20)` |
| CC21 | `=SUM(CC2:CC20)` |
| CD21 | `=SUM(CD2:CD20)` |
| CE21 | `=SUM(CE2:CE20)` |
| CF21 | `=SUM(CF2:CF20)` |
| CG21 | `=SUM(CG2:CG20)` |
| CH21 | `=SUM(CH2:CH20)` |
| CI21 | `=SUM(CI2:CI20)` |
| CJ21 | `=SUM(CJ2:CJ20)` |
| CK21 | `=SUM(CK2:CK20)` |
| CL21 | `=SUM(CL2:CL20)` |
| CM21 | `=SUM(CM2:CM20)` |
| CN21 | `=SUM(CN2:CN20)` |
| CO21 | `=SUM(CO2:CO20)` |
| CP21 | `=SUM(CP2:CP20)` |
| CQ21 | `=SUM(CQ2:CQ20)` |
| CR21 | `=SUM(CR2:CR20)` |
| CS21 | `=SUM(CS2:CS20)` |
| CT21 | `=SUM(CT2:CT20)` |
| CU21 | `=SUM(CU2:CU20)` |
| CV21 | `=SUM(CV2:CV20)` |
| CW21 | `=SUM(CW2:CW20)` |
| CX21 | `=SUM(CX2:CX20)` |
| CY21 | `=SUM(CY2:CY20)` |
| CZ21 | `=SUM(CZ2:CZ20)` |
| DA21 | `=SUM(DA2:DA20)` |
| DB21 | `=SUM(DB2:DB20)` |
| DC21 | `=SUM(DC2:DC20)` |
| DD21 | `=SUM(DD2:DD20)` |
| DE21 | `=SUM(DE2:DE20)` |
| DF21 | `=SUM(DF2:DF20)` |
| DG21 | `=SUM(DG2:DG20)` |
| DH21 | `=SUM(DH2:DH20)` |
| DI21 | `=SUM(DI2:DI20)` |
| DJ21 | `=SUM(DJ2:DJ20)` |
| DK21 | `=SUM(DK2:DK20)` |
| DL21 | `=SUM(DL2:DL20)` |
| DM21 | `=SUM(DM2:DM20)` |
| DN21 | `=SUM(DN2:DN20)` |
| DO21 | `=SUM(DO2:DO20)` |
| DP21 | `=SUM(DP2:DP20)` |
| DQ21 | `=SUM(DQ2:DQ20)` |
| A22 | `==TRANSPOSE(B1:DQ1)` |
| B22 | `==TRANSPOSE(B21:DQ21)` |
| D22 | `==sort(A22:B141,2,false)` |
| H23 | `=if('Stars and Floors'!$A2,'Stars and Floors'!C2,"")` |
| I23 | `=if('Stars and Floors'!$A2,'Stars and Floors'!D2,"")` |
| J23 | `=if('Stars and Floors'!$A2,'Stars and Floors'!E2,"")` |
| K23 | `=if('Stars and Floors'!$A2,'Stars and Floors'!F2,"")` |
| L23 | `=if('Stars and Floors'!$A2,'Stars and Floors'!G2,"")` |
| H24 | `=if('Stars and Floors'!$A3,'Stars and Floors'!C3,"")` |
| I24 | `=if('Stars and Floors'!$A3,'Stars and Floors'!D3,"")` |
| J24 | `=if('Stars and Floors'!$A3,'Stars and Floors'!E3,"")` |
| K24 | `=if('Stars and Floors'!$A3,'Stars and Floors'!F3,"")` |
| L24 | `=if('Stars and Floors'!$A3,'Stars and Floors'!G3,"")` |
| H25 | `=if('Stars and Floors'!$A4,'Stars and Floors'!C4,"")` |
| I25 | `=if('Stars and Floors'!$A4,'Stars and Floors'!D4,"")` |
| J25 | `=if('Stars and Floors'!$A4,'Stars and Floors'!E4,"")` |
| K25 | `=if('Stars and Floors'!$A4,'Stars and Floors'!F4,"")` |
| L25 | `=if('Stars and Floors'!$A4,'Stars and Floors'!G4,"")` |
| H26 | `=if('Stars and Floors'!$A5,'Stars and Floors'!C5,"")` |
| I26 | `=if('Stars and Floors'!$A5,'Stars and Floors'!D5,"")` |
| J26 | `=if('Stars and Floors'!$A5,'Stars and Floors'!E5,"")` |
| K26 | `=if('Stars and Floors'!$A5,'Stars and Floors'!F5,"")` |
| L26 | `=if('Stars and Floors'!$A5,'Stars and Floors'!G5,"")` |
| H27 | `=if('Stars and Floors'!$A6,'Stars and Floors'!C6,"")` |
| I27 | `=if('Stars and Floors'!$A6,'Stars and Floors'!D6,"")` |
| J27 | `=if('Stars and Floors'!$A6,'Stars and Floors'!E6,"")` |
| K27 | `=if('Stars and Floors'!$A6,'Stars and Floors'!F6,"")` |
| L27 | `=if('Stars and Floors'!$A6,'Stars and Floors'!G6,"")` |
| H28 | `=if('Stars and Floors'!$A7,'Stars and Floors'!C7,"")` |
| I28 | `=if('Stars and Floors'!$A7,'Stars and Floors'!D7,"")` |
| J28 | `=if('Stars and Floors'!$A7,'Stars and Floors'!E7,"")` |
| K28 | `=if('Stars and Floors'!$A7,'Stars and Floors'!F7,"")` |
| L28 | `=if('Stars and Floors'!$A7,'Stars and Floors'!G7,"")` |
| H29 | `=if('Stars and Floors'!$A8,'Stars and Floors'!C8,"")` |
| I29 | `=if('Stars and Floors'!$A8,'Stars and Floors'!D8,"")` |
| J29 | `=if('Stars and Floors'!$A8,'Stars and Floors'!E8,"")` |
| K29 | `=if('Stars and Floors'!$A8,'Stars and Floors'!F8,"")` |
| L29 | `=if('Stars and Floors'!$A8,'Stars and Floors'!G8,"")` |
| H30 | `=if('Stars and Floors'!$A9,'Stars and Floors'!C9,"")` |
| I30 | `=if('Stars and Floors'!$A9,'Stars and Floors'!D9,"")` |
| J30 | `=if('Stars and Floors'!$A9,'Stars and Floors'!E9,"")` |
| K30 | `=if('Stars and Floors'!$A9,'Stars and Floors'!F9,"")` |
| L30 | `=if('Stars and Floors'!$A9,'Stars and Floors'!G9,"")` |
| H31 | `=if('Stars and Floors'!$A10,'Stars and Floors'!C10,"")` |
| I31 | `=if('Stars and Floors'!$A10,'Stars and Floors'!D10,"")` |
| J31 | `=if('Stars and Floors'!$A10,'Stars and Floors'!E10,"")` |
| K31 | `=if('Stars and Floors'!$A10,'Stars and Floors'!F10,"")` |
| L31 | `=if('Stars and Floors'!$A10,'Stars and Floors'!G10,"")` |
| H32 | `=if('Stars and Floors'!$A11,'Stars and Floors'!C11,"")` |
| I32 | `=if('Stars and Floors'!$A11,'Stars and Floors'!D11,"")` |
| J32 | `=if('Stars and Floors'!$A11,'Stars and Floors'!E11,"")` |
| K32 | `=if('Stars and Floors'!$A11,'Stars and Floors'!F11,"")` |
| L32 | `=if('Stars and Floors'!$A11,'Stars and Floors'!G11,"")` |
| H33 | `=if('Stars and Floors'!$A12,'Stars and Floors'!C12,"")` |
| I33 | `=if('Stars and Floors'!$A12,'Stars and Floors'!D12,"")` |
| J33 | `=if('Stars and Floors'!$A12,'Stars and Floors'!E12,"")` |
| K33 | `=if('Stars and Floors'!$A12,'Stars and Floors'!F12,"")` |
| L33 | `=if('Stars and Floors'!$A12,'Stars and Floors'!G12,"")` |
| H34 | `=if('Stars and Floors'!$A13,'Stars and Floors'!C13,"")` |
| I34 | `=if('Stars and Floors'!$A13,'Stars and Floors'!D13,"")` |
| J34 | `=if('Stars and Floors'!$A13,'Stars and Floors'!E13,"")` |
| K34 | `=if('Stars and Floors'!$A13,'Stars and Floors'!F13,"")` |
| L34 | `=if('Stars and Floors'!$A13,'Stars and Floors'!G13,"")` |
| H35 | `=if('Stars and Floors'!$A14,'Stars and Floors'!C14,"")` |
| I35 | `=if('Stars and Floors'!$A14,'Stars and Floors'!D14,"")` |
| J35 | `=if('Stars and Floors'!$A14,'Stars and Floors'!E14,"")` |
| K35 | `=if('Stars and Floors'!$A14,'Stars and Floors'!F14,"")` |
| L35 | `=if('Stars and Floors'!$A14,'Stars and Floors'!G14,"")` |
| H36 | `=if('Stars and Floors'!$A15,'Stars and Floors'!C15,"")` |
| I36 | `=if('Stars and Floors'!$A15,'Stars and Floors'!D15,"")` |
| J36 | `=if('Stars and Floors'!$A15,'Stars and Floors'!E15,"")` |
| K36 | `=if('Stars and Floors'!$A15,'Stars and Floors'!F15,"")` |
| L36 | `=if('Stars and Floors'!$A15,'Stars and Floors'!G15,"")` |
| H37 | `=if('Stars and Floors'!$A16,'Stars and Floors'!C16,"")` |
| I37 | `=if('Stars and Floors'!$A16,'Stars and Floors'!D16,"")` |
| J37 | `=if('Stars and Floors'!$A16,'Stars and Floors'!E16,"")` |
| K37 | `=if('Stars and Floors'!$A16,'Stars and Floors'!F16,"")` |
| L37 | `=if('Stars and Floors'!$A16,'Stars and Floors'!G16,"")` |
| H38 | `=if('Stars and Floors'!$A17,'Stars and Floors'!C17,"")` |
| I38 | `=if('Stars and Floors'!$A17,'Stars and Floors'!D17,"")` |
| J38 | `=if('Stars and Floors'!$A17,'Stars and Floors'!E17,"")` |
| K38 | `=if('Stars and Floors'!$A17,'Stars and Floors'!F17,"")` |
| L38 | `=if('Stars and Floors'!$A17,'Stars and Floors'!G17,"")` |
| H39 | `=if('Stars and Floors'!$A18,'Stars and Floors'!C18,"")` |
| I39 | `=if('Stars and Floors'!$A18,'Stars and Floors'!D18,"")` |
| J39 | `=if('Stars and Floors'!$A18,'Stars and Floors'!E18,"")` |
| K39 | `=if('Stars and Floors'!$A18,'Stars and Floors'!F18,"")` |
| L39 | `=if('Stars and Floors'!$A18,'Stars and Floors'!G18,"")` |
| H40 | `=if('Stars and Floors'!$A19,'Stars and Floors'!C19,"")` |
| I40 | `=if('Stars and Floors'!$A19,'Stars and Floors'!D19,"")` |
| J40 | `=if('Stars and Floors'!$A19,'Stars and Floors'!E19,"")` |
| K40 | `=if('Stars and Floors'!$A19,'Stars and Floors'!F19,"")` |
| L40 | `=if('Stars and Floors'!$A19,'Stars and Floors'!G19,"")` |
| H41 | `=if('Stars and Floors'!$A20,'Stars and Floors'!C20,"")` |
| I41 | `=if('Stars and Floors'!$A20,'Stars and Floors'!D20,"")` |
| J41 | `=if('Stars and Floors'!$A20,'Stars and Floors'!E20,"")` |
| K41 | `=if('Stars and Floors'!$A20,'Stars and Floors'!F20,"")` |
| L41 | `=if('Stars and Floors'!$A20,'Stars and Floors'!G20,"")` |
