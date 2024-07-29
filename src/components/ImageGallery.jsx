import React from 'react';
import Subsection from './Subsection';

const ImageGallery = () => {
  const topics = ['Solar System', 'Supernova', 'Aeronautics', 'Missions', 'Universe', 'Humans in Space', 'Climate Change', 'Science News', 'Technology'];

  return (
    <div className='imageGallery'>
      <h1>Últimas noticias e imágenes</h1>
      <p>Manténgase actualizado con las últimas noticias de la NASA, desde la Tierra hasta la Luna, el Sistema Solar y más allá.</p>
      {topics.map((topic, index) => (
        <Subsection key={index} topic={topic} />
      ))}
    </div>
  );
};

export default ImageGallery;