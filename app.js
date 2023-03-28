const express = require("express");
const { buildSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");

const app = express();

// buildSchema is a function that takes a string as an argument
const schema = buildSchema(`
  type Query {
    description: String
    price: Float
  }
`);

// root is an object that contains all of the resolvers
const root = {
  description: "This is a great product!",
  price: 2.99,
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

module.exports = app;
