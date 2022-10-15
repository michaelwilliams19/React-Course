import { returnArray } from "../../bases/07-desestructuracion-arrays"

describe('Pruebas en 07-desestructuracion-arrays.js', () => {

    test('returnArray debe retornar un string y un numero', () => {
        const [letras, numeros] = returnArray();
        
        expect(letras).toBe('ABC123');
        expect(numeros).toBe(123);

        expect(typeof letras).toBe('string');
        expect(typeof numeros).toBe('number');
    })
})