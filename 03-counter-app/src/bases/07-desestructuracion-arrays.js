//Desestructuracion de arrays.

const personajes = ['Goku', 'Vegeta', 'Gohan'];

const [, ,p3] = personajes;


export const returnArray = () => {
    return ['ABC123', 123];
}

const [ letras, numeros] = returnArray();


//Tarea:
const usarEstado = (valor) => {
    return [valor, () => { console.log('Hola mundo'); } ];
} 


//Tarea 2: 
//ES MAS LOGICO HACER LA DESESTRUCTURACION DE ESTA FORMA QUE LA DE ARRIBA YA QUE ES CONFUSO HACER EL LLAMADO DE ESTADO[1]() Y QUE HAGA SU LOGICA. 
//ES MEJOR HACER LO DE ABAJO
//1. El primer valor del array se llamara nombre
//2. Se llamara setNombre
const setNombre = (nombre) => {
    const mensajeEnConsola = () => console.log('Hola Mundo desde setNombre');
    return [ nombre, mensajeEnConsola];
}
