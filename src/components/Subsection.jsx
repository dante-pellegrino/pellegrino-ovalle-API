// Subsection.js
import React, { useState, useEffect } from 'react';

const Subsection = ({ topic }) => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [visibleDescriptions, setVisibleDescriptions] = useState({});

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      const response = await fetch(
        `https://images-api.nasa.gov/search?q=${topic}&media_type=image,video&page=${page}&page_size=4`
      );
      const data = await response.json();
      if (page === 1) {
        setItems(data.collection.items);
      } else {
        setItems((prevItems) => [...prevItems, ...data.collection.items]);
      }
      setLoading(false);
    };
    fetchItems();
  }, [page, topic]);

  useEffect(() => {
    // Reset page to 1 when topic changes
    setPage(1);
  }, [topic]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const toggleDescription = (index) => {
    setVisibleDescriptions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div>
      <h2>{topic}</h2>
      <div className="gallery">
        {items.map((item, index) => (
          <div key={index} className="gallery-item">
            <h3>{item.data[0].title}</h3>
            <img src={item.links[0].href} alt={item.data[0].title} />
            {visibleDescriptions[index] && <p>{item.data[0].description}</p>}
            <div className='verMas'>
              <button className='button' onClick={() => toggleDescription(index)}>
                {visibleDescriptions[index] ? 'Ocultar' : 'Saber más'}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className='verMas'>
        {loading && <p>Cargando...</p>}
        {!loading && <button onClick={loadMore}>Ver más</button>}
      </div>
    </div>
  );
};

export default Subsection;
