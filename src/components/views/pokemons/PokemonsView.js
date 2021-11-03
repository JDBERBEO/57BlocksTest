import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './pokemonsView.css';
import { Button } from 'react-bootstrap';

export const PokemonsView = ({
  pokemons,
  gotoNextPage,
  gotoPreviousPage,
  previous,
  next,
}) => {
  const [favorites, setfavorites] = useState(
    JSON.parse(localStorage.getItem('favorites')),
  );

  const handleAddFavorites = (pokemonId) => {
    setfavorites([...favorites, pokemonId]);
  };

  const saveFavoritesList = () => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };

  useEffect(() => {
    saveFavoritesList();
  }, [favorites]);

  return (
    <>
      <div className="containerPokemons">
        {!!pokemons &&
          pokemons.length > 0 &&
          pokemons.map((pokemon) => (
            <React.Fragment key={pokemon.id}>
              <div className="pokemonCard">
                <h5 className="cardTitle">{pokemon.name}</h5>
                <img
                  src={pokemon.sprites.front_shiny}
                  className="cardImgTop"
                  alt="pokemon img"
                />
                <div className="cardBody">
                  <Button variant="outline-secondary">
                    <Link to={`/${pokemon.id}`}> see more info </Link>
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => handleAddFavorites(pokemon.id)}
                  >
                    Add to Favorites
                  </Button>
                </div>
              </div>
            </React.Fragment>
          ))}
      </div>
      <div className="buttonWrapper">
        {previous ? (
          <Button variant="warning" onClick={gotoPreviousPage}>
            {'<'}- PREVIOUS PAGE
          </Button>
        ) : null}
        {next ? (
          <Button variant="warning" onClick={gotoNextPage}>
            NEXT PAGE -{'>'}
          </Button>
        ) : null}
      </div>
    </>
  );
};
