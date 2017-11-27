import React, { Component } from 'react';
import Header from '../Header/index.js';
import Hero from '../Hero/index.js';
import { MenuItem } from 'react-bootstrap';
import SearchBar from '../SearchBar/index';
import SearchListing from '../SearchListing/index';
import Footer from '../Footer/index';
import {loadBoardData, getDataBySearchTerm, fuzzySearch} from '../../api/datamanager';

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

      const categories = [
        {name: 'Popular', value: 'popular'}, 
        {name: 'Everything', value: 'everything'}, {name: 'Gifts', value: 'gifts'}, 
        {name: 'Videos', value: 'videos'}, 
        {name: 'Animals and Pets', value: 'animals_pets'}, 
        {name: 'Architecture', value: 'architecture'}, 
        {name: 'Art', value: 'art'}, 
        {name: 'Cars and Motorcycles', value: 'cars_motorcycles'},
        {name: 'Celebrities', value: 'celebrities'}, 
        {name: 'DIY and Crafts', value: 'diy_crafts' }, 
        {name: 'Design', value: 'design'}, 
        {name: 'Education', value: 'education'}, 
        {name: 'Entertainment', value: 'entertainment' }, 
        {name: 'Food and Drink', value: 'food_drink'}, 
        {name: 'Gardening', value: 'gardening'}, 
        {name: 'Geek', value: 'geek'}, 
        {name: 'Hair and Beauty', value: 'hair_beauty'},
        {name: 'Health and Fitness', value: 'health_fitness'}, 
        {name: 'History', value: 'history'}, 
        {name: 'Holidays and Event', value: 'holidays_event'}, 
        {name: 'Home Decor', value: 'home_decor'}, 
        {name: 'Humor', value: 'humor'}, 
        {name: 'Illustrations and Posters', value: 'illustrations_posters'}, 
        {name: 'Kids and Parenting', value: 'kids_parenting'},
        {name: 'Men\'s Fashion', value: 'mens_fashion'}, 
        {name: 'Outdoors', value: 'outdoors'}, 
        {name: 'Photography', value: 'photography'}, 
        {name: 'Products', value: 'products'}, 
        {name: 'Quotes', value: 'quotes'}, 
        {name: 'Science and Nature', value: 'science_nature'}, 
        {name: 'Sports', value: 'sports'}, 
        {name: 'Tattoos', value: 'tattoos'}, 
        {name: 'Technology', value: 'technology'},
        {name: 'Travel', value: 'travel'}, 
        {name: 'Weddings', value: 'weddings'}, 
        {name: 'Women\'s Fashion', value: 'womens_fashion'}
    ];

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
