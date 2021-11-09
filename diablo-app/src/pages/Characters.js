import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero'


const Characters = () => {

  const [active, setActive] = useState(false);

  const heroes = [
    {
      id: 0,
      class: 'Amazon',
      active: active
    },
    {
      id: 1,
      class: 'Assassin',
    },
    {
      id: 2,
      class: 'Necromancer',
    },
    {
      id: 3,
      class: 'Barbarian',
    },
    {
      id: 4,
      class: 'Sorceress',
    },
    {
      id: 5,
      class: 'Paladin',
    },
    {
      id: 6,
      class: 'Druid',
    },
  ];

  const [array, neyArray] = useState(heroes)
  const [name, setName] = useState('');
  const [hero, setHero] = useState('');
  
  console.log(array)
  

  const setActiveHero = (id) => {

    const newHeroes = [...heroes];
    const index = newHeroes.findIndex(hero => hero.id === id );

    const choosedHero = newHeroes.splice(index, 1)

  }

  const setHeroOnClick = (e) => {
    setHero(e.target.innerHTML)
    
    
  }

  const handleOnChange = event => setName(event.target.value)

  
  
  
 
  return (
    <>
      <header><h2>Choose your hero:</h2></header>
      <section>
        <div>
          <Hero active={active} onclick={setActiveHero} sethero={setActiveHero} array={array}></Hero>
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