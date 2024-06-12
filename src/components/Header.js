import React from "react";
import {Link} from 'react-router-dom';

export default function Header(){
    return(
        <nav className="header">
            <h1 className="header-logo">Logo</h1>
            <nav className="header-nav">
                <Link to="#presentation" smooth={true}>Présentation</Link>
                <Link to="#projets" smooth={true}>Projets</Link>
                <Link to="#compétances" smooth={true}>Compétances</Link>
            </nav>
        </nav>
    )
}