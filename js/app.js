document.getElementById("btn").addEventListener("click", function (event) {
    event.preventDefault();
    let firstName = document.getElementById("firstname").value;
    let lastName = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("number").value;
    let password = document.getElementById("password").value;
    let age = document.getElementById("age").value;
    let genderValue = document.getElementById("categoria").value;;

    let message = "<b> Primeiro nome: </b>" + firstName + "<br>" +
        "<b> Sobrenome: </b>" + lastName + "<br>" +
        "<b> E-mail: </b>" + email + "<br>" +
        "<b> Celular: </b>" + number + "<br>" +
        "<b> Senha: </b>" + password + "<br>" +
        "<b> Data nasc: </b> " + age + "<br>" +
        "<b> Gênero: </b>" + genderValue;

    document.getElementById("resultado").innerHTML = message;
});

btn.addEventListener("click", cadastrar);