import React, { useEffect, useState } from 'react';

const APOD = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchAPOD = async () => {
      try {
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=1WhrCOuYRXBgnGefgdS7tOI7tbHtntrirBKmxNve`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching APOD data: ", error);
      }
    };

    fetchAPOD();
  }, []);

  return (
    <div style={apodStyle}>
      {data ? (
        <div>
          <h2>{data.title}</h2>
          <img src={data.url} alt={data.title} style={imageStyle} />
          <p>{data.explanation}</p>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

const apodStyle = {
  color: 'white',
  padding: '20px',
  background: 'black',
  textAlign: 'center',

};

const imageStyle = {
  maxWidth: '100%',
  height: 'auto',
  borderRadius: '10px',
};

export default APOD;
asdas