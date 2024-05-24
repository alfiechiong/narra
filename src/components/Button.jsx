'use client'
import { Button } from '@radix-ui/themes';

const Btn = ({...props}) => {
    
return <Button {...props} >{props?.children}</Button>
}; 

export default Btn;