document.getElementById('date').innerHTML = new Date().toDateString();
function start(){
    var p = document.getElementById("players").value;
    var r = document.getElementById("rounds").value;
    document.getElementById("value1").innerHTML = r;
}
function run(){
    var num = p + 1;
    var i = 0;
    for (var i = 1; i < p; i++){
        var idx = document.getElementById("P" + i);
        idx.innerHTML = "Player_" + i;
        document.getElementById("value2").innerHTML = i;
}
        document.getElementById("value2").innerHTML = i;
}
