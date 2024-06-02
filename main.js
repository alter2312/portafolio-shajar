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

// Creamos las 26 imágenes adicionales
for (let i = 8; i <= 29; i++) {
  const figure = document.createElement("figure");
  const img = document.createElement("img");
  img.src = "img/foto-"+i+ ".jpg";
  figure.classList.add("figure", "overflow-hidden", "rounded-3xl", "w-4/5", "h-full", "flex", "flex-col", "card", "items-center");
  img.classList.add("img", "object-cover", "w-full", "h-full", "hover:scale-110", "transition", "duration-1000");
  figure.appendChild(img);
  fragment.appendChild(figure);
}

// Agregamos el fragmento al contenedor
const containerImg = document.querySelector("#container-img");
containerImg.appendChild(fragment);

// Ocultamos las imágenes adicionales
const hiddenImgs = containerImg.querySelectorAll("figure:nth-child(n+4)");
hiddenImgs.forEach((img) => img.classList.add("hidden"));

// Agregamos un listener al botón "Ver más"
const btnMore = document.querySelector("#btn-img");
btnMore.addEventListener("click", () => {
  // Mostramos las imágenes adicionales
  hiddenImgs.forEach((img) => img.classList.remove("hidden"));
  // Ajustamos el tamaño del contenedor
  containerImg.style.height = "auto";
});

// const btnImg = document.querySelector("#btn-img");
// btnImg.addEventListener("click",(e)=>{
   
// })