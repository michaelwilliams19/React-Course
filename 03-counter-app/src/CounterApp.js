import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({valorPadre}) => {

    const [counter, setCounter] = useState(valorPadre);


    //handleAdd
    const handleAdd = (e) => {
        // counter++; REACT NO TE DEJA MODIFICAR DIRECTAMENTE LA PROPIEDAD DEL UseState. 
        //Para modificar su valor se debe usar la funcion setCounter
        setCounter(counter +1);
        
        //otra forma de hacerlo:
        // setCounter( (c) => c + 1)
    }

    const handleResta = () => 
    {
        setCounter(counter -1);
    }

    const handleReset = () => 
    {
        setCounter(valorPadre);
    }

    console.log(valorPadre);
    return (
    <>
        <h1>CounterApp</h1>
        <h2>{ counter }</h2>

        {/* <button onClick= { (e) => handleAdd(e) }>otra forma de hacerlo</button> */}
        {/* La forma de arriba es lo mismo que hacer lo de abajo, ya que el primer argumento es pasado x parametro como primer arg en la funcion no hace falta escribirlo. se manda solo.  */}
        <button onClick= { handleAdd }
        // si llamo al handleAdd con los parentesis al final, cuando react lo renderice va a allamar a esa funcion.
        // En cambio, sin parentesis yo le paso la referencia de la funcion para que solo se ejecute cuando se hace clic.
        >+1</button>

        <button onClick = { handleResta } >-1</button>
        
        <button onClick = { handleReset }>Reset</button>
    </>
    );
}

CounterApp.propTypes= {
    valorPadre: PropTypes.number.isRequired
}

export default CounterApp;