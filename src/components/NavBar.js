import React, {Component} from "react";
import {Link} from "react-router-dom";

class NavBar extends Component {
    render() {
        return (
            <nav className = "navbar">
            <ul>
            <li>
                <Link to="/candy">Candy</Link>
            </li>
            <li>
                <Link to="/employees">Employees</Link>
            </li>
            <li>
                <Link to="/stores">Stores</Link>
            </li>

            </ul>
            </nav>

        )
    }
}

export default NavBar;