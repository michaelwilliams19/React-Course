import heroes, { owners } from "../data/heroes";
// console.log(owners);

export const getHeroeById = (id) => heroes.find(x => x.id == id);

//obtener heroe con el id 2
// console.log(getHeroeById(2));

//El find es un firstOrDefault.
//En caso de querer todos los registros que cumplan con la condicion usar .filter

export const getHeroesByOwner = (owner) => heroes.filter( x => x.owner === owner);
// console.log(getHeroesByOwner('DC'));

// export default getHeroeById;
