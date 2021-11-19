import React, { useState } from 'react';
import Hero from '../components/Hero'
import Input from '../components/Input'
import Button from '../components/Button'



const Characters = () => {

  const heroes = [
    {
      id: 0,
      class: 'Amazon',
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

  
  const [name, setName] = useState('');
  const [hero, setHero] = useState('');
  const [index, setIndex] = useState('');
  const [disabled, setAvailable] = useState(true);
  const [disabledButton, setButton] = useState(true);

 
  
  


  const setIndexHero = (id) => {

    const newHeroes = [...heroes];
    const index = newHeroes.findIndex(hero => hero.id === id );

    setIndex(index)

    setAvailable(false)
  }



  const setHeroOnClick = (e) => {
    setHero(e.target.innerHTML)

  }

  const handleOnClick = (id, e) => {
    setIndexHero(id)
    setHeroOnClick(e)
  } 

  const handleOnChange = event => {
    
    setName(event.target.value)

    if(event.target.value.length >= 2){
      setButton(false);
    }
    else{
      setButton(true)
    }

  }

 
  return (
    <>
      <header><h2>Choose your hero:</h2></header>
      <form>
        <section>
          <div>
            <Hero onclick={handleOnClick} array={heroes} index={index}></Hero>
          </div>
        </section>
        <section>
          <div>
            <Input name={name} disabled={disabled} handleonchange={handleOnChange} />
            <Button name={name} disabledButton={disabledButton} hero={hero}/>
          </div>
        </section>
      </form>
    </>
  );
};

export default Characters;