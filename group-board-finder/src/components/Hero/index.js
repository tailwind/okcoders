import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';

class Hero extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => (
          <Jumbotron>
          <h1>Pinterest Group Board Finder</h1>
          <br />
          <h2>Request to join any Group Board with a click</h2>
          <br />
          <h3>The most complete and up-to-date directory of Pinterest Group Boards</h3>
        </Jumbotron>
        )}/>

        <Route exact path="/category/:term" render={(props) => (
          <Jumbotron>
          <h1>Explore Top {props.match.params.term} Pinterest Group Boards</h1>
          <br />
          <h2>Request to join any Group Board with a click</h2>
          <br />
          <h3>[number of boards] {props.match.params.term} Group Boards found!</h3>
        </Jumbotron>
        )}/>

        <Route exact path="/results/:term" render={(props) => (
          <Jumbotron>
          <h1>Search Results: {props.match.params.term} Pinterest Group Boards</h1>
          <br />
          <h2>Request to join any Group Board with a click</h2>
          <br />
          <h3>[number of boards] Group Boards found related to {props.match.params.term}</h3>
        </Jumbotron>
        )}/>
        
      </Switch>
    );  
    
  }
}
    

/*
      <Jumbotron>
        <h1>Pinterest Group Board Finder</h1>
        <br />
        <h2>Request to join any Group Board with a click</h2>
        <br />
        <h3>The most complete and up-to-date directory of Pinterest Group Boards</h3>
      </Jumbotron>
    );
  }
} */

export default Hero;
