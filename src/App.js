import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import PokemonForm from './components/PokemonForm';
import ItemForm from './components/ItemForm';

function App() {
  return (
    <Router>
      <div className="App-header">
        <nav>
          <ul>
            <li>
              <Link to="/">Pokemon</Link>
            </li>
            <li>
              <Link to="/items">Items</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/items">
            <ItemForm />
          </Route>
          <Route path="/">
            <PokemonForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
