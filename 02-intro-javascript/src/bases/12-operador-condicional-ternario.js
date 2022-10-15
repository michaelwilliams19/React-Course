const activo = true;

//if ternario comun:
// const mensaje = (activo) ? "activo" : "inactivo";


//Se usa mucho en react. Esto significa que si es activo es true entonces va a realizar lo que se encuentra a la derecha del &&. 
//En caso de ser false no va a ejecutar nada.
const mensaje = activo && 'Activo';

console.log(mensaje)