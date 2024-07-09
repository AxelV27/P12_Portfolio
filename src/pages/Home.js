import React from "react";
import Header from '../components/Header.js';
import Apropos from "../components/Apropos.js";
import Skills from "../components/Competences/competences.js";
import Projets from "../components/Projets.js";
import EmaillButton from "../components/Contact.js";
import '../styles/main.css'

export default function Home (){
    return(
    
        <main>
        <Header/>
        <Apropos/>
        <Skills />
        <Projets/>
        <EmaillButton/>
        </main>
        
    )
}