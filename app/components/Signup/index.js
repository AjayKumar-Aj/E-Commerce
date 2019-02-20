import React, { Component } from 'react';
import TopBar from 'components/TopBar';
import { auth } from './firebase';
import { Link } from 'react-router-dom';
import image from 'components/Signup';
import { Container, Main, Middle, Clearfix, Button, InputBox, SigningUp, BoxModel } from './style.js';

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};


class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    const { history } = this.props;

    auth.doCreateUserWithEmailAndPassword(email, password).then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push('/Homepage');
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });
    event.preventDefault();
  };

  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === '' || email === '';
    return (
      <div>
        <Main>
          <form>
            <BoxModel>
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>

            <form onSubmit={this.onSubmit}>
              <InputBox
                value={email}
                onChange={event =>
                  this.setState(byPropKey('email', event.target.value))
                }
                type="text"
                placeholder="Email Address"
              />
              <InputBox
                value={password}
                onChange={event =>
                  this.setState(byPropKey('password', event.target.value))
                }
                type="password"
                placeholder="Password"
              />
              <Button disabled={isInvalid} type="submit">
                Sign In
              </Button>

              {error && <p>{error.message}</p>}
            </form>

            <Container>
              <p>Already have an account? <a href="http://localhost:3000/">Sign in</a>.</p>
            </Container>
            </BoxModel>
          </form>
        </Main>

      </div>
    );
  }
}

export default Signup;
