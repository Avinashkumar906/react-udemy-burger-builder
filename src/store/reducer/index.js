import { combineReducers } from 'redux';
import ingredientReducer from './ingredients';
import userReducer from './user';

const reducer = combineReducers({
  store:ingredientReducer,
  user:userReducer,
})

export default reducer;