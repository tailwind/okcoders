import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import { loadBoardData } from '../../api/datamanager.js'
import _ from 'lodash';
import SearchListingItem from '../SearchListingItem'

const SearchListing = (props) => {
  
  console.log(props.data)
  
  const boardItems = props.data.map((board) => {
    return (
      <SearchListingItem
        board_id={board.board_id} 
        name={board.board_name}
        url={board.board_url}
        description={board.description}
        board_follower_count={board.board_follower_count}
        board_cover_image_url={board.board_cover_image_url}
        category={board.category}
        username={board.username}
        website_url={board.website_url}      
      />
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

export default SearchListing;
