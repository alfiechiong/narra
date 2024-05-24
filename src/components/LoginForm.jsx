/* // components/LoginForm.js
import { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useRouter } from 'next/router';

const LOGIN_MUTATION = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password)
  }
`;

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [login, { data, loading, error }] = useMutation(LOGIN_MUTATION);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ variables: { username, password } });
      const token = response.data.login;
      localStorage.setItem('token', token);
      router.push('/protected');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" disabled={loading}>
        Login
      </button>
      {error && <p>Error: {error.message}</p>}
    </form>
  );
};

export default LoginForm;
 */

// components/LoginForm.js
import { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useRouter } from 'next/router';
import { styled } from '../styles/theme/stitches.config';

const LOGIN_MUTATION = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password)
  }
`;

const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  width: '300px',
  margin: '0 auto',
  padding: '$4',
  border: '1px solid $gray300',
  borderRadius: '$medium',
  backgroundColor: '$white',
  boxShadow: '$small',
});

const Label = styled('label', {
  marginBottom: '$2',
  fontWeight: 'bold',
});

const Input = styled('input', {
  marginBottom: '$3',
  padding: '$2',
  border: '1px solid $gray300',
  borderRadius: '$small',
});

const Button = styled('button', {
  padding: '$2',
  border: 'none',
  borderRadius: '$small',
  backgroundColor: '$primary',
  color: '$white',
  fontSize: '1rem',
  cursor: 'pointer',
  '&:disabled': {
    backgroundColor: '$gray300',
  },
});

const ErrorMessage = styled('p', {
  color: '$red',
  marginTop: '$3',
});

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [login, { data, loading, error }] = useMutation(LOGIN_MUTATION);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ variables: { username, password } });
      const token = response.data.login;
      localStorage.setItem('token', token);
      router.push('/Protected');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <Label>Username:</Label>
        <Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <Label>Password:</Label>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Button type="submit" disabled={loading}>
        Login
      </Button>
      {error && <ErrorMessage>Error: {error.message}</ErrorMessage>}
    </Form>
  );
};

export default LoginForm;
