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

 componentDidMount() {

   var self = this;
   var store = this.props.store;

   $.getJSON('/data.json').done(function (data) {
      // Not sure why, but the time it takes to resolve this promise is important somehow.
      // Without doing so, no results return.
      var data = JSON.parse(localStorage.getItem('VoteApp'));
      store.dispatch({type:'GET_LOCATIONS', locations: data.locations, date: data.date, time: data.time});
   });

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

   alert("Your location has been added!");
   // TODO: do this more elegantly by changing child state
   document.getElementById('name').value = '';
   document.getElementById('address').value = '';
   document.getElementById('image').value = '';

 }

 render() {
   return (<SuggestLocation
   addLocation={this.addLocation}
   />);
 }

}
