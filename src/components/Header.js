import React from 'react';
import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="kendra"> KENDRA KWOKA</div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto nav-tabs">
                    <li className="nav-item">
                        <Link to='/aboutme' style={{textDecoration: 'none'}} className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='portfolio' className="nav-link">Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/contact' className="nav-link">Contact / Info</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;