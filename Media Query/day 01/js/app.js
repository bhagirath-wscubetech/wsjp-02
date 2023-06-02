const hamburger = document.querySelector("#hamburger");
const closeMenu = document.querySelector("#close");
const menu = document.querySelector("nav .menu");

hamburger.addEventListener(
    "click",
    function () {
        menu.classList.add('open-menu');
    }
)
closeMenu.addEventListener(
    "click",
    function () {
        menu.classList.remove('open-menu');
    }
)

document.addEventListener(
    "keyup",
    function (event) {
        if (event.key == "Escape") {
            menu.classList.remove('open-menu');
        }
    }
)