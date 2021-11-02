import React from 'react';
import { Link } from 'react-router-dom';

export const PokemonView = ({ pokemon }) => {
  return (
    <div>
      {!!pokemon && (
        <>
          <img src={pokemon.sprites.front_shiny} alt="pokemon description" />
          <h1>name: {pokemon.name}</h1>
          <p>weight: {pokemon.weight}</p>
          <Link to="/">go back</Link>
        </>
      )}
    </div>
  );
};
