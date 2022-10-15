import { types } from '../types/types';

/*
si esta autenticado se vera esto, si no vacio.
    {
        uid: 'asdasd',
        name: 'michael'
    }
*/

export const authReducer = (state = {}, action) => {

    switch (action.type) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.name
            }

        case types.logout:
            return { }
    
        default:
            return state
    }

}
