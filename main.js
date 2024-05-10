const darkMode = document.querySelector(".light-dark");
const body = document.querySelector("body");
const fondoHeader = document.querySelector("#fondo-header");
const card = document.querySelectorAll(".card")

darkMode.addEventListener("click",(e)=>{
    body.classList.toggle("dark-mode");
    fondoHeader.classList.toggle("dark-mode");
    fondoHeader.classList.toggle("bg-neutral-50");
    fondoHeader.classList.toggle("bg-neutral-950");
    darkMode.classList.toggle("light-dark-active")

})