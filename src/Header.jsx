import React from "react";
import "./header.css";
import { Link } from "react-router-dom";


class Header extends React.Component {
    render() {
        return (
            <div className="container pt-5">
                <header className="d-flex align-items-center">
                    <nav className="navbar navbar-expand-lg w-100 z-5">
                        <div className="container-fluid">
                            <Link to={ "/" } className="navbar-brand">
                                <img className="typology_logo" src="https://demo.mekshq.com/typology/wp-content/themes/typology/assets/img/typology_logo.png" alt="img"/>
                            </Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul className="navbar-nav ms-auto z-0">
                                    <li className="nav-item dropdown nav_dropdown">
                                        <span className="nav-link text-light nav_link_button" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            HOME
                                        </span>
                                        <ul className="dropdown-menu">
                                            <li><span className="dropdown-item">DEFAULT</span></li>
                                            <li><span className="dropdown-item">EXAMPLE 1</span></li>
                                            <li><span className="dropdown-item">EXAMPLE 2</span></li>
                                            <li><span className="dropdown-item">EXAMPLE 3</span></li>
                                            <li><span className="dropdown-item">EXAMPLE 4</span></li>
                                            <li><span className="dropdown-item">EXAMPLE 5 (BG VIDEO)</span></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown nav_dropdown">
                                        <span className="nav-link text-light nav_link_button" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            LAYOUTS
                                        </span>
                                        <ul className="dropdown-menu">
                                            <li><span className="dropdown-item">Layout A</span></li>
                                            <li><span className="dropdown-item">Layout B</span></li>
                                            <li><span className="dropdown-item">Layout C</span></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown nav_dropdown">
                                        <span className="nav-link text-light nav_link_button" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            POST
                                        </span>
                                        <ul className="dropdown-menu">
                                            <li><span className="dropdown-item">Default</span></li>
                                            <li><span className="dropdown-item">With Cover</span></li>
                                            <li><span className="dropdown-item">With Cover image</span></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown nav_dropdown">
                                        <span className="nav-link text-light nav_link_button" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            PAGE
                                        </span>
                                        <ul className="dropdown-menu">
                                            <li><span className="dropdown-item">Default</span></li>
                                            <li><span className="dropdown-item">With Cover</span></li>
                                            <li><span className="dropdown-item">With Cover image</span></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown nav_dropdown">
                                        <span className="nav-link text-light nav_link_button" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            ARCHIVES
                                        </span>
                                        <ul className="dropdown-menu">
                                            <li><span className="dropdown-item">Category</span></li>
                                            <li><span className="dropdown-item">Tag</span></li>
                                            <li><span className="dropdown-item" >Author</span></li>
                                            <li><span className="dropdown-item" >Search results</span></li>
                                            <li><span className="dropdown-item" >Archive W/ Cover</span></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown nav_dropdown">
                                        <span className="nav-link text-light nav_link_button" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            FEATURES
                                        </span>
                                        <ul className="dropdown-menu">
                                            <li><span className="dropdown-item">Styleguide</span></li>
                                            <li><span className="dropdown-item">Wordpress 5 blocks</span></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>                    
                </header>
            </div>
        )
    }
};

export default Header;