import { getHeroeById } from "./08-import-export";

export const getHeroeByIdAsync = (id) => {

    return new Promise( (resolve, reject) => {

        setTimeout( () => { 
            const heroe = getHeroeById(id);
            
            if (heroe == null)
            {
                reject('No existe el heroe');
                return;
            }

            resolve(heroe);
        }, 1500)
    });
}