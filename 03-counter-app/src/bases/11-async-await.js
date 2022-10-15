//async - await -> Los await deben estar dentro de un async. El await permite hacer que el codigo sea sincrono y 
// asegurarse que se haya terminado la ultima linea para avanzar con la siguiente


//esto de arriba lo convertimos mejor ahora:

export const getImagenRefactorizada = async () => {
    try {
        
        const apiKey = 'pRwptk8y8yX5WOxjkrwrJQ3O4zruWbQT';
        const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?apikey=${apiKey}`);
        const { data } = await respuesta.json();
    
        const { url }  = data.images.original;
        
        return url;
    } catch (error) {
        return 'No existe';
    }
}
