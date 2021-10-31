import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { PokemonsView } from './PokemonsView';

export const PokemonsMain = () => {
  const [pokemons, setPokemons] = useState([]);

  const getpokemons = async () => {
    const { data } = await axios('https://pokeapi.co/api/v2/pokemon?limit=20');
    const results = [];
    for (let i = 0; i < data.results.length; i++) {
      const result = data.results[i];
      const response = await axios.get(result.url);
      results.push(response.data);
    }
    setPokemons(results);
  };

  useEffect(() => {
    getpokemons();
  }, []);

  return (
    <div>
      <PokemonsView pokemons={pokemons} />
    </div>
  );
};
