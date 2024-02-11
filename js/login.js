document.addEventListener("DOMContentLoaded", function () {

    const email_login = "gui@gmail.com";
    const password = "123";

    function handleLogin(event) {

        event.preventDefault();

        const enteredUsername = document.getElementById("email_login").value;
        const enteredPassword = document.getElementById("password").value;

        if (enteredUsername === email_login && enteredPassword === password) {

            alert("Login aceito, bem vindo. " + enteredUsername);

            window.location.href = "../index.html";
        }

        else {
            alert("Email ou Senha invalido, tente novamente.");
        }
    }

    const loginButton = document.getElementById("loginButton");
    loginButton.addEventListener("click", handleLogin);
});


function validateForm(event) {
    event.preventDefault();

    let form = document.getElementById("myForm");
    let elements = form.elements;
    let valid = true;

    for (let i = 0; i < elements.length; i++) {
        if (elements[i].type !== "button" && elements[i].type !== "submit") {
            if (elements[i].value === "") {
                valid = false;
                elements[i].classList.add("is-invalid");
            } else {
                elements[i].classList.remove("is-invalid");
            }
        }
    }

    if (valid) {

        alert("Cadastro concluído. Salvando dados...");

        window.location.href = "../index.html";
    }
}