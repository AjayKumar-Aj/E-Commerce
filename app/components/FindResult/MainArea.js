import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import PeopleCard from './PeopleCard';
import { Rowtype, Main } from './style.js';

class MainArea extends Component {
  constructor() {
    super();
    this.state = {
      people: [
        {
          id: 1,
          name: "Taj Lake Palace",
          company: "Udaipur",
          description: "Met at a party. Will connect with later",
          image: "https://k6u8v6y8.stackpathcdn.com/blog/wp-content/uploads/2014/05/lake-palace-jaipur.jpg"
        },
        {
          id: 2,
          name: "The Park",
          company: "Chennai",
          description: "Met at a party. Will connect with later",
          image: "https://s-ec.bstatic.com/images/hotel/max1024x768/103/103703163.jpg"

        },
        {
          id: 3,
          name: "Malbax",
          company: "Goa",
          description: "Met at a party. Will connect with later",
          image: "https://www.google.co.in/imgres?imgurl=https%3A%2F%2Fs-ec.bstatic.com%2Fimages%2Fhotel%2Fmax1024x768%2F103%2F103703163.jpg&imgrefurl=https%3A%2F%2Fwww.booking.com%2Fhotel%2Fin%2Fthe-taj-mahal-palace-mumbai.html&docid=IoxRnFVn2vX9gM&tbnid=dY1judasEwbSnM%3A&vet=10ahUKEwil3_e1pabgAhVDeH0KHUSoB3UQMwg3KAAwAA..i&w=1024&h=619&bih=636&biw=1366&q=taj%20mumbai%20pics%20&ved=0ahUKEwil3_e1pabgAhVDeH0KHUSoB3UQMwg3KAAwAA&iact=mrc&uact=8"

        }
      ]
    }
  }

  removePerson(id) {
    this.setState({ people: this.state.people.filter(person => person.id !== id)});
  }

  render () {
    let peopleCards = this.state.people.map(person => {
      return (
        <Row sm="4">
          <PeopleCard key={person.id} removePerson={this.removePerson.bind(this)} person={person} />
        </Row>
      )
    })
    return (
    
      
      <Rowtype>
          {peopleCards}
      </Rowtype>
    
   
    )
  }
}

export default MainArea;