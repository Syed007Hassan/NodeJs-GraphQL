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

const getProductByID = (id) => {
  return products.find((products) => products.id === id);
};

const addNewProduct = (id, description, price) => {
  const newProduct = {
    id,
    description,
    price,
    reviews: [],
  };

  products.push(newProduct);

  return newProduct;
};

const addNewProductReview = (id, rating, comment) => {
  const matchedProduct = getProductByID(id);
  if (matchedProduct) {
    const newProductReview = {
      rating,
      comment,
    };

    matchedProduct.reviews.push(newProductReview);

    return matchedProduct;
  }
};

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductByID,
  addNewProduct,
  addNewProductReview,
};
