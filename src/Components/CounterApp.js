import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({ value = 10 }) => {
  const [counter, setCounter] = useState(value);

  const handleSubstract = () => {
    setCounter(counter - 1);
  };

  const handleReset = () => {
    setCounter((value));
  };
  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}>
        Sumar 1
      </button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSubstract}>Restar 1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};
