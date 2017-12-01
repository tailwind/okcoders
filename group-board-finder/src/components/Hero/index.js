import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';

const containerStyle ={
    background: "url(" + "https://d31a41pz1c3dkr.cloudfront.net/img/heros/laptop-pinterest.indexed.jpg" + ")"
}

const jumbotronStyle = {
  height: "500px",
  backgroundColor: "rgba(0, 65, 110, 0.9)"
};

const textStyle = {
  color: "white",
  textAlign: "center"
}

class Hero extends Component {
  render() {
    return (
      <Switch>

        {/* Display Hero on homepage */}   

        <Route exact path="/" render={() => (
          <div style={containerStyle}>
            <Jumbotron style={jumbotronStyle}>
              <h1 style={textStyle}>Pinterest Group Board Finder</h1>
              <br />
              <br />
              <h2 style={textStyle}>Request to join any Group Board with a click</h2>
              <br />
              <br />
              <h3 style={textStyle}>The most complete and up-to-date directory of Pinterest Group Boards</h3>
            </Jumbotron>
          </div>
        )}/>

        {/* Display Hero on Category results page */}  

        <Route exact path="/category/:category" render={(props) => (
          <div style={containerStyle}>
            <Jumbotron style={jumbotronStyle}>
              <h1 style={textStyle}>Explore Top {props.match.params.category} Pinterest Group Boards</h1>
              <br />
              <br />
              <h2 style={textStyle}>Request to join any Group Board with a click</h2>
              <br />
              <br />
        <h3 style={textStyle}>[Number] {props.match.params.category} Group Boards found!</h3>
            </Jumbotron>
          </div>
        )}/>

        {/* Display Hero on keyword search results page */}  

        <Route exact path="/search/:term" render={(props) => (
          <div style={containerStyle}>
            <Jumbotron style={jumbotronStyle}>
              <h1 style={textStyle}>Search Results: {props.match.params.term} Pinterest Group Boards</h1>
              <br />
              <br />
              <h2 style={textStyle}>Request to join any Group Board with a click</h2>
              <br />
              <br />
              <h3 style={textStyle}>[Number] Group Boards found related to {props.match.params.term}</h3>
            </Jumbotron>
          </div>
        )}/>
        
      </Switch>
    );  
    
  }
}


export default Hero;
