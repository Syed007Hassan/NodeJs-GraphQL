const { getAllProducts } = require("./products.model");

module.exports = {
  Query: {
    products: () => {
      return getAllProducts();
    },
  },
};

// Path: products\products.resolvers.js
