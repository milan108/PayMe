import React from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import styles from './CheckoutForm.module.css'

const CheckoutForm = props => {
 
  const submit = async(ev) => {
    let {token} = await props.stripe.createToken({name: "Name"});
    if (token !== undefined) {
      let response = await fetch("http://localhost:3000/checkout", {
          method: "POST",
          headers: {"Content-Type": "text/plain"},
          body: token.id
      }).catch(error=> console.log(error));
  
      console.log(response);
      if (response.ok) alert("Transaction complete.");
    }  
  };

  return (
    <div className={styles.CheckoutForm}>
      <CardElement/>
      <button onClick={submit}>SUBMIT</button>
    </div>
  );
  
}

export default injectStripe(CheckoutForm);