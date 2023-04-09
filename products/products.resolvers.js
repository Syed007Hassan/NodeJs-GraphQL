const {
  getAllProducts,
  getProductsByPrice,
  getProductByID,
  addNewProduct,
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
  Mutation: {
    addNewProduct: (_, args) => {
      return addNewProduct(args.id, args.description, args.price);
    },
  },
};

// Path: products\products.resolvers.js
