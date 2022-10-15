import React from 'react'
import { useState } from "react"

//Custom hook que se va a encargar de manejar los formularios.
export const useForm = ( initialState = {} ) => {

    const [formValues, setFormValuesState] = useState(initialState);

    const reset = (newFormState = initialState) => {
        setFormValuesState(newFormState);
    }

    const handleInputChange = ({target}) => {
        
        setFormValuesState({
            ...formValues,
            [target.name] : target.value
        });
    }

    return [ formValues, handleInputChange, reset ];
}