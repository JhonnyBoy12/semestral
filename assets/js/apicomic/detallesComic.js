


export const enviarDatos = (series, id,name,precio,tipo,imagen,comentario,editorial,autor,fecha,paginas,tamaño,formato) => {

    console.log(`Esta bien la data ${tipo} y ${name}`);

    const rutaArchivohtml = '../../comics.html';

    fetch(rutaArchivohtml)
        .then( response => response.text() )
        .then((html) => {

            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');

            const imagePage = doc.getElementById('imagePage');
            imagePage.src = imagen;

            const namePage = doc.getElementById('namePage');
            namePage.textContent = name;

            const precioPage = doc.getElementById('precioPage');
            precioPage.textContent = precio;

            const comentarioPage = doc.getElementById('comentarioPage');
            comentarioPage.textContent = comentario;

            const editorialPage = doc.getElementById('editorialPage');
            editorialPage.textContent = editorial;

            const autorPage = doc.getElementById('autorPage');
            autorPage.textContent = autor;

            const fechaPage = doc.getElementById('fechaPage');
            fechaPage.textContent = fecha;

            const paginasPage = doc.getElementById('paginasPage');
            paginasPage.textContent = paginas;

            const tamañoPage = doc.getElementById('tamañoPage');
            tamañoPage.textContent = tamaño;

            const formatoPage = doc.getElementById('formatoPage');
            formatoPage.textContent = formato;

            const nuevoHTML = new XMLSerializer().serializeToString(doc);

            document.body.innerHTML = nuevoHTML;
    })
    .catch((error)=> {
        console.error(`Error al cargar los datos : ${error}`);

    });

}