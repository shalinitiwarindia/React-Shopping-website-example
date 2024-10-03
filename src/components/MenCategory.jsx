import React from 'react';
import { useParams } from 'react-router-dom';

const categoryData = {
  shirts: [
    { id: 1, name: 'Formal White Shirt', price: '$30' },
    { id: 2, name: 'Casual Plaid Shirt', price: '$25' },
    { id: 3, name: 'Denim Shirt', price: '$35' },
    // Add more shirt items here
  ],
  pants: [
    { id: 1, name: 'Blue Jeans', price: '$40' },
    { id: 2, name: 'Black Chinos', price: '$45' },
    // Add more pant items here
  ],
 
};

function MenCategory() {
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

export default MenCategory;
