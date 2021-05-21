import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounterAction } from './module/counter';

export const CounterApp = ({ value = 10 }) => {
  const [counter, setCounter] = useState(value);

  const handleSubstract = () => {
    setCounter(counter - 1);
  };

  const handleReset = () => {
    setCounter(value);
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

export const CounterWithRedux = () => {
  const dispatch = useDispatch();
  const counterState = useSelector((state) => state.counter);
  return (
    <>
      <p>current: {counterState}</p>
      <button onClick={() => dispatch(increaseCounterAction())}>
        INCREMENT
      </button>
    </>
    )
};

CounterApp.propTypes = {
  value: PropTypes.number,
};
