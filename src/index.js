import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import KandyKorner from "./components/KandyKorner.js"
import { BrowserRouter as Router} from "react-router-dom"

ReactDOM.render(<Router><KandyKorner /></Router>, document.querySelector("#root"))
