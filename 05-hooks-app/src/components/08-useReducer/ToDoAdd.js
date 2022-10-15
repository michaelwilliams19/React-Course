import React from 'react'
import { useForm } from '../../hooks/useForm';

export const ToDoAdd = ({handleAddToDo}) => {
  
    const [formValues, handleInputChange, reset] = useForm({
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formValues.description.trim().length <= 1){
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: formValues.description, //se puede desestructurar y traer directamente la descripcion.
            done: false,
        }
        
        handleAddToDo(newTodo);
        reset();
    }

    return (
    <>
        <h4>Agregar ToDo</h4>
        <hr />

        <form onSubmit={handleSubmit}>
            <input type='text' name="description" placeholder='Aprender ...' autoComplete='off' className='form-control' onChange={handleInputChange} value = {formValues.description}/>

            <button className="btn btn-outline-primary mt-1 btn-block" type="submit" >Agregar</button>
        </form>
    </>
  )
}
