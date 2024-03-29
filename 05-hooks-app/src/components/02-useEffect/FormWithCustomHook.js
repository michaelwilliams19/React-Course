import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import './effect.css';

//este hook nos permite ejecutar algun efecto secundario cuando algo suceda en el componente.
export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
    });

    const {name, email, password} = formValues;

    useEffect(() => {
      console.log('el email cambio');
    }, [email])

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formValues);
    }
    
    

    return (
    <form onSubmit={handleSubmit}>
        <h1>Form with custom hook</h1>
        <hr/>

        <div className='form-group'>
            <input type="text" name="name" className="form-control" placeholder="Ingrese su nombre" autoComplete="off" value={name} onChange = { handleInputChange }/>
        </div>

        <div className='form-group'>
            <input type="text" name="email" className="form-control" placeholder="Ingrese su email" autoComplete="off" value={email} onChange = { handleInputChange }/>
        </div>

        <div className='form-group'>
            <input type="password" name="password" className="form-control" placeholder="Ingrese su password" value={password} onChange = { handleInputChange }/>
        </div>

        <button type="submit" className='btn btn-primary'>Guardar</button>
    </form>
  )
}
