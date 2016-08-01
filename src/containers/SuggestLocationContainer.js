import React from 'react'
import {Link} from 'react-router'
//import {connect} from 'react-redux';
import * as actions from '../actions/';
import {bindActionCreators} from 'redux';
import * as types from '../constants/actionTypes';
import SuggestLocation from '../components/SuggestLocation';
import {ADD_LOCATION, ADD_VOTE, GET_LOCATIONS, SEED_LOCATIONS} from '../constants/actionTypes';

export default class SuggestLocationContainer extends React.Component {

 constructor() {
   super();

   this.addLocation = this.addLocation.bind(this);
 }

 addLocation() {

   console.log("adding location in suggestLocationContainer");

   var name = document.getElementById('name').value;
   var address = document.getElementById('address').value;
   var image = document.getElementById('image').value;

   var store = this.props.store;
   store.dispatch({
     type: ADD_LOCATION,
     name: name,
     address: address,
     image: image
   });

   // persist new state
   var state = store.getState();
   localStorage.setItem('VoteApp', JSON.stringify(state));

 }

 render() {
   return (<SuggestLocation
   addLocation={this.addLocation}
   />);
 }

}
