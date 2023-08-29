// store.ts

import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import categoryReducer from '../reducers/categoryReducer';

const rootReducer = combineReducers({
    categoryReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
