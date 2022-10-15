import React, { useRef } from 'react'
import '../02-useEffect/effect.css'

export const FocusScreen = () => {

    const inputRef = useRef();

    const handleClick = () => {
       inputRef.current.select()
        console.log(inputRef);
    }

  return (
    <div>
        <h1>
            FocusScreen
        </h1>

        <input className='form-control' placeholder='ingrese su nombre' ref={inputRef}></input>

        <button className='btn btn-outline-primary mt-5' onClick={handleClick}>Focus</button>
    </div>
  )
}