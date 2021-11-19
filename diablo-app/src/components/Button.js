import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ name, hero, disabledButton }) => {
  return (
    <Link
      to={{
        pathname: `/hero-editor-${hero}`,
        state: {
          name: name,
          class: hero,
        },
      }}
    >
      <input disabled={disabledButton} type="submit" value="Start" />
    </Link>
  );
};

export default Button;
