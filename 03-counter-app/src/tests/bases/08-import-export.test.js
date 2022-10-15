import { getHeroeById, getHeroesByOwner } from "../../bases/08-import-export";
import heroes from "../../data/heroes";

describe('Pruebas en 08-import-export.js', () => {

    test('GetHeroeById debe retornar un heroe por id', () => {
        const id = 1;

        const heroe = getHeroeById(id);

        const heroeData = heroes.find(p => p.id === id);

        expect(heroe).toEqual(heroeData);
    })

    test('GetHeroeById debe retornar undefined si el heroe no existe', () => {
        const id = 10;

        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);
    })

    test('GetHeroesByOwner debe devolver heroes de DC', () => {
        const owner = 'DC';
        
        const heroesDC = getHeroesByOwner(owner);

        const heroesTest = heroes.filter(p => p.owner === owner);

        expect(heroesDC).toEqual(heroesTest);
    })

    test('el lenght de GetHeroesByOwner de owner Marvel debe ser 2', () => {
        const owner = 'Marvel';
        
        const HeroesMarvelLength = getHeroesByOwner(owner).length;

        const heroesTestLength = heroes.filter(p => p.owner === owner).length;

        expect(HeroesMarvelLength).toBe(heroesTestLength);
    })
})