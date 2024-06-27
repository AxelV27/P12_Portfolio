import React from "react"
import Outils from "./IconOutils"
import ListOutils from "../../../data/infosOutils.json"
import "../../../styles/components/outils.css"


export default function OutilsList(){
    return(
        <div className="outils">
            <h3>Outils utilisés</h3>
            <div className="outils-content">
            {ListOutils.map(({id, title, cover})=>(
                <Outils
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