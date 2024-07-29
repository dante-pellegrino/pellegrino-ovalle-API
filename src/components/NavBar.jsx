import React from 'react';

const NavBar = () => {
  return (
    <nav style={navStyle}>
      <h1 style={titleStyle}>SpaceExplorer</h1>
      <div style={linkContainerStyle}>
        <a href="#apod" className='navOptions'>
          Imágen del Día
        </a>
        <a href="#insight" className='navOptions'>
          Clima de Marte
        </a>
        <a href="#epic" className='navOptions'>
          Diarias de la Tierra
        </a>
        <a href="#ImageGallery" className='navOptions'>
          Noticias y Galería
        </a>
      </div>
    </nav>
  );
};


const navStyle = {
  position: 'fixed',
  top: '0',
  left: '0',
  zIndex: '1000',
  margin: '20px',
  borderRadius: '50px',
  border: 'solid white 2px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '90%',
  paddingLeft: '30px',
  paddingRight: '30px',
  backgroundColor: 'black',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const titleStyle = {
  fontFamily: '"Playwrite HR Lijeva", cursive',
  color: 'white',
  fontSize: '24px',
};

const linkContainerStyle = {
  display: 'flex',
  gap: '30px',
};

export default NavBar;
