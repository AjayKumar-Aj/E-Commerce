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
import image from './image.jpg';
import { auth } from '../firebase';

// import Signup from '.../components/Signup';
import { Wrapper, Bg, LoginBox, Avatar, SigningUp, Login } from './style.js';
import messages from './messages';
import { Button } from 'reactstrap';

/* eslint-disable react/prefer-stateless-function */

const INITIAL_STATE = {
  email: '',
  password: '',
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

export class Authentication extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  handleLogin = () => {
    console.log('hit');
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push('/Homepage');
      })
      .catch(error => {
        console.log('failure');

      });
  }


  render() {
    return (
      <Wrapper>
          <body>
          <Bg>
            <LoginBox>
              <Avatar>
                <img src={avatar}/>
              </Avatar>

              <h1>Login Here</h1>
              <form onSubmit={this.handleLogin}>
                <p>Username</p>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter Username"
                  onChange={event => this.setState(byPropKey('email', event.target.value))}
                  required/>
                <p>Password</p>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  onChange={event => this.setState(byPropKey('password', event.target.value))}
                  required/>
                <Login type="submit">
                  Login
                </Login>

              </form>
              <a href="#">Forget Password?</a>
            <SigningUp>
              <Link to="/Signup">Signup</Link>
            </SigningUp>
            </LoginBox>
          </Bg>
          </body>
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
