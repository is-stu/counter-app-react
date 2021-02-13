import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Componentes
import { PrimeraApp } from './PrimeraApp';
//import { CounterApp } from './Components/CounterApp';

ReactDOM.render(
  <React.StrictMode>
    <PrimeraApp text={'Hola, soy goku'} />
    <CounterApp />
  </React.StrictMode>,
  document.getElementById('root')
);
