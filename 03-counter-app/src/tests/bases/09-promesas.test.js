import { getHeroeByIdAsync } from "../../bases/09-promesas";
import heroes from "../../data/heroes";

describe('prueba de 09-promesas async', () => {
    test('debe retornar un heroe async', (done) => {

        const id = 1;

        getHeroeByIdAsync(id)
        .then(heroe => {
            expect(heroe).toBe(heroes[0]);
            done();
        })

    });

    test('debe retornar un error si el heroe no existe ', (done) => {

        const id = 10;

        getHeroeByIdAsync(id)
        .catch(error => {
            expect(error).toBe('No existe el heroe');
            done();
        })

    });
})