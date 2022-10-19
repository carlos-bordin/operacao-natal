const menuOpen = document.querySelector(".menu");
const menuClose = document.querySelector(".close");
const overlay = document.querySelector(".overlay");
const links = [...document.querySelectorAll(".overlay__content a")];
const campanha = document.querySelector("#campanha");
const como = document.querySelector("#como");
const contato = document.querySelector("#contato");

menuOpen.addEventListener("click", () => {
    overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
    overlay.classList.remove("overlay--active");
});

links.map(e => {
    e.addEventListener("click", () => {
        overlay.classList.remove("overlay--active");
    })
})