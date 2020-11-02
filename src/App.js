import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import Orders from './Orders';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(
  "pk_test_51HWaKcGr8TkfccavWINmJlAqiXuvyVmaVVG5NgcquKuYXGWmT88BjaHE1DQW3D33veSyEWL8PWSeC2uUpOVJN5WY00VxeAH9Vn"
);

function App() {
  // eslint-disable-next-line
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will only load once when the app component loads...
    /**Just like a IF statement */

    auth.onAuthStateChanged((authUser) => {
      console.log('THE USER IS >>> ', authUser);
      if (authUser) {
        //user just Logged in/ user was Logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        //user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);

  return (
    // BEM
    <Router>
      <div className='app'>
        <Switch>
        <Route path='/orders'>
          <Header />
          <Orders />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/checkout'>
          <Header />
          <Checkout />
        </Route>
        <Route path='/payment'>
          <Header />
          <Elements stripe={promise}>
            <Payment />
          </Elements>
          
        </Route>
        <Route path='/'>
          <Header />
          <Home />
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;

