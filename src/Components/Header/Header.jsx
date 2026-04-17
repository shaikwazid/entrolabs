import React, { useEffect, useState } from 'react'
import logo1 from "../../assets/logo-white.png";
// import logo1 from "../../assets/logo-black.png";
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`header ${scrolled ? "scrolled" : ""}`}>
            <nav className="navbar navbar-expand-lg navbar-light navbar-custom py-2">
                <div className="container">

                    <NavLink className="navbar-brand" to="/">
                        <img src={logo1} alt="logo" style={{ width: '150px' }} />
                    </NavLink>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto align-items-lg-center">

                            <li className="nav-item">
                                <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                                    Home
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                                    About Us
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/services" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                                    Services
                                </NavLink>
                            </li>

                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle-custom"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                >
                                    Technologies
                                    <span className="dropdown-icon"></span>
                                </a>

                                <ul className="dropdown-menu">
                                    <li>
                                        <NavLink to="/mobile-app" className="dropdown-item">
                                            Mobile App Development
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/web-app" className="dropdown-item">
                                            Web Application Development
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/api" className="dropdown-item">
                                            API Development
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/projects" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                                    Projects
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/careers" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                                    Careers
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                                    Contact Us
                                </NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header