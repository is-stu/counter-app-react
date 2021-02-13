import '@testing-library/jest-dom';
const { getUser, getUsuarioActivo } = require('../../base/05-funciones');

describe('Pruebas funciones', () => {
  test('Debe de retornar un objeto', () => {
    const userTest = {
      uid: 'ABC123',
      username: 'El_Papi1502',
    };

    const user = getUser();

    expect(user).toEqual(userTest);
  });

  //getUsuarioActivo

  test('Debe retornar un objeto otra funcion', () => {
    const user = {
      uid: 'ABC567',
      username: 'Stewar',
    };

    const getUser = getUsuarioActivo();

    expect(user).toEqual(getUser);
  });
});
