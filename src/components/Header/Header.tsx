import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = () => (
    <header className="header center">
        <h3>
            <a href="https://casarin.dev" className="header-title">
                JC
            </a>
        </h3>
        <Navbar />
    </header>
);

export default Header;
