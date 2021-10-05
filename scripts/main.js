function msg() {
    var user = document.getElementById('UserInput').value;
    var pwd = document.getElementById('UserPassword').value;

    alert(`Hola ${user} tu password es ${pwd}`);
}

function msg1() {
    var NewUser = document.getElementById('NewUser').value;
    var NewPwd = document.getElementById('NewPassword').value;
    var email = document.getElementById('NewEmail').value;

    alert(`Hola, ahora estás registrado como ${NewUser} , tu password es ${NewPwd} y tu correo es ${email}`);
}