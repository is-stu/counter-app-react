const { retornaArreglo } = require('../../base/07-deses-arr');

describe('Pruebas en desestructuracion', () => {
  test('Debe de retornar un string y un numero', () => {
    const [letras, numeros] = retornaArreglo();

    expect(letras).toBe('ABC')
    expect(numeros).toBe(123)

  });
});
