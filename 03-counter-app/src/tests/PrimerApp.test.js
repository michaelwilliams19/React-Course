import React from "react";
import { render } from "@testing-library/react";
import PrimerApp from "../PrimerApp";

describe('Pruebas en componente: PrimerApp.js', () => {
    test('Debe de mostrar el mensaje "hola, soy goku"', () => {

        const saludo = "hola, soy goku!";

        //producto renderizado de lo que quiero mostrar. Es decir, mi componente dibujado.
        const { getByText } = render(<PrimerApp saludo={ saludo } />)

        expect(getByText(saludo)).toBeInTheDocument();
    })
})
