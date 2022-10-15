// Se puede evitar escribir el "return" usando los parentesis encausando las llaves. En otras palabras, los () hacen de return.
// Ya que sino, esto rompe en consola y no devuelve nada. 
//Esto se hace cuando se quiere devolver un objeto.
export const getUser = () =>
    ({
        uid: 'ABC123',
        username: 'polli_kpo98'
    });


//Pasandolo a arrow function devolviendo un objeto.
export const getActiveUser = (nombre) => 
({ 
    uid: 'ABC567',
    username: nombre
})

