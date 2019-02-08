import React, { Component } from 'react';
import { Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import { CardBox, Imgcard, CardText  } from './style.js';

class PeopleCard extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    let { id, name, company, description, image } = this.props.person;
    return (
      <div>
        <CardBox>
          <Imgcard>
          <CardImg src={image} alt="Card image cap" /></Imgcard>
          <CardBody>
            <CardTitle>{name}</CardTitle>
            <CardSubtitle>{company}</CardSubtitle><br></br>
            <CardText>{description}</CardText>
          </CardBody>
        </CardBox>
      </div>
    )
  }
}

export default PeopleCard;