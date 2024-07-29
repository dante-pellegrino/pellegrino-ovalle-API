import React, { useState } from 'react';
import APOD from './APOD';
import InSight from './InSight';
import EPIC from './EPIC';
import ImageGallery from './ImageGallery';

const Section = ({ id, title, description }) => {
  const [showContent, setShowContent] = useState(false);

  const handleButtonClick = () => {
    setShowContent(!showContent);
  };

  return (
    <section id={id} style={sectionStyle}>
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={handleButtonClick} className='button'>
        {showContent ? 'Ocultar' : 'Mostrar'} Información
      </button>
      {showContent && (
        <div>
          {id === 'apod' && <APOD />}
          {id === 'insight' && <InSight />}
          {id === 'epic' && <EPIC />}
          {id === 'ImageGallery' && <ImageGallery />}
        </div>
      )}
    </section>
  );
};

const sectionStyle = {
  width: '100%',
  paddingTop: '110px',
  paddingBottom: '110px',
  backgroundColor: 'black',
  color: 'white',
  textAlign: 'center',
  borderBottom: '1px solid white',
};


export default Section;
