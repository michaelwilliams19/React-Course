import React from "react";
import PropTypes from 'prop-types'
// import React, { Fragment } from "react";

//El estandar de los componentes es que sus nombres sean en CamelCase.

//los return suelen estar envueltos
// en un div ya que no se pueden devolver mas de un elemento por separado. Se tiene que devolver un solo elemento (el div) que contiene al resto(el h1 y demas controles).
//Reemplazando el div por el Fragment hace que no se esten dibujando divs innecesarios.
//No se recomienda usar mucho fragment ya que es una importacion innecesaria.
//o simplemente usar <> </> que al fin y al cabo es como un fragment pero no es necesaria su importacion.

//las props hoy se desestructuran. Acordarse de poner un valor por defecto.
/*
             Para imprimir un objeto:
             <pre>{ JSON.stringify(saludo, null, 3) }</pre>
*/

//Functional Components:
const PrimerApp = ( { saludo, subtitulo} ) => {

    return (
        <>
            <h1>{ saludo }</h1>
            <p>{ subtitulo} </p>
        </>
    );

}

PrimerApp.propTypes  = {
    saludo: PropTypes.string.isRequired,
    subtitulo: PropTypes.string.isRequired
}

PrimerApp.defaultProps = {
    subtitulo: 'Soy un subtitulo por defecto' 
    //Agregando el valor por defecto aca puedo visualizar su valor en components de consola. En cambio si lo agrego en el componente no lo veo.
}

export default PrimerApp;
