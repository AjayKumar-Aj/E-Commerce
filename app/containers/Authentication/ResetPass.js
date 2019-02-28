import React, { Component } from "react";
import { auth } from "../firebase";

import { ResetButton, ResetForm, Emailtext, Emailtext2 } from './style.js';
/* eslint-disable react/prefer-stateless-function */
const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

export class ResetPass extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    console.log('submit');
    const { email } = this.state;

    const { history } = this.props;

    auth
      .doPasswordReset(email)
      .then(() => {
        console.log('hitting');
        this.setState({ ...INITIAL_STATE });
        this.props.history.push('/ResetPass');
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });
    event.preventDefault();
  };


  render() {
    const { email, error } = this.state;

    const isInvalid = email === '';
    return (
      <div>
        <form onSubmit={this.onSubmit}>
        <ResetForm>
          <Emailtext>
          <label for="email" class="text"><b>Email</b></label>
          <Emailtext2
            value={email}
                onChange={event =>
                  this.setState(byPropKey('email', event.target.value))
                }
                type="text"
                placeholder="Email Address"
                class="text2"
          />
          </Emailtext>
	        <ResetButton disabled={isInvalid} type="submit">Send Confirmation</ResetButton>
        </ResetForm>
        {error && <p>{error.message}</p>}
        </form>
      </div>
    );
  }
}

export default ResetPass;