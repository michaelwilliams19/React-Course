/*
{
    notes: [],
    activeNote: null or {
        id: '',
        title: '',
        body: '',
        imageUrl: '',
        date: datetime
    }
}
*/

import { types } from "../types/types";


const initialState = {
    notes: [],
    activeNote: null
}

export const notesReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.notesActive:
            return {
                ...state,
                activeNote: {
                    ...action.payload
                }
            }
            
        case types.notesLoad:
            return {
                ...state,
                notes: [...action.payload],
            }

        default:
            return state;
    }



}