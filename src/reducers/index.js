import { combineReducers } from 'redux';
import users from './userReducer';
import starwars from './starwarsReducer';

const rootReducer = combineReducers({
  users,
  starwars
});

export default rootReducer;
