const persona = {
    nombre : 'Polli',
    apellido: 'Williams',
    edad: 24,
    direccion: {
        ciudad: 'Buenos Aires',
        zip: 1257,
        latitud: 14.33,
        longitud: 34.9,
    }
};


console.log( { persona }); 
//si en consola vemos unas llaves significa que es un objeto.
//Los objetos literales tambien son conocidos como diccionarios, trabajan con pares de valores. es decir, tenemos una llave y su clave.

//se puede usar tambien si es que tiene muchas prop:
// console.table( persona);

//Aca estamos copiando la referencia al espacio en memoria de persona. 
//NO LA ESTOY CLONANDO. Si cambio el nombre de persona2 tambien estoy modificando a 'persona'.
const persona2 = persona;
// persona2.nombre = 'aa';
console.log(persona2);

//la forma correcta de crear un clon:
const personaClonada = { ...persona};
personaClonada.nombre = 'Nombre Clonado sin modificar persona.'
console.log(personaClonada);
