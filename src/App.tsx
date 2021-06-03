import React from 'react';
import logo from './logo.svg';
import './App.css';
import CryptoDemo from './cryptoDemo'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CryptoDemo/>
        <p>
          be kind, calm mind
        </p>
        <p>Cases are going high</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
