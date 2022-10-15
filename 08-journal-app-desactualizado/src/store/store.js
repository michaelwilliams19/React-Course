import { configureStore  } from '@reduxjs/toolkit';
import { applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { authReducer } from '../reducers/authReducer';
import { notesReducer } from '../reducers/notesReducer';
import { uiReducer } from '../reducers/uiReducer';

// const reducer = combineReducers({
//     auth: authReducer,
//   });

// const middlewareEnhancer = applyMiddleware(thunk);

// export const store = configureStore({
//     reducer,
//     undefined,
//     middlewareEnhancer
//     // middleware: [composeEnhancers(applyMiddleware(thunk))]

// });

//no hace falta especificar middleware de redux thunk porque configureStore de reduxjs/toolkit ya lo tiene incluido por defecto.
// thunk permite realizar acciones asincronas.
export const store = configureStore({
    reducer: {
        auth: authReducer,
        ui: uiReducer,
        notes: notesReducer
    }
})