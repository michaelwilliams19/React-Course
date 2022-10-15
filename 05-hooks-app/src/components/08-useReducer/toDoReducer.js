

export const toDoReducer = (state = [], action) => {

    switch (action.type) {
        case 'add':
            return [...state, action.payload];
        
        case 'delete':
            return state.filter(p => p.id !== action.payload); //filter devuelve un nuevo arreglo. no modifica el original.

        case 'toggle':
            return state.map(toDo => (toDo.id === action.payload) ? {...toDo, done: !toDo.done} : toDo);
    
        default:
            return state;
    }
}