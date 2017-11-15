import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

class Hero extends Component {
  render() {
    return (
      <Jumbotron>
        <h1>Pinterest Group Board Finder</h1>
        <br />
        <h2>Request to join any Group Board with a click</h2>
        <br />
        <p>The most complete and up-to-date directory of Pinterest Group Boards</p>
      </Jumbotron>
    );
  }
}

export default Hero;
