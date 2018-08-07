var Stats = {
    str: {
        score: "",
        hitAdj: "",
        dmgAdj: "",
        wgt: "",
        press: "",
        open: "",
        bars: "",
    },
    dex: {
        score: "",
        reactAdj: "",
        mAttAdj: "",
        defAdj: "",
    },
    con: {
        score: "",
        hpAdj: "",
        sysShk: "",
        resSur: "",
        poisSav: "",
        regen: "",
    },
    int: {
        score: "",
        numLang: "",
        spLvl: "",
        learn: "",
        maxPerLvl: "",
        illImm: "",
    },
    wis: {
        score: "",
        magDefAdj: "",
        bonusSp: "",
        fail: "",
        spImm: "",
    },
    cha: {
        score: "",
        maxHench: "",
        loyBase: "",
        reactAdj: "",
    },
};

var Str = score => {
    var retObj = {}
    switch (true) {
        case (score == 1):
            retObj["score"] = score;
            retObj["hitAdj"] = -5;
            retObj["dmgAdj"] = -4;
            retObj["wgt"] = 1;
            retObj["press"] = 3;
            retObj["open"] = 1;
            retObj["bars"] = 0;
            break;
        case (score == 2):
            retObj["score"] = score;
            retObj["hitAdj"] = -3;
            retObj["dmgAdj"] = -2;
            retObj["wgt"] = 1;
            retObj["press"] = 5;
            retObj["open"] = 1;
            retObj["bars"] = 0;
            break;
        case (score == 3):
            retObj["score"] = score;
            retObj["hitAdj"] = -3;
            retObj["dmgAdj"] = -1;
            retObj["wgt"] = 5;
            retObj["press"] = 10;
            retObj["open"] = 2;
            retObj["bars"] = 0;
            break;
        case (score == (4 || 5)):
            retObj["score"] = score;
            retObj["hitAdj"] = -2;
            retObj["dmgAdj"] = -1;
            retObj["wgt"] = 10;
            retObj["press"] = 25;
            retObj["open"] = 3;
            retObj["bars"] = 0;
            break;
        case (score == (6 || 7)):
            retObj["score"] = score;
            retObj["hitAdj"] = -1;
            retObj["dmgAdj"] = 0;
            retObj["wgt"] = 20;
            retObj["press"] = 55;
            retObj["open"] = 4;
            retObj["bars"] = 0;
            break;
        case (score == (8 || 9)):
            retObj["score"] = score;
            retObj["hitAdj"] = 0;
            retObj["dmgAdj"] = 0;
            retObj["wgt"] = 35;
            retObj["press"] = 90;
            retObj["open"] = 5;
            retObj["bars"] = 1;
            break;
        case (score == (10 || 11)):
            retObj["score"] = score;
            retObj["hitAdj"] = 0;
            retObj["dmgAdj"] = 0;
            retObj["wgt"] = 40;
            retObj["press"] = 115;
            retObj["open"] = 6;
            retObj["bars"] = 2;
            break;
        case (score == (12 || 13)):
            retObj["score"] = score;
            retObj["hitAdj"] = 0;
            retObj["dmgAdj"] = 0;
            retObj["wgt"] = 45;
            retObj["press"] = 140;
            retObj["open"] = 7;
            retObj["bars"] = 4;
            break;
        case (score == (14 || 15)):
            retObj["score"] = score;
            retObj["hitAdj"] = 0;
            retObj["dmgAdj"] = 0;
            retObj["wgt"] = 55;
            retObj["press"] = 170;
            retObj["open"] = 8;
            retObj["bars"] = 7;
            break;
        case (score == 16):
            retObj["score"] = score;
            retObj["hitAdj"] = 0;
            retObj["dmgAdj"] = 1;
            retObj["wgt"] = 70;
            retObj["press"] = 195;
            retObj["open"] = 9;
            retObj["bars"] = 10;
            break;
        case (score == 17):
            retObj["score"] = score;
            retObj["hitAdj"] = 1;
            retObj["dmgAdj"] = 1;
            retObj["wgt"] = 85;
            retObj["press"] = 220;
            retObj["open"] = 10;
            retObj["bars"] = 13;
            break;
        case (score == 18):
            retObj["score"] = score;
            retObj["hitAdj"] = 1;
            retObj["dmgAdj"] = 2;
            retObj["wgt"] = 110;
            retObj["press"] = 255;
            retObj["open"] = 11;
            retObj["bars"] = 16;
            break;
        case (score >= 18.01 && score < 18.51):
            retObj["score"] = score;
            retObj["hitAdj"] = 1;
            retObj["dmgAdj"] = 3;
            retObj["wgt"] = 135;
            retObj["press"] = 280;
            retObj["open"] = 12;
            retObj["bars"] = 20;
            break;
        case (score >= 18.51 && score < 18.76):
            retObj["score"] = score;
            retObj["hitAdj"] = 2;
            retObj["dmgAdj"] = 3;
            retObj["wgt"] = 160;
            retObj["press"] = 305;
            retObj["open"] = 13;
            retObj["bars"] = 25;
            break;
        case (score >= 18.76 && score < 18.91):
            retObj["score"] = score;
            retObj["hitAdj"] = 2;
            retObj["dmgAdj"] = 4;
            retObj["wgt"] = 185;
            retObj["press"] = 330;
            retObj["open"] = 14;
            retObj["bars"] = 30;
            break;
        case (score >= 18.91 && score < 19):
            retObj["score"] = score;
            retObj["hitAdj"] = 2;
            retObj["dmgAdj"] = 5;
            retObj["wgt"] = 235;
            retObj["press"] = 380;
            retObj["open"] = 15;
            retObj["bars"] = 35;
            break;
        case (score > 18 && score < 18.01): // 18/00
            retObj["score"] = score;
            retObj["hitAdj"] = 3;
            retObj["dmgAdj"] = 6;
            retObj["wgt"] = 335;
            retObj["press"] = 480;
            retObj["open"] = 16;
            retObj["bars"] = 40;
            break;
        case (score == 19):
            retObj["score"] = score;
            retObj["hitAdj"] = 3;
            retObj["dmgAdj"] = 7;
            retObj["wgt"] = 485;
            retObj["press"] = 640;
            retObj["open"] = 16;
            retObj["bars"] = 50;
            break;
        case (score == 20):
            retObj["score"] = score;
            retObj["hitAdj"] = 3;
            retObj["dmgAdj"] = 8;
            retObj["wgt"] = 535;
            retObj["press"] = 700;
            retObj["open"] = 17;
            retObj["bars"] = 60;
            break;
        case (score == 21):
            retObj["score"] = score;
            retObj["hitAdj"] = 4;
            retObj["dmgAdj"] = 9;
            retObj["wgt"] = 635;
            retObj["press"] = 810;
            retObj["open"] = 17;
            retObj["bars"] = 70;
            break;
        case (score == 22):
            retObj["score"] = score;
            retObj["hitAdj"] = 4;
            retObj["dmgAdj"] = 10;
            retObj["wgt"] = 785;
            retObj["press"] = 970;
            retObj["open"] = 18;
            retObj["bars"] = 80;
            break;
        case (score == 23):
            retObj["score"] = score;
            retObj["hitAdj"] = 5;
            retObj["dmgAdj"] = 11;
            retObj["wgt"] = 935;
            retObj["press"] = 1130;
            retObj["open"] = 18;
            retObj["bars"] = 90;
            break;
        case (score == 24):
            retObj["score"] = score;
            retObj["hitAdj"] = 6;
            retObj["dmgAdj"] = 12;
            retObj["wgt"] = 1235;
            retObj["press"] = 1440;
            retObj["open"] = 19;
            retObj["bars"] = 95;
            break;
        case (score == 25):
            retObj["score"] = score;
            retObj["hitAdj"] = 7;
            retObj["dmgAdj"] = 14;
            retObj["wgt"] = 1535;
            retObj["press"] = 1750;
            retObj["open"] = 19;
            retObj["bars"] = 99;
            break;
    }
    return retObj;
}

export {Stats, Str};