import { compose, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import persistState from 'redux-localstorage'
import { fromJS } from 'immutable';
import rootReducer from './reducers';
import rootSaga from './sagas';

export default function configure(initialState = fromJS({})) {
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

    const store = createStoreWithMiddleware(
        rootReducer,
        initialState,
        compose(
            persistState(undefined, {
                slicer: (paths) => (state) => state,
                serialize: (subset) => JSON.stringify(subset),
                deserialize: (serializedData) => fromJS(JSON.parse(serializedData)),
                merge: (initialState, persistedState) => initialState.mergeDeep(persistedState)
            })
        )
    )

    sagaMiddleware.run(rootSaga);

    if (module.hot) {
        module.hot.accept('./reducers', () => {
          const nextReducer = require('./reducers')
          store.replaceReducer(nextReducer)
        })
    }

  return store
}
