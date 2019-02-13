/**
 *
 * Authentication
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { Helmet } from 'react-helmet';
import { Helmet } from './style.js';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Link } from 'react-router-dom';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectAuthentication from './selectors';
import reducer from './reducer';
import saga from './saga';
import avatar from './avatar.png';
import Background from './image.jpg';
import { auth } from '../firebase';
// import Signup from '.../components/Signup';
import { Wrapper, ForgetPassword, SignUp, Bg, Form, InsideForm, LoginBox, Avatar, SigningUp, Login, Forget, CenterContainer, Button, BoxText, InputBox, AdditionalFormData  } from './style.js';

import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

export class Authentication extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('hitting');
        this.setState({ ...INITIAL_STATE });
        this.props.history.push('/Homepage');
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });
    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';
    return (
      <Wrapper>
        <Bg>
        <img src={ Background } />
        <Form>
          <InsideForm>
       <form onSubmit={this.onSubmit}>
        <InputBox
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        <InputBox
          value={password}
          onChange={event => this.setState(byPropKey('password', event.target.value))}
          type="password"
          placeholder="Password"
        />
        <Button disabled={isInvalid} type="submit">
          Sign In
        </Button>
        <ForgetPassword>
              <Link to="/Homepage" class="fp">Forget Password ?</Link>
        </ForgetPassword>
        <SignUp>
          <Link to="/Homepage" class="su">Sign Up</Link>
        </SignUp>
        

        { error && <p>{error.message}</p> }
      </form>
      </InsideForm>
      </Form>
      </Bg>
      </Wrapper>

    );
  }
}

Authentication.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  authentication: makeSelectAuthentication(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'authentication', reducer });
const withSaga = injectSaga({ key: 'authentication', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Authentication);
