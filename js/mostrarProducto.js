import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector('[data-lista]');

export default function construyeCard(nombre, precio, imagen, id) {
    const producto = document.createElement('div');
    producto.className = 'product-card';
    producto.dataset.id = id;
    producto.innerHTML = `
    <img src="${imagen}" alt="imagen producto" class="product-image">
    <h3 class="product-name">${nombre}</h3>
    <div class="product-info">
        <p class="product-price">$ ${precio}</p>
        <button class="delete-button" aria-label="Eliminar producto">🗑️</button>
    </div>`;

    return producto;
}

async function listarProductos() {
    try {
        const listaAPI = await conexionAPI.listarProductos();
        listaAPI.forEach(producto => lista.appendChild(construyeCard(producto.nombre, producto.precio, producto.imagen, producto.id)));
    } catch (error) {
        lista.innerHTML = `<h2 class="mensaje__titulo">Ha ocurrido un problema con la conexion...</h2>`
    }
}

listarProductos();