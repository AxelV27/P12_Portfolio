import React from "react";


export default function Langage({id, title, cover}){
    return(
        <div key={id}className="langage-item">
                <img src={process.env.PUBLIC_URL+cover} alt={title} className="langage-icon"></img>
                <span>{title}</span>
        </div>
    )
}