/* // pages/login.js
import LoginForm from '@/components/LoginForm';

const LoginPage = () => {
  return (
    <div>
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
 */

// pages/login.js
import { styled } from '../styles/theme/stitches.config';
import LoginForm from '@/components/LoginForm';

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '$gray100',
});

const Title = styled('h1', {
  textAlign: 'center',
  marginBottom: '$3',
  color: '$gray700',
});

const LoginPage = () => {
  return (
    <Container>
      <div>
        <Title>Login</Title>
        <LoginForm />
      </div>
    </Container>
  );
};

export default LoginPage;
