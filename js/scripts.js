var link = document.querySelector(".login");
var popup = document.querySelector(".login-popup");
var close = popup.querySelector(".login-close");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var form = popup.querySelector("form");



link.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.add("login-popup-show");
    login.focus();
});

close.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.remove("login-popup-show");
});

form.addEventListener("submit", function (event) {
    if (!login.value || !password.value) {
        event.preventDefault();
    }
});

window.addEventListener("keydown", function (event) {
    if ((event.keyCode === 27) && (popup.classList.contains("login-popup-show"))) {
        popup.classList.remove("login-popup-show");
    }
});