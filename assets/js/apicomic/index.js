import { getComics } from "./getComics.js";
import { enviarDatos , botonAgregarCarrito} from "./detallesComic.js";

export let carrito  = JSON.parse(localStorage.getItem("carrito")) || [];

const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");

/*-------MAP-MUESTEA COMPLETA--------*/
const createCard = (result = [], containerId) => {
    let comicsRow = document.getElementById(containerId);

    if(!comicsRow){
        console.error(`${containerId} no encontrado`);
        return;
    }

    result.map((comic) => {
        const { series, id, name, precio, tipo, imagen, comentario, editorial, autor, fecha, paginas, tamaño, formato } = comic;

        const divCol = document.createElement("div");
        divCol.classList.add("col-6", "col-sm-4", "col-md-3", "col-lg-2", "mb-4");

        const card = document.createElement("div");
        card.classList.add("card", "h-100");

        const img = document.createElement("img");
        img.src = imagen;
        img.alt = `Imagen de ${name}`;
        img.classList.add("card-img-top");

        const divBody = document.createElement("div");
        divBody.classList.add("card-body");

        const title = document.createElement("h5");
        title.classList.add("card-title");
        title.textContent = name;

        const subTitle = document.createElement("p");
        subTitle.classList.add("card-text");
        subTitle.textContent = precio;

        const btnVer = document.createElement("a");
        btnVer.href = "#";  
        btnVer.classList.add("btn", "btn-primary");
        btnVer.textContent = "Ver más";
        btnVer.addEventListener("click", () => {
            enviarDatos(series, id, name, precio, tipo, imagen, comentario, editorial, autor, fecha, paginas, tamaño, formato);

        });

        divBody.appendChild(title);
        divBody.appendChild(subTitle);
        divBody.appendChild(btnVer);

        card.appendChild(img);
        card.appendChild(divBody);

        divCol.appendChild(card);

        comicsRow.appendChild(divCol);
    });
};


 /*-------FILTER DE SERIES: 1---------*/
 const filtroSerie1 = (result = []) => {
    return result.filter(comic => comic.series === 1);
};
/*-------FILTER DE SERIES: 2---------*/
const filtroSerie2 = (result = []) => {
    return result.filter(comic => comic.series === 2);
};
/*-------FILTER DE SERIES: 3---------*/
const filtroSerie3 = (result = []) => {
    return result.filter(comic => comic.series === 3);
};
 /*-------FUNCION PARA TENER LOS ULTIMOS 6 COMICS---------*/
const getUltimosComic = (comics) => {
    return comics.slice(-6).reverse(); 
};

/*---------------------*/

getComics()
    .then(data => {

        //Verificacion de data
        console.log("Datos recibidos: ", data); 

        //Crear tarjeta todo los comics
        createCard(data,"comicsRowfull");



        //---------------------
        // Obtener los últimos 6 cómics + CREATECARD
        const ultimosComic = getUltimosComic(data);
        //CREAR CARDS
        createCard(ultimosComic,"ultimosAgregados")
        //----------------------
        

        

        //Filtrar comics DC
        const filtroComics1 = filtroSerie1(data);
        createCard(filtroComics1, "comicsRowdc");

        //Filtrar comics Marvel
        const filtroComics2 = filtroSerie2(data);
        createCard(filtroComics2, "comicsRowmarvel");

        //Filtrar comics Manga
        const filtroComics3 = filtroSerie3(data);
        createCard(filtroComics3, "comicsRowmanga");

    })
    .catch(error => console.log(error));


/*-------Ver carrito---*/

verCarrito.addEventListener("click", () =>{
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    <h1 class ="modal-header-title">Carrito.</h1>
    `;
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement ("h3")
    modalbutton.innerText = "x";
    modalbutton.className = "modal-header-button";

    modalbutton.addEventListener("click", ()=>{
        modalContainer.style.display = "none";
    })

    modalHeader.append(modalbutton);

});



