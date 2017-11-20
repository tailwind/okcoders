import React, { Component } from 'react';
import { ListGroup} from 'react-bootstrap';
import { loadBoardData } from '../../api/datamanager.js'
import _ from 'lodash';
import SearchListingItem from '../SearchListingItem'

class SearchListing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    let boardData = loadBoardData();
    this.setState({ data: boardData })
  } 
  // let names = this.state.data.map(board => <li>{board.board_name}</li>);  

  render() {
  let data = this.state.data;
  
  const boardList = (data) => {
    const listItems = data.map(board => {
      return (
        <SearchListingItem
          key={board.board_id}
          data={board} />
      );
    });
  }

  let names = this.state.data.map(board => <li className="list-group-item">{board.board_name}</li>)
  // console.log(data)

    return (
      <div className='row'>
        <div className='col-xs-12'>
        <ListGroup>
          <SearchListingItem {...this.state} names={names} data={data} />
        </ListGroup>
        </div>
      </div>
    );
  }
}

export default SearchListing;
