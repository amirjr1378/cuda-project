//components
import { render } from 'react-dom';
import React from 'react'
import App from './component/App.js'
import { BrowserRouter as Router} from 'react-router-dom'
//plugins
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-v4-rtl/dist/css/bootstrap-rtl.min.css"
import "../node_modules/font-awesome/css/font-awesome.min.css";
//our styles
import "./styles/app.scss"
render(
    <Router><App /></Router>,
    document.getElementById("root")
);