// Funcion para listar productos
async function listarProductos() {
    const conexion = await fetch('http://localhost:3001/productos');

    const conexionConvertida = conexion.json();

    // console.log(conexionConvertida);
    return conexionConvertida;
}

// Metodo para poder agregar nuevos productos
async function enviarProducto(nombre, precio, imagen) {
    const conexion = await fetch('http://localhost:3001/productos', {
        method: "POST",
        headers: { 'Content-type': 'aplication/json' },
        body: JSON.stringify({
            nombre: nombre,
            precio: precio,
            imagen: imagen
        })
    });

    const conexionConvertida = conexion.json();

    if (!conexion.ok) {
        throw new Error("Ha ocurrido un error al enviar el producto");
    }

    return conexionConvertida;
}

// Metodo para eliminar productos
async function eliminarProducto(id) {
    const conexion = await fetch(`http://localhost:3001/productos/${id}`, {
        method: "DELETE"
    });

    if (!conexion.ok) {
        throw new Error("No se pudo eliminar el producto");
    }
}

export const conexionAPI = { listarProductos, enviarProducto, eliminarProducto };