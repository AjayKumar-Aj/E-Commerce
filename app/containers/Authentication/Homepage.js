import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import image from './Signup';
import DatePicker from "react-datepicker";
import FindResult from 'components/FindResult';
import TopBar from 'components/TopBar';
import "react-datepicker/dist/react-datepicker.css";


import { LeftDate, RightDate, Login} from './style.js';


class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    return (
      
      <div>
      <Login>
      <p> test </p> 

        <LeftDate>
          
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleChange}
            />
        </LeftDate>

        <RightDate>
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleChange}
            />
        </RightDate>
        <FindResult />
        
        
      </Login>
      
      </div>
  
    );
  }
}

export default Homepage;