import React, { useState } from 'react';
import { BrowserRouter as Router, Link, useHistory } from 'react-router-dom';


const Characters = () => {

  let history = useHistory();

  const [value, setValue] = useState('');

  const handleOnChange = event => setValue(event.target.value)

  const createHero = () => {

    history.push('/hero-editor')
  }



  return (
    <>
      <header><h2>Choose your hero:</h2></header>
      <section>
        <div><h3>Amazon</h3></div>
        <div><h3>Assassin</h3></div>
        <div><h3>Necromancer</h3></div>
        <div><h3>Barbarian</h3></div>
        <div><h3>Sorceress</h3></div>
        <div><h3>Paladin</h3></div>
        <div><h3>Druid</h3></div>
      </section>
      <section>
        <label>Character name</label>
        <input type="text" placeholder="My name is..." onChange={handleOnChange} value={value}/>
        <Link to={
        {
          pathname: '/hero-editor',
          state: value,
        }
      }><button onClick={createHero}>Start</button>
      </Link>
      </section>
    </>
  );
};

export default Characters;
