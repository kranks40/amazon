
import React, { useEffect } from 'react';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import './App.css';
import Checkout from './Checkout';
import { auth } from './firebase';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Payment from './Payment';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';

const promise = loadStripe('pk_test_51HSu7vG9KoZAlXGSJ0mEl2WTqUovrD6hHKuOtlwNE3U3N3DJfbQXoxjqR7c41H76Gh8cDeDNRlkqMJW1DQ84dz2q007Z4hvGfE')


function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
          dispatch({
            type: 'SET_USER',
            user: authUser
          })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })

      }
    })

  }, [])
  return (
    //BEM convention
    <Router>
    <div className="app">
      <Switch>

      <Route path='/login'>
        <Login/>
        </Route>

        <Route path='/orders'>
        <Orders/>
        </Route>

        <Route path='/checkout'>
          <Header/>
          <Checkout/>
        </Route>

        <Route path='/Payment'>
          <Header/>
          <Elements stripe={promise}>
            <Payment/>
          </Elements>          
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
