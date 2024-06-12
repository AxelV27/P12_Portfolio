import React from "react";
import {faGithub, falinkedin} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useHistory} from 'react-router-dom'

const github = <FontAwesomeIcon icon={faGithub}/>
const linkedin = <FontAwesomeIcon icon={falinkedin}/>

export default function Footer(){
    return(
        <footer className="footer">
            <h3>A.VERDASCA</h3>
               <div>
                <i>{github}</i>
                <i>{linkedin}</i>
                </div> 
        </footer>
    )
}