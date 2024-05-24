// components/ContactForm.js
import React from 'react';
import { styled } from '../styles/theme/stitches.config';
import { useForm } from 'react-hook-form';
import { Dialog, DialogPanel, DialogContent, Input, Button, Textarea } from '@headlessui/react';

const HeadlessInput = styled(Input, {
  width: '100%',
  padding: '$2',
  fontSize: '$3',
  borderRadius: '$1',
  border: '1px solid $gray',
  marginBottom: '$3',
  '&:focus': {
    outline: 'none',
    borderColor: '$primary',
  },
});

const TextArea = styled(Textarea, {
  width: '100%',
  padding: '$2',
  fontSize: '$3',
  borderRadius: '$1',
  border: '1px solid $gray',
  marginBottom: '$3',
  '&:focus': {
    outline: 'none',
    borderColor: '$primary',
  },
});

const HeadlessButton = styled(Button, {
  backgroundColor: '$primary',
  color: '$white',
  padding: '$2 $3',
  fontSize: '$3',
  borderRadius: '$1',
  border: 'none',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '$secondary',
  },
});

const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [isOpen, setIsOpen] = React.useState(false);

  const onSubmit = (data) => {
    console.log(data);
    reset();
    setIsOpen(false);
  };

  return (
    <div style={{ background: 'white', padding: '24px', borderRadius: '8px', width: '400px', margin: '0 auto' }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Contact Us</h2>
            <HeadlessInput type="text" placeholder="Name" {...register('name', { required: true })} />
            <HeadlessInput type="email" placeholder="Email" {...register('email', { required: true })} />
            <TextArea placeholder="Message" {...register('message', { required: true })} rows="4" />
            <HeadlessButton type="submit">Submit</HeadlessButton>
          </form>
        </div>
  );
};

export default ContactForm;
