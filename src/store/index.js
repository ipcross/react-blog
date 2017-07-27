import { createStore, applyMiddleware, compose } from 'redux';

import APIMiddleware from 'middleware/API';
import logger from 'middleware/Logger';
import DevTools from 'containers/DevTools';

import reducers from 'reducers';

const store = (initialState) => createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(APIMiddleware, logger),
    DevTools.instrument()
  )
);

export default store;
