import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import { loadBoardData } from '../../api/datamanager.js'
import _ from 'lodash';
import SearchListingItem from '../SearchListingItem'

const CategoryListing = (props) => {
  
  console.log(props.data);

  const boardItems = props.data.map((board) => {
    return (
      <SearchListingItem data={board} />
    )
  })

    return (
      <div className='row'>
        <div className='col-xs-12'>
        <ListGroup>
          {boardItems}
        </ListGroup>
        </div>
      </div>
    );
}

export default CategoryListing;
