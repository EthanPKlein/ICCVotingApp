import {ADD_LOCATION, ADD_VOTE, GET_LOCATIONS} from '../constants/actionTypes';

const locationReducer = function(initialState, action) {

  var reducer = [];

  reducer[GET_LOCATIONS]  = function () {
    console.log("reducer is getting locations.");
    console.log("action:");
    console.log(action);
    var newList = action.locations; // get data from action
    console.log('newlist', newList);
    return {
       locations: newList
     }; // new state
  }

  reducer[ADD_LOCATION]  = function () {
    var newLocation = action.location; // get data from action
    return {locations: [
        ...initialState.locations, newLocation
      ]}; // return new state
  }

  // reducer[CREATE_LOCATION]  = function () {
  //   return action.location;
  // }

  if (reducer[action.type]) {
    return reducer[action.type]();
  } else {
    return {users:[]};
  }

// var userReducer = function(state, action) {
//   if (state === undefined) {
//     state = [];
//   }
//   if (action.type === ADD_LOCATION) {
//     state.push(action.location);
//   }
//   return state;
// }

}

export default locationReducer;
