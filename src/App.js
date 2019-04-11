import React, { Component } from 'react';
import redhatlogo from './images/redhatlogo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>BU-Workshop</h1>
          <img src={redhatlogo} alt="Red Hat logo" className="redHatLogo"/>
        </header>
        <div className="mainSection">
          <div className="nav">
            <ul>
              <div>Section One</div>
              <li>Link One</li>
              <li>Link Two</li>
              <li>Link Three</li>
              <li>Link Four</li>
            </ul>

            <ul>
              <div>Section Two</div>
              <li>Link One</li>
              <li>Link Two</li>
              <li>Link Three</li>
              <li>Link Four</li>
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
