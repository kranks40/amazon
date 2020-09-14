import React from 'react';
import { BrowserRouter as Route, Router, Switch } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';


function App() {
  return (
    //BEM convention
    <Router>
    <div className="app">
      <Switch>
        <Route path='/checkout'>
          <Header/>
          <h1>This is the checkout page!</h1>
        </Route>
        <Route path='/'>
          <Header/>
          <Home/>
        </Route>         
      
      </Switch>
      </div>
      </Router>
      
  );
}

export default App;
