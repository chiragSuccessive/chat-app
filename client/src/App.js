import React from 'react';
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import Users from './Users';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import MainRoute from './MainRoute';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});


const App = () => (
  <MainRoute/>

  // <ApolloProvider client={client}>
  // <Router>
  //   <Route>
  //     <Users />
  //     <Switch>
  //       <MainRoute/>
  //     </Switch>
  //   </Route>
  // </Router>
  //   <MainRoute/>
  // </ApolloProvider>
);

export default App;
