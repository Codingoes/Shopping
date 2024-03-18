import React from "react";
import './Cards.css';

const Cards = ({ apiData }) => {
  return (
    <div className="cardgrid">
      
      {apiData.map(item => (
        <div className="card1" key={item.id}>
          <div className="cardtitle">
            {item.category}
          </div>
          <div className="cardprice">
          <div style={{ color: "#ffae00" }}>
            Price:
          </div> $
          <div className="fetchprice">
            {item.price}
          </div>
          </div>
          <div >
          <img className="cardimage" src={item.image} alt="Item Image" />
          </div>
           <div className="cardbuy">BUY</div>
        </div>
      ))}
      </div>
  );
};
    

    


export default Cards;
