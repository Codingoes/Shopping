import React, { useState, useEffect } from "react";
import Cards from "./Cards";// assuming you have CSS for search form styling

const Searchform = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    // Function to fetch data from API based on searchQuery
    const fetchData = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/category/?q=${searchQuery}`);
        if (response.ok) {
          const data = await response.json();
          setApiData(data); // Set fetched data to state
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (searchQuery !== "") {
      fetchData(); // Fetch data only if searchQuery is not empty
    }
  }, [searchQuery]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Perform any validation if needed
    // Set searchQuery state to trigger useEffect and fetch data
    setSearchQuery(searchQuery.trim());
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Search..."
        />
        <button type="submit">Search</button>
      </form>
      <div className="results-container">
        <Cards apiData={apiData} /> {/* Include Cards component and pass apiData */}
      </div>
    </div>
  );
};

export default Searchform;
