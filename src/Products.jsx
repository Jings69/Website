// src/Products.jsx
import React from 'react';
import './Products.css'; // Import Products CSS
import productAImage from './images/productA.png';
import productBImage from './images/productB.png';
import productCImage from './images/productC.png';
import productDImage from './images/productD.png';

const productList = [
  { id: 1, name: 'Product A', description: 'Description for Product A', imgSrc: productAImage },
  { id: 2, name: 'Product B', description: 'Description for Product B', imgSrc: productBImage },
  { id: 3, name: 'Product C', description: 'Description for Product C', imgSrc: productCImage },
  { id: 4, name: 'Product D', description: 'Description for Product D', imgSrc: productDImage },
];

function Products() {
  return (
    <div className="products-container">
      <h2>Products List</h2>
      <div className="card-container">
        {productList.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.imgSrc} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
