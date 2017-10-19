import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className="header_wrapper">
            <div className="nav_box">
                <ul>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/about'><li>About</li></Link>
                    <Link to='/store'><li>Shop</li></Link>
                </ul>
            </div>
        </div>
    )
}