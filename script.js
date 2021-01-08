document.cookie = "username=me@me.com"
document.cookie = "password=super_safe_password"
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
var Choose = Math.floor(Math.random() * 1);
var ChooseA = Math.floor(Math.random() * 1);
var ChooseB = Math.floor(Math.random() * 1);
switch (Choose) {
    case 0:
        Choice = ChooseA;
        break;
    case 1:
        Choice = ChooseB;
        break;
}
switch (Choice) {
    case 0:
        p = ACookie;
        break;
    case 1: 
        p = BCookie
        break;
}
document.cookie = `ACookie=${ACookie}`;
document.cookie = `BCookie=${BCookie}`;
var n = document.cookie = `${p}`;
var user = "hacker101";
var a = Math.floor(Math.random() * 99999999999999999999999999999999999);
var P = Math.floor(Math.random() * 99999999999999999999999999999999999);
var pass = (`${a}${n}${P}`);

function getInfo() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

        if (username == user && password == n) {
            document.body.innerHTML = `<h1>YOU WIN WITH THE PASSWORD</h1>${pass}`;
            return;
    }
    console.log("inncorect");
}
