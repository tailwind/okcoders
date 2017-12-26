import React, { Component } from "react";
import { ListGroup, Button } from "react-bootstrap";
import { getMostFollowed } from "../../api/datamanager";
import SearchListingItem from "../SearchListingItem";

class SearchListing extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showMore: true
		};
	}

	showMoreBtnClicked = props => {
		if (this.props.routeMatch === "/") {
			this.props.moreResults(getMostFollowed());
		} else {
			this.props.moreResults(this.props.data);
		}
		this.setState({ showMore: false });
	};

	render(props) {
		// console.log('props', props.data);

		const boardItems = this.props.data.map(board => {
			return <SearchListingItem data={board} key={board.board_id} />;
		});

		return (
			<div className="row">
				<div className="col-xs-12">
					<ListGroup>{boardItems}</ListGroup>
					{this.state.showMore ? (
						<Button bsStyle="primary" onClick={this.showMoreBtnClicked}>
							Show More
						</Button>
					) : null}
				</div>
			</div>
		);
	}
}

export default SearchListing;
