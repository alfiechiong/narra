import { Menu, MenuButton, MenuItem, MenuItems, Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { styled } from '@stitches/react';

const StyledMenu = styled(Menu, {
    position: 'relative',
    display: 'inline-block',
});

const StyledMenuButton = styled(MenuButton, {
    padding: '8px 16px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '500',
    '&:hover': {
        backgroundColor: '$primaryDark',
    },
    variants: {
        variant: {
            primary: {
                backgroundColor: '#6C757D', // primary color
                color: 'white',
                '&:hover': {
                    backgroundColor: '#0069D9',
                },
                '&:active': {
                    backgroundColor: '#0056B3',
                },
            },
            secondary: {
                backgroundColor: '#570803', // secondary color
                color: 'white',
                '&:hover': {
                    backgroundColor: '#5A6268',
                },
                '&:active': {
                    backgroundColor: '#495057',
                },
            },
        },
        size: {
          small: {
            padding: '6px 12px',
            fontSize: '14px',
          },
          large: {
            padding: '14px 28px',
            fontSize: '18px',
          },
        },
      },
});

const StyledMenuItem = styled(MenuItem, {
    padding: '8px 16px',
    color: '$primary',
    cursor: 'pointer',
    fontSize: '16px',
    '&:hover': {
        backgroundColor: '$primaryLight',
    },
});

const StyledMenuItems = styled(MenuItems, {
    position: 'absolute',
    zIndex: '10',
    top: 'calc(100% + 4px)',
    left: '0',
    minWidth: '160px',
    backgroundColor: '$white',
    borderRadius: '4px',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05), 0 2px 8px rgba(0, 0, 0, 0.15)',
});

export default function Example({ ...props }) {
    console.log(props)

    return (

        <Menu>
            <StyledMenuButton>My account</StyledMenuButton>
            <StyledMenuItems anchor="bottom">
            {props.links.map((link) => (
            <StyledMenuItem key={link.href} >
                {({ focus }) => (
                <a className={'bg-blue-100'} href={link.href}>
                    {link.label}
                </a>
                )}
            </StyledMenuItem>
        ))}
                
            </StyledMenuItems>
        </Menu>
    ) 
    
}
