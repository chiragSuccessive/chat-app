import React from 'react';
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from 'apollo-client';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import MainRoute from './MainRoute';
import Chat from './Chat';
import { getMainDefinition } from 'apollo-utilities';
import { ApolloLink, split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql',
});

const wsLink = new WebSocketLink({
  uri: `ws://localhost:4000/graphql`,
  options: {
    reconnect: true,
  },
});

const terminatingLink = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return (
      kind === 'OperationDefinition' && operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const link = ApolloLink.from([terminatingLink]);

const cache = new InMemoryCache();

const client = new ApolloClient({
  link,
  cache,
});

const App = () => {
  return (
    <ApolloProvider client={client}>
    <Router>
        <Switch>
          <Route exact path="/" component={MainRoute} />
          <Route exact path="/:from/:to" component={Chat} />
        </Switch>
    </Router>
    </ApolloProvider>
  );
}

export default App;
