import React, {Component} from 'react';
import { ListGroup } from 'react-bootstrap';

import SearchListingItem from '../SearchListingItem'

class CategoryListing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showMore: true
    }
  }

  render(props) {
  // console.log('props', props.data);

  const boardItems = this.props.data.map((board) => {
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
}

export default CategoryListing;
