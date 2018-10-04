const { ApolloServer, gql } = require("apollo-server-lambda");

const typeDefs = gql`
  type Query {
    hello: String
    random: Float
  }
`;

const resolvers = {
  Query: {
    hello: (root, args, context) => {
      return "Hello, world!";
    },
    random: (root, args, context) => {
      return Math.random();
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

exports.handler = server.createHandler();
