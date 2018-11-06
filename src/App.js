import React, { Component } from 'react';
import {
  Avatar,
  BackgroundImage,
  BackgroundImageSrc,
  Brand,
  Card,
  CardBody,
  Gallery,
  GalleryItem,
  Nav,
  NavItem,
  NavGroup,
  Page,
  PageHeader,
  PageSection,
  PageSidebar
} from '@patternfly/react-core';
import brandImg from './images/l_pf-reverse-164x11.png';
import logo from './images/Logo_RH_RGB_Default.png';
import bg_1200 from './images/pfbg_1200.jpg';
import bg_992 from './images/pfbg_992.jpg';
import bg_992_2x from './images/pfbg_992@2x.jpg';
import bg_768 from './images/pfbg_768.jpg';
import bg_768_2x from './images/pfbg_768@2x.jpg';
import bg_2000 from './images/pfbg_2000.jpg';
import bg_576 from './images/pfbg_576.jpg';
import bg_576_2x from './images/pfbg_576@2x.jpg';
import bg_filter from './images/background-filter.svg';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeItem: 'grp-1_itm-1',
      isNavOpen: true
    };
  }

  onNavSelect = result => {
    this.setState({
      activeItem: result.itemId
    });
  };

  render() {
    const { activeItem, isNavOpen } = this.state;

    const logoProps = {
      href: 'https://patternfly-react.surge.sh/patternfly-4',
      target: '_blank'
    };
    const Header = (
      <PageHeader
        logo={<Brand src={brandImg} alt="Brand Logo" />}
        logoProps={logoProps}
        avatar={<Avatar src={logo} alt="Avatar image" />}
      />
    );

    const PageNav = (
      <Nav onSelect={this.onNavSelect} aria-label="Nav">
        <NavGroup title="Section One">
          <NavItem to="#grp-1_itm-1" itemId="grp-1_itm-1" isActive={activeItem === 'grp-1_itm-1'}>
            Link One
          </NavItem>
          <NavItem to="#grp-1_itm-2" itemId="grp-1_itm-2" isActive={activeItem === 'grp-1_itm-2'}>
            Link Two
          </NavItem>
          <NavItem to="#grp-1_itm-3" itemId="grp-1_itm-3" isActive={activeItem === 'grp-1_itm-3'}>
            Link Three
          </NavItem>
          <NavItem to="#grp-1_itm-4" itemId="grp-1_itm-4" isActive={activeItem === 'grp-1_itm-4'}>
            Link Four
          </NavItem>
        </NavGroup>
        <NavGroup title="Section Two">
          <NavItem to="#grp-2_itm-1" itemId="grp-2_itm-1" isActive={activeItem === 'grp-2_itm-1'}>
            Link One
          </NavItem>
          <NavItem to="#grp-2_itm-2" itemId="grp-2_itm-2" isActive={activeItem === 'grp-2_itm-2'}>
            Link Two
          </NavItem>
          <NavItem to="#grp-2_itm-3" itemId="grp-2_itm-3" isActive={activeItem === 'grp-2_itm-3'}>
            Link Three
          </NavItem>
          <NavItem to="#grp-2_itm-4" itemId="grp-2_itm-4" isActive={activeItem === 'grp-2_itm-4'}>
            Link Four
          </NavItem>
        </NavGroup>
      </Nav>
    );

    const Sidebar = <PageSidebar nav={PageNav} isNavOpen={isNavOpen} />;

    const bgImages = {
      [BackgroundImageSrc.lg]: bg_1200,
      [BackgroundImageSrc.md]: bg_992,
      [BackgroundImageSrc.md2x]: bg_992_2x,
      [BackgroundImageSrc.sm]: bg_768,
      [BackgroundImageSrc.sm2x]: bg_768_2x,
      [BackgroundImageSrc.xl]: bg_2000,
      [BackgroundImageSrc.xs]: bg_576,
      [BackgroundImageSrc.xs2x]: bg_576_2x,
      [BackgroundImageSrc.filter]: `${bg_filter}#image_overlay`
    };

    return (
      <React.Fragment>
        <BackgroundImage src={bgImages} />
        <Page header={Header} sidebar={Sidebar} className="bu-workshop">
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