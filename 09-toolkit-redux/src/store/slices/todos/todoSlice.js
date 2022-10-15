import { createSlice } from '@reduxjs/toolkit'

export const toDoSlice = createSlice({
    name: 'name',
    initialState: {
        counter: 1,
    },
    reducers: {
        increment: (state, /* action */ ) => {
            state.counter += 1
        }
    }
})


// Action creators are generated for each case reducer function
export const { increment } = toDoSlice.actions;