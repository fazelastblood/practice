var objPeople = [
    
]

function getInfo() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value

    for (i = 0; i < objPeople.length; i++) {
        if (username == objPeople[i].username && password == objPeople[i].password) {
            document.querySelector("body").innerHTML = `<p>${username} is logged in</p>`;
            return;
        }
    }
    document.querySelector("body").innerHTML = `<p>inncorect</p>`;
}

function registerUsers() {
    var registerUser = document.getElementById("newUser").value
    var registerPassword = document.getElementById("newPassword").value

    var newUser = {
        username: registerUser,
        password: registerPassword
    }
    objPeople.push(newUser);
    var z = Math.floor(27589 * 2);
    document.cookie = `${newUser.username}=${newUser.username}${z}${newUser.password}`;
}
