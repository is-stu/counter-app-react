import React from 'react';
import PropTypes from 'prop-types';


export const PrimeraApp = ({ text, subtitle }) => {
  const texto = 'Reforzando el React';
  return (
    <>
      <h1>{texto}</h1>
      <h2>{text}</h2>
      <p>{subtitle}</p>
    </>
  );
};

PrimeraApp.propTypes = {
  text: PropTypes.string.isRequired,
};

PrimeraApp.defaultProps = {
    subtitle: 'Im a subtitle'
}

// El React.Fragment tambien se puede utilizar como <> </> !!!!!!!
// Dado el caso, si se necesita mostrar un obj en {} con la etiqueta <pre></pre>
