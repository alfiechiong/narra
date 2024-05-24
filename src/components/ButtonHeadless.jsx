// src/components/Button.jsx
import { styled} from '@stitches/react';
import { Button } from '@headlessui/react'
import Dropdown  from '@/components/Dropdown'
import * as RadixColors from '@radix-ui/colors';
import Select from '@/components/Select';
// import { Button } from '@radix-ui/themes';


export const NewButton = styled(Button, {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
    padding: '8px 12px',
  
    borderRadius: '8px',
    color: 'white',
    outline: 'none',
    userSelect: 'none',
    fontWeight: 500,

    /* background: RadixColors.blue.blue9,
    text: RadixColors.blue.blue1,
    buttonBackground: RadixColors.blue.blue10,
    buttonText: RadixColors.blue.blue1, */

    variants: {
        variant: {
            primary: {
                backgroundColor: RadixColors.blue.blue9, // primary color
                color: RadixColors.blue.blue1,
                '&:hover': {
                    backgroundColor: RadixColors.blue.blue10,
                    buttonText: RadixColors.blue.blue1,
                },
                '&:active': {
                    backgroundColor: '#0056B3',
                },
            },
            secondary: {
                backgroundColor: '#6C757D', // secondary color
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


const HeadlessButton = ({...props}) =>{

    if(props.type === 'button'){
        return <NewButton {...props} />
    }

    if(props.type === 'dropdown' && props.links){
        return <Dropdown  {...props} links={props.links} />
    }

    if(props.type === 'select'){
        return <Select  {...props} />
    }

}

export default HeadlessButton;
