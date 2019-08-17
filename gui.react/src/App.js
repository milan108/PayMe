import React from 'react';
import CheckoutForm from './CheckoutForm';
import {Elements, StripeProvider} from 'react-stripe-elements';
import './App.css';


function App() {
  return (
    <StripeProvider apiKey="pk_test_oTHrr6Y5osWVVciafJ9AkTHD004GmLSWs0">
        <div className="stripe">
          <h1>React Stripe Elements Example</h1>
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>
  );
}

export default App;
