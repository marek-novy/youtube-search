// tslint:disable-next-line:no-submodule-imports
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import * as Redux from 'redux';
import { persistCombineReducers, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from '../rootReducer';
import rootSaga from '../rootSaga';
import { IStore } from './IStore';

// tslint:disable-next-line:no-submodule-imports
const reduxPersistConfig = {
    key: 'root',
    storage,
    whitelist: [],
};

const sagaMiddleware = createSagaMiddleware();

export const history = createHistory();
const appRouterMiddleware = routerMiddleware(history);

interface IConfigureStore {
    store: Redux.Store<IStore>;
    persistor: {};
}

export function configureStore(): IConfigureStore {
    // Create the store with two middlewares
    // 1. sagaMiddleware: Makes redux-sagas work
    // 2. routerMiddleware: Syncs the location/URL path to the state
    const middlewares = [appRouterMiddleware, sagaMiddleware];

    const enhancers = [Redux.applyMiddleware(...middlewares)];

    const composeEnhancers =
        // tslint:disable-next-line:no-any
        (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || Redux.compose;

    const reducer = persistCombineReducers(reduxPersistConfig, rootReducer);

    const store: Redux.Store<IStore> = Redux.createStore<IStore>(reducer, composeEnhancers(...enhancers));
    sagaMiddleware.run(rootSaga);

    const persistor: {} = persistStore(store);

    return { store, persistor };
}

export default configureStore;
