import React from 'react';
import logo from './logo.png';
import './App.css';
import Car from './Car';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <strong>I Can Haz Cars</strong><br />
          Recoil state management demo app
        </p>
      </header>
      <Car />
    </div>
  );
}

export default App;
