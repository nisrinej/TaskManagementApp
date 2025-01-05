//import {applyMiddleware} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import authReducer from './reducers/authReducer';

const store = configureStore({
    reducer: authReducer,
     middleware: [thunk]});
//const store = createStore(authReducer, applyMiddleware(thunk));

export default store;