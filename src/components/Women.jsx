import React from 'react';
import { womenData } from '../data/data'; // Correct the path to 'data.js'

function Women() {
  return (
    <div className="product-container">
      <h2>Women's Clothing</h2>
      <div className="product-grid">
        {womenData.map(item => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Women;
