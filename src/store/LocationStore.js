import {createStore} from 'redux';
import locationReducer from './LocationReducer.js';

export default function configureStore(initialState) {
  console.log("configuring store...");
  return createStore(locationReducer, initialState);
}
