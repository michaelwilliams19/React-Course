//async - await -> Los await deben estar dentro de un async. El await permite hacer que el codigo sea sincrono y 
// asegurarse que se haya terminado la ultima linea para avanzar con la siguiente

const getImagen = async () => {
    return 'https://asdfsa.com';
}

getImagen();



//esto de arriba lo convertimos mejor ahora:

const getImagenRefactorizada = async () => {
    const apiKey = 'VThn5yepA2cECRw1uqDLFigsoK25SxEf';
    const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?apikey=${apiKey}`);
    const { data } = await respuesta.json();

    const { url }  = data.images.original;
    
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
}

getImagenRefactorizada();
