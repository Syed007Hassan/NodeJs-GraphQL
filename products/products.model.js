const products = [
  {
    id: "redshoe",
    description: "Red Shoe",
    price: 42.12,
    reviews: [
      {
        rating: 4,
        comment: "This is a great shoe",
      },
    ],
  },
  {
    id: "bluejean",
    description: "Blue Jeans",
    price: 55.55,
    reviews: [
      {
        rating: 5,
        comment: "These are the best jeans",
      },
    ],
  },
];

// write a function to get all products
const getAllProducts = () => {
  return products;
};

const getProductsByPrice = (min, max) => {
  return products.filter(
    (products) => products.price >= min && products.price <= max
  );
};

module.exports = {
  getAllProducts,
  getProductsByPrice,
};
