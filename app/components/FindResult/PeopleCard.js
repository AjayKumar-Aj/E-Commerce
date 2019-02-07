import React, { Component } from 'react';
import { Card, CardText, CardImg, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import { CardBox,CardImage  } from './style.js';

class PeopleCard extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    let { id, name, company, description, image } = this.props.person;
    return (
      <div>
        <CardBox>
          <CardImg src={image} alt="Card image cap" />
          <CardBody>
            <CardTitle>{name}</CardTitle>
            <CardSubtitle>{company}</CardSubtitle>
            <CardText>{description}</CardText>
          </CardBody>
        </CardBox>
      </div>
    )
  }
}

export default PeopleCard;