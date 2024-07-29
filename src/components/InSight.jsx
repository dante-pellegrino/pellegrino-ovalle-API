import React, { useEffect, useState } from 'react';

const InSight = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const data = {
          sol_keys: ["758", "757", "756"],
          758: {
            First_UTC: "2024-07-28T00:00:00Z",
            AT: { mx: -20, mn: -95, av: -58 },
            HWS: { av: 5.5 },
            PRE: { av: 700 },
          },
          757: {
            First_UTC: "2024-07-27T00:00:00Z",
            AT: { mx: -18, mn: -93, av: -56 },
            HWS: { av: 6.0 },
            PRE: { av: 705 },
          },
          756: {
            First_UTC: "2024-07-26T00:00:00Z",
            AT: { mx: -19, mn: -94, av: -57 },
            HWS: { av: 5.8 },
            PRE: { av: 702 },
          }
        };

        if (data && data.sol_keys && data.sol_keys.length > 0) {
          const weather = data.sol_keys.map(sol => ({
            sol: sol,
            date: new Date(data[sol].First_UTC).toLocaleDateString(),
            highTemp: data[sol].AT ? `${data[sol].AT.mx}° F` : 'N/A',
            lowTemp: data[sol].AT ? `${data[sol].AT.mn}° F` : 'N/A',
            avgTemp: data[sol].AT ? `${data[sol].AT.av}° F` : 'N/A',
            windSpeed: data[sol].HWS ? `${data[sol].HWS.av} m/s` : 'N/A',
            pressure: data[sol].PRE ? `${data[sol].PRE.av} Pa` : 'N/A'
          }));
          setWeatherData(weather);
        } else {
          setError('No weather data available');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <section style={sectionStyle}>
      <div style={contentStyle}>
        <h1 style={headingStyle}>El tiempo más reciente en Elysium Planitia</h1>
        <p style={headingStyle}>Esta información podría no estar disponible debido a que InSight afronta el reto del invierno en el polvoriento Marte.</p>
        <p style={descriptionStyle}>
          InSight Lander fue el primer explorador robótico del espacio exterior que estudió en profundidad el espacio interior de Marte: su corteza, manto y núcleo.<br></br>
          InSight está tomando mediciones meteorológicas diarias (temperatura, viento, presión) en la superficie de Marte en Elysium Planitia, una llanura plana y lisa cerca del ecuador de Marte.
        </p>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : weatherData ? (
          <div style={allWeatherStyle}>
            <div style={currentWeatherStyle}>
              <h2>Clima de ayer (última actualización)</h2>
              <h3 style={solHeadingStyle}>Sol {weatherData[0].sol}</h3>
              <p style={solDateStyle}>Fecha: {weatherData[0].date}</p>
              <p style={solDataStyle}>Max.: {weatherData[0].highTemp}</p>
              <p style={solDataStyle}>Min.: {weatherData[0].lowTemp}</p>
              <p style={solDataStyle}>Average: {weatherData[0].avgTemp}</p>
              <p style={solDataStyle}>Viento: {weatherData[0].windSpeed}</p>
              <p style={solDataStyle}>Presión: {weatherData[0].pressure}</p>
            </div>
            <div style={pastWeatherStyle}>
              {weatherData.slice(1).map((day, index) => (
                <div key={index} style={weatherCardStyle}>
                  <h2>Clima pasado</h2>
                  <h4 style={solHeadingStyle}>Sol {day.sol}</h4>
                  <p style={solDateStyle}>Fecha: {day.date}</p>
                  <p style={solDataStyle}>Max.: {day.highTemp}</p>
                  <p style={solDataStyle}>Min.: {day.lowTemp}</p>
                  <p style={solDataStyle}>Average: {day.avgTemp}</p>
                  <p style={solDataStyle}>Viento: {day.windSpeed}</p>
                  <p style={solDataStyle}>Presión: {day.pressure}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p>No weather data available</p>
        )}
      </div>
    </section>
  );
};

const sectionStyle = {
  position: 'relative',
  color: 'white',
  padding: '20px',
  textAlign: 'left',
};

const contentStyle = {
  position: 'relative',
  zIndex: 1,
};

const headingStyle = {
  fontSize: '30px',
  color: '#705DCF',
  marginBottom: '10px',
};

const descriptionStyle = {
  fontSize: '18px',
  marginBottom: '20px',
};

const allWeatherStyle ={
    display: 'flex',
    justifyContent: 'space-around',
}

const currentWeatherStyle = {
  background: '#161229',
  borderRadius: '10px',
  padding: '15px',
  marginBottom: '20px',
  border: '2px solid #705DCF',
};

const pastWeatherStyle = {
  display: 'flex',
  
  gap: '10px',
  width: '50%',

};

const weatherCardStyle = {
  width: '50%',
  background: '#000',
  borderRadius: '10px',
  padding: '10px',
  textAlign: 'left',
  border: '2px solid #705DCF',
};

const solHeadingStyle = {
  color: '#705DCF',
  fontSize: '30px',
  margin: '0',
};

const solDateStyle = {
  color: '#fff',
  fontSize: '22px',
  marginBottom: '10px',
};

const solDataStyle = {
  fontSize: '20px',
  color: 'grey',
  marginBottom: '5px',
};

export default InSight;
