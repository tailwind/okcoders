import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/index";
import { BrowserRouter } from "react-router-dom";

// import {loadBoardData} from './api/datamanager.js'

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById("root")
);

// const data = loadBoardData();
