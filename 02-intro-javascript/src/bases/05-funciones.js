//Funciones en JS
function saludar(nombre) {
    return `Hola, ${nombre}`;
}

//No es recomendable crear las funciones de la manera de arriba ya que se puede "romper" ese metodo asignandole un valor X tal como hago debajo.
// saludar = 30;
// console.log(saludar);


//Forma recomendable:
//Observar que al declarar la funcion en una constante, al querer romperla asignandole un valor X nos rompe mostrando su error en consola. 
//De esta manera mantenemos la funcion original.
const saludo = function (nombre) {
    return `Hola, ${nombre}`;
}
// saludo = 20;
console.log(saludo);




//Funciones flecha (Arrow functions)
const saludoFlecha = (nombre) => `Hola, ${nombre}`;
const saludoSinParams = () => 'Hola mundo';


console.log(saludoFlecha('michael'));
console.log(saludoSinParams());




// Se puede evitar escribir el "return" usando los parentesis encausando las llaves. En otras palabras, los () hacen de return.
// Ya que sino, esto rompe en consola y no devuelve nada. 
//Esto se hace cuando se quiere devolver un objeto.
const getUser = () =>
    ({
        uid: 'ABC123',
        username: 'polli_kpo98'
    });

const user = getUser();
console.log(user)


/*Tarea:
1. Convertir la siguiente funcion a arrow function.
2. Devolver un objeto.
3. Probarlo.
*/
console.log("----TAREA-----");
function getUsuarioActivo(nombre){
    return {
        uid: 'ABC567',
        username: nombre,
    }
};
const usuarioActivo = getUsuarioActivo('polli');
console.log(usuarioActivo);

//Pasandolo a arrow function devolviendo un objeto.
const getActiveUser = (nombre) => 
({ 
    uid: 'ABC567',
    username: nombre
})

const activeUser = getActiveUser('polli_Tarea');
console.log(activeUser);

