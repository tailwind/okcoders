import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import _ from 'lodash';
import {fuzzySearch} from '../../api/datamanager';

// This styles the input parent div
const divStyle = {
  margin: '20', 
  textAlign: 'center',
  marginTop: '2rem'
};

class SearchBar extends Component {
  constructor(props) {
		super(props);

		this.state = { 
      term: '',
      results: []
    };
  }
  
	render() {
		return (
      <div className='row'>
        <div style={divStyle} className='col-md-6'>
          <form>
          <FormGroup
            controlId="SearchBarForm"
            bsSize="large"
          >
            <ControlLabel>Search Group Boards</ControlLabel>
            <FormControl
              type="text"
              value={this.state.term}
              placeholder="What Group Boards sound interesting to you?"
              onChange={event => this.handleChange(event.target.value)} 
            />
            <FormControl.Feedback />
          </FormGroup>
        </form>
        </div>
      </div>
		);
	}

// Updates the input to a controlled component
  handleChange(term) {
    this.setState({term});
    const results = fuzzySearch(term)
    this.setState({results: results})
	}
}

export default SearchBar;