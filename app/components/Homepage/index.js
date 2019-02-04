import React, { Component } from 'react';
import TopBar from 'components/TopBar';
import { Link } from 'react-router-dom';
import image from 'components/Signup';


import { Main } from './style.js';

class Homepage extends Component {
  render() {
    return (
      <div>
        <Main>
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
        </Main>
      </div>
  
  );
}
}

export default Homepage;