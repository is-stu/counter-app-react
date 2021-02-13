describe('Pruebas en el archivo demo.test.js', () => {
  test('Debe de ser true ', () => {
    // Inicializando
    const mensaje = 'Hola mundo';

    // Estimulo
    const mensaje2 = `Hola mundo`;

    // Observar el comportamiento
    expect(mensaje).toBe(mensaje2);
  });
});
