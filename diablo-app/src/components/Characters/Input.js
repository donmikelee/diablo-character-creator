import React from 'react';
import { useForm } from 'react-hook-form';

const Input = ({ name, disabled, handleonchange }) => {
  const { register } = useForm();

  return (
    <>
      <label htmlFor="hero-name">Character name</label>
      <input
        {...register('name', { required: true })}
        disabled={disabled}
        id="hero-name"
        name="name"
        type="text"
        placeholder="My name is... "
        onChange={handleonchange}
        value={name}
      />
    </>
  );
};

export default Input;
