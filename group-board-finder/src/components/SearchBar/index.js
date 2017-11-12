import React, { Component } from 'react';

// This styles the input parent div
const divStyle = {
  margin: '20', textAlign: 'center'
};

class SearchBar extends Component {
  constructor(props) {
		super(props);

		this.state = { term: ''};
  }
  
	render() {
		return (
			<div style={divStyle} className='col-md-6'  >
				<input
        className='form-control form-control-lg'
				value={this.state.term}
				onChange={event => this.onInputChange(event.target.value)} 
        style={{Width: '75%'}}
        />
			</div>
		);
	}

// Updates the input to a controlled component
	onInputChange(term) {
		this.setState({term});
	}
}

export default SearchBar;