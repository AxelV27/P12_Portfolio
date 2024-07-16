import React from 'react';
import { useParams } from 'react-router-dom';
import ProjetInfos from '../data/infosProjet.json';
import "../styles/components/projetsPages.css"

export default function ProjetPage(){
  const {id} = useParams()
  const projet = ProjetInfos.find(projet => projet.id === id)
  const ouvrirNouvelleFenetre = (lien) => {
    window.open(lien, '_blank');
  }
  return (
    <>
    <div key={projet.id} className='projet__page'>
      <h1 className='projet__page__title'>{projet.title}</h1>
      <div className='projet__page__content'>
      <p className='projet__page__description'>{projet.description}</p>
      <div className='projet__page__img'>
        <img src={process.env.PUBLIC_URL+projet.pictures} alt='screen'></img>
        <img src={process.env.PUBLIC_URL+projet.responsive} alt='screen-tel'></img>      
      </div>
     </div> 
     <div className='projet__page__competences'>{projet.compétences.map((compétences, i) =>
          <ul key={i}>
            <li>{compétences}</li>
          </ul>
        )}</div>
      <div className='projet__page__liens'>
        Vous pouvez accéder au site Booki juste ici : 
        <button onClick={() => ouvrirNouvelleFenetre(projet.liens)}>
        <span className='boutton-text'> Accès au site</span>
        <span className='boutton-back'></span>
        </button>
      </div>
    </div>
    </>
  );
};

