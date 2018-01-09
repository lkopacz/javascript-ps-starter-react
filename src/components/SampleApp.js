import React from 'react';
import SearchApp from './SearchApp';
import TimeTracker from './timeTracker';
import UserApp from './UserApp';
import StarWarsApp from './StarWarsApp';
import StarWarsExternalApp from './StarWarsExternalApp';
import IncrementApp from './IncrementApp';
import GraphqlClientApp from './GraphqlClientApp';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';


const client = new ApolloClient({
  link: new HttpLink({ // ?query={__schema{types{name}}}
    uri: 'http://localhost:8081/graphql', //   http://localhost:8081/graphql
  }),
  cache: new InMemoryCache()
});

// import gql from 'graphql-tag';

/**
 * @TODO
 * pin node version
 * add GraphQL client and then run queries with it
 */

function SampleApp() {
  return (

    <div className="sample-app">

      <TimeTracker />

      <h2>Collection of Sample Components</h2>

      <div className="boxy float-left clearfix">
        <ApolloProvider client={client}>
          <GraphqlClientApp />
        </ApolloProvider>
      </div>

      <div className="boxy float-left clearfix">
        <SearchApp />
      </div>

      <div className="boxy float-left clearfix">
        <IncrementApp />
      </div>

      <div className="boxy float-left clearfix">
        <UserApp />
      </div>

      <div className="boxy float-left clearfix">
        <StarWarsApp />
      </div>

      <div className="boxy float-left clearfix">
        <StarWarsExternalApp />
      </div>


    </div>
  );
}

export default SampleApp;
