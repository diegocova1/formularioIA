function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Validar usuario y contraseña
    if (username === "IsaPR" && password === "1234") {
        alert("Inicio de sesión exitoso!");
        return true;
    } else {
        alert("Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.");
        return false;
    }
}
