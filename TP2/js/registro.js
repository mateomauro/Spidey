"Use strict"

//PARTE DE ENCONDER REGISTRO Y FORMULARIO JS
let contenedorRegistro = document.querySelector(".contenedor-registro");
let contenedorLogin = document.querySelector(".contenedor-login");
let btnLogin = document.querySelector(".login");
let btnRegistro = document.querySelector(".inicio-sesion");
let contenedor = document.querySelector(".contenedor");

contenedorRegistro.classList.remove("ocultar");

btnRegistro.addEventListener("click", () => {
    contenedorRegistro.classList.add("ocultar");
    contenedorLogin.classList.remove("ocultar");
    contenedor.classList.add("login-grid");
})

btnLogin.addEventListener("click", () => {
    contenedorLogin.classList.add("ocultar");
    contenedorRegistro.classList.remove("ocultar");
    contenedor.classList.remove("login-grid");

})


//ANIMACIONES 
document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll(".btn-confirmacion");

    buttons.forEach(function (button) {
        var parent = button.parentElement;
        var registroExitoso = parent.querySelector(".registroExitoso");

        button.addEventListener("click", function (event) {
            button.classList.add("tiempoTamaño");
            event.preventDefault();
            parent.classList.add("clicked");
            setTimeout(function () {
                parent.classList.add("success");
                registroExitoso.classList.remove("ocultar");
                registroExitoso.classList.add("aparecer");
            }, 1100);
            setTimeout(() => {
                window.location.href = "home.html";
            }, 2200);
        });
    });
});