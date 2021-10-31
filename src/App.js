import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PokemonsMain } from './components/PokemonsMain';
import { PokemonMain } from './components/PokemonMain';
import { LoginMain } from './components/LoginMain';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LoginMain} />
          <Route exact path="/pokemons" component={PokemonsMain} />
          <Route exact path="/:id" component={PokemonMain} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
