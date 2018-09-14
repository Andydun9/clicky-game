import React, { Component } from 'react';
import logo from './logo.jpeg';
import './App.css';

let score
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo}  alt="logo" />
          <h1 className="App-title">Welcome to the Disenchanted Clicky Game</h1>
        </header>
        <p className="App-intro">
         Click on each image to earn points, but don't click on any image more than once. 
        </p>
        <div>
          <h2>Score</h2>
          {score}
        </div>
      </div>
    );
  }
}



export default App;

