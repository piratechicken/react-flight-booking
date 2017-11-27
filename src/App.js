import React, { Component } from 'react';
// import logo from './logo.svg';
import Button from './components/Button';
import Emoji from './components/Emoji';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>heading...</h1>
        <Emoji />
        <Emoji cat />
        <Emoji cat emotion='sad' />
        <Emoji emotion='sad' />
        <Emoji cat emotion='love' />
        <Emoji emotion='love' />
        <Emoji cat emotion='fear' />
        <Emoji emotion='fear' />
        <p>Hello simon... This is React</p>
        <Button primary>
          Find Flights
        </Button>
        <Button href='/competition'>
          Enter competition
        </Button>
        <Button magic>
          Find Flights
        </Button>
        <Button>
          <Emoji cat emotion='love' />
          {' '}
          Sign up
        </Button>
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
