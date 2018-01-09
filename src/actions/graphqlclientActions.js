import gql from 'graphql-tag';
import * as types from './graphqlclientTypes';
const {
  createApolloFetch
} = require('apollo-fetch');

export function loadGraphQLSuccess(graphql) {
  return {
    type: types.CREATE_GRAPHQL,
    graphql
  };
}

const fetch = createApolloFetch({
  uri: 'http://localhost:8081/graphql',
});

export function loadGraphQL(GraphQL_LOC = 'http://localhost:8081/graphql') {
  return function (dispatch) {
    return fetch({
      query: gql `
      query {
        allUsers {
          id
          name
        }
        totalUsers
      }
  `,
    }).then(graphql => {
      console.log('graphql.data ====> ', graphql.data);
      return dispatch(loadGraphQLSuccess(graphql));
    });
  };
}
