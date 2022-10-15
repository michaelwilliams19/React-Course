import { getActiveUser, getUser } from "../../bases/05-funciones";

describe('Prueba en 05-funciones.js', () => {

    test('getUser debe retornar un objeto', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'polli_kpo98'
        };

        const user = getUser();

        expect(user).toEqual(userTest);
    })

    test('getUsuarioActivo debe retornar un objeto', () => {
        
        const userTest = { 
            uid: 'ABC567',
            username: 'Michael'
        };
        
        const nombre = 'Michael';

        const user = getActiveUser(nombre);

        expect(user).toEqual(userTest);
    })

})