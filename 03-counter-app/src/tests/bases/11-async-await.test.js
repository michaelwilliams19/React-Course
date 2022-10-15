import { getImagenRefactorizada } from "../../bases/11-async-await"

describe('Prueba de 11-async-await-js', () => {
    test('Debe retonar el url de una imagen', async() => {

        const url = await getImagenRefactorizada();

        expect(url.includes('https://')).toBe(true);
    })
})