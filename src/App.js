// import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PokemonsMain } from './components/views/pokemons/PokemonsMain';
import { PokemonMain } from './components/views/pokemons/PokemonMain';
import { LoginMain } from './components/views/login/LoginMain';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PrivateRouter } from './components/routes/PrivateRouter';
import { NavBar } from './components/ui/NavBar';
import { FavoritePokemons } from './components/views/pokemons/favorites/FavoritePokemons';

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/login" component={LoginMain} />
          <PrivateRouter exact path="/" component={PokemonsMain} />
          <PrivateRouter exact path="/favorites" component={FavoritePokemons} />
          <PrivateRouter exact path="/:id" component={PokemonMain} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
