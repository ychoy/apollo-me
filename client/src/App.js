import React, { Component } from 'react';
import './App.css';
import ChannelsListWithData from './components/ChannelsListWithData';

import { 
  ApolloClient, 
  ApolloProvider, 
  createNetworkInterface 
} from 'react-apollo';

const networkInterface = createNetworkInterface({ uri: 'http://localhost:4000/graphql' });
networkInterface.use([{
  applyMiddleware(req, next) {
    setTimeout(next, 500);
  },
}]);
const client = new ApolloClient({
  networkInterface,
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <div className="navbar">Apollo Me</div>
          <ChannelsListWithData />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
