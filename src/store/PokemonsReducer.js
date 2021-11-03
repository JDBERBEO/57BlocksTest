import axios from 'axios';

export const POKEMONS_LOADING = 'POKEMONS_LOADING';
export const POKEMONS_SUCCESS = 'POKEMONS_SUCCESS';
export const POKEMONS_ERROR = 'POKEMONS_ERROR';
export const POKEMONS_FINISHED = 'POKEMONS_FINISHED';
export const CHANGENEXTPAGE = 'CHANGENEXTPAGE';
export const CHANGEPREVIOUSPAGE = 'CHANGEPREVIOUSPAGE';

export function getPokemons(currentPageUrl) {
  return async function (dispatch) {
    try {
      dispatch({ type: POKEMONS_LOADING });

      const { data } = await axios(currentPageUrl);

      const results = [];
      for (let i = 0; i < data.results.length; i++) {
        const result = data.results[i];
        const response = await axios.get(result.url);
        results.push(response.data);
      }
      dispatch({ type: POKEMONS_SUCCESS, payload: { results, data } });
    } catch (error) {
      dispatch({ type: POKEMONS_ERROR, payload: error });
    } finally {
      dispatch({ type: POKEMONS_FINISHED });
    }
  };
}

const initialState = {
  pokemons: '',
  currentPageUrl: 'https://pokeapi.co/api/v2/pokemon?limit=20',
  next: false,
  previous: false,
  loading: false,
  error: false,
};

const getPokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POKEMONS_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case POKEMONS_SUCCESS: {
      return {
        ...state,
        pokemons: action.payload.results,
        next: action.payload.data.next,
        previous: action.payload.data.previous,
      };
    }
    case POKEMONS_ERROR: {
      return {
        ...state,
        error: true,
      };
    }
    case POKEMONS_FINISHED: {
      return {
        ...state,
        loading: false,
      };
    }
    case CHANGENEXTPAGE: {
      return {
        ...state,
        currentPageUrl: state.next,
      };
    }
    case CHANGEPREVIOUSPAGE: {
      return {
        ...state,
        currentPageUrl: state.previous,
      };
    }
    default: {
      return state;
    }
  }
};

export default getPokemonsReducer;
