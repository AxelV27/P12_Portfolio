import React from "react"


export default function Outils({id, title, cover}){
    return(
        <div key={id}className="outils-item">
                <img src={process.env.PUBLIC_URL+cover} alt={title} className="outils-icon"></img>
                <span>{title}</span>
        </div>
    )
}