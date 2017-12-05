import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import _ from 'lodash';
import {fuzzySearch} from '../../api/datamanager';

// This styles the input parent div
const divStyle = {
  margin: '20', 
  textAlign: 'center',
  marginTop: '2rem',
  marginLeft: 'auto',
  marginRight: 'auto'
};

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      term: ''
    };
  }
  
  render() {
    return (
      <div className='row' style={{display: 'flex'}}>
        <div style={divStyle} className='col-md-6 animated fadeInUp'>
          <form>
          <FormGroup
            controlId="SearchBarForm"
            bsSize="large"
          >
            <ControlLabel>Search Group Boards</ControlLabel>
            <FormControl
              type="text"
              value={this.state.term}
              placeholder="Search for a Group Board"
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

    _.debounce(() => this.props.setTerm(results), 33)
    this.setState({term});
    const results = fuzzySearch(term)
    this.props.setTerm(results)
  
  }
}

export default SearchBar;