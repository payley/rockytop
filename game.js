var init = document.getElementsByClassName("load");
for (var i = 0; i < init.length; i++) {
  init[i].style.display = "none";
}

document.getElementById("value1").innerHTML =  "Player" + "&nbsp" + 1 + "'s" + "&nbsp" + "turn";


var p = 0;
var r = 0;
var turn = 1;
var prev = 0;
var pk = [14, 15, 16, 19, 20, 22, 29];
var rnd = [0];
var score = 0;
var val = 0;
var sc = 0;

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
  var val = parseFloat(document.getElementById("input" + turn).value);
  var sc = parseFloat(document.getElementById("S" + turn).innerHTML);
  var abs = turn - 1;
  var ref = (rnd[abs]) - 1;
  if (val > pk[ref]) {
    score = sc + (val - pk[ref]);
    document.getElementById("S" + turn).innerHTML = score;
    if (score == pk[ref]) {
      rnd[abs] = rnd[abs] + 1;
      document.getElementById("S" + turn).innerHTML = 0;
      document.getElementById("R" + turn).innerHTML = "Round" + "&nbsp" + rnd[abs] + "/" + r;
    } else if (score > pk[ref]) {
      document.getElementById("S" + turn).innerHTML = 0;
    }
  } else if (val < pk[ref]) {
    score = sc + val;
    document.getElementById("S" + turn).innerHTML = score;
    if (score == pk[ref]) {
      rnd[abs] = rnd[abs] + 1;
      document.getElementById("S" + turn).innerHTML = 0;
      document.getElementById("R" + turn).innerHTML = "Round" + "&nbsp" + rnd[abs] + "/" + r;
    } else if (score > pk[ref]) {
      document.getElementById("S" + turn).innerHTML = 0;
    }
  } else if (val == pk[ref]) {
    score = 0;
    document.getElementById("S" + turn).innerHTML = score;
    rnd[abs] = rnd[abs] + 1;
    document.getElementById("R" + turn).innerHTML = "Round" + "&nbsp" + rnd[abs] + "/" + r;
  }
  document.getElementById("input" + turn).value = "";
  turn = turn + 1;
  prev = turn;
  if (turn > p) {
    turn = 1;
  }
  if (rnd[abs] > r) {
    document.getElementById("value2").innerHTML = "Player" + "&nbsp" + (prev - 1) + "&nbsp" + "wins!";
    document.getElementById("button2").disabled = true;
    document.getElementById("R" + (prev-1)).innerHTML = "Round" + "&nbsp" + r + "/" + r;
    document.getElementById("value1").innerHTML = "";

  } else {
    document.getElementById("value1").innerHTML = "Player" + "&nbsp" + turn + "'s" + "&nbsp" + "turn";
  }
}
