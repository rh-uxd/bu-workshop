import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Gallery, GalleryItem, Card, CardBody } from "@patternfly/react-core";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Header</h1>
          <a
            href="https://761-pr-patternfly-react-patternfly.surge.sh/patternfly-4/"
            className="primaryButton"
          >
            Test Find out more
          </a>
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
          <Gallery gutter="md">
            <GalleryItem>
              <Card>
                <CardBody>I am a card</CardBody>
              </Card>
              <Card>
                <CardBody>I am a card</CardBody>
              </Card>
              <Card>
                <CardBody>I am a card</CardBody>
              </Card>
            </GalleryItem>
            <GalleryItem>
              <Card>
                <CardBody>I am a card</CardBody>
              </Card>
              <Card>
                <CardBody>I am a card</CardBody>
              </Card>
              <Card>
                <CardBody>I am a card</CardBody>
              </Card>
            </GalleryItem>
            <GalleryItem>
              <Card>
                <CardBody>I am a card</CardBody>
              </Card>
              <Card>
                <CardBody>I am a card</CardBody>
              </Card>
              <Card>
                <CardBody>I am a card</CardBody>
              </Card>
            </GalleryItem>
            <GalleryItem>
              <Card>
                <CardBody>I am a card</CardBody>
              </Card>
              <Card>
                <CardBody>I am a card</CardBody>
              </Card>
              <Card>
                <CardBody>I am a card</CardBody>
              </Card>
            </GalleryItem>
          </Gallery>
        </div>
        <div className="footer">No brand</div>
      </div>
    );
  }
}

export default App;
