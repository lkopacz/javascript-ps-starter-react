import * as types from '../actions/starwarsTypes';

export default function starwarsReducer(state = [], action) {
  switch (action.type) {
    case types.FETCH_API:
      return [...state, Object.assign({}, action.starwars)];
    default:
      return state;
  }
}
