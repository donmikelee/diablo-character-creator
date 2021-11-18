import '../style/Hero.css';

const Hero = ({ array, onclick, index, onchange }) => {
  const heroArray = array;
  const setHero = onclick;

  const hero = heroArray.map((hero) => (
    <li
      key={Math.random()}
      id={hero.id}
      className={hero.id === index ? 'active' : null}
      onClick={(e) => setHero(hero.id, e)}
      onChange={onchange}
    >
      {hero.class}
    </li>
  ));

  return <ul>{hero}</ul>;
};

export default Hero;
