import {createStore} from 'redux';
import locationReducer from '../reducers/LocationReducer.js';

export default function configureStore(initialState) {
  console.log("configuring store...");
  return createStore(locationReducer, initialState);
}


// import {createStore} from 'redux';
// import rootReducer from '../reducers';
//
// export default function configureStore(initialState) {
//   return createStore(rootReducer, initialState);
// }
