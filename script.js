if (document.readyState == 'loading') {
	document.addEventListener('DOMContentLoaded', ready)
} else {
	ready()
}
function ready() {
	var query = new URL(window.location).searchParams.get('query')
	document.getElementById('query-input').value = query
	document.getElementById('query-output').innerHTML = query
}
var ACookie = Math.floor(Math.random(500000) * 1000000000000000);
var BCookie = Math.floor(Math.random(500000) * 1000000000000000);
var Choose = Math.floor(Math.random() * 2);
switch (Choose) {
    case 0:
        Pas = ACookie;
        break;
    case 1: 
        Pas = BCookie
        break;
}
var user = "hacker101";
var pass = Pas;

function getInfo() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

        if (username == user && password == pass) {
            console.log(username + "is logged in");
            return;
    }
    console.log("inncorect");
}
