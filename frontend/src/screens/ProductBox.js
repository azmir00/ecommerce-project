import React from "react";
// import data from "./data";

const ProductBox = () => {
  const data = {
    products: [
      {
        _id: "1",
        name: "Iphone 6s",
        category: "gadget",
        price: 120,
        brand: "Apple",
        rating: 4.5,
        numReviews: 10,
        description: "Buy this Iphone now!",
      },
      {
        _id: "1",
        name: "Mac OS",
        category: "gadget",
        price: 3000,
        brand: "Apple",
        rating: 4.5,
        numReviews: 10,
        description: "Sell me now!",
      },
      {
        _id: "1",
        name: "Iphone 6s",
        category: "gadget",
        price: 120,
        brand: "Apple",
        rating: 4.5,
        numReviews: 10,
        description: "Buy this Iphone now!",
      },
      {
        _id: "1",
        name: "Iphone 6s",
        category: "gadget",
        price: 120,
        brand: "Apple",
        rating: 4.5,
        numReviews: 10,
        description: "Buy this Iphone now!",
      },
      {
        _id: "1",
        name: "Iphone 6s",
        category: "gadget",
        price: 120,
        brand: "Apple",
        rating: 4.5,
        numReviews: 10,
        description: "Buy this Iphone now!",
      },
      {
        _id: "1",
        name: "Iphone 6s",
        category: "gadget",
        price: 120,
        brand: "Apple",
        rating: 4.5,
        numReviews: 10,
        description: "Buy this Iphone now!",
      },
      {
        _id: "1",
        name: "Iphone 6s",
        category: "gadget",
        price: 120,
        brand: "Apple",
        rating: 4.5,
        numReviews: 10,
        description: "Buy this Iphone now!",
      },
      {
        _id: "1",
        name: "Iphone 6s",
        category: "gadget",
        price: 120,
        brand: "Apple",
        rating: 4.5,
        numReviews: 10,
        description: "Buy this Iphone now!",
      },
      {
        _id: "1",
        name: "Iphone 6s",
        category: "gadget",
        price: 120,
        brand: "Apple",
        rating: 4.5,
        numReviews: 10,
        description: "Buy this Iphone now!",
      },
      {
        _id: "1",
        name: "Iphone 6s",
        category: "gadget",
        price: 120,
        brand: "Apple",
        rating: 4.5,
        numReviews: 10,
        description: "Buy this Iphone now!",
      },
      {
        _id: "1",
        name: "Iphone 6s",
        category: "gadget",
        price: 120,
        brand: "Apple",
        rating: 4.5,
        numReviews: 10,
        description: "Buy this Iphone now!",
      },
      {
        _id: "1",
        name: "Iphone 6s",
        category: "gadget",
        price: 120,
        brand: "Apple",
        rating: 4.5,
        numReviews: 10,
        description: "Buy this Iphone now!",
      },
      {
        _id: "1",
        name: "Iphone 6s",
        category: "gadget",
        price: 120,
        brand: "Apple",
        rating: 4.5,
        numReviews: 10,
        description: "Buy this Iphone now!",
      },
    ],
  };

  return (
    <>
      {data.products.map((product) => (
        <div className="card">
          <a href="product.html">
            <img class="medium" src="/images/Shoe1.jpg" alt="product" />
          </a>
          <div>
            <a href="product.html">
              <h3>{product.name}</h3>
            </a>
            <h4>{product.price}</h4>
            <p>{product.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductBox;
