import React from 'react';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from '@radix-ui/react-navigation-menu';
import { styled } from '@stitches/react';
import Navigation from './Navigation';


const Header = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem',
  backgroundColor: '#282c34',
  color: 'white',
  zIndex:1
});

const Logo = styled('div', {
  fontSize: '1.5rem',
  fontWeight: 'bold',
});

const AppHeader = () => {
  return (
    <Header>
      <Logo>ALFIE CHIONG TECH </Logo>
      <Navigation />
    </Header>
  );
};

export default AppHeader;
