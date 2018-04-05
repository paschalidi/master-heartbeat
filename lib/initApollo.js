import { ApolloClient } from 'apollo-boost';
import { HttpLink } from 'apollo-boost';
import { InMemoryCache } from 'apollo-boost';
import fetch from 'isomorphic-unfetch';


let apolloClient = null;
const TOKEN = '48e998af0e0096f009b86ed9bd02cbd212d9a45d';
if (!process.browser) {
  global.fetch = fetch;
}

function create(initialState) {
  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    link: new HttpLink({
      uri: 'https://api.github.com/graphql',
      headers: {
        Authorization: `token ${TOKEN}`
      }
    }),
    cache: new InMemoryCache().restore(initialState || {})
  });
}

export default function initApollo(initialState) {
  if (!process.browser) {
    return create(initialState);
  }
  
  if (!apolloClient) {
    apolloClient = create(initialState);
  }
  
  return apolloClient;
}
