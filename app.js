const express = require("express");
const path = require("path");
const { buildSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");

const { loadFilesSync } = require("@graphql-tools/load-files");

// makeExecutableSchema is used to combine all of the types and resolvers into a single schema
const { makeExecutableSchema } = require("@graphql-tools/schema");

// Load all files in the current directory ending in .graphql as String
const typesArray = loadFilesSync("**/*", {
  extensions: ["graphql"],
});

const schema = makeExecutableSchema({
  typeDefs: typesArray,
  resolvers: {
    Query: {
      products: async (parent) => {
        console.log("Getting products");
        const result = await parent.products();
        return result;
      },
      orders: async (parent) => {
        console.log("Getting orders");
        const result = await parent.orders();
      },
    },
  },
});

const app = express();

// buildSchema is a function that takes a string as an argument

// root is an object that contains all of the resolvers
const root = {
  products: () => require("./products/products.model"),
  orders: () => require("./orders/orders.model"),
};

//MAKE A QUERY TO THE GRAPHQL API

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

module.exports = app;
