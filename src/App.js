import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header>Header</header>
        <div className="mainSection">
          <div className="nav">
            <ul>
              <li>List Item One</li>
              <li>List Item Two</li>
              <li>List Item Three</li>
              <li>List Item Four</li>
              <li>List Item Five</li>

            </ul>
          </div>
        <div className="cardParent">
          <div className="cardRow">
            <div className="card">I am a card</div>
            <div className="card">I am a card</div>
            <div className="card">I am a card</div>
          </div>
          <div className="cardRow">
            <div className="card">I am a card</div>
            <div className="card">I am a card</div>
            <div className="card">I am a card</div>
          </div>
          <div className="cardRow">
            <div className="card">I am a card</div>
            <div className="card">I am a card</div>
            <div className="card">I am a card</div>
          </div>
          <div className="cardRow">
            <div className="card">I am a card</div>
            <div className="card">I am a card</div>
            <div className="card">I am a card</div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
