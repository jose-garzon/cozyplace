//------------------------------ import libraries
import {
  createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';

// Import and combine reducers
import { userReducer } from '../reducers/userReducer';
import { mapReducer } from '../reducers/mapReducer';
import { testimonialReducer } from '../reducers/testimonialReducer';
import { experiencesReducer } from '../reducers/experiencesReducer';

const rootReducer = combineReducers({
  userReducer,
  mapReducer,
  testimonialReducer,
  experiencesReducer,
});

// Get the enhancer to redux devtools
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Made a function that return the store
export function generateStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)),
  );
  return store;
}
