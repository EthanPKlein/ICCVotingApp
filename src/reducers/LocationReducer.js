import {ADD_LOCATION, ADD_VOTE, GET_LOCATIONS, SEED_LOCATIONS} from '../constants/actionTypes';

const locationReducer = function(initialState, action) {

  var reducer = [];

  reducer[GET_LOCATIONS]  = function () {

   var newList = action.locations;
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

    for (var i = 0; i < oldState.locations.length; i++) {
      let location = oldState.locations[i];
      let voteCast = false;

      // user has voted with this email already; reject it and let the user know
      if (location.votes.includes(action.email)) {
        alert("You have already voted with the email " + action.email + "!");
        return oldState;
      }
    }

      for (var i = 0; i < oldState.locations.length; i++) {
        let location = oldState.locations[i];
        if (location.id===action.id) {
          location.votes.push(action.email);
        }

    }

    return oldState;
  }

  reducer[ADD_LOCATION]  = function () {

    console.log("reducer is adding location!");

    var newLocation = {
      name: action.name,
      address: action.address,
      image: action.image,
      votes: []
    };

    // the backend would normally do this, but since there is no true back end
    // for this app, find an unused Id and assign the new object it
    var newId;

    // push all the ids into an array.  TODO:  Use .map
    var usedIds = [];
    for (var j = 0; j < initialState.locations.length; j++) {
      let location = initialState.locations[j];
      usedIds.push(location.id);
    }

    var i = 0;
    while (usedIds.includes(i)) {
      i++;
    }
    newLocation.id = i;

    return {locations: [
        ...initialState.locations, newLocation
      ]};
  }

  if (reducer[action.type]) {
    return reducer[action.type]();
  } else {
    return {users:[]};
  }

}

export default locationReducer;
