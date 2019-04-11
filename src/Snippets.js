import React from 'react';
import {
  Avatar,
  BackgroundImage,
  BackgroundImageSrc,
  Brand,
  Nav,
  NavItem,
  NavGroup,
  PageHeader,
  PageSidebar
} from '@patternfly/react-core';
import bg_1200 from './images/background/pfbg_1200.jpg';
import bg_992 from './images/background/pfbg_992.jpg';
import bg_992_2x from './images/background/pfbg_992@2x.jpg';
import bg_768 from './images/background/pfbg_768.jpg';
import bg_768_2x from './images/background/pfbg_768@2x.jpg';
import bg_2000 from './images/background/pfbg_2000.jpg';
import bg_576 from './images/background/pfbg_576.jpg';
import bg_576_2x from './images/background/pfbg_576@2x.jpg';
import bg_filter from './images/background/background-filter.svg';
import patternflylogo from './images/patternflylogo.png';
import redhatlogo from './images/redhatlogo.png';

export const Background = () => {

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

  return <BackgroundImage src={bgImages} />;
};

export const Header = () => {
  const logoProps = {
    href: 'https://patternfly-react.surge.sh/patternfly-4',
    target: '_blank'
  };

  return (
    <PageHeader
      logo={<Brand src={patternflylogo} alt="Brand Logo" />}
      logoProps={logoProps}
      avatar={<Avatar src={redhatlogo} alt="Avatar image" />}
    />
)};

export const Sidebar = () => { 
  const PageNav = (
    <Nav aria-label="Nav">
      <NavGroup title="Section One">
        <NavItem to="#grp-1_itm-1" itemId="grp-1_itm-1">
          Link One
        </NavItem>
        <NavItem to="#grp-1_itm-2" itemId="grp-1_itm-2">
          Link Two
        </NavItem>
        <NavItem to="#grp-1_itm-3" itemId="grp-1_itm-3">
          Link Three
        </NavItem>
        <NavItem to="#grp-1_itm-4" itemId="grp-1_itm-4">
          Link Four
        </NavItem>
      </NavGroup>
      <NavGroup title="Section Two">
        <NavItem to="#grp-2_itm-1" itemId="grp-2_itm-1">
          Link One
        </NavItem>
        <NavItem to="#grp-2_itm-2" itemId="grp-2_itm-2">
          Link Two
        </NavItem>
        <NavItem to="#grp-2_itm-3" itemId="grp-2_itm-3">
          Link Three
        </NavItem>
        <NavItem to="#grp-2_itm-4" itemId="grp-2_itm-4">
          Link Four
        </NavItem>
      </NavGroup>
    </Nav>
  );
  return <PageSidebar nav={PageNav} isNavOpen />;
};