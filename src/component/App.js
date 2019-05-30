//components
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import TopNav from "./TopNav"
import Home from "./Home"
import { Form } from "./AuthButton"
import { Route } from 'react-router-dom'
const App = props => {
    return (
        <div>
            <TopNav />
            <Route path="/loginpage" component={Form} />
            <Route path="/" exact={true} component={Home} />
        </div>
    );
}

export default App;