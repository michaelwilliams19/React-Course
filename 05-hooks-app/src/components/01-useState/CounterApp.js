import React, { useState } from 'react';
import './counter.css';


export const CounterApp = () => {
  
    const [counter, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40
    });

    //desestructuracion de mi useState de Counter.
    const { counter1, counter2 } = counter;

  return (<>
    {/* <h1>Counter {counter}</h1> */}
    <h1>Counter {counter1}</h1>
    <h1>Counter {counter2}</h1>

    <hr />

    <button className='btn btn-primary' onClick={ () => setCounter({ 
        ...counter,  //utilizo el spread para que el setCounter siga manteniendo los valores de todas las propiedades que no toque. Luego actualizo el dato que deseo.
        counter1: counter1 + 1, 
        counter2: counter2 + 2
        }) }>+1</button>
    
  </>)
}

