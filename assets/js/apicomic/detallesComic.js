import { carrito } from "./index.js";

//set item local storage

const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
    };
//-------------------------------------------------------------


export const botonAgregarCarrito = (id, name, precio, imagen) => {
    const button = document.createElement("button");
    button.classList.add("rounded-5", "w-50", "p-2", "fs-6");
    button.style.backgroundColor = "#7C7C7C";
    button.style.color = "white";
    button.textContent = "Agregar al carrito";
    button.addEventListener("click", () => {
        agregarAlCarrito(id, name, precio, imagen);
    });

    const canastoComic = document.getElementById('canastoComic');
        canastoComic.innerHTML = ''; // Limpiar el contenido anterior
        canastoComic.appendChild(button);
    
    
};


const agregarAlCarrito = (id, name, precio, imagen) => {
    const comic = { id, name, precio, imagen };
    carrito.push(comic);
    console.log(carrito);
    saveLocal();
};


export const enviarDatos = (series, id, name, precio, tipo, imagen, comentario, editorial, autor, fecha, paginas, tamaño, formato) => {
    console.log(`Esta bien la data ${tipo} y ${name}`);

    const rutaArchivohtml = './comics.html';

    fetch(rutaArchivohtml)
        .then(response => response.text())
        .then((html) => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');

            const updateElement = (id, value) => {
                const element = doc.getElementById(id);
                if (element) element.textContent = value;
            };

            doc.getElementById('imagePage').src = imagen;
            updateElement('namePage', name);
            updateElement('precioPage', precio);
            updateElement('comentarioPage', comentario);
            updateElement('editorialPage', editorial);
            updateElement('autorPage', autor);
            updateElement('fechaPage', fecha);
            updateElement('paginasPage', paginas);
            updateElement('tamañoPage', tamaño);
            updateElement('formatoPage', formato);

            const nuevoHTML = new XMLSerializer().serializeToString(doc);
            document.body.innerHTML = nuevoHTML;


            botonAgregarCarrito(id, name, precio, imagen);
        })
        .catch((error) => {
            console.error(`Error al cargar los datos : ${error}`);
        });
};
