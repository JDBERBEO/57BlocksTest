import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const FavoritePokemons = () => {
  // eslint-disable-next-line prefer-const
  const [pokemons, setpokemons] = useState([]);
  const favorites = JSON.parse(localStorage.getItem('favorites'));

  const getpokemon = async (id) => {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    setpokemons([...pokemons, data]);
  };

  useEffect(() => {
    // eslint-disable-next-line array-callback-return
    favorites.map((item) => {
      getpokemon(item);
    });
  }, []);

  return (
    <div>
      <h1>HELLO WORLD</h1>
      {!!pokemons &&
        pokemons.length > 0 &&
        pokemons.map((item) => (
          <React.Fragment key={Math.random()}>
            <h1>{item.name}</h1>
          </React.Fragment>
        ))}
    </div>
  );
};
