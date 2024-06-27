import React from "react";
import Apropos from "../components/Apropos.js";
import Skills from "../components/Competences/competences.js";
import Projets from "../components/Projets.js";
import EmaillButton from "../components/Contact.js";

export default function Home (){
    return(
    
        <main>
        <Apropos/>
        <Skills />
        <Projets/>
        <EmaillButton/>
        </main>
        
    )
}