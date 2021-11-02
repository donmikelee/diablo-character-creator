import React from 'react';
import { useHistory } from 'react-router-dom';

const Main = () => {
  let history = useHistory();

  return (
    <>
      <header>
        <h1>Welcome to Diablo II Hero Editor</h1>
      </header>
      <main>
        <button onClick={() => history.push('/characters')}>
          Enter to the Sanctuary
        </button>
      </main>
    </>
  );
};

export default Main;
