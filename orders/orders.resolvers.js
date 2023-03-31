const { getAllOrders } = require("./orders.model");

// resolvers should be as simple as possible

module.exports = {
  Query: {
    orders: () => {
      return getAllOrders();
    },
  },
};
