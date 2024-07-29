import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Section from './components/Section';
import ImageGallery from './components/ImageGallery';

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Section
        id="apod"
        title="Astronomy Picture of the Day"
        description="Descubre la imagen del día proporcionada por la NASA. Cada día se presenta una imagen o un vídeo diferente de nuestro fascinante universo, junto con una breve explicación escrita por un astrónomo profesional."
      />
      <Section
        id="insight"
        title="Servicio Meteorológico de Marte"
        description="Consulta el estado del tiempo en Marte con los datos de la misión InSight. El módulo de aterrizaje InSight de la NASA toma mediciones meteorológicas continuas (temperatura, viento, presión) en la superficie de Marte en Elysium Planitia, una llanura plana y lisa cerca del ecuador de Marte."
      />
      <Section
        id="epic"
        title="Imágenes Diarias de la Tierra"
        description="Visualiza las imágenes diarias de la Tierra desde el satélite EPIC. La API de EPIC proporciona información sobre las imágenes diarias recopiladas por el instrumento Earth Polychromatic Imaging Camera (EPIC) de DSCOVR. Con una posición única en el punto de Lagrange Tierra-Sol, EPIC proporciona imágenes de disco completo de la Tierra y captura perspectivas únicas de ciertos eventos astronómicos."
      />
      <section id='ImageGallery'>
        <ImageGallery />
      </section>
    </div>
  );
};

export default App;
