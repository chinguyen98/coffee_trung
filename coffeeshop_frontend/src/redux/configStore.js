import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import ProductReducer from './reducers/product'
import Cart from './reducers/cart'
import UserReducer from './reducers/user'
import thunk from 'redux-thunk'
import message from './reducers/message'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
    //reducer khai báo tại đây
    products: ProductReducer,
    user: UserReducer,
    Cart,
    message


})

const store = createStore(rootReducer,
    composeEnhancers(applyMiddleware((thunk)))
);


export default store;