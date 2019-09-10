import { createStore, applyMiddleware, compose } from 'redux';

// Shared reducer between client and server
import reducer from '../reducers';
import thunk from 'redux-thunk';

export const middleware = [thunk];

const configureStore = () => {
  const preloadedState = window.PRELOADED_STATE;

  // const store = createStore(
  //   reducer,
  //   preloadedState,
  //   compose( applyMiddleware(...middleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  // );

  const store = createStore(
    reducer,
    preloadedState,
    compose( applyMiddleware(...middleware))
  );

  return store;
};

export default configureStore;