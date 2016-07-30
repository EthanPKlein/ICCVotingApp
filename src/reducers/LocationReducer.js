import {ADD_LOCATION, ADD_VOTE, GET_LOCATIONS} from '../constants/actionTypes';

const locationReducer = function(initialState, action) {

  var reducer = [];

  reducer[GET_LOCATIONS]  = function () {
    console.log("reducer is getting locations.");
    console.log("action:");
    console.log(action);
    var newList = action.locations; // get data from action
    var newTime = action.time;
    var newDate = action.date;

    return {
       locations: newList,
       time: newTime,
       date: newDate
     };
  }

  reducer[ADD_VOTE]  = function () {

    var oldState = initialState;
    var newState = Object.assign(oldState);

    for (var i = 0; i < newState.locations.length; i++) {
      let location = newState.locations[i];

      if (location.id===action.id) {
        if (!location.votes.includes(action.email)) {
          location.votes.push(action.email);
        }
      }

    }

    return oldState;
  }

  reducer[ADD_LOCATION]  = function () {
    var newLocation = action.location; // get data from action
    return {locations: [
        ...initialState.locations, newLocation
      ]}; // return new state
  }

  if (reducer[action.type]) {
    return reducer[action.type]();
  } else {
    return {users:[]};
  }

}

export default locationReducer;
