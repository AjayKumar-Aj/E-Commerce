import React, { Component } from 'react';
import TopBar from 'components/TopBar';
import { Link } from 'react-router-dom';
import image from 'components/Signup';


import { Container, Main, Middle, Clearfix, SigningUp, BoxModel } from './style.js';

class Signup extends Component {
  render() {
    return (
      <div>
        <Main>
          <form>
            <BoxModel>
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>

            <Middle>
              <label for="email"><b>Email</b></label>
              <input type="text" placeholder="Enter Email" name="email" required/>

              <label for="psw"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" required/>

              <label for="psw-repeat"><b>Repeat Password</b></label>
              <input type="password" placeholder="Repeat Password" name="psw-repeat" required/>
            </Middle>

<<<<<<< HEAD
            <SigningUp>
              <Link to="/Homepage" class="menu">Sign Up</Link>
            </SigningUp>

            <Container>
              <p>Already have an account? <a href="http://localhost:3000/">Sign in</a>.</p>
=======
            <Clearfix>
              <SigningUp>
            <Link to="/Homepage">Sign Up</Link></SigningUp>


            </Clearfix>

            <Container>
              <p>Already have an account? <Link to="/">Sign In</Link> </p>
>>>>>>> 143a56ab6660b418481fa85e55dee16f4ab65a08
            </Container>
            </BoxModel>
          </form>
        </Main>

      </div>
    );
  }
}

export default Signup;
