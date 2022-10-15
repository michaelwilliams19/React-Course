import React from 'react'


//La funcion memo hace que no se renderice si o si todo mi componente en casos donde mis propiedades siguen iguales. 
//El ejemplo se hace con el boton +1 del setCounter que cada vez que suma 1 ejecuta este codigo
//Pero hay otro boton que no tiene nada que ver con el +1 y cada vez que lo clickeo tambien me vuelve a renderizar todo el componente haciendo que vuelva a dibujar el valor del <small></small>
//Si hay peticiones http, por cualquier boton que clickee se estaria llamando siempre a la misma petición.
export const Small = React.memo(({value}) => {
  
    console.log('me volvi a llamar')

    return (
    <small>{value}</small>
  )
}
)