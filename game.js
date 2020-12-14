document.getElementById("value1").innerHTML = "&nbsp" + "1";
var init = document.getElementsByClassName("load");
for (var i = 0; i < init.length; i++) {
    init[i].style.display = "none";
}

var p = 0;
var r = 0;
var turn = 1;
var prev = 0;
var pk = [14, 15, 16, 19, 20, 22, 29];
var rnd = [0];

function start() {
    p = document.getElementById("players").value;
    r = document.getElementById("rounds").value;
    var PL = new Array(p);
    rnd = Array(p);
    for (var i = 0; i < p; i++) {
        var num = i + 1;
        PL[i] = "Player" + '&nbsp' + num;
        rnd[num] = 1;
    }
    for (var i = 0; i < PL.length; i++) {
        var num = i + 1;
        var idp = document.getElementById("P" + num);
        idp.innerHTML = "Player" + "&nbsp" + num;
        var idr = document.getElementById("S" + num);
        idr.innerHTML = 0;
        var idr = document.getElementById("R" + num);
        idr.innerHTML = "Round" + "&nbsp" + rnd[num] + "/" + r;
        var idi = document.getElementById("I" + num);
        idi.style.display = "Block";
    }
}

function next() {
    sc = document.getElementById("input" + turn).value;
    prev = document.getElementById("S" + turn).innerHTML;
    var ref = rnd[turn];
    if (sc > pk[ref]) {
        document.getElementById("S" + turn).innerHTML = prev + sc;
    } else if (sc < pk[ref]) {
        document.getElementById("S" + turn).innerHTML = prev - sc;
    } else {
        document.getElementById("S" + turn).innerHTML = 0;
        rnd[turn] = ref + 1;
        document.getElementById("R" + turn).innerHTML = "Round" + "&nbsp" + rnd[turn] + "/" + r;
    }
    document.getElementById("S" + turn).innerHTML = sc;
    document.getElementById("input" + turn).value = "";
    turn = turn + 1;
    if (turn > p) {
        turn = 1;
    }
    document.getElementById("value1").innerHTML = "&nbsp" + turn;
}
