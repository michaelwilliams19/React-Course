//Desestructuracion de arrays.

const personajes = ['Goku', 'Vegeta', 'Gohan'];

const [ personajeNumero1 ] = personajes;
console.log(personajeNumero1);

//Si quiero el segundo elemento o tercer elemento nomas:
const [, p2] = personajes;
console.log(p2);

const [, ,p3] = personajes;
console.log(p3);


const returnArray = () => {
    return ['ABC123', 123];
}

const [ letras, numeros] = returnArray();
console.log(letras, numeros);

console.log("---");
console.log("---");
console.log("---");

//Tarea:
const usarEstado = (valor) => {
    return [valor, () => { console.log('Hola mundo'); } ];
} 

const estado = usarEstado('Trunks');
estado[1]();




//Tarea 2: 
//ES MAS LOGICO HACER LA DESESTRUCTURACION DE ESTA FORMA QUE LA DE ARRIBA YA QUE ES CONFUSO HACER EL LLAMADO DE ESTADO[1]() Y QUE HAGA SU LOGICA. 
//ES MEJOR HACER LO DE ABAJO
//1. El primer valor del array se llamara nombre
//2. Se llamara setNombre
const setNombre = (nombre) => {
    const mensajeEnConsola = () => console.log('Hola Mundo desde setNombre');
    return [ nombre, mensajeEnConsola];
}

const [nombre, setNombreFunction] = setNombre('yo');
console.log(nombre);
setNombreFunction();