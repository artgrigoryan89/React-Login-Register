import { combineReducers } from 'redux';
import  UserReducer from './reducer_login';

const rootReducer = combineReducers({
  user: UserReducer
});

export default rootReducer;
