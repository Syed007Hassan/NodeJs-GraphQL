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

const resolversArray = loadFilesSync("**/*", {
  extensions: ["resolvers.js"],
});

const schema = makeExecutableSchema({
  typeDefs: typesArray,
  resolvers: resolversArray,
});

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

module.exports = app;
