import React from 'react';
import Stats from '../components/Panel/Stats';
import { useLocation, useHistory } from 'react-router-dom';
import '../style/Panel.css';

const Panel = () => {
  const location = useLocation();
  const history = useHistory();

  const goBackHandle = () => {
    history.goBack('/characters');
  };

  return (
    <div className="hero-panel">
      <header>
        <h1>Your hero's name: {location.state.name}</h1>
        <h2>Your hero's class: {location.state.class}</h2>
        <button onClick={goBackHandle}>Go back</button>
      </header>
      <main>
        <section>
          <div className="hero-stats">
            <Stats />
          </div>
        </section>
        <section>
          <div className="hero-skills"></div>
        </section>
      </main>
    </div>
  );
};

export default Panel;
