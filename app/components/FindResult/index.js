import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import MainArea from './MainArea.js';
import { Find, Search, Clear } from './style.js';

class FindResult extends Component {

  constructor(props) {
    super(props);

    this.enableList = this.enableList.bind(this);
    this.disableList = this.disableList.bind(this);
    this.state = {
      showList: false
    };
  }

  enableList() {
    this.setState({
      showList: true
    });
  }

  disableList() {
    this.setState({
      showList: false
    });
  }

  render() {
    return (
      <div>
        <Find>
          <Search><button onClick={this.enableList}>Search</button></Search>
          <Clear><button onClick={this.disableList}>Clear</button></Clear>
        </Find>
        {this.state.showList && 
          <div>
            <MainArea />
          </div>
        }
    </div>
  
  );
}
}

export default FindResult;