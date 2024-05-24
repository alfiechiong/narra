// pages/api/graphql.js
import { ApolloServer, gql, AuthenticationError } from 'apollo-server-micro';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import users from '../../../data/user';

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
  }

  type Query {
    hello: String
    me: User
  }

  type Mutation {
    login(username: String!, password: String!): String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello, world!',
    me: (parent, args, context) => {
      if (!context.user) throw new AuthenticationError('You must be logged in');
      return users.find(user => user.id === context.user.id);
    },
  },
  Mutation: {
    login: (parent, { username, password }) => {
      const user = users.find(user => user.username === username);
      if (!user) throw new AuthenticationError('Invalid credentials');

      const valid = bcrypt.compareSync(password, user.password);
      if (!valid) throw new AuthenticationError('Invalid credentials');

      const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, {
        expiresIn: '1h',
      });

      return token;
    },
  },
};

const getUser = token => {
  try {
    if (token) {
      return jwt.verify(token, process.env.JWT_SECRET);
    }
    return null;
  } catch (err) {
    return null;
  }
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const token = req.headers.authorization || '';
    const user = getUser(token.replace('Bearer ', ''));
    return { user };
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const startServer = apolloServer.start();

export default async function handler(req, res) {
  await startServer;
  await apolloServer.createHandler({ path: '/api/graphql' })(req, res);
}
