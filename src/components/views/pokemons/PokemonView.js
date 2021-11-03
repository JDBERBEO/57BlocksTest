import React from 'react';
import { Link } from 'react-router-dom';
import './pokemonView.css';

export const PokemonView = ({ pokemon }) => {
  console.log('pokemon: ', pokemon);
  return (
    <div>
      {!!pokemon && (
        <>
          <div className="pokemonCardDetails">
            <h1>{pokemon.name}</h1>
            <img
              src={pokemon.sprites.front_shiny}
              className="cardImgTop"
              alt="pokemon img"
            />
            <div className="cardBody">
              <p className="cardDetail">
                Base experience: {pokemon.base_experience}
              </p>
              <p className="cardDetail">Weight: {pokemon.weight}</p>
              <p className="cardDetail">Height: {pokemon.height}</p>
              <p className="cardDetail">
                Abilities:{' '}
                <ul>
                  {pokemon.abilities.map((ability) => (
                    <React.Fragment key={Math.random()}>
                      <li className="ability">{ability.ability.name}</li>
                    </React.Fragment>
                  ))}
                </ul>
              </p>
              <Link to="/">go back</Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
