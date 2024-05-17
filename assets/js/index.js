import { productos } from "./productos.js";




const createCard =(name,precio,imagen)=> {
    return`
    
        <div class="col mt-2">
            <div class="card" style="width: 15rem;">
                <img src="${imagen}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${name} </h5>
                    <p class="card-text">${precio}</p>
                    <a href="./batman1.html" class="btn btn-primary">Ver Mas</a>
                </div>
            </div>
        </div>
    
`;
}

const comicCardsRow = document.getElementById('comicCardsRow');
    productos.map((comic)=> {
        const card = createCard(comic.name, comic.precio, comic.imagen);
        comicCardsRow.innerHTML += card;
    });



