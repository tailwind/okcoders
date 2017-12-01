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
    this.setState({ data: boardData, results: initResults });
  }

  // This helper function is passed into the SearchBar component to pass the search results back up to the main App component
  setTerm = (results) => {
    this.setState({
      results: results
    })
  }

  buildNavDropDownCategoriesList() {
    // Load preformatted category list from datamanager
    const categories = getCategoryNames()
      const categorieslist = categories.map((category, i) =>
        // expression goes here:
        <Link to={"/category/" + category.value}><MenuItem eventKey={i}><Link to={"/category/" + category.value}>{category.name}</Link></MenuItem></Link>
      );
      return categorieslist;
    }

render() {
    return (
      <div className="App">
        <Header dropDownList={this.buildNavDropDownCategoriesList()}/>
        <Hero />
        <SearchBar setTerm={this.setTerm} />
        <Route exact path="/" render={() => (
          <SearchListing data={this.state.results} />
        )} />
        <Route exact path="/search/:term" render={(props) => (
          <SearchListing data={fuzzySearch(props.match.params.term)} />
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
