describe('Agrupador: pruebas en demotest.js', () => {

    test('deben ser iguales los strings ', () => {
    
        //1. Inicialización
        const mensaje = 'Hola Mundo';
    
        //2. Estimulo
        const mensaje2 = `Hola Mundo`;
    
        //3. Observar el comportamiento
        expect(mensaje).toBe(mensaje2);
    });
})
