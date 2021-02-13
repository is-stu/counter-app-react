import { shallow } from 'enzyme';
import React from 'react';
import { CounterApp } from '../Components/CounterApp';

describe('Pruebas en el counterApp', () => {
  let wrapper = shallow(<CounterApp />);

  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test('debe mostrar counterApp correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe de mostrar el valor por defecto de 100', () => {
    const wrapper = shallow(<CounterApp value={100} />);
    const counterText = wrapper.find('h2').text().trim();
    expect(counterText).toBe('100');
  });

  test('debe incrementar contador', () => {
    wrapper.find('button').at(0).simulate('click');
    const counterText = wrapper.find('h2').text().trim();
    expect(counterText).toBe('11');
  });

  test('debe decrementar con el boton -1', () => {
    wrapper.find('button').at(2).simulate('click');
    const counterText = wrapper.find('h2').text().trim();
    expect(counterText).toBe('9');
  });

  test('prueba boton reiniciar', () => {
    const wrapper = shallow(<CounterApp value={105} />);
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(1).simulate('click');
    const counterText = wrapper.find('h2').text().trim();
    expect(counterText).toBe('105');
  });
});
