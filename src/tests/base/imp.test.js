const { getHeroeById, getHeroesByOwner } = require('../../base/08-imp-exp');
const { default: heroes } = require('../../data/heroes');

describe('Pruebas imp', () => {
  test('Debe de retornar un heroe', () => {
    const id = 1;
    const heroe = getHeroeById(id);

    const heroedata = heroes.find((h) => h.id === id);

    expect(heroe).toEqual(heroedata);
  });

  test('Debe de retornar un undefined si heroe no existe', () => {
    const id = 10;
    const heroe = getHeroeById(id);

    expect(heroe).toBe(undefined);
  });

  test('Heroes de DC con owner', () => {
    const owner = 'DC';
    const getHeroeOwner = getHeroesByOwner(owner);
    const heroedata = heroes.filter((h) => h.owner === owner);
    expect(getHeroeOwner).toEqual(heroedata);
  });

  test('Heroes de Marvel con owner', () => {
    const owner = 'Marvel';
    const getHeroeOwner = getHeroesByOwner(owner);
    
    expect(getHeroeOwner.length).toBe(2);
  });
});
