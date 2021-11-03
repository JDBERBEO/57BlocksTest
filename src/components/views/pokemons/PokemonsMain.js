import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  CHANGENEXTPAGE,
  CHANGEPREVIOUSPAGE,
  getPokemons,
} from '../../../store/PokemonsReducer';
import { PokemonsView } from './PokemonsView';
import { Error } from '../../ui/Error';
import { Loading } from '../../ui/Loading';

export const PokemonsMain = () => {
  const dispatch = useDispatch();
  const { pokemons, loading, error, currentPageUrl, previous, next } =
    useSelector(({ getPokemonsReducer }) => {
      return {
        pokemons: getPokemonsReducer.pokemons,
        error: getPokemonsReducer.error,
        loading: getPokemonsReducer.loading,
        currentPageUrl: getPokemonsReducer.currentPageUrl,
        previous: getPokemonsReducer.previous,
        next: getPokemonsReducer.next,
      };
    });
  useEffect(() => {
    dispatch(getPokemons(currentPageUrl));
  }, [currentPageUrl]);

  const gotoNextPage = (e) => {
    e.preventDefault();
    dispatch({ type: CHANGENEXTPAGE });
  };
  const gotoPreviousPage = (e) => {
    e.preventDefault();
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
          previous={previous}
          next={next}
        />
      )}
    </div>
  );
};
