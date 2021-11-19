import React from 'react';

const Stats = () => {
  return (
    <div className="panel">
      <h3>Character</h3>
      <ul>
        <li>
          Strength<span>20</span>
          <button>+</button>
        </li>
        <li>
          Dexterity<span>20</span>
          <button>+</button>
        </li>
        <li>
          Vitality<span>20</span>
          <button>+</button>
        </li>
        <li>
          Energy<span>20</span>
          <button>+</button>
        </li>
      </ul>
      <div>5 Attribute points tu spend</div>
    </div>
  );
};

export default Stats;
