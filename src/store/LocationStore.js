import {createStore} from 'redux';
import locationReducer from './LocationReducer.js';

export default function configureStore(initialState) {
  return createStore(locationReducer, initialState);
}
