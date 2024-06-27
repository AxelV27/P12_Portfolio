import React from "react";
import ListLangage from "../../../data/infosLangage.json"
import Langage from "./IconLangage";
import "../../../styles/components/langage.css"




export default function LangageList(){
    return(
        <div className="langage">
            <h3>Langages utilisés</h3>
            <div className="langage-content">
            {ListLangage.map(({id, title, cover})=>(
                <Langage 
                    key={id}
                    id={id}
                    title={title}
                    cover={cover}
                />
            ))}
            </div>
        </div>
    )
}