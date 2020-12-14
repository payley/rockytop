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
    rnd = new Array(p);
    for (var i = 0; i < p; i++) {
        var num = i + 1;
        PL[i] = "Player" + '&nbsp' + num;
        rnd[i] = 1;
    }
    for (var i = 0; i < PL.length; i++) {
        var num = i + 1;
        var idp = document.getElementById("P" + num);
        idp.innerHTML = "Player" + "&nbsp" + num;
        var idr = document.getElementById("S" + num);
        idr.innerHTML = 0;
        var idr = document.getElementById("R" + num);
        idr.innerHTML = "Round" + "&nbsp" + rnd[i] + "/" + r;
        var idi = document.getElementById("I" + num);
        idi.style.display = "Block";
    }
}

function next() {
    sc = document.getElementById("input" + turn).value;
    prev = document.getElementById("S" + turn).innerHTML
    var idt = turn - 1;
    var ref = (rnd[idt]) - 1;
    var score = document.getElementById("S" + turn).innerHTML;
    if (sc > pk[ref]) {
        score = prev + sc;
    } else if (sc < pk[ref]) {
        score = prev - sc;
    } else {
        score = 0;
    }
    if (score == 0) {
        rnd[idt] = rnd[idt] + 1;
        document.getElementById("R" + turn).innerHTML = "Round" + "&nbsp" + rnd[idt] + "/" + r;
    }
    document.getElementById("input" + turn).value = "";
    turn = turn + 1;
    if (turn > p) {
        turn = 1;
    }
    document.getElementById("value1").innerHTML = "&nbsp" + turn;
}
