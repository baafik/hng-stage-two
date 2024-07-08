import React from "react";
import "./ProductCard.css";

interface ProductCardProps {
  name: string;
  price: number;
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, imageUrl }) => {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} className="product-image" />
      <h3 className="product-name">{name}</h3>
      <p className="product-price">from ${price.toFixed(2)}</p>
      <button className="add-to-cart-button">Add To Cart</button>
    </div>
  );
}

export default ProductCard;
