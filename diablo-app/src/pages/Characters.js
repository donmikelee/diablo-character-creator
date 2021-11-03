import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero'


const Characters = () => {

  const [name, setName] = useState('');
  const [hero, setHero] = useState('');
  // const [active, setActive] = useState(false);

  const setActiveHero = (id) => {
    console.log(id)
  }

  
  const setHeroOnClick = (e) => {
    setHero(e.target.innerHTML)
  }

  const handleOnChange = event => setName(event.target.value)
  
  const handleOnClick = (e) => {
    setHeroOnClick(e);
  }

  
  

  return (
    <>
      <header><h2>Choose your hero:</h2></header>
      <section>
        <div>
          <Hero onclick={handleOnClick} function={setActiveHero}></Hero>
        </div>
      </section>
      <section>
        <label>Character name</label>
        <input type="text" placeholder="My name is... " onChange={handleOnChange} value={name}/>
        <Link to={
        {
          pathname: '/hero-editor',
          state: {
            name: name,
            class: hero
          }
        }
      }><button>Start</button>
      </Link>
      </section>
    </>
  );
};

export default Characters;
