import React from "react";
import ProjetsListes from "./ProjetCard/projetcardlist";


export default function Projets(){
    return(
        <>
            <h2>Mes projets</h2>
            <div className="projet-content">
            <ProjetsListes />
            </div>
        </>
    )
}