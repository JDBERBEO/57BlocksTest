import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const FavoritePokemons = () => {
  // eslint-disable-next-line prefer-const
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const load = async () => {
      const favorites = JSON.parse(localStorage.getItem('favorites'));
      const promises = [];

      for (let i = 0; i < favorites.length; i++) {
        promises.push(
          axios.get(`https://pokeapi.co/api/v2/pokemon/${favorites[i]}`),
        );
      }
      const responses = await Promise.all(promises);
      setPokemons(responses.map((r) => r.data));
    };

    load();
  }, []);

  return (
    <>
      <h1>I LOVE THESE POKEMONS!</h1>
      <div className="containerPokemons">
        {!!pokemons &&
          pokemons.length > 0 &&
          pokemons.map((pokemon) => (
            <React.Fragment key={Math.random()}>
              <div className="pokemonCard">
                <h5 className="cardTitle">{pokemon.name}</h5>
                <img
                  src={pokemon.sprites.front_shiny}
                  className="cardImgTop"
                  alt="pokemon img"
                />
              </div>
            </React.Fragment>
          ))}
      </div>
    </>
  );
};
