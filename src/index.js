import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import registerServiceWorker from './registerServiceWorker';
import counterReducer from './store/reducers/counter'
import resultReducer from './store/reducers/result'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
const rootReducer = combineReducers(
    {
        ctr: counterReducer,
        results: resultReducer
    }
)
const logger = store => {
    return next => {
        return action => {
            console.log("Middle ware", action)
            const result = next(action)
            console.log("next state", store.getState())
            return result
        }
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose()
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger,thunk)))

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
