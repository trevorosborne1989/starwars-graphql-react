import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from "@reach/router"
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { createHttpLink } from "apollo-link-http";
import {InMemoryCache} from 'apollo-cache-inmemory'
import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './components/Dashboard';
import Planets from './components/Planets';
import Starships from './components/Starships';
import Vehicles from './components/Vehicles';


/***********Configuration**********/

const httpLink = createHttpLink({ uri: 'https://api-euwest.graphcms.com/v1/ck5wca13qc9ux01fgaidt12m4/master', });
console.log("link", httpLink)

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

/************Main Function************/

export const App = () => {
  
    return (
      <Router>
        <Dashboard path="/" />
        <Planets path="Planets" />
        <Starships path="Starships" />
        <Vehicles path="Vehicles" />
      </Router>
  )  
};

ReactDOM.render( 
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.querySelector('#root')
);

