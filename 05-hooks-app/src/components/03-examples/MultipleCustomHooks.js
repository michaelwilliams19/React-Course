import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effect.css';

export const MultipleCustomHooks = () => {
    
    const {counter, increment, decrement, reset} = useCounter(1);

    const {loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    
    // si data tiene un valor entonces carga data[0]
    const {author, quote} = !!data && data[0];
    console.log(author, quote);


    return (
    <div>
        <h1>Breaking Bad Quotes</h1>
        <hr />

        {
            loading ?
            (
                <div className='alert alert-info text-center'>
                    Loading...
                </div>
            )
            :
            (
                <blockquote className="blockquote text-right">
                    <p className="mb-3">{quote}</p>
                    <footer className="blockquote-footer">{author}</footer>
                </blockquote>
            )
        }

        <button className="btn btn-primary" onClick= {increment}>Siguiente quote</button>
        <button className="btn btn-secondary" onClick= {decrement}>Anterior quote</button>
        <button className="btn btn-danger" onClick= {reset}>Reset quotes</button>


    </div>
  )
}
