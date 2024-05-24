export const getComics = async()=> {
    try{

        const response = await fetch("https://apicomics.onrender.com");
        const data = await response.json();

        return data.results;

    }catch(error){
        console.log(`El error es: ${error}`);
    }

}