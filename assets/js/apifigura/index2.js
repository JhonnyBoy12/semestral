import { getFiguras } from "./getFiguras.js";

/*-------MAP-MUESTEA COMPLETA--------*/
const createCard = (result = [], containerId) => {
    let comicsRow = document.getElementById(containerId);

    if(!comicsRow){
        console.error(`${containerId} no encontrado`);
        return;
    }

    result.map((figuras) => {
        const { series, name, precio, imagen } = figuras;

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
        btnVer.addEventListener("click", (event) => {
            event.preventDefault();
            enviarDatos(series, name, precio, imagen);
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

getFiguras()
    .then(data => {

        //Verificacion de data
        console.log("Datos recibidos: ", data); 

        //Crear tarjeta todo los comics
        createCard(data,"figurasRowfull");
        
    })
    .catch(error => console.log(error));