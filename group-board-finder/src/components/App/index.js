import React, { Component } from 'react';
import Header from '../Header/index.js';
import Hero from '../Hero/index.js';
import { MenuItem } from 'react-bootstrap';
import SearchBar from '../SearchBar/index';
import SearchListing from '../SearchListing/index';
import CategoryListing from '../CategoryListing/index';
import Footer from '../Footer/index';
import {loadBoardData, getDataBySearchTerm, getCategoryNames, fuzzySearch, getMostFollowed, getDataByCategory} from '../../api/datamanager';

import { Switch, Route, Link } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      results: []
    }
  }

  componentDidMount() {
    let boardData = loadBoardData();
    let initResults = getMostFollowed()
    this.setState({ data: boardData, results: initResults.top25 });
  }

  // This helper function is passed into the SearchBar component to pass the search results back up to the main App component
  setTerm = (results) => {
    this.setState({
      results: results.top25
    })
  }

// This function updates the state of results to increase from the default 25 to show 100 total results
  moreResults = (results) => {
    this.setState({
      results: results.top100
    })
  }

  buildNavDropDownCategoriesList() {
    // Load preformatted category list from datamanager
    const categories = getCategoryNames()
      const categorieslist = categories.map((category, i) =>
        // expression goes here:
      <MenuItem eventKey={i}><Link to={"/category/" + category.value}>{category.name}</Link></MenuItem>
      );
      return categorieslist;
    }

render() {
    return (
      <div className="App">
        <Header dropDownList={this.buildNavDropDownCategoriesList()}/>
        <Hero />
        <SearchBar setTerm={this.setTerm} />
        <Route exact path="/" render={(props) => (
          <SearchListing data={this.state.results} moreResults={this.moreResults} />
        )} />
        <Route exact path="/search/:term" render={(props) => (
          <SearchListing data={fuzzySearch(props.match.params.term)} moreResults={this.moreResults} />
        )} />
        <Route exact path="/category/:cat" render={(props) => (
          <CategoryListing data={getDataByCategory(props.match.params.cat)} />
        )} />
        <Footer />
      </div>
    );
  }
}

export default App;
