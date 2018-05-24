import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from './sagas';

export default function configure(initialState) {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [
        sagaMiddleware
    ]

    const create = window.devToolsExtension
        ? window.devToolsExtension()(createStore)
        : createStore

    const createStoreWithMiddleware = applyMiddleware(
      ...middlewares
    )(create)

    const store = createStoreWithMiddleware(rootReducer, initialState)

    sagaMiddleware.run(rootSaga);

    if (module.hot) {
        module.hot.accept('./reducers', () => {
          const nextReducer = require('./reducers')
          store.replaceReducer(nextReducer)
        })
    }

  return store
}
