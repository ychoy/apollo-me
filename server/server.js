import express from 'express';
import { 
  graphqlExpress,
  graphiqlExpress,
} from 'graphql-server-express';
import bodyParser from 'body-parser';
import { schema } from './src/schema';
import cors from 'cors';

const PORT = 4000;

const server = express();

//allow cross-origin requests from our front-end origin
server.use('*', cors({ origin: 'http://localhost:3000' }));

//In order to make our server respond to GraphQL requests, tell Express to pass requests to our graphqlExpress middleware, which executes the queries against the schema

server.use('/graphql', bodyParser.json(), graphqlExpress({
  schema
}));

// Set up GraphiQL by adding the graphiqlExpress middleware from graphql-server and point it to the GraphQL endpoint
server.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));

server.listen(PORT, () => console.log(`GraphQL Server is now running on http://localhost:${PORT}`));
