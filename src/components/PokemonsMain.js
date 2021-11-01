import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  CHANGENEXTPAGE,
  CHANGEPREVIOUSPAGE,
  getPokemons,
} from '../store/PokemonsReducer';
import { PokemonsView } from './PokemonsView';
import { Error } from './ui/Error';
import { Loading } from './ui/Loading';

export const PokemonsMain = () => {
  // const [currentPageUrl, setcurrentPageUrl] = useState(
  //   'https://pokeapi.co/api/v2/pokemon?limit=20',
  // );
  const dispatch = useDispatch();
  const { pokemons, loading, error, currentPageUrl } = useSelector(
    ({ getPokemonsReducer }) => {
      return {
        pokemons: getPokemonsReducer.pokemons,
        error: getPokemonsReducer.error,
        loading: getPokemonsReducer.loading,
        currentPageUrl: getPokemonsReducer.currentPageUrl,
      };
    },
  );
  useEffect(() => {
    dispatch(getPokemons(currentPageUrl));
  }, [currentPageUrl]);

  const gotoNextPage = (e) => {
    e.preventDefault();
    dispatch({ type: CHANGENEXTPAGE });
  };
  const gotoPreviousPage = (e) => {
    e.preventDefault();
    console.log('go to previous page');
    dispatch({ type: CHANGEPREVIOUSPAGE });
  };

  if (error) return <Error />;
  if (loading) return <Loading />;

  return (
    <div>
      {!!pokemons && pokemons.length > 0 && (
        <PokemonsView
          pokemons={pokemons}
          gotoNextPage={gotoNextPage}
          gotoPreviousPage={gotoPreviousPage}
        />
      )}
    </div>
  );
};
