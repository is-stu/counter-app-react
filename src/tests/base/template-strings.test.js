import { getSaludo } from '../../base/02-template-string';
import '@testing-library/jest-dom';

describe('Pruebas en template-string', () => {
  test('Prueba en el metodo getSaludo ', () => {
    const nombre = 'Stewar';

    const saludo = getSaludo(nombre);

    expect(saludo).toBe('Hola ' + nombre);
  });
  //   Segundo test si no hay argumento
  test('Prueba en el metodo getSaludo sin argumento', () => {
    const saludo = getSaludo();

    expect(saludo).toBe('Hola Carlos');
  });
});
