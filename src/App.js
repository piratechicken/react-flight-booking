import React, { Component } from 'react';
// import logo from './logo.svg';
import Button from './components/Button';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>heading...</h1>
        <p>Hello simon... This is React</p>
        <Button title ='Find Flights' primary />
        <Button title='Sign up' />
        <Button title='Enter competition' magic />
        <ul>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </ul>
      </div>
    );
  }
}

export default App;
