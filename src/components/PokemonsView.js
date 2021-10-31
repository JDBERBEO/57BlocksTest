import React from 'react';
import { Link } from 'react-router-dom';

export const PokemonsView = ({ pokemons }) => {
  console.log('poke: ', pokemons);
  return (
    <div className="container">
      <div className="row">
        {!!pokemons &&
          pokemons.length > 0 &&
          pokemons.map((pokemon) => (
            <div key={pokemon.id} className="col">
              <div className="card" style={{ width: '18rem' }}>
                <img
                  src={pokemon.sprites.front_shiny}
                  className="card-img-top"
                  alt="pokemon img"
                />
                <div className="card-body">
                  <h5 className="card-title">Cname: {pokemon.name}</h5>
                  <Link to={`/${pokemon.id}`}> see more info </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
