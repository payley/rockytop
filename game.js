document.getElementById('date').innerHTML = new Date().toDateString();
function test(){
    var p = document.getElementById("players").value;
    var r = document.getElementById("rounds").value;
    document.getElementById("value1").innerHTML = p;
    document.getElementById("value2").innerHTML = r;
}

