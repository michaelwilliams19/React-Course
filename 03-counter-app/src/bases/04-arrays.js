//no se recomienda hacerlo de esta forma
// const arreglo = new Array();

const arreglo = [];
//no es recomendable usar push porque modifica el objeto principal. Para insertar algo utilizaremos el operador spread.
arreglo.push(1);
arreglo.push(2);

let arreglo2 = [...arreglo, 5];

//callbacks. Una funcion que se va a ejecutar por cada uno de los elementos dentro del arreglo2.
const arreglo3 = arreglo2.map( function(x) {
    return x * 2;
} );


console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);