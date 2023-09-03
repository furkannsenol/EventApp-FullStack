// store.ts

import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import categoryReducer from '../reducers/categoryReducer';
import popularEventReducer from '../reducers/popularEventReducer'
const rootReducer = combineReducers({
    categoryReducer,
    popularEventReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
