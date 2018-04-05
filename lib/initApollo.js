import { ApolloClient } from 'apollo-boost';
import { HttpLink } from 'apollo-boost';
import { InMemoryCache } from 'apollo-boost';
import fetch from 'isomorphic-unfetch';


let apolloClient = null;
const TOKEN = '0eca3a6ce6c9f0c0dd7835ec8ccc8e219ad4e5c4';
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
