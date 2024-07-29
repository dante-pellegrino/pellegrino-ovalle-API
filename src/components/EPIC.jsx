import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const EPIC = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(`https://api.nasa.gov/EPIC/api/natural/images?api_key=1WhrCOuYRXBgnGefgdS7tOI7tbHtntrirBKmxNve`)
      .then(response => response.json())
      .then(data => {
        const formattedImages = data.map(image => {
          const date = new Date(image.date);
          const formattedDate = `${date.getUTCFullYear()}/${String(date.getUTCMonth() + 1).padStart(2, '0')}/${String(date.getUTCDate()).padStart(2, '0')}`;
          return {
            ...image,
            url: `https://epic.gsfc.nasa.gov/archive/natural/${formattedDate}/png/${image.image}.png`,
            date: date.toISOString().split('T')[0],
          };
        });
        setImages(formattedImages);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  
  return (
    <div style={epicStyle}>
      <h1 style={titleStyle}>Imágenes de hoy de la Tierra</h1>
      <div style={galleryStyle}>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} style={imageContainerStyle}>
              <img src={image.url} alt={image.caption} style={imageStyle} />
              <div style={infoStyle}>
                <h2>{image.image}</h2>
                <p><strong>Fecha:</strong> {image.date}</p>
                <p><strong>Subtítulo:</strong> {image.caption}</p>
                <p><strong>Coordenadas del centroide</strong> {`Lat: ${image.centroid_coordinates.lat}, Lon: ${image.centroid_coordinates.lon}`}</p>
                <p><strong>Posición en el sistema de coordenadas J2000 de DSCOVR:</strong> {`X: ${image.dscovr_j2000_position.x}, Y: ${image.dscovr_j2000_position.y}, Z: ${image.dscovr_j2000_position.z}`}</p>
                <p><strong>Posición Lunar:</strong> {`X: ${image.lunar_j2000_position.x}, Y: ${image.lunar_j2000_position.y}, Z: ${image.lunar_j2000_position.z}`}</p>
                <p><strong>Posición Solar:</strong> {`X: ${image.sun_j2000_position.x}, Y: ${image.sun_j2000_position.y}, Z: ${image.sun_j2000_position.z}`}</p>
                <p><strong>Cuaterniones de actitud, orientación del satélite:</strong> {`W: ${image.attitude_quaternions.w}, X: ${image.attitude_quaternions.x}, Y: ${image.attitude_quaternions.y}, Z: ${image.attitude_quaternions.z}`}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const epicStyle = {
  padding: '20px',
  backgroundColor: 'black',
  color: 'white',
  minHeight: '100vh',
};

const titleStyle = {
  textAlign: 'center',
  fontSize: '36px',
  margin: '20px 0',
};

const galleryStyle = {
  maxWidth: '1000px',
  margin: '0 auto',
};

const imageContainerStyle = {
  textAlign: 'center',
  padding: '20px',
};

const imageStyle = {
  width: '100%',
  borderRadius: '10px',
};

const infoStyle = {
  color: 'white',
  marginTop: '10px',
};

export default EPIC;
