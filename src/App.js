import React, { Component } from 'react';
import {
  Card,
  CardBody,
  Gallery,
  GalleryItem,
  Page,
  PageSection
} from '@patternfly/react-core';
import { Background, Header, Sidebar } from './Snippets';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Background />
        <Page header={<Header />} sidebar={<Sidebar />} className="bu-workshop">
          <PageSection>
            <Gallery gutter="md">
              {Array.apply(0, Array(12)).map((x, i) => (
                <GalleryItem key={i}>
                  <Card>
                    <CardBody>I am a card</CardBody>
                  </Card>
                </GalleryItem>
              ))}
            </Gallery>
          </PageSection>
        </Page>
      </React.Fragment>
    );
  }
}

export default App;