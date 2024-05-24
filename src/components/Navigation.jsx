import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { styled, keyframes } from '@stitches/react';
import { violet,blackA } from '@radix-ui/colors';
import { Button } from '@headlessui/react'

const Navigation = () => {
    return (
        <NavigationMenuRoot>
            <NavigationMenuList>
                <NavigationMenu.Item>
                    <NavigationMenuLink href="/">Home</NavigationMenuLink>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                    <NavigationMenuLink href="/About">About</NavigationMenuLink>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                    <NavigationMenuLink href="/Contact"> Contact</NavigationMenuLink>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                    <NavigationMenuLink href="/login"> Login</NavigationMenuLink>
                </NavigationMenu.Item>
            </NavigationMenuList>

            <ViewportPosition>
                <NavigationMenuViewport />
            </ViewportPosition>
           
        </NavigationMenuRoot>
    );
};


const NavigationMenuRoot = styled(NavigationMenu.Root, {
    position: 'relative',
    display: 'flex',
    justifyContent: 'right',
    alignItems: 'right',
    width: '100vw',
    zIndex: 5,
});

const NavigationMenuList = styled(NavigationMenu.List, {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 4,
    borderRadius: 6,
    listStyle: 'none',
    boxShadow: `0 2px 10px ${blackA.blackA4}`,
    margin: 0,
});

const NewButton = styled(Button, {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
    padding: '8px 12px',
    backgroundColor: 'green',
    color: 'white',
    outline: 'none',
    userSelect: 'none',
    fontWeight: 500,
});

const itemStyles = {
    padding: '8px 12px',
    outline: 'none',
    userSelect: 'none',
    fontWeight: 500,
    lineHeight: 1,
    borderRadius: 4,
    fontSize: 15,
    color: violet.violet11,
    '&:focus': { boxShadow: `0 0 0 2px ${violet.violet7}` },
    '&:hover': { backgroundColor: violet.violet3 },
};

const NavigationMenuLink = styled(NavigationMenu.Link, {
    ...itemStyles,
    display: 'block',
    textDecoration: 'none',
    fontSize: 15,
    lineHeight: 1,
});

const NavigationMenuViewport = styled(NavigationMenu.Viewport, {
    position: 'relative',
    transformOrigin: 'top center',
    marginTop: 10,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 6,
    overflow: 'hidden',
    boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
    height: 'var(--radix-navigation-menu-viewport-height)'
});

const ViewportPosition = styled('div', {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    top: '100%',
    left: 0,
    perspective: '2000px',
});



export default Navigation;