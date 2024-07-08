import React from "react";
import "./App.css";
import NavHeader from "./components/nav-header/nav-header";
import ProductCard from "./components/ProductsCard";
import Rafello from "./assets/products/rafaeloi.jpg";
import PlainBelgian from "./assets/products/PlainBelgain.jpg";
import MilkChocolate from "./assets/products/MilkChocolate.jpg";
import shrimp from "./assets/products/ShrimpAndBasil.jpg";
import lemonIced from "./assets/products/LemonIced.jpg";
import churro from "./assets/products/Churro.jpg";
import biscoff from "./assets/products/Biscof.jpg";
import wafflePops from "./assets/products/wafflepops.jpg";
import saltedCaramel from "./assets/products/saltedcaramel.jpg";
import Footer from "./components/footer/footer";

const products = [
  {
    name: "Rafaello",
    image: Rafello,
    price: 9.99,
    id: 1,
  },
  {
    name: "Plain Belgian",
    image: PlainBelgian,
    price: 5.99,
    id: 2,
  },
  {
    name: "Milk Chocolate",
    image: MilkChocolate,
    price: 7.99,
    id: 3,
  },
  {
    name: "Shrimp & Basil",
    image: shrimp,
    price: 12.99,
    id: 4,
  },
  {
    name: "Lemon Iced",
    image: lemonIced,
    price: 15.99,
    id: 5,
  },
  {
    name: "Churro",
    image: churro,
    price: 6.99,
    id: 6,
  },
  {
    name: "Biscoff",
    image: biscoff,
    price: 8.99,
    id: 7,
  },
  {
    name: "Waffle Pops",
    image: wafflePops,
    price: 10.99,
    id: 8,
  },
  {
    name: "Salted Caramel",
    image: saltedCaramel,
    price: 11.99,
    id: 9,
  },
];

const renderProducts = () => {
  return (
    <div className="three-column-container">
      {products.map((product) => (
        <div className="three-column-item" key={product.id}>
          <ProductCard
            name={product.name}
            imageUrl={product.image}
            price={product.price}
          />
        </div>
      ))}
    </div>
  );
};

function App() {
  return (
    <>
      <NavHeader />
      <div className="body-wrapper">
        <div className="center-div">
          <h1 className="productHeader">Browse by categories</h1>
          <h2>All</h2>
          <p>Pre-packed</p>
          <p>Savoury</p>
          <p>Sweet</p>
          <p>Premium</p>
          
      <div className="body-wrapper">
        <div className="left-div">
          <h2 className="productHeader">Filter by price</h2>
          <p>₦2500 - ₦4000</p>
          <p>₦4000 - ₦6000</p>
          <p>₦6000 - ₦8000</p>
          <p>₦8000 - ₦10000</p>
          <p>₦10000 +</p>
        </div>
      </div>
        </div>
        <div className="productWrapper">{renderProducts()}</div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
 

