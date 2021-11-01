// import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PokemonsMain } from './components/PokemonsMain';
import { PokemonMain } from './components/PokemonMain';
import { LoginMain } from './components/LoginMain';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PrivateRouter } from './components/routes/PrivateRouter';
import { NavBar } from './components/ui/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/login" component={LoginMain} />
          <PrivateRouter exact path="/" component={PokemonsMain} />
          {/* <PrivateRouter exact path="/:id" component={PokemonMain} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
