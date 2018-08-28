import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import AuthButton from '../auth/authButton';
import mainLogo from'../../../../logo.png';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ background: 'transparent' }}>
                <span className="navbar-brand"><Link to="/"><img src={mainLogo} alt="" style={{ height: '40px', width: '40px' }}/></Link></span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <span className="nav-link"><Link to="/">Home</Link><span className="sr-only">(current)</span></span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link"><Link to="/view-all">View All</Link></span>
                        </li>
                        <li className="nav-item dropdown">
                            <span className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
        </span>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <span className="dropdown-item"><Link to="/">Option 1</Link></span>
                                <span className="dropdown-item"><Link to="/">Option 2</Link></span>
                                <div className="dropdown-divider"></div>
                                <span className="dropdown-item"><Link to="/">Option 3</Link></span>
                            </div>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link" href=""><AuthButton /></span>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        )
    }
}