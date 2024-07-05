const contenedores = document.querySelectorAll(".figure");
const imgs = document.querySelectorAll(".img");
for (let i = 0; i < contenedores.length; i++) {
    const container = document.createElement("div") 
    const subtitulo = document.createElement("h5");
    const parrafo = document.createElement("p");
    subtitulo.classList.add("subtitulos")
    container.classList.add("container-text")
    parrafo.classList.add("parrafo","absolute");
    container.appendChild(subtitulo);
    container.appendChild(parrafo);
    contenedores[i].appendChild(container);
}
const parrafos = document.querySelectorAll(".parrafo")
const subtitulos = document.querySelectorAll(".subtitulos")
subtitulos[0].textContent = "Simetría radial";
 parrafos[0].textContent ="Capturé imágenes con simetría radial, centrando los elementos alrededor de un punto focal para un efecto visual impactante."

 subtitulos[1].textContent = "Simetría horizontal";
 parrafos[1].textContent ="Utilicé la simetría horizontal para crear reflejos perfectos a lo largo de un eje horizontal, aportando equilibrio y tranquilidad visual."

 subtitulos[2].textContent = "Simetría vertical";
 parrafos[2].textContent ="Enfoqué mi trabajo en la simetría vertical, creando mitades idénticas a lo largo de un eje vertical para un equilibrio perfecto."

for (let i = 0 ; i < parrafos.length; i++){
   
    if (i >= 25 && i <=27){
        subtitulos[i].textContent = "Regla de los tercios";
        parrafos[i].textContent ="Apliqué la regla de los tercios, alineando los elementos clave con las líneas de intersección y manteniendo márgenes y horizonte adecuados para una imagen equilibrada y atractiva.";
    }
    if(i >=11 && i <= 24 ){
        subtitulos[i].textContent ="Práctica diaria"
        parrafos[i].textContent = "Tomé 14 fotos diarias para mejorar mi técnica, aplicando principios como la regla de los tercios y cuidando los márgenes y el horizonte.";
    }
    if(i >= 8 && i <=10){
        subtitulos[i].textContent ="Perpestiva"
        parrafos[i].textContent = "Exploré la perspectiva para crear profundidad y dimensión, utilizando líneas convergentes y puntos de fuga para añadir dinamismo y realismo."
    
    }
    if(i >= 6 && i <=7){
        subtitulos[i].textContent ="Proporción áurea"
        parrafos[i].textContent = "Utilicé la proporción áurea para organizar los elementos de manera armoniosa, guiando la mirada del espectador a través de la espiral áurea."
    }
    if(i >= 3 && i <=5){
        subtitulos[i].textContent = "Puertas y ventanas"
        parrafos[i].textContent = "Fotografié puertas y ventanas, explorando ángulos, iluminación y detalles arquitectónicos para crear una narrativa visual única."
    }
    
}
