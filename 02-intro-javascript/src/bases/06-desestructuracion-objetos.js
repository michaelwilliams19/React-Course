//Desestructuración o asignacion desestructurante.
const persona = {
    nombre: 'Steve',
    edad: 40,
    clave: 'CapitanAmerica',
    rango: 'Teniente'
};

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);



const { nombre, edad, clave } = persona; //Extrae los valores de las propiedades que especifique en las llaves.
console.log(nombre);
console.log(edad);
console.log(clave);


//Desestructuracion dentro de una arrow function.
const returnPersona = (usuario) => {
    const {nombre, edad } = persona;
    console.log(nombre, edad);
} 
returnPersona(persona);




//Es mas recomendable hacer la DESESTRUCTURACION EN EL ARGUMENTO.
const returnPersonaEnArugmento = ({nombre, clave}) => {
    console.log(nombre, clave);
};

returnPersonaEnArugmento(persona);





//En el curso se lo llamo useContext pero a partir de la version react 17 ese nombre es reservado por ende hay que cambiar el nombre entero
const prueba = ({clave, nombre, edad, rango = 'Valor por defecto'}) => 
{

    return {
        nombreClave: clave,
        anios: edad,
        latitudlongitud: {
            lat: 1,
            lng: 2
        }
    }
}

const avenger = prueba(persona);
console.log(avenger);

const { nombreClave, anios, latitudlongitud } = prueba(persona);
console.log(nombreClave, anios);
console.log(latitudlongitud);
//De esa forma, latitud longitud vienen juntas, pero como deberia hacer si quiero la latitud y longitud en sus respectivas variables?

//Extrayendo propiedades especificas que estan dentro de otro objeto en la desestructuracion:
const { latitudlongitud: { lat, lng }} = prueba(persona);
console.log(lat, lng);

//es mas comun traerse el objeto y hacer la desestructuracion en otro paso.





