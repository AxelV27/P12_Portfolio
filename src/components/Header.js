import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

export default function Header(){
    const Laptop = <FontAwesomeIcon icon={faLaptopCode}/>
    return(
        <nav className="header">
            <Link to="/P12_Portfolio">
            <i className="header-icon">{Laptop}</i>
            <h1 className="header-logo">Axel Verdasca</h1>
            </Link>
            <nav className="header-nav">
                <a href="#presentation">À propos<span></span></a>
                <a href="#projets" >Projets<span></span></a>
            </nav>
        </nav>
    )
}