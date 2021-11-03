import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { PokemonView } from './PokemonView';

export const PokemonMain = () => {
  const [pokemon, setPokemon] = useState(null);
  const { id } = useParams();

  const getpokemon = async () => {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    setPokemon(data);
  };

  useEffect(() => {
    getpokemon();
  }, []);

  return (
    <div>
      <PokemonView pokemon={pokemon} />
    </div>
  );
};
