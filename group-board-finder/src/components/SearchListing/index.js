import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Button, Clearfix } from 'react-bootstrap';

class SearchListing extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className='row'>
        <div className='col-xs-12'>
          <ListGroup>
            <ListGroupItem header="Amazing Board Title">Tell me more about those group boards I've been looking for recently.   
                <Button bsStyle="success" className='pull-right'>
                  Request to Join 
                </Button>
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">55,000 Folllowers</h5>
                <small>Last active 3 days ago</small>
              </div>
              <Clearfix></Clearfix>
            </ListGroupItem>
            <ListGroupItem header="Amazing Board Title">Tell me more about those group boards I've been looking for recently.   
                <Button bsStyle="success" className='pull-right'>
                  Request to Join 
                </Button>
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">55,000 Folllowers</h5>
                <small>Last active 3 days ago</small>
              </div>
              <Clearfix></Clearfix>
            </ListGroupItem>
            <ListGroupItem header="Amazing Board Title">Tell me more about those group boards I've been looking for recently.   
                <Button bsStyle="success" className='pull-right'>
                  Request to Join 
                </Button>
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">55,000 Folllowers</h5>
                <small>Last active 3 days ago</small>
              </div>
              <Clearfix></Clearfix>
            </ListGroupItem>
          </ListGroup>
        </div>
      </div>
    );
  }
}

export default SearchListing;
