import { combineReducers } from 'redux';
import users from './userReducer';
import number from './incrementReducer';
import starwars from './starwarsReducer';

const rootReducer = combineReducers({
  users,
  number,
  starwars
});

export default rootReducer;
