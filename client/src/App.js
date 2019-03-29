import React from 'react';
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import MainRoute from './MainRoute';
import Chat from './Chat';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
// const client = new ApolloClient({
//   uri: "http://localhost:4000/graphql"
// });

// const cache = new InMemoryCache();
// const link = new HttpLink({
//   uri: 'http://localhost:4000/graphql'
// })
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

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
