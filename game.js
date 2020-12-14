document.getElementById("value1").innerHTML = "&nbsp" + "1";
var init = document.getElementsByClassName("load")
for (var i = 0; i < init.length; i++) {
    init[i].style.display = "none";
}
var p = 0;
var r = 0;
var turn = 1;

function start() {
    p = document.getElementById("players").value;
    r = document.getElementById("rounds").value;
    var PL = new Array(p);
    for (var i = 0; i < p; i++) {
        var num = i + 1;
        PL[i] = "Player" + '&nbsp' + num;
    }
    for (var i = 0; i < PL.length; i++) {
        var num = i + 1;
        var idp = document.getElementById("P" + num);
        idp.innerHTML = "Player" + "&nbsp" + num;
        var idr = document.getElementById("R" + num);
        idr.innerHTML = "Round" + "&nbsp" + 0 + "/" + r;
        var idi = document.getElementById("I" + num);
        idi.style.display = "Block";
    }
    var turn = 1;
    document.getElementById("value1").innerHTML = "&nbsp" + turn;
}

function next() {
    turn = turn + 1;
    if (turn > p) {
        turn = 1;
    }
    document.getElementById("value1").innerHTML = "&nbsp" + turn;
}
