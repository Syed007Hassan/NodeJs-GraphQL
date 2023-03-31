const { getAllProducts, getProductsByPrice } = require("./products.model");

module.exports = {
  Query: {
    products: () => {
      return getAllProducts();
    },
    productsByPrice: (_, args) => {
      return getProductsByPrice(args.min, args.max);
    },
  },
};

// Path: products\products.resolvers.js
