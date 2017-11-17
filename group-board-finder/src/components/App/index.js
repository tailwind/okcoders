import React, { Component } from 'react';
import Header from '../Header/index.js';
import Hero from '../Hero/index.js';
import { MenuItem } from 'react-bootstrap';
import SearchBar from '../SearchBar/index';
import SearchListing from '../SearchListing/index';
import Footer from '../Footer/index';

import { Switch, Route } from 'react-router-dom';

class App extends Component {

buildNavDropDownCategoriesList() {

    const categories = ['Popular', 'Everything', 'Gifts', 'Videos', 'Animals and pets', 'Architecture', 'Art', 'Cars and motorcycles',
    'Celebrities', 'DIY and crafts', 'Design', 'Education', 'Entertainment', 'Food and drink', 'Gardening', 'Geek', 'Hair and beauty',
  'Health and fitness', 'History', 'Holidays and event', 'Home decor', 'Humor', 'Illustrations and posters', 'Kids and parenting',
  'Men\'s fashion', 'Outdoors', 'Photography', 'Products', 'Quotes', 'Science and nature', 'Sports', 'Tattoos', 'Technology',
  'Travel', 'Weddings', 'Women\'s fashion'];

    const categorieslist = categories.map((category, i) =>
      // expression goes here:
    <MenuItem eventKey={i}>{category}</MenuItem>
    );

    return categorieslist;
  }

render() {
    return (
      <div className="App">
        <Header buildDropDown={this.buildNavDropDownCategoriesList}/>
        <Hero />
        <SearchBar />
        <Switch>
          <Route exact path='/search' component={SearchListing}></Route>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
