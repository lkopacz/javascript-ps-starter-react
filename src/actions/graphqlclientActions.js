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

const default_query = {
  query: gql`
  query {
    allVillians {
      id
      name
    }
  }`
};

const full_query = {
  query: gql`
  query {
    allVillians {
      id
      name
      age
      weight
      image
      description
      powers
      first_appearance
    }
  }`
};

const count_query = {
  query: gql`
  query {
    totalVillans
  }`
};

function match_queries(query) {
  switch (query) {
    case 'total_villians':
      return count_query;
    case 'full_list':
      return full_query;
    case 'default':
      return default_query;
    default:
      return default_query;
  }
}

export function loadGraphQL(queries = 'default') {
  return function (dispatch) {
    return fetch(match_queries(queries)).then(graphql => {
      // console.log('graphql.data ====> ', graphql.data);
      return dispatch(loadGraphQLSuccess(graphql));
    });
  };
}
