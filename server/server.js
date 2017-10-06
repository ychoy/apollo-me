import express from 'express';
import { 
  graphqlExpress,
  graphiqlExpress,
} from 'graphql-server-express';
import bodyParser from 'body-parser';
import { schema } from './src/schema';

const PORT = 4000;

const server = express();

//In order to make our server respond to GraphQL requests, tell Express to pass requests to our graphqlExpress middleware, which executes the queries against the schema

server.use('/graphql', bodyParser.json(), graphqlExpress({
  schema
}));

server.listen(PORT, () => console.log(`GraphQL Server is now running on http://localhost:${PORT}`));
