import { createStore, applyMiddleware } from 'redux';

import APIMiddleware from 'middleware/API';
import logger from 'middleware/Logger';
/*import DevTools from 'containers/DevTools';*/
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from 'reducers';

const store = (initialState) => createStore(
  reducers,
  initialState,
  composeWithDevTools(
    applyMiddleware(APIMiddleware, logger) /*,
    DevTools.instrument()*/
  )
);

export default store;
