import React from 'react';
import { menData } from '../data/data'; 

function Men() {
  return (
    <div className="product-container">
      <h2>Men's Clothing</h2>
      <div className="product-grid">
        {menData.map(item => (
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

export default Men;
