import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../reducers/reducers'
import logger from 'redux-logger'

const store = createStore(
    reducer,
    compose(
        applyMiddleware(logger),
    )
) 

export default store