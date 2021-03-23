import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./rootSaga";
import counterReducer from "./component-redux/reducers";


const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        : compose

export const store = createStore(combineReducers({
    counterReducer,
}), composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga)