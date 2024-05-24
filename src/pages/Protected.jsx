import { useQuery, gql } from '@apollo/client';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import LogoutButton from '@/components/LogoutButton';


const ME_QUERY = gql`
  query me {
    me {
      id
      username
    }
  }
`;

const Protected = () => {
  const { data, loading, error } = useQuery(ME_QUERY);
  const router = useRouter();

  useEffect(() => {
    if (error) {
      router.push('/login');
    }
  }, [error, router]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Protected Page</h1>
      <p>Welcome, {data.me.username}!</p>
      <LogoutButton />
    </div>
  );
};

export default Protected;
