import './App.css';
import Header from "./Header"
import Home from "./Home"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout"
import Login from "./Login"
import Payment from "./Payment"
import { auth } from "./Firebase";
import React, { useEffect } from "react";
import { useStateValue } from "./StateProvider";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
const promise = loadStripe(
  "pk_test_51IOFaVFhKtg7lONuBRM07exfTQHyBkCHavgftjNCSrKJk4xYwTNKg8XTt7QcxamBM9HkJKaVC9kCrrlZOdNmrCVc00mOvdv366"
);
function App() {
   const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
        <Switch>
           <Route path="/login">
            <Login />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
             </Elements>
          </Route>
          <Route path="/Checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
           < Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
