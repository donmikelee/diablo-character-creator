import '../style/Hero.css';

const Hero = (props) => {
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

  const hero = heroes.map((hero) => (
    <li
      key={Math.random()}
      id={hero.id}
      onClick={() => props.function(hero.id)}
    >
      {hero.class}
    </li>
  ));

  return <ul>{hero}</ul>;
};

export default Hero;
