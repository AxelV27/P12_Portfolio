import React from 'react';
import { useParams } from 'react-router-dom';
import ProjetInfos from '../data/infosProjet.json';

export default function ProjetPage(){
  const {id} = useParams()
  const projet = ProjetInfos.find(projet => projet.id === id)
  return (
    <>
    <div key={projet.id} className='projet__page'>
      <h1 className='projet__page__title'>{projet.title}</h1>
      <div className='projet__page__description'>{projet.description}</div>
      <div className='projet__page__compétences'>{projet.compétences}</div>
      <div className='projet__page__liens'>
        Vous pouvez accéder au site Booki juste <a href={projet.liens}>ici</a> 
      </div>
    </div>
    </>
  );
};

