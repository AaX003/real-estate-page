import { useState } from "react";
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";

import "../css/Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="container__nav">
            <div className="addr-bar">
                 <div className="auth-links">
                    <Link to="/register">Sign Up</Link>
                    <Link to="/login">Log In</Link>
                </div>
            </div>
            <nav className="navbar">
                <div className="logo">
                    Opal<span className="accent">Homes</span>
               </div>
                <div className="nav-links">
                    <a href="#properties">Properties</a>
                    <a href="#services">Services</a>
                    <a href="#about">About</a>
                    <a href="#newsletter">Newsletter</a>
                </div>
                
                <div className="menu-btn-wrapper">
                    <button 
                        id="menu-btn"
                        className="hamburger-menu-btn"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-expanded={!menuOpen}
                        aria-controls="supple-links"
                        aria-label="Toggle Menu"
                    >
                        <MdMenu />
                    </button>
                </div>

                <div 
                    id="supple-links"
                    className={`supple-links ${menuOpen ? "is-open" : ""}`}
                >
                    <a href="#properties">Properties</a>
                    <a href="#services">Services</a>
                    <a href="#about">About</a>
                    <a href="#newsletter">Newsletter</a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar