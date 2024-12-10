import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]");

// Función para manejar el evento de eliminación
async function eliminarProducto(evento) {
    evento.preventDefault();

    if (!evento.target.classList.contains("delete-button")) return;

    const botonEliminar = evento.target;
    const tarjetaProducto = botonEliminar.closest(".product-card");

    // Obtener el ID del producto (necesario para el API)
    const idProducto = tarjetaProducto.dataset.id;

    try {
        await conexionAPI.eliminarProducto(idProducto);
        tarjetaProducto.remove(); // Eliminar el producto del DOM
    } catch (error) {
        alert("Error al eliminar el producto: " + error.message);
    }
}

// Añadimos un listener al contenedor principal para manejar eventos delegados
lista.addEventListener("click", eliminarProducto);