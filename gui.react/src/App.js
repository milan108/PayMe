import React from 'react';
import CheckoutForm from './stripe/CheckoutForm';
import {Elements, StripeProvider} from 'react-stripe-elements';
import './App.css';

function App() {
  return (
    <div>
      <StripeProvider apiKey="pk_test_oTHrr6Y5osWVVciafJ9AkTHD004GmLSWs0">
        <div className="stripe">
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>
      <p style={{color: "#999", marginTop:"-10px",textAlign:"center", fontFamily:"calibri"}}>Powered by Stripe.</p>
      </div>
  );
}

export default App;
