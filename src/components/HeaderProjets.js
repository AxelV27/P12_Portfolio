import React from "react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import '../styles/components/header.css'

export default function HeaderProjet(){
    const prev = <FontAwesomeIcon icon={faArrowLeft} />
    return(
        <nav className="header">
        <Link to="/P12_Portfolio">
        <i className="header-icon">{prev}</i>
        </Link>
        </nav>
    )
}