const {
  getAllProducts,
  getProductsByPrice,
  getProductByID,
} = require("./products.model");

module.exports = {
  Query: {
    products: () => {
      return getAllProducts();
    },
    productsByPrice: (_, args) => {
      return getProductsByPrice(args.min, args.max);
    },
    productByID: (_, args) => {
      return getProductByID(args.id);
    },
  },
};

// Path: products\products.resolvers.js
