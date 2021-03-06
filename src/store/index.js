import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducers from '../reducers';

// const store = createStore(rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// <RefenrĂȘncia: https://github.com/zalmoxisus/redux-devtools-extension#usage>

const store = createStore(reducers,
  composeWithDevTools(applyMiddleware(thunk)));

export default store;
