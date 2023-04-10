# NodeJs-GraphQL

### 💥 Why GraphQL when REST already exit?
<p> GraphQL is a modern API technology that offers several advantages over traditional [REST APIs](https://github.com/Syed007Hassan/My-RESTful-API). With GraphQL, clients can retrieve exactly the data they need, no more and no less, with a single request to the server. This reduces the amount of network traffic and minimizes over- and under-fetching of data, which can improve performance and reduce latency.

In addition, GraphQL offers a strongly-typed schema that provides clear documentation of the API and helps ensure that clients and servers can communicate effectively. This can simplify development and maintenance of the API, and can also help catch errors before they are deployed to production.

GraphQL also enables powerful features like real-time updates and subscriptions, which can be difficult to implement with REST. And since GraphQL is language-agnostic, it can be used with a wide variety of programming languages and frameworks.

While REST APIs have been widely used for many years and are still a viable option, GraphQL offers a more efficient, flexible, and powerful approach to building APIs for modern web and mobile applications.
</p>

### 💥 Accessing GraphQL Sever

- GraphQL's server available at ```localhost:<PORT>/graphql```

![image](https://user-images.githubusercontent.com/104893311/228365764-ac207fae-bc20-4c48-913c-3ff79e7ee858.png)

### 💥 Schema Structure

```
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
 ```
### 💥 Query Parameter and Response

![image](https://user-images.githubusercontent.com/104893311/228392905-2af31502-5316-4681-b2bd-9054e8ba0594.png)

### 💥 Resolvers and Mutations

<p> Resolvers and mutations are key components of GraphQL that enable clients to interact with data stored on a server.

Resolvers are functions that define how to fetch data for a specific field in a GraphQL schema. Resolvers are responsible for returning the actual data requested by a client in a GraphQL query. Each field in the schema can have its own resolver function, and resolvers can be written to retrieve data from a variety of data sources, such as a database or a REST API. Resolvers can also be used to compute or transform data before returning it to the client.

Mutations are similar to queries in GraphQL, but are used to modify data on the server. Mutations can be used to create, update, or delete data in a data source. Mutations typically have an input type that defines the parameters for the mutation, and a return type that defines the data that will be returned by the mutation.

In a GraphQL schema, mutations are defined alongside queries as operations that can be performed by clients. Like queries, mutations are implemented using resolver functions. When a client sends a mutation request to the server, the corresponding resolver function is executed to modify the data on the server.

Together, resolvers and mutations provide a powerful and flexible way to interact with data in a GraphQL API. Resolvers allow clients to retrieve data in a customizable and efficient way, while mutations enable clients to modify the data stored on the server.</p>

- ```Path: products\products.graphql```
```
type Query {
  products: [Product]
  productsByPrice(min: Float, max: Float): [Product]
  productByID(id: ID!): Product
}

type Mutation {
  addNewProduct(id: ID!, description: String, price: Float): Product
  addNewProductReview(id: ID!, rating: Int!, comment: String): Product
}

type Product {
  id: ID!
  description: String!
  reviews: [Review]
  price: Float!
}

type Review {
  rating: Int!
  comment: String
}

```
- ```Path: products\products.resolvers.js```

```
const {
  getAllProducts,
  getProductsByPrice,
  getProductByID,
  addNewProduct,
  addNewProductReview,
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
    addNewProductReview: (_, args) => {
      return addNewProductReview(args.id, args.rating, args.comment);
    },
  },
};

```

### 💥 [Apollo](https://www.apollographql.com/docs/apollo-server/)

<p>

[Apollo Server](https://www.npmjs.com/package/@apollo/server) is a popular implementation of a GraphQL server that simplifies the process of building GraphQL APIs. It is built on top of the Express web framework for Node.js and provides a set of tools and features that make it easy to create, test, and deploy a GraphQL API.

One of the main advantages of using Apollo Server is its flexibility. It supports a variety of data sources and can be used to create APIs that retrieve data from a database, a REST API, or any other data source. It also supports real-time subscriptions, which allow clients to receive updates in real-time as the data changes on the server.

Another advantage of using Apollo Server is its built-in tools for monitoring and debugging GraphQL APIs. Apollo Server provides a web-based GraphQL Playground that allows developers to test queries and mutations and explore the schema of the API. It also integrates with popular logging and monitoring tools, such as Datadog and New Relic, to provide detailed insights into the performance and usage of the API.

Overall, Apollo Server is a powerful and flexible tool for building GraphQL APIs that simplifies the process of creating, testing, and deploying GraphQL APIs.
</p>

![image](https://user-images.githubusercontent.com/104893311/230808010-55d77c54-bb37-40f6-bdc0-94f87e44277e.png)



