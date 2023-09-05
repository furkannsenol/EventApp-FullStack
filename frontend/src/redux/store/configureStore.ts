// store.ts

import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import categoryReducer from '../reducers/categoryReducer';
import popularEventReducer from '../reducers/popularEventReducer'
import allEventReducer from '../reducers/allEventReducer';
const rootReducer = combineReducers({
    categoryReducer,
    popularEventReducer,
    allEventReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
