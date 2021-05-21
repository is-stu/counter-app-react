import React from 'react';
import ReactDOM from 'react-dom';
import { CounterWithRedux } from './Components/CounterApp';
import './index.css';

// Componentes
// import { PrimeraApp } from './PrimeraApp';
import { CounterApp } from './Components/CounterApp';
import {Provider } from 'react-redux';
import counter from './Components/module/counter';
import { createStore } from 'redux';
const store = createStore(counter, { counter: 0 });

ReactDOM.render(
  <React.StrictMode>
    {/* <PrimeraApp text={'Hola, soy goku'} /> */}
    <Provider store={store}>
      <CounterApp />
      <CounterWithRedux />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
