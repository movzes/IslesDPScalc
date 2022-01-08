function dmgCalc() {
    var defenseStat = 0;
    var offenseStat = 257;
    var offsnseValue = document.getElementById("weapons").value ;

    var baseHit = offsnseValue * 1.5;
    var defRatio = 1.0 - Math.max(Math.max(0, defenseStat / (Math.max(offsnseValue) + offsnseValue * 0.4)));
    var baseMod = 0.05 + (0.05 * Math.pow(Math.max(offsnseValue), 1.3)/Math.pow(Math.max(offsnseValue), 1.6));

    let calc = Math.round(Math.max(baseHit * defRatio) + Math.ceil(offsnseValue * baseMod) * 1.076 * 6 * (1 + 4.4/100) * (1- (15/100)) * (1+ (6/100)) * (235/100));

    document.getElementById("dps").innerHTML = calc;

    console.log(calc)
}

function select() {
    var damage = document.getElementById("weapons").value ;
    console.log(damage)
}

console.log(dmgCalc())

// * 6 * (1- (5/100)) * ((4/100)* 12)