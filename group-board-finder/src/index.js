import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/index';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import {loadBoardData} from './api/datamanager.js'

ReactDOM.render((
<Router>
  <App />
</Router>)
, document.getElementById('root'));

const data = loadBoardData();
console.log(data)
