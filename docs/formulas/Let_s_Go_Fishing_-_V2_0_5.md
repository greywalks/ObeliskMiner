# Let_s_Go_Fishing_-_V2_0_5

## Sheet: Obefish

659 formulas

| Cell | Formula |
|---|---|
| P2 | `=if($Q$16=TRUE,"Gems Left", "Total Gems Needed")` |
| I3 | `=IF(G3=H3,"👍🏻",((AX3-$AH$34)/$AH$34))` |
| J3 | `=IF(G3=H3,"👍🏻",VLOOKUP($G$3+1,'Control-Upgs'!$A$3:$D$65,3))` |
| K3 | `=VLOOKUP($BB3,ImageMap!$A$1:$B$52,2)` |
| L3 | `=IF($BA3 = "", "", RANK($BA3, $BA$3:$BA$20, 0))` |
| M3 | `=if(BB3="","",if(G3=H3,"", rounddown(BB3/4,0)+1))` |
| O3 | `=sum(if(V3>=2,1000,0) + if(X3>=2,1250,0) + if(Z3>=2,1500,0) + if(AB3>=2,1750,0) + if(AD3>=2,30000,0) + if(AE3>=1,25000,0) + if(AE3=2,125000,0))` |
| P3 | `=1000+1250+1500+1750+30000+25000+125000-IF(Q16=TRUE,O3,0)` |
| Q3 | `=if($Q$20,O3/if($Q$16=TRUE,O3+P3,P3),"")` |
| S3 | `==LET(   fish_id, $BB3,   fish_cost, IF(ISNUMBER($BC3),$BC3,""),   fish_hr, IFERROR(INDEX('Fish Farming  Cards'!$D$14:$BE$14, MATCH(fish_id, 'Fish Farming  Cards'!$D$15:$BE$15, 0)), ""),   IF(OR($I3="", fish_cost="", fish_cost=0, fish_hr="", fish_hr=0), "",      fish_cost/fish_hr   ) )` |
| T3 | `==LET(   fish_id, $BB3,   fish_cost, IF(ISNUMBER($BC3),$BC3,""),   fish_hr, IFERROR(INDEX('Fish Farming  Cards'!$D$14:$BE$14, MATCH(fish_id, 'Fish Farming  Cards'!$D$15:$BE$15, 0)), ""),   IF(OR($I3="", fish_cost="", fish_cost=0, fish_hr="", fish_hr=0), "",      $I3 * fish_hr / fish_cost   ) )` |
| AC3 | `=IF(AND(V3>=3, X3>=3, Z3>=3, AB3>=3), AQ6, "") ` |
| AH3 | `=ROUND(AI3*AJ3,0)*AK3*AL3*AM3*AN3*AO3` |
| AJ3 | `=1.16^G3` |
| AK3 | `=1+0.04*G8` |
| AL3 | `=1+0.05*G24` |
| AM3 | `=1+0.1*G42` |
| AN3 | `=IFERROR(SWITCH(AC16,0,1,1,1.02,2,1.05,3,1.1,4,1+(C41/100)),1)` |
| AO3 | `=1+(0.1*C37)` |
| AU3 | `=ROUND(AI3*(1.16^(G3+1)),0)*AK3*AL3*AM3*AN3*AO3` |
| AX3 | `=((AU3+(AH5*AH7*AH9))*IF(ISNUMBER(MATCH(B34, AG42:AG46, 0)), AH11, 1))*AJ34/AK34` |
| BA3 | `=IF(OR($T3="",$S3=""),"", ABS((($T3^1.5) / LN($S3))*100000)) ` |
| BB3 | `=VLOOKUP($G$3+1,'Control-Upgs'!$A$3:$D$65,4)` |
| BC3 | `=IF($G3=$H3,"👍🏻",VLOOKUP($G$3+1,'Control-Upgs'!$A$3:$D$65,2))` |
| I4 | `=IF(G4=H4,"👍🏻",((AX4-$AH$34)/$AH$34))` |
| J4 | `=IF(G4=H4,"👍🏻",VLOOKUP($G$4+1,'Control-Upgs'!$E$3:$H$52,3))` |
| K4 | `=VLOOKUP($BB4,ImageMap!$A$1:$B$52,2)` |
| L4 | `=IF($BA4 = "", "", RANK($BA4, $BA$3:$BA$20, 0))` |
| M4 | `=if(BB4="","",if(G4=H4,"", rounddown(BB4/4,0)+1))` |
| O4 | `=sum(if(V4>=2,2000,0) + if(X4>=2,2250,0) + if(Z4>=2,2500,0) + if(AB4>=2,2750,0) + if(AD4>=2,60000,0) + if(AE4>=1,50000,0) + if(AE4=2,150000,0))` |
| P4 | `=2000+2250+2500+2750+60000+50000+150000-IF(Q16=TRUE,O4,0)` |
| Q4 | `=if($Q$20,O4/if($Q$16=TRUE,O4+P4,P4),"")` |
| S4 | `==LET(   fish_id, $BB4,   fish_cost, IF(ISNUMBER($BC4),$BC4,""),   fish_hr, IFERROR(INDEX('Fish Farming  Cards'!$D$14:$BE$14, MATCH(fish_id, 'Fish Farming  Cards'!$D$15:$BE$15, 0)), ""),   IF(OR($I4="", fish_cost="", fish_cost=0, fish_hr="", fish_hr=0), "",      fish_cost/fish_hr   ) )` |
| T4 | `==LET(   fish_id, $BB4,   fish_cost, IF(ISNUMBER($BC4),$BC4,""),   fish_hr, IFERROR(INDEX('Fish Farming  Cards'!$D$14:$BE$14, MATCH(fish_id, 'Fish Farming  Cards'!$D$15:$BE$15, 0)), ""),   IF(OR($I4="", fish_cost="", fish_cost=0, fish_hr="", fish_hr=0), "",      $I4 * fish_hr / fish_cost   ) )` |
| U4 | `=IF($G$5>=1,AQ7,"")` |
| W4 | `=IF($G$5>=1,AQ8,"")` |
| Y4 | `=IF($G$5>=1,AQ9,"")` |
| AA4 | `=IF($G$5>=1,AQ10,"")` |
| AC4 | `=IF(AND(V4>=3, X4>=3, Z4>=3, AB4>=3), AQ11, "") ` |
| AU4 | `=SUM((AI5+1),AJ5,AL5:AP5)*AK5` |
| AX4 | `=((AH3+(AU4*AH7*AH9))*IF(ISNUMBER(MATCH(B34, AG42:AG46, 0)), AH11, 1))*AJ34/AK34` |
| BA4 | `=IF(OR($T4="",$S4=""),"", ABS((($T4^1.5) / LN($S4))*100000)) ` |
| BB4 | `=VLOOKUP($G$4+1,'Control-Upgs'!$E$3:$H$52,4)` |
| BC4 | `=IF($G4=$H4,"👍🏻",VLOOKUP($G$4+1,'Control-Upgs'!$E$3:$H$52,2))` |
| J5 | `=IF(G5=H5,"👍🏻",VLOOKUP($G$5+1,'Control-Upgs'!$I$3:$L$7,3))` |
| K5 | `=VLOOKUP($BB5,ImageMap!$A$1:$B$52,2)` |
| L5 | `=IF($BA5 = "", "", RANK($BA5, $BA$3:$BA$20, 0))` |
| M5 | `=if(BB5="","",if(G5=H5,"", rounddown(BB5/4,0)+1))` |
| O5 | `=sum(if(V5>=2,3000,0) + if(X5>=2,3250,0) + if(Z5>=2,3500,0) + if(AB5>=2,3750,0) + if(AD5>=2,90000,0) + if(AE5>=1,80000,0) + if(AE5=2,300000,0))` |
| P5 | `=3000+3250+3500+3750+90000+80000+300000-IF(Q16=TRUE,O5,0)` |
| Q5 | `=if($Q$20,O5/if($Q$16=TRUE,O5+P5,P5),"")` |
| S5 | `==LET(   fish_id, $BB5,   fish_cost, IF(ISNUMBER($BC5),$BC5,""),   fish_hr, IFERROR(INDEX('Fish Farming  Cards'!$D$14:$BE$14, MATCH(fish_id, 'Fish Farming  Cards'!$D$15:$BE$15, 0)), ""),   IF(OR(fish_cost="", fish_cost=0, fish_hr="", fish_hr=0), "",      fish_cost/fish_hr   ) )` |
| T5 | `==LET(   fish_id, $BB5,   fish_cost, IF(ISNUMBER($BC5),$BC5,""),   fish_hr, IFERROR(INDEX('Fish Farming  Cards'!$D$14:$BE$14, MATCH(fish_id, 'Fish Farming  Cards'!$D$15:$BE$15, 0)), ""),   IF(OR($I5="", fish_cost="", fish_cost=0, fish_hr="", fish_hr=0), "",      $I5 * fish_hr / fish_cost   ) )` |
| U5 | `=IF($G$5>=2,AQ12,"")` |
| W5 | `=IF($G$5>=2,AQ13,"")` |
| Y5 | `=IF($G$5>=2,AQ14,"")` |
| AA5 | `=IF($G$5>=2,AQ15,"")` |
| AC5 | `=IF(AND(V5>=3, X5>=3, Z5>=3, AB5>=3), AQ16, "") ` |
| AH5 | `=ROUNDDOWN(SUM(AI5:AJ5,AL5:AP5)*AK5,0)` |
| AI5 | `=G4` |
| AJ5 | `=2*G11` |
| AK5 | `=1+0.05*G20` |
| AL5 | `=G23` |
| AM5 | `=3*G31` |
| AN5 | `=5*G38` |
| AO5 | `=5*G42` |
| AP5 | `=IF(AND(AD14>0,C30>0),50,0)` |
| BA5 | `=IF(OR($T5="",$S5=""),"", ABS((($T5^1.5) / LN($S5))*100000)) ` |
| BB5 | `=VLOOKUP($G$5+1,'Control-Upgs'!$I$3:$L$7,4)` |
| BC5 | `=IF($G5=$H5,"👍🏻",VLOOKUP($G$5+1,'Control-Upgs'!$I$3:$L$7,2))` |
| I6 | `=IF($G$5<1, "", IF(G6=H6, "👍🏻", (AX6-$AH$34)/$AH$34))` |
| J6 | `=IF(G6=H6,"👍🏻",IF($G$5<1, "",VLOOKUP($G$6+1,'Control-Upgs'!$M$3:$P$42,3)))` |
| K6 | `=IF($G$5<1,"",VLOOKUP($BB6,ImageMap!$A$1:$B$52,2))` |
| L6 | `=IF($BA6 = "", "", RANK($BA6, $BA$3:$BA$20, 0))` |
| M6 | `=if(BB6="","",if(G6=H6,"", rounddown(BB6/4,0)+1))` |
| O6 | `=sum(if(V6>=2,4000,0) + if(X6>=2,4250,0) + if(Z6>=2,4500,0) + if(AB6>=2,4750,0) + if(AD6>=2,120000,0) + if(AE6>=1,100000,0) + if(AE6=2,400000,0))` |
| P6 | `=4000+4250+4500+4750+120000+100000+400000-IF(Q16=TRUE,O6,0)` |
| Q6 | `=if($Q$20,O6/if($Q$16=TRUE,O6+P6,P6),"")` |
| S6 | `==LET(   fish_id, $BB6,   fish_cost, IF(ISNUMBER($BC6),$BC6,""),   fish_hr, IFERROR(INDEX('Fish Farming  Cards'!$D$14:$BE$14, MATCH(fish_id, 'Fish Farming  Cards'!$D$15:$BE$15, 0)), ""),   IF(OR($I6="", fish_cost="", fish_cost=0, fish_hr="", fish_hr=0), "",      fish_cost/fish_hr   ) )` |
| T6 | `==LET(   fish_id, $BB6,   fish_cost, IF(ISNUMBER($BC6),$BC6,""),   fish_hr, IFERROR(INDEX('Fish Farming  Cards'!$D$14:$BE$14, MATCH(fish_id, 'Fish Farming  Cards'!$D$15:$BE$15, 0)), ""),   IF(OR($I6="", fish_cost="", fish_cost=0, fish_hr="", fish_hr=0), "",      $I6 * fish_hr / fish_cost   ) )` |
| U6 | `=IF($G$5>=3,AQ17,"")` |
| W6 | `=IF($G$5>=3,AQ18,"")` |
| Y6 | `=IF($G$5>=3,AQ19,"")` |
| AA6 | `=IF($G$5>=3,AQ20,"")` |
| AC6 | `=IF(AND(V6>=3, X6>=3, Z6>=3, AB6>=3), AQ21, "") ` |
| AU6 | `=(AI25-(0.5*(G6+1))-AK25-AL25)/AM25` |
| AX6 | `=AI34*AJ34/((AU6/(1*(1-AH27)*(1-AH29)*(1-AH31) + 2*AH27*(1-AH29)*(1-AH31) + 3*(1-AH27)*AH29*(1-AH31) + 5*(1-AH27)*(1-AH29)*AH31 + 6*AH27*AH29*(1-AH31) + 10*AH27*(1-AH29)*AH31 +15*(1-AH27)*AH29 *AH31 +30*AH27*AH29*AH31))*VLOOKUP(B34,AG36:AH46,2,FALSE))` |
| BA6 | `=IF(OR($T6="",$S6=""),"", ABS((($T6^1.5) / LN($S6))*100000)) ` |
| BB6 | `=IF($G$5<1, "",VLOOKUP($G$6+1,'Control-Upgs'!$M$3:$P$42,4))` |
| BC6 | `=IF($G6=$H6,"👍🏻",IF($G$5<1, "",VLOOKUP($G$6+1,'Control-Upgs'!$M$3:$P$42,2)))` |
| I7 | `=IF($G$5<1, "", IF(G7=H7, "👍🏻", (AX7-$AH$34)/$AH$34))` |
| J7 | `=IF(G7=H7,"👍🏻",IF($G$5<1, "",VLOOKUP($G$7+1,'Control-Upgs'!$Q$3:$T$32,3)))` |
| K7 | `=IF($G$5<1,"",VLOOKUP($BB7,ImageMap!$A$1:$B$52,2))` |
| L7 | `=IF($BA7 = "", "", RANK($BA7, $BA$3:$BA$20, 0))` |
| M7 | `=if(BB7="","",if(G7=H7,"", rounddown(BB7/4,0)+1))` |
| O7 | `=sum(if(V7>=2,5000,0) + if(X7>=2,5250,0) + if(Z7>=2,5500,0) + if(AB7>=2,5750,0) + if(AD7>=2,150000,0) + if(AE7>=1,150000,0) + if(AE7=2,500000,0))` |
| P7 | `=5000+5250+5500+5750+150000+150000+500000-IF(Q16=TRUE,O7,0)` |
| Q7 | `=if($Q$20,O7/if($Q$16=TRUE,O7+P7,P7),"")` |
| S7 | `==LET(   fish_id, $BB7,   fish_cost, IF(ISNUMBER($BC7),$BC7,""),   fish_hr, IFERROR(INDEX('Fish Farming  Cards'!$D$14:$BE$14, MATCH(fish_id, 'Fish Farming  Cards'!$D$15:$BE$15, 0)), ""),   IF(OR($I7="", fish_cost="", fish_cost=0, fish_hr="", fish_hr=0), "",      fish_cost/fish_hr   ) )` |
| T7 | `==LET(   fish_id, $BB7,   fish_cost, IF(ISNUMBER($BC7),$BC7,""),   fish_hr, IFERROR(INDEX('Fish Farming  Cards'!$D$14:$BE$14, MATCH(fish_id, 'Fish Farming  Cards'!$D$15:$BE$15, 0)), ""),   IF(OR($I7="", fish_cost="", fish_cost=0, fish_hr="", fish_hr=0), "",      $I7 * fish_hr / fish_cost   ) )` |
| U7 | `=IF($G$5>=4,AQ22,"")` |
| W7 | `=IF($G$5>=4,AQ23,"")` |
| Y7 | `=IF($G$5>=4,AQ24,"")` |
| AA7 | `=IF($G$5>=4,AQ25,"")` |
| AC7 | `=IF(AND(V7>=3, X7>=3, Z7>=3, AB7>=3), AQ26, "") ` |
| AH7 | `=SUM(AI7:AL7)` |
| AJ7 | `=0.25*G13` |
| AK7 | `=IF($V$3>2,0.25*C28,0)` |
| AL7 | `=0.1*C3` |
| AU7 | `=(1+0.03*(G7+1))*AJ14*AM14*AN14*(1+AK14+AL14)*(1+AO14)*(1+AO16)` |
| AX7 | `=AI34*(AU7*((1-AH16)*1+AH16*(1-AH20)*AH18+AH16*AH20*AH18*AH22))/AK34` |
| BA7 | `=IF(OR($T7="",$S7=""),"", ABS((($T7^1.5) / LN($S7))*100000)) ` |
| BB7 | `=IF($G$5<1, "",VLOOKUP($G$7+1,'Control-Upgs'!$Q$3:$T$32,4))` |
| BC7 | `=IF($G7=$H7,"👍🏻",IF($G$5<1, "",VLOOKUP($G$7+1,'Control-Upgs'!$Q$3:$T$32,2)))` |
| I8 | `=IF($G$5<2, "", IF(G8=H8, "👍🏻", (AX8-$AH$34)/$AH$34))` |
| J8 | `=IF(G8=H8,"👍🏻",IF($G$5<2, "",VLOOKUP($G$8+1,'Control-Upgs'!$U$3:$X$22,3)))` |
| K8 | `=IF($G$5<2,"",VLOOKUP($BB8,ImageMap!$A$1:$B$52,2))` |
| L8 | `=IF($BA8 = "", "", RANK($BA8, $BA$3:$BA$20, 0))` |
| M8 | `=if(BB8="","",if(G8=H8,"", rounddown(BB8/4,0)+1))` |
| O8 | `=sum(if(V8>=2,6000,0) + if(X8>=2,6250,0) + if(Z8>=2,6500,0) + if(AB8>=2,6750,0) + if(AD8>=2,180000,0) + if(AE8>=1,175000,0) + if(AE8=2,750000,0))` |
| P8 | `=6000+6250+6500+6750+180000+175000+750000-IF(Q16=TRUE,O8,0)` |
| Q8 | `=if($Q$20,O8/if($Q$16=TRUE,O8+P8,P8),"")` |
| S8 | `==LET(   fish_id, $BB8,   fish_cost, IF(ISNUMBER($BC8),$BC8,""),   fish_hr, IFERROR(INDEX('Fish Farming  Cards'!$D$14:$BE$14, MATCH(fish_id, 'Fish Farming  Cards'!$D$15:$BE$15, 0)), ""),   IF(OR($I8="", fish_cost="", fish_cost=0, fish_hr="", fish_hr=0), "",      fish_cost/fish_hr   ) )` |
| T8 | `==LET(   fish_id, $BB8,   fish_cost, IF(ISNUMBER($BC8),$BC8,""),   fish_hr, IFERROR(INDEX('Fish Farming  Cards'!$D$14:$BE$14, MATCH(fish_id, 'Fish Farming  Cards'!$D$15:$BE$15, 0)), ""),   IF(OR($I8="", fish_cost="", fish_cost=0, fish_hr="", fish_hr=0), "",      $I8 * fish_hr / fish_cost   ) )` |
| U8 | `=IF($G$5>=5,AQ27,"")` |
| W8 | `=IF($G$5>=5,AQ28,"")` |
| Y8 | `=IF($G$5>=5,AQ29,"")` |
| AA8 | `=IF($G$5>=5,AQ30,"")` |
| AC8 | `=IF(AND(V8>=3, X8>=3, Z8>=3, AB8>=3), AQ31, "") ` |
| AU8 | `=ROUND(AI3*AJ3,0)*(1+0.04*(G8+1))*AL3*AM3*AN3*AO3` |
| AX8 | `=((AU8+(AH5*AH7*AH9))*IF(ISNUMBER(MATCH(B34, AG42:AG46, 0)), AH11, 1))*AJ34/AK34` |
| BA8 | `=IF(OR($T8="",$S8=""),"", ABS((($T8^1.5) / LN($S8))*100000)) ` |
| BB8 | `=IF($G$5<2, "",VLOOKUP($G$8+1,'Control-Upgs'!$U$3:$X$22,4))` |
| BC8 | `=IF($G8=$H8,"👍🏻",IF($G$5<2, "",VLOOKUP($G$8+1,'Control-Upgs'!$U$3:$X$22,2)))` |
| I9 | `=IF($G$5<2, "", IF(G9=H9, "👍🏻", (AX9-$AH$34)/$AH$34))` |
| J9 | `=IF(G9=H9,"👍🏻",IF($G$5<2, "",VLOOKUP($G$9+1,'Control-Upgs'!$Y$3:$AB$22,3)))` |
| K9 | `=IF($G$5<2,"",VLOOKUP($BB9,ImageMap!$A$1:$B$52,2))` |
| L9 | `=IF($BA9 = "", "", RANK($BA9, $BA$3:$BA$20, 0))` |
| M9 | `=if(BB9="","",if(G9=H9,"", rounddown(BB9/4,0)+1))` |
| S9 | `==LET(   fish_id, $BB9,   fish_cost, IF(ISNUMBER($BC9),$BC9,""),   fish_hr, IFERROR(INDEX('Fish Farming  Cards'!$D$14:$BE$14, MATCH(fish_id, 'Fish Farming  Cards'!$D$15:$BE$15, 0)), ""),   IF(OR($I9="", fish_cost="", fish_cost=0, fish_hr="", fish_hr=0), "",      fish_cost/fish_hr   ) )` |
| T9 | `==LET(   fish_id, $BB9,   fish_cost, IF(ISNUMBER($BC9),$BC9,""),   fish_hr, IFERROR(INDEX('Fish Farming  Cards'!$D$14:$BE$14, MATCH(fish_id, 'Fish Farming  Cards'!$D$15:$BE$15, 0)), ""),   IF(OR($I9="", fish_cost="", fish_cost=0, fish_hr="", fish_hr=0), "",      $I9 * fish_hr / fish_cost   ) )` |
| AH9 | `=PRODUCT(AI9:AO9)` |
| AI9 | `=1+0.06*G9` |
| AJ9 | `=1+0.08*G26` |
| AK9 | `=1+0.1*G38` |
| AL9 | `=1+0.02*C12` |
| AM9 | `==1+0.02*G43*COUNTIF({AD3;AD4;AD5;AD6;AD7;AD8;AD10;AD11;AD12;AD13;AD14},">0")` |
| AN9 | `=if(AD3>1, 1+0.0005*C29,1)` |
| AO9 | `=IF(AD14>0,1+(0.0001*C30),1)` |
| AU9 | `=(1+0.06*(G9+1))*PRODUCT(AJ9:AO9)` |
| AX9 | `=((AH3+(AH5*AH7*AU9))*IF(ISNUMBER(MATCH(B34, AG42:AG46, 0)), AH11, 1))*AJ34/AK34` |
| BA9 | `=IF(OR($T9="",$S9=""),"", ABS((($T9^1.5) / LN($S9))*100000)) ` |
| BB9 | `=IF($G$5<2, "",VLOOKUP($G$9+1,'Control-Upgs'!$Y$3:$AB$22,4))` |
| BC9 | `=IF($G9=$H9,"👍🏻",IF($G$5<2, "",VLOOKUP($G$9+1,'Control-Upgs'!$Y$3:$AB$22,2)))` |
| I10 | `=IF($G$5<3, "", IF(G10=H10, "👍🏻", (AX10-$AH$34)/$AH$34))` |
| J10 | `=IF(G10=H10,"👍🏻",IF($G$5<3, "",VLOOKUP($G$10+1,'Control-Upgs'!$AC$3:$AF$32,3)))` |
| K10 | `=IF($G$5<3,"",VLOOKUP($BB10,ImageMap!$A$1:$B$52,2))` |
| L10 | `=IF($BA10 = "", "", RANK($BA10, $BA$3:$BA$20, 0))` |
| M10 | `=if(BB10="","",if(G10=H10,"", rounddown(BB10/4,0)+1))` |
| O10 | `=sum(if(V10>=2,7000,0) + if(X10>=2,7250,0) + if(Z10>=2,7500,0) + if(AB10>=2,7750,0) + if(AD10>=2,210000,0) + if(AE10>=1,225000,0) + if(AE10=2,1100000,0))` |
| P10 | `=7000+7250+7500+7750+210000+225000+1100000-IF(Q16=TRUE,O10,0)` |
| Q10 | `=if($Q$20,O10/if($Q$16=TRUE,O10+P10,P10),"")` |
| S10 | `==LET(   fish_id, $BB10,   fish_cost, IF(ISNUMBER($BC10),$BC10,""),   fish_hr, IFERROR(INDEX('Fish Farming  Cards'!$D$14:$BE$14, MATCH(fish_id, 'Fish Farming  Cards'!$D$15:$BE$15, 0)), ""),   IF(OR($I10="", fish_cost="", fish_cost=0, fish_hr="", fish_hr=0), "",      fish_cost/fish_hr   ) )` |
| T10 | `==LET(   fish_id, $BB10,   fish_cost, IF(ISNUMBER($BC10),$BC10,""),   fish_hr, IFERROR(INDEX('Fish Farming  Cards'!$D$14:$BE$14, MATCH(fish_id, 'Fish Farming  Cards'!$D$15:$BE$15, 0)), ""),   IF(OR($I10="", fish_cost="", fish_cost=0, fish_hr="", fish_hr=0), "",      $I10 * fish_hr / fish_cost   ) )` |
| U10 | `=IF($G$15>=1,AR2,"")` |
| W10 | `=IF($G$15>=1,AR3,"")` |
| Y10 | `=IF($G$15>=1,AR4,"")` |
| AA10 | `=IF($G$15>=1,AR5,"")` |
| AC10 | `=IF(AND(V10>=3, X10>=3, Z10>=3, AB10>=3), AR6, "") ` |
| AU10 | `=(0.005*(G10+1))+SUM(AJ27:AL27)` |
| AX10 | `=AI34*AJ34/ ((AH25 / (1*(1-AU10)*(1-AH29)*(1-AH31) + 2*AU10*(1-AH29)*(1-AH31) + 3*(1-AU10)*AH29*(1-AH31) + 5*(1-AU10)*(1-AH29)*AH31 + 6*AU10*AH29*(1-AH31) + 10*AU10*(1-AH29)*AH31 +15*(1-AU10)*AH29 *AH31 +30*AU10*AH29*AH31))*VLOOKUP(B34,AG36:AH46,2,FALSE))` |
| BA10 | `=IF(OR($T10="",$S10=""),"", ABS((($T10^1.5) / LN($S10))*100000)) ` |
| BB10 | `=IF($G$5<3, "",VLOOKUP($G$10+1,'Control-Upgs'!$AC$3:$AF$32,4))` |
| BC10 | `=IF($G10=$H10,"👍🏻",IF($G$5<3, "",VLOOKUP($G$10+1,'Control-Upgs'!$AC$3:$AF$32,2)))` |
| I11 | `=IF($G$5<3, "", IF(G11=H11, "👍🏻", (AX11-$AH$34)/$AH$34))` |
| J11 | `=IF(G11=H11,"👍🏻",IF($G$5<3, "",VLOOKUP($G$11+1,'Control-Upgs'!$AG$3:$AJ$32,3)))` |
| K11 | `=IF($G$5<3,"",VLOOKUP($BB11,ImageMap!$A$1:$B$52,2))` |
| L11 | `=IF($BA11 = "", "", RANK($BA11, $BA$3:$BA$20, 0))` |
| M11 | `=if(BB11="","",if(G11=H11,"", rounddown(BB11/4,0)+1))` |
| O11 | `=sum(if(V11>=2,8000,0) + if(X11>=2,8250,0) + if(Z11>=2,8500,0) + if(AB11>=2,8750,0) + if(AD11>=2,240000,0) + if(AE11>=1,266000,0) + if(AE11=2,1260000,0))` |
| P11 | `=8000+8250+8500+8750+240000+266000+1260000-IF(Q16=TRUE,O11,0)` |
| Q11 | `=if($Q$20,O11/if($Q$16=TRUE,O11+P11,P11),"")` |
| S11 | `==LET(   fish_id, $BB11,   fish_cost, IF(ISNUMBER($BC11),$BC11,""),   fish_hr, IFERROR(INDEX('Fish Farming  Cards'!$D$14:$BE$14, MATCH(fish_id, 'Fish Farming  Cards'!$D$15:$BE$15, 0)), ""),   IF(OR($I11="", fish_cost="", fish_cost=0, fish_hr="", fish_hr=0), "",      fish_cost/fish_hr   ) )` |
| T11 | `==LET(   fish_id, $BB11,   fish_cost, IF(ISNUMBER($BC11),$BC11,""),   fish_hr, IFERROR(INDEX('Fish Farming  Cards'!$D$14:$BE$14, MATCH(fish_id, 'Fish Farming  Cards'!$D$15:$BE$15, 0)), ""),   IF(OR($I11="", fish_cost="", fish_cost=0, fish_hr="", fish_hr=0), "",      $I11 * fish_hr / fish_cost   ) )` |
| U11 | `=IF($G$15>=2,AR7,"")` |
| W11 | `=IF($G$15>=2,AR8,"")` |
| Y11 | `=IF($G$15>=2,AR9,"")` |
| AA11 | `=IF($G$15>=2,AR10,"")` |
| AC11 | `=IF(AND(V11>=3, X11>=3, Z11>=3, AB11>=3), AR11, "") ` |
| AH11 | `=(1+AI11+AJ11)*(1+AK11)*(1+AL11)*(1+AM11)*(1+AN11)*(1+AO11)*(1+AO12)` |
| AI11 | `=0.05*G17` |
| AJ11 | `=0.05*G35` |
| AK11 | `==0.03*G43*COUNTIF({AD3;AD4;AD5;AD6;AD7;AD8;AD10;AD11;AD12;AD13;AD14},">0")` |
| AL11 | `=if(AD3>1, 0.0005*C29,0)` |
| AM11 | `=IF(ISBLANK(C18), 0, C18*0.05+0.05)` |
| AN11 | `=IF(C25,0.25,0)` |
| AO11 | `=0.1*C36` |
| AU11 | `=(SUM(AI5,AL5:AP5)+(2*(G11+1)))*AK5` |
| AX11 | `=((AH3+(AU11*AH7*AH9))*IF(ISNUMBER(MATCH(B34, AG42:AG46, 0)), AH11, 1))*AJ34/AK34` |
| BA11 | `=IF(OR($T11="",$S11=""),"", ABS((($T11^1.5) / LN($S11))*100000)) ` |
| BB11 | `=IF($G$5<3, "",VLOOKUP($G$11+1,'Control-Upgs'!$AG$3:$AJ$32,4))` |
| BC11 | `=IF($G11=$H11,"👍🏻",IF($G$5<3, "",VLOOKUP($G$11+1,'Control-Upgs'!$AG$3:$AJ$32,2)))` |
| I12 | `=IF($G$5<4, "", IF(G12=H12, "👍🏻", (AX12-$AH$34)/$AH$34))` |
| J12 | `=IF(G12=H12,"👍🏻",IF($G$5<4, "",VLOOKUP($G$12+1,'Control-Upgs'!$AK$3:$AN$27,3)))` |
| K12 | `=IF($G$5<4,"",VLOOKUP($BB12,ImageMap!$A$1:$B$52,2))` |
| L12 | `=IF($BA12 = "", "", RANK($BA12, $BA$3:$BA$20, 0))` |
| M12 | `=if(BB12="","",if(G12=H12,"", rounddown(BB12/4,0)+1))` |
| O12 | `=sum(if(V12>=2,9000,0) + if(X12>=2,9250,0) + if(Z12>=2,9500,0) + if(AB12>=2,9750,0) + if(AD12>=2,270000,0) + if(AE12>=1,275000,0) + if(AE12=2,1380000,0))` |
| P12 | `=9000+9250+9500+9750+270000+275000+1380000-IF(Q16=TRUE,O12,0)` |
| Q12 | `=if($Q$20,O12/if($Q$16=TRUE,O12+P12,P12),"")` |
| S12 | `==LET(   fish_id, $BB12,   fish_cost, IF(ISNUMBER($BC12),$BC12,""),   fish_hr, IFERROR(INDEX('Fish Farming  Cards'!$D$14:$BE$14, MATCH(fish_id, 'Fish Farming  Cards'!$D$15:$BE$15, 0)), ""),   IF(OR($I12="", fish_cost="", fish_cost=0, fish_hr="", fish_hr=0), "",      fish_cost/fish_hr   ) )` |
| T12 | `==LET(   fish_id, $BB12,   fish_cost, IF(ISNUMBER($BC12),$BC12,""),   fish_hr, IFERROR(INDEX('Fish Farming  Cards'!$D$14:$BE$14, MATCH(fish_id, 'Fish Farming  Cards'!$D$15:$BE$15, 0)), ""),   IF(OR($I12="", fish_cost="", fish_cost=0, fish_hr="", fish_hr=0), "",      $I12 * fish_hr / fish_cost   ) )` |
| U12 | `=IF($G$15>=3,AR12,"")` |
| W12 | `=IF($G$15>=3,AR13,"")` |
| Y12 | `=IF($G$15>=3,AR14,"")` |
| AA12 | `=IF($G$15>=3,AR15,"")` |
| AC12 | `=IF(AND(V12>=3, X12>=3, Z12>=3, AB12>=3), AR16, "") ` |
| AO12 | `=IF(ISBLANK(C39), 0, C39/100)` |
| AU12 | `=(0.005*(G12+1))+SUM(AJ16:AK16)` |
| AX12 | `=AI34*(AH14*((1-AU12)*1+AU12*(1-AH20)*AH18+AU12*AH20*AH18*AH22))/AK34` |
| BA12 | `=IF(OR($T12="",$S12=""),"", ABS((($T12^1.5) / LN($S12))*100000)) ` |
| BB12 | `=IF($G$5<4, "",VLOOKUP($G$12+1,'Control-Upgs'!$AK$3:$AN$27,4))` |
| BC12 | `=IF($G12=$H12,"👍🏻",IF($G$5<4, "",VLOOKUP($G$12+1,'Control-Upgs'!$AK$3:$AN$27,2)))` |
| I13 | `=IF($G$5<4, "", IF(G13=H13, "👍🏻", (AX13-$AH$34)/$AH$34))` |
| J13 | `=IF(G13=H13,"👍🏻",IF($G$5<4, "",VLOOKUP($G$13+1,'Control-Upgs'!$AO$3:$AR$32,3)))` |
| K13 | `=IF($G$5<4,"",VLOOKUP($BB13,ImageMap!$A$1:$B$52,2))` |
| L13 | `=IF($BA13 = "", "", RANK($BA13, $BA$3:$BA$20, 0))` |
| M13 | `=if(BB13="","",if(G13=H13,"", rounddown(BB13/4,0)+1))` |
| O13 | `=sum(if(V13>=2,10000,0) + if(X13>=2,10250,0) + if(Z13>=2,10500,0) + if(AB13>=2,10750,0) + if(AD13>=2,300000,0) + if(AE13>=1,650000,0) + if(AE13=2,1650000,0))` |
| P13 | `=10000+10250+10500+10750+300000+650000+1650000-IF(Q16=TRUE,O13,0)` |
| Q13 | `=if($Q$20,O13/if($Q$16=TRUE,O13+P13,P13),"")` |
| S13 | `==LET(   fish_id, $BB13,   fish_cost, IF(ISNUMBER($BC13),$BC13,""),   fish_hr, IFERROR(INDEX('Fish Farming  Cards'!$D$14:$BE$14, MATCH(fish_id, 'Fish Farming  Cards'!$D$15:$BE$15, 0)), ""),   IF(OR($I13="", fish_cost="", fish_cost=0, fish_hr="", fish_hr=0), "",      fish_cost/fish_hr   ) )` |
| T13 | `==LET(   fish_id, $BB13,   fish_cost, IF(ISNUMBER($BC13),$BC13,""),   fish_hr, IFERROR(INDEX('Fish Farming  Cards'!$D$14:$BE$14, MATCH(fish_id, 'Fish Farming  Cards'!$D$15:$BE$15, 0)), ""),   IF(OR($I13="", fish_cost="", fish_cost=0, fish_hr="", fish_hr=0), "",      $I13 * fish_hr / fish_cost   ) )` |
| U13 | `=IF($G$15>=4,AR17,"")` |
| W13 | `=IF($G$15>=4,AR18,"")` |
| Y13 | `=IF($G$15>=4,AR19,"")` |
| AA13 | `=IF($G$15>=4,AR20,"")` |
| AC13 | `=IF(AND(V13>=3, X13>=3, Z13>=3, AB13>=3), AR21, "") ` |
| AU13 | `=(0.25*(G13+1))+SUM(AI7,AK7:AL7)` |
| AX13 | `=((AH3+(AH5*AU13*AH9))*IF(ISNUMBER(MATCH(B34, AG42:AG46, 0)), AH11, 1))*AJ34/AK34` |
| BA13 | `=IF(OR($T13="",$S13=""),"", ABS((($T13^1.5) / LN($S13))*100000)) ` |
| BB13 | `=IF($G$5<4, "",VLOOKUP($G$13+1,'Control-Upgs'!$AO$3:$AR$32,4))` |
| BC13 | `=IF($G13=$H13,"👍🏻",IF($G$5<4, "",VLOOKUP($G$13+1,'Control-Upgs'!$AO$3:$AR$32,2)))` |
| I14 | `=IF($G$5<4, "", IF(G14=H14, "👍🏻", (AX14-$AH$34)/$AH$34))` |
| J14 | `=IF(G14=H14,"👍🏻",IF($G$5<4, "",VLOOKUP($G$14+1,'Control-Upgs'!$AS$3:$AV$27,3)))` |
| K14 | `=IF($G$5<4,"", VLOOKUP($BB14,ImageMap!$A$1:$B$52,2))` |
| L14 | `=IF($BA14 = "", "", RANK($BA14, $BA$3:$BA$20, 0))` |
| M14 | `=if(BB14="","",if(G14=H14,"", rounddown(BB14/4,0)+1))` |
| O14 | `=sum(if(V14>=2,11000,0) + if(X14>=2,11250,0) + if(Z14>=2,11500,0) + if(AB14>=2,11750,0) + if(AD14>=2,330000,0) + if(AE14>=1,850000,0) + if(AE14=2,2450000,0))` |
| P14 | `=11000+11250+11500+11750+330000+850000+2450000-IF(Q16=TRUE,O14,0)` |
| Q14 | `=if($Q$20,O14/if($Q$16=TRUE,O14+P14,P14),"")` |
| S14 | `==LET(   fish_id, $BB14,   fish_cost, IF(ISNUMBER($BC14),$BC14,""),   fish_hr, IFERROR(INDEX('Fish Farming  Cards'!$D$14:$BE$14, MATCH(fish_id, 'Fish Farming  Cards'!$D$15:$BE$15, 0)), ""),   IF(OR($I14="", fish_cost="", fish_cost=0, fish_hr="", fish_hr=0), "",      fish_cost/fish_hr   ) )` |
| T14 | `==LET(   fish_id, $BB14,   fish_cost, IF(ISNUMBER($BC14),$BC14,""),   fish_hr, IFERROR(INDEX('Fish Farming  Cards'!$D$14:$BE$14, MATCH(fish_id, 'Fish Farming  Cards'!$D$15:$BE$15, 0)), ""),   IF(OR($I14="", fish_cost="", fish_cost=0, fish_hr="", fish_hr=0), "",      $I14 * fish_hr / fish_cost   ) )` |
| U14 | `=IF($G$15>=5,AR22,"")` |
| W14 | `=IF($G$15>=5,AR23,"")` |
| Y14 | `=IF($G$15>=5,AR24,"")` |
| AA14 | `=IF($G$15>=5,AR25,"")` |
| AC14 | `=IF(AND(V14>=3, X14>=3, Z14>=3, AB14>=3), AR26, "") ` |
| AH14 | `=AI14*AJ14*AM14*AN14*(1+AK14+AL14)*(1+AO14)*(1+(AO16))` |
| AI14 | `=1+0.03*G7` |
| AJ14 | `=1+0.05*G22` |
| AK14 | `=(0.03*G38)` |
| AL14 | `=0.01*G41*AC19` |
| AM14 | `=IFS(C21,1.4,C20,1.25,C20=FALSE,1)` |
| AN14 | `=1+0.02*C23` |
| AO14 | `=C24*0.0125` |
| AU14 | `=(0.0035*(G14+1))+SUM(AI29,AK29:AM29)` |
| AX14 | `=AI34*AJ34/((AH25 / (1*(1-AH27)*(1-AU14)*(1-AH31) + 2*AH27*(1-AU14)*(1-AH31) + 3*(1-AH27)*AU14*(1-AH31) + 5*(1-AH27)*(1-AU14)*AH31 + 6*AH27*AU14*(1-AH31) + 10*AH27*(1-AU14)*AH31 +15*(1-AH27)*AU14 *AH31 +30*AH27*AU14*AH31))*VLOOKUP(B34,AG36:AH46,2,FALSE))` |
| BA14 | `=IF(OR($T14="",$S14=""),"", ABS((($T14^1.5) / LN($S14))*100000)) ` |
| BB14 | `=IF($G$5<4, "",VLOOKUP($G$14+1,'Control-Upgs'!$AS$3:$AV$27,4))` |
| BC14 | `=IF($G14=$H14,"👍🏻",IF($G$5<4, "",VLOOKUP($G$14+1,'Control-Upgs'!$AS$3:$AV$27,2)))` |
| J15 | `=IF(G15=H15,"👍🏻",IF($G$5<5, "",VLOOKUP($G$15+1,'Control-Upgs'!$E$56:$H$60,3)))` |
| K15 | `=IF($G$5<5, "",VLOOKUP($BB15,ImageMap!$A$1:$B$52,2))` |
| L15 | `=IF($BA15 = "", "", RANK($BA15, $BA$3:$BA$20, 0))` |
| M15 | `=if(BB15="","",if(G15=H15,"", rounddown(BB15/4,0)+1))` |
| S15 | `==LET(   fish_id, $BB15,   fish_cost, IF(ISNUMBER($BC15),$BC15,""),   fish_hr, IFERROR(INDEX('Fish Farming  Cards'!$D$14:$BE$14, MATCH(fish_id, 'Fish Farming  Cards'!$D$15:$BE$15, 0)), ""),   IF(OR(fish_cost="", fish_cost=0, fish_hr="", fish_hr=0), "",      fish_cost/fish_hr   ) )` |
| T15 | `==LET(   fish_id, $BB15,   fish_cost, IF(ISNUMBER($BC15),$BC15,""),   fish_hr, IFERROR(INDEX('Fish Farming  Cards'!$D$14:$BE$14, MATCH(fish_id, 'Fish Farming  Cards'!$D$15:$BE$15, 0)), ""),   IF(OR($I15="", fish_cost="", fish_cost=0, fish_hr="", fish_hr=0), "",      $I15 * fish_hr / fish_cost   ) )` |
| BA15 | `=IF(OR($T15="",$S15=""),"", ABS((($T15^1.5) / LN($S15))*100000)) ` |
| BB15 | `=IF($G$5<5, "",VLOOKUP($G$15+1,'Control-Upgs'!$E$56:$H$60,4))` |
| BC15 | `=IF($G15=$H15,"👍🏻",IF($G$5<5, "",VLOOKUP($G$15+1,'Control-Upgs'!$E$56:$H$60,2)))` |
| I16 | `=IF($G$15<1, "", IF(G16=H16, "👍🏻", (AX16-$AH$34)/$AH$34))` |
| J16 | `=IF(G16=H16,"👍🏻",IF($G$15<1, "",VLOOKUP($G$16+1,'Control-Upgs'!$I$56:$L$75,3)))` |
| K16 | `=IF($G$15<1,"",VLOOKUP($BB16,ImageMap!$A$1:$B$52,2))` |
| L16 | `=IF($BA16 = "", "", RANK($BA16, $BA$3:$BA$20, 0))` |
| M16 | `=if(BB16="","",if(G16=H16,"", rounddown(BB16/4,0)+1))` |
| S16 | `==LET(   fish_id, $BB16,   fish_cost, IF(ISNUMBER($BC16),$BC16,""),   fish_hr, IFERROR(INDEX('Fish Farming  Cards'!$D$14:$BE$14, MATCH(fish_id, 'Fish Farming  Cards'!$D$15:$BE$15, 0)), ""),   IF(OR($I16="", fish_cost="", fish_cost=0, fish_hr="", fish_hr=0), "",      fish_cost/fish_hr   ) )` |
| T16 | `==LET(   fish_id, $BB16,   fish_cost, IF(ISNUMBER($BC16),$BC16,""),   fish_hr, IFERROR(INDEX('Fish Farming  Cards'!$D$14:$BE$14, MATCH(fish_id, 'Fish Farming  Cards'!$D$15:$BE$15, 0)), ""),   IF(OR($I16="", fish_cost="", fish_cost=0, fish_hr="", fish_hr=0), "",      $I16 * fish_hr / fish_cost   ) )` |
| AH16 | `=SUM(AI16:AK16)` |
| AI16 | `=0.005*G12` |
| AJ16 | `=0.001*G41*AC19` |
| AK16 | `=IF(C17,0.02,0)` |
| AO16 | `=0.1*C36` |
| AU16 | `=AI18*(1+0.05*(G16+1))*AK18*AL18*AM18` |
| AX16 | `=AI34*(AH14*((1-AH16)*1+AH16*(1-AH20)*AU16+AH16*AH20*AU16*AH22))/AK34` |
| BA16 | `=IF(OR($T16="",$S16=""),"", ABS((($T16^1.5) / LN($S16))*100000)) ` |
| BB16 | `=IF($G$15<1, "",VLOOKUP($G$16+1,'Control-Upgs'!$I$56:$L$75,4))` |
| BC16 | `=IF($G16=$H16,"👍🏻",IF($G$15<1, "",VLOOKUP($G$16+1,'Control-Upgs'!$I$56:$L$75,2)))` |
| I17 | `=IF($G$15<2, "", IF(G17=H17, "👍🏻", (AX17-$AH$34)/$AH$34))` |
| J17 | `=IF(G17=H17,"👍🏻",IF($G$15<2, "",VLOOKUP($G$17+1,'Control-Upgs'!$M$56:$P$75,3)))` |
| K17 | `=IF($G$15<2, "",VLOOKUP($BB17,ImageMap!$A$1:$B$52,2))` |
| L17 | `=IF($BA17 = "", "", RANK($BA17, $BA$3:$BA$20, 0))` |
| M17 | `=if(BB17="","",if(G17=H17,"", rounddown(BB17/4,0)+1))` |
| S17 | `==LET(   fish_id, $BB17,   fish_cost, IF(ISNUMBER($BC17),$BC17,""),   fish_hr, IFERROR(INDEX('Fish Farming  Cards'!$D$14:$BE$14, MATCH(fish_id, 'Fish Farming  Cards'!$D$15:$BE$15, 0)), ""),   IF(OR($I17="", fish_cost="", fish_cost=0, fish_hr="", fish_hr=0), "",      fish_cost/fish_hr   ) )` |
| T17 | `==LET(   fish_id, $BB17,   fish_cost, IF(ISNUMBER($BC17),$BC17,""),   fish_hr, IFERROR(INDEX('Fish Farming  Cards'!$D$14:$BE$14, MATCH(fish_id, 'Fish Farming  Cards'!$D$15:$BE$15, 0)), ""),   IF(OR($I17="", fish_cost="", fish_cost=0, fish_hr="", fish_hr=0), "",      $I17 * fish_hr / fish_cost   ) )` |
| AU17 | `=(1+(0.05*(G17+1))+AJ11)*(1+AK11)*(1+AL11)*(1+AM11)*(1+AN11)*(1+AO11)*(1+AO12)` |
| AX17 | `=((AH3+(AH5*AH7*AH9))*IF(ISNUMBER(MATCH(B34, AG42:AG46, 0)), AU17, 1))*AJ34/AK34` |
| BA17 | `=IF(OR($T17="",$S17=""),"", ABS((($T17^1.5) / LN($S17))*100000)) ` |
| BB17 | `=IF($G$15<2, "",VLOOKUP($G$17+1,'Control-Upgs'!$M$56:$P$75,4))` |
| BC17 | `=IF($G17=$H17,"👍🏻",IF($G$15<2, "",VLOOKUP($G$17+1,'Control-Upgs'!$M$56:$P$75,2)))` |
| I18 | `=IF($G$15<3, "", IF(G18=H18, "👍🏻", (AX18-$AH$34)/$AH$34))` |
| J18 | `=IF(G18=H18,"👍🏻",IF($G$15<3, "",VLOOKUP($G$18+1,'Control-Upgs'!$Q$56:$T$75,3)))` |
| K18 | `=IF($G$15<3,"",VLOOKUP($BB18,ImageMap!$A$1:$B$52,2))` |
| L18 | `=IF($BA18 = "", "", RANK($BA18, $BA$3:$BA$20, 0))` |
| M18 | `=if(BB18="","",if(G18=H18,"", rounddown(BB18/4,0)+1))` |
| S18 | `==LET(   fish_id, $BB18,   fish_cost, IF(ISNUMBER($BC18),$BC18,""),   fish_hr, IFERROR(INDEX('Fish Farming  Cards'!$D$14:$BE$14, MATCH(fish_id, 'Fish Farming  Cards'!$D$15:$BE$15, 0)), ""),   IF(OR($I18="", fish_cost="", fish_cost=0, fish_hr="", fish_hr=0), "",      fish_cost/fish_hr   ) )` |
| T18 | `==LET(   fish_id, $BB18,   fish_cost, IF(ISNUMBER($BC18),$BC18,""),   fish_hr, IFERROR(INDEX('Fish Farming  Cards'!$D$14:$BE$14, MATCH(fish_id, 'Fish Farming  Cards'!$D$15:$BE$15, 0)), ""),   IF(OR($I18="", fish_cost="", fish_cost=0, fish_hr="", fish_hr=0), "",      $I18 * fish_hr / fish_cost   ) )` |
| AH18 | `=PRODUCT(AI18:AM18)` |
| AJ18 | `=1+0.05*G16` |
| AK18 | `=1+0.05*G30` |
| AL18 | `=1+0.03*C16` |
| AM18 | `=IF(C14,1.1,1)` |
| AU18 | `=AI20+(0.01*(G18+1))` |
| AX18 | `=AI34*(AH14*((1-AH16)*1+AH16*(1-AU18)*AH18+AH16*AU18*AH18*AH22))/AK34` |
| BA18 | `=IF(OR($T18="",$S18=""),"", ABS((($T18^1.5) / LN($S18))*100000)) ` |
| BB18 | `=IF($G$15<3, "",VLOOKUP($G$18+1,'Control-Upgs'!$Q$56:$T$75,4))` |
| BC18 | `=IF($G18=$H18,"👍🏻",IF($G$15<3, "",VLOOKUP($G$18+1,'Control-Upgs'!$Q$56:$T$75,2)))` |
| I19 | `=IF($G$15<4, "",if(G19=H19, "", IF((VLOOKUP(B34,AG36:AK46,5,FALSE)>=12), ((4 + (0.08 * (G19+1)) + (0.1 * G36)) * IF(C10, 1.15, 1))/((4 + (0.08 * (G19)) + (0.1 * G36)) * IF(C10, 1.15, 1))-1,0)))` |
| J19 | `=IF(G19=H19,"👍🏻",IF($G$15<4, "",VLOOKUP($G$19+1,'Control-Upgs'!$U$56:$X$80,3)))` |
| K19 | `=IF($G$15<4,"",VLOOKUP($BB19,ImageMap!$A$1:$B$52,2))` |
| L19 | `=IF($BA19 = "", "", RANK($BA19, $BA$3:$BA$20, 0))` |
| M19 | `=if(BB19="","",if(G19=H19,"", rounddown(BB19/4,0)+1))` |
| S19 | `==LET(   fish_id, $BB19,   fish_cost, IF(ISNUMBER($BC19),$BC19,""),   fish_hr, IFERROR(INDEX('Fish Farming  Cards'!$D$14:$BE$14, MATCH(fish_id, 'Fish Farming  Cards'!$D$15:$BE$15, 0)), ""),   IF(OR($I19="", fish_cost="", fish_cost=0, fish_hr="", fish_hr=0), "",      fish_cost/fish_hr   ) )` |
| T19 | `==LET(   fish_id, $BB19,   fish_cost, IF(ISNUMBER($BC19),$BC19,""),   fish_hr, IFERROR(INDEX('Fish Farming  Cards'!$D$14:$BE$14, MATCH(fish_id, 'Fish Farming  Cards'!$D$15:$BE$15, 0)), ""),   IF(OR($I19="", fish_cost="", fish_cost=0, fish_hr="", fish_hr=0), "",      $I19 * fish_hr / fish_cost   ) )` |
| AC19 | `=V3+X3+Z3+AB3+AD3+V4+X4+Z4+AB4+AD4+V5+X5+Z5+AB5+AD5+V6+X6+Z6+AB6+AD6+V7+X7+Z7+AB7+AD7+V8+X8+Z8+AB8+AD8+V10+X10+Z10+AB10+AD10+V11+X11+Z11+AB11+AD11+V12+X12+Z12+AB12+V13+X13+Z13+AB13+V14+X14+Z14+AB14+AD12+AD13+AD14` |
| AU19 | `=(4 + (0.08 * (G19+1)) + (0.1 * G36)) * IF(C10, 1.15, 1)` |
| AX19 | `=AH34*(1+I19)` |
| BA19 | `=IF(OR($T19="",$S19=""),"", ABS((($T19^1.5) / LN($S19))*100000)) ` |
| BB19 | `=IF($G$15<4, "",VLOOKUP($G$19+1,'Control-Upgs'!$U$56:$X$80,4))` |
| BC19 | `=IF($G19=$H19,"👍🏻",IF($G$15<4, "",VLOOKUP($G$19+1,'Control-Upgs'!$U$56:$X$80,2)))` |
| I20 | `=IF($G$15<5, "", IF(G20=H20, "👍🏻", (AX20-$AH$34)/$AH$34))` |
| J20 | `=IF(G20=H20,"👍🏻",IF($G$15<5, "",VLOOKUP($G$20+1,'Control-Upgs'!$Y$56:$AB$85,3)))` |
| K20 | `=IF($G$15<5,"",VLOOKUP($BB20,ImageMap!$A$1:$B$52,2))` |
| L20 | `=IF($BA20 = "", "", RANK($BA20, $BA$3:$BA$20, 0))` |
| M20 | `=if(BB20="","",if(G20=H20,"", rounddown(BB20/4,0)+1))` |
| S20 | `==LET(   fish_id, $BB20,   fish_cost, IF(ISNUMBER($BC20),$BC20,""),   fish_hr, IFERROR(INDEX('Fish Farming  Cards'!$D$14:$BE$14, MATCH(fish_id, 'Fish Farming  Cards'!$D$15:$BE$15, 0)), ""),   IF(OR($I20="", fish_cost="", fish_cost=0, fish_hr="", fish_hr=0), "",      fish_cost/fish_hr   ) )` |
| T20 | `==LET(   fish_id, $BB20,   fish_cost, IF(ISNUMBER($BC20),$BC20,""),   fish_hr, IFERROR(INDEX('Fish Farming  Cards'!$D$14:$BE$14, MATCH(fish_id, 'Fish Farming  Cards'!$D$15:$BE$15, 0)), ""),   IF(OR($I20="", fish_cost="", fish_cost=0, fish_hr="", fish_hr=0), "",      $I20 * fish_hr / fish_cost   ) )` |
| AH20 | `=SUM(AI20:AJ20)` |
| AI20 | `==0.01*G43*COUNTIF({AD3;AD4;AD5;AD6;AD7;AD8;AD10;AD11;AD12;AD13;AD14},">0")` |
| AJ20 | `=0.01*G18` |
| AU20 | `=ROUNDDOWN(SUM(AI5:AJ5,AL5:AP5)*(1+0.05*(G20+1)),0)` |
| AX20 | `=((AH3+(AU20*AH7*AH9))*IF(ISNUMBER(MATCH(B34,AG42:AG46,0)),AH11,1))*AJ34/AK34` |
| BA20 | `=IF(OR($T20="",$S20=""),"", ABS((($T20^1.5) / LN($S20))*100000)) ` |
| BB20 | `=IF($G$15<5, "",VLOOKUP($G$20+1,'Control-Upgs'!$Y$56:$AB$85,4))` |
| BC20 | `=IF($G20=$H20,"👍🏻",IF($G$15<5, "",VLOOKUP($G$20+1,'Control-Upgs'!$Y$56:$AB$85,2)))` |
| P21 | `=if($Q$16=TRUE,"Gems Left", "Total Gems Needed")` |
| AY21 | `=if($Q$18, "Growth/Million Gems","Cost/Benefit")` |
| I22 | `=IF(G22=H22,"👍🏻",((AX22-$AH$34)/$AH$34))` |
| J22 | `=IF(G22=H22,"👍🏻",AT22)` |
| L22 | `=IF(AY22="", "", RANK.EQ(AY22, FILTER($AY$22:$AY$43, $AY$22:$AY$43 <> "")))` *(Sheets-only)* |
| O22 | `=(MIN(G22,199)*(Min(G22,199)+1)/2*500)+MAX(G22-199,0)*99999` |
| P22 | `=((MIN(H22,199)*(Min(H22,199)+1)/2*500)+MAX(H22-199,0)*99999)-IF(Q16=TRUE,O22,0)` |
| Q22 | `=if($Q$20,O22/if($Q$16=TRUE,O22+P22,P22),"")` |
| AH22 | `=(AI22+AJ22+AL22)*AK22` |
| AJ22 | `=0.15*G34` |
| AK22 | `=if(AD3>1, 1+0.0005*C29,1)` |
| AL22 | `=IF(C32,3,0)` |
| AT22 | `=IF((500+500*G22)>99999,99999,(500+500*G22))` |
| AU22 | `=AI14*(1+0.05*(G22+1))*AM14*AN14*(1+AK14+AL14)*(1+AO14)*(1+AO16)` |
| AX22 | `=AI34*(AU22*((1-AH16)*1+AH16*(1-AH20)*AH18+AH16*AH20*AH18*AH22))/AK34` |
| AY22 | `=IF(G22=H22,"",if($Q$18,(1+I22)^(100000/J22),(AX22-$AH$34)/AT22))` |
| I23 | `=IF(G23=H23,"👍🏻",((AX23-$AH$34)/$AH$34))` |
| J23 | `=IF(G23=H23,"👍🏻",AT23)` |
| L23 | `=IF(AY23="", "", RANK.EQ(AY23, FILTER($AY$22:$AY$43, $AY$22:$AY$43 <> "")))` *(Sheets-only)* |
| O23 | `=G23*750+(G23*(G23-1)/2*500)` |
| P23 | `=H23*750+(H23*(H23-1)/2*500)-IF(Q16=TRUE,O23,0)` |
| Q23 | `=if($Q$20,O23/if($Q$16=TRUE,O23+P23,P23),"")` |
| AT23 | `=750+500*G23` |
| AU23 | `=((G23+1)+SUM(AI5:AJ5,AM5:AP5))*AK5` |
| AX23 | `=((AH3+(AU23*AH7*AH9))*IF(ISNUMBER(MATCH(B34,AG42:AG46,0)),AH11,1))*AJ34/AK34` |
| AY23 | `=IF(G23=H23,"",if($Q$18,(1+I23)^(100000/J23),(AX23-$AH$34)/AT23))` |
| I24 | `=IF(G24=H24,"👍🏻",((AX24-$AH$34)/$AH$34))` |
| J24 | `=IF(G24=H24,"👍🏻",AT24)` |
| L24 | `=IF(AY24="", "", RANK.EQ(AY24, FILTER($AY$22:$AY$43, $AY$22:$AY$43 <> "")))` *(Sheets-only)* |
| O24 | `=G24*850+(G24*(G24-1)/2*750)` |
| P24 | `=H24*850+(H24*(H24-1)/2*750)-IF(Q16=TRUE,O24,0)` |
| Q24 | `=if($Q$20,O24/if($Q$16=TRUE,O24+P24,P24),"")` |
| AT24 | `=850+750*G24` |
| AU24 | `=ROUND(AI3*AJ3,0)*AK3*(1+0.05*(G24+1))*AM3*AN3*AO3` |
| AX24 | `=((AU24+(AH5*AH7*AH9))*IF(ISNUMBER(MATCH(B34,AG42:AG46,0)),AH11,1))*AJ34/AK34` |
| AY24 | `=IF(G24=H24,"",if($Q$18,(1+I24)^(100000/J24),(AX24-$AH$34)/AT24))` |
| I25 | `=IF($G$5<1, "", IF(G25=H25, "👍🏻", (AX25-$AH$34)/$AH$34))` |
| J25 | `=IF($G$5<1, "", IF(G25=H25,"👍🏻",AT25))` |
| L25 | `=IF(AY25="", "", RANK.EQ(AY25, FILTER($AY$22:$AY$43, $AY$22:$AY$43 <> "")))` *(Sheets-only)* |
| O25 | `=G25*1000+(G25*(G25-1)/2*750)` |
| P25 | `=H25*1000+(H25*(H25-1)/2*750)-IF(Q16=TRUE,O25,0)` |
| Q25 | `=if($Q$20,O25/if($Q$16=TRUE,O25+P25,P25),"")` |
| AH25 | `=(AI25-AJ25-AK25-AL25)/AM25` |
| AJ25 | `=0.5*G6` |
| AK25 | `=0.5*G25` |
| AL25 | `=2*G39` |
| AM25 | `=IF(C5,3,1)` |
| AT25 | `=1000+750*G25` |
| AU25 | `=(AI25-AJ25-(0.5*(G25+1))-AL25)/AM25` |
| AX25 | `=AI34*AJ34/((AU25 /  (1*(1-AH27)*(1-AH29)*(1-AH31)+  2*   AH27 *(1-AH29)*(1-AH31)+  3*(1-AH27)*   AH29 *(1-AH31)+  5*(1-AH27)*(1-AH29)*   AH31 +  6*   AH27 *   AH29 *(1-AH31)+ 10*   AH27 *(1-AH29)*   AH31 + 15*(1-AH27)*   AH29 *   AH31 + 30*   AH27 *   AH29 *   AH31))*VLOOKUP(B34,AG36:AH46,2,FALSE))` |
| AY25 | `=IF($G$5<1, "", IF(G25=H25,"",if($Q$18,(1+I25)^(100000/J25),(AX25-$AH$34)/AT25)))` |
| I26 | `=IF($G$5<1, "", IF(G26=H26, "👍🏻", (AX26-$AH$34)/$AH$34))` |
| J26 | `=IF($G$5<1, "", IF(G26=H26,"👍🏻",AT26))` |
| L26 | `=IF(AY26="", "", RANK.EQ(AY26, FILTER($AY$22:$AY$43, $AY$22:$AY$43 <> "")))` *(Sheets-only)* |
| O26 | `=G26*1150+(G26*(G26-1)/2*850)` |
| P26 | `=H26*1150+(H26*(H26-1)/2*850)-IF(Q16=TRUE,O26,0)` |
| Q26 | `=if($Q$20,O26/if($Q$16=TRUE,O26+P26,P26),"")` |
| AT26 | `=1150+850*G26` |
| AU26 | `=(1+0.08*(G26+1))*PRODUCT(AI9,AK9:AO9)` |
| AX26 | `=((AH3+(AH5*AH7*AU26))*IF(ISNUMBER(MATCH(B34,AG42:AG46,0)),AH11,1))*AJ34/AK34` |
| AY26 | `=IF($G$5<1, "", IF(G26=H26,"",if($Q$18,(1+I26)^(100000/J26),(AX26-$AH$34)/AT26)))` |
| I27 | `=IF($G$5<1, "", IF(G27=H27, "👍🏻", if(Q18=false,"", ((1+0.05*(G27+1))/(1+0.05*(G27))-1)*Q18)))` |
| J27 | `=IF($G$5<1, "", IF(G27=H27,"👍🏻",AT27))` |
| L27 | `=IF(Q18, IF(AY27="", "", RANK.EQ(AY27, FILTER($AY$22:$AY$43, $AY$22:$AY$43 <> ""))), "")` *(Sheets-only)* |
| O27 | `=G27*1250+(G27*(G27-1)/2*950)` |
| P27 | `=H27*1250+(H27*(H27-1)/2*950)-IF(Q16=TRUE,O27,0)` |
| Q27 | `=if($Q$20,O27/if($Q$16=TRUE,O27+P27,P27),"")` |
| AH27 | `=SUM(AI27:AL27)` |
| AI27 | `=0.005*G10` |
| AJ27 | `=0.005*G28` |
| AK27 | `=0.02*G39` |
| AL27 | `=0.0003*C27` |
| AT27 | `=1250+950*G27` |
| AY27 | `=IF($G$5<1, "", IF(G27=H27,"",if(Q18=false,"", (1+I27)^(100000/J27))))` |
| I28 | `=IF($G$5<2, "", IF(G28=H28, "👍🏻", (AX28-$AH$34)/$AH$34))` |
| J28 | `=IF($G$5<2, "", IF(G28=H28,"👍🏻",AT28))` |
| L28 | `=IF(AY28="", "", RANK.EQ(AY28, FILTER($AY$22:$AY$43, $AY$22:$AY$43 <> "")))` *(Sheets-only)* |
| O28 | `=G28*1450+(G28*(G28-1)/2*1050)` |
| P28 | `=H28*1450+(H28*(H28-1)/2*1050)-IF(Q16=TRUE,O28,0)` |
| Q28 | `=if($Q$20,O28/if($Q$16=TRUE,O28+P28,P28),"")` |
| AT28 | `=1450+1050*G28` |
| AU28 | `=AI27+(0.005*(G28+1))+AK27+AL27` |
| AX28 | `=AI34*AJ34/((AH25/(1*(1-AU28)*(1-AH29)*(1-AH31)+ 2*AU28*(1-AH29)*(1-AH31)+ 3*(1-AU28)*AH29*(1-AH31)+ 5*(1-AU28)*(1-AH29)*AH31 + 6*AU28*AH29*(1-AH31)+ 10*AU28*(1-AH29)*AH31 +15*(1-AU28)*AH29*AH31 +30*AU28*AH29*AH31))*VLOOKUP(B34,AG36:AH46,2,FALSE))` |
| AY28 | `=IF($G$5<2, "", IF(G28=H28,"",if($Q$18,(1+I28)^(100000/J28),(AX28-$AH$34)/AT28)))` |
| I29 | `=IF($G$5<1, "", IF(G29=H29, "👍🏻", if(Q18=false,"", (1-(100%-0.45%*(G29+1))/(100%-0.45%*G29))*Q18)))` |
| J29 | `=IF($G$5<3, "", IF(G29=H29,"👍🏻",AT29))` |
| L29 | `=IF(Q18, IF(AY29="", "", RANK.EQ(AY29, FILTER($AY$22:$AY$43, $AY$22:$AY$43 <> ""))), "")` *(Sheets-only)* |
| O29 | `=G29*1750+(G29*(G29-1)/2*1125)` |
| P29 | `=H29*1750+(H29*(H29-1)/2*1125)-IF(Q16=TRUE,O29,0)` |
| Q29 | `=if($Q$20,O29/if($Q$16=TRUE,O29+P29,P29),"")` |
| AH29 | `=SUM(AI29:AM29)` |
| AI29 | `=IF(C9,0.1,0)` |
| AJ29 | `=0.0035*G14` |
| AK29 | `=0.004*G33` |
| AL29 | `=0.01*G39` |
| AM29 | `=0.01*C16` |
| AT29 | `=1750+1125*G29` |
| AY29 | `=IF($G$5<3, "", IF(G29=H29,"",if(Q18=false,"",(1+I29)^(100000/J29))))` |
| I30 | `=IF($G$5<4, "", IF(G30=H30, "👍🏻", (AX30-$AH$34)/$AH$34))` |
| J30 | `=IF($G$5<4, "", IF(G30=H30,"👍🏻",AT30))` |
| L30 | `=IF(AY30="", "", RANK.EQ(AY30, FILTER($AY$22:$AY$43, $AY$22:$AY$43 <> "")))` *(Sheets-only)* |
| O30 | `=G30*1950+(G30*(G30-1)/2*1325)` |
| P30 | `=H30*1950+(H30*(H30-1)/2*1325)-IF(Q16=TRUE,O30,0)` |
| Q30 | `=if($Q$20,O30/if($Q$16=TRUE,O30+P30,P30),"")` |
| AT30 | `=1950+1325*G30` |
| AU30 | `=(1+0.05*(G30+1))*PRODUCT(AI18:AJ18,AL18:AM18)` |
| AX30 | `=AI34*(AH14*((1-AH16)*1+AH16*(1-AH20)*AU30+AH16*AH20*AU30*AH22))/AK34` |
| AY30 | `=IF($G$5<4, "", IF(G30=H30,"",if($Q$18,(1+I30)^(100000/J30),(AX30-$AH$34)/AT30)))` |
| I31 | `=IF($G$5<5, "", IF(G31=H31, "👍🏻", (AX31-$AH$34)/$AH$34))` |
| J31 | `=IF($G$5<5, "", IF(G31=H31,"👍🏻",AT31))` |
| L31 | `=IF(AY31="", "", RANK.EQ(AY31, FILTER($AY$22:$AY$43, $AY$22:$AY$43 <> "")))` *(Sheets-only)* |
| O31 | `=G31*2450+(G31*(G31-1)/2*1775)` |
| P31 | `=H31*2450+(H31*(H31-1)/2*1775)-IF(Q16=TRUE,O31,0)` |
| Q31 | `=if($Q$20,O31/if($Q$16=TRUE,O31+P31,P31),"")` |
| AH31 | `=SUM(AI31:AK31)` |
| AI31 | `=0.02*C7` |
| AJ31 | `=0.03*C36` |
| AK31 | `=IF(ISBLANK(C40), 0, C40/100)` |
| AT31 | `=2450+1775*G31` |
| AU31 | `=((3*(G31+1))+SUM(AI5:AJ5,AL5,AN5:AP5))*AK5` |
| AX31 | `=((AH3+(AU31*AH7*AH9))*IF(ISNUMBER(MATCH(B34,AG42:AG46,0)),AH11,1))*AJ34/AK34` |
| AY31 | `=IF($G$5<5, "", IF(G31=H31,"",if($Q$18,(1+I31)^(100000/J31),(AX31-$AH$34)/AT31)))` |
| I32 | `=IF($G$15<1, "", IF(G32=H32, "👍🏻", (AX32-$AH$34)/$AH$34))` |
| J32 | `=IF($G$15<1, "", IF(G32=H32,"👍🏻",AT32))` |
| L32 | `=IF(AY32="", "", RANK.EQ(AY32, FILTER($AY$22:$AY$43, $AY$22:$AY$43 <> "")))` *(Sheets-only)* |
| O32 | `=G32*15000+(G32*(G32-1)/2*5000)` |
| P32 | `=H32*15000+(H32*(H32-1)/2*5000)-IF(Q16=TRUE,O32,0)` |
| Q32 | `=if($Q$20,O32/if($Q$16=TRUE,O32+P32,P32),"")` |
| AT32 | `=15000+5000*G32` |
| AX32 | `=AI34*AJ34/((AH25 / (  1*(1-AH27)*(1-AH29)*(1-AH31)+  2*   AH27 *(1-AH29)*(1-AH31)+  3*(1-AH27)*   AH29 *(1-AH31)+  5*(1-AH27)*(1-AH29)*   AH31 +  6*   AH27 *   AH29 *(1-AH31)+ 10*   AH27 *(1-AH29)*   AH31 + 15*(1-AH27)*   AH29 *   AH31 + 30*   AH27 *   AH29 *   AH31))*VLOOKUP(B34,AG36:AI46,3,FALSE))` |
| AY32 | `=IF($G$15<1, "", IF(G32=H32,"",if($Q$18,(1+I32)^(100000/J32),(AX32-$AH$34)/AT32)))` |
| I33 | `=IF($G$15<2, "", IF(G33=H33, "👍🏻", (AX33-$AH$34)/$AH$34))` |
| J33 | `=IF($G$15<2, "", IF(G33=H33,"👍🏻",AT33))` |
| L33 | `=IF(AY33="", "", RANK.EQ(AY33, FILTER($AY$22:$AY$43, $AY$22:$AY$43 <> "")))` *(Sheets-only)* |
| O33 | `=G33*4450+(G33*(G33-1)/2*3475)` |
| P33 | `=H33*4450+(H33*(H33-1)/2*3475)-IF(Q16=TRUE,O33,0)` |
| Q33 | `=if($Q$20,O33/if($Q$16=TRUE,O33+P33,P33),"")` |
| AT33 | `=4450+3475*G33` |
| AU33 | `=(0.004*(G33+1))+SUM(AI29:AJ29,AL29:AM29)` |
| AX33 | `=AI34*AJ34/((AH25 / (  1*(1-AH27)*(1-AU33)*(1-AH31)+  2*   AH27 *(1-AU33)*(1-AH31)+  3*(1-AH27)*   AU33 *(1-AH31)+  5*(1-AH27)*(1-AU33)*   AH31 +  6*   AH27 *   AU33 *(1-AH31)+ 10*   AH27 *(1-AU33)*   AH31 + 15*(1-AH27)*   AU33 *   AH31 + 30*   AH27 *   AU33 *   AH31))*VLOOKUP(B34,AG36:AH46,2,FALSE))` |
| AY33 | `=IF($G$15<2, "", IF(G33=H33,"",if($Q$18,(1+I33)^(100000/J33),(AX33-$AH$34)/AT33)))` |
| I34 | `=IF($G$15<3, "", IF(G34=H34, "👍🏻", (AX34-$AH$34)/$AH$34))` |
| J34 | `=IF($G$15<3, "", IF(G34=H34,"👍🏻",AT34))` |
| L34 | `=IF(AY34="", "", RANK.EQ(AY34, FILTER($AY$22:$AY$43, $AY$22:$AY$43 <> "")))` *(Sheets-only)* |
| O34 | `=G34*5500+(G34*(G34-1)/2*4250)` |
| P34 | `=H34*5500+(H34*(H34-1)/2*4250)-IF(Q16=TRUE,O34,0)` |
| Q34 | `=if($Q$20,O34/if($Q$16=TRUE,O34+P34,P34),"")` |
| AH34 | `=AI34*AJ34/AK34` |
| AI34 | `=(AH3+(AH5*AH7*AH9))*IF(ISNUMBER(MATCH(B34, AG42:AG46, 0)), AH11, 1) ` |
| AJ34 | `=AH14*((1-AH16)*1+          AH16*(1-AH20)*AH18+          AH16*   AH20* AH18*AH22)` |
| AK34 | `=(AH25 / (  1*(1-AH27)*(1-AH29)*(1-AH31)+  2*   AH27 *(1-AH29)*(1-AH31)+  3*(1-AH27)*   AH29 *(1-AH31)+  5*(1-AH27)*(1-AH29)*   AH31 +  6*   AH27 *   AH29 *(1-AH31)+ 10*   AH27 *(1-AH29)*   AH31 + 15*(1-AH27)*   AH29 *   AH31 + 30*   AH27 *   AH29 *   AH31))*VLOOKUP(B34,AG36:AH46,2,FALSE)` |
| AL34 | `=(4 + (0.08 * G19) + (0.1 * G36)) * IF(C10, 1.15, 1)` |
| AT34 | `=5550+4250*G34` |
| AU34 | `=(AI22+(0.15*(G34+1))+AL22)*AK22` |
| AX34 | `=AI34*(AH14*((1-AH16)*1+AH16*(1-AH20)*AH18+AH16*AH20*AH18*AU34))/AK34` |
| AY34 | `=IF($G$15<3, "", IF(G34=H34,"",if($Q$18,(1+I34)^(100000/J34),(AX34-$AH$34)/AT34)))` |
| I35 | `=IF($G$15<4, "", IF(G35=H35, "👍🏻", (AX35-$AH$34)/$AH$34))` |
| J35 | `=IF($G$15<4, "", IF(G35=H35,"👍🏻",AT35))` |
| L35 | `=IF(AY35="", "", RANK.EQ(AY35, FILTER($AY$22:$AY$43, $AY$22:$AY$43 <> "")))` *(Sheets-only)* |
| O35 | `=G35*7550+(G35*(G35-1)/2*4950)` |
| P35 | `=H35*7550+(H35*(H35-1)/2*4950)-IF(Q16=TRUE,O35,0)` |
| Q35 | `=if($Q$20,O35/if($Q$16=TRUE,O35+P35,P35),"")` |
| AT35 | `=7550+4950*G35` |
| AU35 | `=(1+AI11+(0.05*(G35+1)))*(1+AK11)*(1+AL11)*(1+AM11)*(1+AN11)*(1+AO11)*(1+AO12)` |
| AX35 | `=((AH3+(AH5*AH7*AH9))*IF(ISNUMBER(MATCH(B34,AG42:AG46,0)),AU35,1))*AJ34/AK34` |
| AY35 | `=IF($G$15<4, "", IF(G35=H35,"",if($Q$18,(1+I35)^(100000/J35),(AX35-$AH$34)/AT35)))` |
| I36 | `=IF($G$15<5, "", if(G36=H36, "", IF((VLOOKUP(B34,AG36:AK46,5,FALSE)>=12), ((4 + (0.08 * G19) + (0.1 * (G36+1))) * IF(C10, 1.15, 1))/((4 + (0.08 * (G19)) + (0.1 * G36)) * IF(C10, 1.15, 1))-1,0)))` |
| J36 | `=IF($G$15<5, "", IF(G36=H36,"👍🏻",AT36))` |
| L36 | `=IF(AY36="", "", RANK.EQ(AY36, FILTER($AY$22:$AY$43, $AY$22:$AY$43 <> "")))` *(Sheets-only)* |
| O36 | `=G36*9550+(G36*(G36-1)/2*6250)` |
| P36 | `=H36*9550+(H36*(H36-1)/2*6250)-IF(Q16=TRUE,O36,0)` |
| Q36 | `=if($Q$20,O36/if($Q$16=TRUE,O36+P36,P36),"")` |
| AH36 | `=ROUNDDOWN(5*IF($C$32,0.9,1),0)` |
| AI36 | `=ROUNDDOWN(5*IF($C$32,0.9,1),0)` |
| AJ36 | `=ROUNDDOWN(5*IF($C$32,0.9,1),0)` |
| AK36 | `=sum($V3+$X3+$Z3+$AB3)` |
| AT36 | `=9550+6250*G36` |
| AU36 | `=(4 + (0.08 * G19) + (0.1 * (G36+1))) * IF(C10, 1.15, 1)` |
| AX36 | `=AH34*(1+I36)` |
| AY36 | `=IF($G$15<5, "", IF(G36=H36,"",if($Q$18,(1+I36)^(100000/J36),(AX36-$AH$34)/AT36)))` |
| P37 | `=if($Q$16=TRUE,"Gems Left", "Total Gems Needed")` |
| AH37 | `=ROUNDDOWN(8*IF($C$32,0.9,1),0)` |
| AI37 | `=ROUNDDOWN(8*IF($C$32,0.9,1),0)` |
| AJ37 | `=ROUNDDOWN(8*IF($C$32,0.9,1),0)` |
| AK37 | `=sum($V4+$X4+$Z4+$AB4)` |
| AY37 | `=if($Q$18, "Growth/Million Gems","Cost/Benefit")` |
| I38 | `=IF(G38=H38,"👍🏻",((AX38-$AH$34)/$AH$34))` |
| J38 | `=IF(G38=H38,"👍🏻",AT38)` |
| L38 | `=IF(AY38="", "", RANK.EQ(AY38, FILTER($AY$22:$AY$43, $AY$22:$AY$43 <> "")))` *(Sheets-only)* |
| O38 | `=IFS(G38=0,0,G38=1,5000,G38=2,11250,G38=3,19000)` |
| P38 | `=IFS(H38=0,0,H38=1,5000,H38=2,11250,H38=3,19000)-IF(Q16=TRUE,O38,0)` |
| Q38 | `=if($Q$20,O38/if($Q$16=TRUE,O38+P38,P38),"")` |
| AH38 | `=ROUNDDOWN(12*IF($C$32,0.9,1),0)` |
| AI38 | `=ROUNDDOWN(12*IF($C$32,0.9,1),0)` |
| AJ38 | `=ROUNDDOWN(12*IF($C$32,0.9,1),0)` |
| AK38 | `=sum($V5+$X5+$Z5+$AB5)` |
| AT38 | `=IFS(G38=0,5000,G38=1,6250,G38=2,7750)` |
| AU38 | `=((5*(G38+1))+SUM(AI5:AJ5,AL5:AM5,AO5,AP5))*AK5` |
| AV38 | `=(1+0.1*(G38+1))*PRODUCT(AI9:AJ9,AL9:AN9)` |
| AW38 | `=AI14*AJ14*AM14*AN14*(1+(0.03*(G38+1))+AL14)*(1+AO14)*(1+AO16)` |
| AX38 | `=((AH3+(AU38*AH7*AV38))*IF(ISNUMBER(MATCH(B34, AG42:AG46, 0)), AH11, 1))*(AW38*((1-AH16)*1+AH16*(1-AH20)*AH18+AH16*AH20*AH18*AH22))/AK34` |
| AY38 | `=IF(G38=H38,"",if($Q$18,(1+I38)^(100000/J38),(AX38-$AH$34)/AT38))` |
| I39 | `=IF(G39=H39,"👍🏻",((AX39-$AH$34)/$AH$34))` |
| J39 | `=IF(G39=H39,"👍🏻",AT39)` |
| L39 | `=IF(AY39="", "", RANK.EQ(AY39, FILTER($AY$22:$AY$43, $AY$22:$AY$43 <> "")))` *(Sheets-only)* |
| O39 | `=IFS(G39=0,0,G39=1,5000,G39=2,11250,G39=3,19000)` |
| P39 | `=IFS(H39=0,0,H39=1,5000,H39=2,11250,H39=3,19000)-IF(Q16=TRUE,O39,0)` |
| Q39 | `=if($Q$20,O39/if($Q$16=TRUE,O39+P39,P39),"")` |
| AH39 | `=ROUNDDOWN(16*IF($C$32,0.9,1),0)` |
| AI39 | `=ROUNDDOWN(16*IF($C$32,0.9,1),0)` |
| AJ39 | `=ROUNDDOWN(16*IF($C$32,0.9,1),0)` |
| AK39 | `=sum($V6+$X6+$Z6+$AB6)` |
| AT39 | `=IFS(G39=0,5000,G39=1,6250,G39=2,7750)` |
| AU39 | `=(AI25-AJ25-AK25-(2*(G39+1)))/AM25` |
| AV39 | `=(0.02*(G39+1))+SUM(AI27:AJ27,AL27)` |
| AW39 | `=(0.01*(G39+1))+SUM(AI29:AK29,AM29)` |
| AX39 | `=AI34*AJ34/((AU39 / (  1*(1-AV39)*(1-AW39)*(1-AH31)+  2*   AV39 *(1-AW39)*(1-AH31)+  3*(1-AV39)*   AW39 *(1-AH31)+  5*(1-AV39)*(1-AW39)*   AH31 +  6*   AV39 *   AW39 *(1-AH31)+ 10*   AV39 *(1-AW39)*   AH31 + 15*(1-AV39)*   AW39 *   AH31 + 30*   AV39 *   AW39 *   AH31))*VLOOKUP(B34,AG36:AH46,2,FALSE))` |
| AY39 | `=IF(G39=H39,"",if($Q$18,(1+I39)^(100000/J39),(AX39-$AH$34)/AT39))` |
| I40 | `=IF(G38<1, "", IF(G40>0,"👍🏻",((AX40-$AH$34)/$AH$34)))` |
| J40 | `=IF(G38<1, "", IF(G40=H40,"👍🏻",AT40))` |
| L40 | `=IF(G38<1, "", IF(AY40="", "", RANK.EQ(AY40, FILTER($AY$22:$AY$43, $AY$22:$AY$43 <> ""))))` *(Sheets-only)* |
| O40 | `=IFS(G40=0,0,G40=1,6250,G40=2,14000,G40=3,23750)` |
| P40 | `=IFS(H40=0,0,H40=1,6250,H40=2,14000,H40=3,23750)-IF(Q16=TRUE,O40,0)` |
| Q40 | `=if($Q$20,O40/if($Q$16=TRUE,O40+P40,P40),"")` |
| AH40 | `=ROUNDDOWN(22*IF($C$32,0.9,1),0)` |
| AI40 | `=ROUNDDOWN(22*IF($C$32,0.9,1),0)` |
| AJ40 | `=ROUNDDOWN(22*IF($C$32,0.9,1),0)` |
| AK40 | `=sum($V7+$X7+$Z7+$AB7)` |
| AT40 | `=IFS(G40=0,6250,G40=1,7750,G40=2,9750)` |
| AX40 | `=AH34` |
| AY40 | `=if(G38<1,"", IF(G42=H42,"",if(G40>0,"",(AX42-$AH$34)/(AT42+AT40))))` |
| I41 | `=IF(G39<1, "", IF(G41=H41,"👍🏻",((AX41-$AH$34)/$AH$34)))` |
| J41 | `=IF(G39<1, "", IF(G41=H41,"👍🏻",AT41))` |
| L41 | `=IF(G39<1, "",IF(AY41="", "", RANK.EQ(AY41, FILTER($AY$22:$AY$43, $AY$22:$AY$43 <> ""))))` *(Sheets-only)* |
| O41 | `=IFS(G41=0,0,G41=1,6250,G41=2,14000,G41=3,23750)` |
| P41 | `=IFS(H41=0,0,H41=1,6250,H41=2,14000,H41=3,23750)-IF(Q16=TRUE,O41,0)` |
| Q41 | `=if($Q$20,O41/if($Q$16=TRUE,O41+P41,P41),"")` |
| AH41 | `=ROUNDDOWN((30-($G$42*2))*IF($C$32,0.9,1),0)` |
| AI41 | `=ROUNDDOWN((30-($G$42*2))*IF($C$32,0.9,1),0)` |
| AJ41 | `=ROUNDDOWN((30-(($G$42+1)*2))*IF($C$32,0.9,1),0)` |
| AK41 | `=sum($V8+$X8+$Z8+$AB8)` |
| AT41 | `=IFS(G41=0,6250,G41=1,7750,G41=2,9750)` |
| AU41 | `=AI14*AJ14*AM14*AN14*(1+AK14+(0.01*(G41+1)*AC19))*(1+AO14)` |
| AV41 | `=AI16+AK16+(0.001*(G41+1)*AC19)` |
| AX41 | `=AI34*(AU41*((1-AV41)*1+AV41*(1-AH20)*AH18+AV41*AH20*AH18*AH22))/AK34` |
| AY41 | `=if(G39<1,"", IF(G41=H41,"",if($Q$18,(1+I41)^(100000/J41),(AX41-$AH$34)/AT41)))` |
| I42 | `=IF(G40<1, "", IF(G42=H42,"👍🏻",((AX42-$AH$34)/$AH$34)))` |
| J42 | `=IF(G40<1, "", IF(G42=H42,"👍🏻",AT42))` |
| L42 | `=IF(G40<1, "",IF(AY42="", "", RANK.EQ(AY42, FILTER($AY$22:$AY$43, $AY$22:$AY$43 <> ""))))` *(Sheets-only)* |
| O42 | `=IFS(G42=0,0,G42=1,12500,G42=2,28125,G42=3,47625)` |
| P42 | `=IFS(H42=0,0,H42=1,12500,H42=2,28125,H42=3,47625)-IF(Q16=TRUE,O42,0)` |
| Q42 | `=if($Q$20,O42/if($Q$16=TRUE,O42+P42,P42),"")` |
| AH42 | `=ROUNDDOWN((40-$G$32-$G$42)*IF($C$32,0.9,1),0)` |
| AI42 | `=ROUNDDOWN((40-($G$32+1)-$G$42)*IF($C$32,0.9,1),0)` |
| AJ42 | `=ROUNDDOWN((40-($G$32+1)-($G$42+1))*IF($C$32,0.9,1),0)` |
| AK42 | `=sum($V10+$X10+$Z10+$AB10)` |
| AT42 | `=IFS(G42=0,12500,G42=1,15625,G42=2,19500)` |
| AU42 | `=ROUND(AI3*AJ3,0)*AK3*AL3*(1+0.1*(G42+1))*AN3*AO3` |
| AV42 | `=(AH25 / (  1*(1-AH27)*(1-AH29)*(1-AH31)+  2*   AH27 *(1-AH29)*(1-AH31)+  3*(1-AH27)*   AH29 *(1-AH31)+  5*(1-AH27)*(1-AH29)*   AH31 +  6*   AH27 *   AH29 *(1-AH31)+ 10*   AH27 *(1-AH29)*   AH31 + 15*(1-AH27)*   AH29 *   AH31 + 30*   AH27 *   AH29 *   AH31))*VLOOKUP(B34,AG36:AJ46,4,FALSE)` |
| AW42 | `=((5*(G42+1))+SUM(AI5:AJ5,AL5:AN5,AP5))*AK5` |
| AX42 | `=((AU42+(AW42*AH7*AH9))*IF(ISNUMBER(MATCH(B34, AG42:AG46, 0)), AH11, 1))*AJ34/AV42` |
| AY42 | `=if(G40<1,"", IF(G42=H42,"",if($Q$18,(1+I42)^(100000/J42),(AX42-$AH$34)/AT42)))` |
| I43 | `=IF(G41<1, "", IF(G43=H43,"👍🏻",((AX43-$AH$34)/$AH$34)))` |
| J43 | `=IF(G41<1, "", IF(G43=H43,"👍🏻",AT43))` |
| L43 | `=IF(G41<1, "", IF(AY43="", "", RANK.EQ(AY43, FILTER($AY$22:$AY$43, $AY$22:$AY$43 <> ""))))` *(Sheets-only)* |
| O43 | `=IFS(G43=0,0,G43=1,12500,G43=2,28125,G43=3,47625)` |
| P43 | `=IFS(H43=0,0,H43=1,12500,H43=2,28125,H43=3,47625)-IF(Q16=TRUE,O43,0)` |
| Q43 | `=if($Q$20,O43/if($Q$16=TRUE,O43+P43,P43),"")` |
| AH43 | `=ROUNDDOWN((50-$G$32-$G$42)*IF($C$32,0.9,1),0)` |
| AI43 | `=ROUNDDOWN((50-($G$32+1)-$G$42)*IF($C$32,0.9,1),0)` |
| AJ43 | `=ROUNDDOWN((50-($G$32+1)-($G$42+1))*IF($C$32,0.9,1),0)` |
| AK43 | `=sum($V11+$X11+$Z11+$AB11)` |
| AT43 | `=IFS(G43=0,12500,G43=1,15625,G43=2,19500)` |
| AU43 | `=(1+AI11+AJ11)*(1+(0.03*(G43+1)*COUNTIF(AD3:AD11,">0")))*(1+AL11)*(1+AM11)*(1+AN11)` |
| AV43 | `=(1+0.02*(G43+1)*COUNTIF(AD3:AD11,">0"))*PRODUCT(AI9:AL9,AN9,AO9)` |
| AW43 | `=(0.01*(G43+1)*COUNTIF(AD3:AD14,">0"))+AJ20` |
| AX43 | `=((AH3+(AH5*AH7*AV43))*IF(ISNUMBER(MATCH(B34, AG42:AG46, 0)), AU43, 1))*(AH14*((1-AH16)*1+AH16*(1-AW43)*AH18+AH16*AW43*AH18*AH22))/AK34` |
| AY43 | `=if(G41<1,"", IF(G43=H43,"",if($Q$18,(1+I43)^(100000/J43),(AX43-$AH$34)/AT43)))` |
| AH44 | `=ROUNDDOWN((60-$G$32-$G$42)*IF($C$32,0.9,1),0)` |
| AI44 | `=ROUNDDOWN((60-($G$32+1)-$G$42)*IF($C$32,0.9,1),0)` |
| AJ44 | `=ROUNDDOWN((60-($G$32+1)-($G$42+1))*IF($C$32,0.9,1),0)` |
| AK44 | `=sum($V12+$X12+$Z12+$AB12)` |
| O45 | `=if($Q$20,SUM(O21:O36),"")` |
| P45 | `=if($Q$20,SUM(P21:P36),"")` |
| Q45 | `=if($Q$20,O45/if($Q$16=TRUE,O45+P45,P45),"")` |
| AH45 | `=ROUNDDOWN((70-$G$32-$G$42)*IF($C$32,0.9,1),0)` |
| AI45 | `=ROUNDDOWN((70-($G$32+1)-$G$42)*IF($C$32,0.9,1),0)` |
| AJ45 | `=ROUNDDOWN((70-($G$32+1)-($G$42+1))*IF($C$32,0.9,1),0)` |
| AK45 | `=sum($V13+$X13+$Z13+$AB13)` |
| O46 | `=if($Q$20,SUM(O38:O43),"")` |
| P46 | `=if($Q$20,SUM(P38:P43),"")` |
| Q46 | `=if($Q$20,O46/if($Q$16=TRUE,O46+P46,P46),"")` |
| AH46 | `=ROUNDDOWN((80-$G$32-$G$42)*IF($C$32,0.9,1),0)` |
| AI46 | `=ROUNDDOWN((80-($G$32+1)-$G$42)*IF($C$32,0.9,1),0)` |
| AJ46 | `=ROUNDDOWN((80-($G$32+1)-($G$42+1))*IF($C$32,0.9,1),0)` |
| AK46 | `=sum($V14+$X14+$Z14+$AB14)` |
| O47 | `=sum(O3:O8)+sum(O10:O14)` |
| P47 | `=sum(P3:P8)+sum(P10:P14)` |
| Q47 | `=if($Q$20,O47/if($Q$16=TRUE,O47+P47,P47),"")` |
| O49 | `=if($Q$20,SUM(O45:O47),"")` |
| P49 | `=if($Q$20,SUM(P45:P47),"")` |
| Q49 | `=if($Q$20,O49/if($Q$16=TRUE,O49+P49,P49),"")` |
| P51 | `=sum(O45:O46)` |
| Q51 | `=if($Q$20,MIN(sum(O45:O46)/O51,1),"")` |
| U53 | `=IMPORTRANGE("https://docs.google.com/spreadsheets/d/18_K3KlY_ewqjb26oirX8qVdWVPhGBC-qVrUdKQ1KedE/edit?usp=sharing","'Obefish'!AL42")` *(Sheets-only)* |

## Sheet: Fish Farming  Cards

766 formulas

| Cell | Formula |
|---|---|
| D3 | `=IF($E$27=TRUE, TRUE, D30:E$30)` |
| F3 | `=IF($E$27=TRUE, $B$50, F$30:G$30)` |
| I3 | `=IF($E$27=TRUE, TRUE, I30:J$30)` |
| K3 | `=IF($E$27=TRUE, $B$50, K$30:L$30)` |
| N3 | `=IF($E$27=TRUE, TRUE, N30:O$30)` |
| P3 | `=IF($E$27=TRUE, $B$50, P$30:Q$30)` |
| S3 | `=IF($E$27=TRUE, TRUE, S30:T$30)` |
| U3 | `=IF($E$27=TRUE, $B$50, U$30:V$30)` |
| X3 | `=IF($E$27=TRUE, TRUE, X30:Y$30)` |
| Z3 | `=IF($E$27=TRUE, $B$50, Z$30:AA$30)` |
| AC3 | `=IF($E$27=TRUE, TRUE, AC30:AD$30)` |
| AE3 | `=IF($E$27=TRUE, $B$50, AE$30:AF$30)` |
| AH3 | `=IF($E$27=TRUE, TRUE, AH30:AI$30)` |
| AJ3 | `=IF($E$27=TRUE, $B$50, AJ$30:AK$30)` |
| AM3 | `=IF($E$27=TRUE, TRUE, AM30:AN$30)` |
| AO3 | `=IF($E$27=TRUE, $B$50, AO$30:AP$30)` |
| AR3 | `=IF($E$27=TRUE, TRUE, AR30:AS$30)` |
| AT3 | `=IF($E$27=TRUE, $B$50, AT$30:AU$30)` |
| AW3 | `=IF($E$27=TRUE, TRUE, AW30:AX$30)` |
| AY3 | `=IF($E$27=TRUE, $B$50, AY$30:AZ$30)` |
| BB3 | `=IF($E$27=TRUE, TRUE, BB30:BC$30)` |
| BD3 | `=IF($E$27=TRUE, $B$50, BD$30:BE$30)` |
| D4 | `=Obefish!U3` |
| E4 | `=Obefish!W3` |
| F4 | `=Obefish!Y3` |
| G4 | `=Obefish!AA3` |
| H4 | `=Obefish!AC3` |
| I4 | `=Obefish!U4` |
| J4 | `=Obefish!W4` |
| K4 | `=Obefish!Y4` |
| L4 | `=Obefish!AA4` |
| M4 | `=Obefish!AC4` |
| N4 | `=Obefish!U5` |
| O4 | `=Obefish!W5` |
| P4 | `=Obefish!Y5` |
| Q4 | `=Obefish!AA5` |
| R4 | `=Obefish!AC5` |
| S4 | `=Obefish!U6` |
| T4 | `=Obefish!W6` |
| U4 | `=Obefish!Y6` |
| V4 | `=Obefish!AA6` |
| W4 | `=Obefish!AC6` |
| X4 | `=Obefish!U7` |
| Y4 | `=Obefish!W7` |
| Z4 | `=Obefish!Y7` |
| AA4 | `=Obefish!AA7` |
| AB4 | `=Obefish!AC7` |
| AC4 | `=Obefish!U8` |
| AD4 | `=Obefish!W8` |
| AE4 | `=Obefish!Y8` |
| AF4 | `=Obefish!AA8` |
| AG4 | `=Obefish!AC8` |
| AH4 | `=Obefish!U10` |
| AI4 | `=Obefish!W10` |
| AJ4 | `=Obefish!Y10` |
| AK4 | `=Obefish!AA10` |
| AL4 | `=Obefish!AC10` |
| AM4 | `=Obefish!U11` |
| AN4 | `=Obefish!W11` |
| AO4 | `=Obefish!Y11` |
| AP4 | `=Obefish!AA11` |
| AQ4 | `=Obefish!AC11` |
| AR4 | `=Obefish!U12` |
| AS4 | `=Obefish!W12` |
| AT4 | `=Obefish!Y12` |
| AU4 | `=Obefish!AA12` |
| AV4 | `=Obefish!AC12` |
| AW4 | `=Obefish!U13` |
| AX4 | `=Obefish!W13` |
| AY4 | `=Obefish!Y13` |
| AZ4 | `=Obefish!AA13` |
| BA4 | `=Obefish!AC13` |
| BB4 | `=Obefish!U14` |
| BC4 | `=Obefish!W14` |
| BD4 | `=Obefish!Y14` |
| BE4 | `=Obefish!AA14` |
| BF4 | `=Obefish!AC14` |
| D6 | `=Obefish!V3` |
| E6 | `=Obefish!X3` |
| F6 | `=Obefish!Z3` |
| G6 | `=Obefish!AB3` |
| H6 | `=Obefish!AD3` |
| I6 | `=Obefish!V4` |
| J6 | `=Obefish!X4` |
| K6 | `=Obefish!Z4` |
| L6 | `=Obefish!AB4` |
| M6 | `=Obefish!AD4` |
| N6 | `=Obefish!V5` |
| O6 | `=Obefish!X5` |
| P6 | `=Obefish!Z5` |
| Q6 | `=Obefish!AB5` |
| R6 | `=Obefish!AD5` |
| S6 | `=Obefish!V6` |
| T6 | `=Obefish!X6` |
| U6 | `=Obefish!Z6` |
| V6 | `=Obefish!AB6` |
| W6 | `=Obefish!AD6` |
| X6 | `=Obefish!V7` |
| Y6 | `=Obefish!X7` |
| Z6 | `=Obefish!Z7` |
| AA6 | `=Obefish!AB7` |
| AB6 | `=Obefish!AD7` |
| AC6 | `=Obefish!V8` |
| AD6 | `=Obefish!X8` |
| AE6 | `=Obefish!Z8` |
| AF6 | `=Obefish!AB8` |
| AG6 | `=Obefish!AD8` |
| AH6 | `=Obefish!V10` |
| AI6 | `=Obefish!X10` |
| AJ6 | `=Obefish!Z10` |
| AK6 | `=Obefish!AB10` |
| AL6 | `=Obefish!AD10` |
| AM6 | `=Obefish!V11` |
| AN6 | `=Obefish!X11` |
| AO6 | `=Obefish!Z11` |
| AP6 | `=Obefish!AB11` |
| AQ6 | `=Obefish!AD11` |
| AR6 | `=Obefish!V12` |
| AS6 | `=Obefish!X12` |
| AT6 | `=Obefish!Z12` |
| AU6 | `=Obefish!AB12` |
| AV6 | `=Obefish!AD12` |
| AW6 | `=Obefish!V13` |
| AX6 | `=Obefish!X13` |
| AY6 | `=Obefish!Z13` |
| AZ6 | `=Obefish!AB13` |
| BA6 | `=Obefish!AD13` |
| BB6 | `=Obefish!V14` |
| BC6 | `=Obefish!X14` |
| BD6 | `=Obefish!Z14` |
| BE6 | `=Obefish!AB14` |
| BF6 | `=Obefish!AD14` |
| D7 | `=MIN(9.99,(IF(D3,$B$41,0)+F3*$B$42)/D5)` |
| E7 | `=MIN(9.99,(IF(D3,$B$41,0)+F3*$B$42)/E5)` |
| F7 | `=MIN(9.99,(IF(D3,$B$41,0)+F3*$B$42)/F5)` |
| G7 | `=MIN(9.99,(IF(D3,$B$41,0)+F3*$B$42)/G5)` |
| H7 | `=IF(AND(D6>=3, E6>=3, F6>=3, G6>=3),INT(round(G7,2)),0)` |
| I7 | `=MIN(9.99,(IF(I3,$B$41,0)+K3*$B$42)/I5)` |
| J7 | `=MIN(9.99,(IF(I3,$B$41,0)+K3*$B$42)/J5)` |
| K7 | `=MIN(9.99,(IF(I3,$B$41,0)+K3*$B$42)/K5)` |
| L7 | `=MIN(9.99,(IF(I3,$B$41,0)+K3*$B$42)/L5)` |
| M7 | `=IF(AND(I6>=3, J6>=3, K6>=3, L6>=3),INT(round(L7,2)),0)` |
| N7 | `=MIN(9.99,(IF(N3,$B$41,0)+P3*$B$42)/N5)` |
| O7 | `=MIN(9.99,(IF(N3,$B$41,0)+P3*$B$42)/O5)` |
| P7 | `=MIN(9.99,(IF(N3,$B$41,0)+P3*$B$42)/P5)` |
| Q7 | `=MIN(9.99,(IF(N3,$B$41,0)+P3*$B$42)/Q5)` |
| R7 | `=IF(AND(N6>=3, O6>=3, P6>=3, Q6>=3),INT(round(Q7,2)),0)` |
| S7 | `=MIN(9.99,(IF(S3,$B$41,0)+U3*$B$42)/S5)` |
| T7 | `=MIN(9.99,(IF(S3,$B$41,0)+U3*$B$42)/T5)` |
| U7 | `=MIN(9.99,(IF(S3,$B$41,0)+U3*$B$42)/U5)` |
| V7 | `=MIN(9.99,(IF(S3,$B$41,0)+U3*$B$42)/V5)` |
| W7 | `=IF(AND(S6>=3, T6>=3, U6>=3, V6>=3),INT(round(V7,2)),0)` |
| X7 | `=MIN(9.99,(IF(X3,$B$41,0)+Z3*$B$42)/X5)` |
| Y7 | `=MIN(9.99,(IF(X3,$B$41,0)+Z3*$B$42)/Y5)` |
| Z7 | `=MIN(9.99,(IF(X3,$B$41,0)+Z3*$B$42)/Z5)` |
| AA7 | `=MIN(9.99,(IF(X3,$B$41,0)+Z3*$B$42)/AA5)` |
| AB7 | `=IF(AND(X6>=3, Y6>=3, Z6>=3, AA6>=3),INT(round(AA7,2)),0)` |
| AC7 | `=MIN(9.99,(IF(AC3,$B$41,0)+AE3*$B$42)/AC5)` |
| AD7 | `=MIN(9.99,(IF(AC3,$B$41,0)+AE3*$B$42)/AD5)` |
| AE7 | `=MIN(9.99,(IF(AC3,$B$41,0)+AE3*$B$42)/AE5)` |
| AF7 | `=MIN(9.99,(IF(AC3,$B$41,0)+AE3*$B$42)/AF5)` |
| AG7 | `=IF(AND(AC6>=3, AD6>=3, AE6>=3, AF6>=3),INT(round(AF7,2)),0)` |
| AH7 | `=MIN(9.99, ((IF(AH3,$B$41,0)+AJ3*$B$42)*$B$43)/AH5)` |
| AI7 | `=MIN(9.99, ((IF(AH3,$B$41,0)+AJ3*$B$42)*$B$43)/AI5)` |
| AJ7 | `=MIN(9.99, ((IF(AH3,$B$41,0)+AJ3*$B$42)*$B$43)/AJ5)` |
| AK7 | `=MIN(9.99, ((IF(AH3,$B$41,0)+AJ3*$B$42)*$B$43)/AK5)` |
| AL7 | `=IF(AND(AH6>=3, AI6>=3, AJ6>=3, AK6>=3),INT(round(AK7,2)),0)` |
| AM7 | `=MIN(9.99, ((IF(AM3,$B$41,0)+AO3*$B$42)*$B$43)/AM5)` |
| AN7 | `=MIN(9.99, ((IF(AM3,$B$41,0)+AO3*$B$42)*$B$43)/AN5)` |
| AO7 | `=MIN(9.99, ((IF(AM3,$B$41,0)+AO3*$B$42)*$B$43)/AO5)` |
| AP7 | `=MIN(9.99, ((IF(AM3,$B$41,0)+AO3*$B$42)*$B$43)/AP5)` |
| AQ7 | `=IF(AND(AM6>=3, AN6>=3, AO6>=3, AP6>=3),INT(round(AP7,2)),0)` |
| AR7 | `=MIN(9.99, ((IF(AR3,$B$41,0)+AT3*$B$42)*$B$43)/AR5)` |
| AS7 | `=MIN(9.99, ((IF(AR3,$B$41,0)+AT3*$B$42)*$B$43)/AS5)` |
| AT7 | `=MIN(9.99, ((IF(AR3,$B$41,0)+AT3*$B$42)*$B$43)/AT5)` |
| AU7 | `=MIN(9.99, ((IF(AR3,$B$41,0)+AT3*$B$42)*$B$43)/AU5)` |
| AV7 | `=IF(AND(AR6>=3, AS6>=3, AT6>=3, AU6>=3),INT(round(AU7,2)),0)` |
| AW7 | `=MIN(9.99, ((IF(AW3,$B$41,0)+AY3*$B$42)*$B$43)/AW5)` |
| AX7 | `=MIN(9.99, ((IF(AW3,$B$41,0)+AY3*$B$42)*$B$43)/AX5)` |
| AY7 | `=MIN(9.99, ((IF(AW3,$B$41,0)+AY3*$B$42)*$B$43)/AY5)` |
| AZ7 | `=MIN(9.99, ((IF(AW3,$B$41,0)+AY3*$B$42)*$B$43)/AZ5)` |
| BA7 | `=IF(AND(AW6>=3, AX6>=3, AY6>=3, AZ6>=3),INT(round(AZ7,2)),0)` |
| BB7 | `=MIN(9.99, ((IF(BB3,$B$41,0)+BD3*$B$42)*$B$43)/BB5)` |
| BC7 | `=MIN(9.99, ((IF(BB3,$B$41,0)+BD3*$B$42)*$B$43)/BC5)` |
| BD7 | `=MIN(9.99, ((IF(BB3,$B$41,0)+BD3*$B$42)*$B$43)/BD5)` |
| BE7 | `=MIN(9.99, ((IF(BB3,$B$41,0)+BD3*$B$42)*$B$43)/BE5)` |
| BF7 | `=IF(AND(BB6>=3, BC6>=3, BD6>=3, BE6>=3),INT(round(BE7,2)),0)` |
| D8 | `=Obefish!AH36` |
| I8 | `=Obefish!AH37` |
| N8 | `=Obefish!AH38` |
| S8 | `=Obefish!AH39` |
| X8 | `=Obefish!AH40` |
| AC8 | `=Obefish!AH41` |
| AH8 | `=Obefish!AH42` |
| AM8 | `=Obefish!AH43` |
| AR8 | `=Obefish!AH44` |
| AW8 | `=Obefish!AH45` |
| BB8 | `=Obefish!AH46` |
| D9 | `=$B$49/D8` |
| I9 | `=$B$49/I8` |
| N9 | `=$B$49/N8` |
| S9 | `=$B$49/S8` |
| X9 | `=$B$49/X8` |
| AC9 | `=$B$49/AC8` |
| AH9 | `=$B$49/AH8` |
| AM9 | `=$B$49/AM8` |
| AR9 | `=$B$49/AR8` |
| AW9 | `=$B$49/AW8` |
| BB9 | `=$B$49/BB8` |
| D10 | `=D7*$B$34*IFS(D6=0,1,D6=1,1.5,D6=2,2,D6=3,$B$39,D6=4,$B$40)` |
| E10 | `=E7*$B$34*IFS(E6=0,1,E6=1,1.5,E6=2,2,E6=3,$B$39,E6=4,$B$40)` |
| F10 | `=F7*$B$34*IFS(F6=0,1,F6=1,1.5,F6=2,2,F6=3,$B$39,F6=4,$B$40)` |
| G10 | `=G7*$B$34*IFS(G6=0,1,G6=1,1.5,G6=2,2,G6=3,$B$39,G6=4,$B$40)` |
| I10 | `=I7*$B$34*IFS(I6=0,1,I6=1,1.5,I6=2,2,I6=3,$B$39,I6=4,$B$40)` |
| J10 | `=J7*$B$34*IFS(J6=0,1,J6=1,1.5,J6=2,2,J6=3,$B$39,J6=4,$B$40)` |
| K10 | `=K7*$B$34*IFS(K6=0,1,K6=1,1.5,K6=2,2,K6=3,$B$39,K6=4,$B$40)` |
| L10 | `=L7*$B$34*IFS(L6=0,1,L6=1,1.5,L6=2,2,L6=3,$B$39,L6=4,$B$40)` |
| N10 | `=N7*$B$34*IFS(N6=0,1,N6=1,1.5,N6=2,2,N6=3,$B$39,N6=4,$B$40)` |
| O10 | `=O7*$B$34*IFS(O6=0,1,O6=1,1.5,O6=2,2,O6=3,$B$39,O6=4,$B$40)` |
| P10 | `=P7*$B$34*IFS(P6=0,1,P6=1,1.5,P6=2,2,P6=3,$B$39,P6=4,$B$40)` |
| Q10 | `=Q7*$B$34*IFS(Q6=0,1,Q6=1,1.5,Q6=2,2,Q6=3,$B$39,Q6=4,$B$40)` |
| S10 | `=S7*$B$34*IFS(S6=0,1,S6=1,1.5,S6=2,2,S6=3,$B$39,S6=4,$B$40)` |
| T10 | `=T7*$B$34*IFS(T6=0,1,T6=1,1.5,T6=2,2,T6=3,$B$39,T6=4,$B$40)` |
| U10 | `=U7*$B$34*IFS(U6=0,1,U6=1,1.5,U6=2,2,U6=3,$B$39,U6=4,$B$40)` |
| V10 | `=V7*$B$34*IFS(V6=0,1,V6=1,1.5,V6=2,2,V6=3,$B$39,V6=4,$B$40)` |
| X10 | `=X7*$B$34*IFS(X6=0,1,X6=1,1.5,X6=2,2,X6=3,$B$39,X6=4,$B$40)` |
| Y10 | `=Y7*$B$34*IFS(Y6=0,1,Y6=1,1.5,Y6=2,2,Y6=3,$B$39,Y6=4,$B$40)` |
| Z10 | `=Z7*$B$34*IFS(Z6=0,1,Z6=1,1.5,Z6=2,2,Z6=3,$B$39,Z6=4,$B$40)` |
| AA10 | `=AA7*$B$34*IFS(AA6=0,1,AA6=1,1.5,AA6=2,2,AA6=3,$B$39,AA6=4,$B$40)` |
| AC10 | `=AC7*$B$34*IFS(AC6=0,1,AC6=1,1.5,AC6=2,2,AC6=3,$B$39,AC6=4,$B$40)` |
| AD10 | `=AD7*$B$34*IFS(AD6=0,1,AD6=1,1.5,AD6=2,2,AD6=3,$B$39,AD6=4,$B$40)` |
| AE10 | `=AE7*$B$34*IFS(AE6=0,1,AE6=1,1.5,AE6=2,2,AE6=3,$B$39,AE6=4,$B$40)` |
| AF10 | `=AF7*$B$34*IFS(AF6=0,1,AF6=1,1.5,AF6=2,2,AF6=3,$B$39,AF6=4,$B$40)` |
| AH10 | `=AH7*$B$34*IFS(AH6=0,1,AH6=1,1.5,AH6=2,2,AH6=3,$B$39,AH6=4,$B$40)` |
| AI10 | `=AI7*$B$34*IFS(AI6=0,1,AI6=1,1.5,AI6=2,2,AI6=3,$B$39,AI6=4,$B$40)` |
| AJ10 | `=AJ7*$B$34*IFS(AJ6=0,1,AJ6=1,1.5,AJ6=2,2,AJ6=3,$B$39,AJ6=4,$B$40)` |
| AK10 | `=AK7*$B$34*IFS(AK6=0,1,AK6=1,1.5,AK6=2,2,AK6=3,$B$39,AK6=4,$B$40)` |
| AM10 | `=AM7*$B$34*IFS(AM6=0,1,AM6=1,1.5,AM6=2,2,AM6=3,$B$39,AM6=4,$B$40)` |
| AN10 | `=AN7*$B$34*IFS(AN6=0,1,AN6=1,1.5,AN6=2,2,AN6=3,$B$39,AN6=4,$B$40)` |
| AO10 | `=AO7*$B$34*IFS(AO6=0,1,AO6=1,1.5,AO6=2,2,AO6=3,$B$39,AO6=4,$B$40)` |
| AP10 | `=AP7*$B$34*IFS(AP6=0,1,AP6=1,1.5,AP6=2,2,AP6=3,$B$39,AP6=4,$B$40)` |
| AR10 | `=AR7*$B$34*IFS(AR6=0,1,AR6=1,1.5,AR6=2,2,AR6=3,$B$39,AR6=4,$B$40)` |
| AS10 | `=AS7*$B$34*IFS(AS6=0,1,AS6=1,1.5,AS6=2,2,AS6=3,$B$39,AS6=4,$B$40)` |
| AT10 | `=AT7*$B$34*IFS(AT6=0,1,AT6=1,1.5,AT6=2,2,AT6=3,$B$39,AT6=4,$B$40)` |
| AU10 | `=AU7*$B$34*IFS(AU6=0,1,AU6=1,1.5,AU6=2,2,AU6=3,$B$39,AU6=4,$B$40)` |
| AW10 | `=AW7*$B$34*IFS(AW6=0,1,AW6=1,1.5,AW6=2,2,AW6=3,$B$39,AW6=4,$B$40)` |
| AX10 | `=AX7*$B$34*IFS(AX6=0,1,AX6=1,1.5,AX6=2,2,AX6=3,$B$39,AX6=4,$B$40)` |
| AY10 | `=AY7*$B$34*IFS(AY6=0,1,AY6=1,1.5,AY6=2,2,AY6=3,$B$39,AY6=4,$B$40)` |
| AZ10 | `=AZ7*$B$34*IFS(AZ6=0,1,AZ6=1,1.5,AZ6=2,2,AZ6=3,$B$39,AZ6=4,$B$40)` |
| BB10 | `=BB7*$B$34*IFS(BB6=0,1,BB6=1,1.5,BB6=2,2,BB6=3,$B$39,BB6=4,$B$40)` |
| BC10 | `=BC7*$B$34*IFS(BC6=0,1,BC6=1,1.5,BC6=2,2,BC6=3,$B$39,BC6=4,$B$40)` |
| BD10 | `=BD7*$B$34*IFS(BD6=0,1,BD6=1,1.5,BD6=2,2,BD6=3,$B$39,BD6=4,$B$40)` |
| BE10 | `=BE7*$B$34*IFS(BE6=0,1,BE6=1,1.5,BE6=2,2,BE6=3,$B$39,BE6=4,$B$40)` |
| D11 | `=D7*$B$34*$B$36*IFS(D6=0,1,D6=1,1.5,D6=2,2,D6=3,$B$39,D6=4,$B$40)` |
| E11 | `=E7*$B$34*$B$36*IFS(E6=0,1,E6=1,1.5,E6=2,2,E6=3,$B$39,E6=4,$B$40)` |
| F11 | `=F7*$B$34*$B$36*IFS(F6=0,1,F6=1,1.5,F6=2,2,F6=3,$B$39,F6=4,$B$40)` |
| G11 | `=G7*$B$34*$B$36*IFS(G6=0,1,G6=1,1.5,G6=2,2,G6=3,$B$39,G6=4,$B$40)` |
| I11 | `=I7*$B$34*$B$36*IFS(I6=0,1,I6=1,1.5,I6=2,2,I6=3,$B$39,I6=4,$B$40)` |
| J11 | `=J7*$B$34*$B$36*IFS(J6=0,1,J6=1,1.5,J6=2,2,J6=3,$B$39,J6=4,$B$40)` |
| K11 | `=K7*$B$34*$B$36*IFS(K6=0,1,K6=1,1.5,K6=2,2,K6=3,$B$39,K6=4,$B$40)` |
| L11 | `=L7*$B$34*$B$36*IFS(L6=0,1,L6=1,1.5,L6=2,2,L6=3,$B$39,L6=4,$B$40)` |
| N11 | `=N7*$B$34*$B$36*IFS(N6=0,1,N6=1,1.5,N6=2,2,N6=3,$B$39,N6=4,$B$40)` |
| O11 | `=O7*$B$34*$B$36*IFS(O6=0,1,O6=1,1.5,O6=2,2,O6=3,$B$39,O6=4,$B$40)` |
| P11 | `=P7*$B$34*$B$36*IFS(P6=0,1,P6=1,1.5,P6=2,2,P6=3,$B$39,P6=4,$B$40)` |
| Q11 | `=Q7*$B$34*$B$36*IFS(Q6=0,1,Q6=1,1.5,Q6=2,2,Q6=3,$B$39,Q6=4,$B$40)` |
| S11 | `=S7*$B$34*$B$36*IFS(S6=0,1,S6=1,1.5,S6=2,2,S6=3,$B$39,S6=4,$B$40)` |
| T11 | `=T7*$B$34*$B$36*IFS(T6=0,1,T6=1,1.5,T6=2,2,T6=3,$B$39,T6=4,$B$40)` |
| U11 | `=U7*$B$34*$B$36*IFS(U6=0,1,U6=1,1.5,U6=2,2,U6=3,$B$39,U6=4,$B$40)` |
| V11 | `=V7*$B$34*$B$36*IFS(V6=0,1,V6=1,1.5,V6=2,2,V6=3,$B$39,V6=4,$B$40)` |
| X11 | `=X7*$B$34*$B$36*IFS(X6=0,1,X6=1,1.5,X6=2,2,X6=3,$B$39,X6=4,$B$40)` |
| Y11 | `=Y7*$B$34*$B$36*IFS(Y6=0,1,Y6=1,1.5,Y6=2,2,Y6=3,$B$39,Y6=4,$B$40)` |
| Z11 | `=Z7*$B$34*$B$36*IFS(Z6=0,1,Z6=1,1.5,Z6=2,2,Z6=3,$B$39,Z6=4,$B$40)` |
| AA11 | `=AA7*$B$34*$B$36*IFS(AA6=0,1,AA6=1,1.5,AA6=2,2,AA6=3,$B$39,AA6=4,$B$40)` |
| AC11 | `=AC7*$B$34*$B$36*IFS(AC6=0,1,AC6=1,1.5,AC6=2,2,AC6=3,$B$39,AC6=4,$B$40)` |
| AD11 | `=AD7*$B$34*$B$36*IFS(AD6=0,1,AD6=1,1.5,AD6=2,2,AD6=3,$B$39,AD6=4,$B$40)` |
| AE11 | `=AE7*$B$34*$B$36*IFS(AE6=0,1,AE6=1,1.5,AE6=2,2,AE6=3,$B$39,AE6=4,$B$40)` |
| AF11 | `=AF7*$B$34*$B$36*IFS(AF6=0,1,AF6=1,1.5,AF6=2,2,AF6=3,$B$39,AF6=4,$B$40)` |
| AH11 | `=AH7*$B$34*$B$36*IFS(AH6=0,1,AH6=1,1.5,AH6=2,2,AH6=3,$B$39,AH6=4,$B$40)` |
| AI11 | `=AI7*$B$34*$B$36*IFS(AI6=0,1,AI6=1,1.5,AI6=2,2,AI6=3,$B$39,AI6=4,$B$40)` |
| AJ11 | `=AJ7*$B$34*$B$36*IFS(AJ6=0,1,AJ6=1,1.5,AJ6=2,2,AJ6=3,$B$39,AJ6=4,$B$40)` |
| AK11 | `=AK7*$B$34*$B$36*IFS(AK6=0,1,AK6=1,1.5,AK6=2,2,AK6=3,$B$39,AK6=4,$B$40)` |
| AM11 | `=AM7*$B$34*$B$36*IFS(AM6=0,1,AM6=1,1.5,AM6=2,2,AM6=3,$B$39,AM6=4,$B$40)` |
| AN11 | `=AN7*$B$34*$B$36*IFS(AN6=0,1,AN6=1,1.5,AN6=2,2,AN6=3,$B$39,AN6=4,$B$40)` |
| AO11 | `=AO7*$B$34*$B$36*IFS(AO6=0,1,AO6=1,1.5,AO6=2,2,AO6=3,$B$39,AO6=4,$B$40)` |
| AP11 | `=AP7*$B$34*$B$36*IFS(AP6=0,1,AP6=1,1.5,AP6=2,2,AP6=3,$B$39,AP6=4,$B$40)` |
| AR11 | `=AR7*$B$34*$B$36*IFS(AR6=0,1,AR6=1,1.5,AR6=2,2,AR6=3,$B$39,AR6=4,$B$40)` |
| AS11 | `=AS7*$B$34*$B$36*IFS(AS6=0,1,AS6=1,1.5,AS6=2,2,AS6=3,$B$39,AS6=4,$B$40)` |
| AT11 | `=AT7*$B$34*$B$36*IFS(AT6=0,1,AT6=1,1.5,AT6=2,2,AT6=3,$B$39,AT6=4,$B$40)` |
| AU11 | `=AU7*$B$34*$B$36*IFS(AU6=0,1,AU6=1,1.5,AU6=2,2,AU6=3,$B$39,AU6=4,$B$40)` |
| AW11 | `=AW7*$B$34*$B$36*IFS(AW6=0,1,AW6=1,1.5,AW6=2,2,AW6=3,$B$39,AW6=4,$B$40)` |
| AX11 | `=AX7*$B$34*$B$36*IFS(AX6=0,1,AX6=1,1.5,AX6=2,2,AX6=3,$B$39,AX6=4,$B$40)` |
| AY11 | `=AY7*$B$34*$B$36*IFS(AY6=0,1,AY6=1,1.5,AY6=2,2,AY6=3,$B$39,AY6=4,$B$40)` |
| AZ11 | `=AZ7*$B$34*$B$36*IFS(AZ6=0,1,AZ6=1,1.5,AZ6=2,2,AZ6=3,$B$39,AZ6=4,$B$40)` |
| BB11 | `=BB7*$B$34*$B$36*IFS(BB6=0,1,BB6=1,1.5,BB6=2,2,BB6=3,$B$39,BB6=4,$B$40)` |
| BC11 | `=BC7*$B$34*$B$36*IFS(BC6=0,1,BC6=1,1.5,BC6=2,2,BC6=3,$B$39,BC6=4,$B$40)` |
| BD11 | `=BD7*$B$34*$B$36*IFS(BD6=0,1,BD6=1,1.5,BD6=2,2,BD6=3,$B$39,BD6=4,$B$40)` |
| BE11 | `=BE7*$B$34*$B$36*IFS(BE6=0,1,BE6=1,1.5,BE6=2,2,BE6=3,$B$39,BE6=4,$B$40)` |
| D12 | `=D7*$B$34*$B$36*$B$38*IFS(D6=0,1,D6=1,1.5,D6=2,2,D6=3,$B$39,D6=4,$B$40)` |
| E12 | `=E7*$B$34*$B$36*$B$38*IFS(E6=0,1,E6=1,1.5,E6=2,2,E6=3,$B$39,E6=4,$B$40)` |
| F12 | `=F7*$B$34*$B$36*$B$38*IFS(F6=0,1,F6=1,1.5,F6=2,2,F6=3,$B$39,F6=4,$B$40)` |
| G12 | `=G7*$B$34*$B$36*$B$38*IFS(G6=0,1,G6=1,1.5,G6=2,2,G6=3,$B$39,G6=4,$B$40)` |
| I12 | `=I7*$B$34*$B$36*$B$38*IFS(I6=0,1,I6=1,1.5,I6=2,2,I6=3,$B$39,I6=4,$B$40)` |
| J12 | `=J7*$B$34*$B$36*$B$38*IFS(J6=0,1,J6=1,1.5,J6=2,2,J6=3,$B$39,J6=4,$B$40)` |
| K12 | `=K7*$B$34*$B$36*$B$38*IFS(K6=0,1,K6=1,1.5,K6=2,2,K6=3,$B$39,K6=4,$B$40)` |
| L12 | `=L7*$B$34*$B$36*$B$38*IFS(L6=0,1,L6=1,1.5,L6=2,2,L6=3,$B$39,L6=4,$B$40)` |
| N12 | `=N7*$B$34*$B$36*$B$38*IFS(N6=0,1,N6=1,1.5,N6=2,2,N6=3,$B$39,N6=4,$B$40)` |
| O12 | `=O7*$B$34*$B$36*$B$38*IFS(O6=0,1,O6=1,1.5,O6=2,2,O6=3,$B$39,O6=4,$B$40)` |
| P12 | `=P7*$B$34*$B$36*$B$38*IFS(P6=0,1,P6=1,1.5,P6=2,2,P6=3,$B$39,P6=4,$B$40)` |
| Q12 | `=Q7*$B$34*$B$36*$B$38*IFS(Q6=0,1,Q6=1,1.5,Q6=2,2,Q6=3,$B$39,Q6=4,$B$40)` |
| S12 | `=S7*$B$34*$B$36*$B$38*IFS(S6=0,1,S6=1,1.5,S6=2,2,S6=3,$B$39,S6=4,$B$40)` |
| T12 | `=T7*$B$34*$B$36*$B$38*IFS(T6=0,1,T6=1,1.5,T6=2,2,T6=3,$B$39,T6=4,$B$40)` |
| U12 | `=U7*$B$34*$B$36*$B$38*IFS(U6=0,1,U6=1,1.5,U6=2,2,U6=3,$B$39,U6=4,$B$40)` |
| V12 | `=V7*$B$34*$B$36*$B$38*IFS(V6=0,1,V6=1,1.5,V6=2,2,V6=3,$B$39,V6=4,$B$40)` |
| X12 | `=X7*$B$34*$B$36*$B$38*IFS(X6=0,1,X6=1,1.5,X6=2,2,X6=3,$B$39,X6=4,$B$40)` |
| Y12 | `=Y7*$B$34*$B$36*$B$38*IFS(Y6=0,1,Y6=1,1.5,Y6=2,2,Y6=3,$B$39,Y6=4,$B$40)` |
| Z12 | `=Z7*$B$34*$B$36*$B$38*IFS(Z6=0,1,Z6=1,1.5,Z6=2,2,Z6=3,$B$39,Z6=4,$B$40)` |
| AA12 | `=AA7*$B$34*$B$36*$B$38*IFS(AA6=0,1,AA6=1,1.5,AA6=2,2,AA6=3,$B$39,AA6=4,$B$40)` |
| AC12 | `=AC7*$B$34*$B$36*$B$38*IFS(AC6=0,1,AC6=1,1.5,AC6=2,2,AC6=3,$B$39,AC6=4,$B$40)` |
| AD12 | `=AD7*$B$34*$B$36*$B$38*IFS(AD6=0,1,AD6=1,1.5,AD6=2,2,AD6=3,$B$39,AD6=4,$B$40)` |
| AE12 | `=AE7*$B$34*$B$36*$B$38*IFS(AE6=0,1,AE6=1,1.5,AE6=2,2,AE6=3,$B$39,AE6=4,$B$40)` |
| AF12 | `=AF7*$B$34*$B$36*$B$38*IFS(AF6=0,1,AF6=1,1.5,AF6=2,2,AF6=3,$B$39,AF6=4,$B$40)` |
| AH12 | `=AH7*$B$34*$B$36*$B$38*IFS(AH6=0,1,AH6=1,1.5,AH6=2,2,AH6=3,$B$39,AH6=4,$B$40)` |
| AI12 | `=AI7*$B$34*$B$36*$B$38*IFS(AI6=0,1,AI6=1,1.5,AI6=2,2,AI6=3,$B$39,AI6=4,$B$40)` |
| AJ12 | `=AJ7*$B$34*$B$36*$B$38*IFS(AJ6=0,1,AJ6=1,1.5,AJ6=2,2,AJ6=3,$B$39,AJ6=4,$B$40)` |
| AK12 | `=AK7*$B$34*$B$36*$B$38*IFS(AK6=0,1,AK6=1,1.5,AK6=2,2,AK6=3,$B$39,AK6=4,$B$40)` |
| AM12 | `=AM7*$B$34*$B$36*$B$38*IFS(AM6=0,1,AM6=1,1.5,AM6=2,2,AM6=3,$B$39,AM6=4,$B$40)` |
| AN12 | `=AN7*$B$34*$B$36*$B$38*IFS(AN6=0,1,AN6=1,1.5,AN6=2,2,AN6=3,$B$39,AN6=4,$B$40)` |
| AO12 | `=AO7*$B$34*$B$36*$B$38*IFS(AO6=0,1,AO6=1,1.5,AO6=2,2,AO6=3,$B$39,AO6=4,$B$40)` |
| AP12 | `=AP7*$B$34*$B$36*$B$38*IFS(AP6=0,1,AP6=1,1.5,AP6=2,2,AP6=3,$B$39,AP6=4,$B$40)` |
| AR12 | `=AR7*$B$34*$B$36*$B$38*IFS(AR6=0,1,AR6=1,1.5,AR6=2,2,AR6=3,$B$39,AR6=4,$B$40)` |
| AS12 | `=AS7*$B$34*$B$36*$B$38*IFS(AS6=0,1,AS6=1,1.5,AS6=2,2,AS6=3,$B$39,AS6=4,$B$40)` |
| AT12 | `=AT7*$B$34*$B$36*$B$38*IFS(AT6=0,1,AT6=1,1.5,AT6=2,2,AT6=3,$B$39,AT6=4,$B$40)` |
| AU12 | `=AU7*$B$34*$B$36*$B$38*IFS(AU6=0,1,AU6=1,1.5,AU6=2,2,AU6=3,$B$39,AU6=4,$B$40)` |
| AW12 | `=AW7*$B$34*$B$36*$B$38*IFS(AW6=0,1,AW6=1,1.5,AW6=2,2,AW6=3,$B$39,AW6=4,$B$40)` |
| AX12 | `=AX7*$B$34*$B$36*$B$38*IFS(AX6=0,1,AX6=1,1.5,AX6=2,2,AX6=3,$B$39,AX6=4,$B$40)` |
| AY12 | `=AY7*$B$34*$B$36*$B$38*IFS(AY6=0,1,AY6=1,1.5,AY6=2,2,AY6=3,$B$39,AY6=4,$B$40)` |
| AZ12 | `=AZ7*$B$34*$B$36*$B$38*IFS(AZ6=0,1,AZ6=1,1.5,AZ6=2,2,AZ6=3,$B$39,AZ6=4,$B$40)` |
| BB12 | `=BB7*$B$34*$B$36*$B$38*IFS(BB6=0,1,BB6=1,1.5,BB6=2,2,BB6=3,$B$39,BB6=4,$B$40)` |
| BC12 | `=BC7*$B$34*$B$36*$B$38*IFS(BC6=0,1,BC6=1,1.5,BC6=2,2,BC6=3,$B$39,BC6=4,$B$40)` |
| BD12 | `=BD7*$B$34*$B$36*$B$38*IFS(BD6=0,1,BD6=1,1.5,BD6=2,2,BD6=3,$B$39,BD6=4,$B$40)` |
| BE12 | `=BE7*$B$34*$B$36*$B$38*IFS(BE6=0,1,BE6=1,1.5,BE6=2,2,BE6=3,$B$39,BE6=4,$B$40)` |
| D13 | `=((1-$B$35)       *D10 +      $B$35*(1-$B$37)*D11 +      $B$35*   $B$37 *D12)` |
| E13 | `=((1-$B$35) *E10 + $B$35*(1-$B$37)*E11 + $B$35* $B$37 *E12)` |
| F13 | `=((1-$B$35) *F10 + $B$35*(1-$B$37)*F11 + $B$35* $B$37 *F12)` |
| G13 | `=((1-$B$35) *G10 + $B$35*(1-$B$37)*G11 + $B$35* $B$37 *G12)` |
| I13 | `=((1-$B$35)       *I10 +      $B$35*(1-$B$37)*I11 +      $B$35*   $B$37 *I12)` |
| J13 | `=((1-$B$35) *J10 + $B$35*(1-$B$37)*J11 + $B$35* $B$37 *J12)` |
| K13 | `=((1-$B$35) *K10 + $B$35*(1-$B$37)*K11 + $B$35* $B$37 *K12)` |
| L13 | `=((1-$B$35) *L10 + $B$35*(1-$B$37)*L11 + $B$35* $B$37 *L12)` |
| N13 | `=((1-$B$35)       *N10 +      $B$35*(1-$B$37)*N11 +      $B$35*   $B$37 *N12)` |
| O13 | `=((1-$B$35) *O10 + $B$35*(1-$B$37)*O11 + $B$35* $B$37 *O12)` |
| P13 | `=((1-$B$35) *P10 + $B$35*(1-$B$37)*P11 + $B$35* $B$37 *P12)` |
| Q13 | `=((1-$B$35) *Q10 + $B$35*(1-$B$37)*Q11 + $B$35* $B$37 *Q12)` |
| S13 | `=((1-$B$35)       *S10 +      $B$35*(1-$B$37)*S11 +      $B$35*   $B$37 *S12)` |
| T13 | `=((1-$B$35) *T10 + $B$35*(1-$B$37)*T11 + $B$35* $B$37 *T12)` |
| U13 | `=((1-$B$35) *U10 + $B$35*(1-$B$37)*U11 + $B$35* $B$37 *U12)` |
| V13 | `=((1-$B$35) *V10 + $B$35*(1-$B$37)*V11 + $B$35* $B$37 *V12)` |
| X13 | `=((1-$B$35)       *X10 +      $B$35*(1-$B$37)*X11 +      $B$35*   $B$37 *X12)` |
| Y13 | `=((1-$B$35) *Y10 + $B$35*(1-$B$37)*Y11 + $B$35* $B$37 *Y12)` |
| Z13 | `=((1-$B$35) *Z10 + $B$35*(1-$B$37)*Z11 + $B$35* $B$37 *Z12)` |
| AA13 | `=((1-$B$35) *AA10 + $B$35*(1-$B$37)*AA11 + $B$35* $B$37 *AA12)` |
| AC13 | `=((1-$B$35)       *AC10 +      $B$35*(1-$B$37)*AC11 +      $B$35*   $B$37 *AC12)` |
| AD13 | `=((1-$B$35) *AD10 + $B$35*(1-$B$37)*AD11 + $B$35* $B$37 *AD12)` |
| AE13 | `=((1-$B$35) *AE10 + $B$35*(1-$B$37)*AE11 + $B$35* $B$37 *AE12)` |
| AF13 | `=((1-$B$35) *AF10 + $B$35*(1-$B$37)*AF11 + $B$35* $B$37 *AF12)` |
| AH13 | `=((1-$B$35)       *AH10 +      $B$35*(1-$B$37)*AH11 +      $B$35*   $B$37 *AH12)` |
| AI13 | `=((1-$B$35) *AI10 + $B$35*(1-$B$37)*AI11 + $B$35* $B$37 *AI12)` |
| AJ13 | `=((1-$B$35) *AJ10 + $B$35*(1-$B$37)*AJ11 + $B$35* $B$37 *AJ12)` |
| AK13 | `=((1-$B$35) *AK10 + $B$35*(1-$B$37)*AK11 + $B$35* $B$37 *AK12)` |
| AM13 | `=((1-$B$35)       *AM10 +      $B$35*(1-$B$37)*AM11 +      $B$35*   $B$37 *AM12)` |
| AN13 | `=((1-$B$35) *AN10 + $B$35*(1-$B$37)*AN11 + $B$35* $B$37 *AN12)` |
| AO13 | `=((1-$B$35) *AO10 + $B$35*(1-$B$37)*AO11 + $B$35* $B$37 *AO12)` |
| AP13 | `=((1-$B$35) *AP10 + $B$35*(1-$B$37)*AP11 + $B$35* $B$37 *AP12)` |
| AR13 | `=((1-$B$35)       *AR10 +      $B$35*(1-$B$37)*AR11 +      $B$35*   $B$37 *AR12)` |
| AS13 | `=((1-$B$35) *AS10 + $B$35*(1-$B$37)*AS11 + $B$35* $B$37 *AS12)` |
| AT13 | `=((1-$B$35) *AT10 + $B$35*(1-$B$37)*AT11 + $B$35* $B$37 *AT12)` |
| AU13 | `=((1-$B$35) *AU10 + $B$35*(1-$B$37)*AU11 + $B$35* $B$37 *AU12)` |
| AW13 | `=((1-$B$35)       *AW10 +      $B$35*(1-$B$37)*AW11 +      $B$35*   $B$37 *AW12)` |
| AX13 | `=((1-$B$35) *AX10 + $B$35*(1-$B$37)*AX11 + $B$35* $B$37 *AX12)` |
| AY13 | `=((1-$B$35) *AY10 + $B$35*(1-$B$37)*AY11 + $B$35* $B$37 *AY12)` |
| AZ13 | `=((1-$B$35) *AZ10 + $B$35*(1-$B$37)*AZ11 + $B$35* $B$37 *AZ12)` |
| BB13 | `=((1-$B$35)       *BB10 +      $B$35*(1-$B$37)*BB11 +      $B$35*   $B$37 *BB12)` |
| BC13 | `=((1-$B$35) *BC10 + $B$35*(1-$B$37)*BC11 + $B$35* $B$37 *BC12)` |
| BD13 | `=((1-$B$35) *BD10 + $B$35*(1-$B$37)*BD11 + $B$35* $B$37 *BD12)` |
| BE13 | `=((1-$B$35) *BE10 + $B$35*(1-$B$37)*BE11 + $B$35* $B$37 *BE12)` |
| D14 | `=D13*D9` |
| E14 | `=E13*D9` |
| F14 | `=F13*D9` |
| G14 | `=G13*D9` |
| I14 | `=I13*I9` |
| J14 | `=J13*I9` |
| K14 | `=K13*I9` |
| L14 | `=L13*I9` |
| N14 | `=N13*N9` |
| O14 | `=O13*N9` |
| P14 | `=P13*N9` |
| Q14 | `=Q13*N9` |
| S14 | `=S13*S9` |
| T14 | `=T13*S9` |
| U14 | `=U13*S9` |
| V14 | `=V13*S9` |
| X14 | `=X13*X9` |
| Y14 | `=Y13*X9` |
| Z14 | `=Z13*X9` |
| AA14 | `=AA13*X9` |
| AC14 | `=AC13*AC9` |
| AD14 | `=AD13*AC9` |
| AE14 | `=AE13*AC9` |
| AF14 | `=AF13*AC9` |
| AH14 | `=AH13*AH9` |
| AI14 | `=AI13*AH9` |
| AJ14 | `=AJ13*AH9` |
| AK14 | `=AK13*AH9` |
| AM14 | `=AM13*AM9` |
| AN14 | `=AN13*AM9` |
| AO14 | `=AO13*AM9` |
| AP14 | `=AP13*AM9` |
| AR14 | `=AR13*AR9` |
| AS14 | `=AS13*AR9` |
| AT14 | `=AT13*AR9` |
| AU14 | `=AU13*AR9` |
| AW14 | `=AW13*AW9` |
| AX14 | `=AX13*AW9` |
| AY14 | `=AY13*AW9` |
| AZ14 | `=AZ13*AW9` |
| BB14 | `=BB13*BB9` |
| BC14 | `=BC13*BB9` |
| BD14 | `=BD13*BB9` |
| BE14 | `=BE13*BB9` |
| D16 | `=1500*(1.1^D15)` |
| E16 | `=1500*(1.1^E15)` |
| F16 | `=1500*(1.1^F15)` |
| G16 | `=1500*(1.1^G15)` |
| I16 | `=1500*(1.1^I15)` |
| J16 | `=1500*(1.1^J15)` |
| K16 | `=1500*(1.1^K15)` |
| L16 | `=1500*(1.1^L15)` |
| N16 | `=1500*(1.1^N15)` |
| O16 | `=1500*(1.1^O15)` |
| P16 | `=1500*(1.1^P15)` |
| Q16 | `=1500*(1.1^Q15)` |
| S16 | `=1500*(1.1^S15)` |
| T16 | `=1500*(1.1^T15)` |
| U16 | `=1500*(1.1^U15)` |
| V16 | `=1500*(1.1^V15)` |
| X16 | `=1500*(1.1^X15)` |
| Y16 | `=1500*(1.1^Y15)` |
| Z16 | `=1500*(1.1^Z15)` |
| AA16 | `=1500*(1.1^AA15)` |
| AC16 | `=1500*(1.1^AC15)` |
| AD16 | `=1500*(1.1^AD15)` |
| AE16 | `=1500*(1.1^AE15)` |
| AF16 | `=1500*(1.1^AF15)` |
| AH16 | `=150000*(1.1^AH15)` |
| AI16 | `=150000*(1.1^AI15)` |
| AJ16 | `=150000*(1.1^AJ15)` |
| AK16 | `=150000*(1.1^AK15)` |
| AM16 | `=150000*(1.1^AM15)` |
| AN16 | `=150000*(1.1^AN15)` |
| AO16 | `=150000*(1.1^AO15)` |
| AP16 | `=150000*(1.1^AP15)` |
| AR16 | `=150000*(1.1^AR15)` |
| AS16 | `=150000*(1.1^AS15)` |
| AT16 | `=150000*(1.1^AT15)` |
| AU16 | `=150000*(1.1^AU15)` |
| AW16 | `=150000*(1.1^AW15)` |
| AX16 | `=150000*(1.1^AX15)` |
| AY16 | `=150000*(1.1^AY15)` |
| AZ16 | `=150000*(1.1^AZ15)` |
| BB16 | `=150000*(1.1^BB15)` |
| BC16 | `=150000*(1.1^BC15)` |
| BD16 | `=150000*(1.1^BD15)` |
| BE16 | `=150000*(1.1^BE15)` |
| D17 | `=15000*(1.1^D15)` |
| E17 | `=15000*(1.1^E15)` |
| F17 | `=15000*(1.1^F15)` |
| G17 | `=15000*(1.1^G15)` |
| I17 | `=15000*(1.1^I15)` |
| J17 | `=15000*(1.1^J15)` |
| K17 | `=15000*(1.1^K15)` |
| L17 | `=15000*(1.1^L15)` |
| N17 | `=15000*(1.1^N15)` |
| O17 | `=15000*(1.1^O15)` |
| P17 | `=15000*(1.1^P15)` |
| Q17 | `=15000*(1.1^Q15)` |
| S17 | `=15000*(1.1^S15)` |
| T17 | `=15000*(1.1^T15)` |
| U17 | `=15000*(1.1^U15)` |
| V17 | `=15000*(1.1^V15)` |
| X17 | `=15000*(1.1^X15)` |
| Y17 | `=15000*(1.1^Y15)` |
| Z17 | `=15000*(1.1^Z15)` |
| AA17 | `=15000*(1.1^AA15)` |
| AC17 | `=15000*(1.1^AC15)` |
| AD17 | `=15000*(1.1^AD15)` |
| AE17 | `=15000*(1.1^AE15)` |
| AF17 | `=15000*(1.1^AF15)` |
| AH17 | `=1500000*(1.1^AH15)` |
| AI17 | `=1500000*(1.1^AI15)` |
| AJ17 | `=1500000*(1.1^AJ15)` |
| AK17 | `=1500000*(1.1^AK15)` |
| AM17 | `=1500000*(1.1^AM15)` |
| AN17 | `=1500000*(1.1^AN15)` |
| AO17 | `=1500000*(1.1^AO15)` |
| AP17 | `=1500000*(1.1^AP15)` |
| AR17 | `=1500000*(1.1^AR15)` |
| AS17 | `=1500000*(1.1^AS15)` |
| AT17 | `=1500000*(1.1^AT15)` |
| AU17 | `=1500000*(1.1^AU15)` |
| AW17 | `=1500000*(1.1^AW15)` |
| AX17 | `=1500000*(1.1^AX15)` |
| AY17 | `=1500000*(1.1^AY15)` |
| AZ17 | `=1500000*(1.1^AZ15)` |
| BB17 | `=1500000*(1.1^BB15)` |
| BC17 | `=1500000*(1.1^BC15)` |
| BD17 | `=1500000*(1.1^BD15)` |
| BE17 | `=1500000*(1.1^BE15)` |
| D19 | `=IFS(D6=0,          ((1-$B$35)         *(D10/D16) +              $B$35*(1-$B$37)*(D11/D16) +              $B$35*   $B$37 *(D12/D16)),      D6=1,"Gild it",      D6=2,          ((1-$B$35)         *(D10/D17) +              $B$35*(1-$B$37)*(D11/D17) +              $B$35*   $B$37 *(D12/D17)),      D6=3,          ((1-$B$35)         *(D10/D18) +              $B$35*(1-$B$37)*(D11/D18) +              $B$35*   $B$37 *(D12/D18)),      D6=4,"Done")` |
| E19 | `=IFS(E6=0, ((1-$B$35) *(E10/E16) + $B$35*(1-$B$37)*(E11/E16) + $B$35* $B$37 *(E12/E16)), E6=1,"Gild it", E6=2, ((1-$B$35) *(E10/E17) + $B$35*(1-$B$37)*(E11/E17) + $B$35* $B$37 *(E12/E17)), E6=3, ((1-$B$35) *(E10/E18) + $B$35*(1-$B$37)*(E11/E18) + $B$35* $B$37 *(E12/E18)), E6=4,"Done")` |
| F19 | `=IFS(F6=0, ((1-$B$35) *(F10/F16) + $B$35*(1-$B$37)*(F11/F16) + $B$35* $B$37 *(F12/F16)), F6=1,"Gild it", F6=2, ((1-$B$35) *(F10/F17) + $B$35*(1-$B$37)*(F11/F17) + $B$35* $B$37 *(F12/F17)), F6=3, ((1-$B$35) *(F10/F18) + $B$35*(1-$B$37)*(F11/F18) + $B$35* $B$37 *(F12/F18)), F6=4,"Done")` |
| G19 | `=IFS(G6=0, ((1-$B$35) *(G10/G16) + $B$35*(1-$B$37)*(G11/G16) + $B$35* $B$37 *(G12/G16)), G6=1,"Gild it", G6=2, ((1-$B$35) *(G10/G17) + $B$35*(1-$B$37)*(G11/G17) + $B$35* $B$37 *(G12/G17)), G6=3, ((1-$B$35) *(G10/G18) + $B$35*(1-$B$37)*(G11/G18) + $B$35* $B$37 *(G12/G18)), G6=4,"Done")` |
| H19 | `=IFS(H6=0,(H7/(150000/IF($B$30,(1+($B$32*0.02+0.02)),1))),      H6=1,"Gild it",      H6=2,(H7/(150000/IF($B$30,(1+($B$32*0.02+0.02)),1))),      H6=3,((H7/(150000/IF($B$30,(1+($B$32*0.02+0.02)),1)))/3),      H6=4,"Done")` |
| I19 | `=IFS(I6=0,          ((1-$B$35)         *(I10/I16) +              $B$35*(1-$B$37)*(I11/I16) +              $B$35*   $B$37 *(I12/I16)),      I6=1,"Gild it",      I6=2,          ((1-$B$35)         *(I10/I17) +              $B$35*(1-$B$37)*(I11/I17) +              $B$35*   $B$37 *(I12/I17)),      I6=3,          ((1-$B$35)         *(I10/I18) +              $B$35*(1-$B$37)*(I11/I18) +              $B$35*   $B$37 *(I12/I18)),      I6=4,"Done")` |
| J19 | `=IFS(J6=0, ((1-$B$35) *(J10/J16) + $B$35*(1-$B$37)*(J11/J16) + $B$35* $B$37 *(J12/J16)), J6=1,"Gild it", J6=2, ((1-$B$35) *(J10/J17) + $B$35*(1-$B$37)*(J11/J17) + $B$35* $B$37 *(J12/J17)), J6=3, ((1-$B$35) *(J10/J18) + $B$35*(1-$B$37)*(J11/J18) + $B$35* $B$37 *(J12/J18)), J6=4,"Done")` |
| K19 | `=IFS(K6=0, ((1-$B$35) *(K10/K16) + $B$35*(1-$B$37)*(K11/K16) + $B$35* $B$37 *(K12/K16)), K6=1,"Gild it", K6=2, ((1-$B$35) *(K10/K17) + $B$35*(1-$B$37)*(K11/K17) + $B$35* $B$37 *(K12/K17)), K6=3, ((1-$B$35) *(K10/K18) + $B$35*(1-$B$37)*(K11/K18) + $B$35* $B$37 *(K12/K18)), K6=4,"Done")` |
| L19 | `=IFS(L6=0, ((1-$B$35) *(L10/L16) + $B$35*(1-$B$37)*(L11/L16) + $B$35* $B$37 *(L12/L16)), L6=1,"Gild it", L6=2, ((1-$B$35) *(L10/L17) + $B$35*(1-$B$37)*(L11/L17) + $B$35* $B$37 *(L12/L17)), L6=3, ((1-$B$35) *(L10/L18) + $B$35*(1-$B$37)*(L11/L18) + $B$35* $B$37 *(L12/L18)), L6=4,"Done")` |
| M19 | `=IFS(M6=0,(M7/(150000/IF($B$30,(1+($B$32*0.02+0.02)),1))),      M6=1,"Gild it",      M6=2,(M7/(150000/IF($B$30,(1+($B$32*0.02+0.02)),1))),      M6=3,((M7/(150000/IF($B$30,(1+($B$32*0.02+0.02)),1)))/3),      M6=4,"Done")` |
| N19 | `=IFS(N6=0,          ((1-$B$35)         *(N10/N16) +              $B$35*(1-$B$37)*(N11/N16) +              $B$35*   $B$37 *(N12/N16)),      N6=1,"Gild it",      N6=2,          ((1-$B$35)         *(N10/N17) +              $B$35*(1-$B$37)*(N11/N17) +              $B$35*   $B$37 *(N12/N17)),      N6=3,          ((1-$B$35)         *(N10/N18) +              $B$35*(1-$B$37)*(N11/N18) +              $B$35*   $B$37 *(N12/N18)),      N6=4,"Done")` |
| O19 | `=IFS(O6=0, ((1-$B$35) *(O10/O16) + $B$35*(1-$B$37)*(O11/O16) + $B$35* $B$37 *(O12/O16)), O6=1,"Gild it", O6=2, ((1-$B$35) *(O10/O17) + $B$35*(1-$B$37)*(O11/O17) + $B$35* $B$37 *(O12/O17)), O6=3, ((1-$B$35) *(O10/O18) + $B$35*(1-$B$37)*(O11/O18) + $B$35* $B$37 *(O12/O18)), O6=4,"Done")` |
| P19 | `=IFS(P6=0, ((1-$B$35) *(P10/P16) + $B$35*(1-$B$37)*(P11/P16) + $B$35* $B$37 *(P12/P16)), P6=1,"Gild it", P6=2, ((1-$B$35) *(P10/P17) + $B$35*(1-$B$37)*(P11/P17) + $B$35* $B$37 *(P12/P17)), P6=3, ((1-$B$35) *(P10/P18) + $B$35*(1-$B$37)*(P11/P18) + $B$35* $B$37 *(P12/P18)), P6=4,"Done")` |
| Q19 | `=IFS(Q6=0, ((1-$B$35) *(Q10/Q16) + $B$35*(1-$B$37)*(Q11/Q16) + $B$35* $B$37 *(Q12/Q16)), Q6=1,"Gild it", Q6=2, ((1-$B$35) *(Q10/Q17) + $B$35*(1-$B$37)*(Q11/Q17) + $B$35* $B$37 *(Q12/Q17)), Q6=3, ((1-$B$35) *(Q10/Q18) + $B$35*(1-$B$37)*(Q11/Q18) + $B$35* $B$37 *(Q12/Q18)), Q6=4,"Done")` |
| R19 | `=IFS(R6=0,(R7/(150000/IF($B$30,(1+($B$32*0.02+0.02)),1))),      R6=1,"Gild it",      R6=2,(R7/(150000/IF($B$30,(1+($B$32*0.02+0.02)),1))),      R6=3,((R7/(150000/IF($B$30,(1+($B$32*0.02+0.02)),1)))/3),      R6=4,"Done")` |
| S19 | `=IFS(S6=0,          ((1-$B$35)         *(S10/S16) +              $B$35*(1-$B$37)*(S11/S16) +              $B$35*   $B$37 *(S12/S16)),      S6=1,"Gild it",      S6=2,          ((1-$B$35)         *(S10/S17) +              $B$35*(1-$B$37)*(S11/S17) +              $B$35*   $B$37 *(S12/S17)),      S6=3,          ((1-$B$35)         *(S10/S18) +              $B$35*(1-$B$37)*(S11/S18) +              $B$35*   $B$37 *(S12/S18)),      S6=4,"Done")` |
| T19 | `=IFS(T6=0, ((1-$B$35) *(T10/T16) + $B$35*(1-$B$37)*(T11/T16) + $B$35* $B$37 *(T12/T16)), T6=1,"Gild it", T6=2, ((1-$B$35) *(T10/T17) + $B$35*(1-$B$37)*(T11/T17) + $B$35* $B$37 *(T12/T17)), T6=3, ((1-$B$35) *(T10/T18) + $B$35*(1-$B$37)*(T11/T18) + $B$35* $B$37 *(T12/T18)), T6=4,"Done")` |
| U19 | `=IFS(U6=0, ((1-$B$35) *(U10/U16) + $B$35*(1-$B$37)*(U11/U16) + $B$35* $B$37 *(U12/U16)), U6=1,"Gild it", U6=2, ((1-$B$35) *(U10/U17) + $B$35*(1-$B$37)*(U11/U17) + $B$35* $B$37 *(U12/U17)), U6=3, ((1-$B$35) *(U10/U18) + $B$35*(1-$B$37)*(U11/U18) + $B$35* $B$37 *(U12/U18)), U6=4,"Done")` |
| V19 | `=IFS(V6=0, ((1-$B$35) *(V10/V16) + $B$35*(1-$B$37)*(V11/V16) + $B$35* $B$37 *(V12/V16)), V6=1,"Gild it", V6=2, ((1-$B$35) *(V10/V17) + $B$35*(1-$B$37)*(V11/V17) + $B$35* $B$37 *(V12/V17)), V6=3, ((1-$B$35) *(V10/V18) + $B$35*(1-$B$37)*(V11/V18) + $B$35* $B$37 *(V12/V18)), V6=4,"Done")` |
| W19 | `=IFS(W6=0,(W7/(150000/IF($B$30,(1+($B$32*0.02+0.02)),1))),      W6=1,"Gild it",      W6=2,(W7/(150000/IF($B$30,(1+($B$32*0.02+0.02)),1))),      W6=3,((W7/(150000/IF($B$30,(1+($B$32*0.02+0.02)),1)))/3),      W6=4,"Done")` |
| X19 | `=IFS(X6=0,          ((1-$B$35)         *(X10/X16) +              $B$35*(1-$B$37)*(X11/X16) +              $B$35*   $B$37 *(X12/X16)),      X6=1,"Gild it",      X6=2,          ((1-$B$35)         *(X10/X17) +              $B$35*(1-$B$37)*(X11/X17) +              $B$35*   $B$37 *(X12/X17)),      X6=3,          ((1-$B$35)         *(X10/X18) +              $B$35*(1-$B$37)*(X11/X18) +              $B$35*   $B$37 *(X12/X18)),      X6=4,"Done")` |
| Y19 | `=IFS(Y6=0, ((1-$B$35) *(Y10/Y16) + $B$35*(1-$B$37)*(Y11/Y16) + $B$35* $B$37 *(Y12/Y16)), Y6=1,"Gild it", Y6=2, ((1-$B$35) *(Y10/Y17) + $B$35*(1-$B$37)*(Y11/Y17) + $B$35* $B$37 *(Y12/Y17)), Y6=3, ((1-$B$35) *(Y10/Y18) + $B$35*(1-$B$37)*(Y11/Y18) + $B$35* $B$37 *(Y12/Y18)), Y6=4,"Done")` |
| Z19 | `=IFS(Z6=0, ((1-$B$35) *(Z10/Z16) + $B$35*(1-$B$37)*(Z11/Z16) + $B$35* $B$37 *(Z12/Z16)), Z6=1,"Gild it", Z6=2, ((1-$B$35) *(Z10/Z17) + $B$35*(1-$B$37)*(Z11/Z17) + $B$35* $B$37 *(Z12/Z17)), Z6=3, ((1-$B$35) *(Z10/Z18) + $B$35*(1-$B$37)*(Z11/Z18) + $B$35* $B$37 *(Z12/Z18)), Z6=4,"Done")` |
| AA19 | `=IFS(AA6=0, ((1-$B$35) *(AA10/AA16) + $B$35*(1-$B$37)*(AA11/AA16) + $B$35* $B$37 *(AA12/AA16)), AA6=1,"Gild it", AA6=2, ((1-$B$35) *(AA10/AA17) + $B$35*(1-$B$37)*(AA11/AA17) + $B$35* $B$37 *(AA12/AA17)), AA6=3, ((1-$B$35) *(AA10/AA18) + $B$35*(1-$B$37)*(AA11/AA18) + $B$35* $B$37 *(AA12/AA18)), AA6=4,"Done")` |
| AB19 | `=IFS(AB6=0,(AB7/(150000/IF($B$30,(1+($B$32*0.02+0.02)),1))),      AB6=1,"Gild it",      AB6=2,(AB7/(150000/IF($B$30,(1+($B$32*0.02+0.02)),1))),      AB6=3,((AB7/(150000/IF($B$30,(1+($B$32*0.02+0.02)),1)))/3),      AB6=4,"Done")` |
| AC19 | `=IFS(AC6=0,          ((1-$B$35)         *(AC10/AC16) +              $B$35*(1-$B$37)*(AC11/AC16) +              $B$35*   $B$37 *(AC12/AC16)),      AC6=1,"Gild it",      AC6=2,          ((1-$B$35)         *(AC10/AC17) +              $B$35*(1-$B$37)*(AC11/AC17) +              $B$35*   $B$37 *(AC12/AC17)),      AC6=3,          ((1-$B$35)         *(AC10/AC18) +              $B$35*(1-$B$37)*(AC11/AC18) +              $B$35*   $B$37 *(AC12/AC18)),      AC6=4,"Done")` |
| AD19 | `=IFS(AD6=0, ((1-$B$35) *(AD10/AD16) + $B$35*(1-$B$37)*(AD11/AD16) + $B$35* $B$37 *(AD12/AD16)), AD6=1,"Gild it", AD6=2, ((1-$B$35) *(AD10/AD17) + $B$35*(1-$B$37)*(AD11/AD17) + $B$35* $B$37 *(AD12/AD17)), AD6=3, ((1-$B$35) *(AD10/AD18) + $B$35*(1-$B$37)*(AD11/AD18) + $B$35* $B$37 *(AD12/AD18)), AD6=4,"Done")` |
| AE19 | `=IFS(AE6=0, ((1-$B$35) *(AE10/AE16) + $B$35*(1-$B$37)*(AE11/AE16) + $B$35* $B$37 *(AE12/AE16)), AE6=1,"Gild it", AE6=2, ((1-$B$35) *(AE10/AE17) + $B$35*(1-$B$37)*(AE11/AE17) + $B$35* $B$37 *(AE12/AE17)), AE6=3, ((1-$B$35) *(AE10/AE18) + $B$35*(1-$B$37)*(AE11/AE18) + $B$35* $B$37 *(AE12/AE18)), AE6=4,"Done")` |
| AF19 | `=IFS(AF6=0, ((1-$B$35) *(AF10/AF16) + $B$35*(1-$B$37)*(AF11/AF16) + $B$35* $B$37 *(AF12/AF16)), AF6=1,"Gild it", AF6=2, ((1-$B$35) *(AF10/AF17) + $B$35*(1-$B$37)*(AF11/AF17) + $B$35* $B$37 *(AF12/AF17)), AF6=3, ((1-$B$35) *(AF10/AF18) + $B$35*(1-$B$37)*(AF11/AF18) + $B$35* $B$37 *(AF12/AF18)), AF6=4,"Done")` |
| AG19 | `=IFS(AG6=0,(AG7/(150000/IF($B$30,(1+($B$32*0.02+0.02)),1))),      AG6=1,"Gild it",      AG6=2,(AG7/(150000/IF($B$30,(1+($B$32*0.02+0.02)),1))),      AG6=3,((AG7/(150000/IF($B$30,(1+($B$32*0.02+0.02)),1)))/3),      AG6=4,"Done")` |
| AH19 | `=IFS(AH6=0,          ((1-$B$35)         *(AH10/AH16) +              $B$35*(1-$B$37)*(AH11/AH16) +              $B$35*   $B$37 *(AH12/AH16)),      AH6=1,"Gild it",      AH6=2,          ((1-$B$35)         *(AH10/AH17) +              $B$35*(1-$B$37)*(AH11/AH17) +              $B$35*   $B$37 *(AH12/AH17)),      AH6=3,          ((1-$B$35)         *(AH10/AH18) +              $B$35*(1-$B$37)*(AH11/AH18) +              $B$35*   $B$37 *(AH12/AH18)),      AH6=4,"Done")` |
| AI19 | `=IFS(AI6=0, ((1-$B$35) *(AI10/AI16) + $B$35*(1-$B$37)*(AI11/AI16) + $B$35* $B$37 *(AI12/AI16)), AI6=1,"Gild it", AI6=2, ((1-$B$35) *(AI10/AI17) + $B$35*(1-$B$37)*(AI11/AI17) + $B$35* $B$37 *(AI12/AI17)), AI6=3, ((1-$B$35) *(AI10/AI18) + $B$35*(1-$B$37)*(AI11/AI18) + $B$35* $B$37 *(AI12/AI18)), AI6=4,"Done")` |
| AJ19 | `=IFS(AJ6=0, ((1-$B$35) *(AJ10/AJ16) + $B$35*(1-$B$37)*(AJ11/AJ16) + $B$35* $B$37 *(AJ12/AJ16)), AJ6=1,"Gild it", AJ6=2, ((1-$B$35) *(AJ10/AJ17) + $B$35*(1-$B$37)*(AJ11/AJ17) + $B$35* $B$37 *(AJ12/AJ17)), AJ6=3, ((1-$B$35) *(AJ10/AJ18) + $B$35*(1-$B$37)*(AJ11/AJ18) + $B$35* $B$37 *(AJ12/AJ18)), AJ6=4,"Done")` |
| AK19 | `=IFS(AK6=0, ((1-$B$35) *(AK10/AK16) + $B$35*(1-$B$37)*(AK11/AK16) + $B$35* $B$37 *(AK12/AK16)), AK6=1,"Gild it", AK6=2, ((1-$B$35) *(AK10/AK17) + $B$35*(1-$B$37)*(AK11/AK17) + $B$35* $B$37 *(AK12/AK17)), AK6=3, ((1-$B$35) *(AK10/AK18) + $B$35*(1-$B$37)*(AK11/AK18) + $B$35* $B$37 *(AK12/AK18)), AK6=4,"Done")` |
| AL19 | `=IFS(AL6=0,(AL7/(150000/IF($B$30,(1+($B$32*0.02+0.02)),1))),      AL6=1,"Gild it",      AL6=2,(AL7/(150000/IF($B$30,(1+($B$32*0.02+0.02)),1))),      AL6=3,((AL7/(150000/IF($B$30,(1+($B$32*0.02+0.02)),1)))/3),      AL6=4,"Done")` |
| AM19 | `=IFS(AM6=0,          ((1-$B$35)         *(AM10/AM16) +              $B$35*(1-$B$37)*(AM11/AM16) +              $B$35*   $B$37 *(AM12/AM16)),      AM6=1,"Gild it",      AM6=2,          ((1-$B$35)         *(AM10/AM17) +              $B$35*(1-$B$37)*(AM11/AM17) +              $B$35*   $B$37 *(AM12/AM17)),      AM6=3,          ((1-$B$35)         *(AM10/AM18) +              $B$35*(1-$B$37)*(AM11/AM18) +              $B$35*   $B$37 *(AM12/AM18)),      AM6=4,"Done")` |
| AN19 | `=IFS(AN6=0, ((1-$B$35) *(AN10/AN16) + $B$35*(1-$B$37)*(AN11/AN16) + $B$35* $B$37 *(AN12/AN16)), AN6=1,"Gild it", AN6=2, ((1-$B$35) *(AN10/AN17) + $B$35*(1-$B$37)*(AN11/AN17) + $B$35* $B$37 *(AN12/AN17)), AN6=3, ((1-$B$35) *(AN10/AN18) + $B$35*(1-$B$37)*(AN11/AN18) + $B$35* $B$37 *(AN12/AN18)), AN6=4,"Done")` |
| AO19 | `=IFS(AO6=0, ((1-$B$35) *(AO10/AO16) + $B$35*(1-$B$37)*(AO11/AO16) + $B$35* $B$37 *(AO12/AO16)), AO6=1,"Gild it", AO6=2, ((1-$B$35) *(AO10/AO17) + $B$35*(1-$B$37)*(AO11/AO17) + $B$35* $B$37 *(AO12/AO17)), AO6=3, ((1-$B$35) *(AO10/AO18) + $B$35*(1-$B$37)*(AO11/AO18) + $B$35* $B$37 *(AO12/AO18)), AO6=4,"Done")` |
| AP19 | `=IFS(AP6=0, ((1-$B$35) *(AP10/AP16) + $B$35*(1-$B$37)*(AP11/AP16) + $B$35* $B$37 *(AP12/AP16)), AP6=1,"Gild it", AP6=2, ((1-$B$35) *(AP10/AP17) + $B$35*(1-$B$37)*(AP11/AP17) + $B$35* $B$37 *(AP12/AP17)), AP6=3, ((1-$B$35) *(AP10/AP18) + $B$35*(1-$B$37)*(AP11/AP18) + $B$35* $B$37 *(AP12/AP18)), AP6=4,"Done")` |
| AQ19 | `=IFS(AQ6=0,(AQ7/(150000/IF($B$30,(1+($B$32*0.02+0.02)),1))),      AQ6=1,"Gild it",      AQ6=2,(AQ7/(150000/IF($B$30,(1+($B$32*0.02+0.02)),1))),      AQ6=3,((AQ7/(150000/IF($B$30,(1+($B$32*0.02+0.02)),1)))/3),      AQ6=4,"Done")` |
| AR19 | `=IFS(AR6=0,          ((1-$B$35)         *(AR10/AR16) +              $B$35*(1-$B$37)*(AR11/AR16) +              $B$35*   $B$37 *(AR12/AR16)),      AR6=1,"Gild it",      AR6=2,          ((1-$B$35)         *(AR10/AR17) +              $B$35*(1-$B$37)*(AR11/AR17) +              $B$35*   $B$37 *(AR12/AR17)),      AR6=3,          ((1-$B$35)         *(AR10/AR18) +              $B$35*(1-$B$37)*(AR11/AR18) +              $B$35*   $B$37 *(AR12/AR18)),      AR6=4,"Done")` |
| AS19 | `=IFS(AS6=0, ((1-$B$35) *(AS10/AS16) + $B$35*(1-$B$37)*(AS11/AS16) + $B$35* $B$37 *(AS12/AS16)), AS6=1,"Gild it", AS6=2, ((1-$B$35) *(AS10/AS17) + $B$35*(1-$B$37)*(AS11/AS17) + $B$35* $B$37 *(AS12/AS17)), AS6=3, ((1-$B$35) *(AS10/AS18) + $B$35*(1-$B$37)*(AS11/AS18) + $B$35* $B$37 *(AS12/AS18)), AS6=4,"Done")` |
| AT19 | `=IFS(AT6=0, ((1-$B$35) *(AT10/AT16) + $B$35*(1-$B$37)*(AT11/AT16) + $B$35* $B$37 *(AT12/AT16)), AT6=1,"Gild it", AT6=2, ((1-$B$35) *(AT10/AT17) + $B$35*(1-$B$37)*(AT11/AT17) + $B$35* $B$37 *(AT12/AT17)), AT6=3, ((1-$B$35) *(AT10/AT18) + $B$35*(1-$B$37)*(AT11/AT18) + $B$35* $B$37 *(AT12/AT18)), AT6=4,"Done")` |
| AU19 | `=IFS(AU6=0, ((1-$B$35) *(AU10/AU16) + $B$35*(1-$B$37)*(AU11/AU16) + $B$35* $B$37 *(AU12/AU16)), AU6=1,"Gild it", AU6=2, ((1-$B$35) *(AU10/AU17) + $B$35*(1-$B$37)*(AU11/AU17) + $B$35* $B$37 *(AU12/AU17)), AU6=3, ((1-$B$35) *(AU10/AU18) + $B$35*(1-$B$37)*(AU11/AU18) + $B$35* $B$37 *(AU12/AU18)), AU6=4,"Done")` |
| AV19 | `=IFS(AV6=0,(AV7/(150000/IF($B$30,(1+($B$32*0.02+0.02)),1))),      AV6=1,"Gild it",      AV6=2,(AV7/(150000/IF($B$30,(1+($B$32*0.02+0.02)),1))),      AV6=3,((AV7/(150000/IF($B$30,(1+($B$32*0.02+0.02)),1)))/3),      AV6=4,"Done")` |
| AW19 | `=IFS(AW6=0,          ((1-$B$35)         *(AW10/AW16) +              $B$35*(1-$B$37)*(AW11/AW16) +              $B$35*   $B$37 *(AW12/AW16)),      AW6=1,"Gild it",      AW6=2,          ((1-$B$35)         *(AW10/AW17) +              $B$35*(1-$B$37)*(AW11/AW17) +              $B$35*   $B$37 *(AW12/AW17)),      AW6=3,          ((1-$B$35)         *(AW10/AW18) +              $B$35*(1-$B$37)*(AW11/AW18) +              $B$35*   $B$37 *(AW12/AW18)),      AW6=4,"Done")` |
| AX19 | `=IFS(AX6=0, ((1-$B$35) *(AX10/AX16) + $B$35*(1-$B$37)*(AX11/AX16) + $B$35* $B$37 *(AX12/AX16)), AX6=1,"Gild it", AX6=2, ((1-$B$35) *(AX10/AX17) + $B$35*(1-$B$37)*(AX11/AX17) + $B$35* $B$37 *(AX12/AX17)), AX6=3, ((1-$B$35) *(AX10/AX18) + $B$35*(1-$B$37)*(AX11/AX18) + $B$35* $B$37 *(AX12/AX18)), AX6=4,"Done")` |
| AY19 | `=IFS(AY6=0, ((1-$B$35) *(AY10/AY16) + $B$35*(1-$B$37)*(AY11/AY16) + $B$35* $B$37 *(AY12/AY16)), AY6=1,"Gild it", AY6=2, ((1-$B$35) *(AY10/AY17) + $B$35*(1-$B$37)*(AY11/AY17) + $B$35* $B$37 *(AY12/AY17)), AY6=3, ((1-$B$35) *(AY10/AY18) + $B$35*(1-$B$37)*(AY11/AY18) + $B$35* $B$37 *(AY12/AY18)), AY6=4,"Done")` |
| AZ19 | `=IFS(AZ6=0, ((1-$B$35) *(AZ10/AZ16) + $B$35*(1-$B$37)*(AZ11/AZ16) + $B$35* $B$37 *(AZ12/AZ16)), AZ6=1,"Gild it", AZ6=2, ((1-$B$35) *(AZ10/AZ17) + $B$35*(1-$B$37)*(AZ11/AZ17) + $B$35* $B$37 *(AZ12/AZ17)), AZ6=3, ((1-$B$35) *(AZ10/AZ18) + $B$35*(1-$B$37)*(AZ11/AZ18) + $B$35* $B$37 *(AZ12/AZ18)), AZ6=4,"Done")` |
| BA19 | `=IFS(BA6=0,(BA7/(150000/IF($B$30,(1+($B$32*0.02+0.02)),1))),      BA6=1,"Gild it",      BA6=2,(BA7/(150000/IF($B$30,(1+($B$32*0.02+0.02)),1))),      BA6=3,((BA7/(150000/IF($B$30,(1+($B$32*0.02+0.02)),1)))/3),      BA6=4,"Done")` |
| BB19 | `=IFS(BB6=0,          ((1-$B$35)         *(BB10/BB16) +              $B$35*(1-$B$37)*(BB11/BB16) +              $B$35*   $B$37 *(BB12/BB16)),      BB6=1,"Gild it",      BB6=2,          ((1-$B$35)         *(BB10/BB17) +              $B$35*(1-$B$37)*(BB11/BB17) +              $B$35*   $B$37 *(BB12/BB17)),      BB6=3,          ((1-$B$35)         *(BB10/BB18) +              $B$35*(1-$B$37)*(BB11/BB18) +              $B$35*   $B$37 *(BB12/BB18)),      BB6=4,"Done")` |
| BC19 | `=IFS(BC6=0, ((1-$B$35) *(BC10/BC16) + $B$35*(1-$B$37)*(BC11/BC16) + $B$35* $B$37 *(BC12/BC16)), BC6=1,"Gild it", BC6=2, ((1-$B$35) *(BC10/BC17) + $B$35*(1-$B$37)*(BC11/BC17) + $B$35* $B$37 *(BC12/BC17)), BC6=3, ((1-$B$35) *(BC10/BC18) + $B$35*(1-$B$37)*(BC11/BC18) + $B$35* $B$37 *(BC12/BC18)), BC6=4,"Done")` |
| BD19 | `=IFS(BD6=0, ((1-$B$35) *(BD10/BD16) + $B$35*(1-$B$37)*(BD11/BD16) + $B$35* $B$37 *(BD12/BD16)), BD6=1,"Gild it", BD6=2, ((1-$B$35) *(BD10/BD17) + $B$35*(1-$B$37)*(BD11/BD17) + $B$35* $B$37 *(BD12/BD17)), BD6=3, ((1-$B$35) *(BD10/BD18) + $B$35*(1-$B$37)*(BD11/BD18) + $B$35* $B$37 *(BD12/BD18)), BD6=4,"Done")` |
| BE19 | `=IFS(BE6=0, ((1-$B$35) *(BE10/BE16) + $B$35*(1-$B$37)*(BE11/BE16) + $B$35* $B$37 *(BE12/BE16)), BE6=1,"Gild it", BE6=2, ((1-$B$35) *(BE10/BE17) + $B$35*(1-$B$37)*(BE11/BE17) + $B$35* $B$37 *(BE12/BE17)), BE6=3, ((1-$B$35) *(BE10/BE18) + $B$35*(1-$B$37)*(BE11/BE18) + $B$35* $B$37 *(BE12/BE18)), BE6=4,"Done")` |
| BF19 | `=IFS(BF6=0,(BF7/(150000/IF($B$30,(1+($B$32*0.02+0.02)),1))),      BF6=1,"Gild it",      BF6=2,(BF7/(150000/IF($B$30,(1+($B$32*0.02+0.02)),1))),      BF6=3,((BF7/(150000/IF($B$30,(1+($B$32*0.02+0.02)),1)))/3),      BF6=4,"Done")` |
| D20 | `=IFERROR(1-(1-D19)^D9,"")` |
| E20 | `=IFERROR(1-(1-E19)^D9,"")` |
| F20 | `=IFERROR(1-(1-F19)^D9,"")` |
| G20 | `=IFERROR(1-(1-G19)^D9,"")` |
| H20 | `=IFERROR(1-(1-H19)^D9,"")` |
| I20 | `=IFERROR(1-(1-I19)^I9,"")` |
| J20 | `=IFERROR(1-(1-J19)^I9,"")` |
| K20 | `=IFERROR(1-(1-K19)^I9,"")` |
| L20 | `=IFERROR(1-(1-L19)^I9,"")` |
| M20 | `=IFERROR(1-(1-M19)^I9,"")` |
| N20 | `=IFERROR(1-(1-N19)^N9,"")` |
| O20 | `=IFERROR(1-(1-O19)^N9,"")` |
| P20 | `=IFERROR(1-(1-P19)^N9,"")` |
| Q20 | `=IFERROR(1-(1-Q19)^N9,"")` |
| R20 | `=IFERROR(1-(1-R19)^N9,"")` |
| S20 | `=IFERROR(1-(1-S19)^S9,"")` |
| T20 | `=IFERROR(1-(1-T19)^S9,"")` |
| U20 | `=IFERROR(1-(1-U19)^S9,"")` |
| V20 | `=IFERROR(1-(1-V19)^S9,"")` |
| W20 | `=IFERROR(1-(1-W19)^S9,"")` |
| X20 | `=IFERROR(1-(1-X19)^X9,"")` |
| Y20 | `=IFERROR(1-(1-Y19)^X9,"")` |
| Z20 | `=IFERROR(1-(1-Z19)^X9,"")` |
| AA20 | `=IFERROR(1-(1-AA19)^X9,"")` |
| AB20 | `=IFERROR(1-(1-AB19)^X9,"")` |
| AC20 | `=IFERROR(1-(1-AC19)^AC9,"")` |
| AD20 | `=IFERROR(1-(1-AD19)^AC9,"")` |
| AE20 | `=IFERROR(1-(1-AE19)^AC9,"")` |
| AF20 | `=IFERROR(1-(1-AF19)^AC9,"")` |
| AG20 | `=IFERROR(1-(1-AG19)^AC9,"")` |
| AH20 | `=IFERROR(1-(1-AH19)^AH9,"")` |
| AI20 | `=IFERROR(1-(1-AI19)^AH9,"")` |
| AJ20 | `=IFERROR(1-(1-AJ19)^AH9,"")` |
| AK20 | `=IFERROR(1-(1-AK19)^AH9,"")` |
| AL20 | `=IFERROR(1-(1-AL19)^AH9,"")` |
| AM20 | `=IFERROR(1-(1-AM19)^AM9,"")` |
| AN20 | `=IFERROR(1-(1-AN19)^AM9,"")` |
| AO20 | `=IFERROR(1-(1-AO19)^AM9,"")` |
| AP20 | `=IFERROR(1-(1-AP19)^AM9,"")` |
| AQ20 | `=IFERROR(1-(1-AQ19)^AM9,"")` |
| AR20 | `=IFERROR(1-(1-AR19)^AR9,"")` |
| AS20 | `=IFERROR(1-(1-AS19)^AR9,"")` |
| AT20 | `=IFERROR(1-(1-AT19)^AR9,"")` |
| AU20 | `=IFERROR(1-(1-AU19)^AR9,"")` |
| AV20 | `=IFERROR(1-(1-AV19)^AR9,"")` |
| AW20 | `=IFERROR(1-(1-AW19)^AW9,"")` |
| AX20 | `=IFERROR(1-(1-AX19)^AW9,"")` |
| AY20 | `=IFERROR(1-(1-AY19)^AW9,"")` |
| AZ20 | `=IFERROR(1-(1-AZ19)^AW9,"")` |
| BA20 | `=IFERROR(1-(1-BA19)^AW9,"")` |
| BB20 | `=IFERROR(1-(1-BB19)^BB9,"")` |
| BC20 | `=IFERROR(1-(1-BC19)^BB9,"")` |
| BD20 | `=IFERROR(1-(1-BD19)^BB9,"")` |
| BE20 | `=IFERROR(1-(1-BE19)^BB9,"")` |
| BF20 | `=IFERROR(1-(1-BF19)^BB9,"")` |
| D21 | `=IFERROR(   IF(1/D19/(D9*24) > 14,      INT(1/D19/(D9*24)) & " days",      INT(1/D19/(D9*24)) & ":" & TEXT(1/D19/(D9*24),"hh:mm:ss")   ), "∞")` |
| E21 | `=IFERROR(   IF(1/E19/(D9*24) > 14,      INT(1/E19/(D9*24)) & " days",      INT(1/E19/(D9*24)) & ":" & TEXT(1/E19/(D9*24),"hh:mm:ss")   ), "∞")` |
| F21 | `=IFERROR(   IF(1/F19/(D9*24) > 14,      INT(1/F19/(D9*24)) & " days",      INT(1/F19/(D9*24)) & ":" & TEXT(1/F19/(D9*24),"hh:mm:ss")   ), "∞")` |
| G21 | `=IFERROR(   IF(1/G19/(D9*24) > 14,      INT(1/G19/(D9*24)) & " days",      INT(1/G19/(D9*24)) & ":" & TEXT(1/G19/(D9*24),"hh:mm:ss")   ), "∞")` |
| H21 | `=IFERROR(   IF(1/H19/(D9*24) > 14,      INT(1/H19/(D9*24)) & " days",      INT(1/H19/(D9*24)) & ":" & TEXT(1/H19/(D9*24),"hh:mm:ss")   ), "∞")` |
| I21 | `=IFERROR(   IF(1/I19/(I9*24) > 14,      INT(1/I19/(I9*24)) & " days",      INT(1/I19/(I9*24)) & ":" & TEXT(1/I19/(I9*24),"hh:mm:ss")   ), "∞")` |
| J21 | `=IFERROR(   IF(1/J19/(I9*24) > 14,      INT(1/J19/(I9*24)) & " days",      INT(1/J19/(I9*24)) & ":" & TEXT(1/J19/(I9*24),"hh:mm:ss")   ), "∞")` |
| K21 | `=IFERROR(   IF(1/K19/(I9*24) > 14,      INT(1/K19/(I9*24)) & " days",      INT(1/K19/(I9*24)) & ":" & TEXT(1/K19/(I9*24),"hh:mm:ss")   ), "∞")` |
| L21 | `=IFERROR(   IF(1/L19/(I9*24) > 14,      INT(1/L19/(I9*24)) & " days",      INT(1/L19/(I9*24)) & ":" & TEXT(1/L19/(I9*24),"hh:mm:ss")   ), "∞")` |
| M21 | `=IFERROR(   IF(1/M19/(I9*24) > 14,      INT(1/M19/(I9*24)) & " days",      INT(1/M19/(I9*24)) & ":" & TEXT(1/M19/(I9*24),"hh:mm:ss")   ), "∞")` |
| N21 | `=IFERROR(   IF(1/N19/(N9*24) > 14,      INT(1/N19/(N9*24)) & " days",      INT(1/N19/(N9*24)) & ":" & TEXT(1/N19/(N9*24),"hh:mm:ss")   ), "∞")` |
| O21 | `=IFERROR(   IF(1/O19/(N9*24) > 14,      INT(1/O19/(N9*24)) & " days",      INT(1/O19/(N9*24)) & ":" & TEXT(1/O19/(N9*24),"hh:mm:ss")   ), "∞")` |
| P21 | `=IFERROR(   IF(1/P19/(N9*24) > 14,      INT(1/P19/(N9*24)) & " days",      INT(1/P19/(N9*24)) & ":" & TEXT(1/P19/(N9*24),"hh:mm:ss")   ), "∞")` |
| Q21 | `=IFERROR(   IF(1/Q19/(N9*24) > 14,      INT(1/Q19/(N9*24)) & " days",      INT(1/Q19/(N9*24)) & ":" & TEXT(1/Q19/(N9*24),"hh:mm:ss")   ), "∞")` |
| R21 | `=IFERROR(   IF(1/R19/(N9*24) > 14,      INT(1/R19/(N9*24)) & " days",      INT(1/R19/(N9*24)) & ":" & TEXT(1/R19/(N9*24),"hh:mm:ss")   ), "∞")` |
| S21 | `=IFERROR(   IF(1/S19/(S9*24) > 14,      INT(1/S19/(S9*24)) & " days",      INT(1/S19/(S9*24)) & ":" & TEXT(1/S19/(S9*24),"hh:mm:ss")   ), "∞")` |
| T21 | `=IFERROR(   IF(1/T19/(S9*24) > 14,      INT(1/T19/(S9*24)) & " days",      INT(1/T19/(S9*24)) & ":" & TEXT(1/T19/(S9*24),"hh:mm:ss")   ), "∞")` |
| U21 | `=IFERROR(   IF(1/U19/(S9*24) > 14,      INT(1/U19/(S9*24)) & " days",      INT(1/U19/(S9*24)) & ":" & TEXT(1/U19/(S9*24),"hh:mm:ss")   ), "∞")` |
| V21 | `=IFERROR(   IF(1/V19/(S9*24) > 14,      INT(1/V19/(S9*24)) & " days",      INT(1/V19/(S9*24)) & ":" & TEXT(1/V19/(S9*24),"hh:mm:ss")   ), "∞")` |
| W21 | `=IFERROR(   IF(1/W19/(S9*24) > 14,      INT(1/W19/(S9*24)) & " days",      INT(1/W19/(S9*24)) & ":" & TEXT(1/W19/(S9*24),"hh:mm:ss")   ), "∞")` |
| X21 | `=IFERROR(   IF(1/X19/(X9*24) > 14,      INT(1/X19/(X9*24)) & " days",      INT(1/X19/(X9*24)) & ":" & TEXT(1/X19/(X9*24),"hh:mm:ss")   ), "∞")` |
| Y21 | `=IFERROR(   IF(1/Y19/(X9*24) > 14,      INT(1/Y19/(X9*24)) & " days",      INT(1/Y19/(X9*24)) & ":" & TEXT(1/Y19/(X9*24),"hh:mm:ss")   ), "∞")` |
| Z21 | `=IFERROR(   IF(1/Z19/(X9*24) > 14,      INT(1/Z19/(X9*24)) & " days",      INT(1/Z19/(X9*24)) & ":" & TEXT(1/Z19/(X9*24),"hh:mm:ss")   ), "∞")` |
| AA21 | `=IFERROR(   IF(1/AA19/(X9*24) > 14,      INT(1/AA19/(X9*24)) & " days",      INT(1/AA19/(X9*24)) & ":" & TEXT(1/AA19/(X9*24),"hh:mm:ss")   ), "∞")` |
| AB21 | `=IFERROR(   IF(1/AB19/(X9*24) > 14,      INT(1/AB19/(X9*24)) & " days",      INT(1/AB19/(X9*24)) & ":" & TEXT(1/AB19/(X9*24),"hh:mm:ss")   ), "∞")` |
| AC21 | `=IFERROR(   IF(1/AC19/(AC9*24) > 14,      INT(1/AC19/(AC9*24)) & " days",      INT(1/AC19/(AC9*24)) & ":" & TEXT(1/AC19/(AC9*24),"hh:mm:ss")   ), "∞")` |
| AD21 | `=IFERROR(   IF(1/AD19/(AC9*24) > 14,      INT(1/AD19/(AC9*24)) & " days",      INT(1/AD19/(AC9*24)) & ":" & TEXT(1/AD19/(AC9*24),"hh:mm:ss")   ), "∞")` |
| AE21 | `=IFERROR(   IF(1/AE19/(AC9*24) > 14,      INT(1/AE19/(AC9*24)) & " days",      INT(1/AE19/(AC9*24)) & ":" & TEXT(1/AE19/(AC9*24),"hh:mm:ss")   ), "∞")` |
| AF21 | `=IFERROR(   IF(1/AF19/(AC9*24) > 14,      INT(1/AF19/(AC9*24)) & " days",      INT(1/AF19/(AC9*24)) & ":" & TEXT(1/AF19/(AC9*24),"hh:mm:ss")   ), "∞")` |
| AG21 | `=IFERROR(   IF(1/AG19/(AC9*24) > 14,      INT(1/AG19/(AC9*24)) & " days",      INT(1/AG19/(AC9*24)) & ":" & TEXT(1/AG19/(AC9*24),"hh:mm:ss")   ), "∞")` |
| AH21 | `=IFERROR(   IF(1/AH19/(AH9*24) > 14,      INT(1/AH19/(AH9*24)) & " days",      INT(1/AH19/(AH9*24)) & ":" & TEXT(1/AH19/(AH9*24),"hh:mm:ss")   ), "∞")` |
| AI21 | `=IFERROR(   IF(1/AI19/(AH9*24) > 14,      INT(1/AI19/(AH9*24)) & " days",      INT(1/AI19/(AH9*24)) & ":" & TEXT(1/AI19/(AH9*24),"hh:mm:ss")   ), "∞")` |
| AJ21 | `=IFERROR(   IF(1/AJ19/(AH9*24) > 14,      INT(1/AJ19/(AH9*24)) & " days",      INT(1/AJ19/(AH9*24)) & ":" & TEXT(1/AJ19/(AH9*24),"hh:mm:ss")   ), "∞")` |
| AK21 | `=IFERROR(   IF(1/AK19/(AH9*24) > 14,      INT(1/AK19/(AH9*24)) & " days",      INT(1/AK19/(AH9*24)) & ":" & TEXT(1/AK19/(AH9*24),"hh:mm:ss")   ), "∞")` |
| AL21 | `=IFERROR(   IF(1/AL19/(AH9*24) > 14,      INT(1/AL19/(AH9*24)) & " days",      INT(1/AL19/(AH9*24)) & ":" & TEXT(1/AL19/(AH9*24),"hh:mm:ss")   ), "∞")` |
| AM21 | `=IFERROR(   IF(1/AM19/(AM9*24) > 14,      INT(1/AM19/(AM9*24)) & " days",      INT(1/AM19/(AM9*24)) & ":" & TEXT(1/AM19/(AM9*24),"hh:mm:ss")   ), "∞")` |
| AN21 | `=IFERROR(   IF(1/AN19/(AM9*24) > 14,      INT(1/AN19/(AM9*24)) & " days",      INT(1/AN19/(AM9*24)) & ":" & TEXT(1/AN19/(AM9*24),"hh:mm:ss")   ), "∞")` |
| AO21 | `=IFERROR(   IF(1/AO19/(AM9*24) > 14,      INT(1/AO19/(AM9*24)) & " days",      INT(1/AO19/(AM9*24)) & ":" & TEXT(1/AO19/(AM9*24),"hh:mm:ss")   ), "∞")` |
| AP21 | `=IFERROR(   IF(1/AP19/(AM9*24) > 14,      INT(1/AP19/(AM9*24)) & " days",      INT(1/AP19/(AM9*24)) & ":" & TEXT(1/AP19/(AM9*24),"hh:mm:ss")   ), "∞")` |
| AQ21 | `=IFERROR(   IF(1/AQ19/(AM9*24) > 14,      INT(1/AQ19/(AM9*24)) & " days",      INT(1/AQ19/(AM9*24)) & ":" & TEXT(1/AQ19/(AM9*24),"hh:mm:ss")   ), "∞")` |
| AR21 | `=IFERROR(   IF(1/AR19/(AR9*24) > 14,      INT(1/AR19/(AR9*24)) & " days",      INT(1/AR19/(AR9*24)) & ":" & TEXT(1/AR19/(AR9*24),"hh:mm:ss")   ), "∞")` |
| AS21 | `=IFERROR(   IF(1/AS19/(AR9*24) > 14,      INT(1/AS19/(AR9*24)) & " days",      INT(1/AS19/(AR9*24)) & ":" & TEXT(1/AS19/(AR9*24),"hh:mm:ss")   ), "∞")` |
| AT21 | `=IFERROR(   IF(1/AT19/(AR9*24) > 14,      INT(1/AT19/(AR9*24)) & " days",      INT(1/AT19/(AR9*24)) & ":" & TEXT(1/AT19/(AR9*24),"hh:mm:ss")   ), "∞")` |
| AU21 | `=IFERROR(   IF(1/AU19/(AR9*24) > 14,      INT(1/AU19/(AR9*24)) & " days",      INT(1/AU19/(AR9*24)) & ":" & TEXT(1/AU19/(AR9*24),"hh:mm:ss")   ), "∞")` |
| AV21 | `=IFERROR(   IF(1/AV19/(AR9*24) > 14,      INT(1/AV19/(AR9*24)) & " days",      INT(1/AV19/(AR9*24)) & ":" & TEXT(1/AV19/(AR9*24),"hh:mm:ss")   ), "∞")` |
| AW21 | `=IFERROR(   IF(1/AW19/(AW9*24) > 14,      INT(1/AW19/(AW9*24)) & " days",      INT(1/AW19/(AW9*24)) & ":" & TEXT(1/AW19/(AW9*24),"hh:mm:ss")   ), "∞")` |
| AX21 | `=IFERROR(   IF(1/AX19/(AW9*24) > 14,      INT(1/AX19/(AW9*24)) & " days",      INT(1/AX19/(AW9*24)) & ":" & TEXT(1/AX19/(AW9*24),"hh:mm:ss")   ), "∞")` |
| AY21 | `=IFERROR(   IF(1/AY19/(AW9*24) > 14,      INT(1/AY19/(AW9*24)) & " days",      INT(1/AY19/(AW9*24)) & ":" & TEXT(1/AY19/(AW9*24),"hh:mm:ss")   ), "∞")` |
| AZ21 | `=IFERROR(   IF(1/AZ19/(AW9*24) > 14,      INT(1/AZ19/(AW9*24)) & " days",      INT(1/AZ19/(AW9*24)) & ":" & TEXT(1/AZ19/(AW9*24),"hh:mm:ss")   ), "∞")` |
| BA21 | `=IFERROR(   IF(1/BA19/(AW9*24) > 14,      INT(1/BA19/(AW9*24)) & " days",      INT(1/BA19/(AW9*24)) & ":" & TEXT(1/BA19/(AW9*24),"hh:mm:ss")   ), "∞")` |
| BB21 | `=IFERROR(   IF(1/BB19/(BB9*24) > 14,      INT(1/BB19/(BB9*24)) & " days",      INT(1/BB19/(BB9*24)) & ":" & TEXT(1/BB19/(BB9*24),"hh:mm:ss")   ), "∞")` |
| BC21 | `=IFERROR(   IF(1/BC19/(BB9*24) > 14,      INT(1/BC19/(BB9*24)) & " days",      INT(1/BC19/(BB9*24)) & ":" & TEXT(1/BC19/(BB9*24),"hh:mm:ss")   ), "∞")` |
| BD21 | `=IFERROR(   IF(1/BD19/(BB9*24) > 14,      INT(1/BD19/(BB9*24)) & " days",      INT(1/BD19/(BB9*24)) & ":" & TEXT(1/BD19/(BB9*24),"hh:mm:ss")   ), "∞")` |
| BE21 | `=IFERROR(   IF(1/BE19/(BB9*24) > 14,      INT(1/BE19/(BB9*24)) & " days",      INT(1/BE19/(BB9*24)) & ":" & TEXT(1/BE19/(BB9*24),"hh:mm:ss")   ), "∞")` |
| BF21 | `=IFERROR(   IF(1/BF19/(BB9*24) > 14,      INT(1/BF19/(BB9*24)) & " days",      INT(1/BF19/(BB9*24)) & ":" & TEXT(1/BF19/(BB9*24),"hh:mm:ss")   ), "∞")` |
| D22 | `=iferror(100/(IFERROR(1-(1-D19)^(($B$33*100*$B$44)/D8),"")),0)` |
| E22 | `=iferror(100/(IFERROR(1-(1-E19)^(($B$33*100*$B$44)/D8),"")),0)` |
| F22 | `=iferror(100/(IFERROR(1-(1-F19)^(($B$33*100*$B$44)/D8),"")),0)` |
| G22 | `=iferror(100/(IFERROR(1-(1-G19)^(($B$33*100*$B$44)/D8),"")),0)` |
| H22 | `=iferror(100/(IFERROR(1-(1-H19)^(($B$33*100*$B$44)/D8),"")),0)` |
| I22 | `=iferror(100/(IFERROR(1-(1-I19)^(($B$33*100*$B$44)/I8),"")),0)` |
| J22 | `=iferror(100/(IFERROR(1-(1-J19)^(($B$33*100*$B$44)/I8),"")),0)` |
| K22 | `=iferror(100/(IFERROR(1-(1-K19)^(($B$33*100*$B$44)/I8),"")),0)` |
| L22 | `=iferror(100/(IFERROR(1-(1-L19)^(($B$33*100*$B$44)/I8),"")),0)` |
| M22 | `=iferror(100/(IFERROR(1-(1-M19)^(($B$33*100*$B$44)/I8),"")),0)` |
| N22 | `=iferror(100/(IFERROR(1-(1-N19)^(($B$33*100*$B$44)/N8),"")),0)` |
| O22 | `=iferror(100/(IFERROR(1-(1-O19)^(($B$33*100*$B$44)/N8),"")),0)` |
| P22 | `=iferror(100/(IFERROR(1-(1-P19)^(($B$33*100*$B$44)/N8),"")),0)` |
| Q22 | `=iferror(100/(IFERROR(1-(1-Q19)^(($B$33*100*$B$44)/N8),"")),0)` |
| R22 | `=iferror(100/(IFERROR(1-(1-R19)^(($B$33*100*$B$44)/N8),"")),0)` |
| S22 | `=iferror(100/(IFERROR(1-(1-S19)^(($B$33*100*$B$44)/S8),"")),0)` |
| T22 | `=iferror(100/(IFERROR(1-(1-T19)^(($B$33*100*$B$44)/S8),"")),0)` |
| U22 | `=iferror(100/(IFERROR(1-(1-U19)^(($B$33*100*$B$44)/S8),"")),0)` |
| V22 | `=iferror(100/(IFERROR(1-(1-V19)^(($B$33*100*$B$44)/S8),"")),0)` |
| W22 | `=iferror(100/(IFERROR(1-(1-W19)^(($B$33*100*$B$44)/S8),"")),0)` |
| X22 | `=iferror(100/(IFERROR(1-(1-X19)^(($B$33*100*$B$44)/X8),"")),0)` |
| Y22 | `=iferror(100/(IFERROR(1-(1-Y19)^(($B$33*100*$B$44)/X8),"")),0)` |
| Z22 | `=iferror(100/(IFERROR(1-(1-Z19)^(($B$33*100*$B$44)/X8),"")),0)` |
| AA22 | `=iferror(100/(IFERROR(1-(1-AA19)^(($B$33*100*$B$44)/X8),"")),0)` |
| AB22 | `=iferror(100/(IFERROR(1-(1-AB19)^(($B$33*100*$B$44)/X8),"")),0)` |
| AC22 | `=iferror(100/(IFERROR(1-(1-AC19)^(($B$33*100*$B$44)/AC8),"")),0)` |
| AD22 | `=iferror(100/(IFERROR(1-(1-AD19)^(($B$33*100*$B$44)/AC8),"")),0)` |
| AE22 | `=IFERROR(100/(IFERROR(1-(1-AE19)^(($B$33*100*$B$44)/AC8),"")),0)` |
| AF22 | `=IFERROR(100/(IFERROR(1-(1-AF19)^(($B$33*100*$B$44)/AC8),"")),0)` |
| AG22 | `=IFERROR(100/(IFERROR(1-(1-AG19)^(($B$33*100*$B$44)/AC8),"")),0)` |
| AH22 | `=IFERROR(100/(IFERROR(1-(1-AH19)^(($B$33*100*$B$44)/AH8),"")),0)` |
| AI22 | `=IFERROR(100/(IFERROR(1-(1-AI19)^(($B$33*100*$B$44)/AH8),"")),0)` |
| AJ22 | `=IFERROR(100/(IFERROR(1-(1-AJ19)^(($B$33*100*$B$44)/AH8),"")),0)` |
| AK22 | `=IFERROR(100/(IFERROR(1-(1-AK19)^(($B$33*100*$B$44)/AH8),"")),0)` |
| AL22 | `=IFERROR(100/(IFERROR(1-(1-AL19)^(($B$33*100*$B$44)/AH8),"")),0)` |
| AM22 | `=IFERROR(100/(IFERROR(1-(1-AM19)^(($B$33*100*$B$44)/AM8),"")),0)` |
| AN22 | `=IFERROR(100/(IFERROR(1-(1-AN19)^(($B$33*100*$B$44)/AM8),"")),0)` |
| AO22 | `=IFERROR(100/(IFERROR(1-(1-AO19)^(($B$33*100*$B$44)/AM8),"")),0)` |
| AP22 | `=IFERROR(100/(IFERROR(1-(1-AP19)^(($B$33*100*$B$44)/AM8),"")),0)` |
| AQ22 | `=IFERROR(100/(IFERROR(1-(1-AQ19)^(($B$33*100*$B$44)/AM8),"")),0)` |
| AR22 | `=IFERROR(100/(IFERROR(1-(1-AR19)^(($B$33*100*$B$44)/AR8),"")),0)` |
| AS22 | `=IFERROR(100/(IFERROR(1-(1-AS19)^(($B$33*100*$B$44)/AR8),"")),0)` |
| AT22 | `=IFERROR(100/(IFERROR(1-(1-AT19)^(($B$33*100*$B$44)/AR8),"")),0)` |
| AU22 | `=IFERROR(100/(IFERROR(1-(1-AU19)^(($B$33*100*$B$44)/AR8),"")),0)` |
| AV22 | `=IFERROR(100/(IFERROR(1-(1-AV19)^(($B$33*100*$B$44)/AR8),"")),0)` |
| AW22 | `=IFERROR(100/(IFERROR(1-(1-AW19)^(($B$33*100*$B$44)/AW8),"")),0)` |
| AX22 | `=IFERROR(100/(IFERROR(1-(1-AX19)^(($B$33*100*$B$44)/AW8),"")),0)` |
| AY22 | `=IFERROR(100/(IFERROR(1-(1-AY19)^(($B$33*100*$B$44)/AW8),"")),0)` |
| AZ22 | `=IFERROR(100/(IFERROR(1-(1-AZ19)^(($B$33*100*$B$44)/AW8),"")),0)` |
| BA22 | `=IFERROR(100/(IFERROR(1-(1-BA19)^(($B$33*100*$B$44)/AW8),"")),0)` |
| BB22 | `=IFERROR(100/(IFERROR(1-(1-BB19)^(($B$33*100*$B$44)/BB8),"")),0)` |
| BC22 | `=IFERROR(100/(IFERROR(1-(1-BC19)^(($B$33*100*$B$44)/BB8),"")),0)` |
| BD22 | `=IFERROR(100/(IFERROR(1-(1-BD19)^(($B$33*100*$B$44)/BB8),"")),0)` |
| BE22 | `=IFERROR(100/(IFERROR(1-(1-BE19)^(($B$33*100*$B$44)/BB8),"")),0)` |
| BF22 | `=IFERROR(100/(IFERROR(1-(1-BF19)^(($B$33*100*$B$44)/BB8),"")),0)` |
| D28 | `=IF($E$27=TRUE,"Uncheck E27 to use me","Dock 1")` |
| I28 | `=IF($E$27=TRUE,"Uncheck E27 to use me","Dock 2")` |
| N28 | `=IF($E$27=TRUE,"Uncheck E27 to use me","Dock 3")` |
| S28 | `=IF($E$27=TRUE,"Uncheck E27 to use me","Dock 4")` |
| X28 | `=IF($E$27=TRUE,"Uncheck E27 to use me","Dock 5")` |
| AC28 | `=IF($E$27=TRUE,"Uncheck E27 to use me","Dock 6")` |
| AH28 | `=IF($E$27=TRUE,"Uncheck E27 to use me","Dock 7")` |
| AM28 | `=IF($E$27=TRUE,"Uncheck E27 to use me","Dock 8")` |
| AR28 | `=IF($E$27=TRUE,"Uncheck E27 to use me","Dock 9")` |
| AW28 | `=IF($E$27=TRUE,"Uncheck E27 to use me","Dock 10")` |
| BB28 | `=IF($E$27=TRUE,"Uncheck E27 to use me","Dock 11")` |
| B34 | `=Obefish!AH14` |
| B35 | `=Obefish!AH16` |
| B36 | `=Obefish!AH18` |
| B37 | `=Obefish!AH20` |
| B38 | `=Obefish!AH22` |
| B39 | `=(4 + (0.08 * Obefish!G19) + (0.1 * Obefish!G36)) * IF(Obefish!C10, 1.15, 1)` |
| B40 | `=B39` |
| B41 | `=Obefish!AH3` |
| B42 | `=Obefish!AH7*Obefish!AH9` |
| B43 | `=Obefish!AH11` |
| B44 | `=(1*(1-Obefish!AH27)*(1-Obefish!AH29)*(1-Obefish!AH31)+  2*   Obefish!AH27 *(1-Obefish!AH29)*(1-Obefish!AH31)+  3*(1-Obefish!AH27)*   Obefish!AH29 *(1-Obefish!AH31)+  5*(1-Obefish!AH27)*(1-Obefish!AH29)*   Obefish!AH31 +  6*   Obefish!AH27 *   Obefish!AH29 *(1-Obefish!AH31)+ 10*   Obefish!AH27 *(1-Obefish!AH29)*   Obefish!AH31 + 15*(1-Obefish!AH27)*   Obefish!AH29 *   Obefish!AH31 + 30*   Obefish!AH27 *   Obefish!AH29 *   Obefish!AH31)` |
| B46 | `=3600/Obefish!AH25` |
| B47 | `=(($B$52/($B$53/$B$25/$B$26)*(3*MIN($B$27,1))*(11/140)*(12*B28))*(B29/24))` |
| B48 | `=IF(B30,(2+(0.04+$B$32*0.04))*($B$52/$B$56),0)` |
| B49 | `=(B46+B47+B48)*B44` |
| B50 | `=Obefish!AH5` |
| B51 | `=B50-sum(F3,K3,P3,U3,Z3,AE3,AJ3,AO3,AT3,AY3,BD3)` |
| B56 | `=(B54-(B55*B31))/B25` |

## Sheet: View-Upgs

485 formulas

| Cell | Formula |
|---|---|
| C3 | `=VLOOKUP(D3,ImageMap!$A$1:$B$52,2)` |
| G3 | `=VLOOKUP(H3,ImageMap!$A$1:$B$52,2)` |
| K3 | `=VLOOKUP(L3,ImageMap!$A$1:$B$52,2)` |
| O3 | `=VLOOKUP(P3,ImageMap!$A$1:$B$52,2)` |
| S3 | `=VLOOKUP(T3,ImageMap!$A$1:$B$52,2)` |
| W3 | `=VLOOKUP(X3,ImageMap!$A$1:$B$52,2)` |
| AA3 | `=VLOOKUP(AB3,ImageMap!$A$1:$B$52,2)` |
| AE3 | `=VLOOKUP(AF3,ImageMap!$A$1:$B$52,2)` |
| AI3 | `=VLOOKUP(AJ3,ImageMap!$A$1:$B$52,2)` |
| AM3 | `=VLOOKUP(AN3,ImageMap!$A$1:$B$52,2)` |
| AQ3 | `=VLOOKUP(AR3,ImageMap!$A$1:$B$52,2)` |
| AU3 | `=VLOOKUP(AV3,ImageMap!$A$1:$B$52,2)` |
| C4 | `=VLOOKUP(D4,ImageMap!$A$1:$B$52,2)` |
| G4 | `=VLOOKUP(H4,ImageMap!$A$1:$B$52,2)` |
| K4 | `=VLOOKUP(L4,ImageMap!$A$1:$B$52,2)` |
| O4 | `=VLOOKUP(P4,ImageMap!$A$1:$B$52,2)` |
| S4 | `=VLOOKUP(T4,ImageMap!$A$1:$B$52,2)` |
| W4 | `=VLOOKUP(X4,ImageMap!$A$1:$B$52,2)` |
| AA4 | `=VLOOKUP(AB4,ImageMap!$A$1:$B$52,2)` |
| AE4 | `=VLOOKUP(AF4,ImageMap!$A$1:$B$52,2)` |
| AI4 | `=VLOOKUP(AJ4,ImageMap!$A$1:$B$52,2)` |
| AM4 | `=VLOOKUP(AN4,ImageMap!$A$1:$B$52,2)` |
| AQ4 | `=VLOOKUP(AR4,ImageMap!$A$1:$B$52,2)` |
| AU4 | `=VLOOKUP(AV4,ImageMap!$A$1:$B$52,2)` |
| C5 | `=VLOOKUP(D5,ImageMap!$A$1:$B$52,2)` |
| G5 | `=VLOOKUP(H5,ImageMap!$A$1:$B$52,2)` |
| K5 | `=VLOOKUP(L5,ImageMap!$A$1:$B$52,2)` |
| O5 | `=VLOOKUP(P5,ImageMap!$A$1:$B$52,2)` |
| S5 | `=VLOOKUP(T5,ImageMap!$A$1:$B$52,2)` |
| W5 | `=VLOOKUP(X5,ImageMap!$A$1:$B$52,2)` |
| AA5 | `=VLOOKUP(AB5,ImageMap!$A$1:$B$52,2)` |
| AE5 | `=VLOOKUP(AF5,ImageMap!$A$1:$B$52,2)` |
| AI5 | `=VLOOKUP(AJ5,ImageMap!$A$1:$B$52,2)` |
| AM5 | `=VLOOKUP(AN5,ImageMap!$A$1:$B$52,2)` |
| AQ5 | `=VLOOKUP(AR5,ImageMap!$A$1:$B$52,2)` |
| AU5 | `=VLOOKUP(AV5,ImageMap!$A$1:$B$52,2)` |
| C6 | `=VLOOKUP(D6,ImageMap!$A$1:$B$52,2)` |
| G6 | `=VLOOKUP(H6,ImageMap!$A$1:$B$52,2)` |
| K6 | `=VLOOKUP(L6,ImageMap!$A$1:$B$52,2)` |
| O6 | `=VLOOKUP(P6,ImageMap!$A$1:$B$52,2)` |
| S6 | `=VLOOKUP(T6,ImageMap!$A$1:$B$52,2)` |
| W6 | `=VLOOKUP(X6,ImageMap!$A$1:$B$52,2)` |
| AA6 | `=VLOOKUP(AB6,ImageMap!$A$1:$B$52,2)` |
| AE6 | `=VLOOKUP(AF6,ImageMap!$A$1:$B$52,2)` |
| AI6 | `=VLOOKUP(AJ6,ImageMap!$A$1:$B$52,2)` |
| AM6 | `=VLOOKUP(AN6,ImageMap!$A$1:$B$52,2)` |
| AQ6 | `=VLOOKUP(AR6,ImageMap!$A$1:$B$52,2)` |
| AU6 | `=VLOOKUP(AV6,ImageMap!$A$1:$B$52,2)` |
| C7 | `=VLOOKUP(D7,ImageMap!$A$1:$B$52,2)` |
| G7 | `=VLOOKUP(H7,ImageMap!$A$1:$B$52,2)` |
| K7 | `=VLOOKUP(L7,ImageMap!$A$1:$B$52,2)` |
| O7 | `=VLOOKUP(P7,ImageMap!$A$1:$B$52,2)` |
| S7 | `=VLOOKUP(T7,ImageMap!$A$1:$B$52,2)` |
| W7 | `=VLOOKUP(X7,ImageMap!$A$1:$B$52,2)` |
| AA7 | `=VLOOKUP(AB7,ImageMap!$A$1:$B$52,2)` |
| AE7 | `=VLOOKUP(AF7,ImageMap!$A$1:$B$52,2)` |
| AI7 | `=VLOOKUP(AJ7,ImageMap!$A$1:$B$52,2)` |
| AM7 | `=VLOOKUP(AN7,ImageMap!$A$1:$B$52,2)` |
| AQ7 | `=VLOOKUP(AR7,ImageMap!$A$1:$B$52,2)` |
| AU7 | `=VLOOKUP(AV7,ImageMap!$A$1:$B$52,2)` |
| C8 | `=VLOOKUP(D8,ImageMap!$A$1:$B$52,2)` |
| G8 | `=VLOOKUP(H8,ImageMap!$A$1:$B$52,2)` |
| O8 | `=VLOOKUP(P8,ImageMap!$A$1:$B$52,2)` |
| S8 | `=VLOOKUP(T8,ImageMap!$A$1:$B$52,2)` |
| W8 | `=VLOOKUP(X8,ImageMap!$A$1:$B$52,2)` |
| AA8 | `=VLOOKUP(AB8,ImageMap!$A$1:$B$52,2)` |
| AE8 | `=VLOOKUP(AF8,ImageMap!$A$1:$B$52,2)` |
| AI8 | `=VLOOKUP(AJ8,ImageMap!$A$1:$B$52,2)` |
| AM8 | `=VLOOKUP(AN8,ImageMap!$A$1:$B$52,2)` |
| AQ8 | `=VLOOKUP(AR8,ImageMap!$A$1:$B$52,2)` |
| AU8 | `=VLOOKUP(AV8,ImageMap!$A$1:$B$52,2)` |
| C9 | `=VLOOKUP(D9,ImageMap!$A$1:$B$52,2)` |
| G9 | `=VLOOKUP(H9,ImageMap!$A$1:$B$52,2)` |
| O9 | `=VLOOKUP(P9,ImageMap!$A$1:$B$52,2)` |
| S9 | `=VLOOKUP(T9,ImageMap!$A$1:$B$52,2)` |
| W9 | `=VLOOKUP(X9,ImageMap!$A$1:$B$52,2)` |
| AA9 | `=VLOOKUP(AB9,ImageMap!$A$1:$B$52,2)` |
| AE9 | `=VLOOKUP(AF9,ImageMap!$A$1:$B$52,2)` |
| AI9 | `=VLOOKUP(AJ9,ImageMap!$A$1:$B$52,2)` |
| AM9 | `=VLOOKUP(AN9,ImageMap!$A$1:$B$52,2)` |
| AQ9 | `=VLOOKUP(AR9,ImageMap!$A$1:$B$52,2)` |
| AU9 | `=VLOOKUP(AV9,ImageMap!$A$1:$B$52,2)` |
| C10 | `=VLOOKUP(D10,ImageMap!$A$1:$B$52,2)` |
| G10 | `=VLOOKUP(H10,ImageMap!$A$1:$B$52,2)` |
| O10 | `=VLOOKUP(P10,ImageMap!$A$1:$B$52,2)` |
| S10 | `=VLOOKUP(T10,ImageMap!$A$1:$B$52,2)` |
| W10 | `=VLOOKUP(X10,ImageMap!$A$1:$B$52,2)` |
| AA10 | `=VLOOKUP(AB10,ImageMap!$A$1:$B$52,2)` |
| AE10 | `=VLOOKUP(AF10,ImageMap!$A$1:$B$52,2)` |
| AI10 | `=VLOOKUP(AJ10,ImageMap!$A$1:$B$52,2)` |
| AM10 | `=VLOOKUP(AN10,ImageMap!$A$1:$B$52,2)` |
| AQ10 | `=VLOOKUP(AR10,ImageMap!$A$1:$B$52,2)` |
| AU10 | `=VLOOKUP(AV10,ImageMap!$A$1:$B$52,2)` |
| C11 | `=VLOOKUP(D11,ImageMap!$A$1:$B$52,2)` |
| G11 | `=VLOOKUP(H11,ImageMap!$A$1:$B$52,2)` |
| O11 | `=VLOOKUP(P11,ImageMap!$A$1:$B$52,2)` |
| S11 | `=VLOOKUP(T11,ImageMap!$A$1:$B$52,2)` |
| W11 | `=VLOOKUP(X11,ImageMap!$A$1:$B$52,2)` |
| AA11 | `=VLOOKUP(AB11,ImageMap!$A$1:$B$52,2)` |
| AE11 | `=VLOOKUP(AF11,ImageMap!$A$1:$B$52,2)` |
| AI11 | `=VLOOKUP(AJ11,ImageMap!$A$1:$B$52,2)` |
| AM11 | `=VLOOKUP(AN11,ImageMap!$A$1:$B$52,2)` |
| AQ11 | `=VLOOKUP(AR11,ImageMap!$A$1:$B$52,2)` |
| AU11 | `=VLOOKUP(AV11,ImageMap!$A$1:$B$52,2)` |
| C12 | `=VLOOKUP(D12,ImageMap!$A$1:$B$52,2)` |
| G12 | `=VLOOKUP(H12,ImageMap!$A$1:$B$52,2)` |
| O12 | `=VLOOKUP(P12,ImageMap!$A$1:$B$52,2)` |
| S12 | `=VLOOKUP(T12,ImageMap!$A$1:$B$52,2)` |
| W12 | `=VLOOKUP(X12,ImageMap!$A$1:$B$52,2)` |
| AA12 | `=VLOOKUP(AB12,ImageMap!$A$1:$B$52,2)` |
| AE12 | `=VLOOKUP(AF12,ImageMap!$A$1:$B$52,2)` |
| AI12 | `=VLOOKUP(AJ12,ImageMap!$A$1:$B$52,2)` |
| AM12 | `=VLOOKUP(AN12,ImageMap!$A$1:$B$52,2)` |
| AQ12 | `=VLOOKUP(AR12,ImageMap!$A$1:$B$52,2)` |
| AU12 | `=VLOOKUP(AV12,ImageMap!$A$1:$B$52,2)` |
| C13 | `=VLOOKUP(D13,ImageMap!$A$1:$B$52,2)` |
| G13 | `=VLOOKUP(H13,ImageMap!$A$1:$B$52,2)` |
| O13 | `=VLOOKUP(P13,ImageMap!$A$1:$B$52,2)` |
| S13 | `=VLOOKUP(T13,ImageMap!$A$1:$B$52,2)` |
| W13 | `=VLOOKUP(X13,ImageMap!$A$1:$B$52,2)` |
| AA13 | `=VLOOKUP(AB13,ImageMap!$A$1:$B$52,2)` |
| AE13 | `=VLOOKUP(AF13,ImageMap!$A$1:$B$52,2)` |
| AI13 | `=VLOOKUP(AJ13,ImageMap!$A$1:$B$52,2)` |
| AM13 | `=VLOOKUP(AN13,ImageMap!$A$1:$B$52,2)` |
| AQ13 | `=VLOOKUP(AR13,ImageMap!$A$1:$B$52,2)` |
| AU13 | `=VLOOKUP(AV13,ImageMap!$A$1:$B$52,2)` |
| C14 | `=VLOOKUP(D14,ImageMap!$A$1:$B$52,2)` |
| G14 | `=VLOOKUP(H14,ImageMap!$A$1:$B$52,2)` |
| O14 | `=VLOOKUP(P14,ImageMap!$A$1:$B$52,2)` |
| S14 | `=VLOOKUP(T14,ImageMap!$A$1:$B$52,2)` |
| W14 | `=VLOOKUP(X14,ImageMap!$A$1:$B$52,2)` |
| AA14 | `=VLOOKUP(AB14,ImageMap!$A$1:$B$52,2)` |
| AE14 | `=VLOOKUP(AF14,ImageMap!$A$1:$B$52,2)` |
| AI14 | `=VLOOKUP(AJ14,ImageMap!$A$1:$B$52,2)` |
| AM14 | `=VLOOKUP(AN14,ImageMap!$A$1:$B$52,2)` |
| AQ14 | `=VLOOKUP(AR14,ImageMap!$A$1:$B$52,2)` |
| AU14 | `=VLOOKUP(AV14,ImageMap!$A$1:$B$52,2)` |
| C15 | `=VLOOKUP(D15,ImageMap!$A$1:$B$52,2)` |
| G15 | `=VLOOKUP(H15,ImageMap!$A$1:$B$52,2)` |
| O15 | `=VLOOKUP(P15,ImageMap!$A$1:$B$52,2)` |
| S15 | `=VLOOKUP(T15,ImageMap!$A$1:$B$52,2)` |
| W15 | `=VLOOKUP(X15,ImageMap!$A$1:$B$52,2)` |
| AA15 | `=VLOOKUP(AB15,ImageMap!$A$1:$B$52,2)` |
| AE15 | `=VLOOKUP(AF15,ImageMap!$A$1:$B$52,2)` |
| AI15 | `=VLOOKUP(AJ15,ImageMap!$A$1:$B$52,2)` |
| AM15 | `=VLOOKUP(AN15,ImageMap!$A$1:$B$52,2)` |
| AQ15 | `=VLOOKUP(AR15,ImageMap!$A$1:$B$52,2)` |
| AU15 | `=VLOOKUP(AV15,ImageMap!$A$1:$B$52,2)` |
| C16 | `=VLOOKUP(D16,ImageMap!$A$1:$B$52,2)` |
| G16 | `=VLOOKUP(H16,ImageMap!$A$1:$B$52,2)` |
| O16 | `=VLOOKUP(P16,ImageMap!$A$1:$B$52,2)` |
| S16 | `=VLOOKUP(T16,ImageMap!$A$1:$B$52,2)` |
| W16 | `=VLOOKUP(X16,ImageMap!$A$1:$B$52,2)` |
| AA16 | `=VLOOKUP(AB16,ImageMap!$A$1:$B$52,2)` |
| AE16 | `=VLOOKUP(AF16,ImageMap!$A$1:$B$52,2)` |
| AI16 | `=VLOOKUP(AJ16,ImageMap!$A$1:$B$52,2)` |
| AM16 | `=VLOOKUP(AN16,ImageMap!$A$1:$B$52,2)` |
| AQ16 | `=VLOOKUP(AR16,ImageMap!$A$1:$B$52,2)` |
| AU16 | `=VLOOKUP(AV16,ImageMap!$A$1:$B$52,2)` |
| C17 | `=VLOOKUP(D17,ImageMap!$A$1:$B$52,2)` |
| G17 | `=VLOOKUP(H17,ImageMap!$A$1:$B$52,2)` |
| O17 | `=VLOOKUP(P17,ImageMap!$A$1:$B$52,2)` |
| S17 | `=VLOOKUP(T17,ImageMap!$A$1:$B$52,2)` |
| W17 | `=VLOOKUP(X17,ImageMap!$A$1:$B$52,2)` |
| AA17 | `=VLOOKUP(AB17,ImageMap!$A$1:$B$52,2)` |
| AE17 | `=VLOOKUP(AF17,ImageMap!$A$1:$B$52,2)` |
| AI17 | `=VLOOKUP(AJ17,ImageMap!$A$1:$B$52,2)` |
| AM17 | `=VLOOKUP(AN17,ImageMap!$A$1:$B$52,2)` |
| AQ17 | `=VLOOKUP(AR17,ImageMap!$A$1:$B$52,2)` |
| AU17 | `=VLOOKUP(AV17,ImageMap!$A$1:$B$52,2)` |
| C18 | `=VLOOKUP(D18,ImageMap!$A$1:$B$52,2)` |
| G18 | `=VLOOKUP(H18,ImageMap!$A$1:$B$52,2)` |
| O18 | `=VLOOKUP(P18,ImageMap!$A$1:$B$52,2)` |
| S18 | `=VLOOKUP(T18,ImageMap!$A$1:$B$52,2)` |
| W18 | `=VLOOKUP(X18,ImageMap!$A$1:$B$52,2)` |
| AA18 | `=VLOOKUP(AB18,ImageMap!$A$1:$B$52,2)` |
| AE18 | `=VLOOKUP(AF18,ImageMap!$A$1:$B$52,2)` |
| AI18 | `=VLOOKUP(AJ18,ImageMap!$A$1:$B$52,2)` |
| AM18 | `=VLOOKUP(AN18,ImageMap!$A$1:$B$52,2)` |
| AQ18 | `=VLOOKUP(AR18,ImageMap!$A$1:$B$52,2)` |
| AU18 | `=VLOOKUP(AV18,ImageMap!$A$1:$B$52,2)` |
| C19 | `=VLOOKUP(D19,ImageMap!$A$1:$B$52,2)` |
| G19 | `=VLOOKUP(H19,ImageMap!$A$1:$B$52,2)` |
| O19 | `=VLOOKUP(P19,ImageMap!$A$1:$B$52,2)` |
| S19 | `=VLOOKUP(T19,ImageMap!$A$1:$B$52,2)` |
| W19 | `=VLOOKUP(X19,ImageMap!$A$1:$B$52,2)` |
| AA19 | `=VLOOKUP(AB19,ImageMap!$A$1:$B$52,2)` |
| AE19 | `=VLOOKUP(AF19,ImageMap!$A$1:$B$52,2)` |
| AI19 | `=VLOOKUP(AJ19,ImageMap!$A$1:$B$52,2)` |
| AM19 | `=VLOOKUP(AN19,ImageMap!$A$1:$B$52,2)` |
| AQ19 | `=VLOOKUP(AR19,ImageMap!$A$1:$B$52,2)` |
| AU19 | `=VLOOKUP(AV19,ImageMap!$A$1:$B$52,2)` |
| C20 | `=VLOOKUP(D20,ImageMap!$A$1:$B$52,2)` |
| G20 | `=VLOOKUP(H20,ImageMap!$A$1:$B$52,2)` |
| O20 | `=VLOOKUP(P20,ImageMap!$A$1:$B$52,2)` |
| S20 | `=VLOOKUP(T20,ImageMap!$A$1:$B$52,2)` |
| W20 | `=VLOOKUP(X20,ImageMap!$A$1:$B$52,2)` |
| AA20 | `=VLOOKUP(AB20,ImageMap!$A$1:$B$52,2)` |
| AE20 | `=VLOOKUP(AF20,ImageMap!$A$1:$B$52,2)` |
| AI20 | `=VLOOKUP(AJ20,ImageMap!$A$1:$B$52,2)` |
| AM20 | `=VLOOKUP(AN20,ImageMap!$A$1:$B$52,2)` |
| AQ20 | `=VLOOKUP(AR20,ImageMap!$A$1:$B$52,2)` |
| AU20 | `=VLOOKUP(AV20,ImageMap!$A$1:$B$52,2)` |
| C21 | `=VLOOKUP(D21,ImageMap!$A$1:$B$52,2)` |
| G21 | `=VLOOKUP(H21,ImageMap!$A$1:$B$52,2)` |
| O21 | `=VLOOKUP(P21,ImageMap!$A$1:$B$52,2)` |
| S21 | `=VLOOKUP(T21,ImageMap!$A$1:$B$52,2)` |
| W21 | `=VLOOKUP(X21,ImageMap!$A$1:$B$52,2)` |
| AA21 | `=VLOOKUP(AB21,ImageMap!$A$1:$B$52,2)` |
| AE21 | `=VLOOKUP(AF21,ImageMap!$A$1:$B$52,2)` |
| AI21 | `=VLOOKUP(AJ21,ImageMap!$A$1:$B$52,2)` |
| AM21 | `=VLOOKUP(AN21,ImageMap!$A$1:$B$52,2)` |
| AQ21 | `=VLOOKUP(AR21,ImageMap!$A$1:$B$52,2)` |
| AU21 | `=VLOOKUP(AV21,ImageMap!$A$1:$B$52,2)` |
| C22 | `=VLOOKUP(D22,ImageMap!$A$1:$B$52,2)` |
| G22 | `=VLOOKUP(H22,ImageMap!$A$1:$B$52,2)` |
| O22 | `=VLOOKUP(P22,ImageMap!$A$1:$B$52,2)` |
| S22 | `=VLOOKUP(T22,ImageMap!$A$1:$B$52,2)` |
| W22 | `=VLOOKUP(X22,ImageMap!$A$1:$B$52,2)` |
| AA22 | `=VLOOKUP(AB22,ImageMap!$A$1:$B$52,2)` |
| AE22 | `=VLOOKUP(AF22,ImageMap!$A$1:$B$52,2)` |
| AI22 | `=VLOOKUP(AJ22,ImageMap!$A$1:$B$52,2)` |
| AM22 | `=VLOOKUP(AN22,ImageMap!$A$1:$B$52,2)` |
| AQ22 | `=VLOOKUP(AR22,ImageMap!$A$1:$B$52,2)` |
| AU22 | `=VLOOKUP(AV22,ImageMap!$A$1:$B$52,2)` |
| C23 | `=VLOOKUP(D23,ImageMap!$A$1:$B$52,2)` |
| G23 | `=VLOOKUP(H23,ImageMap!$A$1:$B$52,2)` |
| O23 | `=VLOOKUP(P23,ImageMap!$A$1:$B$52,2)` |
| S23 | `=VLOOKUP(T23,ImageMap!$A$1:$B$52,2)` |
| AE23 | `=VLOOKUP(AF23,ImageMap!$A$1:$B$52,2)` |
| AI23 | `=VLOOKUP(AJ23,ImageMap!$A$1:$B$52,2)` |
| AM23 | `=VLOOKUP(AN23,ImageMap!$A$1:$B$52,2)` |
| AQ23 | `=VLOOKUP(AR23,ImageMap!$A$1:$B$52,2)` |
| AU23 | `=VLOOKUP(AV23,ImageMap!$A$1:$B$52,2)` |
| C24 | `=VLOOKUP(D24,ImageMap!$A$1:$B$52,2)` |
| G24 | `=VLOOKUP(H24,ImageMap!$A$1:$B$52,2)` |
| O24 | `=VLOOKUP(P24,ImageMap!$A$1:$B$52,2)` |
| S24 | `=VLOOKUP(T24,ImageMap!$A$1:$B$52,2)` |
| AE24 | `=VLOOKUP(AF24,ImageMap!$A$1:$B$52,2)` |
| AI24 | `=VLOOKUP(AJ24,ImageMap!$A$1:$B$52,2)` |
| AM24 | `=VLOOKUP(AN24,ImageMap!$A$1:$B$52,2)` |
| AQ24 | `=VLOOKUP(AR24,ImageMap!$A$1:$B$52,2)` |
| AU24 | `=VLOOKUP(AV24,ImageMap!$A$1:$B$52,2)` |
| C25 | `=VLOOKUP(D25,ImageMap!$A$1:$B$52,2)` |
| G25 | `=VLOOKUP(H25,ImageMap!$A$1:$B$52,2)` |
| O25 | `=VLOOKUP(P25,ImageMap!$A$1:$B$52,2)` |
| S25 | `=VLOOKUP(T25,ImageMap!$A$1:$B$52,2)` |
| AE25 | `=VLOOKUP(AF25,ImageMap!$A$1:$B$52,2)` |
| AI25 | `=VLOOKUP(AJ25,ImageMap!$A$1:$B$52,2)` |
| AM25 | `=VLOOKUP(AN25,ImageMap!$A$1:$B$52,2)` |
| AQ25 | `=VLOOKUP(AR25,ImageMap!$A$1:$B$52,2)` |
| AU25 | `=VLOOKUP(AV25,ImageMap!$A$1:$B$52,2)` |
| C26 | `=VLOOKUP(D26,ImageMap!$A$1:$B$52,2)` |
| G26 | `=VLOOKUP(H26,ImageMap!$A$1:$B$52,2)` |
| O26 | `=VLOOKUP(P26,ImageMap!$A$1:$B$52,2)` |
| S26 | `=VLOOKUP(T26,ImageMap!$A$1:$B$52,2)` |
| AE26 | `=VLOOKUP(AF26,ImageMap!$A$1:$B$52,2)` |
| AI26 | `=VLOOKUP(AJ26,ImageMap!$A$1:$B$52,2)` |
| AM26 | `=VLOOKUP(AN26,ImageMap!$A$1:$B$52,2)` |
| AQ26 | `=VLOOKUP(AR26,ImageMap!$A$1:$B$52,2)` |
| AU26 | `=VLOOKUP(AV26,ImageMap!$A$1:$B$52,2)` |
| C27 | `=VLOOKUP(D27,ImageMap!$A$1:$B$52,2)` |
| G27 | `=VLOOKUP(H27,ImageMap!$A$1:$B$52,2)` |
| O27 | `=VLOOKUP(P27,ImageMap!$A$1:$B$52,2)` |
| S27 | `=VLOOKUP(T27,ImageMap!$A$1:$B$52,2)` |
| AE27 | `=VLOOKUP(AF27,ImageMap!$A$1:$B$52,2)` |
| AI27 | `=VLOOKUP(AJ27,ImageMap!$A$1:$B$52,2)` |
| AM27 | `=VLOOKUP(AN27,ImageMap!$A$1:$B$52,2)` |
| AQ27 | `=VLOOKUP(AR27,ImageMap!$A$1:$B$52,2)` |
| AU27 | `=VLOOKUP(AV27,ImageMap!$A$1:$B$52,2)` |
| C28 | `=VLOOKUP(D28,ImageMap!$A$1:$B$52,2)` |
| G28 | `=VLOOKUP(H28,ImageMap!$A$1:$B$52,2)` |
| O28 | `=VLOOKUP(P28,ImageMap!$A$1:$B$52,2)` |
| S28 | `=VLOOKUP(T28,ImageMap!$A$1:$B$52,2)` |
| AE28 | `=VLOOKUP(AF28,ImageMap!$A$1:$B$52,2)` |
| AI28 | `=VLOOKUP(AJ28,ImageMap!$A$1:$B$52,2)` |
| AQ28 | `=VLOOKUP(AR28,ImageMap!$A$1:$B$52,2)` |
| C29 | `=VLOOKUP(D29,ImageMap!$A$1:$B$52,2)` |
| G29 | `=VLOOKUP(H29,ImageMap!$A$1:$B$52,2)` |
| O29 | `=VLOOKUP(P29,ImageMap!$A$1:$B$52,2)` |
| S29 | `=VLOOKUP(T29,ImageMap!$A$1:$B$52,2)` |
| AE29 | `=VLOOKUP(AF29,ImageMap!$A$1:$B$52,2)` |
| AI29 | `=VLOOKUP(AJ29,ImageMap!$A$1:$B$52,2)` |
| AQ29 | `=VLOOKUP(AR29,ImageMap!$A$1:$B$52,2)` |
| C30 | `=VLOOKUP(D30,ImageMap!$A$1:$B$52,2)` |
| G30 | `=VLOOKUP(H30,ImageMap!$A$1:$B$52,2)` |
| O30 | `=VLOOKUP(P30,ImageMap!$A$1:$B$52,2)` |
| S30 | `=VLOOKUP(T30,ImageMap!$A$1:$B$52,2)` |
| AE30 | `=VLOOKUP(AF30,ImageMap!$A$1:$B$52,2)` |
| AI30 | `=VLOOKUP(AJ30,ImageMap!$A$1:$B$52,2)` |
| AQ30 | `=VLOOKUP(AR30,ImageMap!$A$1:$B$52,2)` |
| C31 | `=VLOOKUP(D31,ImageMap!$A$1:$B$52,2)` |
| G31 | `=VLOOKUP(H31,ImageMap!$A$1:$B$52,2)` |
| O31 | `=VLOOKUP(P31,ImageMap!$A$1:$B$52,2)` |
| S31 | `=VLOOKUP(T31,ImageMap!$A$1:$B$52,2)` |
| AE31 | `=VLOOKUP(AF31,ImageMap!$A$1:$B$52,2)` |
| AI31 | `=VLOOKUP(AJ31,ImageMap!$A$1:$B$52,2)` |
| AQ31 | `=VLOOKUP(AR31,ImageMap!$A$1:$B$52,2)` |
| C32 | `=VLOOKUP(D32,ImageMap!$A$1:$B$52,2)` |
| G32 | `=VLOOKUP(H32,ImageMap!$A$1:$B$52,2)` |
| O32 | `=VLOOKUP(P32,ImageMap!$A$1:$B$52,2)` |
| S32 | `=VLOOKUP(T32,ImageMap!$A$1:$B$52,2)` |
| AE32 | `=VLOOKUP(AF32,ImageMap!$A$1:$B$52,2)` |
| AI32 | `=VLOOKUP(AJ32,ImageMap!$A$1:$B$52,2)` |
| AQ32 | `=VLOOKUP(AR32,ImageMap!$A$1:$B$52,2)` |
| C33 | `=VLOOKUP(D33,ImageMap!$A$1:$B$52,2)` |
| G33 | `=VLOOKUP(H33,ImageMap!$A$1:$B$52,2)` |
| O33 | `=VLOOKUP(P33,ImageMap!$A$1:$B$52,2)` |
| C34 | `=VLOOKUP(D34,ImageMap!$A$1:$B$52,2)` |
| G34 | `=VLOOKUP(H34,ImageMap!$A$1:$B$52,2)` |
| O34 | `=VLOOKUP(P34,ImageMap!$A$1:$B$52,2)` |
| C35 | `=VLOOKUP(D35,ImageMap!$A$1:$B$52,2)` |
| G35 | `=VLOOKUP(H35,ImageMap!$A$1:$B$52,2)` |
| O35 | `=VLOOKUP(P35,ImageMap!$A$1:$B$52,2)` |
| C36 | `=VLOOKUP(D36,ImageMap!$A$1:$B$52,2)` |
| G36 | `=VLOOKUP(H36,ImageMap!$A$1:$B$52,2)` |
| O36 | `=VLOOKUP(P36,ImageMap!$A$1:$B$52,2)` |
| C37 | `=VLOOKUP(D37,ImageMap!$A$1:$B$52,2)` |
| G37 | `=VLOOKUP(H37,ImageMap!$A$1:$B$52,2)` |
| O37 | `=VLOOKUP(P37,ImageMap!$A$1:$B$52,2)` |
| C38 | `=VLOOKUP(D38,ImageMap!$A$1:$B$52,2)` |
| G38 | `=VLOOKUP(H38,ImageMap!$A$1:$B$52,2)` |
| O38 | `=VLOOKUP(P38,ImageMap!$A$1:$B$52,2)` |
| C39 | `=VLOOKUP(D39,ImageMap!$A$1:$B$52,2)` |
| G39 | `=VLOOKUP(H39,ImageMap!$A$1:$B$52,2)` |
| O39 | `=VLOOKUP(P39,ImageMap!$A$1:$B$52,2)` |
| C40 | `=VLOOKUP(D40,ImageMap!$A$1:$B$52,2)` |
| G40 | `=VLOOKUP(H40,ImageMap!$A$1:$B$52,2)` |
| O40 | `=VLOOKUP(P40,ImageMap!$A$1:$B$52,2)` |
| C41 | `=VLOOKUP(D41,ImageMap!$A$1:$B$52,2)` |
| G41 | `=VLOOKUP(H41,ImageMap!$A$1:$B$52,2)` |
| O41 | `=VLOOKUP(P41,ImageMap!$A$1:$B$52,2)` |
| C42 | `=VLOOKUP(D42,ImageMap!$A$1:$B$52,2)` |
| G42 | `=VLOOKUP(H42,ImageMap!$A$1:$B$52,2)` |
| O42 | `=VLOOKUP(P42,ImageMap!$A$1:$B$52,2)` |
| C43 | `=VLOOKUP(D43,ImageMap!$A$1:$B$52,2)` |
| G43 | `=VLOOKUP(H43,ImageMap!$A$1:$B$52,2)` |
| C44 | `=VLOOKUP(D44,ImageMap!$A$1:$B$52,2)` |
| G44 | `=VLOOKUP(H44,ImageMap!$A$1:$B$52,2)` |
| C45 | `=VLOOKUP(D45,ImageMap!$A$1:$B$52,2)` |
| G45 | `=VLOOKUP(H45,ImageMap!$A$1:$B$52,2)` |
| C46 | `=VLOOKUP(D46,ImageMap!$A$1:$B$52,2)` |
| G46 | `=VLOOKUP(H46,ImageMap!$A$1:$B$52,2)` |
| C47 | `=VLOOKUP(D47,ImageMap!$A$1:$B$52,2)` |
| G47 | `=VLOOKUP(H47,ImageMap!$A$1:$B$52,2)` |
| C48 | `=VLOOKUP(D48,ImageMap!$A$1:$B$52,2)` |
| G48 | `=VLOOKUP(H48,ImageMap!$A$1:$B$52,2)` |
| C49 | `=VLOOKUP(D49,ImageMap!$A$1:$B$52,2)` |
| G49 | `=VLOOKUP(H49,ImageMap!$A$1:$B$52,2)` |
| C50 | `=VLOOKUP(D50,ImageMap!$A$1:$B$52,2)` |
| G50 | `=VLOOKUP(H50,ImageMap!$A$1:$B$52,2)` |
| C51 | `=VLOOKUP(D51,ImageMap!$A$1:$B$52,2)` |
| G51 | `=VLOOKUP(H51,ImageMap!$A$1:$B$52,2)` |
| C52 | `=VLOOKUP(D52,ImageMap!$A$1:$B$52,2)` |
| G52 | `=VLOOKUP(H52,ImageMap!$A$1:$B$52,2)` |
| C56 | `=VLOOKUP(D56,ImageMap!$A$1:$B$52,2)` |
| G56 | `=VLOOKUP(H56,ImageMap!$A$1:$B$52,2)` |
| K56 | `=VLOOKUP(L56,ImageMap!$A$1:$B$52,2)` |
| O56 | `=VLOOKUP(P56,ImageMap!$A$1:$B$52,2)` |
| S56 | `=VLOOKUP(T56,ImageMap!$A$1:$B$52,2)` |
| W56 | `=VLOOKUP(X56,ImageMap!$A$1:$B$52,2)` |
| AA56 | `=VLOOKUP(AB56,ImageMap!$A$1:$B$52,2)` |
| C57 | `=VLOOKUP(D57,ImageMap!$A$1:$B$52,2)` |
| G57 | `=VLOOKUP(H57,ImageMap!$A$1:$B$52,2)` |
| K57 | `=VLOOKUP(L57,ImageMap!$A$1:$B$52,2)` |
| O57 | `=VLOOKUP(P57,ImageMap!$A$1:$B$52,2)` |
| S57 | `=VLOOKUP(T57,ImageMap!$A$1:$B$52,2)` |
| W57 | `=VLOOKUP(X57,ImageMap!$A$1:$B$52,2)` |
| AA57 | `=VLOOKUP(AB57,ImageMap!$A$1:$B$52,2)` |
| C58 | `=VLOOKUP(D58,ImageMap!$A$1:$B$52,2)` |
| G58 | `=VLOOKUP(H58,ImageMap!$A$1:$B$52,2)` |
| K58 | `=VLOOKUP(L58,ImageMap!$A$1:$B$52,2)` |
| O58 | `=VLOOKUP(P58,ImageMap!$A$1:$B$52,2)` |
| S58 | `=VLOOKUP(T58,ImageMap!$A$1:$B$52,2)` |
| W58 | `=VLOOKUP(X58,ImageMap!$A$1:$B$52,2)` |
| AA58 | `=VLOOKUP(AB58,ImageMap!$A$1:$B$52,2)` |
| C59 | `=VLOOKUP(D59,ImageMap!$A$1:$B$52,2)` |
| G59 | `=VLOOKUP(H59,ImageMap!$A$1:$B$52,2)` |
| K59 | `=VLOOKUP(L59,ImageMap!$A$1:$B$52,2)` |
| O59 | `=VLOOKUP(P59,ImageMap!$A$1:$B$52,2)` |
| S59 | `=VLOOKUP(T59,ImageMap!$A$1:$B$52,2)` |
| W59 | `=VLOOKUP(X59,ImageMap!$A$1:$B$52,2)` |
| AA59 | `=VLOOKUP(AB59,ImageMap!$A$1:$B$52,2)` |
| C60 | `=VLOOKUP(D60,ImageMap!$A$1:$B$52,2)` |
| G60 | `=VLOOKUP(H60,ImageMap!$A$1:$B$52,2)` |
| K60 | `=VLOOKUP(L60,ImageMap!$A$1:$B$52,2)` |
| O60 | `=VLOOKUP(P60,ImageMap!$A$1:$B$52,2)` |
| S60 | `=VLOOKUP(T60,ImageMap!$A$1:$B$52,2)` |
| W60 | `=VLOOKUP(X60,ImageMap!$A$1:$B$52,2)` |
| AA60 | `=VLOOKUP(AB60,ImageMap!$A$1:$B$52,2)` |
| C61 | `=VLOOKUP(D61,ImageMap!$A$1:$B$52,2)` |
| K61 | `=VLOOKUP(L61,ImageMap!$A$1:$B$52,2)` |
| O61 | `=VLOOKUP(P61,ImageMap!$A$1:$B$52,2)` |
| S61 | `=VLOOKUP(T61,ImageMap!$A$1:$B$52,2)` |
| W61 | `=VLOOKUP(X61,ImageMap!$A$1:$B$52,2)` |
| AA61 | `=VLOOKUP(AB61,ImageMap!$A$1:$B$52,2)` |
| C62 | `=VLOOKUP(D62,ImageMap!$A$1:$B$52,2)` |
| K62 | `=VLOOKUP(L62,ImageMap!$A$1:$B$52,2)` |
| O62 | `=VLOOKUP(P62,ImageMap!$A$1:$B$52,2)` |
| S62 | `=VLOOKUP(T62,ImageMap!$A$1:$B$52,2)` |
| W62 | `=VLOOKUP(X62,ImageMap!$A$1:$B$52,2)` |
| AA62 | `=VLOOKUP(AB62,ImageMap!$A$1:$B$52,2)` |
| C63 | `=VLOOKUP(D63,ImageMap!$A$1:$B$52,2)` |
| K63 | `=VLOOKUP(L63,ImageMap!$A$1:$B$52,2)` |
| O63 | `=VLOOKUP(P63,ImageMap!$A$1:$B$52,2)` |
| S63 | `=VLOOKUP(T63,ImageMap!$A$1:$B$52,2)` |
| W63 | `=VLOOKUP(X63,ImageMap!$A$1:$B$52,2)` |
| AA63 | `=VLOOKUP(AB63,ImageMap!$A$1:$B$52,2)` |
| C64 | `=VLOOKUP(D64,ImageMap!$A$1:$B$52,2)` |
| K64 | `=VLOOKUP(L64,ImageMap!$A$1:$B$52,2)` |
| O64 | `=VLOOKUP(P64,ImageMap!$A$1:$B$52,2)` |
| S64 | `=VLOOKUP(T64,ImageMap!$A$1:$B$52,2)` |
| W64 | `=VLOOKUP(X64,ImageMap!$A$1:$B$52,2)` |
| AA64 | `=VLOOKUP(AB64,ImageMap!$A$1:$B$52,2)` |
| C65 | `=VLOOKUP(D65,ImageMap!$A$1:$B$52,2)` |
| K65 | `=VLOOKUP(L65,ImageMap!$A$1:$B$52,2)` |
| O65 | `=VLOOKUP(P65,ImageMap!$A$1:$B$52,2)` |
| S65 | `=VLOOKUP(T65,ImageMap!$A$1:$B$52,2)` |
| W65 | `=VLOOKUP(X65,ImageMap!$A$1:$B$52,2)` |
| AA65 | `=VLOOKUP(AB65,ImageMap!$A$1:$B$52,2)` |
| K66 | `=VLOOKUP(L66,ImageMap!$A$1:$B$52,2)` |
| O66 | `=VLOOKUP(P66,ImageMap!$A$1:$B$52,2)` |
| S66 | `=VLOOKUP(T66,ImageMap!$A$1:$B$52,2)` |
| W66 | `=VLOOKUP(X66,ImageMap!$A$1:$B$52,2)` |
| AA66 | `=VLOOKUP(AB66,ImageMap!$A$1:$B$52,2)` |
| K67 | `=VLOOKUP(L67,ImageMap!$A$1:$B$52,2)` |
| O67 | `=VLOOKUP(P67,ImageMap!$A$1:$B$52,2)` |
| S67 | `=VLOOKUP(T67,ImageMap!$A$1:$B$52,2)` |
| W67 | `=VLOOKUP(X67,ImageMap!$A$1:$B$52,2)` |
| AA67 | `=VLOOKUP(AB67,ImageMap!$A$1:$B$52,2)` |
| K68 | `=VLOOKUP(L68,ImageMap!$A$1:$B$52,2)` |
| O68 | `=VLOOKUP(P68,ImageMap!$A$1:$B$52,2)` |
| S68 | `=VLOOKUP(T68,ImageMap!$A$1:$B$52,2)` |
| W68 | `=VLOOKUP(X68,ImageMap!$A$1:$B$52,2)` |
| AA68 | `=VLOOKUP(AB68,ImageMap!$A$1:$B$52,2)` |
| K69 | `=VLOOKUP(L69,ImageMap!$A$1:$B$52,2)` |
| O69 | `=VLOOKUP(P69,ImageMap!$A$1:$B$52,2)` |
| S69 | `=VLOOKUP(T69,ImageMap!$A$1:$B$52,2)` |
| W69 | `=VLOOKUP(X69,ImageMap!$A$1:$B$52,2)` |
| AA69 | `=VLOOKUP(AB69,ImageMap!$A$1:$B$52,2)` |
| K70 | `=VLOOKUP(L70,ImageMap!$A$1:$B$52,2)` |
| O70 | `=VLOOKUP(P70,ImageMap!$A$1:$B$52,2)` |
| S70 | `=VLOOKUP(T70,ImageMap!$A$1:$B$52,2)` |
| W70 | `=VLOOKUP(X70,ImageMap!$A$1:$B$52,2)` |
| AA70 | `=VLOOKUP(AB70,ImageMap!$A$1:$B$52,2)` |
| K71 | `=VLOOKUP(L71,ImageMap!$A$1:$B$52,2)` |
| O71 | `=VLOOKUP(P71,ImageMap!$A$1:$B$52,2)` |
| S71 | `=VLOOKUP(T71,ImageMap!$A$1:$B$52,2)` |
| W71 | `=VLOOKUP(X71,ImageMap!$A$1:$B$52,2)` |
| AA71 | `=VLOOKUP(AB71,ImageMap!$A$1:$B$52,2)` |
| K72 | `=VLOOKUP(L72,ImageMap!$A$1:$B$52,2)` |
| O72 | `=VLOOKUP(P72,ImageMap!$A$1:$B$52,2)` |
| S72 | `=VLOOKUP(T72,ImageMap!$A$1:$B$52,2)` |
| W72 | `=VLOOKUP(X72,ImageMap!$A$1:$B$52,2)` |
| AA72 | `=VLOOKUP(AB72,ImageMap!$A$1:$B$52,2)` |
| K73 | `=VLOOKUP(L73,ImageMap!$A$1:$B$52,2)` |
| O73 | `=VLOOKUP(P73,ImageMap!$A$1:$B$52,2)` |
| S73 | `=VLOOKUP(T73,ImageMap!$A$1:$B$52,2)` |
| W73 | `=VLOOKUP(X73,ImageMap!$A$1:$B$52,2)` |
| AA73 | `=VLOOKUP(AB73,ImageMap!$A$1:$B$52,2)` |
| K74 | `=VLOOKUP(L74,ImageMap!$A$1:$B$52,2)` |
| O74 | `=VLOOKUP(P74,ImageMap!$A$1:$B$52,2)` |
| S74 | `=VLOOKUP(T74,ImageMap!$A$1:$B$52,2)` |
| W74 | `=VLOOKUP(X74,ImageMap!$A$1:$B$52,2)` |
| AA74 | `=VLOOKUP(AB74,ImageMap!$A$1:$B$52,2)` |
| K75 | `=VLOOKUP(L75,ImageMap!$A$1:$B$52,2)` |
| O75 | `=VLOOKUP(P75,ImageMap!$A$1:$B$52,2)` |
| S75 | `=VLOOKUP(T75,ImageMap!$A$1:$B$52,2)` |
| W75 | `=VLOOKUP(X75,ImageMap!$A$1:$B$52,2)` |
| AA75 | `=VLOOKUP(AB75,ImageMap!$A$1:$B$52,2)` |
| W76 | `=VLOOKUP(X76,ImageMap!$A$1:$B$52,2)` |
| AA76 | `=VLOOKUP(AB76,ImageMap!$A$1:$B$52,2)` |
| W77 | `=VLOOKUP(X77,ImageMap!$A$1:$B$52,2)` |
| AA77 | `=VLOOKUP(AB77,ImageMap!$A$1:$B$52,2)` |
| W78 | `=VLOOKUP(X78,ImageMap!$A$1:$B$52,2)` |
| AA78 | `=VLOOKUP(AB78,ImageMap!$A$1:$B$52,2)` |
| W79 | `=VLOOKUP(X79,ImageMap!$A$1:$B$52,2)` |
| AA79 | `=VLOOKUP(AB79,ImageMap!$A$1:$B$52,2)` |
| W80 | `=VLOOKUP(X80,ImageMap!$A$1:$B$52,2)` |
| AA80 | `=VLOOKUP(AB80,ImageMap!$A$1:$B$52,2)` |
| AA81 | `=VLOOKUP(AB81,ImageMap!$A$1:$B$52,2)` |
| AA82 | `=VLOOKUP(AB82,ImageMap!$A$1:$B$52,2)` |
| AA83 | `=VLOOKUP(AB83,ImageMap!$A$1:$B$52,2)` |
| AA84 | `=VLOOKUP(AB84,ImageMap!$A$1:$B$52,2)` |
| AA85 | `=VLOOKUP(AB85,ImageMap!$A$1:$B$52,2)` |

## Sheet: Control-Upgs

485 formulas

| Cell | Formula |
|---|---|
| C3 | `=IF(B3<1000, B3,   TEXT(B3 / 10^(3 * INT(LOG10(B3)/3)), "0.00") &   CHOOSE(INT(LOG10(B3)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| G3 | `=IF(F3<1000, F3,   TEXT(F3 / 10^(3 * INT(LOG10(F3)/3)), "0.00") &   CHOOSE(INT(LOG10(F3)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| K3 | `=IF(J3<1000, J3,   TEXT(J3 / 10^(3 * INT(LOG10(J3)/3)), "0.00") &   CHOOSE(INT(LOG10(J3)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| O3 | `=IF(N3<1000, N3,   TEXT(N3 / 10^(3 * INT(LOG10(N3)/3)), "0.00") &   CHOOSE(INT(LOG10(N3)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| S3 | `=IF(R3<1000, R3,   TEXT(R3 / 10^(3 * INT(LOG10(R3)/3)), "0.00") &   CHOOSE(INT(LOG10(R3)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| W3 | `=IF(V3<1000, V3,   TEXT(V3 / 10^(3 * INT(LOG10(V3)/3)), "0.00") &   CHOOSE(INT(LOG10(V3)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AA3 | `=IF(Z3<1000, Z3,   TEXT(Z3 / 10^(3 * INT(LOG10(Z3)/3)), "0.00") &   CHOOSE(INT(LOG10(Z3)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AE3 | `=IF(AD3<1000, AD3,   TEXT(AD3 / 10^(3 * INT(LOG10(AD3)/3)), "0.00") &   CHOOSE(INT(LOG10(AD3)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AI3 | `=IF(AH3<1000, AH3,   TEXT(AH3 / 10^(3 * INT(LOG10(AH3)/3)), "0.00") &   CHOOSE(INT(LOG10(AH3)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AM3 | `=IF(AL3<1000, AL3,   TEXT(AL3 / 10^(3 * INT(LOG10(AL3)/3)), "0.00") &   CHOOSE(INT(LOG10(AL3)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AQ3 | `=IF(AP3<1000, AP3,   TEXT(AP3 / 10^(3 * INT(LOG10(AP3)/3)), "0.00") &   CHOOSE(INT(LOG10(AP3)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AU3 | `=IF(AT3<1000, AT3,   TEXT(AT3 / 10^(3 * INT(LOG10(AT3)/3)), "0.00") &   CHOOSE(INT(LOG10(AT3)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| C4 | `=IF(B4<1000, B4, TEXT(B4 / 10^(3 * INT(LOG10(B4)/3)), "0.00") & CHOOSE(INT(LOG10(B4)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| G4 | `=IF(F4<1000, F4, TEXT(F4 / 10^(3 * INT(LOG10(F4)/3)), "0.00") & CHOOSE(INT(LOG10(F4)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| K4 | `=IF(J4<1000, J4, TEXT(J4 / 10^(3 * INT(LOG10(J4)/3)), "0.00") & CHOOSE(INT(LOG10(J4)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| O4 | `=IF(N4<1000, N4, TEXT(N4 / 10^(3 * INT(LOG10(N4)/3)), "0.00") & CHOOSE(INT(LOG10(N4)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| S4 | `=IF(R4<1000, R4, TEXT(R4 / 10^(3 * INT(LOG10(R4)/3)), "0.00") & CHOOSE(INT(LOG10(R4)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| W4 | `=IF(V4<1000, V4, TEXT(V4 / 10^(3 * INT(LOG10(V4)/3)), "0.00") & CHOOSE(INT(LOG10(V4)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AA4 | `=IF(Z4<1000, Z4, TEXT(Z4 / 10^(3 * INT(LOG10(Z4)/3)), "0.00") & CHOOSE(INT(LOG10(Z4)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AE4 | `=IF(AD4<1000, AD4, TEXT(AD4 / 10^(3 * INT(LOG10(AD4)/3)), "0.00") & CHOOSE(INT(LOG10(AD4)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AI4 | `=IF(AH4<1000, AH4, TEXT(AH4 / 10^(3 * INT(LOG10(AH4)/3)), "0.00") & CHOOSE(INT(LOG10(AH4)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AM4 | `=IF(AL4<1000, AL4, TEXT(AL4 / 10^(3 * INT(LOG10(AL4)/3)), "0.00") & CHOOSE(INT(LOG10(AL4)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AQ4 | `=IF(AP4<1000, AP4, TEXT(AP4 / 10^(3 * INT(LOG10(AP4)/3)), "0.00") & CHOOSE(INT(LOG10(AP4)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AU4 | `=IF(AT4<1000, AT4, TEXT(AT4 / 10^(3 * INT(LOG10(AT4)/3)), "0.00") & CHOOSE(INT(LOG10(AT4)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| C5 | `=IF(B5<1000, B5, TEXT(B5 / 10^(3 * INT(LOG10(B5)/3)), "0.00") & CHOOSE(INT(LOG10(B5)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| G5 | `=IF(F5<1000, F5, TEXT(F5 / 10^(3 * INT(LOG10(F5)/3)), "0.00") & CHOOSE(INT(LOG10(F5)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| K5 | `=IF(J5<1000, J5, TEXT(J5 / 10^(3 * INT(LOG10(J5)/3)), "0.00") & CHOOSE(INT(LOG10(J5)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| O5 | `=IF(N5<1000, N5, TEXT(N5 / 10^(3 * INT(LOG10(N5)/3)), "0.00") & CHOOSE(INT(LOG10(N5)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| S5 | `=IF(R5<1000, R5, TEXT(R5 / 10^(3 * INT(LOG10(R5)/3)), "0.00") & CHOOSE(INT(LOG10(R5)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| W5 | `=IF(V5<1000, V5, TEXT(V5 / 10^(3 * INT(LOG10(V5)/3)), "0.00") & CHOOSE(INT(LOG10(V5)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AA5 | `=IF(Z5<1000, Z5, TEXT(Z5 / 10^(3 * INT(LOG10(Z5)/3)), "0.00") & CHOOSE(INT(LOG10(Z5)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AE5 | `=IF(AD5<1000, AD5, TEXT(AD5 / 10^(3 * INT(LOG10(AD5)/3)), "0.00") & CHOOSE(INT(LOG10(AD5)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AI5 | `=IF(AH5<1000, AH5, TEXT(AH5 / 10^(3 * INT(LOG10(AH5)/3)), "0.00") & CHOOSE(INT(LOG10(AH5)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AM5 | `=IF(AL5<1000, AL5, TEXT(AL5 / 10^(3 * INT(LOG10(AL5)/3)), "0.00") & CHOOSE(INT(LOG10(AL5)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AQ5 | `=IF(AP5<1000, AP5, TEXT(AP5 / 10^(3 * INT(LOG10(AP5)/3)), "0.00") & CHOOSE(INT(LOG10(AP5)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AU5 | `=IF(AT5<1000, AT5, TEXT(AT5 / 10^(3 * INT(LOG10(AT5)/3)), "0.00") & CHOOSE(INT(LOG10(AT5)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| C6 | `=IF(B6<1000, B6, TEXT(B6 / 10^(3 * INT(LOG10(B6)/3)), "0.00") & CHOOSE(INT(LOG10(B6)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| G6 | `=IF(F6<1000, F6, TEXT(F6 / 10^(3 * INT(LOG10(F6)/3)), "0.00") & CHOOSE(INT(LOG10(F6)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| K6 | `=IF(J6<1000, J6, TEXT(J6 / 10^(3 * INT(LOG10(J6)/3)), "0.00") & CHOOSE(INT(LOG10(J6)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| O6 | `=IF(N6<1000, N6, TEXT(N6 / 10^(3 * INT(LOG10(N6)/3)), "0.00") & CHOOSE(INT(LOG10(N6)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| S6 | `=IF(R6<1000, R6, TEXT(R6 / 10^(3 * INT(LOG10(R6)/3)), "0.00") & CHOOSE(INT(LOG10(R6)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| W6 | `=IF(V6<1000, V6, TEXT(V6 / 10^(3 * INT(LOG10(V6)/3)), "0.00") & CHOOSE(INT(LOG10(V6)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AA6 | `=IF(Z6<1000, Z6, TEXT(Z6 / 10^(3 * INT(LOG10(Z6)/3)), "0.00") & CHOOSE(INT(LOG10(Z6)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AE6 | `=IF(AD6<1000, AD6, TEXT(AD6 / 10^(3 * INT(LOG10(AD6)/3)), "0.00") & CHOOSE(INT(LOG10(AD6)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AI6 | `=IF(AH6<1000, AH6, TEXT(AH6 / 10^(3 * INT(LOG10(AH6)/3)), "0.00") & CHOOSE(INT(LOG10(AH6)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AM6 | `=IF(AL6<1000, AL6, TEXT(AL6 / 10^(3 * INT(LOG10(AL6)/3)), "0.00") & CHOOSE(INT(LOG10(AL6)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AQ6 | `=IF(AP6<1000, AP6, TEXT(AP6 / 10^(3 * INT(LOG10(AP6)/3)), "0.00") & CHOOSE(INT(LOG10(AP6)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AU6 | `=IF(AT6<1000, AT6, TEXT(AT6 / 10^(3 * INT(LOG10(AT6)/3)), "0.00") & CHOOSE(INT(LOG10(AT6)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| C7 | `=IF(B7<1000, B7, TEXT(B7 / 10^(3 * INT(LOG10(B7)/3)), "0.00") & CHOOSE(INT(LOG10(B7)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| G7 | `=IF(F7<1000, F7, TEXT(F7 / 10^(3 * INT(LOG10(F7)/3)), "0.00") & CHOOSE(INT(LOG10(F7)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| K7 | `=IF(J7<1000, J7, TEXT(J7 / 10^(3 * INT(LOG10(J7)/3)), "0.00") & CHOOSE(INT(LOG10(J7)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| O7 | `=IF(N7<1000, N7, TEXT(N7 / 10^(3 * INT(LOG10(N7)/3)), "0.00") & CHOOSE(INT(LOG10(N7)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| S7 | `=IF(R7<1000, R7, TEXT(R7 / 10^(3 * INT(LOG10(R7)/3)), "0.00") & CHOOSE(INT(LOG10(R7)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| W7 | `=IF(V7<1000, V7, TEXT(V7 / 10^(3 * INT(LOG10(V7)/3)), "0.00") & CHOOSE(INT(LOG10(V7)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AA7 | `=IF(Z7<1000, Z7, TEXT(Z7 / 10^(3 * INT(LOG10(Z7)/3)), "0.00") & CHOOSE(INT(LOG10(Z7)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AE7 | `=IF(AD7<1000, AD7, TEXT(AD7 / 10^(3 * INT(LOG10(AD7)/3)), "0.00") & CHOOSE(INT(LOG10(AD7)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AI7 | `=IF(AH7<1000, AH7, TEXT(AH7 / 10^(3 * INT(LOG10(AH7)/3)), "0.00") & CHOOSE(INT(LOG10(AH7)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AM7 | `=IF(AL7<1000, AL7, TEXT(AL7 / 10^(3 * INT(LOG10(AL7)/3)), "0.00") & CHOOSE(INT(LOG10(AL7)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AQ7 | `=IF(AP7<1000, AP7, TEXT(AP7 / 10^(3 * INT(LOG10(AP7)/3)), "0.00") & CHOOSE(INT(LOG10(AP7)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AU7 | `=IF(AT7<1000, AT7, TEXT(AT7 / 10^(3 * INT(LOG10(AT7)/3)), "0.00") & CHOOSE(INT(LOG10(AT7)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| C8 | `=IF(B8<1000, B8, TEXT(B8 / 10^(3 * INT(LOG10(B8)/3)), "0.00") & CHOOSE(INT(LOG10(B8)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| G8 | `=IF(F8<1000, F8, TEXT(F8 / 10^(3 * INT(LOG10(F8)/3)), "0.00") & CHOOSE(INT(LOG10(F8)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| O8 | `=IF(N8<1000, N8, TEXT(N8 / 10^(3 * INT(LOG10(N8)/3)), "0.00") & CHOOSE(INT(LOG10(N8)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| S8 | `=IF(R8<1000, R8, TEXT(R8 / 10^(3 * INT(LOG10(R8)/3)), "0.00") & CHOOSE(INT(LOG10(R8)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| W8 | `=IF(V8<1000, V8, TEXT(V8 / 10^(3 * INT(LOG10(V8)/3)), "0.00") & CHOOSE(INT(LOG10(V8)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AA8 | `=IF(Z8<1000, Z8, TEXT(Z8 / 10^(3 * INT(LOG10(Z8)/3)), "0.00") & CHOOSE(INT(LOG10(Z8)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AE8 | `=IF(AD8<1000, AD8, TEXT(AD8 / 10^(3 * INT(LOG10(AD8)/3)), "0.00") & CHOOSE(INT(LOG10(AD8)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AI8 | `=IF(AH8<1000, AH8, TEXT(AH8 / 10^(3 * INT(LOG10(AH8)/3)), "0.00") & CHOOSE(INT(LOG10(AH8)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AM8 | `=IF(AL8<1000, AL8, TEXT(AL8 / 10^(3 * INT(LOG10(AL8)/3)), "0.00") & CHOOSE(INT(LOG10(AL8)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AQ8 | `=IF(AP8<1000, AP8, TEXT(AP8 / 10^(3 * INT(LOG10(AP8)/3)), "0.00") & CHOOSE(INT(LOG10(AP8)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AU8 | `=IF(AT8<1000, AT8, TEXT(AT8 / 10^(3 * INT(LOG10(AT8)/3)), "0.00") & CHOOSE(INT(LOG10(AT8)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| C9 | `=IF(B9<1000, B9, TEXT(B9 / 10^(3 * INT(LOG10(B9)/3)), "0.00") & CHOOSE(INT(LOG10(B9)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| G9 | `=IF(F9<1000, F9, TEXT(F9 / 10^(3 * INT(LOG10(F9)/3)), "0.00") & CHOOSE(INT(LOG10(F9)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| O9 | `=IF(N9<1000, N9, TEXT(N9 / 10^(3 * INT(LOG10(N9)/3)), "0.00") & CHOOSE(INT(LOG10(N9)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| S9 | `=IF(R9<1000, R9, TEXT(R9 / 10^(3 * INT(LOG10(R9)/3)), "0.00") & CHOOSE(INT(LOG10(R9)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| W9 | `=IF(V9<1000, V9, TEXT(V9 / 10^(3 * INT(LOG10(V9)/3)), "0.00") & CHOOSE(INT(LOG10(V9)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AA9 | `=IF(Z9<1000, Z9, TEXT(Z9 / 10^(3 * INT(LOG10(Z9)/3)), "0.00") & CHOOSE(INT(LOG10(Z9)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AE9 | `=IF(AD9<1000, AD9, TEXT(AD9 / 10^(3 * INT(LOG10(AD9)/3)), "0.00") & CHOOSE(INT(LOG10(AD9)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AI9 | `=IF(AH9<1000, AH9, TEXT(AH9 / 10^(3 * INT(LOG10(AH9)/3)), "0.00") & CHOOSE(INT(LOG10(AH9)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AM9 | `=IF(AL9<1000, AL9, TEXT(AL9 / 10^(3 * INT(LOG10(AL9)/3)), "0.00") & CHOOSE(INT(LOG10(AL9)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AQ9 | `=IF(AP9<1000, AP9, TEXT(AP9 / 10^(3 * INT(LOG10(AP9)/3)), "0.00") & CHOOSE(INT(LOG10(AP9)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AU9 | `=IF(AT9<1000, AT9, TEXT(AT9 / 10^(3 * INT(LOG10(AT9)/3)), "0.00") & CHOOSE(INT(LOG10(AT9)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| C10 | `=IF(B10<1000, B10, TEXT(B10 / 10^(3 * INT(LOG10(B10)/3)), "0.00") & CHOOSE(INT(LOG10(B10)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| G10 | `=IF(F10<1000, F10, TEXT(F10 / 10^(3 * INT(LOG10(F10)/3)), "0.00") & CHOOSE(INT(LOG10(F10)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| O10 | `=IF(N10<1000, N10, TEXT(N10 / 10^(3 * INT(LOG10(N10)/3)), "0.00") & CHOOSE(INT(LOG10(N10)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| S10 | `=IF(R10<1000, R10, TEXT(R10 / 10^(3 * INT(LOG10(R10)/3)), "0.00") & CHOOSE(INT(LOG10(R10)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| W10 | `=IF(V10<1000, V10, TEXT(V10 / 10^(3 * INT(LOG10(V10)/3)), "0.00") & CHOOSE(INT(LOG10(V10)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AA10 | `=IF(Z10<1000, Z10, TEXT(Z10 / 10^(3 * INT(LOG10(Z10)/3)), "0.00") & CHOOSE(INT(LOG10(Z10)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AE10 | `=IF(AD10<1000, AD10, TEXT(AD10 / 10^(3 * INT(LOG10(AD10)/3)), "0.00") & CHOOSE(INT(LOG10(AD10)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AI10 | `=IF(AH10<1000, AH10, TEXT(AH10 / 10^(3 * INT(LOG10(AH10)/3)), "0.00") & CHOOSE(INT(LOG10(AH10)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AM10 | `=IF(AL10<1000, AL10, TEXT(AL10 / 10^(3 * INT(LOG10(AL10)/3)), "0.00") & CHOOSE(INT(LOG10(AL10)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AQ10 | `=IF(AP10<1000, AP10, TEXT(AP10 / 10^(3 * INT(LOG10(AP10)/3)), "0.00") & CHOOSE(INT(LOG10(AP10)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AU10 | `=IF(AT10<1000, AT10, TEXT(AT10 / 10^(3 * INT(LOG10(AT10)/3)), "0.00") & CHOOSE(INT(LOG10(AT10)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| C11 | `=IF(B11<1000, B11, TEXT(B11 / 10^(3 * INT(LOG10(B11)/3)), "0.00") & CHOOSE(INT(LOG10(B11)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| G11 | `=IF(F11<1000, F11, TEXT(F11 / 10^(3 * INT(LOG10(F11)/3)), "0.00") & CHOOSE(INT(LOG10(F11)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| O11 | `=IF(N11<1000, N11, TEXT(N11 / 10^(3 * INT(LOG10(N11)/3)), "0.00") & CHOOSE(INT(LOG10(N11)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| S11 | `=IF(R11<1000, R11, TEXT(R11 / 10^(3 * INT(LOG10(R11)/3)), "0.00") & CHOOSE(INT(LOG10(R11)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| W11 | `=IF(V11<1000, V11, TEXT(V11 / 10^(3 * INT(LOG10(V11)/3)), "0.00") & CHOOSE(INT(LOG10(V11)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AA11 | `=IF(Z11<1000, Z11, TEXT(Z11 / 10^(3 * INT(LOG10(Z11)/3)), "0.00") & CHOOSE(INT(LOG10(Z11)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AE11 | `=IF(AD11<1000, AD11, TEXT(AD11 / 10^(3 * INT(LOG10(AD11)/3)), "0.00") & CHOOSE(INT(LOG10(AD11)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AI11 | `=IF(AH11<1000, AH11, TEXT(AH11 / 10^(3 * INT(LOG10(AH11)/3)), "0.00") & CHOOSE(INT(LOG10(AH11)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AM11 | `=IF(AL11<1000, AL11, TEXT(AL11 / 10^(3 * INT(LOG10(AL11)/3)), "0.00") & CHOOSE(INT(LOG10(AL11)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AQ11 | `=IF(AP11<1000, AP11, TEXT(AP11 / 10^(3 * INT(LOG10(AP11)/3)), "0.00") & CHOOSE(INT(LOG10(AP11)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AU11 | `=IF(AT11<1000, AT11, TEXT(AT11 / 10^(3 * INT(LOG10(AT11)/3)), "0.00") & CHOOSE(INT(LOG10(AT11)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| C12 | `=IF(B12<1000, B12, TEXT(B12 / 10^(3 * INT(LOG10(B12)/3)), "0.00") & CHOOSE(INT(LOG10(B12)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| G12 | `=IF(F12<1000, F12, TEXT(F12 / 10^(3 * INT(LOG10(F12)/3)), "0.00") & CHOOSE(INT(LOG10(F12)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| O12 | `=IF(N12<1000, N12, TEXT(N12 / 10^(3 * INT(LOG10(N12)/3)), "0.00") & CHOOSE(INT(LOG10(N12)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| S12 | `=IF(R12<1000, R12, TEXT(R12 / 10^(3 * INT(LOG10(R12)/3)), "0.00") & CHOOSE(INT(LOG10(R12)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| W12 | `=IF(V12<1000, V12, TEXT(V12 / 10^(3 * INT(LOG10(V12)/3)), "0.00") & CHOOSE(INT(LOG10(V12)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AA12 | `=IF(Z12<1000, Z12, TEXT(Z12 / 10^(3 * INT(LOG10(Z12)/3)), "0.00") & CHOOSE(INT(LOG10(Z12)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AE12 | `=IF(AD12<1000, AD12, TEXT(AD12 / 10^(3 * INT(LOG10(AD12)/3)), "0.00") & CHOOSE(INT(LOG10(AD12)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AI12 | `=IF(AH12<1000, AH12, TEXT(AH12 / 10^(3 * INT(LOG10(AH12)/3)), "0.00") & CHOOSE(INT(LOG10(AH12)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AM12 | `=IF(AL12<1000, AL12, TEXT(AL12 / 10^(3 * INT(LOG10(AL12)/3)), "0.00") & CHOOSE(INT(LOG10(AL12)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AQ12 | `=IF(AP12<1000, AP12, TEXT(AP12 / 10^(3 * INT(LOG10(AP12)/3)), "0.00") & CHOOSE(INT(LOG10(AP12)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AU12 | `=IF(AT12<1000, AT12, TEXT(AT12 / 10^(3 * INT(LOG10(AT12)/3)), "0.00") & CHOOSE(INT(LOG10(AT12)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| C13 | `=IF(B13<1000, B13, TEXT(B13 / 10^(3 * INT(LOG10(B13)/3)), "0.00") & CHOOSE(INT(LOG10(B13)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| G13 | `=IF(F13<1000, F13, TEXT(F13 / 10^(3 * INT(LOG10(F13)/3)), "0.00") & CHOOSE(INT(LOG10(F13)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| O13 | `=IF(N13<1000, N13, TEXT(N13 / 10^(3 * INT(LOG10(N13)/3)), "0.00") & CHOOSE(INT(LOG10(N13)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| S13 | `=IF(R13<1000, R13, TEXT(R13 / 10^(3 * INT(LOG10(R13)/3)), "0.00") & CHOOSE(INT(LOG10(R13)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| W13 | `=IF(V13<1000, V13, TEXT(V13 / 10^(3 * INT(LOG10(V13)/3)), "0.00") & CHOOSE(INT(LOG10(V13)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AA13 | `=IF(Z13<1000, Z13, TEXT(Z13 / 10^(3 * INT(LOG10(Z13)/3)), "0.00") & CHOOSE(INT(LOG10(Z13)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AE13 | `=IF(AD13<1000, AD13, TEXT(AD13 / 10^(3 * INT(LOG10(AD13)/3)), "0.00") & CHOOSE(INT(LOG10(AD13)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AI13 | `=IF(AH13<1000, AH13, TEXT(AH13 / 10^(3 * INT(LOG10(AH13)/3)), "0.00") & CHOOSE(INT(LOG10(AH13)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AM13 | `=IF(AL13<1000, AL13, TEXT(AL13 / 10^(3 * INT(LOG10(AL13)/3)), "0.00") & CHOOSE(INT(LOG10(AL13)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AQ13 | `=IF(AP13<1000, AP13, TEXT(AP13 / 10^(3 * INT(LOG10(AP13)/3)), "0.00") & CHOOSE(INT(LOG10(AP13)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AU13 | `=IF(AT13<1000, AT13, TEXT(AT13 / 10^(3 * INT(LOG10(AT13)/3)), "0.00") & CHOOSE(INT(LOG10(AT13)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| C14 | `=IF(B14<1000, B14, TEXT(B14 / 10^(3 * INT(LOG10(B14)/3)), "0.00") & CHOOSE(INT(LOG10(B14)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| G14 | `=IF(F14<1000, F14, TEXT(F14 / 10^(3 * INT(LOG10(F14)/3)), "0.00") & CHOOSE(INT(LOG10(F14)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| O14 | `=IF(N14<1000, N14, TEXT(N14 / 10^(3 * INT(LOG10(N14)/3)), "0.00") & CHOOSE(INT(LOG10(N14)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| S14 | `=IF(R14<1000, R14, TEXT(R14 / 10^(3 * INT(LOG10(R14)/3)), "0.00") & CHOOSE(INT(LOG10(R14)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| W14 | `=IF(V14<1000, V14, TEXT(V14 / 10^(3 * INT(LOG10(V14)/3)), "0.00") & CHOOSE(INT(LOG10(V14)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AA14 | `=IF(Z14<1000, Z14, TEXT(Z14 / 10^(3 * INT(LOG10(Z14)/3)), "0.00") & CHOOSE(INT(LOG10(Z14)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AE14 | `=IF(AD14<1000, AD14, TEXT(AD14 / 10^(3 * INT(LOG10(AD14)/3)), "0.00") & CHOOSE(INT(LOG10(AD14)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AI14 | `=IF(AH14<1000, AH14, TEXT(AH14 / 10^(3 * INT(LOG10(AH14)/3)), "0.00") & CHOOSE(INT(LOG10(AH14)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AM14 | `=IF(AL14<1000, AL14, TEXT(AL14 / 10^(3 * INT(LOG10(AL14)/3)), "0.00") & CHOOSE(INT(LOG10(AL14)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AQ14 | `=IF(AP14<1000, AP14, TEXT(AP14 / 10^(3 * INT(LOG10(AP14)/3)), "0.00") & CHOOSE(INT(LOG10(AP14)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AU14 | `=IF(AT14<1000, AT14, TEXT(AT14 / 10^(3 * INT(LOG10(AT14)/3)), "0.00") & CHOOSE(INT(LOG10(AT14)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| C15 | `=IF(B15<1000, B15, TEXT(B15 / 10^(3 * INT(LOG10(B15)/3)), "0.00") & CHOOSE(INT(LOG10(B15)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| G15 | `=IF(F15<1000, F15, TEXT(F15 / 10^(3 * INT(LOG10(F15)/3)), "0.00") & CHOOSE(INT(LOG10(F15)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| O15 | `=IF(N15<1000, N15, TEXT(N15 / 10^(3 * INT(LOG10(N15)/3)), "0.00") & CHOOSE(INT(LOG10(N15)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| S15 | `=IF(R15<1000, R15, TEXT(R15 / 10^(3 * INT(LOG10(R15)/3)), "0.00") & CHOOSE(INT(LOG10(R15)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| W15 | `=IF(V15<1000, V15, TEXT(V15 / 10^(3 * INT(LOG10(V15)/3)), "0.00") & CHOOSE(INT(LOG10(V15)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AA15 | `=IF(Z15<1000, Z15, TEXT(Z15 / 10^(3 * INT(LOG10(Z15)/3)), "0.00") & CHOOSE(INT(LOG10(Z15)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AE15 | `=IF(AD15<1000, AD15, TEXT(AD15 / 10^(3 * INT(LOG10(AD15)/3)), "0.00") & CHOOSE(INT(LOG10(AD15)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AI15 | `=IF(AH15<1000, AH15, TEXT(AH15 / 10^(3 * INT(LOG10(AH15)/3)), "0.00") & CHOOSE(INT(LOG10(AH15)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AM15 | `=IF(AL15<1000, AL15, TEXT(AL15 / 10^(3 * INT(LOG10(AL15)/3)), "0.00") & CHOOSE(INT(LOG10(AL15)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AQ15 | `=IF(AP15<1000, AP15, TEXT(AP15 / 10^(3 * INT(LOG10(AP15)/3)), "0.00") & CHOOSE(INT(LOG10(AP15)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AU15 | `=IF(AT15<1000, AT15, TEXT(AT15 / 10^(3 * INT(LOG10(AT15)/3)), "0.00") & CHOOSE(INT(LOG10(AT15)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| C16 | `=IF(B16<1000, B16, TEXT(B16 / 10^(3 * INT(LOG10(B16)/3)), "0.00") & CHOOSE(INT(LOG10(B16)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| G16 | `=IF(F16<1000, F16, TEXT(F16 / 10^(3 * INT(LOG10(F16)/3)), "0.00") & CHOOSE(INT(LOG10(F16)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| O16 | `=IF(N16<1000, N16, TEXT(N16 / 10^(3 * INT(LOG10(N16)/3)), "0.00") & CHOOSE(INT(LOG10(N16)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| S16 | `=IF(R16<1000, R16, TEXT(R16 / 10^(3 * INT(LOG10(R16)/3)), "0.00") & CHOOSE(INT(LOG10(R16)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| W16 | `=IF(V16<1000, V16, TEXT(V16 / 10^(3 * INT(LOG10(V16)/3)), "0.00") & CHOOSE(INT(LOG10(V16)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AA16 | `=IF(Z16<1000, Z16, TEXT(Z16 / 10^(3 * INT(LOG10(Z16)/3)), "0.00") & CHOOSE(INT(LOG10(Z16)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AE16 | `=IF(AD16<1000, AD16, TEXT(AD16 / 10^(3 * INT(LOG10(AD16)/3)), "0.00") & CHOOSE(INT(LOG10(AD16)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AI16 | `=IF(AH16<1000, AH16, TEXT(AH16 / 10^(3 * INT(LOG10(AH16)/3)), "0.00") & CHOOSE(INT(LOG10(AH16)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AM16 | `=IF(AL16<1000, AL16, TEXT(AL16 / 10^(3 * INT(LOG10(AL16)/3)), "0.00") & CHOOSE(INT(LOG10(AL16)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AQ16 | `=IF(AP16<1000, AP16, TEXT(AP16 / 10^(3 * INT(LOG10(AP16)/3)), "0.00") & CHOOSE(INT(LOG10(AP16)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AU16 | `=IF(AT16<1000, AT16, TEXT(AT16 / 10^(3 * INT(LOG10(AT16)/3)), "0.00") & CHOOSE(INT(LOG10(AT16)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| C17 | `=IF(B17<1000, B17, TEXT(B17 / 10^(3 * INT(LOG10(B17)/3)), "0.00") & CHOOSE(INT(LOG10(B17)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| G17 | `=IF(F17<1000, F17, TEXT(F17 / 10^(3 * INT(LOG10(F17)/3)), "0.00") & CHOOSE(INT(LOG10(F17)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| O17 | `=IF(N17<1000, N17, TEXT(N17 / 10^(3 * INT(LOG10(N17)/3)), "0.00") & CHOOSE(INT(LOG10(N17)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| S17 | `=IF(R17<1000, R17, TEXT(R17 / 10^(3 * INT(LOG10(R17)/3)), "0.00") & CHOOSE(INT(LOG10(R17)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| W17 | `=IF(V17<1000, V17, TEXT(V17 / 10^(3 * INT(LOG10(V17)/3)), "0.00") & CHOOSE(INT(LOG10(V17)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AA17 | `=IF(Z17<1000, Z17, TEXT(Z17 / 10^(3 * INT(LOG10(Z17)/3)), "0.00") & CHOOSE(INT(LOG10(Z17)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AE17 | `=IF(AD17<1000, AD17, TEXT(AD17 / 10^(3 * INT(LOG10(AD17)/3)), "0.00") & CHOOSE(INT(LOG10(AD17)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AI17 | `=IF(AH17<1000, AH17, TEXT(AH17 / 10^(3 * INT(LOG10(AH17)/3)), "0.00") & CHOOSE(INT(LOG10(AH17)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AM17 | `=IF(AL17<1000, AL17, TEXT(AL17 / 10^(3 * INT(LOG10(AL17)/3)), "0.00") & CHOOSE(INT(LOG10(AL17)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AQ17 | `=IF(AP17<1000, AP17, TEXT(AP17 / 10^(3 * INT(LOG10(AP17)/3)), "0.00") & CHOOSE(INT(LOG10(AP17)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AU17 | `=IF(AT17<1000, AT17, TEXT(AT17 / 10^(3 * INT(LOG10(AT17)/3)), "0.00") & CHOOSE(INT(LOG10(AT17)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| C18 | `=IF(B18<1000, B18, TEXT(B18 / 10^(3 * INT(LOG10(B18)/3)), "0.00") & CHOOSE(INT(LOG10(B18)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| G18 | `=IF(F18<1000, F18, TEXT(F18 / 10^(3 * INT(LOG10(F18)/3)), "0.00") & CHOOSE(INT(LOG10(F18)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| O18 | `=IF(N18<1000, N18, TEXT(N18 / 10^(3 * INT(LOG10(N18)/3)), "0.00") & CHOOSE(INT(LOG10(N18)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| S18 | `=IF(R18<1000, R18, TEXT(R18 / 10^(3 * INT(LOG10(R18)/3)), "0.00") & CHOOSE(INT(LOG10(R18)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| W18 | `=IF(V18<1000, V18, TEXT(V18 / 10^(3 * INT(LOG10(V18)/3)), "0.00") & CHOOSE(INT(LOG10(V18)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AA18 | `=IF(Z18<1000, Z18, TEXT(Z18 / 10^(3 * INT(LOG10(Z18)/3)), "0.00") & CHOOSE(INT(LOG10(Z18)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AE18 | `=IF(AD18<1000, AD18, TEXT(AD18 / 10^(3 * INT(LOG10(AD18)/3)), "0.00") & CHOOSE(INT(LOG10(AD18)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AI18 | `=IF(AH18<1000, AH18, TEXT(AH18 / 10^(3 * INT(LOG10(AH18)/3)), "0.00") & CHOOSE(INT(LOG10(AH18)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AM18 | `=IF(AL18<1000, AL18, TEXT(AL18 / 10^(3 * INT(LOG10(AL18)/3)), "0.00") & CHOOSE(INT(LOG10(AL18)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AQ18 | `=IF(AP18<1000, AP18, TEXT(AP18 / 10^(3 * INT(LOG10(AP18)/3)), "0.00") & CHOOSE(INT(LOG10(AP18)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AU18 | `=IF(AT18<1000, AT18, TEXT(AT18 / 10^(3 * INT(LOG10(AT18)/3)), "0.00") & CHOOSE(INT(LOG10(AT18)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| C19 | `=IF(B19<1000, B19, TEXT(B19 / 10^(3 * INT(LOG10(B19)/3)), "0.00") & CHOOSE(INT(LOG10(B19)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| G19 | `=IF(F19<1000, F19, TEXT(F19 / 10^(3 * INT(LOG10(F19)/3)), "0.00") & CHOOSE(INT(LOG10(F19)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| O19 | `=IF(N19<1000, N19, TEXT(N19 / 10^(3 * INT(LOG10(N19)/3)), "0.00") & CHOOSE(INT(LOG10(N19)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| S19 | `=IF(R19<1000, R19, TEXT(R19 / 10^(3 * INT(LOG10(R19)/3)), "0.00") & CHOOSE(INT(LOG10(R19)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| W19 | `=IF(V19<1000, V19, TEXT(V19 / 10^(3 * INT(LOG10(V19)/3)), "0.00") & CHOOSE(INT(LOG10(V19)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AA19 | `=IF(Z19<1000, Z19, TEXT(Z19 / 10^(3 * INT(LOG10(Z19)/3)), "0.00") & CHOOSE(INT(LOG10(Z19)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AE19 | `=IF(AD19<1000, AD19, TEXT(AD19 / 10^(3 * INT(LOG10(AD19)/3)), "0.00") & CHOOSE(INT(LOG10(AD19)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AI19 | `=IF(AH19<1000, AH19, TEXT(AH19 / 10^(3 * INT(LOG10(AH19)/3)), "0.00") & CHOOSE(INT(LOG10(AH19)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AM19 | `=IF(AL19<1000, AL19, TEXT(AL19 / 10^(3 * INT(LOG10(AL19)/3)), "0.00") & CHOOSE(INT(LOG10(AL19)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AQ19 | `=IF(AP19<1000, AP19, TEXT(AP19 / 10^(3 * INT(LOG10(AP19)/3)), "0.00") & CHOOSE(INT(LOG10(AP19)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AU19 | `=IF(AT19<1000, AT19, TEXT(AT19 / 10^(3 * INT(LOG10(AT19)/3)), "0.00") & CHOOSE(INT(LOG10(AT19)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| C20 | `=IF(B20<1000, B20, TEXT(B20 / 10^(3 * INT(LOG10(B20)/3)), "0.00") & CHOOSE(INT(LOG10(B20)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| G20 | `=IF(F20<1000, F20, TEXT(F20 / 10^(3 * INT(LOG10(F20)/3)), "0.00") & CHOOSE(INT(LOG10(F20)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| O20 | `=IF(N20<1000, N20, TEXT(N20 / 10^(3 * INT(LOG10(N20)/3)), "0.00") & CHOOSE(INT(LOG10(N20)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| S20 | `=IF(R20<1000, R20, TEXT(R20 / 10^(3 * INT(LOG10(R20)/3)), "0.00") & CHOOSE(INT(LOG10(R20)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| W20 | `=IF(V20<1000, V20, TEXT(V20 / 10^(3 * INT(LOG10(V20)/3)), "0.00") & CHOOSE(INT(LOG10(V20)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AA20 | `=IF(Z20<1000, Z20, TEXT(Z20 / 10^(3 * INT(LOG10(Z20)/3)), "0.00") & CHOOSE(INT(LOG10(Z20)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AE20 | `=IF(AD20<1000, AD20, TEXT(AD20 / 10^(3 * INT(LOG10(AD20)/3)), "0.00") & CHOOSE(INT(LOG10(AD20)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AI20 | `=IF(AH20<1000, AH20, TEXT(AH20 / 10^(3 * INT(LOG10(AH20)/3)), "0.00") & CHOOSE(INT(LOG10(AH20)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AM20 | `=IF(AL20<1000, AL20, TEXT(AL20 / 10^(3 * INT(LOG10(AL20)/3)), "0.00") & CHOOSE(INT(LOG10(AL20)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AQ20 | `=IF(AP20<1000, AP20, TEXT(AP20 / 10^(3 * INT(LOG10(AP20)/3)), "0.00") & CHOOSE(INT(LOG10(AP20)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AU20 | `=IF(AT20<1000, AT20, TEXT(AT20 / 10^(3 * INT(LOG10(AT20)/3)), "0.00") & CHOOSE(INT(LOG10(AT20)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| C21 | `=IF(B21<1000, B21, TEXT(B21 / 10^(3 * INT(LOG10(B21)/3)), "0.00") & CHOOSE(INT(LOG10(B21)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| G21 | `=IF(F21<1000, F21, TEXT(F21 / 10^(3 * INT(LOG10(F21)/3)), "0.00") & CHOOSE(INT(LOG10(F21)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| O21 | `=IF(N21<1000, N21, TEXT(N21 / 10^(3 * INT(LOG10(N21)/3)), "0.00") & CHOOSE(INT(LOG10(N21)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| S21 | `=IF(R21<1000, R21, TEXT(R21 / 10^(3 * INT(LOG10(R21)/3)), "0.00") & CHOOSE(INT(LOG10(R21)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| W21 | `=IF(V21<1000, V21, TEXT(V21 / 10^(3 * INT(LOG10(V21)/3)), "0.00") & CHOOSE(INT(LOG10(V21)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AA21 | `=IF(Z21<1000, Z21, TEXT(Z21 / 10^(3 * INT(LOG10(Z21)/3)), "0.00") & CHOOSE(INT(LOG10(Z21)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AE21 | `=IF(AD21<1000, AD21, TEXT(AD21 / 10^(3 * INT(LOG10(AD21)/3)), "0.00") & CHOOSE(INT(LOG10(AD21)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AI21 | `=IF(AH21<1000, AH21, TEXT(AH21 / 10^(3 * INT(LOG10(AH21)/3)), "0.00") & CHOOSE(INT(LOG10(AH21)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AM21 | `=IF(AL21<1000, AL21, TEXT(AL21 / 10^(3 * INT(LOG10(AL21)/3)), "0.00") & CHOOSE(INT(LOG10(AL21)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AQ21 | `=IF(AP21<1000, AP21, TEXT(AP21 / 10^(3 * INT(LOG10(AP21)/3)), "0.00") & CHOOSE(INT(LOG10(AP21)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AU21 | `=IF(AT21<1000, AT21, TEXT(AT21 / 10^(3 * INT(LOG10(AT21)/3)), "0.00") & CHOOSE(INT(LOG10(AT21)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| C22 | `=IF(B22<1000, B22, TEXT(B22 / 10^(3 * INT(LOG10(B22)/3)), "0.00") & CHOOSE(INT(LOG10(B22)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| G22 | `=IF(F22<1000, F22, TEXT(F22 / 10^(3 * INT(LOG10(F22)/3)), "0.00") & CHOOSE(INT(LOG10(F22)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| O22 | `=IF(N22<1000, N22, TEXT(N22 / 10^(3 * INT(LOG10(N22)/3)), "0.00") & CHOOSE(INT(LOG10(N22)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| S22 | `=IF(R22<1000, R22, TEXT(R22 / 10^(3 * INT(LOG10(R22)/3)), "0.00") & CHOOSE(INT(LOG10(R22)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| W22 | `=IF(V22<1000, V22, TEXT(V22 / 10^(3 * INT(LOG10(V22)/3)), "0.00") & CHOOSE(INT(LOG10(V22)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AA22 | `=IF(Z22<1000, Z22, TEXT(Z22 / 10^(3 * INT(LOG10(Z22)/3)), "0.00") & CHOOSE(INT(LOG10(Z22)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AE22 | `=IF(AD22<1000, AD22, TEXT(AD22 / 10^(3 * INT(LOG10(AD22)/3)), "0.00") & CHOOSE(INT(LOG10(AD22)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AI22 | `=IF(AH22<1000, AH22, TEXT(AH22 / 10^(3 * INT(LOG10(AH22)/3)), "0.00") & CHOOSE(INT(LOG10(AH22)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AM22 | `=IF(AL22<1000, AL22, TEXT(AL22 / 10^(3 * INT(LOG10(AL22)/3)), "0.00") & CHOOSE(INT(LOG10(AL22)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AQ22 | `=IF(AP22<1000, AP22, TEXT(AP22 / 10^(3 * INT(LOG10(AP22)/3)), "0.00") & CHOOSE(INT(LOG10(AP22)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AU22 | `=IF(AT22<1000, AT22, TEXT(AT22 / 10^(3 * INT(LOG10(AT22)/3)), "0.00") & CHOOSE(INT(LOG10(AT22)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| C23 | `=IF(B23<1000, B23, TEXT(B23 / 10^(3 * INT(LOG10(B23)/3)), "0.00") & CHOOSE(INT(LOG10(B23)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| G23 | `=IF(F23<1000, F23, TEXT(F23 / 10^(3 * INT(LOG10(F23)/3)), "0.00") & CHOOSE(INT(LOG10(F23)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| O23 | `=IF(N23<1000, N23, TEXT(N23 / 10^(3 * INT(LOG10(N23)/3)), "0.00") & CHOOSE(INT(LOG10(N23)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| S23 | `=IF(R23<1000, R23, TEXT(R23 / 10^(3 * INT(LOG10(R23)/3)), "0.00") & CHOOSE(INT(LOG10(R23)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AE23 | `=IF(AD23<1000, AD23, TEXT(AD23 / 10^(3 * INT(LOG10(AD23)/3)), "0.00") & CHOOSE(INT(LOG10(AD23)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AI23 | `=IF(AH23<1000, AH23, TEXT(AH23 / 10^(3 * INT(LOG10(AH23)/3)), "0.00") & CHOOSE(INT(LOG10(AH23)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AM23 | `=IF(AL23<1000, AL23, TEXT(AL23 / 10^(3 * INT(LOG10(AL23)/3)), "0.00") & CHOOSE(INT(LOG10(AL23)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AQ23 | `=IF(AP23<1000, AP23, TEXT(AP23 / 10^(3 * INT(LOG10(AP23)/3)), "0.00") & CHOOSE(INT(LOG10(AP23)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AU23 | `=IF(AT23<1000, AT23, TEXT(AT23 / 10^(3 * INT(LOG10(AT23)/3)), "0.00") & CHOOSE(INT(LOG10(AT23)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| C24 | `=IF(B24<1000, B24, TEXT(B24 / 10^(3 * INT(LOG10(B24)/3)), "0.00") & CHOOSE(INT(LOG10(B24)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| G24 | `=IF(F24<1000, F24, TEXT(F24 / 10^(3 * INT(LOG10(F24)/3)), "0.00") & CHOOSE(INT(LOG10(F24)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| O24 | `=IF(N24<1000, N24, TEXT(N24 / 10^(3 * INT(LOG10(N24)/3)), "0.00") & CHOOSE(INT(LOG10(N24)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| S24 | `=IF(R24<1000, R24, TEXT(R24 / 10^(3 * INT(LOG10(R24)/3)), "0.00") & CHOOSE(INT(LOG10(R24)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AE24 | `=IF(AD24<1000, AD24, TEXT(AD24 / 10^(3 * INT(LOG10(AD24)/3)), "0.00") & CHOOSE(INT(LOG10(AD24)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AI24 | `=IF(AH24<1000, AH24, TEXT(AH24 / 10^(3 * INT(LOG10(AH24)/3)), "0.00") & CHOOSE(INT(LOG10(AH24)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AM24 | `=IF(AL24<1000, AL24, TEXT(AL24 / 10^(3 * INT(LOG10(AL24)/3)), "0.00") & CHOOSE(INT(LOG10(AL24)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AQ24 | `=IF(AP24<1000, AP24, TEXT(AP24 / 10^(3 * INT(LOG10(AP24)/3)), "0.00") & CHOOSE(INT(LOG10(AP24)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AU24 | `=IF(AT24<1000, AT24, TEXT(AT24 / 10^(3 * INT(LOG10(AT24)/3)), "0.00") & CHOOSE(INT(LOG10(AT24)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| C25 | `=IF(B25<1000, B25, TEXT(B25 / 10^(3 * INT(LOG10(B25)/3)), "0.00") & CHOOSE(INT(LOG10(B25)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| G25 | `=IF(F25<1000, F25, TEXT(F25 / 10^(3 * INT(LOG10(F25)/3)), "0.00") & CHOOSE(INT(LOG10(F25)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| O25 | `=IF(N25<1000, N25, TEXT(N25 / 10^(3 * INT(LOG10(N25)/3)), "0.00") & CHOOSE(INT(LOG10(N25)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| S25 | `=IF(R25<1000, R25, TEXT(R25 / 10^(3 * INT(LOG10(R25)/3)), "0.00") & CHOOSE(INT(LOG10(R25)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AE25 | `=IF(AD25<1000, AD25, TEXT(AD25 / 10^(3 * INT(LOG10(AD25)/3)), "0.00") & CHOOSE(INT(LOG10(AD25)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AI25 | `=IF(AH25<1000, AH25, TEXT(AH25 / 10^(3 * INT(LOG10(AH25)/3)), "0.00") & CHOOSE(INT(LOG10(AH25)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AM25 | `=IF(AL25<1000, AL25, TEXT(AL25 / 10^(3 * INT(LOG10(AL25)/3)), "0.00") & CHOOSE(INT(LOG10(AL25)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AQ25 | `=IF(AP25<1000, AP25, TEXT(AP25 / 10^(3 * INT(LOG10(AP25)/3)), "0.00") & CHOOSE(INT(LOG10(AP25)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AU25 | `=IF(AT25<1000, AT25, TEXT(AT25 / 10^(3 * INT(LOG10(AT25)/3)), "0.00") & CHOOSE(INT(LOG10(AT25)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| C26 | `=IF(B26<1000, B26, TEXT(B26 / 10^(3 * INT(LOG10(B26)/3)), "0.00") & CHOOSE(INT(LOG10(B26)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| G26 | `=IF(F26<1000, F26, TEXT(F26 / 10^(3 * INT(LOG10(F26)/3)), "0.00") & CHOOSE(INT(LOG10(F26)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| O26 | `=IF(N26<1000, N26, TEXT(N26 / 10^(3 * INT(LOG10(N26)/3)), "0.00") & CHOOSE(INT(LOG10(N26)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| S26 | `=IF(R26<1000, R26, TEXT(R26 / 10^(3 * INT(LOG10(R26)/3)), "0.00") & CHOOSE(INT(LOG10(R26)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AE26 | `=IF(AD26<1000, AD26, TEXT(AD26 / 10^(3 * INT(LOG10(AD26)/3)), "0.00") & CHOOSE(INT(LOG10(AD26)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AI26 | `=IF(AH26<1000, AH26, TEXT(AH26 / 10^(3 * INT(LOG10(AH26)/3)), "0.00") & CHOOSE(INT(LOG10(AH26)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AM26 | `=IF(AL26<1000, AL26, TEXT(AL26 / 10^(3 * INT(LOG10(AL26)/3)), "0.00") & CHOOSE(INT(LOG10(AL26)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AQ26 | `=IF(AP26<1000, AP26, TEXT(AP26 / 10^(3 * INT(LOG10(AP26)/3)), "0.00") & CHOOSE(INT(LOG10(AP26)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AU26 | `=IF(AT26<1000, AT26, TEXT(AT26 / 10^(3 * INT(LOG10(AT26)/3)), "0.00") & CHOOSE(INT(LOG10(AT26)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| C27 | `=IF(B27<1000, B27, TEXT(B27 / 10^(3 * INT(LOG10(B27)/3)), "0.00") & CHOOSE(INT(LOG10(B27)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| G27 | `=IF(F27<1000, F27, TEXT(F27 / 10^(3 * INT(LOG10(F27)/3)), "0.00") & CHOOSE(INT(LOG10(F27)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| O27 | `=IF(N27<1000, N27, TEXT(N27 / 10^(3 * INT(LOG10(N27)/3)), "0.00") & CHOOSE(INT(LOG10(N27)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| S27 | `=IF(R27<1000, R27, TEXT(R27 / 10^(3 * INT(LOG10(R27)/3)), "0.00") & CHOOSE(INT(LOG10(R27)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AE27 | `=IF(AD27<1000, AD27, TEXT(AD27 / 10^(3 * INT(LOG10(AD27)/3)), "0.00") & CHOOSE(INT(LOG10(AD27)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AI27 | `=IF(AH27<1000, AH27, TEXT(AH27 / 10^(3 * INT(LOG10(AH27)/3)), "0.00") & CHOOSE(INT(LOG10(AH27)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AM27 | `=IF(AL27<1000, AL27, TEXT(AL27 / 10^(3 * INT(LOG10(AL27)/3)), "0.00") & CHOOSE(INT(LOG10(AL27)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AQ27 | `=IF(AP27<1000, AP27, TEXT(AP27 / 10^(3 * INT(LOG10(AP27)/3)), "0.00") & CHOOSE(INT(LOG10(AP27)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AU27 | `=IF(AT27<1000, AT27, TEXT(AT27 / 10^(3 * INT(LOG10(AT27)/3)), "0.00") & CHOOSE(INT(LOG10(AT27)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| C28 | `=IF(B28<1000, B28, TEXT(B28 / 10^(3 * INT(LOG10(B28)/3)), "0.00") & CHOOSE(INT(LOG10(B28)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| G28 | `=IF(F28<1000, F28, TEXT(F28 / 10^(3 * INT(LOG10(F28)/3)), "0.00") & CHOOSE(INT(LOG10(F28)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| O28 | `=IF(N28<1000, N28, TEXT(N28 / 10^(3 * INT(LOG10(N28)/3)), "0.00") & CHOOSE(INT(LOG10(N28)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| S28 | `=IF(R28<1000, R28, TEXT(R28 / 10^(3 * INT(LOG10(R28)/3)), "0.00") & CHOOSE(INT(LOG10(R28)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AE28 | `=IF(AD28<1000, AD28, TEXT(AD28 / 10^(3 * INT(LOG10(AD28)/3)), "0.00") & CHOOSE(INT(LOG10(AD28)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AI28 | `=IF(AH28<1000, AH28, TEXT(AH28 / 10^(3 * INT(LOG10(AH28)/3)), "0.00") & CHOOSE(INT(LOG10(AH28)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AQ28 | `=IF(AP28<1000, AP28, TEXT(AP28 / 10^(3 * INT(LOG10(AP28)/3)), "0.00") & CHOOSE(INT(LOG10(AP28)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| C29 | `=IF(B29<1000, B29, TEXT(B29 / 10^(3 * INT(LOG10(B29)/3)), "0.00") & CHOOSE(INT(LOG10(B29)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| G29 | `=IF(F29<1000, F29, TEXT(F29 / 10^(3 * INT(LOG10(F29)/3)), "0.00") & CHOOSE(INT(LOG10(F29)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| O29 | `=IF(N29<1000, N29, TEXT(N29 / 10^(3 * INT(LOG10(N29)/3)), "0.00") & CHOOSE(INT(LOG10(N29)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| S29 | `=IF(R29<1000, R29, TEXT(R29 / 10^(3 * INT(LOG10(R29)/3)), "0.00") & CHOOSE(INT(LOG10(R29)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AE29 | `=IF(AD29<1000, AD29, TEXT(AD29 / 10^(3 * INT(LOG10(AD29)/3)), "0.00") & CHOOSE(INT(LOG10(AD29)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AI29 | `=IF(AH29<1000, AH29, TEXT(AH29 / 10^(3 * INT(LOG10(AH29)/3)), "0.00") & CHOOSE(INT(LOG10(AH29)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AQ29 | `=IF(AP29<1000, AP29, TEXT(AP29 / 10^(3 * INT(LOG10(AP29)/3)), "0.00") & CHOOSE(INT(LOG10(AP29)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| C30 | `=IF(B30<1000, B30, TEXT(B30 / 10^(3 * INT(LOG10(B30)/3)), "0.00") & CHOOSE(INT(LOG10(B30)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| G30 | `=IF(F30<1000, F30, TEXT(F30 / 10^(3 * INT(LOG10(F30)/3)), "0.00") & CHOOSE(INT(LOG10(F30)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| O30 | `=IF(N30<1000, N30, TEXT(N30 / 10^(3 * INT(LOG10(N30)/3)), "0.00") & CHOOSE(INT(LOG10(N30)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| S30 | `=IF(R30<1000, R30, TEXT(R30 / 10^(3 * INT(LOG10(R30)/3)), "0.00") & CHOOSE(INT(LOG10(R30)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AE30 | `=IF(AD30<1000, AD30, TEXT(AD30 / 10^(3 * INT(LOG10(AD30)/3)), "0.00") & CHOOSE(INT(LOG10(AD30)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AI30 | `=IF(AH30<1000, AH30, TEXT(AH30 / 10^(3 * INT(LOG10(AH30)/3)), "0.00") & CHOOSE(INT(LOG10(AH30)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AQ30 | `=IF(AP30<1000, AP30, TEXT(AP30 / 10^(3 * INT(LOG10(AP30)/3)), "0.00") & CHOOSE(INT(LOG10(AP30)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| C31 | `=IF(B31<1000, B31, TEXT(B31 / 10^(3 * INT(LOG10(B31)/3)), "0.00") & CHOOSE(INT(LOG10(B31)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| G31 | `=IF(F31<1000, F31, TEXT(F31 / 10^(3 * INT(LOG10(F31)/3)), "0.00") & CHOOSE(INT(LOG10(F31)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| O31 | `=IF(N31<1000, N31, TEXT(N31 / 10^(3 * INT(LOG10(N31)/3)), "0.00") & CHOOSE(INT(LOG10(N31)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| S31 | `=IF(R31<1000, R31, TEXT(R31 / 10^(3 * INT(LOG10(R31)/3)), "0.00") & CHOOSE(INT(LOG10(R31)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AE31 | `=IF(AD31<1000, AD31, TEXT(AD31 / 10^(3 * INT(LOG10(AD31)/3)), "0.00") & CHOOSE(INT(LOG10(AD31)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AI31 | `=IF(AH31<1000, AH31, TEXT(AH31 / 10^(3 * INT(LOG10(AH31)/3)), "0.00") & CHOOSE(INT(LOG10(AH31)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AQ31 | `=IF(AP31<1000, AP31, TEXT(AP31 / 10^(3 * INT(LOG10(AP31)/3)), "0.00") & CHOOSE(INT(LOG10(AP31)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| C32 | `=IF(B32<1000, B32, TEXT(B32 / 10^(3 * INT(LOG10(B32)/3)), "0.00") & CHOOSE(INT(LOG10(B32)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| G32 | `=IF(F32<1000, F32, TEXT(F32 / 10^(3 * INT(LOG10(F32)/3)), "0.00") & CHOOSE(INT(LOG10(F32)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| O32 | `=IF(N32<1000, N32, TEXT(N32 / 10^(3 * INT(LOG10(N32)/3)), "0.00") & CHOOSE(INT(LOG10(N32)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| S32 | `=IF(R32<1000, R32, TEXT(R32 / 10^(3 * INT(LOG10(R32)/3)), "0.00") & CHOOSE(INT(LOG10(R32)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AE32 | `=IF(AD32<1000, AD32, TEXT(AD32 / 10^(3 * INT(LOG10(AD32)/3)), "0.00") & CHOOSE(INT(LOG10(AD32)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AI32 | `=IF(AH32<1000, AH32, TEXT(AH32 / 10^(3 * INT(LOG10(AH32)/3)), "0.00") & CHOOSE(INT(LOG10(AH32)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AQ32 | `=IF(AP32<1000, AP32, TEXT(AP32 / 10^(3 * INT(LOG10(AP32)/3)), "0.00") & CHOOSE(INT(LOG10(AP32)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| C33 | `=IF(B33<1000, B33, TEXT(B33 / 10^(3 * INT(LOG10(B33)/3)), "0.00") & CHOOSE(INT(LOG10(B33)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| G33 | `=IF(F33<1000, F33, TEXT(F33 / 10^(3 * INT(LOG10(F33)/3)), "0.00") & CHOOSE(INT(LOG10(F33)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| O33 | `=IF(N33<1000, N33, TEXT(N33 / 10^(3 * INT(LOG10(N33)/3)), "0.00") & CHOOSE(INT(LOG10(N33)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| C34 | `=IF(B34<1000, B34, TEXT(B34 / 10^(3 * INT(LOG10(B34)/3)), "0.00") & CHOOSE(INT(LOG10(B34)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| G34 | `=IF(F34<1000, F34, TEXT(F34 / 10^(3 * INT(LOG10(F34)/3)), "0.00") & CHOOSE(INT(LOG10(F34)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| O34 | `=IF(N34<1000, N34, TEXT(N34 / 10^(3 * INT(LOG10(N34)/3)), "0.00") & CHOOSE(INT(LOG10(N34)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| C35 | `=IF(B35<1000, B35, TEXT(B35 / 10^(3 * INT(LOG10(B35)/3)), "0.00") & CHOOSE(INT(LOG10(B35)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| G35 | `=IF(F35<1000, F35, TEXT(F35 / 10^(3 * INT(LOG10(F35)/3)), "0.00") & CHOOSE(INT(LOG10(F35)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| O35 | `=IF(N35<1000, N35, TEXT(N35 / 10^(3 * INT(LOG10(N35)/3)), "0.00") & CHOOSE(INT(LOG10(N35)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| C36 | `=IF(B36<1000, B36, TEXT(B36 / 10^(3 * INT(LOG10(B36)/3)), "0.00") & CHOOSE(INT(LOG10(B36)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| G36 | `=IF(F36<1000, F36, TEXT(F36 / 10^(3 * INT(LOG10(F36)/3)), "0.00") & CHOOSE(INT(LOG10(F36)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| O36 | `=IF(N36<1000, N36, TEXT(N36 / 10^(3 * INT(LOG10(N36)/3)), "0.00") & CHOOSE(INT(LOG10(N36)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| C37 | `=IF(B37<1000, B37, TEXT(B37 / 10^(3 * INT(LOG10(B37)/3)), "0.00") & CHOOSE(INT(LOG10(B37)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| G37 | `=IF(F37<1000, F37, TEXT(F37 / 10^(3 * INT(LOG10(F37)/3)), "0.00") & CHOOSE(INT(LOG10(F37)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| O37 | `=IF(N37<1000, N37, TEXT(N37 / 10^(3 * INT(LOG10(N37)/3)), "0.00") & CHOOSE(INT(LOG10(N37)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| C38 | `=IF(B38<1000, B38, TEXT(B38 / 10^(3 * INT(LOG10(B38)/3)), "0.00") & CHOOSE(INT(LOG10(B38)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| G38 | `=IF(F38<1000, F38, TEXT(F38 / 10^(3 * INT(LOG10(F38)/3)), "0.00") & CHOOSE(INT(LOG10(F38)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| O38 | `=IF(N38<1000, N38, TEXT(N38 / 10^(3 * INT(LOG10(N38)/3)), "0.00") & CHOOSE(INT(LOG10(N38)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| C39 | `=IF(B39<1000, B39, TEXT(B39 / 10^(3 * INT(LOG10(B39)/3)), "0.00") & CHOOSE(INT(LOG10(B39)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| G39 | `=IF(F39<1000, F39, TEXT(F39 / 10^(3 * INT(LOG10(F39)/3)), "0.00") & CHOOSE(INT(LOG10(F39)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| O39 | `=IF(N39<1000, N39, TEXT(N39 / 10^(3 * INT(LOG10(N39)/3)), "0.00") & CHOOSE(INT(LOG10(N39)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| C40 | `=IF(B40<1000, B40, TEXT(B40 / 10^(3 * INT(LOG10(B40)/3)), "0.00") & CHOOSE(INT(LOG10(B40)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| G40 | `=IF(F40<1000, F40, TEXT(F40 / 10^(3 * INT(LOG10(F40)/3)), "0.00") & CHOOSE(INT(LOG10(F40)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| O40 | `=IF(N40<1000, N40, TEXT(N40 / 10^(3 * INT(LOG10(N40)/3)), "0.00") & CHOOSE(INT(LOG10(N40)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| C41 | `=IF(B41<1000, B41, TEXT(B41 / 10^(3 * INT(LOG10(B41)/3)), "0.00") & CHOOSE(INT(LOG10(B41)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| G41 | `=IF(F41<1000, F41, TEXT(F41 / 10^(3 * INT(LOG10(F41)/3)), "0.00") & CHOOSE(INT(LOG10(F41)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| O41 | `=IF(N41<1000, N41, TEXT(N41 / 10^(3 * INT(LOG10(N41)/3)), "0.00") & CHOOSE(INT(LOG10(N41)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| C42 | `=IF(B42<1000, B42, TEXT(B42 / 10^(3 * INT(LOG10(B42)/3)), "0.00") & CHOOSE(INT(LOG10(B42)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| G42 | `=IF(F42<1000, F42, TEXT(F42 / 10^(3 * INT(LOG10(F42)/3)), "0.00") & CHOOSE(INT(LOG10(F42)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| O42 | `=IF(N42<1000, N42, TEXT(N42 / 10^(3 * INT(LOG10(N42)/3)), "0.00") & CHOOSE(INT(LOG10(N42)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| C43 | `=IF(B43<1000, B43, TEXT(B43 / 10^(3 * INT(LOG10(B43)/3)), "0.00") & CHOOSE(INT(LOG10(B43)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| G43 | `=IF(F43<1000, F43, TEXT(F43 / 10^(3 * INT(LOG10(F43)/3)), "0.00") & CHOOSE(INT(LOG10(F43)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| C44 | `=IF(B44<1000, B44, TEXT(B44 / 10^(3 * INT(LOG10(B44)/3)), "0.00") & CHOOSE(INT(LOG10(B44)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| G44 | `=IF(F44<1000, F44, TEXT(F44 / 10^(3 * INT(LOG10(F44)/3)), "0.00") & CHOOSE(INT(LOG10(F44)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| C45 | `=IF(B45<1000, B45, TEXT(B45 / 10^(3 * INT(LOG10(B45)/3)), "0.00") & CHOOSE(INT(LOG10(B45)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| G45 | `=IF(F45<1000, F45, TEXT(F45 / 10^(3 * INT(LOG10(F45)/3)), "0.00") & CHOOSE(INT(LOG10(F45)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| C46 | `=IF(B46<1000, B46, TEXT(B46 / 10^(3 * INT(LOG10(B46)/3)), "0.00") & CHOOSE(INT(LOG10(B46)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| G46 | `=IF(F46<1000, F46, TEXT(F46 / 10^(3 * INT(LOG10(F46)/3)), "0.00") & CHOOSE(INT(LOG10(F46)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| C47 | `=IF(B47<1000, B47, TEXT(B47 / 10^(3 * INT(LOG10(B47)/3)), "0.00") & CHOOSE(INT(LOG10(B47)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| G47 | `=IF(F47<1000, F47, TEXT(F47 / 10^(3 * INT(LOG10(F47)/3)), "0.00") & CHOOSE(INT(LOG10(F47)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| C48 | `=IF(B48<1000, B48, TEXT(B48 / 10^(3 * INT(LOG10(B48)/3)), "0.00") & CHOOSE(INT(LOG10(B48)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| G48 | `=IF(F48<1000, F48, TEXT(F48 / 10^(3 * INT(LOG10(F48)/3)), "0.00") & CHOOSE(INT(LOG10(F48)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| C49 | `=IF(B49<1000, B49, TEXT(B49 / 10^(3 * INT(LOG10(B49)/3)), "0.00") & CHOOSE(INT(LOG10(B49)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| G49 | `=IF(F49<1000, F49, TEXT(F49 / 10^(3 * INT(LOG10(F49)/3)), "0.00") & CHOOSE(INT(LOG10(F49)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| C50 | `=IF(B50<1000, B50, TEXT(B50 / 10^(3 * INT(LOG10(B50)/3)), "0.00") & CHOOSE(INT(LOG10(B50)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| G50 | `=IF(F50<1000, F50, TEXT(F50 / 10^(3 * INT(LOG10(F50)/3)), "0.00") & CHOOSE(INT(LOG10(F50)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| C51 | `=IF(B51<1000, B51, TEXT(B51 / 10^(3 * INT(LOG10(B51)/3)), "0.00") & CHOOSE(INT(LOG10(B51)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| G51 | `=IF(F51<1000, F51, TEXT(F51 / 10^(3 * INT(LOG10(F51)/3)), "0.00") & CHOOSE(INT(LOG10(F51)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| C52 | `=IF(B52<1000, B52, TEXT(B52 / 10^(3 * INT(LOG10(B52)/3)), "0.00") & CHOOSE(INT(LOG10(B52)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| G52 | `=IF(F52<1000, F52, TEXT(F52 / 10^(3 * INT(LOG10(F52)/3)), "0.00") & CHOOSE(INT(LOG10(F52)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| C56 | `=IF(B56<1000, B56,   TEXT(B56 / 10^(3 * INT(LOG10(B56)/3)), "0.00") &   CHOOSE(INT(LOG10(B56)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| G56 | `=IF(F56<1000, F56,   TEXT(F56 / 10^(3 * INT(LOG10(F56)/3)), "0.00") &   CHOOSE(INT(LOG10(F56)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| K56 | `=IF(J56<1000, J56,   TEXT(J56 / 10^(3 * INT(LOG10(J56)/3)), "0.00") &   CHOOSE(INT(LOG10(J56)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| O56 | `=IF(N56<1000, N56,   TEXT(N56 / 10^(3 * INT(LOG10(N56)/3)), "0.00") &   CHOOSE(INT(LOG10(N56)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| S56 | `=IF(R56<1000, R56,   TEXT(R56 / 10^(3 * INT(LOG10(R56)/3)), "0.00") &   CHOOSE(INT(LOG10(R56)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| W56 | `=IF(V56<1000, V56,   TEXT(V56 / 10^(3 * INT(LOG10(V56)/3)), "0.00") &   CHOOSE(INT(LOG10(V56)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AA56 | `=IF(Z56<1000, Z56,   TEXT(Z56 / 10^(3 * INT(LOG10(Z56)/3)), "0.00") &   CHOOSE(INT(LOG10(Z56)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| C57 | `=IF(B57<1000, B57, TEXT(B57 / 10^(3 * INT(LOG10(B57)/3)), "0.00") & CHOOSE(INT(LOG10(B57)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| G57 | `=IF(F57<1000, F57, TEXT(F57 / 10^(3 * INT(LOG10(F57)/3)), "0.00") & CHOOSE(INT(LOG10(F57)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| K57 | `=IF(J57<1000, J57, TEXT(J57 / 10^(3 * INT(LOG10(J57)/3)), "0.00") & CHOOSE(INT(LOG10(J57)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| O57 | `=IF(N57<1000, N57, TEXT(N57 / 10^(3 * INT(LOG10(N57)/3)), "0.00") & CHOOSE(INT(LOG10(N57)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| S57 | `=IF(R57<1000, R57, TEXT(R57 / 10^(3 * INT(LOG10(R57)/3)), "0.00") & CHOOSE(INT(LOG10(R57)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| W57 | `=IF(V57<1000, V57, TEXT(V57 / 10^(3 * INT(LOG10(V57)/3)), "0.00") & CHOOSE(INT(LOG10(V57)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AA57 | `=IF(Z57<1000, Z57, TEXT(Z57 / 10^(3 * INT(LOG10(Z57)/3)), "0.00") & CHOOSE(INT(LOG10(Z57)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| C58 | `=IF(B58<1000, B58, TEXT(B58 / 10^(3 * INT(LOG10(B58)/3)), "0.00") & CHOOSE(INT(LOG10(B58)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| G58 | `=IF(F58<1000, F58, TEXT(F58 / 10^(3 * INT(LOG10(F58)/3)), "0.00") & CHOOSE(INT(LOG10(F58)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| K58 | `=IF(J58<1000, J58, TEXT(J58 / 10^(3 * INT(LOG10(J58)/3)), "0.00") & CHOOSE(INT(LOG10(J58)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| O58 | `=IF(N58<1000, N58, TEXT(N58 / 10^(3 * INT(LOG10(N58)/3)), "0.00") & CHOOSE(INT(LOG10(N58)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| S58 | `=IF(R58<1000, R58, TEXT(R58 / 10^(3 * INT(LOG10(R58)/3)), "0.00") & CHOOSE(INT(LOG10(R58)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| W58 | `=IF(V58<1000, V58, TEXT(V58 / 10^(3 * INT(LOG10(V58)/3)), "0.00") & CHOOSE(INT(LOG10(V58)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AA58 | `=IF(Z58<1000, Z58, TEXT(Z58 / 10^(3 * INT(LOG10(Z58)/3)), "0.00") & CHOOSE(INT(LOG10(Z58)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| C59 | `=IF(B59<1000, B59, TEXT(B59 / 10^(3 * INT(LOG10(B59)/3)), "0.00") & CHOOSE(INT(LOG10(B59)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| G59 | `=IF(F59<1000, F59, TEXT(F59 / 10^(3 * INT(LOG10(F59)/3)), "0.00") & CHOOSE(INT(LOG10(F59)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| K59 | `=IF(J59<1000, J59, TEXT(J59 / 10^(3 * INT(LOG10(J59)/3)), "0.00") & CHOOSE(INT(LOG10(J59)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| O59 | `=IF(N59<1000, N59, TEXT(N59 / 10^(3 * INT(LOG10(N59)/3)), "0.00") & CHOOSE(INT(LOG10(N59)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| S59 | `=IF(R59<1000, R59, TEXT(R59 / 10^(3 * INT(LOG10(R59)/3)), "0.00") & CHOOSE(INT(LOG10(R59)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| W59 | `=IF(V59<1000, V59, TEXT(V59 / 10^(3 * INT(LOG10(V59)/3)), "0.00") & CHOOSE(INT(LOG10(V59)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AA59 | `=IF(Z59<1000, Z59, TEXT(Z59 / 10^(3 * INT(LOG10(Z59)/3)), "0.00") & CHOOSE(INT(LOG10(Z59)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| C60 | `=IF(B60<1000, B60, TEXT(B60 / 10^(3 * INT(LOG10(B60)/3)), "0.00") & CHOOSE(INT(LOG10(B60)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| G60 | `=IF(F60<1000, F60, TEXT(F60 / 10^(3 * INT(LOG10(F60)/3)), "0.00") & CHOOSE(INT(LOG10(F60)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| K60 | `=IF(J60<1000, J60, TEXT(J60 / 10^(3 * INT(LOG10(J60)/3)), "0.00") & CHOOSE(INT(LOG10(J60)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| O60 | `=IF(N60<1000, N60, TEXT(N60 / 10^(3 * INT(LOG10(N60)/3)), "0.00") & CHOOSE(INT(LOG10(N60)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| S60 | `=IF(R60<1000, R60, TEXT(R60 / 10^(3 * INT(LOG10(R60)/3)), "0.00") & CHOOSE(INT(LOG10(R60)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| W60 | `=IF(V60<1000, V60, TEXT(V60 / 10^(3 * INT(LOG10(V60)/3)), "0.00") & CHOOSE(INT(LOG10(V60)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AA60 | `=IF(Z60<1000, Z60, TEXT(Z60 / 10^(3 * INT(LOG10(Z60)/3)), "0.00") & CHOOSE(INT(LOG10(Z60)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| C61 | `=IF(B61<1000, B61, TEXT(B61 / 10^(3 * INT(LOG10(B61)/3)), "0.00") & CHOOSE(INT(LOG10(B61)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| K61 | `=IF(J61<1000, J61, TEXT(J61 / 10^(3 * INT(LOG10(J61)/3)), "0.00") & CHOOSE(INT(LOG10(J61)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| O61 | `=IF(N61<1000, N61, TEXT(N61 / 10^(3 * INT(LOG10(N61)/3)), "0.00") & CHOOSE(INT(LOG10(N61)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| S61 | `=IF(R61<1000, R61, TEXT(R61 / 10^(3 * INT(LOG10(R61)/3)), "0.00") & CHOOSE(INT(LOG10(R61)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| W61 | `=IF(V61<1000, V61, TEXT(V61 / 10^(3 * INT(LOG10(V61)/3)), "0.00") & CHOOSE(INT(LOG10(V61)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AA61 | `=IF(Z61<1000, Z61, TEXT(Z61 / 10^(3 * INT(LOG10(Z61)/3)), "0.00") & CHOOSE(INT(LOG10(Z61)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| C62 | `=IF(B62<1000, B62, TEXT(B62 / 10^(3 * INT(LOG10(B62)/3)), "0.00") & CHOOSE(INT(LOG10(B62)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| K62 | `=IF(J62<1000, J62, TEXT(J62 / 10^(3 * INT(LOG10(J62)/3)), "0.00") & CHOOSE(INT(LOG10(J62)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| O62 | `=IF(N62<1000, N62, TEXT(N62 / 10^(3 * INT(LOG10(N62)/3)), "0.00") & CHOOSE(INT(LOG10(N62)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| S62 | `=IF(R62<1000, R62, TEXT(R62 / 10^(3 * INT(LOG10(R62)/3)), "0.00") & CHOOSE(INT(LOG10(R62)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| W62 | `=IF(V62<1000, V62, TEXT(V62 / 10^(3 * INT(LOG10(V62)/3)), "0.00") & CHOOSE(INT(LOG10(V62)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AA62 | `=IF(Z62<1000, Z62, TEXT(Z62 / 10^(3 * INT(LOG10(Z62)/3)), "0.00") & CHOOSE(INT(LOG10(Z62)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| C63 | `=IF(B63<1000, B63, TEXT(B63 / 10^(3 * INT(LOG10(B63)/3)), "0.00") & CHOOSE(INT(LOG10(B63)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| K63 | `=IF(J63<1000, J63, TEXT(J63 / 10^(3 * INT(LOG10(J63)/3)), "0.00") & CHOOSE(INT(LOG10(J63)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| O63 | `=IF(N63<1000, N63, TEXT(N63 / 10^(3 * INT(LOG10(N63)/3)), "0.00") & CHOOSE(INT(LOG10(N63)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| S63 | `=IF(R63<1000, R63, TEXT(R63 / 10^(3 * INT(LOG10(R63)/3)), "0.00") & CHOOSE(INT(LOG10(R63)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| W63 | `=IF(V63<1000, V63, TEXT(V63 / 10^(3 * INT(LOG10(V63)/3)), "0.00") & CHOOSE(INT(LOG10(V63)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AA63 | `=IF(Z63<1000, Z63, TEXT(Z63 / 10^(3 * INT(LOG10(Z63)/3)), "0.00") & CHOOSE(INT(LOG10(Z63)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| C64 | `=IF(B64<1000, B64, TEXT(B64 / 10^(3 * INT(LOG10(B64)/3)), "0.00") & CHOOSE(INT(LOG10(B64)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| K64 | `=IF(J64<1000, J64, TEXT(J64 / 10^(3 * INT(LOG10(J64)/3)), "0.00") & CHOOSE(INT(LOG10(J64)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| O64 | `=IF(N64<1000, N64, TEXT(N64 / 10^(3 * INT(LOG10(N64)/3)), "0.00") & CHOOSE(INT(LOG10(N64)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| S64 | `=IF(R64<1000, R64, TEXT(R64 / 10^(3 * INT(LOG10(R64)/3)), "0.00") & CHOOSE(INT(LOG10(R64)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| W64 | `=IF(V64<1000, V64, TEXT(V64 / 10^(3 * INT(LOG10(V64)/3)), "0.00") & CHOOSE(INT(LOG10(V64)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AA64 | `=IF(Z64<1000, Z64, TEXT(Z64 / 10^(3 * INT(LOG10(Z64)/3)), "0.00") & CHOOSE(INT(LOG10(Z64)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| C65 | `=IF(B65<1000, B65, TEXT(B65 / 10^(3 * INT(LOG10(B65)/3)), "0.00") & CHOOSE(INT(LOG10(B65)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| K65 | `=IF(J65<1000, J65, TEXT(J65 / 10^(3 * INT(LOG10(J65)/3)), "0.00") & CHOOSE(INT(LOG10(J65)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| O65 | `=IF(N65<1000, N65, TEXT(N65 / 10^(3 * INT(LOG10(N65)/3)), "0.00") & CHOOSE(INT(LOG10(N65)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| S65 | `=IF(R65<1000, R65, TEXT(R65 / 10^(3 * INT(LOG10(R65)/3)), "0.00") & CHOOSE(INT(LOG10(R65)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| W65 | `=IF(V65<1000, V65, TEXT(V65 / 10^(3 * INT(LOG10(V65)/3)), "0.00") & CHOOSE(INT(LOG10(V65)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AA65 | `=IF(Z65<1000, Z65, TEXT(Z65 / 10^(3 * INT(LOG10(Z65)/3)), "0.00") & CHOOSE(INT(LOG10(Z65)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| K66 | `=IF(J66<1000, J66, TEXT(J66 / 10^(3 * INT(LOG10(J66)/3)), "0.00") & CHOOSE(INT(LOG10(J66)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| O66 | `=IF(N66<1000, N66, TEXT(N66 / 10^(3 * INT(LOG10(N66)/3)), "0.00") & CHOOSE(INT(LOG10(N66)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| S66 | `=IF(R66<1000, R66, TEXT(R66 / 10^(3 * INT(LOG10(R66)/3)), "0.00") & CHOOSE(INT(LOG10(R66)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| W66 | `=IF(V66<1000, V66, TEXT(V66 / 10^(3 * INT(LOG10(V66)/3)), "0.00") & CHOOSE(INT(LOG10(V66)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AA66 | `=IF(Z66<1000, Z66, TEXT(Z66 / 10^(3 * INT(LOG10(Z66)/3)), "0.00") & CHOOSE(INT(LOG10(Z66)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| K67 | `=IF(J67<1000, J67, TEXT(J67 / 10^(3 * INT(LOG10(J67)/3)), "0.00") & CHOOSE(INT(LOG10(J67)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| O67 | `=IF(N67<1000, N67, TEXT(N67 / 10^(3 * INT(LOG10(N67)/3)), "0.00") & CHOOSE(INT(LOG10(N67)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| S67 | `=IF(R67<1000, R67, TEXT(R67 / 10^(3 * INT(LOG10(R67)/3)), "0.00") & CHOOSE(INT(LOG10(R67)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| W67 | `=IF(V67<1000, V67, TEXT(V67 / 10^(3 * INT(LOG10(V67)/3)), "0.00") & CHOOSE(INT(LOG10(V67)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AA67 | `=IF(Z67<1000, Z67, TEXT(Z67 / 10^(3 * INT(LOG10(Z67)/3)), "0.00") & CHOOSE(INT(LOG10(Z67)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| K68 | `=IF(J68<1000, J68, TEXT(J68 / 10^(3 * INT(LOG10(J68)/3)), "0.00") & CHOOSE(INT(LOG10(J68)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| O68 | `=IF(N68<1000, N68, TEXT(N68 / 10^(3 * INT(LOG10(N68)/3)), "0.00") & CHOOSE(INT(LOG10(N68)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| S68 | `=IF(R68<1000, R68, TEXT(R68 / 10^(3 * INT(LOG10(R68)/3)), "0.00") & CHOOSE(INT(LOG10(R68)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| W68 | `=IF(V68<1000, V68, TEXT(V68 / 10^(3 * INT(LOG10(V68)/3)), "0.00") & CHOOSE(INT(LOG10(V68)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AA68 | `=IF(Z68<1000, Z68, TEXT(Z68 / 10^(3 * INT(LOG10(Z68)/3)), "0.00") & CHOOSE(INT(LOG10(Z68)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| K69 | `=IF(J69<1000, J69, TEXT(J69 / 10^(3 * INT(LOG10(J69)/3)), "0.00") & CHOOSE(INT(LOG10(J69)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| O69 | `=IF(N69<1000, N69, TEXT(N69 / 10^(3 * INT(LOG10(N69)/3)), "0.00") & CHOOSE(INT(LOG10(N69)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| S69 | `=IF(R69<1000, R69, TEXT(R69 / 10^(3 * INT(LOG10(R69)/3)), "0.00") & CHOOSE(INT(LOG10(R69)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| W69 | `=IF(V69<1000, V69, TEXT(V69 / 10^(3 * INT(LOG10(V69)/3)), "0.00") & CHOOSE(INT(LOG10(V69)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AA69 | `=IF(Z69<1000, Z69, TEXT(Z69 / 10^(3 * INT(LOG10(Z69)/3)), "0.00") & CHOOSE(INT(LOG10(Z69)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| K70 | `=IF(J70<1000, J70, TEXT(J70 / 10^(3 * INT(LOG10(J70)/3)), "0.00") & CHOOSE(INT(LOG10(J70)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| O70 | `=IF(N70<1000, N70, TEXT(N70 / 10^(3 * INT(LOG10(N70)/3)), "0.00") & CHOOSE(INT(LOG10(N70)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| S70 | `=IF(R70<1000, R70, TEXT(R70 / 10^(3 * INT(LOG10(R70)/3)), "0.00") & CHOOSE(INT(LOG10(R70)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| W70 | `=IF(V70<1000, V70, TEXT(V70 / 10^(3 * INT(LOG10(V70)/3)), "0.00") & CHOOSE(INT(LOG10(V70)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AA70 | `=IF(Z70<1000, Z70, TEXT(Z70 / 10^(3 * INT(LOG10(Z70)/3)), "0.00") & CHOOSE(INT(LOG10(Z70)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| K71 | `=IF(J71<1000, J71, TEXT(J71 / 10^(3 * INT(LOG10(J71)/3)), "0.00") & CHOOSE(INT(LOG10(J71)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| O71 | `=IF(N71<1000, N71, TEXT(N71 / 10^(3 * INT(LOG10(N71)/3)), "0.00") & CHOOSE(INT(LOG10(N71)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| S71 | `=IF(R71<1000, R71, TEXT(R71 / 10^(3 * INT(LOG10(R71)/3)), "0.00") & CHOOSE(INT(LOG10(R71)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| W71 | `=IF(V71<1000, V71, TEXT(V71 / 10^(3 * INT(LOG10(V71)/3)), "0.00") & CHOOSE(INT(LOG10(V71)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AA71 | `=IF(Z71<1000, Z71, TEXT(Z71 / 10^(3 * INT(LOG10(Z71)/3)), "0.00") & CHOOSE(INT(LOG10(Z71)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| K72 | `=IF(J72<1000, J72, TEXT(J72 / 10^(3 * INT(LOG10(J72)/3)), "0.00") & CHOOSE(INT(LOG10(J72)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| O72 | `=IF(N72<1000, N72, TEXT(N72 / 10^(3 * INT(LOG10(N72)/3)), "0.00") & CHOOSE(INT(LOG10(N72)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| S72 | `=IF(R72<1000, R72, TEXT(R72 / 10^(3 * INT(LOG10(R72)/3)), "0.00") & CHOOSE(INT(LOG10(R72)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| W72 | `=IF(V72<1000, V72, TEXT(V72 / 10^(3 * INT(LOG10(V72)/3)), "0.00") & CHOOSE(INT(LOG10(V72)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AA72 | `=IF(Z72<1000, Z72, TEXT(Z72 / 10^(3 * INT(LOG10(Z72)/3)), "0.00") & CHOOSE(INT(LOG10(Z72)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| K73 | `=IF(J73<1000, J73, TEXT(J73 / 10^(3 * INT(LOG10(J73)/3)), "0.00") & CHOOSE(INT(LOG10(J73)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| O73 | `=IF(N73<1000, N73, TEXT(N73 / 10^(3 * INT(LOG10(N73)/3)), "0.00") & CHOOSE(INT(LOG10(N73)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| S73 | `=IF(R73<1000, R73, TEXT(R73 / 10^(3 * INT(LOG10(R73)/3)), "0.00") & CHOOSE(INT(LOG10(R73)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| W73 | `=IF(V73<1000, V73, TEXT(V73 / 10^(3 * INT(LOG10(V73)/3)), "0.00") & CHOOSE(INT(LOG10(V73)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AA73 | `=IF(Z73<1000, Z73, TEXT(Z73 / 10^(3 * INT(LOG10(Z73)/3)), "0.00") & CHOOSE(INT(LOG10(Z73)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| K74 | `=IF(J74<1000, J74, TEXT(J74 / 10^(3 * INT(LOG10(J74)/3)), "0.00") & CHOOSE(INT(LOG10(J74)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| O74 | `=IF(N74<1000, N74, TEXT(N74 / 10^(3 * INT(LOG10(N74)/3)), "0.00") & CHOOSE(INT(LOG10(N74)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| S74 | `=IF(R74<1000, R74, TEXT(R74 / 10^(3 * INT(LOG10(R74)/3)), "0.00") & CHOOSE(INT(LOG10(R74)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| W74 | `=IF(V74<1000, V74, TEXT(V74 / 10^(3 * INT(LOG10(V74)/3)), "0.00") & CHOOSE(INT(LOG10(V74)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AA74 | `=IF(Z74<1000, Z74, TEXT(Z74 / 10^(3 * INT(LOG10(Z74)/3)), "0.00") & CHOOSE(INT(LOG10(Z74)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| K75 | `=IF(J75<1000, J75, TEXT(J75 / 10^(3 * INT(LOG10(J75)/3)), "0.00") & CHOOSE(INT(LOG10(J75)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| O75 | `=IF(N75<1000, N75, TEXT(N75 / 10^(3 * INT(LOG10(N75)/3)), "0.00") & CHOOSE(INT(LOG10(N75)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| S75 | `=IF(R75<1000, R75, TEXT(R75 / 10^(3 * INT(LOG10(R75)/3)), "0.00") & CHOOSE(INT(LOG10(R75)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| W75 | `=IF(V75<1000, V75, TEXT(V75 / 10^(3 * INT(LOG10(V75)/3)), "0.00") & CHOOSE(INT(LOG10(V75)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AA75 | `=IF(Z75<1000, Z75, TEXT(Z75 / 10^(3 * INT(LOG10(Z75)/3)), "0.00") & CHOOSE(INT(LOG10(Z75)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| W76 | `=IF(V76<1000, V76, TEXT(V76 / 10^(3 * INT(LOG10(V76)/3)), "0.00") & CHOOSE(INT(LOG10(V76)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AA76 | `=IF(Z76<1000, Z76, TEXT(Z76 / 10^(3 * INT(LOG10(Z76)/3)), "0.00") & CHOOSE(INT(LOG10(Z76)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| W77 | `=IF(V77<1000, V77, TEXT(V77 / 10^(3 * INT(LOG10(V77)/3)), "0.00") & CHOOSE(INT(LOG10(V77)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AA77 | `=IF(Z77<1000, Z77, TEXT(Z77 / 10^(3 * INT(LOG10(Z77)/3)), "0.00") & CHOOSE(INT(LOG10(Z77)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| W78 | `=IF(V78<1000, V78, TEXT(V78 / 10^(3 * INT(LOG10(V78)/3)), "0.00") & CHOOSE(INT(LOG10(V78)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AA78 | `=IF(Z78<1000, Z78, TEXT(Z78 / 10^(3 * INT(LOG10(Z78)/3)), "0.00") & CHOOSE(INT(LOG10(Z78)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| W79 | `=IF(V79<1000, V79, TEXT(V79 / 10^(3 * INT(LOG10(V79)/3)), "0.00") & CHOOSE(INT(LOG10(V79)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AA79 | `=IF(Z79<1000, Z79, TEXT(Z79 / 10^(3 * INT(LOG10(Z79)/3)), "0.00") & CHOOSE(INT(LOG10(Z79)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| W80 | `=IF(V80<1000, V80, TEXT(V80 / 10^(3 * INT(LOG10(V80)/3)), "0.00") & CHOOSE(INT(LOG10(V80)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AA80 | `=IF(Z80<1000, Z80, TEXT(Z80 / 10^(3 * INT(LOG10(Z80)/3)), "0.00") & CHOOSE(INT(LOG10(Z80)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AA81 | `=IF(Z81<1000, Z81, TEXT(Z81 / 10^(3 * INT(LOG10(Z81)/3)), "0.00") & CHOOSE(INT(LOG10(Z81)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AA82 | `=IF(Z82<1000, Z82, TEXT(Z82 / 10^(3 * INT(LOG10(Z82)/3)), "0.00") & CHOOSE(INT(LOG10(Z82)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AA83 | `=IF(Z83<1000, Z83, TEXT(Z83 / 10^(3 * INT(LOG10(Z83)/3)), "0.00") & CHOOSE(INT(LOG10(Z83)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AA84 | `=IF(Z84<1000, Z84, TEXT(Z84 / 10^(3 * INT(LOG10(Z84)/3)), "0.00") & CHOOSE(INT(LOG10(Z84)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |
| AA85 | `=IF(Z85<1000, Z85, TEXT(Z85 / 10^(3 * INT(LOG10(Z85)/3)), "0.00") & CHOOSE(INT(LOG10(Z85)/3), "K", "M", "B", "T", "Qa", "Qi", "Se", "Sp", "Oc", "No", "Dc") )` |

## Sheet: Fish Upgs

44 formulas

| Cell | Formula |
|---|---|
| C2 | `=IF(SUM(D2:CA2)=0,"👍🏻👍🏻👍🏻",SUM(D2:CA2))` |
| C3 | `=IF(SUM(D3:CA3)=0,"👍🏻👍🏻👍🏻",SUM(D3:CA3))` |
| C4 | `=IF(SUM(D4:CA4)=0,"👍🏻👍🏻👍🏻",SUM(D4:CA4))` |
| C5 | `=IF(SUM(D5:CA5)=0,"👍🏻👍🏻👍🏻",SUM(D5:CA5))` |
| C6 | `=IF(SUM(D6:CA6)=0,"👍🏻👍🏻👍🏻",SUM(D6:CA6))` |
| C7 | `=IF(SUM(D7:CA7)=0,"👍🏻👍🏻👍🏻",SUM(D7:CA7))` |
| C8 | `=IF(SUM(D8:CA8)=0,"👍🏻👍🏻👍🏻",SUM(D8:CA8))` |
| C9 | `=IF(SUM(D9:CA9)=0,"👍🏻👍🏻👍🏻",SUM(D9:CA9))` |
| C10 | `=IF(SUM(D10:CA10)=0,"👍🏻👍🏻👍🏻",SUM(D10:CA10))` |
| C11 | `=IF(SUM(D11:CA11)=0,"👍🏻👍🏻👍🏻",SUM(D11:CA11))` |
| C12 | `=IF(SUM(D12:CA12)=0,"👍🏻👍🏻👍🏻",SUM(D12:CA12))` |
| C13 | `=IF(SUM(D13:CA13)=0,"👍🏻👍🏻👍🏻",SUM(D13:CA13))` |
| C14 | `=IF(SUM(D14:CA14)=0,"👍🏻👍🏻👍🏻",SUM(D14:CA14))` |
| C15 | `=IF(SUM(D15:CA15)=0,"👍🏻👍🏻👍🏻",SUM(D15:CA15))` |
| C16 | `=IF(SUM(D16:CA16)=0,"👍🏻👍🏻👍🏻",SUM(D16:CA16))` |
| C17 | `=IF(SUM(D17:CA17)=0,"👍🏻👍🏻👍🏻",SUM(D17:CA17))` |
| C18 | `=IF(SUM(D18:CA18)=0,"👍🏻👍🏻👍🏻",SUM(D18:CA18))` |
| C19 | `=IF(SUM(D19:CA19)=0,"👍🏻👍🏻👍🏻",SUM(D19:CA19))` |
| C20 | `=IF(SUM(D20:CA20)=0,"👍🏻👍🏻👍🏻",SUM(D20:CA20))` |
| C21 | `=IF(SUM(D21:CA21)=0,"👍🏻👍🏻👍🏻",SUM(D21:CA21))` |
| C22 | `=IF(SUM(D22:CA22)=0,"👍🏻👍🏻👍🏻",SUM(D22:CA22))` |
| C23 | `=IF(SUM(D23:CA23)=0,"👍🏻👍🏻👍🏻",SUM(D23:CA23))` |
| C24 | `=IF(SUM(D24:CA24)=0,"👍🏻👍🏻👍🏻",SUM(D24:CA24))` |
| C25 | `=IF(SUM(D25:CA25)=0,"👍🏻👍🏻👍🏻",SUM(D25:CA25))` |
| C26 | `=IF(SUM(D26:CA26)=0,"👍🏻👍🏻👍🏻",SUM(D26:CA26))` |
| C27 | `=IF(SUM(D27:CA27)=0,"👍🏻👍🏻👍🏻",SUM(D27:CA27))` |
| C28 | `=IF(SUM(D28:CA28)=0,"👍🏻👍🏻👍🏻",SUM(D28:CA28))` |
| C29 | `=IF(SUM(D29:CA29)=0,"👍🏻👍🏻👍🏻",SUM(D29:CA29))` |
| C30 | `=IF(SUM(D30:CA30)=0,"👍🏻👍🏻👍🏻",SUM(D30:CA30))` |
| C31 | `=IF(SUM(D31:CA31)=0,"👍🏻👍🏻👍🏻",SUM(D31:CA31))` |
| C32 | `=IF(SUM(D32:CA32)=0,"👍🏻👍🏻👍🏻",SUM(D32:CA32))` |
| C33 | `=IF(SUM(D33:CA33)=0,"👍🏻👍🏻👍🏻",SUM(D33:CA33))` |
| C34 | `=IF(SUM(D34:CA34)=0,"👍🏻👍🏻👍🏻",SUM(D34:CA34))` |
| C35 | `=IF(SUM(D35:CA35)=0,"👍🏻👍🏻👍🏻",SUM(D35:CA35))` |
| C36 | `=IF(SUM(D36:CA36)=0,"👍🏻👍🏻👍🏻",SUM(D36:CA36))` |
| C37 | `=IF(SUM(D37:CA37)=0,"👍🏻👍🏻👍🏻",SUM(D37:CA37))` |
| C38 | `=IF(SUM(D38:CA38)=0,"👍🏻👍🏻👍🏻",SUM(D38:CA38))` |
| C39 | `=IF(SUM(D39:CA39)=0,"👍🏻👍🏻👍🏻",SUM(D39:CA39))` |
| C40 | `=IF(SUM(D40:CA40)=0,"👍🏻👍🏻👍🏻",SUM(D40:CA40))` |
| C41 | `=IF(SUM(D41:CA41)=0,"👍🏻👍🏻👍🏻",SUM(D41:CA41))` |
| C42 | `=IF(SUM(D42:CA42)=0,"👍🏻👍🏻👍🏻",SUM(D42:CA42))` |
| C43 | `=IF(SUM(D43:CA43)=0,"👍🏻👍🏻👍🏻",SUM(D43:CA43))` |
| C44 | `=IF(SUM(D44:CA44)=0,"👍🏻👍🏻👍🏻",SUM(D44:CA44))` |
| C45 | `=IF(SUM(D45:CA45)=0,"👍🏻👍🏻👍🏻",SUM(D45:CA45))` |
