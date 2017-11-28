import React, { Component } from 'react';
import { ListGroupItem, Button, Clearfix, Image, Tooltip, OverlayTrigger } from 'react-bootstrap';
import _ from 'lodash';
import Icon from './question.svg';

const SearchListingItem = ({ board_id, name, url, description, board_follower_count, board_cover_image_url, category, username, website_url, admin_image, collaborators, pin_count, repin }) => {

  // This works, but I'm leaving it off until the list length is limited to 25
  const includeImage = <Image src={board_cover_image_url} responsive />
  const pinUrl = 'http://www.pinterest.com'
  const adminUrl = `${pinUrl}/${username}`
  const viralityScore = _.floor(repin/pin_count)
  // const tooltip = {return (<Tooltip>{description}</Tooltip>)}

  return (
    <div>
      <ListGroupItem key={board_id}>
      <h1>
      <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip">{description}</Tooltip>}>
      <a href={`http://www.pinterest.com${url}`}>
        {name}
      </a>
      </OverlayTrigger>
      </h1>
      <h4>{category}</h4> 
      <p>{description}</p>
      <h4>Followers: {board_follower_count}</h4>
      <h4>collaborators: {collaborators}</h4>
      <h4>pin_count: {pin_count}</h4>
      <h4>
       <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip">We calculated this number by dividing the repins by total pins.</Tooltip>}>
          <img src={Icon} style={{height: '1em'}} /> 
        </OverlayTrigger>
           Virality Score: {viralityScore}
      </h4>     
      <a href={adminUrl}><Image src={admin_image} responsive circle /></a>
      <h4>Admin: <a href={adminUrl}>{username}</a></h4>
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
