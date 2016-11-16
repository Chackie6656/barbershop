var link = document.querySelector(".login");
var popup = document.querySelector(".login-popup");
var close = popup.querySelector(".login-close");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var form = popup.querySelector("form");

var mapOpen = document.querySelector(".js-open-map");
var mapPopup = document.querySelector(".map-popup");
var mapClose = mapPopup.querySelector(".map-close");

link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("login-popup-show");
    login.focus();
});

close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("login-popup-show");
});

form.addEventListener("submit", function(event) {
    if (!login.value || !password.value) {
        event.preventDefault();
    }    
});

window.addEventListener("keydown", function(event) {
    if ((event.keyCode === 27) && (popup.classList.contains("login-popup-show")) ) {
        popup.classList.remove("login-popup-show");
    }
    if ((event.keyCode === 27) && (mapPopup.classList.contains("map-popup-show")) ) {
        mapPopup.classList.remove("map-popup-show");
    }
});

mapOpen.addEventListener("click", function(event) {
    event.preventDefault();
    mapPopup.classList.add("map-popup-show");
});

mapClose.addEventListener("click", function(event) {
    event.preventDefault();
    mapPopup.classList.remove("map-popup-show");
});