import { createStore, combineReducers } from 'redux';

import doTheThingsReducer from './stuff.store';

let reducers = combineReducers({
  someStuff: doTheThingsReducer,
});

export default () => createStore(reducers);