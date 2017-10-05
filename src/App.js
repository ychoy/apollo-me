import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const AlbumList = () =>
     (<ul>
       <li>Album 1</li>
       <li>Album 2</li>
     </ul>);

class App extends Component {
   render() {
     return (
       <div className="App">
         <div className="App-header">
           <img src={logo} className="App-logo" alt="logo" />
           <h2>Welcome to Apollo</h2>
         </div>
         <AlbumsList />
       </div>
     );
   }
 }
export default App;
