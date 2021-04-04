import React from 'react';
import {Link, NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <>
            <ul className="nav nav-pills mb-3 justify-content-center">
                <li className="nav-item">
                    <NavLink exact className="nav-link" to="/">All</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact className="nav-link" to="/active">Active</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact className="nav-link" to="/completed">Completed</NavLink>
                </li>
            </ul>
        </>
    )
}

export default Nav;