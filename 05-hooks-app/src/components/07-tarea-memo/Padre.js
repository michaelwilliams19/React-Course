import React, { useCallback } from 'react'
import { Hijo } from './Hijo'
import { useState } from 'react';
import '../02-useEffect/effect.css'

export const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    // const incrementar = ( num ) => {
    //     setValor( valor + num )
    // }

    //esto hace que no se este creando una nueva funcion por cada renderizacion.
    //Es decir, la función siempre va a tener su mismo espacio en memoria. Si su posicion en memoria cambia significa que se renderizo de vuelta la pagina y se generara la funcion.
    const incrementar = useCallback(
      (num) => {
        setValor( v => v + num )
      },
      [setValor],
    )
    


    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            {
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n }
                        incrementar={ incrementar }
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}
