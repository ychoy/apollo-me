import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  ApolloClient,
  gql,
  graphql,
  ApolloProvider,
} from 'react-apollo';

import ChannelsListWithData from './components/ChannelsListWithData';

const client = new ApolloClient();

const ChannelssList = () =>
     (<ul>
       <li>Channels 1</li>
       <li>Channels 2</li>
     </ul>);

// Wrap component with ApolloProvider to put  an instance of the client on the UI.

class App extends Component {
   render() {
     return (
       <ApolloProvider client={client}>
         <div className="App">
           <div className="App-header">
             <img src={logo} className="App-logo" alt="logo" />
             <h2>Apollo Me</h2>
           </div>
           <ChannelsListWithData />
         </div>
       </ApolloProvider>
     );
   }
 }

export default App;
