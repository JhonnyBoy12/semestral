// Cargar el carrito desde el localStorage
const cargarCarrito = () => {
    return JSON.parse(localStorage.getItem("carrito")) || [];
};

// Función para crear la estructura HTML de cada item del carrito
const createCarro = (name, precio, imagen) => {
    return `
    <div class="container1">
        <div class="carro">
            <img src="${imagen}" alt="Imagen" class="imagenCarro">
        </div>
        <div class="carro">
            <h2 class="carro-name">${name}</h2>
        </div>
        <div class="carro">
            <p class="carro-text">${precio}</p>
        </div>
    </div>
    `;
};

// Función para renderizar los items del carrito en el contenedor con id 'dataCarro'
const renderCarrito = () => {
    const carrito = cargarCarrito();
    const dataCarro = document.getElementById('dataCarro');
    
    if (!dataCarro) {
        console.error('Elemento con id "dataCarro" no encontrado.');
        return;
    }

    dataCarro.innerHTML = ''; // Limpiar contenido previo

    carrito.forEach((item) => {
        const carroHTML = createCarro(item.name, item.precio, item.imagen);
        dataCarro.innerHTML += carroHTML;
    });
};

// Ejecutar la función para renderizar el carrito al cargar la página
document.addEventListener('DOMContentLoaded', renderCarrito);
