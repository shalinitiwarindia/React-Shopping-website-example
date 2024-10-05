import React from 'react';
import { useParams } from 'react-router-dom';

const categoryData = {
  dresses: [
    { id: 1, name: 'Red Evening Dress', price: '$50' },
    { id: 2, name: 'Floral Summer Dress', price: '$35' },
    // Add more dress items
  ],
  tops: [
    { id: 1, name: 'Silk Blouse', price: '$40' },
    { id: 2, name: 'Casual Tee', price: '$20' },
    // Add more top items
  ],
  // Add data for other categories
};

function WomenCategory() {
  const { category } = useParams();
  const items = categoryData[category];

  if (!items) {
    return <h2>Category not found.</h2>;
  }

  return (
    <div>
      <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
      <div className="item-list">
        {items.map(item => (
          <div key={item.id} className="product-item">
            <h3>{item.name}</h3>
            <p>Price: {item.price}</p>
            {/* You can add an image and more details here */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default WomenCategory;
