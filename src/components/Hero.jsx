import React from 'react';
import heroBackground from '../assets/heroBackground.jpeg';

const Hero = () => {
  return (
    <section style={{ ...heroStyle, backgroundImage: `url(${heroBackground})` }}>
      <div style={contentStyle}>
        <h1 style={titleStyle}>Bienvenido a SpaceExplorer</h1>
        <p style={subtitleStyle}>Una gran cantidad de imágenes e información, como datos sobre cometas, mediciones de Marte e imágenes de la Tierra en tiempo real.</p>
        <button onClick={scrollToMoreInfo} className="button">Explorar</button>
      </div>
    </section>
  );
};

const scrollToMoreInfo = () => {
  const element = document.getElementById('apod');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const heroStyle = {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  backgroundColor: 'black',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: 'white',
  textAlign: 'left',
  padding: '20px',
};

const contentStyle = {
  padding: '50px',
  maxWidth: '750px',
};

const titleStyle = {
  fontFamily: '"Playwrite HR Lijeva", cursive',
  fontSize: '48px',
  margin: '0',
};

const subtitleStyle = {
  fontFamily: '"Raleway", sans-serif',
  fontSize: '24px',
  margin: '10px 0 20px 0',
};


export default Hero;
