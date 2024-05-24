// components/LogoutButton.js
import { useRouter } from 'next/router';
import { styled } from '../styles/theme/stitches.config';

const Button = styled('button', {
  padding: '$2',
  border: 'none',
  borderRadius: '$small',
  backgroundColor: '$primary',
  color: '$white',
  fontSize: '1rem',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '$gray300',
  },
});

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/login');
  };

  return <Button onClick={handleLogout}>Logout</Button>;
};

export default LogoutButton;
