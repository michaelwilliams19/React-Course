import Swal from 'sweetalert2'
import { types } from "../types/types"
import { firebase, googleAuthProvider  } from "../firebase/firebase-config";
import { finishLoading, startLoading } from "./ui";


export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        
        dispatch(startLoading()); //el dispatch se encarga de mandar al reducer a que ejecute su funcion.
        
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(({user}) => {
            
            dispatch(login(user.uid, user.displayName));
            
            dispatch(finishLoading());
        })
        .catch(e => {
            Swal.fire('Error', e.message, 'error')

            console.log(e)
            dispatch(finishLoading())
        })
        
        // setTimeout(() => { //forma vieja.
        //     dispatch(login(12345, 'michael'));
        // }, 3500);
    }
}

export const startRegisterWithEmailPassword = (name, email, password) => {
    return (dispatch) => {
        
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(async ({user}) => {

            await user.updateProfile({displayName: name});

            dispatch(login(user.uid, user.displayName))

        }).catch(e =>
            Swal.fire('Error', e.message, 'error')
        );
    }
}

export const startLoginGoogle = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
        .then(({user}) => {
            dispatch(login(user.uid, user.displayName))
        });
    }
}


export const login = (uid, displayName) => {
    return {
        type: types.login,
        payload: {
            uid: uid,
            name: displayName
        }
    }
}

export const startLogout = () => {
    return async (dispatch) => {
        firebase.auth().signOut();
        dispatch(logout());
        
    }
}

export const logout = () => {
    return {
        type: types.logout,
    }
}

