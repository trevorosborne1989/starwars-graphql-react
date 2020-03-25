import 'bootstrap/dist/css/bootstrap.min.css';
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { createHttpLink } from "apollo-link-http";
import {InMemoryCache} from 'apollo-cache-inmemory'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/***********Configuration**********/

const httpLink = createHttpLink({ uri: 'https://api-euwest.graphcms.com/v1/ck5wca13qc9ux01fgaidt12m4/master', });
console.log("link", httpLink)

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

ReactDOM.render( 
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.querySelector('#root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
