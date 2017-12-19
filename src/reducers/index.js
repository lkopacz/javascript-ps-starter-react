import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
  courses
});

export default rootReducer;
