document.getElementById('date').innerHTML = new Date().toDateString();
function start(){
    var p = document.getElementById("players").value;
    var r = document.getElementById("rounds").value;
    document.getElementById("value1").innerHTML = p;
}
function run(){
    for (var i = 0; i < p; i++){
        var idx = document.getElementById("P" + i)
        idx.innerHTML = "Player_" + i;
        document.getElementById("value2").innerHTML = i;
}
document.getElementById("players").addEventListener("click", myFunction);

function myFunction() {
  alert ("Hello World!");
}
