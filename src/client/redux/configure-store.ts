import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore, Store } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga';

import createRootReducer from './reducers'
import rootSaga from './sagas'

export const history = createBrowserHistory({ basename: 'ufr-mapl-webui' })

export default function configureStore(): Store {

    const composeEnhancer: typeof compose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        createRootReducer(history),
        composeEnhancer(
            applyMiddleware(
                sagaMiddleware,
                routerMiddleware(history),
            ),
        ),
    )

    sagaMiddleware.run(rootSaga);

    return store
}