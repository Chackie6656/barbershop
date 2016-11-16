var mapOpen = document.querySelector(".js-open-map");
var mapPopup = document.querySelector(".map-popup");
var mapClose = mapPopup.querySelector(".map-close");

window.addEventListener("keydown", function (event) {
    if ((event.keyCode === 27) && (mapPopup.classList.contains("map-popup-show"))) {
        mapPopup.classList.remove("map-popup-show");
    }
});

mapOpen.addEventListener("click", function (event) {
    event.preventDefault();
    mapPopup.classList.add("map-popup-show");
});

mapClose.addEventListener("click", function (event) {
    event.preventDefault();
    mapPopup.classList.remove("map-popup-show");
});