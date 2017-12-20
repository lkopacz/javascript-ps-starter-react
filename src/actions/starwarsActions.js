import * as types from './starwarsTypes';

export function createStarWars(starwars) {
  return {
    type: types.FETCH_API,
    starwars: starwars
  };
}
