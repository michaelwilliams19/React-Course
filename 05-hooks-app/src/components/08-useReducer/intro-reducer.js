const initialState = [{
    id: 1,
    toDo: 'Comprar pan',
    done: false,
}]

const todoReducer = (state = initialState, action) => {
    
    if (action?.type === 'agregar')
    {
        return [...state, action.payload];
    }


    return state;
}

let todos = todoReducer();


const newToDo = [{
    id: 2,
    toDo: 'Comprar leche',
    done: false,
}]

const agregarToDoAction = {
    type: 'agregar',
    payload: newToDo
}

todos = todoReducer(todos, agregarToDoAction);




console.log(todos);