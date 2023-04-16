import authReducer from './authReducer';
import userDataReducer from './userDataReducer';
import userChatReducer from './userChatReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  authReducer: authReducer,
  userDataReducer: userDataReducer,
  userChatReducer: userChatReducer,
});

export default rootReducer;
