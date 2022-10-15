import React, { useLayoutEffect, useRef } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layout.css';

export const LayoutEffect = () => {
    
    const {counter, increment, decrement, reset} = useCounter(1);

    const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    
    // si data tiene un valor entonces carga data[0]
    const {quote} = !!data && data[0];
    console.log(quote);

    const pTag = useRef();

    useLayoutEffect(() => {
      console.log(pTag.current.getBoundingClientRect());
    
     
    }, [quote])

    return (
    <div>
        <h1>Layout effect</h1>
        <hr />


        <blockquote className="blockquote text-right">
            <p className="mb-3" ref={pTag}> { quote } </p>
        </blockquote>


        <button className="btn btn-primary" onClick= {increment}>Siguiente quote</button>
        <button className="btn btn-secondary" onClick= {decrement}>Anterior quote</button>
        <button className="btn btn-danger" onClick= {reset}>Reset quotes</button>


    </div>
  )
}
