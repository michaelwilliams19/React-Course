import React, { useEffect, useState } from 'react';
import './effect.css';
import { Message } from './Message';

//este hook nos permite ejecutar algun efecto secundario cuando algo suceda en el componente.
export const SimpleForm = () => {
    

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const {name, email} = formState;

    useEffect( () => {
        console.log('hola');
    }, []);

    //este efecto se va a ejecutar siempre que alguna prop de [formState] cambie.
    useEffect( () => {
        console.log('Se va a ejecutar solamente cuando alguna prop del formState cambie');
    }, [formState]);

    useEffect( () => {
        console.log('Se va a ejecutar solamente cuando el email cambie');
    }, [email]);
    
    const handleInputChange = ({ target }) => {

        setFormState({
            ...formState,
            [target.name] : target.value
        })
    }

    return (
    <>
        <h1>useEffect</h1>
        <hr/>

        <div className='form-group'>
            <input type="text" name="name" className="form-control" placeholder="Ingrese su nombre" autoComplete="off" value={name} onChange = { handleInputChange }/>
            <input type="text" name="email" className="form-control" placeholder="Ingrese su email" autoComplete="off" value={email} onChange = { handleInputChange }/>
        </div>

        {name === '123' && <Message />}

    </>
  )
}
