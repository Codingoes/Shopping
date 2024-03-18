import React, { useState, useEffect } from 'react';
import Cards from './Cards';


const Searchdata = () => {
  const [items, setItems] = useState([]);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(json => {
        setItems(json);
        setDataIsLoaded(true);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (!dataIsLoaded) {
    return (
      <div>
        <h1 style={{textAlign:"center"}}>Please wait some time....</h1>
      </div>
    );
  }

  return (
    <div>
      <Cards apiData={items} />
    </div>
  );
};

export default Searchdata;
