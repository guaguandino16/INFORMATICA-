
const titulo = document.getElementById("titulo");
const parrafo1 = document.getElementById("parrafo1");
const parrafo2 = document.getElementById("parrafo2");
const contenedor = document.getElementById("contenedor");
const boton = document.getElementById("boton");



boton.addEventListener("click", function () {
    alert("Al aceptar cambia todo");

    // Cambia contenido de titulo
    titulo.textContent = "Todo ha cambiado";

    // Cambia contenido de parrafos
    parrafo1.textContent = "Reemplace este texto con Java Yei";
});