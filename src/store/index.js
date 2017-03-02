import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

// import reducers here

const rootReducer = combineReducers({
  state: (state = {}) => state,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware),
);

export default store;
