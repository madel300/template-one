let link = document.querySelector(".header .container .links .icon");
let menu = document.querySelector(".header .container .links ul");

document.body.childNodes.forEach(element => {
    element.addEventListener("click", function (el) {
        if (el.target === link) {
            menu.classList.toggle("show");
        } else {
            menu.classList.remove("show");
        }
        
    })
});
