import React, { useState } from 'react'
import { useGetTodoByIdQuery, useGetTodosQuery } from './store/apis'

//Realizado todo con RKT query.
export const TodoApp = () => {

    const { data: toDos = [], isLoading} = useGetTodosQuery();
    
    const [todoId, setTodoId] = useState(1);
    const { data: toDoById, isLoading: loading} = useGetTodoByIdQuery(todoId);

    const nextTodo = () => {
        setTodoId(todoId + 1);
    }

    const prevTodo = () => {
        setTodoId(todoId - 1);
    }

    return (
        <>
            <h1>ToDos - RTK Query</h1>
            <hr />

            <h4>isLoading: {isLoading ? 'true' : 'false'}</h4>

            <pre>{JSON.stringify(toDoById)}</pre>
            <button onClick={prevTodo}>Prev ToDo By Id</button>
            <button onClick={nextTodo}>Next ToDo By Id</button>

            <ul>
                {toDos.map(p => (
                    <li key={p.id}>
                        <strong>{p.completed ? 'Complete' : 'Incomplete'}</strong> {p.title}
                    </li>
                ))}
            </ul>

            <button>Next toDo</button>
        </>
    )
}
