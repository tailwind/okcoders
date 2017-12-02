import React, { Component } from 'react';
import { ListGroupItem, Modal, Button, Clearfix, Image, Tooltip, OverlayTrigger } from 'react-bootstrap';
import _ from 'lodash';
import Icon from './question.svg';
import { Link } from 'react-router-dom';

class SearchListingItem extends Component {
  constructor(props){
    super(props)

    this.state = {
      board : props.data,
      showModal : false 
    };


    const pinUrl = 'http://www.pinterest.com'
    const adminUrl = `${pinUrl}/${this.state.board.username}`
    const viralityScore = _.floor(this.state.board.repin/this.state.board.pin_count)

  }


render(){
  return (
    <div>
      <ListGroupItem key={this.state.board.board_id}>
      <h1>
      <Image src={this.state.board.board_cover_image_url} responsive />
      <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip">{this.state.board.description}</Tooltip>}>
      <a href={`http://www.pinterest.com${this.state.board.board_url}`}>
        {this.state.board.board_name}
      </a>
      </OverlayTrigger>
      </h1>
      <Link to={`/category/${this.state.board.category}`}><h4>{this.state.board.category}</h4></Link>
      <p>{this.state.board.description}</p>
      <h4>followers: {this.state.board.board_follower_count}</h4>
      <h4>collaborators: {this.state.board.collaborators}</h4>
      <h4>pin count: {this.state.board.pin_count}</h4>
      <h4>
       <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip">We calculated this number by dividing the repins by total pins.</Tooltip>}>
          <img src={Icon} style={{height: '1em'}} /> 
        </OverlayTrigger>
           Virality Score: {this.viralityScore}
      </h4>     
      <a href={this.adminUrl}><Image src={this.state.board.admin_image} responsive circle /></a>
      <h4>Admin: <a href={this.adminUrl}>{this.state.board.username}</a></h4>
      <h4>Admin Site: <a href={`${this.state.board.website_url}`}>{this.state.board.website_url}</a></h4>  

          <Button bsStyle="success" className='pull-right' >
            Request to Join 
          </Button>
        <Clearfix></Clearfix>
      </ListGroupItem>
    </div>
  );
}
  
}

export default SearchListingItem;
