const express = require("express");
const { buildSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");

const { makeExecutableSchema } = require("@graphql-tools/schema");

const schema = makeExecutableSchema({
  typeDefs: [schemaText],
});

const app = express();

// buildSchema is a function that takes a string as an argument

// root is an object that contains all of the resolvers
const root = {
  products: [
    {
      id: 1,
      description: "A great product",
      reviews: [
        {
          rating: 5,
          comment: "This product is great",
        },
      ],
      price: 9.99,
      category: "Electronics",
      orders: [
        {
          date: "2021-01-01",
          subtotal: 9.99,
          items: [
            {
              product: {
                id: 1,
              },
              quantity: 1,
            },
          ],
        },
      ],
    },
  ],
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
