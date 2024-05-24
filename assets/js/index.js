import { getComics } from "./getComics.js";
 
const enviarDatos =(name,precio,imagen)=> {

    const rutaArchivoHTML = "../comics.html";

    fetch(rutaArchivoHTML)
        .then(response => response.text())
        .then(( html ) => {

            const parser= new DOMParser();
            const doc = parser.parseFromString(html,"text/html");

            const imagePage = doc.getElementById("imagenPage");
            imagePage.src = imagen;

            const namePage = doc.getElementById("namePage");
            namePage.textContent = `${name}`;

            const speciesPage = doc.getElementById("precioPage");
            speciesPage.textContent = `${precio}`;


            const nuevoHTML = new XMLSerializer().serializeToString(doc);

            document.body.innerHTML = nuevoHTML;
        })
        .catch((error)=> {
            console.log(`El error es: ${error}`);
        })
}




const createCard = (result = [])=>{
    let comicsRow = document.getElementById("comicsRow");
    result.map((result)=> {

        const {series, name, precio, imagen } = result;
        

        const divCol = document.createElement("div");
        divCol.classList.add("col", "mt-2");
        
    
        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src = image;
        img.alt = `Imagen de ${name}`;
        img.classList.add("card-img-top");

        const divBody = document.createElement("div");
        divBody.classList.add("card-body");

        const title = document.createElement("h5");
        title.classList.add("card-title");
        title.textContent = `Nombre: ${name}`;

        const subTitle = document.createElement("p");
        subTitle.classList.add("card-text");
        subTitle.textContent = `Nombre: ${species}`;

        
        const btnVer = document.createElement("button");
        btnVer.classList.add("btn","btn-primary");
        btnVer.textContent = "Ver detalles";
        btnVer.addEventListener("click",()=> {
            enviarDatos(id,name,precio,imagen);
        })
        
        divBody.appendChild(title);
        divBody.appendChild(subTitle);
        divBody.appendChild(subTitle2);
        divBody.appendChild(btnVer);

        card.appendChild(img);
        card.appendChild(divBody);

        divCol.appendChild(card);

        personajesRow.appendChild(divCol);

    });
}


getComics()
    .then(data=> createCard(data))
    .catch(error=> console.log(error));

