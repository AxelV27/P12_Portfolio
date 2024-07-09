import React from "react"
import ProjetInfos from "../../data/infosProjet.json"
import CardProjet from "./projetcard"
import "../../styles/components/projetcard.css"

export default function ProjetsListes (){
    return (
        <section className="projets">
            <div className="projets__liste">
                {ProjetInfos.map(({id, title, cover}) =>(
                    <CardProjet 
                        key={id}
                        id={id}
                        title={title}
                        cover={cover}
                    />
                ))}
            </div>
        </section>
    )

}