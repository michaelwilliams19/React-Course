import { db } from "../firebase/firebase-config";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";

export const startNewNote = () => {
    return async (dispatch, getState) => {
        //getState funciona como el useSelector. Me devuelve toda la info de mis reducer (la que se ve en la pestaña de redux.)
        
        const { uid } = getState().auth; 

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const docRef = await db.collection(`${uid}/journal/notes`).add(newNote);
        
        dispatch(activeNote(docRef.id, newNote));
    }
}

export const activeNote = (id, note) => {
    return {
        type: types.notesActive,
        payload: {
            id, 
            ...note,
        }
    }
}

export const startLoadingNotes = (uid) => {
    return async (dispatch) => {
        
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
        
    }
}

export const setNotes = (notes) => ({
    type: types.notesLoad,
    payload: notes
})