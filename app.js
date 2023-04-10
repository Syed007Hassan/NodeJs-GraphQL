const express = require("express");
const path = require("path");
// const { buildSchema } = require("graphql");
// const { graphqlHTTP } = require("express-graphql");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const cors = require("cors");
const bodyParser = require("body-parser");

const { loadFilesSync } = require("@graphql-tools/load-files");

// makeExecutableSchema is used to combine all of the types and resolvers into a single schema
const { makeExecutableSchema } = require("@graphql-tools/schema");

// Load all files in the current directory ending in .graphql as String
const typesArray = loadFilesSync("**/*", {
  extensions: ["graphql"],
});

const resolversArray = loadFilesSync("**/*", {
  extensions: ["resolvers.js"],
});

const app = express();

const startApolloSever = async () => {
  const schema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers: resolversArray,
  });

  // Set up Apollo Server
  const server = new ApolloServer({
    schema,
  });
  await server.start();

  app.use(cors(), bodyParser.json(), expressMiddleware(server));
};

startApolloSever();

module.exports = app;
