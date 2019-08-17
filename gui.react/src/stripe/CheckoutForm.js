import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import styles from './CheckoutForm.module.css'

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    let {token} = await this.props.stripe.createToken({name: "Name"});
    if (token !== undefined) {
      let response = await fetch("http://localhost:3000/checkout", {
          method: "POST",
          headers: {"Content-Type": "text/plain"},
          body: token.id
      }).catch(error=> console.log(error));
  
      console.log(response);
      if (response.ok) alert("Transaction complete.");
    }  
  }

  render() {
    return (
      <div className={styles.CheckoutForm}>
        <CardElement/>
        <button onClick={this.submit}>SUBMIT</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);