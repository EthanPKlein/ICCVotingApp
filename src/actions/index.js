import * as types from '../constants/actionTypes';

export function getList(list) {
  return {type: types.GET_LIST, locations: list};
}

export function addLocation(location) {
  return {type: types.ADD_USER, locations: location};
}

export function upvocteLocation(location) {
  return {type: types.CREATE_USER, locations: location};
}
