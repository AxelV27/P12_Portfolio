import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
    const HTML = <FontAwesomeIcon icon={faHtml5}/>
    const CSS = <FontAwesomeIcon icon={faCss3Alt}/>
    const JavaScript = <FontAwesomeIcon icon={faJs}/>
  return (
    <div className='competences'>
      <h2>Mes compétences</h2>
      <div>
        <p className='competence-title'>HTML<i>{HTML}</i></p>
        <progress value="90" max="100"></progress>
      </div>
      <div>
        <p className='competence-title'>CSS<i>{CSS}</i></p>
        <progress value="80" max="100"></progress>
      </div>
      <div>
        <p className='competence-title'>JavaScript<i>{JavaScript}</i></p>
        <progress value="70" max="100"></progress>
      </div>
      <div>
        <p className='competence-title'>React</p>
        <progress value="65" max="100"></progress>
      </div>
    </div>
  );
};

export default Skills;
