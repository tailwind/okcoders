import React, { Component } from 'react';
import Header from '../Header/index.js';
import Hero from '../Hero/index.js';
import { MenuItem } from 'react-bootstrap';
import SearchBar from '../SearchBar/index';
import SearchListing from '../SearchListing/index';
import Footer from '../Footer/index';
import {loadBoardData, getDataBySearchTerm, getCategoryNames, fuzzySearch} from '../../api/datamanager';

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
    this.setState({ data: boardData })
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
      <MenuItem eventKey={i}><Link to={"/" + category.value}>{category.name}</Link></MenuItem>
      );
      return categorieslist;
    }

render() {
    return (
      <div className="App">
        <Header dropDownList={this.buildNavDropDownCategoriesList()}/>
        <Hero />
        <SearchBar setTerm={this.setTerm} />
        <SearchListing data={this.state.results} />
        <Footer />
      </div>
    );
  }
}

export default App;
