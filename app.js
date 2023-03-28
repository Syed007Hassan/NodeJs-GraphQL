const express = require("express");
const { buildSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");

const app = express();

// buildSchema is a function that takes a string as an argument
const schema = buildSchema(`

 type Query{
  products: [Product]
  orders: [Order]
 }

 type Product{
  id: ID!
  description: String!
  reviews: [Review]
  price: Float!
  category: String!
  orders: [Order]
 }

 type Review{
  rating: Int!
  comment: String!
 }

 type Order{
  date: String!
  subtotal: Float!
  items: [OrderItem]

 }

  type OrderItem{
    product: Product!
    quantity: Int!
  }

`);

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
