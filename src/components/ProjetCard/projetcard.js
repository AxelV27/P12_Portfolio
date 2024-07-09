import React from "react";
import { Link } from 'react-router-dom'

export default function CardProjet ({id, title, cover}){
    return(
    <div key={id} className="card">
        <Link to={'/P12_Porfolio/Projet/' + id} >
        <figure className="card__figure">
                <img src= {process.env.PUBLIC_URL+cover} alt = {title} className="card__image"/>
                <figcaption className="card__figcaption">
                    <h2 className="card__title">{title}</h2>
                </figcaption>
            </figure>
        </Link>
    </div>
    )
}