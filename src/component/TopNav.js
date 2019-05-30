import React from 'react'
import {AuthButton} from"./AuthButton"
import { NavLink } from 'react-router-dom'
const TopNav = () => {
    return (
        <div className="top-nav">
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
                <a className="navbar-brand" href="#">Cuda</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" exact={true} to="/">Home</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                         <li className="nav-item">
                            <NavLink className="nav-link" to="/work">work</NavLink>
                        </li>
                        <AuthButton />
                    </ul>
                </div>
            </nav>
          
        </div>
    )
}

export default TopNav