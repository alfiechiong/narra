// pages/_app.js
import { ApolloProvider } from '@apollo/client';
import client from '../lib/apolloClient';

function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default App;
