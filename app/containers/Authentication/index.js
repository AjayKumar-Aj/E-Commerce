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
// import Signup from '.../components/Signup';
import { Wrapper, Bg, LoginBox, Avatar, SigningUp } from './style.js';
import messages from './messages';
import { Button } from 'reactstrap'; 

/* eslint-disable react/prefer-stateless-function */
export class Authentication extends React.PureComponent {
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
              <form>
                <p>Username</p>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter Username"
                  required/>
                <p>Password</p>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  required/>
                <input type="submit" name="submit" value="Login"/>
                  <a href="#">Forget Password?</a>
                <SigningUp>
                  <Link to="/Signup">Signup</Link>
                </SigningUp>
              </form>
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
