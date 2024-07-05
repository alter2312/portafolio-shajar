// dark mode 
const darkMode = document.querySelector(".light-dark");
const body = document.querySelector("body");
const fondoHeader = document.querySelector("#fondo-header");
const card = document.querySelectorAll(".card");
darkMode.addEventListener("click",(e)=>{
    body.classList.toggle("dark-mode");
    fondoHeader.classList.toggle("dark-mode");
    fondoHeader.classList.toggle("bg-neutral-50");
    fondoHeader.classList.toggle("bg-neutral-950");
    darkMode.classList.toggle("light-dark-active");
})
//boton ver mas
const fragment = document.createDocumentFragment();
for (let i = 5; i <= 29; i++) {
  const figure = document.createElement("figure");
  const img = document.createElement("img");
  img.src = "img/foto-"+i+ ".jpg";
  figure.classList.add("figure", "overflow-hidden", "rounded-3xl", "w-4/5", "h-full", "flex", "flex-col", "card", "items-center");
  img.classList.add("img", "object-cover", "w-full", "h-full", "hover:scale-110", "hover:opacity-80", "transition", "duration-500");
  
  
  figure.appendChild(img);
  fragment.appendChild(figure);
}
const containerImg = document.querySelector("#container-img");
containerImg.appendChild(fragment);
const Imgs = containerImg.querySelectorAll("figure:nth-child(n+4)");
Imgs.forEach((img) => img.classList.add("hidden"));
const btnLess = document.querySelector("#btn-less");
const btnMore = document.querySelector("#btn-more");
btnMore.addEventListener("click", (e) => {
  Imgs.forEach((img) => img.classList.remove("hidden"));
  containerImg.style.height = "auto";
  btnMore.classList.add("hidden");
  btnLess.classList.remove("hidden");
});
btnLess.addEventListener("click", (e) => {
  Imgs.forEach((img) => img.classList.add("hidden"));
  containerImg.style.height = "60vh";
  containerImg.style.height = "auto";
  btnMore.classList.remove("hidden");
  btnLess.classList.add("hidden");
});
