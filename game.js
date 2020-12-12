document.getElementById('date').innerHTML = new Date().toDateString();
function start(){
    var p = document.getElementById("players").value;
    var r = document.getElementById("rounds").value;
    document.getElementById("value1").innerHTML = p;
    document.getElementById("value2").innerHTML = r;
    for (var i = 1; i < p; i++){
    var idx = "P" + i
    document.getElementById(idx).innerHTML = "Player_" + i;
}
}    
