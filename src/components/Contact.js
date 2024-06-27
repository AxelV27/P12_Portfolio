import React from "react";
import "../styles/components/contact.css"

const EmaillButton = ()=>{
    const Email = "axel.verdasca@numericable.fr"
    const handleEmailButtonClick = () =>{
        window.open(`mailto:${Email}`)
    }

    return(
        <div className="contact">
        <h2>Contact</h2>
        <div className="contact-content">
            <p>Intéressé ? N'hésitez pas à me contacter juste ici</p>
            <button onClick={handleEmailButtonClick} className="boutton-email">
             <span className="boutton-text">Contacter moi</span>
                <span className="boutton-back"></span>   
            </button>
        </div>
        </div>
    )
}

export default EmaillButton