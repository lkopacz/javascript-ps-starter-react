import * as types from './starwarsTypes';
import starwarsAPI from '../api/starwarsAPI';

/*eslint-disable no-console */

export function loadStarWarsSuccess(starwars) {
  return { type: types.LOAD_STARWARS_SUCCESS, starwars };
}

export function loadStarWars() {
  return function (dispatch) {
    return starwarsAPI.getAllStarWars().then(starwars => {
      // console.log('loadStarWarsSuccess() =>', loadStarWarsSuccess(starwars));
      dispatch(loadStarWarsSuccess(starwars));
    }).catch(error => {
      throw (error);
    });
  };
}
