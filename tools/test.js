// Regression tests: run with  node tools/test.js  from the repo root.
// Expected values are the cached results of the community spreadsheets.
const fs=require('fs');
global.window={}; global.document={addEventListener(){}, getElementById(){return {}}};
global.localStorage={_:{}, getItem(k){return this._[k]||null}, setItem(k,v){this._[k]=v}, removeItem(k){delete this._[k]}};
for (const f of ['util','store','parse','calcs','floors']) eval(fs.readFileSync(__dirname+'/../js/'+f+'.js','utf8'));
const OM=window.OM;
OM.data={bombs:JSON.parse(fs.readFileSync(__dirname+'/../data/bombs.json','utf8')).bombs, contracts:JSON.parse(fs.readFileSync(__dirname+'/../data/contracts.json','utf8')), floors:JSON.parse(fs.readFileSync(__dirname+'/../data/floors.json','utf8'))};
const close=(a,b,t=0.01)=>Math.abs(a-b)/Math.max(Math.abs(b),1e-12)<t;
let fails=0; const check=(name,a,b,t)=>{const ok=close(a,b,t); if(!ok)fails++; console.log((ok?'PASS':'FAIL')+' '+name+': '+a+' vs sheet '+b);};

// Contract points: sheet 19 pts, 68/76/11/8.2 -> mean 201.3148, sd 466.2089, percentile .38 for 4483 contracts / 893000
let cp=OM.calc.contractPoints({points:19,x2:68,x3:76,x5:11,x10:8.2});
check('contract mean',cp.mean,201.3147924); check('contract sd',cp.sd,466.2089475);
check('percentile',OM.calc.normCdf((893000-201.3147924*4483)/(Math.sqrt(4483)*466.2089475)),0.38,0.03);
// Contract costs: sheet cap 11, mult .13: PD lvl3 -> 262 ; Triple craft lvl16 -> 399 ; 10x craft lvl12 -> 1451 ; Ore sell lvl21 -> 7999 ; Golden ore lvl23 -> 58665
const C=OM.data.contracts.contracts;
check('PD cost 0->3',OM.calc.contractCost(C[0],0,3,0.13),262); check('triple craft 0->16',OM.calc.contractCost(C[1],0,16,0.13),399);
check('10x craft 0->12',OM.calc.contractCost(C[9],0,12,0.13),1451); check('ore sell 0->21',OM.calc.contractCost(C[11],0,21,0.13),7999);
check('golden ore 0->23',OM.calc.contractCost(C[21],0,23,0.13),58665); check('rainbow vein 0->5',OM.calc.contractCost(C[26],0,5,0.13),2940);
// Damage: current 3.26e29, N=3199, cap 11, L0=3, L6=5, L23=15, W3 statue -> base 1.51639e27, potential 1.33793e30, +10 -> 1.34208e30, +12000 -> 6.31655e30
let d=OM.calc.contractDamage({currentDamage:3.26e29,contractsComplete:3199,cap:11,pdPerContract:3,pickaxeDamage:5,pbDamage:15,world3Statue:true});
check('dmg base',d.base,1.51639e27); check('dmg potential',d.potential,1.33793e30); check('dmg +10',d.after(10),1.34208e30); check('dmg +12000',d.after(12000),6.31655e30);
// Trans vs BoP: sheet free 34, 101/102/100/23/101/6.8, cost 67, bop 45.5, trans 69, transbop 25 -> craftMult 21579.309, bars/ore 322.079, bop 14654.6, trans 4741.84, breakeven 860.85
let t=OM.calc.transVsBop({free:34,x2:101,x3:102,x5:100,x10:23,x20:101,x100:6.8,barCost:67,bopMult:45.5,transMult:69,transBopChance:25});
check('craftMult',t.craftMult,21579.30909); check('bars/ore',t.barsPerOre,322.0792402); check('bop',t.bopBars,14654.60543); check('trans',t.transBars,4741.835787); check('breakeven',t.breakEvenCost,860.8509678);
// Vein income: ores 12, rate 76, research on, gold 0/5, rainbow 0/911.54, bomb 50, gleam 0/18.15 -> stone veins 10.1333, w/bomb 11.0667, /h 29184, w/bomb 33146.88 (sheet's M3=1.04 quirk); world4 1.52 / 6.76
let v=OM.calc.veinIncome({oresPerFloor:12,spawnRate:76,research:true,goldChance:0,goldMult:5,rainbowChance:0,rainbowMult:911.54,bombChance:50,gleamChance:0,gleamMult:18.15,clearsPerMin:48});
check('stone veins',v.rows[0].veins,10.13333); check('stone veins bomb',v.rows[0].veinsBomb,11.06667); check('stone /h',v.rows[0].perHour,29184); check('w4 veins bomb',v.rows[8].veinsBomb,6.76);
console.log('  (bomb-yield differs from sheet by design: sheet used avg-mult as chance; ours uses effect chance) stone w/bomb /h', v.rows[0].perHourBomb.toFixed(0),'sheet 33147');
// Frogger: sheet inputs 2.08, .25, .2, 50, .1, .035, cherry battery TRUE, level 14, gs 3.27 -> grade 0 net -63.29/h, grade 4 0.0547, grade 14 89.03, grade 45 291.43; time between fires 2.7523
let f=OM.calc.frogger({fuelDurationMult:2.08,fuelSaveChance:.25,freeBombChance:.2,d20Charges:50,cherryTriple:.1,gemChance:.035,cherryOnBattery:true,level:14,gameSpeed:3.27,maxGrade:45});
check('frogger tbf',f.timeBetweenFires,2.752293578); check('frogger g0',f.rows[0].netPerHour,-63.29093624); check('frogger g4',f.rows[4].netPerHour,0.05468015346,0.2); check('frogger g14',f.rows[14].netPerHour,89.03334939); check('frogger g45',f.rows[45].netPerHour,291.4267198);
// Lootfrogs: sheet defaults (all mult 1, chances 0, cap 5): gems/frog 51.52 (26.65+4.57+20.30), relics 5.076, fuel 4.5685; per full spawn relics 25.38
let l=OM.calc.lootfrogs({lootMulti:1,gemMulti:1,goldChance:0,goldMulti:1,bigChance:0,bigMulti:1,massiveChance:0,massiveMulti:1,tripleSpawn:0,tenxSpawn:0,capacity:5});
const L=n=>l.find(r=>r.name===n); check('lf gems',L('Gems').perFrog,51.52284264); check('lf relics',L('Relics').perFrog,5.076142132); check('lf fuel',L('Fuel').perFrog,4.568527919); check('lf relics full',L('Relics').perFullSpawn,25.38071066);
// Card shards: reconstruct sheet's export values -> super star 268750.38h, novagiant 2694.66, lootbug 63.597, golden lb 1096.5, freebie 196.83, stonks 1656.75, super 2209.0, W1 107.86, golden ore 334.14, golden vein 74.718, rainbow vein 304.97, gleaming 931.19
const s={star_spawn_rate:8.57472,super_star_spawn_multi:13.149675,super_star_triple_chance:20,super_star_10x_chance:15,super_star_supernova_chance:8.45,super_star_supernova_multi:54,super_star_supergiant_chance:5.3,super_star_supergiant_multi:6.105,super_star_radiant_chance:0,super_star_radiant_multi:10,all_star_multi:2.5904233575,novagiant_combo_multi:2.15322912,star_double_spawn_chance:100,star_triple_spawn_chance:22,star_supernova_chance:42.75,star_supergiant_chance:18.8,game_speed_multi:4.82878935,lootbug_spawn_rate:3.6919278,lootbug_triple_chance:97,lootbug_golden_chance:29,freebie_cooldown_seconds:364,freebie_refresh_chance:6,stonks_chance:1,super_stonks_chance:3,ultra_stonks_chance:0,void_portal_chance:0,golden_void_portal_chance:15.5,rainbow_void_portal_chance:0,golden_ore_chance:26.9,vein_spawn_rate_multi:53.62266,golden_vein_chance:89,rainbow_vein_chance:24.5,gleaming_vein_chance:5,bomb_workshop_cap_increase:18,ores_per_floor:12};
const cards=OM.calc.cardShards(s,{clearsPerMin:48,oresPerFloor:12}); const K=n=>cards.find(c=>c.name===n).hours;
check('super star',K('Super star'),268750.3849); check('novagiant',K('Novagiant combo'),2694.659736); check('lootbug',K('Lootbug'),63.59748702); check('golden lb',K('Golden lootbug'),1096.508397);
check('freebie',K('Freebie'),196.8287236); check('stonks',K('Stonks'),1656.751655); check('super stonks',K('Super stonks'),2209.002207); check('W1',K('World 1'),107.8600236);
check('golden ore',K('Golden ore'),334.1388588); check('golden vein',K('Golden vein'),74.71796665); check('rainbow vein',K('Rainbow vein'),304.9712924); check('gleaming',K('Gleaming vein'),931.1894759);
// Best floor: structural checks against the sheet (no JSON was loaded in the exported copy, so no cached numbers to compare).
const fp={oresPerScreen:10,oreIncome:1,gFloorC:0,gFloorM:1,rFloorC:0,rFloorM:1,gaFloorC:0,gaFloorM:1,pFloorC:0,pFloorM:1,gOreC:0,gOreM:1,rOreC:0,rOreM:1,voidC:0,voidM:0,voidBase:1,gVoidC:0,gVoidM:1,rVoidC:0,rVoidM:1,gaVoidC:0,gaVoidM:1,w3Fix:false,w4Speed:0.8,gameSpeed:1,veinSpawn:1,veinIncome:1,gVeinC:0,gVeinM:1,rVeinC:0,rVeinM:1,glVeinC:0,glVeinM:1,research:false,morphChance:0,morphGold:0};
let fo=OM.calc.floors.ore('Tin',fp); check('tin floor1 ores/h (0.8*10*2880)',fo.rows[0].base,23040); check('tin floor2',fo.rows[1].base,14400); check('tin rank1',fo.bestBase[0].floor,1);
check('speed 71',OM.calc.floors.speedFactor(71,fp),0.75); check('speed 80 (no w3 fix)',OM.calc.floors.speedFactor(80,fp),0.7); check('speed 120 w4',OM.calc.floors.speedFactor(120,fp),0.7*0.2); check('speed 122 w4',OM.calc.floors.speedFactor(122,fp),0.6*0.2);
check('w4 speed 29 quests',OM.calc.floors.w4Speed(29),0.2); check('w4 speed 5 quests',OM.calc.floors.w4Speed(5),0.6);
// Void: Tin on floor 1 with 100% normal portals of multi 2: own 0.8*0 + portals: tin 0.8*2/1 + copper 0.2*2/2 = 1.8 -> *10*2880
const fv=Object.assign({},fp,{voidC:1,voidM:2}); fo=OM.calc.floors.ore('Tin',fv); check('tin void floor1',fo.rows[0].void,1.8*10*2880);
let fvn=OM.calc.floors.vein('Stone Vein',Object.assign({},fp,{veinSpawn:30})); check('stone veins/screen (30/15)',fvn.veinsPerScreen,2); check('stone floor 1 veins/h',fvn.rows[0].base,2*2880); check('stone floor 9 out of zone',fvn.rows[8].base,0);
console.log(fails?`\n${fails} FAILED`:'\nALL PASS');
