import React, { useContext, useState } from 'react';
import {
    DarkModeRounded as DarkButton,
    LightModeRounded as LightButton,
    MenuRounded as Menu,
    CloseRounded as CloseButton
} from '@mui/icons-material';
import { ThemeContext } from '../../contexts/ThemeContext';
import './Navbar.css';

const Navbar = () => {
    const [{ themeName, toggleTheme }] = useContext(ThemeContext);
    const [showNavList, setShowNavList] = useState(false);

    const toggleNavList = () => setShowNavList(!showNavList);

    return (
        <nav className="center nav">
            <ul style={{ display: showNavList ? 'flex' : undefined }} className="nav__list">
                <li className="nav__list-item">
                    <a href="#projects" onClick={toggleNavList} className="link link--nav">
                        Projects
                    </a>
                </li>

                <li className="nav__list-item">
                    <a href="#skills" onClick={toggleNavList} className="link link--nav">
                        Skills
                    </a>
                </li>

                <li className="nav__list-item">
                    <a href="#contact" onClick={toggleNavList} className="link link--nav">
                        Contact
                    </a>
                </li>
            </ul>

            <button
                type="button"
                onClick={toggleTheme}
                className="btn btn--icon nav__theme"
                aria-label="toggle theme"
            >
                {themeName === 'dark' ? <LightButton /> : <DarkButton />}
            </button>

            <button
                type="button"
                onClick={toggleNavList}
                className="btn btn--icon nav__hamburger"
                aria-label="toggle navigation"
            >
                {showNavList ? <CloseButton /> : <Menu />}
            </button>
        </nav>
    );
};

export default Navbar;
