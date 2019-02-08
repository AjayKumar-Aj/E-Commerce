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
          description: "Matchless hospitality, award-wining restaurants, impeccable services are offered at Taj Lake Palace in Udaipur.  It comprises 66 well designed rooms and 17 suites that come with modern and essential amenities like LCD TV, electronic safe, mini bar, tea/coffee maker and attached washroom. The hotel features conference room for formal and informal gatherings. Visitors can also relish a boat ride on the scenic lake that surrounds the palace. A variety of Indian and international dishes are tendered at the restaurants which has both indoor and outdoor seating facilities.",
          image: "https://k6u8v6y8.stackpathcdn.com/blog/wp-content/uploads/2014/05/lake-palace-jaipur.jpg"
        },
        {
          id: 2,
          name: "The Taj Mahal Palace",
          company: "Mumbai",
          description: "An idyllic amalgamation of opulence, comfort and leisure, The Taj Mahal Palace is a 21 years old building in the Colaba region of Mumbai. It has 560 rooms and 44 suites which are designed keeping in mind the taste of today’s travelers. Situated just 20 miles from the international airport, the hotel has been visited by many famous celebrities from India as well as foreign countries like Bill Clinton, Hillary Clinton, Angelina Jolie and many more. The palace offers a wide array of Indian, Chinese, Italian and continental cuisines to gratify the hunger of the visitors.",
          image: "https://k6u8v6y8.stackpathcdn.com/blog/wp-content/uploads/2014/05/taj-palace-mumbai.jpg"

        },
        {
          id: 3,
          name: "The Oberoi Amarvilas",
          company: "Agra",
          description: "One of the foremost resorts in the globe, The Oberoi Amarvillas tenders comfortable, elegant rooms amidst verdant beauty, and just 600m from the Taj Mahal in the heart of Agra. It tenders a range of activities to pamper the guests. Moreover, its royal interior décor takes you back to the time of kings and queens. Guests can also indulge in an array of spa treatments or take up yoga classes to find their inner self. It tenders plethora of recreational activities that guests can relish during the stay.",
          image: "https://k6u8v6y8.stackpathcdn.com/blog/wp-content/uploads/2014/05/oberoi-amarvilas-agra.jpg"
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