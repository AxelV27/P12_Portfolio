import React from 'react';
//import Langages from './langage';
import OutilsList from './outils/IconOutilsList';
import LangageList from './Langages/IconLangageList';
import "../../styles/components/competences.css"


const Skills = () => {
  return (
    <div className='competences'>
      <h2>Mes compétences</h2>
      <LangageList/>
      <OutilsList/>
    </div>
  );
};

export default Skills;
