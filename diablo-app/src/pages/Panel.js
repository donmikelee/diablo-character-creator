import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const Panel = () => {
  const location = useLocation();
  const history = useHistory();

  const goBackHandle = () => {
    history.goBack('/characters');
  };

  return (
    <header>
      <h1>Your hero's name: {location.state.name}</h1>
      <h2>Your hero's class: {location.state.class}</h2>
      <button onClick={goBackHandle}>Go back</button>
    </header>
  );
};

export default Panel;
