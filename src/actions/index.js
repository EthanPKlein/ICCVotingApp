import * as types from '../constants/actionTypes';

 export function getList(list) {
   return {type: types.GET_LOCATIONS, locations: list};
 }

 export function addLocation(location) {
   return {type: types.ADD_LOCATION, locations: location};
 }

 export function addVote(id, email) {
   return {type: types.ADD_VOTE, id: id, email: email};
 }
