import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coordenadas, setcoordenadasState] = useState({x: 0, y: 0})
    const { x, y} = coordenadas

    const mouseMove = (e) => {
        const coordenadas = { x: e.x, y: e.y };
        setcoordenadasState(coordenadas)
        console.log(':D');
    }

    window.addEventListener('mousemove', mouseMove);


    useEffect(() => {
      console.log('Componente mensaje montado');
    
      return () => {
        console.log('Componente desmontado');
        window.removeEventListener('mousemove', mouseMove);
      }
    }, [])
    

    return (
    <div>
        <h3>Mensaje</h3>
        <p>
            x: {x} y : {y}
        </p>
    </div>
)
}
