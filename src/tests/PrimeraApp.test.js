import { shallow } from 'enzyme';
import { PrimeraApp } from '../PrimeraApp';
import React from 'react';
import '@testing-library/jest-dom';

describe('Pruebas en la Primera app', () => {
  //   test('Debe de mostrar el mensaje "Hola soy Goku', () => {
  //     const saludo = 'Hola, soy goku';

  //     const { getByText } = render(<PrimeraApp text={'Hola, soy goku'} />);

  //     expect(getByText(saludo)).toBeInTheDocument();
  //   });

  test('Debe de mostrar PrimeraApp correctamente', () => {
    const saludo = 'Hola, soy goku';
    const wrapper = shallow(<PrimeraApp text={saludo} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('Debe mostrar el subtitulo enviado por props', () => {
    const saludo = 'Hola, soy goku';
    const subtitle = 'Soy un subtitulo';
    const wrapper = shallow(<PrimeraApp text={saludo} subtitle={subtitle} />);

    const textoParrafo = wrapper.find('p').text();

    expect(textoParrafo).toBe(subtitle);
  });
});
