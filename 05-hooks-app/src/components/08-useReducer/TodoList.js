
import React from 'react'
import { ToDoListItem } from './ToDoListItem'

export const TodoList = ({todos , handleDelete, handleToggle} ) => {
  return (
    <>
        <ul className='list-group list-group-flush'>
            {
                todos.map( (todo, i) => (
                    <ToDoListItem key = {todo.id} todo = {todo} i = {i} handleDelete = {handleDelete} handleToggle = {handleToggle}/>
                ))
            }
        </ul>
    </>
  )
}


