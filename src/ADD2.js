var Stats = {
    Str: {
        score: ["Score",""],
        hitAdj: ["Hit Adj",""],
        dmgAdj: ["Dmg Adj",""],
        wgt: ["Weight Allowed",""],
        press: ["Max Press",""],
        open: ["Open Doors",""],
        bars: ["Bend Bars",""],
    },
    Dex: {
        score: ["Score",""],
        reactAdj: ["React Adj",""],
        mAttAdj: ["Missile Hit Adj",""],
        defAdj: ["AC Adj",""],
    },
    Con: {
        score: ["Score",""],
        hpAdj: ["HP Adj",""],
        sysShk: ["System Shock",""],
        resSur: ["Res Survival",""],
        poisSav: ["Poison Save",""],
        regen: ["Regeneration",""],
    },
    Int: {
        score: ["Score",""],
        numLang: ["No. Languages",""],
        spLvl: ["Spell Level",""],
        learn: ["Chance to Learn Spell",""],
        maxPerLvl: ["Max Spells/Level",""],
        illImm: ["Illusion Immunity",""],
    },
    Wis: {
        score: ["Score",""],
        magDefAdj: ["Magic Defense Adj",""],
        bonusSp: ["Bonus Spells",""],
        fail: ["Chance of Spell Failure",""],
        spImm: ["Spell Immunity",""],
    },
    Cha: {
        score: ["Score",""],
        maxHench: ["Max Henchmen",""],
        loyBase: ["Loyalty Base",""],
        reactAdj: ["Reaction Adj",""],
    },
};


// The function is required because Strength requires a switch case and expressions to 
// handle complex inequalities
var Str = score => {
    switch (true) {
        case (score == 1):
            return [-5,-4,1,3,1,0]
        case (score == 2):
            return [-3,-2,1,5,1,0]
        case (score == 3):
            return [-3,-1,5,10,2,0]
        case (score == (4 | 5)):
            return [-2,-1,10,25,3,0]
        case (score == (6 | 7)):
            return [-1,0,20,55,4,0]
        case (score == (8 | 9)):
            return [0,0,35,90,5,1]
        case (score == (10 | 11)):
            return [0,0,40,115,6,2]
        case (score == (12 | 13)):
            return [0,0,45,140,7,4]
        case (score == (14 | 15)):
            return [0,0,55,170,8,7]
        case (score == 16):
            return [0,1,70,195,9,10]
        case (score == 17):
            return [0,1,70,195,9,10]
        case (score == 18):
            return [1,2,110,255,11,16]
        case (score >= 18.01 && score < 18.51):
            return [1,3,135,280,12,20]
        case (score >= 18.51 && score < 18.76):
            return [2,3,160,305,13,25]
        case (score >= 18.76 && score < 18.91):
            return [2,4,185,330,14,30]
        case (score >= 18.91 && score < 19):
            return [2,5,235,380,15,35]
        case (score > 18 && score < 18.01): // 18/00
            return [3,6,335,480,16,40]
        case (score == 19):
            return [3,7,485,640,16,50]
        case (score == 20):
            return [3,8,535,700,17,60]
        case (score == 21):
            return [4,9,635,810,17,70]
        case (score == 22):
            return [4,10,785,970,18,80]
        case (score == 23):
            return [5,11,935,1130,18,90]
        case (score == 24):
            return [6,12,1235,1440,19,95]
        case (score == 25):
            return [7,14,1535,1750,19,99]
        default:
            return [0,0,0,0,0,0]
    }
}

var Dex = (score) => {return DexObj[score]}

var DexObj = {
    1: [-6,-6,5],
	2: [-4,-4,5],
	3: [-3,-3,4],
	4: [-2,-2,3],
	5: [-1,-1,2],
	6: [0,0,1],
	7: [0,0,0],
	8: [0,0,0],
	9: [0,0,0],
    10: [0,0,0],
    11: [0,0,0],
    12: [0,0,0],
    13: [0,0,0],
    14: [0,0,0],
	15: [0,0,-1],
	16: [1,1,-2],
	17: [2,2,-3],
	18: [2,2,-4],
	19: [3,3,-4],
	20: [3,3,-4],
	21: [4,4,-5],
	22: [4,4,-5],
	23: [4,4,-5],
	24: [5,5,-6],
	25: [5,5,-6],
}

var Con = (score) => {
    return ConObj[score];
}

var ConObj = {
    1: [-3,25,30,-2,0],
    2: [-2,30,35,-1,0],
    3: [-2,35,40,0,0],
    4: [-1,40,45,0,0],
    5: [-1,45,50,0,0],
    6: [-1,50,55,0,0],
    7: [0,55,60,0,0],
    8: [0,60,65,0,0],
    9: [0,65,70,0,0],
    10: [0,70,75,0,0],
    11: [0,75,80,0,0],
    12: [0,80,85,0,0],
    13: [0,85,90,0,0],
    14: [0,88,92,0,0],
    15: [1,90,94,0,0],
    16: [2,95,96,0,0],
    17: [3,97,98,0,0], // Hit Dice bonuses (column 0) at 17 and above only apply to Warriors. Everyone else maxes at 2
    18: [4,99,100,0,0],
    19: [5,99,100,1,0],
    20: [5,99,100,1,6], // see PHB for complicated rules about rolling Dit Dice at Con above 19
    21: [6,99,100,2,5], // NOTE: only the denomenator (how many turns to regen 1 HP) is given for regen
    22: [6,99,100,2,4], 
    23: [6,99,100,3,3], 
    24: [7,99,100,3,2], 
    25: [7,100,100,4,1], 
};

var Int = (score) => {
    return IntObj[score];
}

var IntObj = {
    1: [0,0,0,0,0],
    2: [1,0,0,0,0],
    3: [1,0,0,0,0],
    4: [1,0,0,0,0],
    5: [1,0,0,0,0],
    6: [1,0,0,0,0],
    7: [1,0,0,0,0],
    8: [1,0,0,0,0],
    9: [2,4,35,6,0],
    10: [2,5,40,7,0],
    11: [2,5,45,7,0],
    12: [3,6,50,7,0],
    13: [3,6,55,9,0],
    14: [4,7,60,9,0],
    15: [4,7,65,11,0],
    16: [5,8,70,11,0],
    17: [6,8,75,14,0],
    18: [7,9,85,18,	0],
    19: [8,9,95,999,1],
    20: [9,9,96,999,2],
    21: [10,9,97,999,3],
    22: [11,9,98,999,4],
    23: [12,9,99,999,5],
    24: [15,9,100,999,6],
    25: [20,9,100,999,7],
}

var Wis = (score) => {
    return WisObj[score];
}

var WisObj = {
    1: [-6,0,80,0],
    2: [-4,0,60,0],
    3: [-3,0,50,0],
    4: [-2,0,45,0],
    5: [-1,0,40,0],
    6: [-1,0,35,0],
    7: [-1,0,30,0],
    8: [0,0,25,0],
    9: [0,0,20,0],
    10: [0,0,15,0],
    11: [0,0,10,0],
    12: [0,0,5,0],
    13: [0,1,0,0],
    14: [0,1,0,0],
    15: [1,2,0,0],
    16: [2,2,0,0],
    17: [3,3,0,0],
    18: [4,4,0,0],
    19: [4,[1,3],0,	["cause fear", "charm person", "command", "friends", "hypnotism"]],
    20: [4,[2,4],0,	["forget", "hold person", "ray of enfeeblement", "scare"]],
    21: [4,[3,5],0,	["fear"]],
    22: [4,[4,5],0,	["charm monster", "confusion","emotion", "fumble", "suggestion"]],
    23: [4,[1,6],0,	["chaos", "feeblemind", "hold monster", "magic jar", "quest"]],
    24: [4,[5,6],0,	["geas", "mass suggestion", "rod of rulership"]],
    25: [4,[6,7],0,	["antipathy/sympathy", "death spell", "mass charm"]],
}

var Cha = (score) => {
    return ChaObj[score]
}

var ChaObj = {
    1: [0,-8,-7],
    2: [1,-7,-6],
    3: [1,-6,-5],
    4: [1,-5,-4],
    5: [2,-4,-3],
    6: [2,-3,-2],
    7: [3,-2,-1],
    8: [3,-1,0],
    9: [4,0,0],
    10: [4,0,0],
    11: [4,0,0],
    12: [5,0,0],
    13: [5,0,1],
    14: [6,1,2],
    15: [7,3,3],
    16: [8,4,5],
    17: [10,6,6],
    18: [15,8,7],
    19: [20,10,8],
    20: [25,12,9],
    21: [30,14,10],
    22: [35,16,11],
    23: [40,18,12],
    24: [45,20,13],
    25: [50,20,14],
}

export {Stats, Str, Dex, Con, Int, Wis, Cha};