import '../style/Hero.css';

const Hero = ({ array, onclick, active }) => {
  const heroArray = array;
  const setHero = onclick;

  const hero = heroArray.map((hero) => (
    <li
      key={Math.random()}
      id={hero.id}
      className={active ? 'active' : 'unactive'}
      onClick={() => setHero(hero.id)}
    >
      {hero.class}
    </li>
  ));

  return <ul>{hero}</ul>;
};

export default Hero;
