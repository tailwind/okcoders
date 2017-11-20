import React, { Component } from 'react';
import { ListGroupItem, Button, Clearfix } from 'react-bootstrap';

const SearchListingItem = ({data, name, names}) => {

let boardName = data.map(board => board.board_name);
console.log(data)

    return (
      <div>
      <ul className="list-group">{names}</ul>
        <ListGroupItem header={name}>Tell me more about those group boards I've been looking for recently.   
            <Button bsStyle="success" className='pull-right'>
              Request to Join 
            </Button>
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">55,000 Followers</h5>
            <small>Last active 3 days ago</small>
          </div>
          <Clearfix></Clearfix>
        </ListGroupItem>
      </div>
    );
  }

export default SearchListingItem;
