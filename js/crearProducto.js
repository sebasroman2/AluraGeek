import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector('[data-formulario]');

async function crearProducto(evento) {
    evento.preventDefault();

    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;

    try {
        await conexionAPI.enviarProducto(nombre, precio, imagen);
    } catch (error) {
        alert(error);
    }

}

formulario.addEventListener('submit', evento => crearProducto(evento));