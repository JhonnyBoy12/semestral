export const getFiguras = async()=> {
    try{

        const response = await fetch("https://apifiguras.onrender.com");
        const data = await response.json();
        console.log(data);
        return data;

    }catch(error){
        console.log(`El error es: ${error}`);
    }

};