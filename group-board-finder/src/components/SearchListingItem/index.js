import React, { Component } from 'react';
import { ListGroupItem, Button, Clearfix, Image } from 'react-bootstrap';

const SearchListingItem = ({ board_id, name, url, description, board_follower_count, board_cover_image_url, category, username, website_url }) => {

  // This works, but I'm leaving it off until the list length is limited to 25
  const includeImage = <Image src={board_cover_image_url} responsive />
  const pinUrl = 'http://www.pinterest.com'

  return (
    <div>
      <ListGroupItem key={board_id}>
      <h1><a href={`http://www.pinterest.com${url}`}>{name}</a></h1>
      <h4>{category}</h4> 
      <p>{description}</p>
      <h4>Followers: {board_follower_count}</h4>
      <h4>Admin: <a href={`${pinUrl}/${username}`}>{username}</a></h4>
      <h4>Admin Site: <a href={`${website_url}`}>{website_url}</a></h4>  
          <Button bsStyle="success" className='pull-right'>
            Request to Join 
          </Button>
        <Clearfix></Clearfix>
      </ListGroupItem>
    </div>
  );
}

export default SearchListingItem;
