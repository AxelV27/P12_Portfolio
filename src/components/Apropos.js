import React from "react";
import Image from "../assets/images/photo-axel.png";
import "../styles/components/apropos.css"

export default function Apropos (){
    return(
        <section id="presentation" className="presentation">
            <h1 className="presentation-title">À propos</h1>
                <div className="presentation-content">
                    <img src={Image} alt="Axel"/>
                    <p className="presentation-description"> Intégrateur web fraîchement diplômé d'une formation avec Openclassroom. Cette formation de 8 mois s'est composé sous forme de  12 projets à réaliser avec une session de mentorat chaque semaine pour un accompagnement. Mon portfolio regroupe 4 différents projets réalisés lors de ma formation et met en avant mes compétences acquise durant cette formation. Passionné par le développement web et les nouvelles technologies, je suis capable de créer des sites web responsives et intuitifs, mon objectif est de continuer à me former et à me perfectionner dans ce domaine pour proposer des solutions web toujours plus innovantes et performantes.</p>
                </div>
        </section>

    )
}