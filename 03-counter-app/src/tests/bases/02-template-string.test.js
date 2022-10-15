import { getSaludo } from "../../bases/02-template-string";

describe('Pruebas en 02-template-string.js', () => {

    test('Prueba en metodo getSaludo', () => {
        
        const nombre = 'Michael';

        const saludo = getSaludo(nombre);

        expect(saludo).toBe(`Hola ${nombre}`);
    })

    test('getSaludo debe retornar valor por defecto', () => {
        const saludo = getSaludo();

        expect(saludo).toBe(`Hola Carlos`);
    })

})