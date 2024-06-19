import React from "react";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../styles/components/footer.css";


const github = <FontAwesomeIcon icon={faGithub}/>
const linkedin = <FontAwesomeIcon icon={faLinkedin}/>

export default function Footer(){
    const MyGitHub = () => {
        window.open("https://github.com/AxelV27")
    }
    const MyLinkedin = () => {
        window.open("https://www.linkedin.com/in/axel-verdasca-43993324a/")
    }
    return(
        <footer className="footer">
            <h3>© 2024 Axel Verdasca</h3>
               <div className="icon">
                <i className="item" onClick={MyGitHub}>{github}</i>
                <i className="item" onClick={MyLinkedin}>{linkedin}</i>
                </div> 
        </footer>
    )
}