import React, { useEffect, useReducer } from 'react';
import { toDoReducer } from './toDoReducer';
import './styles.css';
import { TodoList } from './TodoList';
import { ToDoAdd } from './ToDoAdd';


const init = () => {
    return JSON.parse( localStorage.getItem('toDos')) ||  [];
}

export const ToDoApp = () => {
    //dispatch es una funcion que le mando una accion y va a saber a que reducer mandar la informacion. 
    const [ todos, dispatch ] = useReducer(toDoReducer, [], init);

    useEffect(() => {
      localStorage.setItem('toDos', JSON.stringify(todos))
    }, [todos])
    
    const handleDelete = (toDoId) => {

        const actionDelete = {
            type: 'delete',
            payload : toDoId,
        }

        dispatch(actionDelete);
    }

    const handleToggle = (todoId) => {
        const actionToggle = { 
            type: 'toggle',
            payload: todoId,
        }

        dispatch(actionToggle);
    }

    const handleAddToDo = (newTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo,
        });

    }


    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr />

         <div className='row'>
            <div className='col-7'>
               <TodoList 
                    todos = {todos}
                    handleDelete = {handleDelete} 
                    handleToggle = {handleToggle}
                />
            </div>

            <div className='col-5'>
                <ToDoAdd 
                    handleAddToDo = {handleAddToDo}
                />
            </div>
         </div>
        </div>
  )
}
