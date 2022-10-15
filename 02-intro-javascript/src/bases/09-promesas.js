import { getHeroeById } from "./bases/08-import-export";

// //Promises.

// //resolve se ejecuta si la promesa termina bien.
// //reject se ejecuta si no se pudo resolver.
// const promesa = new Promise( (resolve, reject) => {
//     setTimeout( () => { 
//         const heroe = getHeroeById(2);
//         resolve(heroe);
//         // reject('No se pudo encontrar el heroe');
//     }, 2000)
// });

// //then significa que la promesa se hizo correctamente. Catch si hubo un error. Finally se ejecuta dessp del then o el catch
// promesa.then( (heroe) => {
//     console.log('heroe:', heroe)
// })
// .catch( err => console.warn(err));


// /*Tarea:
// Importar GetHeroeById de la clase 08-import-export y mostrar en consola el heroe*/



const getHeroeByIdAsync = (id) => {

    return new Promise( (resolve, reject) => {

        setTimeout( () => { 
            const heroe = getHeroeById(id);
            
            if (heroe == null)
            {
                reject('No existe el heroe');
                return;
            }

            resolve(heroe);
        }, 2000)
    });
}

getHeroeByIdAsync(2)
.then(console.log)
.catch(console.warn);