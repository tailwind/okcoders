import React, { Component } from 'react';
import { ListGroupItem, Modal, Button, Clearfix, Image, Tooltip, OverlayTrigger, FormGroup, InputGroup, FormControl, ControlLabel } from 'react-bootstrap';
import _ from 'lodash';
import Icon from './question.svg';
import { Link } from 'react-router-dom';
import {getPrettyCategoryName} from '../../api/datamanager'

class SearchListingItem extends Component {
  constructor(props){
    super(props)
    const viralityScore = _.floor(this.props.data.repin/this.props.data.pin_count)
    const prettyCat= getPrettyCategoryName(this.props.data.category)
    this.state = {
      board : props.data,
      showModal : false,
      virality : viralityScore,
      joinRequestSent: false,
      prettyCategoryName : prettyCat
    };
  }

  openModal= () => {
    this.setState({showModal : true});
  }
  
  closeModal= () => {
    this.setState({showModal: false})
  }

  sendMessage= () =>{
    this.setState({joinRequestSent : true})
    this.closeModal()
  }

  cancelJoinRequest= () =>{
    this.setState({joinRequestSent : false})
  }


render(){
  return (

    <div className='animated fadeInUp'>
      <ListGroupItem key={this.state.board.board_id}>
      <h1>
      <Image src={this.state.board.board_cover_image_url} style={{marginBottom: '2rem'}} responsive rounded />
      <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip">{this.state.board.description}</Tooltip>}>
      <a href={`http://www.pinterest.com${this.state.board.board_url}`}>
        {this.state.board.board_name}
      </a>
      </OverlayTrigger>
      </h1>
      {!this.state.joinRequestSent && (<Button bsStyle="success" style={{ marginRight: '5%' }} className='pull-right' onClick={this.openModal} > Request to Join  </Button>)}
      {this.state.joinRequestSent && (<Button bsStyle="danger" className='pull-right' onClick={this.cancelJoinRequest} style={{ marginRight: '5%' }} > Cancel Join Request  </Button>)}
      {!(this.state.board.category === "NULL") && <Link to={`/category/${this.state.board.category}`}><h4>{this.state.prettyCategoryName}</h4></Link>}
      <p>{this.state.board.description}</p>

     
      <h4>followers: {this.state.board.board_follower_count}</h4>
      <h4>collaborators: {this.state.board.board_collaborators}</h4>
      <h4>pin count: {this.state.board.pin_count}</h4>
      <h4>

           Virality Score: {this.state.virality}      
           <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip">We calculated this number by dividing the repins by total pins.</Tooltip>}>
          <img src={Icon} alt=""  style={{height: '1em'}} /> 
          </OverlayTrigger>
      </h4>     
      <a href={`http://www.pinterest.com/${this.state.board.username}`}><Image src={this.state.board.image} responsive circle /></a>
      <h4>Admin: <a href={`http://www.pinterest.com/${this.state.board.username}`}>{this.state.board.username}</a></h4>
      {!(this.state.board.website_url ==="NULL") && (<h4>Admin Site: <a href={`${this.state.board.website_url}`}>{this.state.board.website_url}</a></h4>) }

          <Modal show={this.state.showModal} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Request to join {this.state.board.board_name} as a collaborator: </Modal.Title>
          </Modal.Header>
            <Modal.Body>
              <form>
                <h2> Tell us about yourself: </h2>
                <FormGroup>
                  <InputGroup>
                      <InputGroup.Addon>@</InputGroup.Addon>
                      <FormControl type="text"/>
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                <InputGroup>
                      <InputGroup.Addon>Name:</InputGroup.Addon>
                      <FormControl type="text"/>
                  </InputGroup>
                </FormGroup>
                <FormGroup controlId="formControlsTextarea">
                <ControlLabel>Enter a message for the Group Board owner:</ControlLabel>
                <FormControl componentClass="textarea" placeholder="500 characters available" maxLength="500" />
              </FormGroup>
                
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.closeModal}> Close </Button>
              <Button bsStyle="success" onClick={this.sendMessage}> Send </Button>
            </Modal.Footer>
          </Modal>




        <Clearfix></Clearfix>
      </ListGroupItem>
    </div>
  );
}
  
}

export default SearchListingItem;
