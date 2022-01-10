var stabDmg = document.getElementById("stab1").value;
var slashDmg = document.getElementById("slash1").value;
var crushDmg = document.getElementById("crush1").value;

function test() {
    console.log(document.getElementById("stab1").value + 1);
}

function parseDmg() {
    let offenseValue = [stabDmg, slashDmg, crushDmg];
    console.log(stabDmg)
}

function dmgCalc() {
    let offenseValue = [stabDmg, slashDmg, crushDmg];
    let offsnseValue = Math.max(...offenseValue);
    console.log(offsnseValue);
    var defenseStat = 0;

    var baseHit = offsnseValue * 1.5;
    var defRatio = 1.0 - Math.max(Math.max(0, defenseStat / (Math.max(offsnseValue) + offsnseValue * 0.4)));
    var baseMod = 0.05 + (0.05 * Math.pow(Math.max(offsnseValue), 1.3)/Math.pow(Math.max(offsnseValue), 1.6));

    let calc = Math.round(Math.max(baseHit * defRatio) + Math.ceil(offsnseValue * baseMod) * 1.076 * 6 * (1 + 4.4/100) * (1- (15/100)) * (1+ (6/100)) * (235/100));

    document.getElementById("dps").innerHTML = calc;

    console.log(calc)
}

function chooseStyle() {
    let style = document.getElementById("style1").value;
    console.log(document.getElementById("style1").value);

    if (style == "slash") {
        document.getElementById("slash").style.display = "flex";
        document.getElementById("slash1").style.display = "flex";
    } else {
        document.getElementById("slash").style.display = "none";
        document.getElementById("slash1").style.display = "none";
    }

    if (style == "crush") {
        document.getElementById("crush").style.display = "flex";
        document.getElementById("crush1").style.display = "flex";
    } else {
        document.getElementById("crush").style.display = "none";
        document.getElementById("crush1").style.display = "none";
    }

    if (style == "stab") {
        document.getElementById("stab").style.display = "flex";
        document.getElementById("stab1").style.display = "flex";
    } else {
        document.getElementById("stab").style.display = "none";
        document.getElementById("stab1").style.display = "none";
    }
    
}

function select() {
    var damage = document.getElementById("weapons").value ;
    console.log(damage)
}

console.log(dmgCalc())
console.log(document.getElementById("style").value);

// * 6 * (1- (5/100)) * ((4/100)* 12)