import React, { Component } from 'react';
import Header from '../Header/index.js';
import SearchBar from '../SearchBar/index';
import SearchListing from '../SearchListing/index';
import Footer from '../Footer/index';

import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
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
