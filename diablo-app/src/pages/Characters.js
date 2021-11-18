import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero'
import { useForm } from 'react-hook-form'



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
 
 
  
  const { register, handleSubmit } = useForm({
    
  });


  const setIndexHero = (id) => {

    const newHeroes = [...heroes];
    const index = newHeroes.findIndex(hero => hero.id === id );

    setIndex(index)

    
  }

  
  useEffect(() => {
    setAvailable(prevValue => !prevValue)
  }, [])


  const setHeroOnClick = (e) => {
    setHero(e.target.innerHTML)

  }

  const handleOnClick = (id, e) => {
    setIndexHero(id)
    setHeroOnClick(e)
  } 

  const handleOnChange = event => setName(event.target.value)

  
  

  

  return (
    <>
      <header><h2>Choose your hero:</h2></header>
      <form onSubmit={handleSubmit((data) =>{
        console.log(data)

        if(index === ""){
          console.log("Nie wybrałeś klasy kolego")
        }
        else{
          console.log("Klasa została wybrana")
        }
      })}>
        <section>
          <div>
            <Hero onclick={handleOnClick} array={heroes} index={index}></Hero>
          </div>
        </section>
        <section>
          <label htmlFor="hero-name">Character name</label>
          <input {...register("name", {required: true})}
            disabled={disabled}
            minLength="2" 
            maxLength="15" 
            id="hero-name" 
            name="name" 
            type="text" 
            placeholder="My name is... " 
            onChange={handleOnChange} 
            value={name}
            />
            
              {/* <Link to={
              {
                pathname: '/hero-editor',
                state: {
                  name: name,
                  class: hero
                }
              }
              }> */}
                <input type="submit" value="Start"/>
              {/* </Link> */}
        </section>
      </form>
    </>
  );
};

export default Characters;